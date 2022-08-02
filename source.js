const searchInput = document.querySelector('#search');

let response = []

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase()
    const filteredPhotos = response.data.filter((photo) => {
        return photo.title.toLowerCase().includes(value)
    })
    writeToScreen(filteredPhotos)
})


const writeToScreen = (data = []) => {
    const photoContainer = document.querySelector('.photos');
    let elements = '';

    photos = data.forEach(photo => {
        elements += `<div class="photo"><h3>${photo.title}</h3><img src="${photo.url}" class="center"></img></div>`;
    });
    photoContainer.innerHTML = elements;
}

const getPhotos = async () => {
    try {
        response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50');
        if (response.status === 200) {
            writeToScreen(response.data);
        }
    }
    catch (error) {
        console.log(error);
    }
}

getPhotos();