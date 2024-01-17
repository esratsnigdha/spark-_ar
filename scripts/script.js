const Scene = require('Scene');
const FaceTracking = require('FaceTracking');
const Reactive = require('Reactive');


(async function (){

  //Find the objects first
  const prism = await Scene.root.findFirst('PrismRight');
  const prism2 = await Scene.root.findFirst('PrismLeft');
  const cake = await Scene.root.findFirst('Handpainted watercolor cake');

  //Creat a reference of the face
  const face = FaceTracking.face(0);

  //Here bind rotation signal
  //while user rotate face objects will rotate with face
  prism.transform.rotation = face.cameraTransform.rotation;
  prism2.transform.rotation = face.cameraTransform.rotation;
  cake.transform.rotation = face.cameraTransform.rotation;

  //Map the mouth openness value to certain range
  const mouthOpenness = face.mouth.openness.toRange(1.1, 2.5);

  //Bind the mouth signal to objets
  prism.transform.scale = Reactive.point(mouthOpenness, mouthOpenness, mouthOpenness);
  prism2.transform.scale = Reactive.point(mouthOpenness, mouthOpenness, mouthOpenness);
  cake.transform.scale = Reactive.point(mouthOpenness, mouthOpenness, mouthOpenness);



}) ();