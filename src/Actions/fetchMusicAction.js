import axios from 'axios';
import setMusicList from './setMusicListAction';

export default function getMusicList(searchItem) {
    return function(dispatch) {
      return axios.get(`https://itunes-search-iypahdbpmn.now.sh/api/search?media=all&term=/${searchItem}`)
        .then(({ data }) => {
        dispatch(setMusicList(data));
      });
    };
  }