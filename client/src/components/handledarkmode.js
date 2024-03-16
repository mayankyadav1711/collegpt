const handledarkmode = () => {
  let toggleBtn = document.getElementById("toggle-btn");
  let body = document.body;
  let darkMode = localStorage.getItem("dark-mode");

  const enableDarkMode = () => {
    toggleBtn.classList.replace("fa-moon", "fa-sun");
    body.classList.add("dark");
    preloadBackgroundImages(); // Preload background images
    localStorage.setItem("dark-mode", "enabled");
  };

  const disableDarkMode = () => {
    toggleBtn.classList.replace("fa-sun", "fa-moon");
    body.classList.remove("dark");
    preloadBackgroundImages(); // Preload background images
    localStorage.setItem("dark-mode", "disabled");
  };

  const preloadBackgroundImages = () => {
    const lightModeImage = new Image();
    lightModeImage.src = getComputedStyle(document.body).getPropertyValue('--bgImage').slice(4, -1).replace(/["']/g, "");
    const darkModeImage = new Image();
    darkModeImage.src = getComputedStyle(document.body).getPropertyValue('--bgImage').slice(4, -1).replace(/["']/g, "");
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
    // Add a smooth transition to background image
    body.style.transition = "background-image 0.5s ease";
  };

  
};

export default handledarkmode;
