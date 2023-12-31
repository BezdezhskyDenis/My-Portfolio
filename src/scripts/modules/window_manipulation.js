// The debounce function receives our function as a parameter
const debounce = (fn) => {

    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;
  
    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) { 
        cancelAnimationFrame(frame);
      }
  
      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        
        // Call our function and pass any params we received
        fn(...params);
      });
  
    } 
  };
  
  
  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
  export const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
    
  }
  
  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  
  // Update scroll position for first time
  storeScroll();


  

// nav bar buttons toggle change profile picture z-index
export function toggleNavOpenProfilePictureChange(){
    let zIndex;
    navBarStatus ? (zIndex = 1029) :(zIndex = 1050);
    const styleString = `--z-index-profile: ${zIndex}`;
    document.querySelector(".main").setAttribute("style", styleString);
    navBarStatus = !navBarStatus
}
const navBarToggleButtons = document.getElementsByName("navbar-toggler-button")
for (let key of navBarToggleButtons){
    key.addEventListener("click", toggleNavOpenProfilePictureChange)
}
let navBarStatus = false

toggleNavOpenProfilePictureChange()
