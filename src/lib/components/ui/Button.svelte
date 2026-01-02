<script lang="ts">
	import { cn } from '$utils/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAnchorAttributes & {
		href: string;
		children?: Snippet;
		className?: string;
		variant?: 'base' | 'inverse';
	};
	let { children, href, variant = 'base', className, ...restProps }: Props = $props();
</script>

<a
	{href}
	class={cn(variant === 'base' && 'btn', variant === 'inverse' && 'btn-inverse', className)}
	{...restProps}
>
	{@render children?.()}
</a>

<style>
</style>
