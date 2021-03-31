const createAttachedTooltipLine = (height, offset) => {
  const line = new BABYLON.GUI.Line();
  line.lineWidth = 2;
  line.color = theme.color;
  line.y2 = height;
  line.linkOffsetY = offset + 63;

  return line;
};
