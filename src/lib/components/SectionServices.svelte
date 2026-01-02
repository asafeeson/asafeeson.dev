<script lang="ts">
	import * as Section from '$ui/section';

	const services = [
		{
			title: 'Web Applications',
			description:
				'Custom web services tailored to your business — from CRMs and internal tools to AI-powered platforms. I focus on clarity, performance, and long-term maintainability.',
			icon: 'web'
		},
		{
			title: 'Mobile Applications',
			description:
				'Cross-platform mobile apps for iOS and Android. Fast, reliable, and tightly integrated with backend and AI services.',
			icon: 'mobile'
		},
		{
			title: 'Chatbots & AI Assistants',
			description:
				'Telegram bots and AI assistants — from simple automation to payment-enabled, data-aware systems.',
			icon: 'bot'
		},
		{
			title: 'API Development',
			description:
				'Robust, scalable APIs: REST, streaming, real-time integrations. Designed for growth and easy integration.',
			icon: 'api'
		},
		{
			title: 'AI & Computer Vision',
			description:
				'AI solutions that work with real data: document processing, image & video analysis, automation pipelines, business-focused ML solutions.',
			icon: 'ai'
		},
		{
			title: 'Consulting & Coaching',
			description:
				'Strategic sessions for founders and teams: architecture & AI strategy, MVP planning, technical decision support, team guidance.',
			icon: 'coach'
		}
	];
</script>

<Section.Root variant="none" className="py-16">
	<Section.Content className="max-w-[980px] flex-col">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each services as service}
				<div class="flex flex-col gap-4">
					<!-- Icon -->
					<div class="flex h-12 w-12 items-center justify-center">
						<svg class="h-8 w-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
							/>
						</svg>
					</div>

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
