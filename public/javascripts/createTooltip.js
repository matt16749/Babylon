"use strict";

var createTooltip = function createTooltip(mesh, scene, offsetX, offsetY, tooltipText) {
  // GUI
  var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
  advancedTexture.isForeground = true;
  advancedTexture.useInvalidateRectOptimization = false;
  var textBox1 = new BABYLON.GUI.Rectangle();
  advancedTexture.addControl(textBox1);
  textBox1.width = "300px";
  textBox1.height = "200px";
  textBox1.thickness = theme.lineThickness; // Where the tooltip will show up

  textBox1.linkOffsetX = offsetX;
  textBox1.linkOffsetY = offsetY;
  textBox1.transformCenterX = 0;
  textBox1.transformCenterY = 1;
  textBox1.background = theme.background;
  textBox1.alpha = 0.7;
  textBox1.scaleX = 0;
  textBox1.scaleY = 0;
  textBox1.cornerRadius = 5;
  textBox1.linkWithMesh(mesh);
  var text1 = new BABYLON.GUI.TextBlock();
  text1.text = tooltipText || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id consectetur purus ut faucibus pulvinar. Placerat vestibulum lectus mauris ultrices. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Quisque id diam vel quam elementum pulvinar. Imperdiet sed euismod nisi porta. Habitasse platea dictumst quisque sagittis purus sit amet. Neque egestas congue quisque egestas diam in. Facilisis volutpat est velit egestas dui id ornare arcu odio. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Eu facilisis sed odio morbi quis commodo odio. Dolor sit amet consectetur adipiscing elit ut aliquam. Tristique senectus et netus et malesuada. Nibh venenatis cras sed felis.";
  text1.color = theme.color;
  text1.fontSize = 14;
  text1.fontFamily = "monospace";
  text1.textWrapping = true;
  text1.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
  text1.background = '#006994';
  textBox1.addControl(text1);
  text1.alpha = 1 / text1.parent.alpha;
  text1.paddingTop = "20px";
  text1.paddingBottom = "20px";
  text1.paddingLeft = "20px";
  text1.paddingRight = "20px";
  var actionManager = new BABYLON.ActionManager(scene);
  mesh.actionManager = actionManager;
  var scaleXAnimation = new BABYLON.Animation("myAnimation", "scaleX", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
  var scaleYAnimation = new BABYLON.Animation("myAnimation", "scaleY", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
  var keys = [];
  keys.push({
    frame: 0,
    value: 0
  });
  keys.push({
    frame: 10,
    value: 1
  });
  scaleXAnimation.setKeys(keys);
  scaleYAnimation.setKeys(keys);
  textBox1.animations = [];
  textBox1.animations.push(scaleXAnimation);
  textBox1.animations.push(scaleYAnimation);
  actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (ev) {
    scene.beginAnimation(textBox1, 0, 10, false);
  })); //if hover is over remove highlight of the mesh

  actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function (ev) {
    scene.beginAnimation(textBox1, 10, 0, false);
  }));
  return scene;
};