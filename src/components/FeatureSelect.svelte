<script lang="ts">
    import strings from "$data/Strings"
    import { filterState } from "$data/Stores";
</script>

<fieldset>
    <legend>Features</legend>
    {#each Object.entries($filterState.features) as [name, value]}
        <button id={name} class:selected="{value}"
            on:click|preventDefault={() => $filterState.features[name] = !$filterState.features[name]}>
            {strings[name]}
        </button>
    {/each}
</fieldset>

<style>

</style>