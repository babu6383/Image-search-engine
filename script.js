

// const accessKey = "9qaV0r0Om8Z_OWA-Ogj_Egd1-AoW4I2R7uQGJWY1jPI";

// const searchForm = document.getElementById("search-form");
// const searchBox = document.getElementById("search-box");
// const searchResult = document.getElementById("search-result");
// const showMoreBtn = document.getElementById("show-more-btn");

// let keyword = "";
// let page = 1;

// async function searchImages() {
//     keyword = searchBox.value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`; // Use backticks here for string interpolation
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         results.map((result)=>{
//             const image = document.createElement("img")
//             image.src = result.urls.small;
//             const imageLink = document.createElement("a")
//             imageLink.href= result.links.html;
//             imageLink.target ="_blank";

//             imageLink.appendChild(image);
//             searchResult.appendChild(imageLink)

//         })   
//         // You can add code here to display the images in searchResult
//     } catch (error) {
//         console.error("Error fetching images:", error);
//     }
// }

// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     page = 1;
//     searchImages();
// });


const accessKey = "9qaV0r0Om8Z_OWA-Ogj_Egd1-AoW4I2R7uQGJWY1jPI";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Clear previous results when a new search is performed
        if (page === 1) {
            searchResult.innerHTML = "";
        }

        // Use data.results to get the list of images
        data.results.map((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;

            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);
        });

        // If there are more results available, display the "Show More" button
        if (data.total_pages > page) {
            showMoreBtn.style.display = "block";
        } else {
            showMoreBtn.style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});
