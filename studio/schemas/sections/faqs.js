export default {
  type: 'object',
  name: 'faqs',
  title: 'FAQs',
  fields: [
    {
      title: 'Use grey background for section?',
      name: 'grey',
      type: 'boolean'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      type: 'simpleBlockContent',
      title: 'Content',
      validation: Rule => Rule.required()
    },
    {
      title: 'FAQ Items',
      name: 'faq',
      type: 'array',
      of: [{ type: 'faq' }],
      validation: Rule => Rule.required().min(1)
    },
    {
      title: 'View All Route',
      name: 'route',
      type: 'reference',
      to: [{ type: 'route' }]
    }
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `FAQs: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
