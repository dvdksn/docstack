<script lang="ts">
    import ResetFilters from "$components/ResetFilters.svelte"
    import LanguageFilter from "$components/LanguageSelect.svelte"
    import FeatureSelect from "./FeatureSelect.svelte";
    let expanded = false;
</script>

<div class="filter-container">
    <button on:click={() => expanded = !expanded} class:expanded>Filters</button>
    <div class="filters">
        <form class:expanded>
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
        padding: 1rem;
        border-radius: 1rem;
        font-size: 1rem;
        max-width: max-content;
        background: var(--light-gray);
        box-shadow: var(--shadow);
        color: var(--black);
        border: none;
    }
    form {
        margin-top: -2px;
        background: var(--light-gray);
        box-shadow: var(--shadow);
        padding: 1em 2em;
        min-width: 250px;
        display: none;
    }
    button.expanded {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    form.expanded {
        display: flex;
        flex-direction: column;
    }
    .filters :global(button) {
        background: white;
        border: 1px solid var(--gray);
        color: var(--gray);
        margin: 0.5rem;
        padding: 1rem;
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
        background: white;
        border: 1px solid var(--gray);
        margin: 1rem;
        padding: 1rem;
    }
</style>