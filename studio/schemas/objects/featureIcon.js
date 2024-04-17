export default {
  name: 'featureIcon',
  type: 'object',
  title: 'FeatureIcon',
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
      title: 'Sub text'
    },
    {
      name: 'icon',
      type: 'illustration',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'icon.image'
    }
  }
}
