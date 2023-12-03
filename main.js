// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", () => {
  // Get references to the navbar burger and menu elements
  const $navbarBurger = document.querySelector(".navbar-burger");
  const $navbarMenu = document.getElementById("navbarMenu");

  // Toggle the 'is-active' class on the burger and menu when it is clicked
  $navbarBurger.addEventListener("click", () => {
    $navbarBurger.classList.toggle("is-active");
    $navbarMenu.classList.toggle("is-active");
  });
});

// Functions to open and close a modal
function openModal($el) {
  // Add the 'is-active' class to show the modal
  $el.classList.add("is-active");
}

function closeModal($el) {
  // Remove the 'is-active' class to hide the modal
  $el.classList.remove("is-active");
}

function closeAllModals() {
  // Close all modals on the page
  (document.querySelectorAll(".modal") || []).forEach(($modal) => {
    closeModal($modal);
  });
}

// Add a click event on buttons to open a specific modal
(document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
  // Get the target modal element based on the data attribute
  const modal = $trigger.dataset.target;
  const $target = document.getElementById(modal);

  // Add a click event listener to trigger the modal opening
  $trigger.addEventListener("click", () => {
    openModal($target);
  });
});

// Add a click event on various child elements to close the parent modal
(
  document.querySelectorAll(
    ".modal-background, .modal-close, .modal-card-head, .delete, .modal-card-foot, .button"
  ) || []
).forEach(($close) => {
  // Find the closest modal parent and close it when clicked
  const $target = $close.closest(".modal");

  $close.addEventListener("click", () => {
    closeModal($target);
  });
});

// Add a keyboard event to close all modals when the 'Escape' key is pressed
document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeAllModals();
  }
});
