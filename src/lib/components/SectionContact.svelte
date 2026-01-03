<script lang="ts">
	import * as Section from '$ui/section';
	import TelegramIcon from '$lib/components/icons/Telegram.svelte';
	import WhatsAppIcon from '$lib/components/icons/WhatsApp.svelte';
	import EmailIcon from '$lib/components/icons/Email.svelte';

	const contacts = [
		{
			type: 'WhatsApp',
			label: 'WhatsApp',
			value: '+7 700 192 92 52',
			href: 'https://wa.me/77001929252',
			Icon: WhatsAppIcon
		},
		{
			type: 'Telegram',
			label: 'Telegram',
			value: '@gkochergin',
			href: 'https://t.me/gkochergin',
			Icon: TelegramIcon
		},
		{
			type: 'Email',
			label: 'Email',
			value: 'asafeeson@outlook.com',
			href: 'mailto:asafeeson@outlook.com',
			Icon: EmailIcon
		}
	];
</script>

<Section.Root id="contact" variant="colored" className="py-16 md:py-20">
	<Section.Header>
		<h2 class="mb-4 text-4xl md:text-5xl lg:text-6xl">
			Contact <span class="font-black">Me</span>
		</h2>
	</Section.Header>

	<Section.Content className="mt-12">
		<div class="flex flex-col items-center gap-12">
			<p class="text-center text-lg leading-relaxed font-medium">
				Choose your preferred way to get in touch. I typically respond within 24 hours.
			</p>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
				{#each contacts as contact (contact.type)}
					<a
						href={contact.href}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex flex-col items-center justify-center bg-white dark:bg-black p-8 transition-all hover:bg-black hover:text-white md:p-12"
					>
						<div
							class="mb-4 h-8 w-8 text-black transition-colors group-hover:text-yellow-accent dark:text-white"
						>
							<!-- <img src={contact.icon} alt={contact.label + ' icon'} aria-hidden="true"/> -->
							<contact.Icon />
						</div>
						<h3 class="mb-2 text-xl font-bold md:text-2xl">{contact.label}</h3>
						<p class="text-center text-base md:text-lg">{contact.value}</p>
					</a>
				{/each}
			</div>
		</div>
	</Section.Content>
</Section.Root>
