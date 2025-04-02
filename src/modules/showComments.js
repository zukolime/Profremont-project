import { createSpinner } from "./spinner";
import { removeSpinner } from "./spinner";

export const showComments = () => {
  const commentsContainer = document.querySelector(".comments-container");
  const spinner = createSpinner(commentsContainer);

  let comments = [];

  const showError = (message) => {
    commentsContainer.textContent = message;
    commentsContainer.style.textAlign = "center";
    commentsContainer.style.color = "red";
    commentsContainer.style.marginLeft = "4px";
  };

  const getComments = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data.comments;
    } catch (error) {
      showError("Ошибка при загрузке комментариев");
      console.log(error.message);
    }
  };

  const createComment = (commentsData) => {
    commentsContainer.innerHTML = "";

    const visibleComments = commentsData.slice(0, 3);

    visibleComments.forEach((comment, index) => {
      const commentBox = document.createElement("div");

      const imageUrl = comment.image
        ? `images/users/${comment.image}`
        : "https://placedog.net/120/120";

      const isEven = (index) => index % 2 === 0;
      const isThirdComment = (index) => index % 3 === 2;

      commentBox.className = "review-margin-bottom row comment-item";

      if (isEven(index)) {
        commentBox.innerHTML = `<div class="col-xs-3 col-sm-2">
          <div class="review-user">
            <img
              src="${imageUrl}"
              alt="${comment.author}"
              class="img-responsive avatar"
            />
          </div>
        </div>
        <div class="col-xs-9 col-sm-9">
          <div
            class="review-inner ${
              isThirdComment(index) ? "review-orange" : "review-green"
            } review-green review-arrow review-arrow-left"
          >
            <p class="text-normal">${comment.author}</p>
            <p>
              ${comment.comment}
            </p>
          </div>
        </div>`;
        commentsContainer.append(commentBox);
      } else {
        commentBox.innerHTML = `<div class="col-xs-9 col-sm-9">
          <div
            class="review-inner ${
              isThirdComment(index) ? "review-orange" : "review-gray"
            } review-arrow review-arrow-right"
          >
            <p class="text-normal">${comment.author}</p>
            <p>
              ${comment.comment}
            </p>
          </div>
        </div>
        <div class="col-xs-3 col-sm-2">
          <div class="review-user">
            <img
              src="${imageUrl}"
              alt=""
              class="img-responsive avatar"
            />
          </div>
        </div>
        </div>`;
        commentsContainer.append(commentBox);
      }
    });
  };

  const updateComments = () => {
    if (comments.length > 0) {
      const nextComment = comments.shift();
      comments.push(nextComment);
      createComment(comments);
    }
  };

  const render = async () => {
    try {
      comments = await getComments("./comments.json");
      createComment(comments);
      removeSpinner(spinner);
      setInterval(updateComments, 20000);
    } catch (error) {
      showError("Ошибка при загрузке комментариев");
      removeSpinner(spinner);
      console.log(error.message);
    }
  };

  render();
};
