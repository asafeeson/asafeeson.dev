<script lang="ts">
	import { cn } from '$utils/utils';
	import { toggleMode } from 'mode-watcher';
	import BulbOff from './icons/BulbOff.svelte';
	import BulbOn from './icons/BulbOn.svelte';

	interface Props {
		className?: string;
	}

	let { className }: Props = $props();
</script>

<button
	onclick={toggleMode}
	aria-label="Toggle light/dark mode"
	class={cn(
		'flex min-h-11 min-w-11 items-center justify-center rounded-full border border-black/50 px-1 transition-transform duration-150 active:scale-95 dark:border-orange-accent',
		className
	)}
>
	<BulbOff
		class="h-5 w-5 scale-100 rotate-0 text-black/60 transition-[opacity,transform] duration-200 dark:scale-0 dark:-rotate-90 dark:opacity-0"
	/>
	<BulbOn
		class="h-5 w-5 scale-0 rotate-90 opacity-0 transition-[opacity,transform] duration-200 dark:scale-100 dark:rotate-0 dark:text-orange-accent dark:opacity-100"
	/>
	<span class="sr-only">Toggle light/dark theme</span>
</button>
