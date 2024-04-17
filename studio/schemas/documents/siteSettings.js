export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Google Rating',
      name: 'googleRating',
      type: 'number',
      validation: Rule =>
        Rule.required()
          .min(0)
          .max(5)
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number'
    },
    {
      name: 'NavMenu',
      type: 'reference',
      title: 'Non Page Nav Menu',
      // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
      to: [{ type: 'navigationMenu' }],
      description: 'Which nav menu should be shown on resource centre, blog, events, ect ...'
    },
    {
      title: 'Defalt SEO options',
      name: 'seo',
      description: 'Set SEO here',
      type: 'seo'
    },
    {
      title: 'CTA Route',
      name: 'ctaRoute',
      type: 'reference',
      description: 'URL for the main "Get a Free Consultation" call to action button',
      to: [{ type: 'route' }]
    }
  ]
}
