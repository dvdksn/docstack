import { readable, writable, derived } from 'svelte/store'
import type { StackItem } from "$types/stack.type"
import type { Filters } from "$types/filters.type"
import strings from "$data/Strings"
import { allStacks, filterDefaults } from "$data/Config"

// Create filter store and instantiate default values
export const filterState = writable<Filters>(JSON.parse(filterDefaults))

// Initiate the full "initial" list of stacks
export const initialStacks = readable<StackItem[]>(null, set => {
    set(JSON.parse(allStacks))
    return () => {
        set(null)
    }
})

function filterByLanguage(items: StackItem[], lang: Filters["language"]) {
    // Compare the filter language selection with the language prop for each stack item
    switch (lang) {
        case "go":
            return items.filter(item => item.properties.language === strings["go"])
        case "js":
            return items.filter(item => item.properties.language === strings["js"])
        case "python":
            return items.filter(item => item.properties.language === strings["python"])
        case "other":
            return items.filter(item => 
                item.properties.language !== strings["go"]
                && item.properties.language !== strings["js"]
                && item.properties.language !== strings["python"])
        default:
            break
    }
    return items
}

function filterByFeature(items: StackItem[], featureState: Filters["features"]) {
    // Create array from selected feature names
    const selectedFeatures = Object.keys(featureState).filter(name => featureState[name]);
    // If a feature is selected:
    if (selectedFeatures.length > 0)
        return items.filter(item => {
            // Create array of all the features that the stack item supports
            const supportedFeatures = Object.keys(item.features).filter(feature => item.features[feature])
            // Initiate array for storing feature support status for the stack item
            let results: boolean[] = []
            // For each selected feature in the filter, evaluate if it supported by the stack item
            // and add it to the results list
            selectedFeatures.forEach(feature => results.push(supportedFeatures.includes(feature)))
            // Return true if all selected features in filter are supported,
            // else return false
            return results.every(value => value === true)
        })
    return items
}

export const derivedStacks = derived(
    [filterState, initialStacks],
    ([$filterState, $initialStacks]) => {
        // Get the language filter selection
        const langState = $filterState.language
        // Get the feature filter selection
        const featureState = $filterState.features
        // Filter the stack list based on filter selection
        return filterByFeature(filterByLanguage($initialStacks, langState), featureState)
            .sort((a, b) => {
                const first = a.name.toLowerCase()
                const last = b.name.toLowerCase()
                if (first < last) {
                    return -1
                }
                else if (first > last) {
                    return 1
                }
                return 0
            })
        }
)