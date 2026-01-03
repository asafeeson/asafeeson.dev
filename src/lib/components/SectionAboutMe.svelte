<script lang="ts">
	import * as Section from '$ui/section';
	import AboutImage from '$img/me-and-son.avif';
	import Button from '$ui/Button.svelte';
</script>

<Section.Root variant="none" className="py-16 relative">
	<Section.Content className="flex-cols ">
		<div class="flex items-center justify-center">
			<!-- Gray Content Block -->
			<div
				class="relative flex flex-1 flex-col bg-gray-100 dark:bg-black px-8 py-12 sm:mx-0 sm:max-w-2/3 md:px-12 md:py-16"
			>
				<!-- Title -->
				<h2 class="mb-8 text-4xl md:text-5xl lg:text-6xl">
					About <span class="font-black">Me</span>
				</h2>

				<!-- Description -->
				<div class="mb-8 space-y-4 text-base leading-relaxed">
					<p>
						I'm a full-stack developer and product engineer with <strong
							>14+ years of professional experience</strong
						>, including <strong>4+ years of hands-on software development</strong>.
					</p>

					<p>
						My background spans <strong
							>design, marketing, project management, business analysis, product ownership, team
							leadership, and entrepreneurship</strong
						>. This allows me to see products holistically — not just how to build them, but
						<strong>why</strong>, <strong>for whom</strong>, and
						<strong>what really matters</strong>.
					</p>

					<p>
						Today, I focus on <strong>AI-first products</strong>, where artificial intelligence is a
						<strong>core part of the system</strong>, not an afterthought.
					</p>

					<p>When you work with me, you get:</p>
					<ul class="list-inside list-disc space-y-2 pl-4">
						<li>an engineer who understands business</li>
						<li>a product-minded developer who asks the right questions</li>
						<li>a reliable technical partner who takes ownership</li>
					</ul>
				</div>

				<!-- CTA Button -->
				<div>
					<Button href="#contact" variant="base">Get in Touch</Button>
				</div>
				<!-- Yellow Accent Bar -->
				<div class="absolute hidden sm:block top-8 -right-10 h-full w-16 bg-yellow-accent sm:-right-8"></div>
			</div>
		</div>
	</Section.Content>

	<!-- Right Image (Positioned on Section Root) -->
	<img
		src={AboutImage}
		alt="Gleb Kochergin with son"
		class="absolute top-0 right-0 -z-1 hidden h-96 w-80 object-cover grayscale sm:block"
	/>
</Section.Root>
