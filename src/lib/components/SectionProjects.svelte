<script lang="ts">
	import Button from '$ui/Button.svelte';
	import * as Section from '$ui/section';
	import BTLBotLogo from '$img/btlbot-logo.avif';

	const projects = [
		{
			name: 'BTLbot',
			tagline:
				'Platform for managing BTL campaigns using invocies, fiscal checks, and any other type of proof-of-visit',
			description: [
				'BTLbot is a production-grade platform combining: AI & computer vision, data processing, automation, user-friendly interfaces. It helps businesses manage interactions with: end customers, promoters, mystery shoppers, sales representatives.',
				'Result: improved operational efficiency, better data accuracy, measurable marketing outcomes.'
			],
			url: 'https://btlbot.kz',
			logoStyle: 'bg-gradient-to-r from-pink-500 to-orange-400'
		}
	];
</script>

<Section.Root variant="colored" className="py-16 " id="projects">
	<!-- Header -->
	<Section.Header className="mb-12">
		My <span class="font-black">Projects</span>
	</Section.Header>
	<Section.Content className="flex flex-col gap-12">
		<!-- Projects List -->
		{#each projects as project}
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
				<!-- Left Column: Project Name & Tagline -->
				<div class="flex flex-col items-start gap-4">
					<img src={BTLBotLogo} alt="{project.name} logo" class="h-14 object-contain" />
					<!-- <h3
						class={`${project.logoStyle} bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl`}
					>
						{project.name}
					</h3> -->
					<p class="text-xl leading-relaxed font-light md:text-xl lg:text-2xl">
						{project.tagline}
					</p>
				</div>

				<!-- Right Column: Description & CTA -->
				<div class="flex flex-col gap-3">
					{#each project.description as paragraph}
						<p class="text-base leading-relaxed">
							{paragraph}
						</p>
					{/each}

					<div class="mt-4">
						<Button
							href={project.url}
							className="mt-4"
							variant="base"
							target="_blank"
							rel="noopener noreferrer"
						>
							Go to website
						</Button>
					</div>
				</div>
			</div>
		{/each}
	</Section.Content>
</Section.Root>
