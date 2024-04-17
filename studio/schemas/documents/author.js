export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      title: 'Build a page for this team member?',
      name: 'page',
      type: 'boolean'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      validation: Rule => Rule.required()
    },
    {
      name: 'office',
      type: 'string',
      title: 'Office',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      title: 'Twitter URL',
      name: 'twitter',
      type: 'url'
    },
    {
      title: 'LinkedIn URL',
      name: 'linkedin',
      type: 'url'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Page Content'
    },
    {
      title: 'SEO options',
      name: 'seo',
      description: 'Set SEO here',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
