import { type CmsCollection } from "netlify-cms-core";
import societies from "../data/societies";
import engineers from "../data/engineers";

const englishPosts: CmsCollection = {
  name: "englishPosts",
  label: "Publicaciones en Inglés",
  label_singular: "Publicación en Inglés",
  folder: "src/pages/en/posts/",
  create: true,
  delete: true,
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
    },
    {
      label: "Society (Capítulo)",
      name: "society",
      widget: "select",
      options: societies,
    },
    {
      label: "Type",
      name: "type",
      widget: "select",
      options: ["Blog", "News"]
    },
    {
      label: "Author",
      name: "author",
      widget: "select",
      options: Object.entries(engineers).map(e => e[1]),
    },
    {
      label: "Image",
      name: "img",
      widget: "image",
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
    },
  ],
};

const spanishPosts: CmsCollection = {
  name: "spanishPosts",
  label: "Publicaciones en Español",
  label_singular: "Publicación en Español",
  folder: "src/pages/es/posts/",
  create: true,
  delete: true,
  fields: [
    {
      label: "Título",
      name: "title",
      widget: "string",
    },
    {
      label: "Capítulo / Sociedad",
      name: "society",
      widget: "select",
      options: societies,
    },
    {
      label: "Tipo",
      name: "type",
      widget: "select",
      options: ["Blog", "News"]
    },
    {
      label: "Autor",
      name: "author",
      widget: "select",
      options: Object.entries(engineers).map(e => e[1]),
    },
    {
      label: "Imagen",
      name: "img",
      widget: "image",
    },
    {
      label: "Cuerpo",
      name: "body",
      widget: "markdown",
    },
  ],
};

export { englishPosts, spanishPosts };