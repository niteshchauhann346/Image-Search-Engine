let searchInput = document.getElementById("searchInput");
let searchBth = document.getElementById("search-bth");
let searchResult = document.getElementById("Search-result");
let searchMore = document.getElementById("Search-more");
let searchForm = document.getElementById("search-input");
let resetBtn = document.getElementById('reset-icon');




let keyword = "";
let page = 1;
const clientId = "rKyNFD0jxf1aWea0QR7kkCy7bBP2x60cbvtrOYrbZmk";

async function searchImage() {
  keyword = searchInput.value;
  // const url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=rKyNFD0jxf1aWea0QR7kkCy7bBP2x60cbvtrOYrbZmk`;
  const url2 = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=rKyNFD0jxf1aWea0QR7kkCy7bBP2x6OcbvtrOYrbZmk&per_page=12`;
  const response = await fetch(url2);
  const data = await response.json();

  console.log(data);
  const results = data.results;
  if (page == 1) {
    searchResult.innerHTML = "";
  }

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
    searchMore.style.display = "block";
      searchResult.style.display = "flex";

  });
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});
searchMore.addEventListener("click", () => {
  page++;
  searchImage();
});
resetBtn.addEventListener('click',()=>{
    searchResult.innerHTML = "";
    searchInput.value="";
    searchResult.style.display = "none";
    searchMore.style.display = "none";
})