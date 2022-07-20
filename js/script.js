window.addEventListener("load", function() {

  // get the like button DOM node
  let button = document.getElementById("like-button");

  /* Mouseover/out Events */
  button.addEventListener("mouseover", function(event){
    let buttonNode = event.target;
    buttonNode.style.backgroundColor = "yellow";
  });

  button.addEventListener("mouseout", function(event){
    let buttonNode = event.target;
    buttonNode.style.backgroundColor = "";
  });


  /* Click Events */

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

  // register a click event handler
  button.addEventListener("click", updateLikes);

  let bodyNode = document.getElementById("body");
  bodyNode.addEventListener("click", changeBodyBgColor);

});