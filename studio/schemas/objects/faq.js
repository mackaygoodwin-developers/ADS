export default {
  name: 'faq',
  type: 'object',
  title: 'FAQ',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: Rule => Rule.required()
    },
    {
      name: 'subText',
      type: 'simpleBlockContent',
      title: 'Sub text',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'heading'
    }
  }
}
// TODO: Add validation for this and all
