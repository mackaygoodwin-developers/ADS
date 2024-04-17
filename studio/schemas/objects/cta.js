export default {
  title: 'Menu Link',
  name: 'cta',
  type: 'object',
  fieldsets: [
    {
      title: 'Menu Link',
      name: 'link',
      description: 'Only the first value of these will be used'
    }
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Landing page',
      name: 'landingPageRoute',
      type: 'reference',
      fieldset: 'link',
      to: [{ type: 'route' }]
    },
    {
      title: 'Path',
      name: 'route',
      fieldset: 'link',
      description: 'Example: blog or blog/post',
      type: 'string'
    },
    {
      title: 'External link',
      name: 'link',
      type: 'string',
      description: 'Example: https://www.sanity.io',
      fieldset: 'link'
    },
    {
      name: 'icon',
      title: 'Icon for feature dropdown (must be set within branch)',
      type: 'illustration'
    }
  ],
  preview: {
    select: {
      title: 'title',
      landingPage: 'landingPageRoute.slug.current',
      route: 'route',
      link: 'link'
    },
    prepare({ title, landingPage, route, link }) {
      let subtitle = 'Not set'
      if (landingPage) {
        subtitle = `Route: /${landingPage}`
      }
      if (route) {
        subtitle = `Route: ${route}`
      }
      if (link) {
        subtitle = `External: ${link}`
      }
      return {
        title,
        subtitle
      }
    }
  }
}
