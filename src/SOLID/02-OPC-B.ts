/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

// Hay que agregar la dependencia de axios ```yarn add axios```
// import axios from 'axios';

import HttpClient from './02-OPC-D';

class Http {
  constructor(protected http: HttpClient) {
    this.http = http;
  }
}

export class TodoService extends Http {
  async getTodoItems() {
    const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
    return data;
  }
}

export class PostService extends Http {
  async getPosts() {
    const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
    return data;
  }
}

export class PhotosService extends Http {
  async getPhotos() {
    const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
    return data;
  }
}
