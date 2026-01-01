<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		author?: string;
		title?: string;
		description?: string;
		keywords?: string;
		ogImage?: string;
		ogType?: string;
		twitterCard?: string;
		canonicalUrl?: string;
		robots?: string;
		jsonLd?: object | object[];
		children?: Snippet;
	}

	let {
		author,
		title,
		description,
		keywords,
		ogImage,
		ogType = 'website',
		twitterCard = 'summary',
		canonicalUrl,
		robots = 'index,follow',
		jsonLd,
		children
	}: Props = $props();
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	{#if title}
		<title>{title}</title>
	{/if}

	{#if description}
		<meta name="description" content={description} />
	{/if}

	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}

	{#if author}
		<meta name="author" content={author} />
	{/if}

	<meta name="robots" content={robots} />

	{#if canonicalUrl}
		<link rel="canonical" href={canonicalUrl} />
	{/if}

	<!-- Open Graph -->
	{#if title}
		<meta property="og:title" content={title} />
	{/if}
	{#if description}
		<meta property="og:description" content={description} />
	{/if}
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
	{/if}
	<meta property="og:type" content={ogType} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content={twitterCard} />
	{#if title}
		<meta name="twitter:title" content={title} />
	{/if}
	{#if description}
		<meta name="twitter:description" content={description} />
	{/if}
	{#if ogImage}
		<meta name="twitter:image" content={ogImage} />
	{/if}

	<!-- JSON-LD Structured Data -->
	{#if jsonLd}
		{#if Array.isArray(jsonLd)}
			{#each jsonLd as schema}
				<script type="application/ld+json">{{JSON.stringify(schema)}}</script>
			{/each}
		{:else}
			<script type="application/ld+json">{{JSON.stringify(jsonLd)}}</script>
		{/if}
	{/if}

	{@render children?.()}
</svelte:head>
