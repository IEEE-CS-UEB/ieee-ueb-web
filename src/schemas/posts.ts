import { CmsCollection } from "netlify-cms-core";

const posts: CmsCollection = {
  "name": "posts",
  "label": "Blog Posts",
  "label_singular": "Blog Post",
  "folder": "src/pages/posts/{en,es}/",
  "create": true,
  "delete": true,
  "fields": [
    {
      "name": "title",
      "widget": "string",
      "label": "Post Title"
    },
    {
      "name": "publishDate",
      "widget": "datetime",
      "format": "DD MMM YYYY",
      "date_format": "DD MMM YYYY",
      "time_format": false,
      "label": "Publish Date"
    },
    {
      "name": "author",
      "widget": "string",
      "label": "Author Name",
      "required": false
    },
    {
      "name": "authorURL",
      "widget": "string",
      "label": "Author URL",
      "required": false
    },
    {
      "name": "description",
      "widget": "string",
      "label": "Description",
      "required": false
    },
    {
      "name": "body",
      "widget": "markdown",
      "label": "Post Body"
    },
    {
      "name": "layout",
      "widget": "select",
      "default": "../../layouts/BlogPost.astro",
      "options": [
        {
          "label": "Blog Post",
          "value": "../../layouts/BlogPost.astro"
        }
      ]
    }
  ]
}

export default posts;