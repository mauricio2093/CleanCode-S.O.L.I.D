/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */

import { PostProvider } from './05-DIP-D';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  constructor(private postProvider: PostProvider) {}

  async getPosts() {
    // const jsonDB = new LocalDataBaseService();
    // this.posts = await jsonDB.getFakePosts();
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
