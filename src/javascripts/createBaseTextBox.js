const createBaseTextBox = (width, height) => {
  console.log('THIS IS THE THEME', theme);
  console.log('This is the background', theme.background);
  const textBox = new BABYLON.GUI.Rectangle();
  textBox.height = height;
  textBox.width = width;
  textBox.thickness = theme.lineThickness;
  textBox.background = theme.background;
  textBox.cornerRadius = 5;
  textBox.alpha = 0.8;

  return textBox;
};
