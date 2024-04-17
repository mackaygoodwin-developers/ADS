export default {
  title: 'SEO Config',
  name: 'seo',
  type: 'object',
  fields: [
    {
      title: 'Page Title',
      name: 'title',
      type: 'string',
      description: 'Should be between 40 - 65 characters',
      validation: Rule => Rule.max(70).warning('Should be under 70 characters')
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 4,
      description: 'Should be between 130 - 165  v characters',
      validation: Rule => Rule.max(165).warning('Should be under 165 characters')
    },
    {
      title: 'Open Graph Image',
      description: 'Facebook recommends 1200x630 (will be auto resized)',
      name: 'image',
      type: 'mainImage'
    },
    {
      title: 'Canonical URL',
      description: 'Canonical url for this route',
      name: 'canonical',
      type: 'url'
    },
    {
      title: 'Include in sitemap',
      description: 'Will be removed from /sitemap.xml',
      name: 'includeInSitemap',
      type: 'boolean'
    },
    {
      title: 'Disallow in robots meta tag ',
      description: 'Hide this route from search engines',
      name: 'disallowRobots',
      type: 'boolean'
    },
    {
      title: 'Author',
      description: 'Author of the page',
      name: 'author',
      type: 'string'
    }
    /*
    // You can add videos to Open Graph tags too
    {
      name: 'video',
      title: 'Video',
      type: 'mux.video'
    }
    */
  ],
  preview: {
    select: {
      title: 'title',
      route: 'route.slug.current',
      link: 'link'
    },
    prepare({ title, route, link }) {
      return {
        title,
        subtitle: route ? `Route: /${route}/` : link ? `External link: ${link}` : 'Not set'
      }
    }
  }
}
