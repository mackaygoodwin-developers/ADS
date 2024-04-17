export default {
  type: 'object',
  name: 'mapLocation',
  title: 'Map Location',
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
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: Rule => Rule.required()
    },
    {
      name: 'googleMapUrl',
      type: 'string',
      title: 'Google map embed URL',
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
        title: `Map Location: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
