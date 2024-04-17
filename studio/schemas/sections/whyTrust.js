export default {
  type: 'object',
  name: 'whyTrust',
  title: 'Why Trust Us',
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
      name: 'reviews',
      type: 'array',
      title: 'Reviews',
      description: 'Reviews for this section',
      of: [
        {
          type: 'reference',
          to: [{ type: 'reviews' }]
        }
      ],
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `Why Trust Us: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
