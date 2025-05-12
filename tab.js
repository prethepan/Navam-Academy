const liveRegion = document.getElementById("live-region");

function announce(message) {
  liveRegion.textContent = message;
}

function jumpToSection(sectionId, message) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.focus();
    announce(message);
  }
}

document.addEventListener("keydown", function (e) {
  if (e.altKey) {
    switch (e.key) {
      case "1":
        jumpToSection("courses", "Navigated to Courses section");
        break;
      case "2":
        jumpToSection("about", "Navigated to About Us section");
        break;
      case "3":
        jumpToSection("contact", "Navigated to Contact section");
        break;
    }
  }
});
