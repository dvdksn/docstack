<script lang="ts">
  import { languageOptions } from "./cfg/Filters";
  import { filterState, derivedStacks } from "./cfg/Stores";
  import strings from "./cfg/Strings";
  let selected = false;
</script>

<fieldset class="lang">
  <legend>Language</legend>
  {#each languageOptions as lang}
    <button
      id={lang}
      class:selected={$filterState.language === lang}
      on:click|preventDefault={() => {
        $filterState.language = lang;
      }}
    >
      {strings[lang]}
    </button>
  {/each}
</fieldset>

<style>
</style>
