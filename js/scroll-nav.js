// Changes navbar colors on scroll. It loads on default to the wrong one though, until you scroll once. it's wack.

window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navBar");
    const links = document.querySelectorAll("#navBar a");

  if (document.documentElement.scrollTop > 300) {
    navBar.classList.remove("navclass");
  } else {
    navBar.classList.add("navclass");
  }
}