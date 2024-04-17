export default {
  type: 'object',
  name: 'team',
  title: 'Team Carousel',
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
      type: 'simpleBlockContent',
      title: 'Sub Heading',
      validation: Rule => Rule.required()
    },
    {
      name: 'members',
      type: 'array',
      title: 'Team Members',
      description: 'Team Members to add for this block',
      of: [
        {
          type: 'reference',
          to: [{ type: 'author' }]
        }
      ],
      validation: Rule => Rule.required().min(1)
    },
    {
      title: 'Hide view all button?',
      name: 'button',
      type: 'boolean'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `Team Carousel: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
