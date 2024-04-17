export default {
  type: 'object',
  name: 'process',
  title: 'Process',
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
      name: 'subHeading',
      type: 'text',
      title: 'Sub Heading',
      validation: Rule => Rule.required()
    },
    {
      name: 'stage',
      type: 'array',
      title: 'Stage Item',
      description: 'Stage items, order the way you want it to appare',
      type: 'array',
      of: [{ type: 'stage' }],
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
        title: `Process: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
