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
	<Section.Content className="flex-col">
		<!-- Carousel Container -->
		<div class="relative flex items-center justify-center gap-4 md:gap-8">
			<!-- Left Button -->
			<button
				onclick={previousSlide}
				disabled={isTransitioning}
				class="flex h-10 w-10 shrink-0 items-center justify-center bg-black text-white transition-all hover:opacity-70 disabled:opacity-50 dark:border dark:border-white"
				aria-label="Previous testimonial"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width={2}
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>

			<!-- Testimonial Slide -->
			<div
				class="flex min-h-60 lg:max-w-1/2 flex-1 items-center justify-center bg-gray-100 px-6 py-8 md:px-12 md:py-12 dark:border dark:border-white dark:bg-transparent"
			>
				<div
					class="transition-opacity duration-300"
					class:opacity-0={isTransitioning}
					class:opacity-100={!isTransitioning}
				>
					<p
						class="mb-8 text-center text-base leading-relaxed text-gray-800 md:text-lg dark:text-gray-200"
					>
						"{testimonials[currentIndex].quote}"
					</p>
					<p class="text-center font-bold text-black dark:text-gray-300">
						{testimonials[currentIndex].author}, {testimonials[currentIndex].location}
					</p>
				</div>
			</div>

			<!-- Right Button -->
			<button
				onclick={nextSlide}
				disabled={isTransitioning}
				class="flex h-10 w-10 shrink-0 items-center justify-center bg-black text-white transition-all hover:opacity-70 disabled:opacity-50 dark:border dark:border-white"
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
					onclick={() => goToSlide(index)}
					class="h-3 w-3 transition-colors"
					class:bg-orange-accent={index === currentIndex}
					class:bg-black={index !== currentIndex}
					class:dark:bg-dark-accent={index !== currentIndex}
					aria-label={`Go to testimonial ${index + 1}`}
					disabled={isTransitioning}
				></button>
			{/each}
		</div>
	</Section.Content>
</Section.Root>
