"use strict";

var setGround = function setGround() {
  var ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 300,
    height: 300
  });
  var groundMat = new BABYLON.StandardMaterial("groundMat");
  groundMat.diffuseColor = BABYLON.Color3.FromHexString("#585E43");
  ground.material = groundMat;
  return ground;
};