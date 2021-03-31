var createButton = function(treeIndex, text, verticalOffset, onClickButton) {
   // GUI
   var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
   var button = BABYLON.GUI.Button.CreateSimpleButton("but1", text);
   button.width = "200px";
   button.height = "40px";
   button.color = theme.color;
   button.cornerRadius = 5;
   button.background = theme.background;
   button.top = verticalOffset;
   button.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
   button.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
   button.left = '-20px';
   advancedTexture.addControl(button);

   button.onPointerUpObservable.add(function () {
     onClickButton(treeIndex);
   });
}
