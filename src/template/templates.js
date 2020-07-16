const ENV = require('../../webpack/configs/build');

const getJsName = (folder, name) => {
  return `${folder}${folder ? '/' : ''}${name}${ENV.BUILD.FILENAME_SUFFIX}`;
}

module.exports = [
  {
    input: 'app',
    output: '',
    name: 'index',
    html: {
      title: 'index',
      meta: [
        {name: 'subject', content: 'index'},
        {name: 'keywords', content: 'index'},
        {name: 'description', content: 'index'},
      ],
    },
    js: [getJsName('', 'index')],
  },
  {
    input: 'app/blog',
    output: 'blog',
    name: 'blog',
    html: {
      title: 'js2uix blog',
      meta: [
        {name: 'subject', content: 'test'},
        {name: 'keywords', content: 'test'},
        {name: 'description', content: 'test'},
      ],
    },
    js: [getJsName('blog', 'blog')],
  },
];