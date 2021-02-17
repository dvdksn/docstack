<script lang="ts">
    import ResetFilters from "$components/ResetFilters.svelte"
    import LanguageFilter from "$components/LanguageSelect.svelte"
    import FeatureSelect from "./FeatureSelect.svelte";

    let expanded = false;
    const toggleExpanded = () => expanded = !expanded;

    let form: HTMLElement;
</script>

<div class="filter-container">
    <button on:click={toggleExpanded} class:expanded>Filters</button>
    <div class="filters">
        <form bind:this="{form}" on:click|self={toggleExpanded} class:expanded>
            <LanguageFilter />
            <FeatureSelect />
            <ResetFilters />
        </form>
    </div>
</div>

<style>
    .filter-container {
        display: flex;
        flex-direction: column;
    }
    button {
        margin: 0 auto;
        padding: 1rem;
        border-radius: 1rem;
        font-size: 1rem;
        font-weight: 600;
        width: 100%;
        background: var(--light-purple);
        color: var(--purple);
        border: 1px solid var(--purple);
        border-style: solid;
    }
    form {
        margin-top: -2px;
        background: var(--light-purple);
        padding: 1em 2em;
        min-width: 250px;
        display: none;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        border: 1px solid var(--purple);
        border-style: none solid solid;
    }
    button.expanded {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-style: solid solid none;
    }
    form.expanded {
        display: flex;
        flex-direction: column;
    }
    .filters :global(button) {
        background: white;
        border: 1px solid var(--dark-gray);
        color: var(--dark-gray);
        margin: 0.5rem;
        padding: 0.7rem;
        min-width: 100px;
        border-radius: 30px;
    }
    .filters :global(.selected)  {
        background: var(--green);
        border: 1px solid var(--dark-green);
        border-width: 2px;
        color: var(--dark-green);
        font-weight: 500;
    }
    .filters :global(fieldset) {
        background: var(--white);
        border: 1px solid var(--purple);
        border-radius: 0.5rem;
        margin: 1rem;
        padding: 1rem;
    }
    .filters :global(legend) {
        background-color: var(--purple);
        color: var(--white);
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        margin: 0 auto;
        min-width: 100px;
    }
</style>