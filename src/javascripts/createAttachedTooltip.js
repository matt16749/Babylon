const createAttachedTooltip = (mesh, scene, offsetX, offsetY, toolTipText, tooltipWidth) => {
  const tooltip = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
  tooltip.isForeground = true;
  tooltip.useInvalidateRectOptimization = false;

  const textBoxHeight = "40px";
  const textBoxWidth = tooltipWidth;
  const targetDiameter = "15px";
  const lineHeight = 20;

  // Text container box
  const textBox = createBaseTextBox(textBoxWidth, textBoxHeight);
  tooltip.addControl(textBox);
  textBox.linkOffsetX = offsetX;
  textBox.linkOffsetY = offsetY;
  textBox.scaleY = 0;
  textBox.linkWithMesh(mesh);

  // Text properties
  const text = createAttachedText(toolTipText);
  textBox.addControl(text);

  // Line connecting target and tooltip
  const line = createAttachedTooltipLine(lineHeight, offsetY);
  tooltip.addControl(line);
  line.linkWithMesh(mesh);
  line.linkOffsetX = offsetX;
  line.scaleY = 0;
  line.connectedControl = textBox;

  // Animation
  const frameRate = 30;
  const lineAnimation = createLineAnimation(frameRate);
  const labelAnimation = createLabelAnimation(frameRate);
  const animationGroup = createAnimationGroup(line, lineAnimation, textBox, labelAnimation);

  // Create target button
  const circle = createCircleTarget(targetDiameter);
  const target = BABYLON.GUI.Button.CreateSimpleButton("button");
  target.width = "15px";
  target.height = "15px";
  target.color = "transparent";
  target.alpha = 0.5;
  target.onPointerEnterObservable.add(function () {
    animationGroup.speedRatio = 10;
    animationGroup.play(false);
  });
  target.onPointerOutObservable.add(function () {
    animationGroup.reset();
    animationGroup.stop();
  });
  target.top = offsetY + 65
  target.left = offsetX;
  target.addControl(circle);
  tooltip.addControl(target);

  return target;
};
