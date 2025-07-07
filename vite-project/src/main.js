import * as THREE from 'three';

const canvas = document.getElementById('canvas');

// Create a scene
const scene = new THREE.Scene();

scene.background = new THREE.Color(0xF0F0F0);

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// create a Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({ color: 0x468585, emissive: 0x468585 });
const dodecahedron = new THREE.Mesh(geometry, material);


const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({ color: 0xB4B4B3});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -2.5;

scene.add(dodecahedron);
scene.add(box);

// Create a light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

// Create a renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);