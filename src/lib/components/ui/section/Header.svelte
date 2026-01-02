<script lang="ts">
	import { cn } from '$utils/utils';
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children: Snippet;
	}

	let { className, children }: Props = $props();
</script>

<div class={cn("relative flex h-20 items-center justify-start bg-yellow-accent px-4 py-2 sm:max-w-2/3", className)}>
	<!-- Title -->
	<h2 class="text-4xl sm:absolute sm:-top-8 sm:left-4 md:text-5xl lg:text-6xl">
		{@render children()}
	</h2>
</div>
