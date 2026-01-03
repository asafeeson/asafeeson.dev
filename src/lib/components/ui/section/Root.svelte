<script lang="ts">
	import { cn } from '$utils/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLElement> & {
		variant?: 'colored' | 'none';
		children: Snippet;
		className?: string;
	};

	let { children, variant = 'none', className, ...restProps }: Props = $props();
</script>

<section class={cn(variant === 'colored' && 'bg-light-gray dark:bg-dark-bg', className)} {...restProps}>
		{@render children()}
</section>
