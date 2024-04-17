export default {
  type: 'object',
  name: 'formHero',
  title: 'Form Hero',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: Rule => Rule.required()
    },
    {
      name: 'subHeading',
      type: 'text',
      title: 'Sub Heading'
      //validation: Rule => Rule.required()
    },
    {
      name: 'formHeading',
      type: 'string',
      title: 'Form Heading',
      validation: Rule => Rule.required()
    },
    {
      name: 'formSubHeading',
      type: 'text',
      title: 'Form Sub Heading',
      validation: Rule => Rule.required()
    },
    {
      name: 'illustration',
      type: 'illustration',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'label',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `From Hero: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
