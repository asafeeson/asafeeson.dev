<script lang="ts">
	import Button from '$ui/Button.svelte';
	import * as Section from '$ui/section';
</script>

<Section.Root variant="none" className="bg-black py-16 md:py-20">
	<Section.Content className="flex flex-col items-center justify-center">
		<!-- Description Text -->
		<div class="mb-8 max-w-2/3">
			<p class="text-center text-lg leading-relaxed text-white md:text-xl lg:text-2xl">
				If you’re looking for a partner who <span class="font-bold"
					>understands business, masters technology,</span
				>
				and
				<span class="bg-yellow-accent px-2 py-1 whitespace-nowrap text-black"
					>uses AI where it adds real value</span
				>, delivering reliable and practical results — let’s talk.
			</p>
		</div>

		<!-- CTA Button -->
		<Button href="mailto:asafeeson@outlook.com" variant="inverse">Get In Touch</Button>
	</Section.Content>
</Section.Root>
