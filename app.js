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
            <h1>Chuck Norris Joke Generator</h1>
            <img src="${ img }"</img>
            ${
                isLoading ? `<div class="spinner"></div>` : 
                `
                <div>${ joke }</div>
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