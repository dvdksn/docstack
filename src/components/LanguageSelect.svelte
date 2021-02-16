<script lang="ts">
    import { languageOptions } from "$data/Config"
    import { filterState, derivedStacks } from "$data/Stores"
    import strings from "$data/Strings"
    let selected = false;
</script>

<fieldset class="lang">
    <legend>Language</legend>
    {#each languageOptions as lang}
        <button id="{lang}" class:selected="{$filterState.language === lang}"
            on:click|preventDefault={() => {
                $filterState.language = lang;
            }}>
            {strings[lang]}
        </button>
    {/each}
</fieldset>

<style>
</style>