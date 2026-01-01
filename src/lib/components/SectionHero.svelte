<script lang="ts">
	import * as Section from '$lib/components/ui/section';
	import HeroImage from '$img/me-and-family.avif';
</script>

<Section.Root id="hero" className="flex flex-col lg:flex-row items-center justify-center">
	<Section.Content className="flex flex-col sm:flex-row items-center justify-center sm:py-0 py-8">
		<h1 class="text-4xl leading-tight md:text-6xl sm:px-0 px-2">
			<span class="inline-block">
				<span class="font-black">Hi!</span>
				<span class="ml-2 font-light">I'm a</span>
				<span class="bg-yellow-accent px-2 font-black">full-stack</span>
			</span>
			<span class="inline-block">
				<span class="font-black">developer</span>
				<span class="ml-2 font-light">(not only)</span>
			</span>
			<span class="inline-block font-light">specializing in developing</span>
			<span class="inline-block">
				<span class="font-black">AI</span><span class="font-light">,</span>
				<span class="ml-2 font-black">web</span>
				<span class="ml-2 font-light">and</span>
				<span class="ml-2 font-black">mobile</span>
				<span class="font-light">applications</span>
			</span>
		</h1>
		<img src={HeroImage} alt="Me and Family" class="inset-0 mx-auto w-full max-w-md" />
	</Section.Content>
</Section.Root>
