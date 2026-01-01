<script lang="ts">
	import * as Section from '$ui/section';

	const services = [
		{
			title: 'Web Apps',
			description:
				"Looking for a reliable developer for your ideas? I'm here to help! As a Full Stack Developer, I create solutions tailored to your unique needs. From payment systems to CRM, WMS, corporate chats, I can create any service you need. I analyze your needs and tasks to create a web application that helps you achieve your goals.",
			icon: 'web'
		},
		{
			title: 'Mobile Apps',
			description:
				'Looking for a full stack developer who can create high-performing mobile apps? Look no further. With expertise in both iOS and Android platforms, I can create apps that work seamlessly across devices. Utilizing cross-platform frameworks, your mobile app will be user-friendly, fast, and engaging.',
			icon: 'mobile'
		},
		{
			title: 'Coach and consulting',
			description:
				'My consulting and coaching services are designed to help teams of small and medium sizes achieve their goals. With a focus on strategic sessions, I use my experience to provide expert guidance and support to you or your team. Let\'s work together to create a plan that delivers results.',
			icon: 'coach'
		},
		{
			title: 'Chat Bots',
			description:
				'I specialize in chat bot development using the Telegram platform. Whether you need a simple bot or a more complex one that can handle payments and user interactions, I have the skills and expertise to bring your vision to life.',
			icon: 'bot'
		},
		{
			title: 'API Development',
			description:
				'I create robust and scalable APIs tailored to your business needs. Whether you need REST, GraphQL, or real-time APIs, I design solutions that integrate seamlessly with your existing systems and support your growth.',
			icon: 'api'
		},
		{
			title: 'AI & ML Solutions',
			description:
				'Transform your business with AI-powered solutions. I specialize in computer vision, machine learning models, and intelligent automation that drive efficiency and unlock new opportunities for your organization.',
			icon: 'ai'
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
