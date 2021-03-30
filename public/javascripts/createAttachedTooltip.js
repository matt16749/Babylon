"use strict";

var createAttachedTooltip = function createAttachedTooltip(mesh, scene, toolTipText) {
  var tooltip = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
  var offset = 300; // shape of tooltip

  var rect1 = new BABYLON.GUI.Rectangle();
  rect1.width = 0.2;
  rect1.height = "40px";
  rect1.cornerRadius = 5;
  rect1.color = theme.color;
  rect1.thickness = theme.lineThickness;
  rect1.background = theme.background;
  tooltip.addControl(rect1);
  rect1.linkWithMesh(mesh);
  rect1.linkOffsetY = -offset; // {{!-- rect1.linkOffsetX = "60px"; --}}
  // text in rectangular label

  var label = new BABYLON.GUI.TextBlock();
  label.text = toolTipText;
  rect1.addControl(label); // circle target

  var target = new BABYLON.GUI.Ellipse();
  target.width = "40px";
  target.height = "40px";
  target.color = theme.color;
  target.thickness = theme.lineThickness;
  target.background = theme.background;
  target.linkOffsetY = 150 - offset;
  tooltip.addControl(target);
  target.linkWithMesh(mesh); // line connecting target and tooltip

  var line = new BABYLON.GUI.Line();
  line.lineWidth = 4;
  line.color = theme.color;
  line.y2 = 20;
  line.linkOffsetY = -(offset - 130);
  tooltip.addControl(line);
  line.linkWithMesh(mesh);
  line.connectedControl = rect1;
  return scene;
};