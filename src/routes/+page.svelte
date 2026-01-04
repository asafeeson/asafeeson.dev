<script lang="ts">
	import HeadSEO from '$lib/components/HeadSEO.svelte';
	import { createPersonSchema, createWebSiteSchema } from '$lib/utils/jsonld';
	import type { PageProps } from './$types';
	import MainRoot from '$lib/components/ui/MainRoot.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HeaderRoot from '$lib/components/HeaderRoot.svelte';
	import SectionHero from '$lib/components/SectionHero.svelte';
	import SectionCTA from '$lib/components/SectionCTA.svelte';
	import SectionWhatIDo from '$lib/components/SectionWhatIDo.svelte';
	import SectionHowIDo from '$lib/components/SectionHowIDo.svelte';
	import SectionProjects from '$lib/components/SectionProjects.svelte';
	import SectionAboutMe from '$lib/components/SectionAboutMe.svelte';
	import SectionServices from '$lib/components/SectionServices.svelte';
	import SectionClients from '$lib/components/SectionClients.svelte';
	import SectionContactCta from '$lib/components/SectionContactCta.svelte';
	import SectionTestimonials from '$lib/components/SectionTestimonials.svelte';
	import SectionContact from '$lib/components/SectionContact.svelte';

	const { data }: PageProps = $props();

	const schemas = [
		createPersonSchema({
			name: 'Gleb Kochergin',
			url: 'https://asafeeson.dev',
			image: 'https://asafeeson.dev/og-image.png',
			jobTitle: 'Full-Stack Developer, AI/ML Engineer, Business Analyst, Product Owner, Coach',
			description:
				'Full-stack developer with 13+ years of professional experience specializing in web and mobile applications, AI-powered solutions, computer vision, chat bots, consulting and coaching services. Expert in Python, Django, Svelte, Flutter, OpenCV, YOLOv8, and modern web technologies.',
			socialLinks: ['https://github.com/asafeeson', 'https://t.me/gkochergin'],
			email: 'hello@asafeeson.dev',
			skills: [
				'Python',
				'Django',
				'Svelte',
				'Flutter',
				'JavaScript',
				'TypeScript',
				'PostgreSQL',
				'Redis',
				'Docker',
				'OpenCV',
				'YOLOv8',
				'Computer Vision',
				'Machine Learning',
				'Artificial Intelligence',
				'FastAPI',
				'Litestar',
				'Prisma',
				'Drizzle',
				'Nginx',
				'Traefik',
				'Web Development',
				'Mobile Development',
				'Telegram Bots',
				'API Development',
				'Business Analysis',
				'Product Management',
				'Team Coaching'
			],
			languages: ['English', 'Russian'],
			occupation: {
				name: 'Full-Stack Developer & AI Engineer',
				skills: [
					'Web Application Development',
					'Mobile Application Development',
					'AI/ML Solutions',
					'Computer Vision',
					'Bot Development',
					'Business Analysis',
					'Product Ownership',
					'Team Leadership'
				],
				category: 'Software Development'
			},
			location: { city: 'Batumi', country: 'GE' }
		}),
		createWebSiteSchema({
			name: 'Asafeeson.dev — Gleb Kochergin Portfolio',
			url: 'https://asafeeson.dev',
			description:
				'Professional full-stack development services: web applications, mobile apps, AI-powered solutions, computer vision, Telegram bots, consulting and coaching. 13+ years of experience in product development.',
			authorName: 'Gleb Kochergin',
			language: 'en'
		})
	];
</script>

<HeadSEO
	author="Gleb Kochergin"
	title="Gleb Kochergin — Full-Stack Developer & AI Engineer | Asafeeson.dev"
	description="Full-stack developer & AI/ML engineer with 13+ years of experience. I create web & mobile applications, AI-powered solutions, computer vision systems, Telegram bots. Expert in Python, Django, Svelte, Flutter, OpenCV, YOLOv8. Turn your ideas into intelligent applications."
	keywords="Gleb Kochergin, Asafeeson, full-stack developer, AI engineer, machine learning, computer vision, web development, mobile development, Telegram bots, Python, Django, Svelte, Flutter, OpenCV, YOLOv8, artificial intelligence, consulting, coaching, business analyst, product owner, Kazakhstan"
	ogImage="https://asafeeson.dev/og-image.png"
	ogType="profile"
	twitterCard="summary_large_image"
	canonicalUrl="https://asafeeson.dev/"
	jsonLd={schemas}
></HeadSEO>

<!-- Page content goes here -->
<HeaderRoot></HeaderRoot>
<MainRoot>
	<SectionHero />
	<SectionCTA />
	<SectionWhatIDo />
	<SectionHowIDo />
	<SectionProjects />
	<SectionAboutMe />
	<SectionServices />
	<SectionClients />
	<SectionContact />
	<SectionTestimonials />
</MainRoot>
<Footer></Footer>
