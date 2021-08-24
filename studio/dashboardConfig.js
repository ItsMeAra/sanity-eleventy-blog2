export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '612552194c848b134b5113a5',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-2-studio-zwm65en3',
                  apiId: '7185c989-9589-4e4c-a731-3831f98b2d1a'
                },
                {
                  buildHookId: '612552197954fc1547f40ee8',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-2-web-mi54rf9u',
                  apiId: '6823c43d-6531-49af-8795-f70e5bc9d08a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ItsMeAra/sanity-eleventy-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-2-web-mi54rf9u.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
