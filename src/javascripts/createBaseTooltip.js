var createBaseTooltip = function(mesh, scene, offsetX, offsetY, tooltipText) {
  // GUI
  const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
  advancedTexture.isForeground = true;
  advancedTexture.useInvalidateRectOptimization = false;

  const width = "250px";
  const height = "150px";

  // Text container box
  const textBox = createBaseTextBox(width, height);
  advancedTexture.addControl(textBox);
  textBox.linkOffsetX = offsetX;
  textBox.linkOffsetY = offsetY;
  textBox.transformCenterX = 0;
  textBox.transformCenterY = 1;
  textBox.scaleX = 0;
  textBox.scaleY = 0;
  textBox.linkWithMesh(mesh);

  // Text properties
  const text = createBaseText(tooltipText);
  textBox.addControl(text);

  // Animation
  const animation = createBaseTooltipAnimation(scene, textBox);
  mesh.actionManager = animation;

  return scene;
};
