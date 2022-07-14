/* eslint-disable class-methods-use-this */
// import axios from 'axios';

class HttpClient {
  // async get(url: string) {
  //   const { data, status } = await axios.get(url);
  //   console.log({ status });
  //   return { data, status };
  // }
  async get(url: string) {
    const resp = await fetch(url);
    const data = await resp.json();
    return { data, status: resp.status };
  }
}
export default HttpClient;
