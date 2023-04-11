function AdjustFontSizeForContainer(container, maxWidthPercent, maxHeightPercent) {
  const textSpan = container.querySelector('span');

  container.style.fontSize = "1px";

  let availableWidth = container.scrollWidth * maxWidthPercent;
  let availableHeight = container.scrollHeight * maxHeightPercent;

  let currentTextWidth = textSpan.scrollWidth;
  let currentTextHeigth = textSpan.scrollHeight;

  let widthScaling = availableWidth / currentTextWidth;
  let heightScaling = availableHeight / currentTextHeigth;
  let scaling = Math.min(widthScaling, heightScaling);

  container.style.fontSize = scaling + "px";
}