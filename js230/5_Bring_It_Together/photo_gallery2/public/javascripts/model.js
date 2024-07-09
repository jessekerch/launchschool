// model.js gets data requests from controller
// handles interaction with database, handles data logic validation, saving, deleting, etc
// model doesn't handle data, just sends it to controller
// doesn't decide what to do with success or failure, that's done by controller
// send any data back to controller (gallery.js)

export class Model {
  constructor() {
  }

  async getData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }

  async postData(url, info) {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: info,
    });
    let data = await response.json();
    return data;
  }
}