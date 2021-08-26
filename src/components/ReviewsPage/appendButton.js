export default function appendButton(){
  let reviewTextContainer = document.getElementsByClassName("review-text-container");
  let buttonContainer = document.getElementsByClassName("button-container");
  
  const mediaQuery = window.matchMedia('(min-width: 769px)');
  
  function appendToContainer(){
    if (mediaQuery.matches) {
      for (let i = 0; i < reviewTextContainer.length; i++){
        reviewTextContainer[i].appendChild(buttonContainer[i]);
      }
    }
  }

  window.onload = appendToContainer;
}