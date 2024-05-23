export const getLinks = (userId = '') => {
    const links = [
      {
        name: 'Destinos',
        link: `/Destinos`
      },
      {
        name: 'Contacto',
        link: '/Contacto'
      },
    ]
    if (userId) {
      return ([
        /* {
          name: 'Blog',
          link: `/Blog/${userId}`
        }, */
        {
          name: 'Test',
          link: `/Test/${userId}`
        },
        {
          name: 'Destinos',
          link: `/Destinos`
        },
        {
          name: 'Contacto',
          link: '/Contacto'
        }
  
      ])
    }
    return links
  }