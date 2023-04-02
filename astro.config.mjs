import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import posts from './src/schemas/posts';

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
      media_folder: 'public/assets/blog',
      public_folder: '/assets/blog',
      // Configure the content collections
      collections: [posts]
    },
    previewStyles: ['']
  }), react()]
});