<script lang="ts">
    import { filterState } from "$data/Stores"
    import { filterDefaults } from "$data/Config";
</script>

<button class="reset"
    on:click|preventDefault={() => filterState.set(JSON.parse(JSON.stringify(filterDefaults)))}>
    Reset Filters
</button>

<style>
    button.reset {
        background: var(--red);
        color: var(--white);
        margin: 0.5rem;
        padding: 0.7rem;
        min-width: 100px;
        border-radius: 30px;
        border: 2px solid var(--red);
        font-weight: 600;
        max-width: max-content;
        align-self: center;
    }
</style>