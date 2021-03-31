const createAttachedText = (text) => {
  console.log('this is the text', text);
  const attachedText = new BABYLON.GUI.TextBlock();
  attachedText.text = text;
  attachedText.color = theme.color;
  attachedText.fontSize = 14;
  attachedText.fontFamily = theme.fontFamily;
  attachedText.textWrapping = true;
  attachedText.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
  attachedText.background = theme.background;
  attachedText.alpha = 1.5;
  attachedText.paddingTop = "10px";

  return attachedText;
};
