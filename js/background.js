// Unsplash API Fetch Random Image

function getLocalImg() {
    const imgNames = ["0.jpg", "1.jpg", "2.jpg"];

    const randint = Math.floor(Math.random() * imgNames.length);
    const randomImgName = imgNames[randint];

    imgSrc = "img/" + randomImgName;
    document.body.style.backgroundImage = `url('${imgSrc}')`;
}

const apiUrl = "https://api.unsplash.com/photos/random?client_id=Gvh6T8PSaNUAvpYwDUn3C37pbbTDCIqnzNqjX1RGqbc&orientation=landscape&query=wallpaper";
fetch(apiUrl).then(response => {
    if (response.ok === false) {
        getLocalImg();
    } else {
        return response.json();
    }
}).then(data => {
    const imgSrc = data.urls.regular;
    document.body.style.backgroundImage = `url('${imgSrc}')`;
})