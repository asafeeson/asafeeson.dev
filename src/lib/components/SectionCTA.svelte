<script lang="ts">
	import Button from '$ui/Button.svelte';
	import * as Section from '$ui/section';
</script>

<Section.Root variant="colored" className="py-16">
	<Section.Content className="flex-col items-center justify-center text-center">
		<h2 class="mb-8 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
			<span class="block">
				Turn Your
				<span class="inline-block bg-yellow-accent px-2">Ideas into Real-Life</span>
			</span>
			<span class="block">Applications with My Expertise!</span>
		</h2>
		<Button href="#contact">Contact me</Button>
	</Section.Content>
</Section.Root>
