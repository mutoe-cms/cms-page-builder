const examplePageConfig: UI.PageConfig = {
  id: '',
  sections: [
    {
      id: 'section1',
      type: 'full-width',
      module: {
        type: 'full-width-header',
        title: 'Lorem ipsum',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aut debitis dicta exercitationem expedita laudantium magni modi molestiae necessitatibus nisi nobis non, praesentium reiciendis, repellat suscipit ut velit voluptas.',
        button1: {
          text: 'Goto'
        },
        button2: {
          text: 'Link',
          link: 'https://google.com'
        },
        style: {
          backgroundColor: '#7ebec5'
        }
      },
    },
    {
      id: 'section2',
      type: 'full-width',
      module: {
        type: 'full-width-header',
        title: 'Lorem ipsum',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aut debitis dicta exercitationem expedita laudantium magni modi molestiae necessitatibus nisi nobis non, praesentium reiciendis, repellat suscipit ut velit voluptas.',
        button1: {
          text: 'Goto'
        },
        button2: {
          text: 'Link',
          link: 'https://google.com'
        },
        style: {
          backgroundColor: '#c4a000'
        }
      },
    },
  ],
}

export default examplePageConfig
