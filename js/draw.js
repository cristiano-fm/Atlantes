
var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("canvas"), antialias: true});
renderer.setClearColor(0x242424);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( 400, 400 );
document.getElementById("canvas-loc").appendChild( renderer.domElement );

var camera = new THREE.PerspectiveCamera( 50, 400/400, 0.1, 3000 );
camera.position.z = 27;
camera.position.y = 0;

var scene = new THREE.Scene();

//color scheme
var white = 0xFFFFFF;
var tone1 = 0x0D3849;
var tone2 = 0x1E667C;
var tone3 = 0x4A9694;
var tone4 = 0xA17E94;
var tone5 = 0xF48979;

//------------------planets---------------------//
var newPlanet = function( radius ){
  var geo = new THREE.SphereGeometry( radius, 32, 32 );
  var mtr = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().setCrossOrigin('anonymous').load('earth.png')
  });
  var planet = new THREE.Mesh( geo, mtr );
  return planet;
}

var newPin = function(){
  var geo = new THREE.SphereGeometry(0.15, 10, 10);
  var mtr = new THREE.MeshBasicMaterial( {color: 0x8d3033} );
  var pin = new THREE.Mesh( geo, mtr );
  pin.position.z = 10;
  scene.add(pin);
  var orbitPin = new THREE.Object3D();
  orbitPin.add(pin);
  orbitPin.rotation.x = (Math.random() * 2 * 3.14);
  orbitPin.rotation.y = (Math.random() * 2 * 3.14);
  orbitPin.rotation.z = (Math.random() * 2 * 3.14);
  scene.add(orbitPin);

  return orbitPin;
}

var translate = function( obj, trsX, trsY, trsZ ){
  obj.position.x = trsX;
  obj.position.y = trsY;
  obj.position.z = trsZ;
}

var earth = newPlanet(10);
scene.add(earth);

var orbit = new THREE.Object3D();

var x = 0
while (x < 70){
  var pin = newPin();
  orbit.add(pin);
  x++;
}
orbit.add(earth);
scene.add(orbit);

//---------------------illumination-----------------------//
var ambientLight = new THREE.AmbientLight( 0xFFFFFFF, 1);
scene.add( ambientLight );

var directLight = new THREE.PointLight( 0xFFFFFF, 1);
scene.add( directLight );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

var update = function () {
  orbit.rotation.y += 0.0015;
}

var animate = function () {
	requestAnimationFrame( animate );

  update();
	renderer.render( scene, camera );
};

animate();

