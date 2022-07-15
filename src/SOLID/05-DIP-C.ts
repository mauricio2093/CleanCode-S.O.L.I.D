/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */

import { PostProvider } from './05-DIP-D';

/* eslint-disable no-empty-function */
class LocalDataBaseService implements PostProvider {
  async getPosts() {
    return [
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
      }];
  }
}
export default LocalDataBaseService;
