export default {
  type: 'object',
  name: 'newsCarousel',
  title: 'News Carousel',
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
      name: 'category',
      title: 'Category',
      description: 'Limit guides to a category (leave blank for all)',
      type: 'reference',
      to: [{ type: 'category' }]
    }
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `News Carousel: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
