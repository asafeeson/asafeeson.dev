<script lang="ts">
	import { cn } from '$utils/utils';
	import Menu from './Menu.svelte';
	import Favicon from '$assets/favicon.svg';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<header class={cn('bg-gray-100 py-6', className)}>
	<div class="container mx-auto flex items-center justify-between px-8 sm:px-0">
		<!-- Logo/Brand Section -->
		<div class="flex items-center justify-between gap-4">
			<a href="/" class="h-12 w-12 overflow-hidden rounded-md transition-all hover:rounded-none"
				><img src={Favicon} alt="Asafeeson.dev" srcset="" class="h-full w-full object-contain" /></a
			>
		</div>
		<!-- Desktop Navigation -->
		<div class="flex items-center justify-end">
			<nav class="hidden lg:block">
				<Menu />
			</nav>

			<!-- Mobile Menu Button -->
			<button
				class="lg:hidden"
				onclick={toggleMobileMenu}
				aria-label="Toggle mobile menu"
				aria-expanded={mobileMenuOpen}
			>
				<svg
					class="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					{#if mobileMenuOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					{/if}
				</svg>
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<nav class="mt-4 lg:hidden">
				<Menu />
			</nav>
		{/if}
	</div>
</header>
