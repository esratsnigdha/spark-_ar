const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Reactive = require('Reactive');


(async function (){

  // Loading the first material 'PrismRight'.
  const prism = await Scene.root.findFirst('PrismRight');

   // Loading the second material 'PrismLeft'.
  const prism2 = await Scene.root.findFirst('PrismLeft');

   // Loading the third material 'Handpainted watercolor cake'.
  const cake = await Scene.root.findFirst('Handpainted watercolor cake');

  // Loading the face material.
  const face = FaceTracking.face(0);

  // Here binding the rotation signal
  // While user moves face objects will moves with the face
  prism.transform.rotation = face.cameraTransform.rotation;
  prism2.transform.rotation = face.cameraTransform.rotation;
  cake.transform.rotation = face.cameraTransform.rotation;

  // Map the mouth openness value to certain range.
  const mouthOpenness = face.mouth.openness.toRange(1.1, 2.5);

  // Binding the mouth signal to objets.
  prism.transform.scale = Reactive.point(mouthOpenness, mouthOpenness, mouthOpenness);
  prism2.transform.scale = Reactive.point(mouthOpenness, mouthOpenness, mouthOpenness);
  cake.transform.scale = Reactive.point(mouthOpenness, mouthOpenness, mouthOpenness);



}) ();