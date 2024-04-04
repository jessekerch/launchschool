// view.js handles data presentation (makes HTML from templates)
// it's a template file that dynamically renders HTML based on data sent by controller
// sends its final presentation back to controller which sends it back to the user

const photoTemplate = Handlebars.compile(document.querySelector('#photos').innerHTML);
const photoInfoTemplate = Handlebars.compile(document.querySelector('#photo_information').innerHTML);
Handlebars.registerPartial('photo_comment', document.querySelector('#photo_comment').innerHTML);
const photoCommentTemplate = Handlebars.compile(document.querySelector('#photo_comments').innerHTML);

export class View {
  constructor() {
  }

  renderPhotos(photos) {
    let slides = document.querySelector('#slides');
    let photoHTML = photoTemplate({ photos: photos });
    slides.insertAdjacentHTML('beforeend', photoHTML); 
  }

  renderPhotoInfo(photoObject) {
    let header = document.querySelector('section > header');
    header.replaceChildren();
    let photoInfo = photoInfoTemplate(photoObject);
    header.insertAdjacentHTML('beforeend', photoInfo);
  }

  renderComments(comments) {
    let commentList = document.querySelector('#comments ul');
    commentList.replaceChildren();
    let commentInfo = photoCommentTemplate({ comments: comments });
    commentList.insertAdjacentHTML('beforeend', commentInfo);
  }

  addComment(comment) {
    let comments = [comment];
    let commentList = document.querySelector('#comments ul');
    let commentInfo = photoCommentTemplate({ comments: comments });
    commentList.insertAdjacentHTML('beforeend', commentInfo);
  }

  highlightPhoto(photoId) {
    let slides = document.querySelector('#slides').children;
    for (let slide of slides) {
      if (slide.dataset.id == photoId) {
        slide.style.opacity = '1';
      } else {
        slide.style.opacity = '0';
      }
    }
  }
}

