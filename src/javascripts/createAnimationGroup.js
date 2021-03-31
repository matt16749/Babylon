const createAnimationGroup = (line, lineAnimation, label, labelAnimation) => {
  const animationGroup = new BABYLON.AnimationGroup("tooltipGroup");
  animationGroup.addTargetedAnimation(lineAnimation, line);
  animationGroup.addTargetedAnimation(labelAnimation, label);

  animationGroup.normalize(0, 100);

  return animationGroup;
};
