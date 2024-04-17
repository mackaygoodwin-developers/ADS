export default {
  name: 'borderButton',
  type: 'object',
  title: 'Border Button',
  fields: [
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text'
    },
    {
      title: 'Button Route',
      name: 'route',
      type: 'reference',
      to: [{ type: 'route' }, { type: 'post' }, { type: 'guide' }]
    }
  ],
  preview: {
    select: {
      title: 'heading'
    }
  }
}
// TODO: Add validation for this and all
