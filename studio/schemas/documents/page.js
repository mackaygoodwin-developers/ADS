export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'pageCategory',
      type: 'reference',
      title: 'Page Category',
      to: [{ type: 'pageCategory' }],
      description: 'Page category used for filtering within CMS'
    },
    {
      name: 'breadcrumb',
      type: 'array',
      title: 'Page breadcrumb',
      description: 'Used within both onpage and schema',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }]
        }
      ]
    },
    {
      name: 'navMenu',
      type: 'reference',
      title: 'Navigation menu',
      // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
      to: [{ type: 'navigationMenu' }],
      description: 'Which nav menu should be shown, if any'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'simpleHero' },
        { type: 'formHero' },
        { type: 'whyTrust' },
        { type: 'featureIcons' },
        { type: 'video' },
        { type: 'team' },
        { type: 'teamGrid' },
        { type: 'textOnly' },
        { type: 'services' },
        { type: 'faqs' },
        { type: 'reviewCarousel' },
        { type: 'tileImageContent' },
        { type: 'findOffice' },
        { type: 'mapLocation' },
        { type: 'formContent' },
        { type: 'guideCarousel' },
        { type: 'newsCarousel' },
        { type: 'process' }
      ],
      validation: Rule => Rule.required().min(1)
    }
  ]
}
