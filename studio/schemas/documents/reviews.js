export default {
  name: 'reviews',
  type: 'document',
  title: 'Reviews',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: Rule =>
        Rule.required()
          .min(0)
          .max(5)
    },
    {
      name: 'illustration',
      type: 'illustration',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Short Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'review',
      type: 'text',
      title: 'Review Content',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'illustration.image'
    }
  }
}
