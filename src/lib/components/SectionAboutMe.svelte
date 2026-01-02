<script lang="ts">
	import * as Section from '$ui/section';
	import AboutImage from '$img/me-and-son.avif';
	import Button from '$ui/Button.svelte';
</script>

<Section.Root variant="none" className="relative py-16">
	<Section.Content className="flex-col">
		<div class="flex gap-0">
			<!-- Gray Content Block -->
			<div class="flex-1 bg-gray-100 px-8 py-12 md:px-12 md:py-16">
				<!-- Title -->
				<h2 class="mb-8 text-4xl md:text-5xl lg:text-6xl">
					About <span class="font-bold">Me</span>
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
				<Button href="#contact" variant="base">Get in Touch</Button>
			</div>

			<!-- Yellow Accent Bar -->
			<div class="w-16 bg-yellow-accent"></div>
		</div>
	</Section.Content>

	<!-- Right Image (Positioned on Section Root) -->
	<img
		src={AboutImage}
		alt="Gleb Kochergin with son"
		class="absolute top-0 right-0 hidden h-96 w-80 object-cover grayscale lg:block"
	/>
</Section.Root>
