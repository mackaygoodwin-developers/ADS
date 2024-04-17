export default {
  type: 'object',
  name: 'tileImageContent',
  title: 'Tile Image & Content',
  fields: [
    {
      title: 'Use grey background for section?',
      name: 'grey',
      type: 'boolean'
    },
    {
      title: 'Layout Option',
      name: 'layout',
      type: 'string',
      options: {
        list: [
          { title: 'Image Left Content Right', value: 'left' },
          { title: 'Image Right Content Left', value: 'right' }
        ]
      }
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
      name: 'background',
      type: 'illustration',
      validation: Rule => Rule.required()
    },
    {
      title: 'Border Button',
      name: 'borderButton',
      type: 'borderButton'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `Tile Image & Content: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
