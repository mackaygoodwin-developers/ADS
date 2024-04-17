export default {
  type: 'object',
  name: 'findOffice',
  title: 'Find office',
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
      type: 'text',
      title: 'Content',
      validation: Rule => Rule.required()
    },
    {
      name: 'routes',
      type: 'array',
      title: 'routes',
      description: 'Pages to list for this section',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }]
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
        title: `Find office: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
