const setGround = () => {
   const largeGroundMat = new BABYLON.StandardMaterial("largeGroundMat");
   largeGroundMat.diffuseTexture = new BABYLON.Texture("assets/drygrass.png");
   
   const largeGround = BABYLON.MeshBuilder.CreateGroundFromHeightMap("largeGround", "assets/villageheightmap.png", {width:300, height:300, subdivisions: 20, minHeight:0, maxHeight: 2});
   largeGround.material = largeGroundMat;
  return largeGround;
}
