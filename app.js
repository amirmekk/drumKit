window.onkeydown = e => {
    //when pressing an available key it gives us a key and that key corresponds to an audio file and a div
    let selectedAudioElement = document.querySelector(`audio[data-key='${e.keyCode}']`) ,
        selectedDiv = document.querySelector(`div[data-key='${e.keyCode}']`); 
    // if the user pressed a key that is not available in the list then the function will not run
    if(!selectedAudioElement) return ; 
    // add css transition to the corresponding div
    selectedDiv.classList.add('playing') ;
    // reset the audio to start = 0 
    selectedAudioElement.currentTime = 0 ;
    //play the audio file
    selectedAudioElement.play() ;
    //when the transtion end then remove the animation class so that it return to its original look
    selectedDiv.addEventListener('transitionend' , function(){
      selectedDiv.classList.remove('playing');
    });
    //used for older versions of safari
    selectedDiv.addEventListener('webkitTransitionEnd' , function(){
        selectedDiv.classList.remove('playing');
      });
  
    }

