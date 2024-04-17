export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fieldsets: [
    { name: 'guides', title: 'Guide Pages' },
    { name: 'news', title: 'News Pages' }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Category slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Guide Heading',
      fieldset: 'guides',
      validation: Rule => Rule.required()
    },
    {
      name: 'subHeading',
      type: 'string',
      title: 'Guide Sub Heading',
      fieldset: 'guides',
      validation: Rule => Rule.required()
    },
    {
      name: 'bodyContent',
      type: 'simpleBlockContent',
      title: 'Guide Body Content',
      fieldset: 'guides',
      validation: Rule => Rule.required()
    },
    {
      name: 'newsHeading',
      type: 'string',
      title: 'News Heading',
      fieldset: 'news',
      validation: Rule => Rule.required()
    },
    {
      name: 'newsSubHeading',
      type: 'string',
      title: 'News Sub Heading',
      fieldset: 'news',
      validation: Rule => Rule.required()
    },
    {
      name: 'newsBodyContent',
      type: 'simpleBlockContent',
      title: 'News Body Content',
      fieldset: 'news',
      validation: Rule => Rule.required()
    },
    {
      name: 'background',
      title: 'Header background image',
      type: 'illustration',
      validation: Rule => Rule.required()
    }
  ]
}
