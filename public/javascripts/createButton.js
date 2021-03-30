"use strict";

var createButton = function createButton(tree, text, verticalOffset, treesToHide) {
  // GUI
  var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
  var button = BABYLON.GUI.Button.CreateSimpleButton("but1", text);
  button.width = "150px";
  button.height = "40px";
  button.color = theme.color;
  button.cornerRadius = 5;
  button.background = theme.background;
  treesToHide.forEach(function (hideTree) {
    button.onPointerUpObservable.add(function () {
      hideTree.setEnabled(false);
    });
  });
  button.onPointerUpObservable.add(function () {
    tree.setEnabled(true);
  });
  button.top = verticalOffset;
  button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
  button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
  advancedTexture.addControl(button);
};