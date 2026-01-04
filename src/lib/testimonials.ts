export interface Testimonial {
	quote: string;
	author: string;
	location: string;
}

export const testimonials: Testimonial[] = [
	{
		quote:
			'I wholeheartedly recommend Gleb as a product owner and team leader. Our startup significantly improved efficiency thanks to his professionalism and leadership.',
		author: 'Paul Volk',
		location: 'USA'
	},
	{
		quote:
			"Working with Gleb across multiple projects, I've consistently experienced his reliability and expertise. He delivers high-quality solutions on time and understands business needs as well as technical requirements.",
		author: 'Larisa Gevich',
		location: 'Kazakhstan'
	},
	{
		quote:
			'Working with Gleb was a great experience. He developed a 3D visualization system for our workshop that shows how our structures look in different real‑world conditions. By using Google’s Gemini Nano Banana model instead of expensive rendering tools, he achieved impressive quality with a smart and efficient approach. We were truly happy with the collaboration and the results.',
		author: 'Silvestr',
		location: 'Estonia'
	},
	{
		quote:
			"Gleb's ability to balance rapid AI-assisted development with solid engineering fundamentals is exceptional. He delivered a complex MVP in record time without compromising on quality.",
		author: 'Ruslan Zhemkov',
		location: 'Kazakhstan'
	},
	{
		quote:
			'Beyond technical skills, Gleb brings strategic thinking to projects. He asks the right questions, challenges assumptions, and helps define what actually needs to be built.',
		author: 'Aydan Zhakupov',
		location: 'Kazakhstan'
	}
];
