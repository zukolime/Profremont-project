export const showComments = () => {
  const commentsContainer = document.querySelector(".comments-container");

  let comments = [];

  // const spinner = document.createElement("div");
  // spinner.className = "spinner";
  // spinner.style.display = "flex";
  // spinner.style.justifyContent = "center";
  // spinner.style.marginLeft = "-190px";
  // spinner.innerHTML = `<img src="images/spinner.svg" alt="spinner" />`;
  // commentsContainer.append(spinner);

  const getComments = async () => {
    try {
      const res = await fetch("./comments.json");
      const data = await res.json();
      return data.comments;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const createComment = (commentsData) => {
    commentsContainer.innerHTML = "";

    commentsData.forEach((comment, index) => {
      // console.log(comment);
      // console.log(index);

      const commentBox = document.createElement("div");
      commentBox.className = "review-margin-bottom row comment-item";

      const imageUrl = comment.image
        ? `images/users/${comment.image}`
        : "https://placedog.net/120/120";

      const isEven = (index) => index % 2 === 0;

      commentBox.innerHTML = `<div class="${
        isEven(comment.id) ? "col-xs-3 col-sm-2" : "col-xs-9 col-sm-9"
      }">
          <div class="review-user">
            <img
              src="${imageUrl}"
              alt=""
              class="img-responsive avatar"
            />
          </div>
        </div>
        <div class="${
          isEven(comment.id) ? "col-xs-9 col-sm-9" : " col-xs-3 col-sm-2"
        }">
          <div
            class="review-inner review-green review-arrow "${
              isEven(comment.id) ? "review-arrow-left" : "review-arrow-right"
            }"
          >
            <p class="text-normal">${comment.author}</p>
            <p>
              ${comment.comment}
            </p>
          </div>
       </div>`;
    });
  };

  // const render = async () => {
  //   const comments = await getComments();
  //   createComment(comments);
  // };

  // render();

  getComments().then((data) => {
    console.log(data);
    createComment(data);
  });
};
