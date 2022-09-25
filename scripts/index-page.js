const usersURL =
  "https://project-1-api.herokuapp.com/comments?api_key=bc559201-cb31-4782-9217-1b936ebbe8bd";

let commentSection = document.querySelector(".comment-section");
let commentList = document.querySelector(".static-comments");
let commentForm = document.querySelector("#commentForm");

let commentArray = [];

refreshComments();

function refreshComments() {
  axios.get(usersURL).then((response) => {
    emptyArray();
    response.data.forEach((comment) => {
      commentArray.push(comment);
    });
    commentArray.sort((a, b) => b.timestamp - a.timestamp);
    commentList.innerHTML = "";

    commentArray.forEach((comment) => {
      displayComment(comment);
    });
  });
}
console.log(commentArray);

function emptyArray() {
  commentArray.length = 0;
}

function displayComment(element) {
  let commentCard = createCommentCard(element);
  commentList.appendChild(commentCard);
}

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let avatar = "";
  let name = e.target.fullName.value;
  let comment = e.target.comment.value;
  let date = new Date();
  let formattedDate = formatDate(date);

  axios
    .post(usersURL, {
      name: name,
      comment: comment,
    })
    .then(() => {
      refreshComments();
      commentForm.reset();
    });
  e.target.reset();
});

function formatDate(date) {
  let timeStampDate = String(date.getDate()).padStart(2, "0");
  let timeStampMonth = String(date.getMonth() + 1).padStart(2, "0");
  let timeStampYear = date.getFullYear();

  let timeStampString =
    timeStampMonth + "/" + timeStampDate + "/" + timeStampYear;

  return timeStampString;
}

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
  avatar.innerText = commentData.avatar || "";
  commentTitles.appendChild(avatar);

  // name section
  let nameLabel = document.createElement("h3");
  nameLabel.classList.add("comment__name-label");
  nameLabel.innerText = commentData.name;
  commentTitles.appendChild(nameLabel);

  // date section
  let date = document.createElement("h4");
  date.classList.add("comment__date");
  date.innerText = formatDate(new Date(commentData.timestamp));
  commentTitles.appendChild(date);

  // comment section
  let comment = document.createElement("p");
  comment.classList.add("comment__content");
  comment.innerText = commentData.comment;
  commentCard.appendChild(comment);

  return commentCard;
}
