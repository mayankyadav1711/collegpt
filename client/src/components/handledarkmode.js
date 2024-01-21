const handledarkmode = () =>{
  let toggleBtn = document.getElementById("toggle-btn");
  let body = document.body;
  let darkMode = localStorage.getItem("dark-mode");

  const enableDarkMode = () => {
    toggleBtn.classList.replace("fa-moon", "fa-sun");
    body.classList.add("dark");
    localStorage.setItem("dark-mode", "enabled");
  };

  const disableDarkMode = () => {
    toggleBtn.classList.replace("fa-sun", "fa-moon");
    body.classList.remove("dark");
    localStorage.setItem("dark-mode", "disabled");
  };

  if (darkMode === "enabled") {
    enableDarkMode();
  }

  toggleBtn.onclick = (e) => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "disabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  };

  let profile = document.querySelector(".header .flex .profile");
  let userBtn = document.querySelector("#user-btn");
  
  // Add a click event listener to the document body
  document.body.addEventListener("click", (event) => {
    // Check if the click event target is not within the profile and userBtn elements
    if (
      !profile.contains(event.target) &&
      event.target !== userBtn &&
      !userBtn.contains(event.target)
    ) {
      // If the click is outside the profile and userBtn, close the profile
      profile.classList.remove("active");
    }
  });
  
  // Add a click event listener to the userBtn to toggle the profile
  userBtn.onclick = () => {
    profile.classList.toggle("active");
  };
  
 
}

export default handledarkmode;
