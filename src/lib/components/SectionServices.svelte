<script lang="ts">
	import AI from './icons/AI.svelte';
	import ChatAudio from './icons/ChatAudio.svelte';
	import Dashboard from './icons/Dashboard.svelte';
	import HelpQuestion from './icons/HelpQuestion.svelte';
	import HTML from './icons/HTML.svelte';
	import Mobile from './icons/Mobile.svelte';
	import * as Section from '$ui/section';

	const services = [
		{
			title: 'Web Applications',
			description:
				'Custom web services tailored to your business — from CRMs and internal tools to AI-powered platforms. I focus on clarity, performance, and long-term maintainability.',
			icon: HTML
		},
		{
			title: 'Mobile Applications',
			description:
				'Cross-platform mobile apps for iOS and Android. Fast, reliable, and tightly integrated with backend and AI services.',
			icon: Mobile
		},
		{
			title: 'Chatbots & AI Assistants',
			description:
				'Telegram bots and AI assistants — from simple automation to payment-enabled, data-aware systems.',
			icon: ChatAudio
		},
		{
			title: 'API Development',
			description:
				'Robust, scalable APIs: REST, streaming, real-time integrations. Designed for growth and easy integration.',
			icon: Dashboard
		},
		{
			title: 'AI & Computer Vision',
			description:
				'AI solutions that work with real data: document processing, image & video analysis, automation pipelines, business-focused ML solutions.',
			icon: AI
		},
		{
			title: 'Consulting & Coaching',
			description:
				'Strategic sessions for founders and teams: architecture & AI strategy, MVP planning, technical decision support, team guidance.',
			icon: HelpQuestion
		}
	];
</script>

<Section.Root variant="none" className="py-16" id="services">
	<Section.Content class="mx-auto max-w-2/3">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each services as service}
				<div class="flex flex-col gap-2">
					<!-- Icon -->
					<svelte:component this={service.icon} class="h-8 w-8 text-orange-accent" />

					<!-- Title -->
					<h3 class="text-2xl font-light">
						{service.title}
					</h3>

					<!-- Description -->
					<p class="text-base leading-relaxed">
						{service.description}
					</p>
				</div>
			{/each}
		</div>
	</Section.Content>
</Section.Root>
