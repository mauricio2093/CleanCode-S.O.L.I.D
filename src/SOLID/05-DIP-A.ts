/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { PostService } from './05-DIP-B';
import { JsonDataBaseService } from './05-DIP-D';

// Main
(async () => {
  const provider = new JsonDataBaseService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
