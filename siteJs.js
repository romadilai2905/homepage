function switchToColor(color) {
    try {
      document.querySelectorAll(".page").forEach(function (page) {
        page.style.borderColor = color;
      });
    } catch (error) { }
}

document.getElementById("chartreuse").addEventListener("click", switchToColor.bind(this, "chartreuse"));
document.getElementById("red").addEventListener("click", switchToColor.bind(this, "red"));