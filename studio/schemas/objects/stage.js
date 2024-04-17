export default {
  name: 'stage',
  type: 'object',
  title: 'Stage Item',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'shortHeading',
      type: 'string',
      title: 'Short Heading',
      description: 'used on icon links'
    },
    {
      name: 'content',
      type: 'simpleBlockContent',
      title: 'Content'
    }
  ],
  preview: {
    select: {
      title: 'heading'
    }
  }
}
// TODO: Add validation for this and all
