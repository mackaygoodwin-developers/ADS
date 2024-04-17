export default {
  type: 'object',
  name: 'featureIcons',
  title: 'Feature Icons',
  fields: [
    {
      title: 'Use grey background for section?',
      name: 'grey',
      type: 'boolean'
    },
    {
      title: 'Feature Icons',
      name: 'icons',
      type: 'array',
      of: [{ type: 'featureIcon' }],
      validation: Rule => Rule.required().min(1)
    }
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled'
    },
    prepare() {
      return {
        title: `Feature Icons`
      }
    }
  }
}
