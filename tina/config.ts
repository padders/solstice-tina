import { defineConfig } from "tinacms";
import { about_section_1Fields } from "./templates";
import { about_section_2Fields } from "./templates";
import { albumFields } from "./templates";
import { three_latest_albumsFields } from "./templates";
import { basic_title_and_content_sectionFields } from "./templates";
import { blog_post_templateFields } from "./templates";
import { blog_partialFields } from "./templates";
import { calendarFields } from "./templates";
import { contact_mailchimpFields } from "./templates";
import { contactFields } from "./templates";
import { counter_sectionFields } from "./templates";
import { call_to_action_simpleFields } from "./templates";
import { call_to_actionFields } from "./templates";
import { external_advertFields } from "./templates";
import { frequently_asked_questionsFields } from "./templates";
import { formatted_linksFields } from "./templates";
import { full_width_imageFields } from "./templates";
import { gallery___aligned_with_descriptionsFields } from "./templates";
import { galleryFields } from "./templates";
import { gigsFields } from "./templates";
import { hero_partialFields } from "./templates";
import { image_sourcesetFields } from "./templates";
import { previous_gigsFields } from "./templates";
import { page_templateFields } from "./templates";
import { partner_linksFields } from "./templates";
import { portfolioFields } from "./templates";
import { portfolio_pageFields } from "./templates";
import { portfolio_sectionFields } from "./templates";
import { pricingFields } from "./templates";
import { service_sectionFields } from "./templates";
import { services_pageFields } from "./templates";
import { skills_sectionFields } from "./templates";
import { specialities_sectionFields } from "./templates";
import { teamFields } from "./templates";
import { testimonialFields } from "./templates";
import { upcoming_events_sectionFields } from "./templates";
import { upcoming_gigsFields } from "./templates";
import { video_galleryFields } from "./templates";
import { workshopFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.clientId, // Get this from tina.io
  token: process.env.token, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "content",
    },
  },
  search: {
    tina: {
      indexerToken: process.env.searchtoken,
      stopwordLanguages: ['eng']
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...page_templateFields(),
        ],
      },
      {
        format: "md",
        label: "Blog",
        name: "blog",
        path: "content/blog",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...blog_post_templateFields(),
        ],
      },
      {
        format: "md",
        label: "Albums",
        name: "albums",
        path: "content/albums",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...albumFields(),
        ],
      },
      {
        format: "md",
        label: "Gigs",
        name: "gigs",
        path: "content/gigs",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...gigsFields(),
        ],
      },
      {
        format: "md",
        label: "Global Content",
        name: "global_content",
        path: "data/sitedata",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        format: "toml",
        label: "Site Settings",
        name: "site_settings",
        path: "data",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "settings",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
    ],
  },
});
