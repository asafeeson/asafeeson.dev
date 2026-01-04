<script lang="ts">
	import Button from '$ui/Button.svelte';
	import * as Section from '$ui/section';
</script>

<Section.Root variant="colored" className="py-16 dark:bg-dark-bg">
	<Section.Content className="flex flex-col items-center justify-center text-center gap-8">
		<h2 class="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
			<span class="block">
				Let's Build Something
				<span class="inline-block bg-yellow-accent px-2 dark:text-black">That Matters</span>
			</span>
		</h2>
		<p class="max-w-1/2">
			If you’re looking for a partner who understands business, masters technology, and applies AI
			only where it adds real value — while delivering stable, practical, and technically sound
			solutions from MVPs to production-ready systems — let’s talk.
		</p>
		<Button href="#contact">Contact me</Button>
	</Section.Content>
</Section.Root>
