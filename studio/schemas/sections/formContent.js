export default {
  type: 'object',
  name: 'formContent',
  title: 'Form Content',
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
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'content',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `Form Content: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
