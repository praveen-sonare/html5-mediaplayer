export function on_metadata_changes() {
}

export function on_playlist_changes() {
}

export function loop() {
    return new Promise((resolve, reject) => {
        resolve();
    });
}

export function pickTrack() {
}

export function play() {
    return new Promise((resolve, reject) => {
        resolve();
    });
}

export function pause() {
}

export function previous() {
}

export function next() {
}

export function seek() {
}

function get_test_playlist() {
    return {
        playlist: [
            { index: 1, title: "Title 1", genre: "Genre 1", artist: "Artist 1"},
            { index: 2, title: "Title 2", genre: "Genre 2", artist: "Artist 2"},
            { index: 3, title: "Title 3", genre: "Genre 3", artist: "Artist 3"},
            { index: 4, title: "Title 4", genre: "Genre 4", artist: "Artist 4"},
        ]
    };
}

export function playlist() {
    return new Promise((resolve, reject) => {
        resolve(get_test_playlist());
    });
}
