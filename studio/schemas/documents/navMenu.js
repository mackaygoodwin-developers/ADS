export default {
  type: 'document',
  name: 'navigationMenu',
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
      description: 'Only the first value of these will be used'
    }
  ],
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'array',
      name: 'items',
      of: [{type: 'menuBranch'}],
      validation: Rule => Rule.required(),
      options: {
        editModal: 'fullscreen'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      landingPage: 'landingPageRoute.slug.current',
      route: 'route',
      link: 'link'
    },
    prepare ({title, landingPage, route, link}) {
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

// TODO: Required on landing page
