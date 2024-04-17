export default {
  type: 'object',
  name: 'services',
  title: 'Services',
  fields: [
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
      name: 'background',
      type: 'illustration',
      validation: Rule => Rule.required()
    },
    {
      title: 'Service Items',
      name: 'service',
      type: 'array',
      of: [{ type: 'service' }],
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
        title: `Services: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
