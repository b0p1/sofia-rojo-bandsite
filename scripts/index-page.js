const usersURL =
  "https://project-1-api.herokuapp.com/comments?api_key=8613e1fd-39c9-441a-989c-bdabccc121ba";

let commentSection = document.querySelector(".comment-section");
let commentList = document.querySelector(".static-comments");
let commentForm = document.querySelector("#commentForm");

axios.get(usersURL).then((response) => {
  response.data.forEach(displayComment);
});

function refreshComments() {
  commentList.innerHTML = "";
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
  // formattedDate.sort(function(a, b){
  //   let firstDate = date(a);
  //   let lastDate = date(b);
  //   return lastDate-firstDate;
  // });

  axios
    .post(usersURL, {
      name: name,
      comment: comment,
    })
    .then((response) => {
      createCommentCard(response.data);
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
