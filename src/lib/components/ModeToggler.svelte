<script lang="ts">
	import BulbOffIcon from '$icons/bulb-off.svg';
	import BulbOnIcon from '$icons/bulb-on.svg';
	import { toggleMode } from 'mode-watcher';
	import type { Snippet } from 'svelte';
	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<button
	onclick={toggleMode}
	aria-label="Toggle light/dark mode"
	class="flex rounded-full border px-1 py-0.5 transition-all dark:border-orange-accent"
>
	<img
		src={BulbOffIcon}
		alt="Light mode icon"
		class="h-5 w-5 scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
	/>
	<img
		src={BulbOnIcon}
		alt="Dark mode icon"
		class="h-5 w-5 scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0 dark:text-orange-accent"
	/>

	<span class="sr-only">Toggle light/dark theme</span>
</button>

<style>
</style>
