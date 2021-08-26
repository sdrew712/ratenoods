export default function appendButton(){
  let reviewTextContainer = document.getElementsByClassName("review-text-container");
  let buttonContainer = document.getElementsByClassName("button-container");
  
  // console.log(reviewTextContainer[1]);
  // console.log(buttonContainer[1]);
  
  const mediaQuery = window.matchMedia('(min-width: 769px)');
  
  function appendToContainer(){
    if (mediaQuery.matches) {
      for (let i = 0; i < reviewTextContainer.length; i++){
        console.log(reviewTextContainer[i]);
        console.log(buttonContainer[i]);
        reviewTextContainer[i].appendChild(buttonContainer[i]);
      }
    }
  }

  window.onload = appendToContainer;
}