export default function reviewFunctions() {
  let postTextContainer = document.getElementsByClassName(
    "post-text-container"
  );
  let buttonContainer = document.getElementsByClassName("button-container");

  const mediaQuery = window.matchMedia("(min-width: 769px)");

  function appendButton() {
    if (mediaQuery.matches) {
      for (let i = 0; i < postTextContainer.length; i++) {
        postTextContainer[i].append(buttonContainer[i]);
      }
    }
  }

  window.onload = appendButton;
}
