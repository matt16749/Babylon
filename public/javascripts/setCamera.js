"use strict";

var setCamera = function setCamera() {
  var camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0)); // Positions the camera overwriting alpha, beta, radius

  camera.setPosition(new BABYLON.Vector3(0, 30, 50));
  camera.attachControl(canvas, true);
  camera.lowerRadiusLimit = 2; //The upper limit of the camera's reduced radius limits the distance of the camera from the focus

  camera.upperRadiusLimit = 10; //The upper limit of camera magnification radius upperRadiusLimit should not be less than lowerRadiusLimit to avoid errors or ineffectiveness.

  camera.wheelDeltaPercentage = 0.09; //Mouse wheel sensitivity

  camera.checkCollisions = true; // Turn on the collision between perspective and scene objects

  camera.upperBetaLimit = Math.PI / 2 * 0.9; // Maximum beta angle of viewing angle

  camera.lowerRadiusLimit = 50; // Minimum distance of viewing angle

  camera.upperRadiusLimit = 1000; // Maximum distance of viewing angle

  camera.radius = 100; // Initialize the viewing angle distance
  // {{!-- camera.useAutoRotationBehavior = true; --}}
  // camera.autoRotationBehavior.idleRotationSpeed = 0.2;

  camera.useFramingBehavior = true;
  camera.framingBehavior.radiusScale = 50;
  return camera;
};