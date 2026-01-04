<script lang="ts">
	import * as Section from '$ui/section';
	import TruckImage from '$img/me-riding-truck.avif';
</script>

<Section.Root variant="none" className="py-16" id="whatido">
	<!-- Header -->
	<Section.Header className="mb-0">
		What I <span class="font-black">do</span>
	</Section.Header>
	<!-- Content -->
	<Section.Content className="flex flex-col gap-8">
		<div class="flex flex-col sm:flex-row sm:gap-4">
			<!-- Left Content -->
			<div class="flex flex-1 flex-col items-start justify-center px-4 sm:px-0">
				<!-- Description -->
				<p class="mb-8 text-base leading-relaxed md:text-lg">
					I help teams design, build, and scale <span class="font-bold"
						>AI-powered web and mobile products</span
					>.
				</p>

				<!-- Services List -->
				<div class="mb-8 flex flex-wrap gap-x-4 gap-y-2 text-2xl md:text-3xl lg:text-4xl">
					<span class="font-light">AI-First Product Development</span>
					<span class="font-bold">Web Applications</span>
					<span class="font-light">Mobile Applications</span>
					<span class="font-light">Chatbots & AI Assistants</span>
					<span class="font-light">API & Backend Systems</span>
					<span class="inline-block bg-yellow-accent px-2 font-light dark:text-black">AI & Computer Vision</span>
					<span class="font-light">Consulting & Coaching</span>
				</div>
			</div>

			<!-- Right Image -->
			<div class="flex flex-1 justify-end">
				<img
					src={TruckImage}
					alt="Gleb Kochergin on truck"
					class="max-h-full object-contain grayscale"
				/>
			</div>
		</div>
	</Section.Content>
</Section.Root>
