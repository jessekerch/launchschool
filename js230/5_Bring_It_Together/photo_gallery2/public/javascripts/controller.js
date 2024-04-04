// model.js gets data requests from controller
// handles interaction with database, handles data logic validation, saving, deleting, etc
// controller doesn't handle data, just sends it to controller
// doesn't decide what to do with success or failure, that's done by controller
// send any data back to controller (gallery.js)

export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.photoId = 1;
    this.setupGallery();
  }

  setupGallery() {
    this.setupPhotos();
    this.setupNav();
    this.refreshComments();
    this.setButtons();
    this.setupCommentForm();
  }

  setupPhotos() {
    this.model.getData('http://localhost:3000/photos')
    .then(data => {
      this.photos = data;
      this.view.renderPhotos(this.photos);
      let firstPhoto = this.photos[0];
      this.view.renderPhotoInfo(firstPhoto);
      this.view.highlightPhoto(this.photoId);
    })
    .catch(error => console.log('getData error message: ' + error.message));
  }
  
  refreshComments() {
    this.model.getData('http://localhost:3000/comments?photo_id=' + this.photoId)
      .then((commentCollection) => {
        this.view.renderComments(commentCollection);
      })
      .catch(error => console.log('getData error message: ' + error.message));
    }

  setupNav() {
    document.querySelector('#slideshow ul').addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.className === 'prev') {
        this.photoId = this.photoId <= 1 ? this.photos.length : this.photoId - 1;
      } else if (event.target.className === 'next') {
        this.photoId = this.photoId >= this.photos.length ? 1 : this.photoId + 1;
      }
      this.view.highlightPhoto(this.photoId);
      let currentPhoto = this.getPhoto(this.photoId);
      this.view.renderPhotoInfo(currentPhoto);
      this.refreshComments();
    })
  }

  getPhoto(id) {
    return this.photos.filter(photo => photo.id == id)[0];
  }

  setButtons() {
    document.querySelector('section > header').addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.tagName === 'A') {
        let button = event.target;
        let href = button.getAttribute('href');
        let dataId = button.getAttribute('data-id');
        let text = button.textContent;
        
        this.model.postData(href, 'photo_id=' + dataId)
        .then(function(response) {
          let newTotal = response.total;
          button.textContent = text.replace(/[0-9]+/, newTotal);
          })
        .catch(error => console.log('postData error message: ' + error.message));
      }
    });
  }

  setupCommentForm() {
    let form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let formData = new FormData(event.target);
      formData.set('photo_id', String(this.photoId));
      let info = new URLSearchParams([...formData]);
      this.model.postData('/comments/new', info)
      .then(json => {
        this.view.addComment(json);
        form.reset();
      })
      .catch(error => console.log('postData error message: ' + error.message));
    });
  }

}
