
//renderer camera and scene initialization
container = document.getElementById( 'canvas' );


var renderer = new THREE.WebGLRenderer({ antialias: true});
//renderer.setClearColor(0x222222);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild( renderer.domElement );

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 3000 );
camera.position.z = 25;
camera.position.y = -8;

var scene = new THREE.Scene();

//color scheme
var white = 0xFFFFFF;
var tone1 = 0x0D3849;
var tone2 = 0x1E667C;
var tone3 = 0x4A9694;
var tone4 = 0xA17E94;
var tone5 = 0xF48979;

//-------------------main scene walls-----------------------//
var newWall = function( dimx, dimy, dimz ){
  var geo = new THREE.BoxGeometry( dimx, dimy, dimz );
  var mtr = new THREE.MeshPhongMaterial( { color: white } );
  var wall = new THREE.Mesh( geo, mtr );
  return wall;
}

var backWall = newWall( 40, 40, 1 );
scene.add( backWall );
backWall.position.z = -19.5;


//------------------main scene objects---------------------//
var newCube = function( tone ){
  var geo = new THREE.BoxGeometry( 3, 3, 3 );
  var mtr = new THREE.MeshPhongMaterial( { color: tone } );
  var cube = new THREE.Mesh( geo, mtr );
  return cube;
}

var translate = function( obj, trsX, trsY, trsZ ){
  obj.position.x = trsX;
  obj.position.y = trsY;
  obj.position.z = trsZ;
}

var box1 = newCube( tone1 );
scene.add( box1 );
translate(box1, -14.5, -14.5, -17.5);


//---------------------illumination-----------------------//
var ambientLight = new THREE.AmbientLight( 0xFFFFFFF, 0.3);
scene.add( ambientLight );

var directLight = new THREE.PointLight( 0xFFFFFFF, 0.5);
scene.add( directLight );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

var update = function () {
 /*  backWall.rotation.x += 0.01;
  backWall.rotation.y += 0.01; */
}

var animate = function () {
	requestAnimationFrame( animate );

  update();
	renderer.render( scene, camera );
};

animate();
