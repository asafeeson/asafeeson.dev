<script lang="ts">
	import * as Section from '$ui/section';
	import ApiIcon from '$icons/dashboard.svg';
	import HelpQuestionIcon from '$icons/help-question.svg';
	import EyeIcon from '$icons/eye.svg';
	import CompassIcon from '$icons/compass.svg';
	import HTMLIcon from '$icons/html.svg';
	import MobileIcon from '$icons/mobile.svg';

	const services = [
		{
			title: 'Web Applications',
			description:
				'Custom web services tailored to your business — from CRMs and internal tools to AI-powered platforms. I focus on clarity, performance, and long-term maintainability.',
			icon: HTMLIcon
		},
		{
			title: 'Mobile Applications',
			description:
				'Cross-platform mobile apps for iOS and Android. Fast, reliable, and tightly integrated with backend and AI services.',
			icon: MobileIcon
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
			icon: ApiIcon
		},
		{
			title: 'AI & Computer Vision',
			description:
				'AI solutions that work with real data: document processing, image & video analysis, automation pipelines, business-focused ML solutions.',
			icon: EyeIcon
		},
		{
			title: 'Consulting & Coaching',
			description:
				'Strategic sessions for founders and teams: architecture & AI strategy, MVP planning, technical decision support, team guidance.',
			icon: HelpQuestionIcon
		}
	];
</script>

<Section.Root variant="none" className="py-16">
	<Section.Content className="max-w-[980px] flex-col">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each services as service}
				<div class="flex flex-col gap-2">
					<!-- Icon -->
					<img src={service.icon} alt={service.title + " icon"} aria-hidden="true" class="h-8 w-8"/>

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
