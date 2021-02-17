<script lang="ts">
    import Filters from "$components/Filters.svelte";
	import Card from "$components/Card.svelte";
	import { derivedStacks } from "$data/Stores";

</script>

<main>
	<h1>docstack</h1>
	<p>A collection of open-source frameworks and themes for documentation projects.</p>

	<Filters />
	<div class="cards">
		{#each $derivedStacks as stack}
			<Card {stack} />
		{/each}
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
</style>