import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID WIIW6rkWCX7svRG-re5j41CuBLOyaMTBNZ15WPLTmOU'
  }
});
