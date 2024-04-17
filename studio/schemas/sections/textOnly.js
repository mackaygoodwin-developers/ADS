export default {
  type: 'object',
  name: 'textOnly',
  title: 'Text Only',
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
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `Text Only: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
