<script lang="ts">
	import * as Section from '$ui/section';
	import TruckImage from '$img/me-riding-truck.avif';
</script>

<Section.Root variant="none" className="py-16">
	<Section.Content className="flex flex-col gap-8">
		<!-- Header -->
		<Section.Header>
			<span class="font-light">How I</span>
			<span class="font-bold">do</span>
		</Section.Header>

		<!-- Description -->
		<div class="mx-auto w-2/3">
			<p class="mb-8 text-center text-base leading-relaxed md:text-lg">
				As a Full Stack Developer, I have carefully selected the technological stack that will help
				me craft high-quality applications in a timely and cost-effective manner. I am committed to
				delivering top-grade solutions that meet your specifications, budget and timeline. My main
				tech stack is...
			</p>
		</div>

		<!-- Developer Tools List -->
		<div
			class="mx-auto flex justify-center w-full flex-wrap gap-x-4 gap-y-2 text-2xl sm:max-w-2/3 md:text-3xl lg:text-4xl"
		>
			<span class="bg-black px-2 py-1 text-white">Python</span>
			<span class="font-light">Django</span>
			<span class="bg-red-500 px-2 py-1 text-white">Svelte</span>
			<span class="font-light">Prisma</span>
			<span class="font-bold">Drizzle</span>
			<span class="font-light">Flutter</span>

			<span class="w-full" />

			<span class="bg-yellow-accent px-2 py-1 font-light">Litestar</span>
			<span class="font-light">FastApi</span>
			<span class="bg-yellow-accent px-2 py-1 font-bold">JavaScript</span>
			<span class="font-light">PostgreSQL</span>
			<span class="font-bold">Redis</span>
			<span class="font-light">HTML</span>

			<span class="w-full" />

			<span class="font-light">CSS</span>
			<span class="bg-gray-200 px-2 py-1 font-light">OpenCV</span>
			<span class="font-light">YOLOv8</span>
			<span class="font-light">Docker</span>
			<span class="font-bold">Nginx</span>
			<span class="font-light">Traefik</span>

			<span class="w-full" />

			<span class="font-light">Nginx Unit</span>
			<span class="font-bold">ELK</span>
			<span class="font-light">Grafana</span>
			<span class="font-light">Prometheus</span>
			<span class="font-light">Directus</span>

			<span class="w-full" />

			<span class="font-bold">Wagtail</span>
		</div>
	</Section.Content>
</Section.Root>
