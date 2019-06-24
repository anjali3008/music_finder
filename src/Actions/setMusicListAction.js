export const SET_MUSIC_LIST = "SET_MUSIC_LIST";

export default function setMusicList(data) {
    return {
        type: SET_MUSIC_LIST,
        data
    };
}