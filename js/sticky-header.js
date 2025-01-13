window.addEventListener("scroll", function () {
    const header = document.querySelector("#head");
    const profile = document.querySelector("#profile");
    let triggerHeight = profile.offsetHeight + 300;
  
    if (window.scrollY > triggerHeight) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  });