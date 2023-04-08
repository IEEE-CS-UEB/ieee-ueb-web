import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import { englishPosts, spanishPosts } from './src/schemas/posts';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [NetlifyCMS({
    config: {
      // Use Netlify’s “Git Gateway” authentication and target our default branch
      backend: {
        name: 'git-gateway',
        branch: 'latest'
      },
      // Configure where our media assets are stored & served from
      media_folder: 'public/',
      public_folder: 'public/',
      // Configure the content collections
      collections: [englishPosts, spanishPosts]
    },
    previewStyles: ['https://github.com/IEEE-CS-UEB/Flora/blob/dev/src/flora.css']
  }), react()]
});