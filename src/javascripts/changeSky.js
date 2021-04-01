const changeSky = function(currentSky, newSkyMaterial, scene) {

    if (!currentSky.material.turbidity || !newSkyMaterial.turbidity) {
      currentSky.material = newSkyMaterial;
    } else {
        const skyAnimationGroup = new BABYLON.AnimationGroup("skyAnimationGroup");

      const skyMaterialName = newSkyMaterial.name;

      const skyAnimations = {
        turbidity: setSkyAnimation("turbidity", "material.turbidity", currentSky.material.turbidity, SKY_MATERIALS_DATA[skyMaterialName].turbidity),
        luminance: setSkyAnimation("luminance", "material.luminance", currentSky.material.luminance, SKY_MATERIALS_DATA[skyMaterialName].luminance),
        rayleigh: setSkyAnimation("rayleigh", "material.rayleigh", currentSky.material.rayleigh, SKY_MATERIALS_DATA[skyMaterialName].rayleigh),
        inclination: setSkyAnimation("inclination", "material.inclination", currentSky.material.inclination, SKY_MATERIALS_DATA[skyMaterialName].inclination),
        mieCoefficient: setSkyAnimation("mieCoefficient", "material.mieCoefficient", currentSky.material.mieCoefficient, SKY_MATERIALS_DATA[skyMaterialName].mieCoefficient),
        mieDirectionalG: setSkyAnimation("mieDirectionalG", "material.mieDirectionalG", currentSky.material.mieDirectionalG, SKY_MATERIALS_DATA[skyMaterialName].mieDirectionalG),
        azimuth: setSkyAnimation("azimuth", "material.azimuth", currentSky.material.azimuth, SKY_MATERIALS_DATA[skyMaterialName].azimuth),
      };

      skyAnimationGroup.addTargetedAnimation(skyAnimations.turbidity, currentSky);
      skyAnimationGroup.addTargetedAnimation(skyAnimations.luminance, currentSky);
      skyAnimationGroup.addTargetedAnimation(skyAnimations.rayleigh, currentSky);
      skyAnimationGroup.addTargetedAnimation(skyAnimations.inclination, currentSky);
      skyAnimationGroup.addTargetedAnimation(skyAnimations.mieCoefficient, currentSky);
      skyAnimationGroup.addTargetedAnimation(skyAnimations.mieDirectionalG, currentSky);
      skyAnimationGroup.addTargetedAnimation(skyAnimations.azimuth, currentSky);

      scene.stopAnimation(currentSky);

      skyAnimationGroup.play(true);
    }
   
  }