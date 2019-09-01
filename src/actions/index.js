// Select song action
export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}