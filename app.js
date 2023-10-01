const form = document.querySelector('#searchForm');
const input = document.querySelector('#searchBar');

input.addEventListener('input', async(e) => {

    e.preventDefault();

    document.querySelector('#resultList').remove();
    const searchTerm = form.elements.query.value;
    const data = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    console.log(data);
    const listImg = document.createElement("UL");
    document.querySelector('#results').append(listImg);
    listImg.id = 'resultList';
    for (let i of data.data) {
        try {
            const img = i.show.image.medium;
            const newLi = document.createElement('LI');
            const newIMG = document.createElement('IMG');
            newIMG.setAttribute('src', img);
            newLi.append(newIMG);
            listImg.append(newLi);
        } catch (e) {
            continue;
        }
    }
})