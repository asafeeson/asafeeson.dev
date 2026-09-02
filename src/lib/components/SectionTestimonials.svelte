<script lang="ts">
	import { prefersReducedMotion } from 'svelte/motion';
	import { testimonials } from '$lib/testimonials';
	import * as Section from '$ui/section';

	let currentIndex = $state(0);
	let isTransitioning = $state(false);

	function goToSlide(index: number) {
		if (isTransitioning || index === currentIndex) return;

		currentIndex = index;
		const duration = prefersReducedMotion.current ? 0 : 200;

		if (duration === 0) return;

		isTransitioning = true;
		window.setTimeout(() => {
			isTransitioning = false;
		}, duration);
	}

	function previousSlide() {
		goToSlide((currentIndex - 1 + testimonials.length) % testimonials.length);
	}

	function nextSlide() {
		goToSlide((currentIndex + 1) % testimonials.length);
	}
</script>

<Section.Root variant="none" className="py-16 md:py-20">
	<Section.Content className="flex-col">
		<div
			class="relative flex items-center justify-center gap-4 md:gap-8"
			role="region"
			aria-label="Testimonials"
			aria-roledescription="carousel"
		>
			<button
				onclick={previousSlide}
				disabled={isTransitioning}
				class="flex size-11 shrink-0 items-center justify-center bg-black text-white transition-opacity duration-150 hover:opacity-70 disabled:opacity-50 dark:border dark:border-white"
				aria-label="Previous testimonial"
			>
				<svg
					class="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width={2}
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>

			<div
				class="flex min-h-60 flex-1 items-center justify-center bg-gray-100 px-6 py-8 md:px-12 md:py-12 lg:max-w-1/2 dark:border dark:border-white dark:bg-transparent"
			>
				<div
					aria-live="polite"
					aria-atomic="true"
					class="transition-opacity duration-200"
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

			<button
				onclick={nextSlide}
				disabled={isTransitioning}
				class="flex size-11 shrink-0 items-center justify-center bg-black text-white transition-opacity duration-150 hover:opacity-70 disabled:opacity-50 dark:border dark:border-white"
				aria-label="Next testimonial"
			>
				<svg
					class="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>

		<div class="mt-8 flex justify-center" aria-label="Choose testimonial">
			{#each testimonials as _, index (index)}
				<button
					onclick={() => goToSlide(index)}
					class="flex size-11 items-center justify-center"
					aria-label={`Show testimonial ${index + 1}`}
					aria-pressed={index === currentIndex}
					disabled={isTransitioning}
				>
					<span
						aria-hidden="true"
						class="h-3 w-3 transition-colors duration-200"
						class:bg-orange-accent={index === currentIndex}
						class:bg-black={index !== currentIndex}
						class:dark:bg-dark-accent={index !== currentIndex}
					></span>
				</button>
			{/each}
		</div>
	</Section.Content>
</Section.Root>
