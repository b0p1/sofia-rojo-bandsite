const showsURL =
  "https://project-1-api.herokuapp.com/showdates?api_key=a1f4245e-eeb2-46ab-819a-12f9f0b2ebfc";

let showSection = document.querySelector("main");
let showList = document.querySelector(".show-list");
let showListHeader = document.querySelector(".show-list__header");

axios.get(showsURL).then((response) => {
  response.data.forEach(displayShows);
});

function displayShows(element) {
  let showCard = createShowCard(element);
  showList.appendChild(showCard);
}

function formatDate(date) {
  let timeStampDate = String(date.getDate()).padStart(2, "0");
  let timeStampMonth = String(date.getMonth() + 1).padStart(2, "0");
  let timeStampYear = date.getFullYear();

  let timeStampString =
    timeStampMonth + "/" + timeStampDate + "/" + timeStampYear;

  return timeStampString;
}

// Card Header for tablet and desktop
let tabletDateLabel = document.createElement("h3");
tabletDateLabel.classList.add("show__label__tablet", "tablet__header-date");
tabletDateLabel.innerText = "DATE";
showListHeader.appendChild(tabletDateLabel);

let tabletVenueLabel = document.createElement("h3");
tabletVenueLabel.classList.add("show__label__tablet", "tablet__header-venue");
tabletVenueLabel.innerText = "VENUE";
showListHeader.appendChild(tabletVenueLabel);

let tabletLocationLabel = document.createElement("h3");
tabletLocationLabel.classList.add(
  "show__label__tablet",
  "tablet__header-location"
);
tabletLocationLabel.innerText = "LOCATION";
showListHeader.appendChild(tabletLocationLabel);

let tabletSpaceLabel = document.createElement("h3");
tabletSpaceLabel.classList.add("show__label__tablet", "tablet__header-space");
tabletSpaceLabel.innerText = "";
showListHeader.appendChild(tabletSpaceLabel);

// function to add shows to show card
function createShowCard(showData) {
  let showCard = document.createElement("div");
  showCard.classList.add("show__card");
  showSection.appendChild(showCard);

  // date section
  let dateLabel = document.createElement("h3");
  dateLabel.classList.add("show__label");
  dateLabel.innerText = "DATE";
  showCard.appendChild(dateLabel);

  let date = document.createElement("p");
  date.classList.add("show__date");
  date.innerText = formatDate(new Date(showData.date));
  showCard.appendChild(date);

  // venue section
  let venueLabel = document.createElement("h3");
  venueLabel.classList.add("show__label");
  venueLabel.innerText = "VENUE";
  showCard.appendChild(venueLabel);

  let venue = document.createElement("p");
  venue.classList.add("show__venue");
  venue.innerText = showData.place;
  showCard.appendChild(venue);

  // location section
  let locationLabel = document.createElement("h3");
  locationLabel.classList.add("show__label");
  locationLabel.innerText = "LOCATION";
  showCard.appendChild(locationLabel);

  let location = document.createElement("p");
  location.classList.add("show__location");
  location.innerText = showData.location;
  showCard.appendChild(location);

  // button section
  let ticketButton = document.createElement("button");
  ticketButton.classList.add("ticket-button");
  ticketButton.innerText = "BUY TICKETS";
  showCard.appendChild(ticketButton);

  return showCard;
}
