const createLineAnimation = (frameRate, line) => {
  const lineAnimation = new BABYLON.Animation("lineExtend", "scaleY", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
  BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

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

  lineAnimation.setKeys(keys);

  return lineAnimation;
};
