<script lang="ts">
	import * as Section from '$ui/section';
	import TruckImage from '$img/me-riding-truck.avif';
</script>

<Section.Root variant="none" className="py-16">
	<Section.Content className="flex flex-col gap-8">
		<!-- Header -->
		<Section.Header>
			What I <span class="font-bold">do</span>
		</Section.Header>

		<div class="flex flex-col sm:flex-row sm:gap-4">
			<!-- Left Content -->
			<div class="flex-1 px-4 sm:px-0">
				<!-- Description -->
				<p class="mb-8 text-base leading-relaxed md:text-lg">
					I'm a full-stack developer with experience in both backend and frontend development. I
					have a passion for creating bots, as well as web and mobile applications that are both
					functional and visually appealing. Additionally, I offer consulting and coaching services
					to help others achieve their goals.
				</p>

				<!-- Services List -->
				<div class="mb-8 flex flex-wrap gap-x-4 gap-y-2 text-2xl md:text-3xl lg:text-4xl">
					<span class="font-light">Web Development</span>
					<span class="font-bold">Chat Bots</span>
					<span class="font-light">Mobile Development</span>
					<span class="font-light">API</span>
					<span class="font-light">Consulting</span>
					<span class="inline-block bg-yellow-accent px-2 font-light">Coaching</span>
					<span class="font-light">Mentoring</span>
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
