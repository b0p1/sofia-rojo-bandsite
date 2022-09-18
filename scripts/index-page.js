let commentsArray = [
  {
    avatar: "",
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    avatar: "",
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    avatar: "",
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

let commentSection = document.querySelector(".comment-section");
let commentList = document.querySelector(".static-comments");
let commentForm = document.querySelector("#commentForm");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = e.target.fullName.value;
  let date = "date";
  let comment = e.target.comment.value;

  let dynamicComments = {
    avatar: "",
    name: name,
    date: date,
    comment: comment,
  };

  commentsArray.unshift(dynamicComments);
  console.log(commentsArray);
  console.log(commentsArray);

  //   addComments();

  e.target.reset();
});

function addComments() {
  for (let i = 0; i < commentsArray.length; i++) {
    // commentList.innerHTML = "";

    let commentData = commentsArray[i];
    let commentCard = createCommentCard(commentData);
    commentList.appendChild(commentCard);
  }
}

addComments();

function createCommentCard(commentData) {
  let commentCard = document.createElement("div");
  commentCard.classList.add("comment__card");
  commentList.appendChild(commentCard);

  let commentTitles = document.createElement("div");
  commentTitles.classList.add("comment__titles");
  commentCard.appendChild(commentTitles);

  // icon section
  let avatar = document.createElement("span");
  avatar.classList.add("comment__avatar");
  avatar.innerText = commentData.avatar;
  commentTitles.appendChild(avatar);

  // name section
  let nameLabel = document.createElement("h3");
  nameLabel.classList.add("comment__name-label");
  nameLabel.innerText = commentData.name;
  commentTitles.appendChild(nameLabel);

  // date section
  let date = document.createElement("h4");
  date.classList.add("comment__date");
  date.innerText = commentData.date;
  commentTitles.appendChild(date);

  // comment section
  let comment = document.createElement("p");
  comment.classList.add("comment__content");
  comment.innerText = commentData.comment;
  commentCard.appendChild(comment);

  return commentCard;
}
