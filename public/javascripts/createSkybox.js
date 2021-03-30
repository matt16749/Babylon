"use strict";

var setSky = function setSky() {
  // Sky material
  var skyboxMaterial = new BABYLON.SkyMaterial("skyMaterial");
  skyboxMaterial.backFaceCulling = false; //skyboxMaterial._cachedDefines.FOG = true;
  // Sky mesh (box)

  var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0);
  skybox.material = skyboxMaterial;

  var setSkyConfig = function setSkyConfig(property, from, to) {
    var keys = [{
      frame: 0,
      value: from
    }, {
      frame: 100,
      value: to
    }];
    var animation = new BABYLON.Animation("animation", property, 100, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    animation.setKeys(keys);
    scene.stopAnimation(skybox);
    scene.beginDirectAnimation(skybox, [animation], 0, 100, false, 1);
  };

  window.addEventListener("keydown", function (evt) {
    switch (evt.keyCode) {
      case 49:
        setSkyConfig("material.inclination", skyboxMaterial.inclination, 0);
        break;
      // 1

      case 50:
        setSkyConfig("material.inclination", skyboxMaterial.inclination, -0.5);
        break;
      // 2

      case 51:
        setSkyConfig("material.luminance", skyboxMaterial.luminance, 0.1);
        break;
      // 3

      case 52:
        setSkyConfig("material.luminance", skyboxMaterial.luminance, 1.0);
        break;
      // 4

      case 53:
        setSkyConfig("material.turbidity", skyboxMaterial.turbidity, 40);
        break;
      // 5

      case 54:
        setSkyConfig("material.turbidity", skyboxMaterial.turbidity, 5);
        break;
      // 6

      case 55:
        setSkyConfig("material.cameraOffset.y", skyboxMaterial.cameraOffset.y, 50);
        break;
      // 7

      case 56:
        setSkyConfig("material.cameraOffset.y", skyboxMaterial.cameraOffset.y, 0);
        break;
      // 8

      default:
        break;
    }
  });
  return skybox;
};