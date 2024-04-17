export default {
  name: 'pageCategory',
  type: 'document',
  title: 'Page Categories',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    }
  ]
}
