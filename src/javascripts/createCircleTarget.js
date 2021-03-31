const createCircleTarget = (diameter) => {
  const target = new BABYLON.GUI.Ellipse();
  target.width = diameter;
  target.height = diameter;
  target.color = theme.color;
  target.thickness = theme.lineThickness;
  target.background = theme.background;

  return target;
};
