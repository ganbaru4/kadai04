(function(){

  //シーンを作る
  var scene = new THREE.Scene();

  //カメラを作る
  var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 500;

  //レンダラーをつくる
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  //四角を作る
  var geometry = new THREE.CubeGeometry(100, 100, 100);//中身
  var material = new THREE.MeshBasicMaterial( {color: 0xff0000} );//皮
  var cube = new THREE.Mesh(geometry, material);//中身と皮を合体
  scene.add(cube);//シーンにメッシュを追加

  //光を作る
  var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.z = 300;
  scene.add(directionalLight);

  renderer.render(scene, camera);

  function render(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    setTimeout(render, 30);
  }
  render();

})();

