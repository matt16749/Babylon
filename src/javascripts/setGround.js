const setGround = () => {
  const ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 300,
    height: 300
  });
  const groundMat = new BABYLON.StandardMaterial("groundMat");
  groundMat.diffuseColor = BABYLON.Color3.FromHexString("#585E43")
  ground.material = groundMat;

  return ground;
}
