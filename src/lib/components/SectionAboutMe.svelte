<script lang="ts">
	import * as Section from '$ui/section';
	import AboutImage from '$img/me-and-son.avif';
</script>

<Section.Root variant="none" className="relative py-16">
	<Section.Content className="max-w-[980px] flex-col">
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
						Hello! I'm a full-stack developer with over <strong>13 years of professional experience</strong
						>, 3 of which are dedicated to development. My journey has been diverse and enriching,
						having worn the hats of a designer, marketer, project manager,
						<strong>business analyst</strong>, data analyst,
						<strong>product owner</strong>, manager,
						<strong>startup leader</strong>, <strong>coach</strong>, business owner and finally, a
						<strong>full-stack developer</strong>. This unique blend of experiences fuels my passion
						for creating products from scratch and seeing them come to life.
					</p>

					<p>
						My <strong>broad perspective</strong> allows me to truly understand my clients' needs, not
						just listen, but <strong>hear</strong> them, <strong>ask</strong> the right
						<strong>questions</strong>, and translate <strong>business</strong> language
						<strong>into development</strong> language. This ensures the <strong>final product</strong>
						is precisely what's needed to <strong>solve</strong> the given <strong>tasks</strong>.
						When you <strong>work with me</strong>, you're not just getting a full-stack developer;
						<strong>you're gaining a team</strong> that listens, guides, helps, finds solutions,
						advises, enhances efficiency, optimizes costs, and designs.
					</p>
				</div>

				<!-- CTA Button -->
				<a
					href="#contact"
					class="inline-block border-2 border-black px-6 py-3 font-medium transition-colors hover:bg-black hover:text-white"
				>
					Get in Touch
				</a>
			</div>

			<!-- Yellow Accent Bar -->
			<div class="w-16 bg-yellow-accent"></div>
		</div>
	</Section.Content>

	<!-- Right Image (Positioned on Section Root) -->
	<img
		src={AboutImage}
		alt="Gleb Kochergin with son"
		class="absolute right-0 top-0 h-96 w-80 object-cover grayscale hidden lg:block"
	/>
</Section.Root>



