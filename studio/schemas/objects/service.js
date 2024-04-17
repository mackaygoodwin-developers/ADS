export default {
  name: 'service',
  type: 'object',
  title: 'Service',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: Rule => Rule.required()
    },
    {
      name: 'subText',
      type: 'string',
      title: 'Sub text',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      type: 'illustration',
      validation: Rule => Rule.required()
    },
    {
      title: 'Route',
      name: 'route',
      type: 'reference',
      to: [{ type: 'route' }, { type: 'post' }, { type: 'guide' }]
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'icon'
    }
  }
}
