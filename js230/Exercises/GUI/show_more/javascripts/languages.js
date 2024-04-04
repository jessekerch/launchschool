const languages = [
  {
    name: 'Ruby',
    id: '1',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    id: '2',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'React',
    id: '4',
    description: 'React is a JavaScript library for creating user interfaces for web, mobile, and desktop apps. ' +
    'It was created by Jordan Walke, a software engineer at Meta, who initially developed a prototype called "F-Bolt" ' +
    'before later renaming it to "FaxJS". React was first deployed on Facebook\'s News Feed in 2011 and subsequently ' +
    'integrated into Instagram in 2012. In May 2013, at JSConf US, the project was officially open-sourced.'
  }
];


document.addEventListener('DOMContentLoaded', function(event) {
  let articleTemplate = Handlebars.compile(document.querySelector('#article_template').innerHTML);
  let articles = document.querySelector('#articles');

  languages.forEach(language => {
    let brief = {...language};
    brief.description = brief.description.slice(0, 120) + '...';
    let newArticle = articleTemplate(brief);
    articles.insertAdjacentHTML('beforeend', newArticle);
  })

  document.querySelector('#articles').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      let targetId = event.target.dataset.articleId;
      let paragraph = event.target.parentElement.querySelector('p');
      let descriptionText;
      let buttonText = event.target.innerText;
      paragraph.innerText = descriptionText;
      if (buttonText === '+Show More') {
        descriptionText = languages.filter(language => language.id == targetId)[0].description;
        buttonText = '-Show Less'
      } else {
        descriptionText = languages.filter(language => language.id == targetId)[0].description.slice(0, 120) + '...';
        buttonText = '+Show More'
      }
      paragraph.innerText = descriptionText;
      event.target.innerText = buttonText;
    }
  })
});
