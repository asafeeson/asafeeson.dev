<script lang="ts">
	import { cn } from '$utils/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLElement> & {
		children: Snippet;
		className?: string;
	};

	let { children, className, ...restProps }: Props = $props();
</script>

<div class={cn('container mx-auto', className)} {...restProps}>
	{@render children()}
</div>
