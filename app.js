createJoke(document.body);

function createJoke(parentElement) {
    const element = document.createElement("div");
    element.classList.add("joke-container");
    parentElement.append(element);

    let isLoading = true;
    let joke = 0;
    let img = "https://cdn.dribbble.com/users/382712/screenshots/4165164/media/8e5141aa7ee4f9efd6a1597f3e463ae6.png?compress=1&resize=400x300";

    const render = () => {
        element.innerHTML = `
            <img src="${ img }"</img>
            <h1>Chuck Norris Joke Generator</h1>
            ${
                isLoading ? `<div class="spinner"></div>` : 
                `
                <p class="joke">${ joke }</p>
                <p class="new-joke">CTRL + R for a new joke.</p>
                `
            }
        `;
    }

    const load = async () => {
        isLoading = true;
        const res = await fetch(`https://api.chucknorris.io/jokes/random`);
        
        const data = await res.json();
        console.log(data);

        joke = data.value

        isLoading = false

        render();
    }

    render();
    load();
}