<script lang="ts">
	import * as Section from '$lib/components/ui/section';
	import HeroImage from '$img/me-and-family.avif';
	import Button from '$ui/Button.svelte';
</script>

<Section.Root id="hero" className="flex flex-col lg:flex-row items-center justify-center">
	<Section.Content className="flex flex-col sm:flex-row items-center justify-center sm:py-0 py-8">
		<div class="flex-1">
			<h1 class="mb-4 px-2 text-4xl leading-tight font-black sm:px-0 md:text-5xl">
				Gleb Kochergin
			</h1>
			<h2 class="mb-6 px-2 text-2xl font-light sm:px-0 md:text-3xl">
				AI-First Full-Stack Developer & Product Engineer
			</h2>
			<p class="mb-6 max-w-2xl px-2 text-base leading-relaxed sm:px-0 md:text-lg">
				I help startups and growing teams build <span class="font-bold">AI-driven products</span> —
				from fast MVPs to <span class="font-bold">production-ready systems</span> — combining modern AI
				technologies with solid engineering, DevOps, and product thinking.
			</p>
			<p class="mb-8 px-2 text-lg font-light sm:px-0 md:text-xl">
				<span class="font-bold">AI accelerates delivery.</span>
				<span class="font-light">Experience guarantees outcomes.</span>
			</p>
			<Button href="#contact" variant="base">Get in touch</Button>
		</div>

		<img src={HeroImage} alt="Me and Family" class="inset-0 mx-auto w-full max-w-md" />
	</Section.Content>
</Section.Root>
