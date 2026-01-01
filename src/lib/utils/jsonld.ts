/**
 * JSON-LD Schema helpers for structured data
 * @see https://schema.org/
 */

export interface PersonSchema {
	'@context': 'https://schema.org';
	'@type': 'Person';
	name: string;
	url?: string;
	image?: string;
	jobTitle?: string;
	description?: string;
	sameAs?: string[]; // Social media profiles
	email?: string;
	knowsAbout?: string[]; // Technologies and skills
	knowsLanguage?: string[]; // Programming/spoken languages
	hasOccupation?: {
		'@type': 'Occupation';
		name: string;
		skills?: string[];
		occupationalCategory?: string;
	};
	address?: {
		'@type': 'PostalAddress';
		addressLocality?: string;
		addressCountry?: string;
	};
}

export interface WebSiteSchema {
	'@context': 'https://schema.org';
	'@type': 'WebSite';
	name: string;
	url: string;
	description?: string;
	author?: {
		'@type': 'Person';
		name: string;
	};
	inLanguage?: string;
}

export interface BreadcrumbListSchema {
	'@context': 'https://schema.org';
	'@type': 'BreadcrumbList';
	itemListElement: Array<{
		'@type': 'ListItem';
		position: number;
		name: string;
		item?: string;
	}>;
}

export interface WebPageSchema {
	'@context': 'https://schema.org';
	'@type': 'WebPage';
	name: string;
	url: string;
	description?: string;
	author?: {
		'@type': 'Person';
		name: string;
	};
	datePublished?: string;
	dateModified?: string;
	image?: string;
}

/**
 * Generate Person schema for developer portfolio
 */
export function createPersonSchema(data: {
	name: string;
	url?: string;
	image?: string;
	jobTitle?: string;
	description?: string;
	socialLinks?: string[];
	email?: string;
	location?: { city?: string; country?: string };
	skills?: string[];
	languages?: string[];
	occupation?: {
		name: string;
		skills?: string[];
		category?: string;
	};
}): PersonSchema {
	const schema: PersonSchema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: data.name
	};

	if (data.url) schema.url = data.url;
	if (data.image) schema.image = data.image;
	if (data.jobTitle) schema.jobTitle = data.jobTitle;
	if (data.description) schema.description = data.description;
	if (data.socialLinks && data.socialLinks.length > 0) schema.sameAs = data.socialLinks;
	if (data.email) schema.email = data.email;
	if (data.skills && data.skills.length > 0) schema.knowsAbout = data.skills;
	if (data.languages && data.languages.length > 0) schema.knowsLanguage = data.languages;
	if (data.occupation) {
		schema.hasOccupation = {
			'@type': 'Occupation',
			name: data.occupation.name,
			skills: data.occupation.skills,
			occupationalCategory: data.occupation.category
		};
	}
	if (data.location) {
		schema.address = {
			'@type': 'PostalAddress',
			addressLocality: data.location.city,
			addressCountry: data.location.country
		};
	}

	return schema;
}

/**
 * Generate WebSite schema
 */
export function createWebSiteSchema(data: {
	name: string;
	url: string;
	description?: string;
	authorName?: string;
	language?: string;
}): WebSiteSchema {
	const schema: WebSiteSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: data.name,
		url: data.url
	};

	if (data.description) schema.description = data.description;
	if (data.authorName) {
		schema.author = {
			'@type': 'Person',
			name: data.authorName
		};
	}
	if (data.language) schema.inLanguage = data.language;

	return schema;
}

/**
 * Generate BreadcrumbList schema
 */
export function createBreadcrumbSchema(
	items: Array<{ name: string; url?: string }>
): BreadcrumbListSchema {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
}

/**
 * Generate WebPage schema
 */
export function createWebPageSchema(data: {
	name: string;
	url: string;
	description?: string;
	authorName?: string;
	datePublished?: string;
	dateModified?: string;
	image?: string;
}): WebPageSchema {
	const schema: WebPageSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: data.name,
		url: data.url
	};

	if (data.description) schema.description = data.description;
	if (data.authorName) {
		schema.author = {
			'@type': 'Person',
			name: data.authorName
		};
	}
	if (data.datePublished) schema.datePublished = data.datePublished;
	if (data.dateModified) schema.dateModified = data.dateModified;
	if (data.image) schema.image = data.image;

	return schema;
}
