<script lang="ts">
  import type { StackItem } from "$types/stack.type";
  import strings from "./cfg/Strings";
  export let stack: StackItem;
</script>

<div class="card">
  <div class="header">
    <h2 class="name">{stack.name}</h2>
    <p class="description">{stack.description}</p>
  </div>
  <div class="properties">
    <dl>
      <dt>Markup</dt>
      <dd>
        {stack.properties.markup.join(", ")}
      </dd>
      <dt>Templates</dt>
      <dd>
        {stack.properties.templates.join(", ")}
      </dd>
      <dt>Language</dt>
      <dd>{stack.properties.language}</dd>
      <dt>Framework</dt>
      {#if stack.properties.framework}
        <dd>{stack.properties.framework}</dd>
      {:else}
        <dd>None</dd>
      {/if}
      <dl />
    </dl>
  </div>
  <div class="features">
    <dl>
      <dt>Features</dt>
      {#each Object.entries(stack.features) as [entry, value]}
        <dd>
          <span>{value ? `\u{2705}` : `\u{274C}`}</span>
          <span>{strings[entry]}</span>
        </dd>
      {/each}
    </dl>
  </div>
  <div class="developer">
    <dl>
      <dt>Developer</dt>
      <dd>{stack.developer.name}</dd>
      <dt>License</dt>
      <dd>{stack.developer.license}</dd>
      <dt>Website</dt>
      <dd>
        <a
          href={stack.developer.url}
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          {stack.developer.url.replace(/^http?\w+:\/\/|www.|\/$/g, "")}
        </a>
      </dd>
    </dl>
  </div>
</div>

<style>
  .card {
    display: grid;
    background: var(--light-gray);
    box-shadow: var(--shadow);
    border-radius: 5px;
    padding: 0.5rem;
    overflow-wrap: anywhere;
  }
  h2 {
    text-transform: uppercase;
  }
  dl {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 0.5rem;
  }
  dt {
    grid-column: 1;
    justify-self: end;
  }
  dt::after {
    content: ": ";
  }
  dd {
    grid-column: 2;
    justify-self: start;
    margin-left: 0.5rem;
    text-align: left;
  }
  a {
    color: var(--black);
  }
</style>
