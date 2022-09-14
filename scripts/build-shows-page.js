let shows = [
    {
       date: "Mon Sept 06 2021", 
       venue:"Ronald Lane",
       location:"San Francisco, CA",
    },
    {
       date: "Tue Sept 21 2021", 
       venue:"Pier 3 East",
       location:"San Francisco, CA",
    },
    {
        date: "Fri Oct 15 2021", 
        venue:"View Lounge",
        location:"San Francisco, CA",
    },
    {
        date: "Sat Nov 06 2021", 
        venue:"Hyatt Agency",
        location:"San Francisco, CA",
    },
    {
        date: "Fri Nov 26 2021", 
        venue:"Moscow Center",
        location:"San Francisco, CA",
    },
    {
        date: "Wed Dec 15 2021", 
        venue:"Press Club",
        location:"San Francisco, CA",
    },
];


let showSection = document.querySelector('main');

let showList = document.querySelector('.shows-list')

for (let i = 0; i < shows.length; i++) {
    let showData = shows[i];
    let showCard = createShowCard(showData);
    showList.appendChild(showCard);
}

console.log(createShowCard);

function createShowCard(showData) {
    
    let showCard = document.createElement('div');
    showCard.classList.add('shows__card');
    showSection.appendChild(showCard);
    
    // date section
    let dateLabel = document.createElement('h3');
    dateLabel.classList.add('show__label');
    dateLabel.innerText = 'DATE';
    showCard.appendChild(dateLabel);

    let date= document.createElement('p');
    date.classList.add('date');
    date.innerText = showData.date;
    showCard.appendChild(date);

    // venue section
    let venueLabel = document.createElement('h3');
    venueLabel.classList.add('show__label');
    venueLabel.innerText = 'VENUE';
    showCard.appendChild(venueLabel);

    let venue= document.createElement('p');
    venue.classList.add('venue');
    venue.innerText = showData.venue;
    showCard.appendChild(venue);

    // location section
    let locationLabel = document.createElement('h3');
    locationLabel.classList.add('show__label');
    locationLabel.innerText = 'LOCATION';
    showCard.appendChild(locationLabel);

    let location= document.createElement('p');
    location.classList.add('location');
    location.innerText = showData.location;
    showCard.appendChild(location);

    // button section
    let ticketButton = document.createElement('button');
    ticketButton.classList.add('ticket-button');
    ticketButton.innerText = "BUY TICKETS";
    showCard.appendChild(ticketButton);

    return showCard;

}