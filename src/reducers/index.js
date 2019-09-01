import { combineReducers } from 'redux';

const songsList = () => {
    return [
        {title: 'Apuskeleke', duration: '2:14'},
        {title: 'Bangers', duration: '3:23'},
        {title: 'Seven', duration: '2:45'},
        {title: 'Ohemaa', duration: '3:00'}
    ]
}

const selectedSong = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songsList: songsList,
    selectedSong: selectedSong
});