/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { PhotosService, PostService, TodoService } from './02-OPC-B';
import HttpClient from './02-OPC-C';

(async () => {
  const httpClient = new HttpClient();

  const todoService = new TodoService(httpClient);
  const postService = new PostService(httpClient);
  const photosService = new PhotosService(httpClient);

  const todos = await todoService.getTodoItems();
  const posts = await postService.getPosts();
  const photos = await photosService.getPhotos();

  console.log({ todos, posts, photos });
})();
