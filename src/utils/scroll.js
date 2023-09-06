window.addEventListener("scroll", setScrollBar);
window.addEventListener("resize", setScrollBar);

function setScrollBar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled =
    htmlElement.scrollTop / htmlElement.clientHeight;

  htmlElement.style.setProperty(
    "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  );
}

setScrollBar();
