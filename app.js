const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const navList = document.querySelector(".nav-list");
// const navigation = document.querySelector(".navigation");

const handleMenuVisibility = () => {
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 1070) {
    navList.style.display = "flex";
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block";
  } else {
    navList.style.display = "none";
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
  }
};

// Initial check on page load
handleMenuVisibility();

// Listen for window resize events
window.addEventListener("resize", handleMenuVisibility);

openMenuBtn.addEventListener("click", () => {
  navList.style.display = "flex";
  closeMenuBtn.style.display = "block";
  openMenuBtn.style.display = "none";
});

closeMenuBtn.addEventListener("click", () => {
  navList.style.display = "none";
  openMenuBtn.style.display = "block";
  closeMenuBtn.style.display = "none";
});
