<script lang="ts">
	import * as Section from '$ui/section';
	import { shuffle } from '$utils/utils';

	const clients = [
		{ name: 'Werner', style: 'font-bold text-white' },
		{ name: 'Artifiqa', style: 'font-light tracking-widest text-gray-300' },
		{ name: 'GetTarget', style: 'font-medium' },
		{ name: 'ROST', style: 'font-light text-white opacity-75 hover:opacity-100 transition' },
		{ name: 'Freedom Finance', style: 'font-light text-black bg-white bg-opacity-20 px-2 py-1' },
		{ name: 'Sber', style: 'font-light text-gray-400' },
		{ name: 'Aquafor', style: 'font-black tracking-[0.2em]' },
		{ name: 'Hansa', style: 'font-bold drop-shadow-lg' },
		{ name: 'Eurasian Development Bank', style: 'px-1 font-light text-white' }
	];

	const shuffledClients = shuffle(clients);
</script>

<Section.Root variant="none" className=" py-16">
	<Section.Header>
		<!-- Title -->
		<span class="font-black">Clients</span>
		<span class="font-extralight">&amp; Collaborations</span>
	</Section.Header>
	<Section.Content className="relative flex flex-col">
		<!-- Black Container -->
		<div class="bg-black px-8 py-12 text-white md:px-12 md:py-16">
			<!-- Description -->
			<p class="mb-8 text-center text-lg leading-relaxed font-medium">
				I've worked with startups and established organizations, including:
			</p>

			<!-- Clients Grid -->
			<div
				class="flex flex-wrap items-center justify-center gap-5 text-center text-2xl md:text-3xl lg:text-4xl"
			>
				<!-- Row 1 -->
				{#each shuffledClients as client}
					<span class={client.style}>{client.name}</span>
				{/each}
			</div>
		</div>
	</Section.Content>
</Section.Root>
