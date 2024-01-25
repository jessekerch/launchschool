document.addEventListener('DOMContentLoaded', event => {
  let linkList = document.querySelector('ul');
  let articles = document.querySelectorAll('article');

  function removeAllHighlights() {
    articles.forEach(article => {
      article.classList.remove('highlight');
    })
  }

  document.addEventListener('click', event => {
    removeAllHighlights();
  }, true)

  linkList.addEventListener('click', event => {
    event.stopPropagation;

    let targetArticleIndex = Number(event.target.href.slice(-1)) - 1;
    let targetArticle = articles[targetArticleIndex];
    
    removeAllHighlights();
    
    // add highlight class to article with same ID as clicked link
    targetArticle.classList.add('highlight');
  })

  articles.forEach(article => {
    article.addEventListener('click', event => {
      event.stopPropagation;

      removeAllHighlights();
      
      // add highlight class to article with same ID as clicked link
      article.classList.add('highlight');
    })
  })

})