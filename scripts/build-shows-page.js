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

let showList = document.querySelector('.show-list')

for (let i = 0; i < shows.length; i++) {
    let showData = shows[i];
    let showCard = createShowCard(showData);
    showList.appendChild(showCard);
}

function createShowCard(showData) {
    let showList = document.createElement('main');
    showList.classList.add('show-list');

    

    let showCard = document.createElement('div');
    showCard.classList.add('shoew__content');
    
}