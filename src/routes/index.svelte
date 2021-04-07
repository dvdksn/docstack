<script lang="ts">
  import { onMount } from "svelte";
  import Filters from "$lib/Filters.svelte";
  import Card from "$lib/Card.svelte";
  import type { StackItem } from "$types/stack.type";
  import { initialStacks, derivedStacks } from "../lib/cfg/Stores";
  import { getWithExpiry, setWithExpiry } from "../lib/cfg/Utils";

  onMount(async () => {
    if (!getWithExpiry("stacklist")) {
      const response = await fetch("/.netlify/functions/mongo");

      if (!response.ok) {
        throw new Error("Database request failed.");
      }

      const payload: StackItem[] = await response.json();
      setWithExpiry("stacklist", payload, 300000);
    }

    const stackList = JSON.parse(localStorage.getItem("stacklist"));

    initialStacks.update(() => stackList.value);
  });
</script>

<main>
  <h1>docstack</h1>
  <p>
    A collection of open-source frameworks and themes for documentation
    projects.
  </p>

  <Filters />
  <div class="cards">
    {#if $initialStacks.length === 0}
      <div class="placeholder loading">
        <h2>Loading...</h2>
      </div>
    {:else if $derivedStacks.length === 0}
      <div class="placeholder">
        <h2>No match for the current filter selection.</h2>
      </div>
    {:else}
      {#each $derivedStacks as stack}
        <Card {stack} />
      {/each}
    {/if}
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1rem;
    margin: 0 15vw 0 15vw;
    display: grid;
    grid-template-columns: 1fr;
    place-items: center stretch;
    grid-gap: 1rem;
  }
  h1 {
    color: var(--black);
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 4rem auto 0;
  }
  @media (max-width: 700px) {
    main {
      margin: 10px;
      padding: 0;
    }
    h1 {
      font-size: 10vw;
    }
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
    justify-content: center;
  }
  .placeholder {
    margin-top: 1rem;
    color: var(--purple);
    grid-column: 1 / -1;
  }
  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }
    40% {
      transform: translateY(40px);
    }
    80%,
    100% {
      transform: translateY(0px);
    }
  }
  .loading h2 {
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
</style>
