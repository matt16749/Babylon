const createBaseTextBox = (width, height) => {
  const textBox = new BABYLON.GUI.Rectangle();
  textBox.height = height;
  textBox.width = width;
  textBox.thickness = theme.lineThickness;
  textBox.background = theme.background;
  textBox.cornerRadius = 5;
  textBox.alpha = 1;

  return textBox;
};
