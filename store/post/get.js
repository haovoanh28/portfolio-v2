export const state = () => {
  return {
    posts: [
      {
        id: 1,
        imgSrc:
          'https://images.unsplash.com/photo-1611095560396-89216a352761?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident blanditiis magnam aut nulla dicta neque.',
        brief:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ea magnam provident quod illo assumenda. Id saepe, deleniti odio, neque consectetur dicta provident officia eos assumenda ex atque animi explicabo!',
        tags: [
          {
            text: 'technology',
            bgColor: '#ff8c1a',
          },
        ],
        hashtags: ['vuejs', 'javascript', 'html', 'css'],
        createdAt: '02 August 2019',
        author: 'Vo Anh Hao',
      },
      {
        id: 2,
        imgSrc:
          'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
        title:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident blanditiis magnam aut nulla dicta neque.',
        brief:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ea magnam provident quod illo assumenda. Id saepe, deleniti odio, neque consectetur dicta provident officia eos assumenda ex atque animi explicabo!',
        tags: [
          {
            text: 'technology',
            bgColor: '#ff8c1a',
          },
        ],
        hashtags: ['javascript', 'html', 'css', 'php'],
        createdAt: '02 August 2019',
        author: 'Vo Anh Hao',
      },
      {
        id: 3,
        imgSrc:
          'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident blanditiis magnam aut nulla dicta neque.',
        brief:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ea magnam provident quod illo assumenda. Id saepe, deleniti odio, neque consectetur dicta provident officia eos assumenda ex atque animi explicabo!',
        tags: [
          {
            text: 'technology',
            bgColor: '#ff8c1a',
          },
        ],
        hashtags: ['frontend', 'backend'],
        createdAt: '02 August 2019',
        author: 'Vo Anh Hao',
      },
    ],
  }
}
