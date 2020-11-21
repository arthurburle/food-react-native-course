import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 6qPww-nfliCC14rFnsju09mfmTuozGpO0npsyeObWTyq1j3OcfvndfY_HtByfqwfMmJHZmZFgTA6KbaDT4X9J9etiOv0RUtspBLScO1YTT56aeL3HpRUar2-CnOwX3Yx'
  }
});
