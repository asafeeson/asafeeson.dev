<script lang="ts">
	import * as Section from '$ui/section';
</script>

<Section.Root variant="none" className="relative py-16">
	<!-- Yellow accent bar -->
	<div class="absolute left-0 top-0 h-full w-16 bg-yellow-accent"></div>

	<Section.Content className="flex-col">
		<!-- Title -->
		<h2 class="mb-12 text-4xl md:text-5xl lg:text-6xl">
			<span class="font-bold">clients</span>
			<span class="font-light">&amp; Collaborations</span>
		</h2>

		<!-- Black Container -->
		<div class="bg-black px-8 py-12 text-white md:px-12 md:py-16">
			<!-- Description -->
			<p class="mb-8 text-center text-lg leading-relaxed">
				I've worked with startups and established organizations, including:
			</p>

			<!-- Clients Grid -->
			<div class="space-y-6 text-center text-2xl md:text-3xl lg:text-4xl">
				<!-- Row 1 -->
				<div class="flex flex-wrap justify-center gap-x-4 gap-y-2">
					<span class="font-bold">Hansa</span>
					<span class="font-light">Artifiq</span>
					<span class="font-light">GetTarget</span>
					<span class="font-light">Freedom Finance</span>
				</div>

				<!-- Row 2 -->
				<div class="flex flex-wrap justify-center gap-x-4 gap-y-2">
					<span class="font-light">Sber</span>
					<span class="font-bold">Aquafor</span>
									<span class="font-light">Eurasian Development Bank</span>
				</div>

				<!-- Row 3 -->
				<div class="flex flex-wrap justify-center gap-x-4 gap-y-2">
				</div>
			</div>
		</div>
	</Section.Content>
</Section.Root>
