import type { TinaField } from "tinacms";
export function about_section_1Fields() {
  return [
    {
      type: "string",
      name: "about_heading",
      label: "About Heading",
    },
    {
      type: "string",
      name: "about_content",
      label: "Section content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "about_section",
      label: "About Section",
      list: true,
      fields: [
        {
          type: "string",
          name: "icon_id",
          label: "Icon ID",
        },
        {
          type: "string",
          name: "section_title",
          label: "Section Title",
        },
        {
          type: "string",
          name: "section_content",
          label: "Section Content",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "section_url",
          label: "Button URL destination",
        },
      ],
    },
  ] as TinaField[];
}
export function about_section_2Fields() {
  return [
    {
      type: "image",
      name: "banner_image",
      label: "About Us Section two Left Side",
    },
    {
      type: "string",
      name: "about_us_section_2_title",
      label: "About Us Section 2 Title",
    },
    {
      type: "string",
      name: "description_section_2_title",
      label: "About Us Section 2 Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "boolean",
      name: "h1_title",
      label: "H1 title",
    },
    {
      type: "boolean",
      name: "about_link_btn",
      label: "Link Button",
    },
    {
      type: "string",
      name: "about_button_text",
      label: "About Button text",
    },
    {
      type: "string",
      name: "about_button_url",
      label: "About Button URL",
    },
  ] as TinaField[];
}
export function albumFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "image",
      name: "meta_og_image",
      label: "Meta OG Image",
    },
    {
      type: "image",
      name: "album_image",
      label: "Album main artwork",
    },
    {
      type: "string",
      name: "album_title",
      label: "Album Title",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "album_description",
      label: "Album Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "purchase_link_text",
      label: "Purchase link text",
    },
    {
      type: "string",
      name: "purchase_url",
      label: "Purchase Url",
    },
    {
      type: "object",
      name: "reviews",
      label: "Press / Reviews",
      list: true,
      fields: [
        {
          type: "string",
          name: "text",
          label: "link text",
        },
        {
          type: "string",
          name: "url",
          label: "url",
        },
      ],
    },
    {
      type: "object",
      name: "band_members",
      label: "Band Members",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "name",
        },
        {
          type: "string",
          name: "url",
          label: "url",
        },
      ],
    },
    {
      type: "object",
      name: "music",
      label: "Embedded Music",
      list: true,
      fields: [
        {
          type: "string",
          name: "type",
          label: "type",
          options: [
            "soundcloud playlist",
            "soundcloud track",
            "spotify album",
            "spotify track",
            "bandcamp album",
          ],
          required: true,
        },
        {
          type: "string",
          name: "embed_code",
          label: "Embed Code",
        },
      ],
    },
    {
      type: "object",
      name: "watch",
      label: "Embedded Video",
      list: true,
      fields: [
        {
          type: "string",
          name: "type",
          label: "type",
          options: ["youtube video", "youtube playlist", "vimeo video"],
          required: true,
        },
        {
          type: "string",
          name: "embed_code",
          label: "Embed Code",
        },
      ],
    },
    {
      type: "string",
      name: "album_notes",
      label: "Album Notes",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function three_latest_albumsFields() {
  return [
    {
      type: "string",
      name: "section_title",
      label: "Section Title",
    },
    {
      type: "string",
      name: "filter",
      label: "Filter by Tag",
    },
  ] as TinaField[];
}
export function basic_title_and_content_sectionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "boolean",
      name: "add_image",
      label: "Add Image?",
    },
    {
      type: "image",
      name: "floating_image",
      label: "floating image",
    },
    {
      type: "boolean",
      name: "image_side",
      label: "Image Side",
    },
    {
      type: "boolean",
      name: "remove_padding_top",
      label: "remove padding top?",
    },
    {
      type: "boolean",
      name: "remove_padding_bottom",
      label: "remove padding bottom?",
    },
    {
      type: "boolean",
      name: "large_paragraph_text",
      label: "Large Paragraph Text?",
    },
  ] as TinaField[];
}
export function blog_post_templateFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "image",
      name: "meta_og_image",
      label: "Meta OG Image",
      required: true,
    },
    {
      type: "string",
      name: "alt_text",
      label: "Blog Image Alt Text",
    },
    {
      type: "object",
      name: "music",
      label: "Embedded Music",
      list: true,
      fields: [
        {
          type: "string",
          name: "type",
          label: "type",
          options: [
            "soundcloud playlist",
            "soundcloud track",
            "spotify album",
            "spotify track",
            "bandcamp album",
            "bandcamp track",
          ],
          required: true,
        },
        {
          type: "string",
          name: "embed_code",
          label: "Embed Code",
        },
      ],
    },
    {
      type: "object",
      name: "watch",
      label: "Embedded Video",
      list: true,
      fields: [
        {
          type: "string",
          name: "type",
          label: "type",
          options: ["youtube video", "youtube playlist", "vimeo video"],
          required: true,
        },
        {
          type: "string",
          name: "embed_code",
          label: "Embed Code",
        },
      ],
    },
    {
      type: "boolean",
      name: "musicTop",
      label: "Add Music/Video to top or bottom?",
    },
    {
      type: "boolean",
      name: "hideImage",
      label: "Hide Main Image on blog post?",
    },
  ] as TinaField[];
}
export function blog_partialFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Enable",
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "string",
      name: "heading_span",
      label: "Heading Span",
    },
  ] as TinaField[];
}
export function calendarFields() {
  return [
    {
      type: "string",
      name: "calendar_heading",
      label: "Calendar Section Heading",
    },
    {
      type: "string",
      name: "calendar_code",
      label: "Google Calendar Code",
    },
    {
      type: "string",
      name: "calendar_id",
      label: "Google Calendar ID",
    },
    {
      type: "string",
      name: "form_heading",
      label: "Form Section Heading",
    },
    {
      type: "string",
      name: "terms_and_conditions_link",
      label: "Terms and Conditions page",
    },
  ] as TinaField[];
}
export function contact_mailchimpFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Enable",
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "string",
      name: "heading_span",
      label: "Heading Span",
    },
    {
      type: "string",
      name: "title",
      label: "Content Title",
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "contactdetails",
      label: "Contactdetails",
      list: true,
      fields: [
        {
          type: "string",
          name: "icon",
          label: "Icon",
        },
        {
          type: "string",
          name: "info",
          label: "Info",
        },
      ],
    },
    {
      type: "string",
      name: "subscribe_title",
      label: "Subscribe Title",
    },
    {
      type: "string",
      name: "subscribe_content",
      label: "Subscribe Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "terms_and_conditions_link",
      label: "Terms and Conditions page",
    },
    {
      type: "string",
      name: "mailchimp_link",
      label: "Mailchimp Form Link",
    },
    {
      type: "string",
      name: "mailchimp_u",
      label: "Mailchimp U value",
    },
    {
      type: "string",
      name: "mailchimp_id",
      label: "Mailchimp id value",
    },
  ] as TinaField[];
}
export function contactFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "boolean",
      name: "enable",
      label: "Enable",
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      name: "contactdetails",
      label: "Contactdetails",
      list: true,
      fields: [
        {
          type: "string",
          name: "contacttype",
          label: "Type",
          options: ["Phone", "Email", "Address"],
        },
        {
          type: "string",
          name: "icon",
          label: "Icon",
        },
        {
          type: "string",
          name: "info",
          label: "Info",
        },
      ],
    },
  ] as TinaField[];
}
export function counter_sectionFields() {
  return [
    {
      type: "object",
      name: "counter_section",
      label: "Counter Section",
      list: true,
      fields: [
        {
          type: "string",
          name: "section_title",
          label: "Counter Name",
        },
        {
          type: "string",
          name: "icon_id",
          label: "Icon ID",
        },
        {
          type: "number",
          name: "counter_amount",
          label: "Counter Total",
        },
      ],
    },
  ] as TinaField[];
}
export function call_to_action_simpleFields() {
  return [
    {
      type: "string",
      name: "cta_heading",
      label: "Call to Action Heading",
    },
    {
      type: "string",
      name: "cta_content",
      label: "Call to Action Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "cta_backcolor",
      label: "Call to Action Background Color",
      ui: {
        component: "color",
      },
    },
    {
      type: "boolean",
      name: "link_btn",
      label: "Link Button",
    },
    {
      type: "string",
      name: "cta_button_text",
      label: "Call To Action Button text",
    },
    {
      type: "string",
      name: "cta_button_url",
      label: "Call To Action Button URL",
    },
  ] as TinaField[];
}
export function call_to_actionFields() {
  return [
    {
      type: "string",
      name: "cta_heading",
      label: "Call to Action Heading",
    },
    {
      type: "string",
      name: "cta_content",
      label: "Call to Action Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "cta_image",
      label: "Call to Action Background Image",
    },
    {
      type: "boolean",
      name: "link_btn",
      label: "Link Button",
    },
    {
      type: "string",
      name: "cta_button_text",
      label: "Call To Action Button text",
    },
    {
      type: "string",
      name: "cta_button_url",
      label: "Call To Action Button URL",
    },
  ] as TinaField[];
}
export function external_advertFields() {
  return [
    {
      type: "string",
      name: "external_ad_text",
      label: "Text content",
    },
    {
      type: "image",
      name: "external_ad_image",
      label: "Advert image",
    },
    {
      type: "string",
      name: "external_ad_link",
      label: "link destination",
    },
  ] as TinaField[];
}
export function frequently_asked_questionsFields() {
  return [
    {
      type: "string",
      name: "faq_heading",
      label: "FAQ Heading",
    },
    {
      type: "object",
      name: "faq_section",
      label: "FAQ Section",
      list: true,
      fields: [
        {
          type: "string",
          name: "question",
          label: "Question",
        },
        {
          type: "string",
          name: "answer",
          label: "Answer",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function formatted_linksFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "object",
      name: "press",
      label: "Site / Press / Interviews",
      list: true,
      fields: [
        {
          type: "string",
          name: "url",
          label: "Url Link - Interview/Press Link/Website",
        },
        {
          type: "string",
          name: "media_company",
          label: "Name of Publication/Site",
        },
        {
          type: "string",
          name: "quote",
          label: "Key Quote or description",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function full_width_imageFields() {
  return [
    {
      type: "image",
      name: "image",
      label: "Image",
    },
  ] as TinaField[];
}
export function gallery___aligned_with_descriptionsFields() {
  return [
    {
      type: "number",
      name: "display_limit",
      label: "Display Limit",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "object",
      name: "image_section",
      label: "Gallery Image",
      list: true,
      fields: [
        {
          type: "image",
          name: "image_file",
          label: "Gallery Image",
        },
        {
          type: "string",
          name: "image_description",
          label: "Image Description",
        },
        {
          type: "string",
          name: "alt_text",
          label: "Image Alt Text",
        },
        {
          type: "string",
          name: "tags",
          label: "tags",
          list: true,
          ui: {
            component: "tags",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function galleryFields() {
  return [
    {
      type: "image",
      name: "gallery",
      label: "gallery",
      list: true,
    },
  ] as TinaField[];
}
export function gigsFields() {
  return [
    {
      type: "string",
      name: "gig_location",
      label: "Gig Location",
      required: true,
    },
    {
      type: "string",
      name: "gig_band",
      label: "Band name",
      required: true,
    },
    {
      type: "string",
      name: "gig_url",
      label: "Gig link",
      required: true,
    },
    {
      type: "datetime",
      name: "gig_date",
      label: "Gig Date",
      required: true,
    },
    {
      type: "number",
      name: "gig_cost",
      label: "Cost",
    },
  ] as TinaField[];
}
export function hero_partialFields() {
  return [
    {
      type: "image",
      name: "banner_image",
      label: "Hero Image",
    },
    {
      type: "string",
      name: "hero_title",
      label: "Hero Title",
    },
    {
      type: "string",
      name: "hero_text_content",
      label: "Hero Text Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "boolean",
      name: "link_btn",
      label: "Link Button",
    },
    {
      type: "string",
      name: "hero_button_text",
      label: "Hero Button text",
    },
    {
      type: "string",
      name: "hero_button_url",
      label: "Hero Button URL",
    },
    {
      type: "boolean",
      name: "thin_hero",
      label: "Thin Hero?",
    },
  ] as TinaField[];
}
export function image_sourcesetFields() {
  return [
    {
      type: "image",
      name: "image_file",
      label: "Gallery Image",
    },
    {
      type: "string",
      name: "image_description",
      label: "Image Description",
    },
  ] as TinaField[];
}
export function previous_gigsFields() {
  return [
    {
      type: "string",
      name: "section_title",
      label: "Section Title",
    },
    {
      type: "number",
      name: "display_limit",
      label: "Display Limit",
    },
    {
      type: "string",
      name: "all_gigs_url",
      label: "The url showing all gigs",
    },
    {
      type: "string",
      name: "band_filter",
      label: "enter a bandname to get a filter of gigs for that band only",
    },
  ] as TinaField[];
}
export function page_templateFields() {
  return [
    {
      type: "object",
      list: true,
      templateKey: "template",
      label: "Page",
      name: "page_section",
      templates: [
        {
          fields: three_latest_albumsFields(),
          label: "three latest albums",
          name: "albums",
        },
        {
          fields: about_section_1Fields(),
          label: "About Section 1",
          name: "about_section_1",
          nameOverride: "about-section-1",
        },
        {
          fields: about_section_2Fields(),
          label: "About Section 2",
          name: "about_section_2",
          nameOverride: "about-section-2",
        },
        {
          fields: basic_title_and_content_sectionFields(),
          label: "Basic Title and Content Section",
          name: "basic_content",
          nameOverride: "basic-content",
        },
        {
          fields: blog_partialFields(),
          label: "Blog-partial",
          name: "blog",
        },
        {
          fields: calendarFields(),
          label: "Calendar",
          name: "calendar",
        },
        {
          fields: call_to_actionFields(),
          label: "Call to Action",
          name: "cta_section",
          nameOverride: "cta-section",
        },
        {
          fields: call_to_action_simpleFields(),
          label: "Call to Action Simple",
          name: "cta_section_simple",
          nameOverride: "cta-section-simple",
        },
        {
          fields: contactFields(),
          label: "Contact",
          name: "contact",
        },
        {
          fields: contact_mailchimpFields(),
          label: "Contact Mailchimp",
          name: "contact_mailchimp",
          nameOverride: "contact-mailchimp",
        },
        {
          fields: counter_sectionFields(),
          label: "Counter Section",
          name: "counter_rm",
          nameOverride: "counter-rm",
        },
        {
          fields: external_advertFields(),
          label: "External Advert",
          name: "external_ad",
        },
        {
          fields: frequently_asked_questionsFields(),
          label: "Frequently Asked Questions",
          name: "faq",
        },
        {
          fields: formatted_linksFields(),
          label: "Formatted Links",
          name: "formatted_links",
          nameOverride: "formatted-links",
        },
        {
          fields: gallery___aligned_with_descriptionsFields(),
          label: "Gallery - Aligned with descriptions",
          name: "gallery_masonry",
          nameOverride: "gallery-masonry",
        },
        {
          fields: hero_partialFields(),
          label: "Hero Partial",
          name: "hero_partial",
          nameOverride: "hero-partial",
        },
        {
          fields: partner_linksFields(),
          label: "Partner Links",
          name: "partner_links",
          nameOverride: "partner-links",
        },
        {
          fields: portfolio_sectionFields(),
          label: "Portfolio Section",
          name: "portfolio",
        },
        {
          fields: previous_gigsFields(),
          label: "Previous Gigs",
          name: "old_gigs",
        },
        {
          fields: pricingFields(),
          label: "Pricing",
          name: "pricing",
        },
        {
          fields: service_sectionFields(),
          label: "Service Section",
          name: "service",
        },
        {
          fields: skills_sectionFields(),
          label: "Skills Section",
          name: "skills_section",
          nameOverride: "skills-section",
        },
        {
          fields: specialities_sectionFields(),
          label: "Specialities section",
          name: "specialities_section",
          nameOverride: "specialities-section",
        },
        {
          fields: teamFields(),
          label: "Team",
          name: "team",
        },
        {
          fields: testimonialFields(),
          label: "Testimonial",
          name: "testimonial",
        },
        {
          fields: upcoming_gigsFields(),
          label: "Upcoming Gigs",
          name: "upcoming_gigs",
        },
        {
          fields: video_galleryFields(),
          label: "Video Gallery",
          name: "video_gallery_masonry",
          nameOverride: "video-gallery-masonry",
        },
        {
          fields: workshopFields(),
          label: "Workshop",
          name: "workshop",
        },
      ],
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta Description",
    },
    {
      type: "image",
      name: "meta_og_image",
      label: "Meta OG Image",
    },
  ] as TinaField[];
}
export function partner_linksFields() {
  return [
    {
      type: "string",
      name: "section_id",
      label: "Section ID",
    },
    {
      type: "object",
      name: "partners",
      label: "Partners",
      list: true,
      fields: [
        {
          type: "string",
          name: "url",
          label: "url",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
      ],
    },
  ] as TinaField[];
}
export function portfolioFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Enable",
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "string",
      name: "headingSpan",
      label: "Headingspan",
    },
    {
      type: "object",
      name: "filterList",
      label: "Filterlist",
      list: true,
      fields: [
        {
          type: "string",
          name: "filterType",
          label: "Filtertype",
        },
        {
          type: "string",
          name: "filterTitle",
          label: "Filtertitle",
        },
      ],
    },
    {
      type: "object",
      name: "portfolioItem",
      label: "Portfolioitem",
      list: true,
      fields: [
        {
          type: "string",
          name: "types",
          label: "Types",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "icon",
          label: "Icon",
        },
        {
          type: "string",
          name: "URL",
          label: "Url",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
      ],
    },
  ] as TinaField[];
}
export function portfolio_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "external_url",
      label: "External Url",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "image",
      name: "main_image",
      label: "Main Image",
    },
    {
      type: "string",
      name: "project_hero_short_description",
      label: "Project Hero Short Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "list_image",
      label: "List Image",
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "image",
      name: "gallery",
      label: "Gallery",
      list: true,
    },
    {
      type: "number",
      name: "weight",
      label: "Weight",
    },
  ] as TinaField[];
}
export function portfolio_sectionFields() {
  return [
    {
      type: "string",
      name: "portfolio_title",
      label: "Portfolio Title",
    },
  ] as TinaField[];
}
export function pricingFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Enable",
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "string",
      name: "heading_span",
      label: "Heading Span",
    },
    {
      type: "object",
      name: "pricing_table",
      label: "Pricing Table",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "price",
          label: "Price",
        },
        {
          type: "string",
          name: "time",
          label: "Time",
        },
        {
          type: "string",
          name: "btn_url",
          label: "Btn Url",
        },
        {
          type: "string",
          name: "btn_text",
          label: "Btn Text",
        },
        {
          type: "object",
          name: "plan",
          label: "Plan",
          list: true,
          fields: [
            {
              type: "string",
              name: "plan_details",
              label: "Plan Details",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function service_sectionFields() {
  return [
    {
      type: "string",
      name: "service_heading",
      label: "Services Heading",
    },
    {
      type: "object",
      name: "services_section",
      label: "Services Section",
      list: true,
      fields: [
        {
          type: "string",
          name: "icon_id",
          label: "Icon ID",
        },
        {
          type: "string",
          name: "section_title",
          label: "Section Title",
        },
        {
          type: "string",
          name: "section_content",
          label: "Section Content",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function services_pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "external_url",
      label: "External Url",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "image",
      name: "main_image",
      label: "Main Image",
    },
    {
      type: "string",
      name: "project_hero_short_description",
      label: "Project Hero Short Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "list_image",
      label: "List Image",
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "image",
      name: "gallery",
      label: "Gallery",
      list: true,
    },
  ] as TinaField[];
}
export function skills_sectionFields() {
  return [
    {
      type: "string",
      name: "skills_title",
      label: "Skills Title",
    },
    {
      type: "string",
      name: "skills_heading",
      label: "Skills Heading",
    },
    {
      type: "string",
      name: "skills_description",
      label: "Skills Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "skill_image",
      label: "Skill Image",
    },
    {
      type: "object",
      name: "skill_percentage_section",
      label: "Skill % Section",
      list: true,
      fields: [
        {
          type: "string",
          name: "section_title",
          label: "Skill Name",
        },
        {
          type: "number",
          name: "skill_percentage",
          label: "Level of skill",
        },
      ],
    },
  ] as TinaField[];
}
export function specialities_sectionFields() {
  return [
    {
      type: "string",
      name: "specialities_title",
      label: "Title",
    },
    {
      type: "object",
      name: "specialities_section",
      label: "Specialities section",
      list: true,
      fields: [
        {
          type: "string",
          name: "specialities_text",
          label: "Text header",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "boolean",
      name: "add_button_link",
      label: "Add Button Link?",
    },
    {
      type: "string",
      name: "button_url",
      label: "Button URL",
    },
    {
      type: "string",
      name: "button_text",
      label: "Button text",
    },
  ] as TinaField[];
}
export function teamFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Enable",
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
    },
    {
      type: "string",
      name: "headingspan",
      label: "Heading Span",
    },
    {
      type: "object",
      name: "teammember",
      label: "Team Member",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "designation",
          label: "Designation",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "socialicon",
          label: "Social Icon",
          list: true,
          fields: [
            {
              type: "string",
              name: "icon",
              label: "Icon",
            },
            {
              type: "string",
              name: "url",
              label: "Url",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function testimonialFields() {
  return [
    {
      type: "boolean",
      name: "enable",
      label: "Enable",
    },
    {
      type: "image",
      name: "bg_image",
      label: "Bg Image",
    },
    {
      type: "object",
      name: "testimonial_item",
      label: "Testimonial Item",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "date",
          label: "Date",
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function upcoming_events_sectionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Upcoming Events Section Title",
    },
    {
      type: "object",
      name: "upcoming_events",
      label: "All Upcoming Events",
      list: true,
      fields: [
        {
          type: "image",
          name: "upcoming_event_image",
          label: "Upcoming Events Main Image",
        },
        {
          type: "string",
          name: "upcoming_event_title",
          label: "Event Title",
          required: true,
        },
        {
          type: "string",
          name: "alt_text",
          label: "Image Alt Text",
        },
        {
          type: "string",
          name: "upcoming_event_location",
          label: "Event Location",
          required: true,
        },
        {
          type: "string",
          name: "upcoming_event_url",
          label: "Event link",
          required: true,
        },
        {
          type: "datetime",
          name: "upcoming_event_date",
          label: "Event Date",
          required: true,
        },
        {
          type: "number",
          name: "upcoming_event_cost",
          label: "Event Cost",
        },
      ],
    },
  ] as TinaField[];
}
export function upcoming_gigsFields() {
  return [
    {
      type: "string",
      name: "section_title",
      label: "Section Title",
    },
    {
      type: "number",
      name: "display_limit",
      label: "Display Limit",
    },
    {
      type: "string",
      name: "all_gigs_url",
      label: "The url showing all gigs",
    },
    {
      type: "string",
      name: "band_filter",
      label: "enter a bandname to get a filter of gigs for that band only",
    },
  ] as TinaField[];
}
export function video_galleryFields() {
  return [
    {
      type: "number",
      name: "display_limit",
      label: "Display Limit",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "object",
      name: "video_section",
      label: "Embedded Video",
      list: true,
      fields: [
        {
          type: "string",
          name: "type",
          label: "type",
          options: ["youtube video", "youtube playlist", "vimeo video"],
          required: true,
        },
        {
          type: "string",
          name: "embed_code",
          label: "Embed Code",
        },
        {
          type: "string",
          name: "tags",
          label: "tags",
          list: true,
          ui: {
            component: "tags",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function workshopFields() {
  return [
    {
      type: "string",
      name: "workshop_id",
      label: "Workshop ID",
    },
    {
      type: "string",
      name: "workshop_heading",
      label: "Workshop Heading",
    },
    {
      type: "string",
      name: "workshop_content",
      label: "Workshop Main Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "boolean",
      name: "display_workshop_button",
      label: "Add a button to the image?",
    },
    {
      type: "string",
      name: "workshop_button_text",
      label: "Workshop Button Text",
    },
    {
      type: "string",
      name: "workshop_button_url",
      label: "Workshop Button URL",
    },
    {
      type: "image",
      name: "image_source",
      label: "Workshop Image",
    },
  ] as TinaField[];
}
