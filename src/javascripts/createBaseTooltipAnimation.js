var createBaseTooltipAnimation = (scene, tooltip) => {
  const actionManager = new BABYLON.ActionManager(scene);
  const frameRate = FRAME_RATE;

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
    value: 1
  });

  tooltip.animations = [];

  scaleXAnimation.setKeys(keys);
  tooltip.animations.push(scaleXAnimation);

  scaleYAnimation.setKeys(keys);
  tooltip.animations.push(scaleYAnimation);

  return actionManager;
};
