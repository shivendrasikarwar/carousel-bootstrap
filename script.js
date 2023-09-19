import teamsData from "./data.js";

const teamPillsContainerId = "teams-container";
const teamContentContainerId = "team-content-container";

// TODO 1: Displaying team pills for each team
function displayTeamPills(teamsData) {
  // loop over the data and create different card components
  teamsData.forEach((data) => {
    // Card component inside card body append the card name

    let div = document.createElement("div");
    div.className = "card m-2 align-items-center ";
    div.setAttribute("id", "btn");
    // div.style.backgroundColor = "wheat";
    div.innerHTML = `<div id="${data.id}" class="card-body">${data.name}</div>`;

    document.getElementById(teamPillsContainerId).append(div);
  });
}

displayTeamPills(teamsData);

const teamPillsContainer = document.getElementById(teamPillsContainerId);

// TODO 2: Event handler to show Carousel with images for selected team
teamPillsContainer.addEventListener("click", (e) => {
  //e.target -> element node where the "click" event is fired from
  //events fired in child, bubbles up to the parent
  // console.log(e.target);

  // filter out the current targeted element when button is clicked
  let carousel = `<div id="carouselExample" class="carousel slide" style="width:95vw;height:50vh">
  <div class="carousel-inner h-100" id="carousel-inner-id">
    
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;
  document.getElementById(teamContentContainerId).innerHTML = carousel;

  let res = teamsData.filter((ele) => ele.id === e.target.id);
  // place the images from the filtered object in carousel
  console.log(res);
  res[0].images.forEach((link, idx) => {
    const carouseItemElement = document.createElement("div");

    // Set as active if id is 0 i.e, first element
    idx === 0
      ? carouseItemElement.classList.add("carousel-item", "h-100", "active")
      : carouseItemElement.classList.add("carousel-item", "h-100");

    carouseItemElement.innerHTML = `<img src=${link} class="w-100 h-100" alt="..." style="object-fit:cover">`;
    // console.log(carouseItemElement);

    document.getElementById("carousel-inner-id").append(carouseItemElement);
  });

  //change the innerHTML of teamContentContainerId.
});
