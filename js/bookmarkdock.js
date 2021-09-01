const bookmarkContainer = document.querySelector("#bookmark-container");
const bookmarkDock = document.querySelector("#bookmark-dock");

const bookmarks = [{
    name: "1 Google Drive",
    url: "https://drive.google.com/drive/"
}, {
    name: "2 Google Keep",
    url: "https://keep.google.com/"
}, {
    name: "3 EGK Tools",
    url: "https://egktools.herokuapp.com/"
}, {
    name: "4 Telegram",
    url: "https://web.telegram.org/"
}, {
    name: "5 Netflix",
    url: "https://www.netflix.com/"
}, {
    name: "6 Coupang Play",
    url: "https://www.coupangplay.com/"
}, {
    name: "7 Clien",
    url: "https://www.clien.net/"
}, {
    name: "8 Humoruniv",
    url: "http://web.humoruniv.com/board/humor/list.html?table=pds"
}]

function showBookmark() {
    for (i = 0; i < 8; i++) {
        const bookmark = bookmarks[i];
        const a = document.createElement("a");
        a.innerText = bookmark.name;
        a.href = bookmark.url;
        a.target = "_blank";

        bookmarkDock.appendChild(a);
    }
}
showBookmark();

let isListenerActivated = false;

function handleKeydown(event) {
    const key = event.code;
    if (key === "Backslash") {
        const containerOpacity = bookmarkContainer.style.opacity;

        function openBookmark(event) {
            if (isListenerActivated === true) {
                const key = event.code.replace("Digit", "").replace("Numpad", "");
                const url = bookmarks[parseInt(key) - 1].url;
                window.open(url);
            }
        }

        if (containerOpacity === "0") {
            bookmarkContainer.style.opacity = "0.8";

            window.addEventListener("keydown", openBookmark);
            isListenerActivated = true;
        } else {
            bookmarkContainer.style.opacity = "0";
            isListenerActivated = false;
        }
    }
}

window.addEventListener("keydown", handleKeydown);