/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */

// import localPostsA from '../data/local-database-A.json';
import localPostsB from '../data/local-database-B.json';
import { Post } from './05-DIP-B';

export abstract class PostProvider {
  abstract getPosts(): Promise<Post[]>;
}

export class JsonDataBaseService implements PostProvider {
  async getPosts() {
    return localPostsB;
  }
}
