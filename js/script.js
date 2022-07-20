window.addEventListener("load", function(){

  let numLikes = 0;

  function updateLikes (event) {
    event.stopPropagation(); // prevent bubbling
    numLikes++;
    let likeNode = document.getElementById("num-likes");
    likeNode.innerHTML = `${numLikes} Likes`;
  }

  function changeBodyBgColor() {
    let bodyNode = document.getElementById("body");
    if (bodyNode.style.backgroundColor === "red") {
      bodyNode.style.backgroundColor = "green";
    } else {
      bodyNode.style.backgroundColor = "red";
    }
  }

  // get the like button DOM node
  let button = document.getElementById("like-button")

  // register a click event handler
  button.addEventListener("click", updateLikes);

  let bodyNode = document.getElementById("body");
  bodyNode.addEventListener("click", changeBodyBgColor);
  
});