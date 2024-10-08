console.log("workin'");

import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PrespectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000,
);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial(
  { color: 0xff0000, wireframe: true }
);
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

