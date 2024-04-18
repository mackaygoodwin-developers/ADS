export default {
  widgets: [
    //{ name: 'structure-menu' }, - removed to fix bug
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebe54e00a2659be13f44e70',
                  title: 'Sanity Studio',
                  name: 'ads-sanity-gatsby-studio',
                  apiId: '42ef96fd-f39e-42c3-820c-0bb6dc4fb55f'
                },
                {
                  buildHookId: '5ebe54e133a140d9198c27a0',
                  title: 'Website',
                  name: 'ads-sanity-gatsby',
                  apiId: '7d43b832-4091-443f-ad5a-47fce260de70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pdimo/ads-sanity-gatsby',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ads-sanity-gatsby.netlify.app', category: 'apps' },
          { title: 'Live URL', value: 'https://preview-adssanitygatsby.gtsb.io', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
