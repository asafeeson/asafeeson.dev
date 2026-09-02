<script lang="ts">
	import { tick } from 'svelte';
	import { cn } from '$utils/utils';
	import Menu from './Menu.svelte';
	import ModeToggler from './ModeToggler.svelte';
	import AsafeesonLogo from './icons/AsafeesonLogo.svelte';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();

	let mobileMenuOpen = $state(false);
	let mobileMenu = $state<HTMLDialogElement | undefined>(undefined);
	let menuButton = $state<HTMLButtonElement | undefined>(undefined);

	function setMobileMenu(node: HTMLDialogElement) {
		mobileMenu = node;
		return () => {
			mobileMenu = undefined;
		};
	}

	function setMenuButton(node: HTMLButtonElement) {
		menuButton = node;
		return () => {
			menuButton = undefined;
		};
	}

	async function openMobileMenu() {
		mobileMenuOpen = true;
		await tick();
		mobileMenu?.focus();
	}

	function closeMobileMenu(restoreFocus = false) {
		mobileMenuOpen = false;

		if (restoreFocus) {
			void tick().then(() => menuButton?.focus());
		}
	}

	function toggleMobileMenu() {
		if (mobileMenuOpen) {
			closeMobileMenu(true);
			return;
		}

		void openMobileMenu();
	}

	function handleMobileMenuKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMobileMenu(true);
			return;
		}

		if (event.key !== 'Tab') return;

		const focusable =
			mobileMenu?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [];
		const first = focusable[0];
		const last = focusable[focusable.length - 1];

		if (!first || !last) return;

		if (
			event.shiftKey &&
			(document.activeElement === mobileMenu || document.activeElement === first)
		) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}
</script>

<header class={cn('bg-gray-100 py-6 dark:bg-dark-bg', className)}>
	<div class="container mx-auto flex items-center justify-between px-8 sm:px-0">
		<div class="flex items-center justify-between gap-4">
			<a
				href="/"
				class="h-12 w-12 shrink-0 overflow-hidden rounded-md transition-[border-radius] duration-200 hover:rounded-none"
			>
				<AsafeesonLogo class="h-full w-full object-contain" />
			</a>
			<span class="hidden text-sm sm:inline">Fast where possible. Careful where required.</span>
		</div>
		<div class="flex items-center justify-end">
			<div class="flex items-center gap-4">
				<nav class="hidden lg:block" aria-label="Primary navigation">
					<Menu />
				</nav>
				<ModeToggler className="hidden sm:flex" />
			</div>

			<button
				{@attach setMenuButton}
				class="flex size-11 items-center justify-center lg:hidden"
				onclick={toggleMobileMenu}
				aria-controls="mobile-navigation"
				aria-expanded={mobileMenuOpen}
				aria-label="Toggle mobile menu"
			>
				<svg
					class="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					{#if mobileMenuOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					{/if}
				</svg>
			</button>
		</div>

		{#if mobileMenuOpen}
			<dialog
				{@attach setMobileMenu}
				open
				id="mobile-navigation"
				aria-label="Mobile navigation"
				aria-modal="true"
				tabindex="-1"
				class="fixed inset-0 z-50 flex h-dvh min-h-dvh w-full max-w-none flex-col overflow-y-auto border-0 bg-gray-100 px-8 pt-[env(safe-area-inset-top)] pb-[calc(2.5rem+env(safe-area-inset-bottom))] lg:hidden dark:bg-dark-bg"
				onkeydown={handleMobileMenuKeydown}
			>
				<div class="flex items-center justify-end py-6">
					<button
						class="flex size-11 items-center justify-center"
						onclick={() => closeMobileMenu(true)}
						aria-label="Close mobile menu"
					>
						<svg
							class="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<nav class="mb-12 h-full" aria-label="Mobile navigation">
					<Menu onSelect={() => closeMobileMenu()} />
				</nav>
				<div class="flex justify-end">
					<ModeToggler />
				</div>
			</dialog>
		{/if}
	</div>
</header>
