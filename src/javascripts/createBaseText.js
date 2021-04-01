const createBaseText = (text) => {
  const baseText = new BABYLON.GUI.TextBlock();
  baseText.text = text;
  baseText.color = theme.color;
  baseText.fontSize = 14;
  baseText.fontFamily = theme.fontFamily;
  baseText.textWrapping = true;
  baseText.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
  baseText.background = theme.background;
  baseText.alpha = 1.5;
  baseText.paddingTop = "20px";
  baseText.paddingBottom = "20px";
  baseText.paddingLeft = "20px";
  baseText.paddingRight = "20px";

  return baseText;
};
