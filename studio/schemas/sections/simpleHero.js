export default {
  type: 'object',
  name: 'simpleHero',
  title: 'Simple Hero',
  fields: [
    {
      title: 'Show down icon?',
      name: 'downIcon',
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
      title: 'Sub Heading'
      //validation: Rule => Rule.required()
    },
    {
      name: 'illustration',
      type: 'illustration',
      validation: Rule => Rule.required()
    },
    {
      title: 'Button Route',
      name: 'route',
      type: 'reference',
      to: [{ type: 'route' }]
    },
    {
      title: 'Show Health Check Button?',
      name: 'healthCheck',
      type: 'boolean'
    },
    {
      title: 'Show Health Check Login Buttons?',
      name: 'healthCheckLogin',
      description: 'Note: If selected other button will not show',
      type: 'boolean'
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
        title: `Hero: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
