let comments = [
    {
        icon: 'img',
        name:'Connor Walton',
        date:'02/17/2021',
        comment:'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    },
    {
        icon: 'img',
        name:'Emilie Beach',
        date:'01/09/2021',
        comment:'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    },
    {
        icon: 'img',
        name:'Miles Acosta',
        date:'12/20/2020',
        comment:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    }
];

let commentSection = document.querySelector('.comment-section');

let commentList = document.querySelector('.static-comments')

for (let i = 0; i < comments.length; i++) {
    let commentData = comments[i];
    let commentForm = createCommentCard(commentData);
    commentList.appendChild(commentForm);
  }

function createCommentCard(commentData) {
    let commentCard = document.createElement("div");
    commentCard.classList.add("comment__card");
    commentList.appendChild(commentCard);
    
    // icon section

    
    // name section
    let nameLabel = document.createElement('h3');
    nameLabel.classList.add('comment__name-label');
    nameLabel.innerText = commentData.name;
    commentCard.appendChild(nameLabel);
}