export default {
  title: 'Menu Branch',
  name: 'menuBranch',
  type: 'object',
  fieldsets: [
    {
      title: 'Branch Menu Link',
      name: 'link',
      description: 'Only the first value of these will be used'
    }
  ],
  fields: [
    {
      title: 'Is this menu a featured image dropdown?',
      name: 'featureImage',
      type: 'boolean'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Landing page',
      name: 'landingPageRoute',
      type: 'reference',
      fieldset: 'link',
      to: [{ type: 'route' }]
    },
    {
      title: 'Path',
      name: 'route',
      fieldset: 'link',
      description: 'Example: blog or blog/post',
      type: 'string'
    },
    {
      title: 'Menu Items',
      description: 'Child menu entries of this branch',
      name: 'children',
      type: 'array',
      of: [
        { type: 'cta' }
        // { type: 'menuBranch' } // Allow menuBranches for infinite recursiveness. Breaks GraphQL though.
      ],
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '',
      media: ''
    },
    prepare(selection) {
      return {
        ...selection,
        subtitle: 'Menu Branch'
      }
    }
  }
}

// TODO: Make Path "eg /blog" select options to limit client mistakes
