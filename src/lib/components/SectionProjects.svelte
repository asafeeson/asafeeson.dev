<script lang="ts">
	import * as Section from '$ui/section';

	const projects = [
		{
			name: 'BTLbot',
			tagline: 'Platform for managing BTL actions and promotions based on fiscal checks',
			description: [
				"BTLbot is a powerful platform where AI, computer vision, data processing, user-friendly interfaces, and automation come together to drive business success. It's more than just a chatbot—it's a comprehensive solution designed to streamline and optimize BTL campaigns across both offline and digital channels.",
				'The platform automates tracking, monitoring, and interaction with key stakeholders, including end customers, promoters, mystery shoppers, and sales representatives. By leveraging advanced technologies, BTLbot enhances operational efficiency, improves data accuracy, and provides actionable insights, making BTL marketing more effective and measurable.'
			],
			url: 'https://btlbot.kz',
			logoStyle: 'bg-gradient-to-r from-pink-500 to-orange-400'
		}
	];
</script>

<Section.Root variant="none" className="py-16">
	<Section.Content className="flex-col gap-12">
		<!-- Header -->
		<h2 class="bg-yellow-accent px-4 py-2 text-4xl md:text-5xl lg:text-6xl">
			My <span class="font-bold">Projects</span>
		</h2>

		<!-- Projects List -->
		{#each projects as project}
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
				<!-- Left Column: Project Name & Tagline -->
				<div class="flex flex-col gap-4">
					<h3
						class={`${project.logoStyle} bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl`}
					>
						{project.name}
					</h3>
					<p class="text-xl font-light leading-relaxed md:text-2xl lg:text-3xl">
						{project.tagline}
					</p>
				</div>

				<!-- Right Column: Description & CTA -->
				<div class="flex flex-col gap-6">
					{#each project.description as paragraph}
						<p class="text-base leading-relaxed">
							{paragraph}
						</p>
					{/each}

					<div class="mt-4">
						<a
							href={project.url}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-block border-2 border-black px-6 py-2 font-medium transition-colors hover:bg-black hover:text-white"
						>
							Go to website
						</a>
					</div>
				</div>
			</div>
		{/each}
	</Section.Content>
</Section.Root>
