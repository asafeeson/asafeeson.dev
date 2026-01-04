<script lang="ts">
	import BulbOffIcon from '$icons/bulb-off.svg';
	import BulbOnIcon from '$icons/bulb-on.svg';
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
		'flex rounded-full border border-black/50 px-1 py-0.5 transition-all active:scale-95 dark:border-orange-accent',
		className
	)}
>
	<BulbOff class="h-5 w-5 scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90 text-black/60" />
	<BulbOn
		class="h-5 w-5 scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0 dark:text-orange-accent"
	/>
	<span class="sr-only">Toggle light/dark theme</span>
</button>

<style>
</style>
