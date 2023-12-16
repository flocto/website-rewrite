import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import markdownConfig from './markdown.config'

import sitemap from '@astrojs/sitemap';



// https://astro.build/config
export default defineConfig({
	site: 'https://flocto.github.io',
	markdown: markdownConfig,
	integrations: [mdx({
		...markdownConfig,
		extendPlugins: false,
	}), sitemap()],
});
