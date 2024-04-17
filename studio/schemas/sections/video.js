export default {
  type: 'object',
  name: 'video',
  title: 'Video',
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
      name: 'backImage',
      type: 'illustration',
      validation: Rule => Rule.required()
    },
    {
      name: 'frontImage',
      type: 'illustration',
      validation: Rule => Rule.required()
    },
    {
      name: 'youtubeURL',
      type: 'string',
      title: 'Youtube Video URL',
      validation: Rule => Rule.required()
    },
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'string'
    },
    {
      title: 'Button Route',
      name: 'route',
      type: 'reference',
      to: [{ type: 'route' }]
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
        title: `Video: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
