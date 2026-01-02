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
		<div class="mx-auto w-full max-w-2xl">
			<p class="mb-8 text-center text-base leading-relaxed md:text-lg">
				<strong>AI-Driven, Not AI-Dependent</strong>
				<br /><br />
				I actively use modern AI tools and AI-assisted development to accelerate delivery — especially for MVPs, prototypes, and early validation.
				<br /><br />
				At the same time, I rely on strong engineering fundamentals, architecture, and experience to ensure: system stability, data safety, scalability, predictable delivery.
				<br /><br />
				<em>AI helps me move faster. Engineering experience ensures things work.</em>
			</p>
		</div>

		<!-- Tech Stack Sections -->
		<div class="flex flex-col gap-8">
			<!-- Modern AI Stack -->
			<div class="mx-auto w-full max-w-2xl">
				<h3 class="mb-4 text-2xl font-bold">Modern AI Stack</h3>
				<div class="flex flex-wrap justify-center gap-x-4 gap-y-2 text-lg md:text-xl">
					<span class="bg-blue-500 px-2 py-1 text-white font-light">OpenAI API</span>
					<span class="font-light">Google AI SDK (Gemini)</span>
					<span class="font-light">Vercel AI SDK</span>
					<span class="font-light">LangChain</span>
					<span class="font-light">RAG</span>
					<span class="font-light">Hugging Face</span>
					<span class="font-light">Vector Databases</span>
					<span class="font-light">OpenCV, YOLOv8</span>
				</div>
			</div>

			<!-- Full-Stack Engineering -->
			<div class="mx-auto w-full max-w-2xl">
				<h3 class="mb-4 text-2xl font-bold">Full-Stack Engineering</h3>
				<div class="space-y-3">
					<div>
						<p class="font-bold text-lg mb-2">Backend</p>
						<div class="flex flex-wrap gap-x-4 gap-y-2 text-lg md:text-xl">
							<span class="bg-black px-2 py-1 text-white">Python</span>
							<span class="font-light">Django</span>
							<span class="font-light">FastAPI</span>
							<span class="font-light">Litestar</span>
							<span class="font-light">Node.js / TypeScript</span>
							<span class="font-light">NestJS, Hono, Elysia</span>
						</div>
					</div>
					<div>
						<p class="font-bold text-lg mb-2">Frontend & Mobile</p>
						<div class="flex flex-wrap gap-x-4 gap-y-2 text-lg md:text-xl">
							<span class="bg-red-500 px-2 py-1 text-white">Svelte</span>
							<span class="font-light">Flutter</span>
						</div>
					</div>
					<div>
						<p class="font-bold text-lg mb-2">Data & APIs</p>
						<div class="flex flex-wrap gap-x-4 gap-y-2 text-lg md:text-xl">
							<span class="font-light">PostgreSQL</span>
							<span class="font-bold">Redis</span>
							<span class="font-light">REST, Streaming & Real-time APIs</span>
						</div>
					</div>
				</div>
			</div>

			<!-- DevOps & Infrastructure -->
			<div class="mx-auto w-full max-w-2xl">
				<h3 class="mb-4 text-2xl font-bold">DevOps & Infrastructure</h3>
				<div class="flex flex-wrap gap-x-4 gap-y-2 text-lg md:text-xl">
					<span class="font-light">Docker</span>
					<span class="font-bold">Nginx</span>
					<span class="font-light">Traefik</span>
					<span class="font-light">Nginx Unit</span>
					<span class="font-light">Cloud-ready Deployments</span>
					<span class="font-light">ELK, Grafana, Prometheus</span>
				</div>
			</div>

			<!-- Vibe Coding -->
			<div class="mx-auto w-full max-w-2xl bg-gray-100 px-6 py-4">
				<h3 class="mb-3 text-2xl font-bold">Vibe Coding — Used Responsibly</h3>
				<p class="text-base leading-relaxed">
					I use <strong>vibe coding and AI-assisted workflows</strong> where they make sense — primarily for: MVPs, prototypes, rapid iterations, internal tools.
					<br /><br />
					However: architecture, core business logic, security-critical components, data flows & performance are designed, reviewed, and validated manually.
					<br /><br />
					<em>Fast where possible. Careful where required.</em>
				</p>
			</div>
		</div>
	</Section.Content>
</Section.Root>
