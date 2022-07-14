/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

class HttpClient {
  async get(url: string) {
    const { data, status } = await axios.get(url);
    console.log({ status });
    return { data, status };
  }
}
export default HttpClient;
