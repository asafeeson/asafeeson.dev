<script lang="ts">
	import Root from './ui/footer/Root.svelte';
	import Content from './ui/footer/Content.svelte';

	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ name: 'GitHub', url: 'https://github.com/asafeeson', icon: 'github' },
		{ name: 'Telegram', url: 'https://t.me/gkochergin', icon: 'telegram' },
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/asafeeson', icon: 'linkedin' },
		{ name: 'Email', url: 'mailto:hello@asafeeson.dev', icon: 'email' }
	];

	const navLinks = [
		{ name: 'About', href: '#aboutme' },
		{ name: 'What I do', href: '#whatido' },
		{ name: 'How I do', href: '#howido' },
		{ name: 'Services', href: '#services' },
		{ name: 'Contact', href: '#contact' }
	];
</script>

<Root>
	<Content>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- About Section -->
			<div>
				<h3 class="mb-4 text-lg font-semibold text-white">Gleb Kochergin</h3>
				<p class="text-sm">
					Full-Stack Developer & AI Engineer specializing in web and mobile applications, AI-powered
					solutions, and consulting services.
				</p>
			</div>

			<!-- Navigation Links -->
			<div>
				<h3 class="mb-4 text-lg font-semibold text-white">Quick Links</h3>
				<nav>
					<ul class="space-y-2">
						{#each navLinks as link}
							<li>
								<a
									href={link.href}
									class="text-sm transition-colors hover:text-white hover:underline"
								>
									{link.name}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>

			<!-- Social Links -->
			<div>
				<h3 class="mb-4 text-lg font-semibold text-white">Connect</h3>
				<div class="flex gap-4">
					{#each socialLinks as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class="transition-colors hover:text-white"
							aria-label={social.name}
						>
							{#if social.icon === 'github'}
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
									/>
								</svg>
							{:else if social.icon === 'telegram'}
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
									/>
								</svg>
							{:else if social.icon === 'linkedin'}
								<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
									/>
								</svg>
							{:else if social.icon === 'email'}
								<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							{/if}
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
			<p>
				© 1985-{currentYear} Gleb Kochergin aka Asafeeson. Created with
				<span class="text-red-500">❤</span> for myself and my family.
			</p>
		</div>
	</Content>
</Root>
