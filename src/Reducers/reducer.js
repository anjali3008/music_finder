import { SET_MUSIC_LIST } from '../Actions/setMusicListAction';

export default function musicList(state = {}, action) {
    switch (action.type) {
        case SET_MUSIC_LIST:
            return {...state, ...action.data};
        default:
            return state;
    }
}