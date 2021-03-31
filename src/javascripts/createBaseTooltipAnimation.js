var createBaseTooltipAnimation = (scene, tooltip) => {
  const actionManager = new BABYLON.ActionManager(scene);
  const frameRate = 30;

  const scaleXAnimation = new BABYLON.Animation("myAnimation", "scaleX", frameRate * 4, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
  const scaleYAnimation = new BABYLON.Animation("myAnimation", "scaleY", frameRate * 4, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

  // Animation keys
  const keys = [];

  // Starting position
  keys.push({
    frame: 0,
    value: 0
  });

  // Ending position
  keys.push({
    frame: frameRate,
    value: -1
  });

  scaleXAnimation.setKeys(keys);
  scaleYAnimation.setKeys(keys);
  tooltip.animations = [];
  tooltip.animations.push(scaleXAnimation);
  tooltip.animations.push(scaleYAnimation);

  actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(){
    scene.beginAnimation(tooltip, 0, frameRate, false);
  }));
  actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(){
    scene.beginAnimation(tooltip, frameRate, 0, false);
  }));

  return actionManager;
};
