export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '615561581f503dbfe00976c9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-j3vxmvan',
                  apiId: 'df99abe3-b7d0-4a0b-9306-324a180f0ca7'
                },
                {
                  buildHookId: '61556158a8c35cba6de7e5b0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-7cb91gwk',
                  apiId: '8f15d1e0-7a1c-4e85-92ff-7fec798440f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thanawatkeattikulkangwan/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-7cb91gwk.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
