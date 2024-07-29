document.querySelectorAll(".tab-button").forEach((button, index) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    document
      .querySelectorAll(".tab-button")
      .forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");

    // Hide all tab content
    document
      .querySelectorAll(".tab-pane")
      .forEach((pane) => pane.classList.add("hidden"));
    // Show the content of the clicked tab
    document.querySelectorAll(".tab-pane")[index].classList.remove("hidden");
  });
});
