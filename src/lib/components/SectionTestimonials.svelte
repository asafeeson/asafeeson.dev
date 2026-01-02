<script lang="ts">
	import { testimonials } from '$lib/testimonials';
	import * as Section from '$ui/section';
	import { onMount } from 'svelte';

	let currentIndex = 0;
	let isTransitioning = false;

	const goToSlide = (index: number) => {
		if (isTransitioning) return;
		currentIndex = index;
		isTransitioning = true;
		setTimeout(() => {
			isTransitioning = false;
		}, 300);
	};

	const previousSlide = () => {
		goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
	};

	const nextSlide = () => {
		goToSlide((currentIndex + 1) % testimonials.length);
	};
</script>

<Section.Root variant="none" className="py-16 md:py-20">
	<Section.Content className="max-w-[980px] flex-col">
		<!-- Carousel Container -->
		<div class="relative flex items-center justify-center gap-4 md:gap-8">
			<!-- Left Button -->
			<button
				on:click={previousSlide}
				disabled={isTransitioning}
				class="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-black text-white transition-opacity hover:opacity-70 disabled:opacity-50"
				aria-label="Previous testimonial"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<!-- Testimonial Slide -->
			<div class="min-h-[280px] flex-1 bg-gray-100 px-6 py-8 md:px-12 md:py-12">
				<div
					class="transition-opacity duration-300"
					class:opacity-0={isTransitioning}
					class:opacity-100={!isTransitioning}
				>
					<p class="mb-8 text-center text-base leading-relaxed text-gray-800 md:text-lg">
						"{testimonials[currentIndex].quote}"
					</p>
					<p class="text-center font-bold text-black">
						{testimonials[currentIndex].author}, {testimonials[currentIndex].location}
					</p>
				</div>
			</div>

			<!-- Right Button -->
			<button
				on:click={nextSlide}
				disabled={isTransitioning}
				class="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-black text-white transition-opacity hover:opacity-70 disabled:opacity-50"
				aria-label="Next testimonial"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>

		<!-- Dot Indicators -->
		<div class="mt-12 flex justify-center gap-3">
			{#each testimonials as _, index}
				<button
					on:click={() => goToSlide(index)}
					class="h-3 w-3 transition-colors"
					class:bg-yellow-accent={index === currentIndex}
					class:bg-black={index !== currentIndex}
					aria-label={`Go to testimonial ${index + 1}`}
					disabled={isTransitioning}
				></button>
			{/each}
		</div>
	</Section.Content>
</Section.Root>
