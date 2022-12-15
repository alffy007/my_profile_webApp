import './style.css'
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const target = window.document.getElementsByTagName('h1')[0]

window.addEventListener('click',()=>{
  var aud = document.getElementById('song');
aud.volume = 0.2;
  document.getElementById('song').play();
 
})


const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) =>  neonGlory(target);

const link = document.querySelector(".link");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const transition = document.querySelector(".transition");
link.addEventListener("click", (e) => {
  e.preventDefault();
  transition.classList.add("slide");
  setTimeout(() => {
    window.location = link.href;

  }, 900);
});
link1.addEventListener("click", (e) => {
  e.preventDefault();
  transition.classList.add("slide");
  setTimeout(() => {
    window.location = link1.href;

  }, 900);
});
link2.addEventListener("click", (e) => {
  e.preventDefault();
  transition.classList.add("slide");
  setTimeout(() => {
    window.location = link2.href;

  }, 900);
});


const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector('#app')
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.setZ(40);

renderer.render(scene,camera);
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshStandardMaterial( { color:	0xff1A00A0} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


const pointlight = new THREE.PointLight( 0xffffffff, 2, 100 );
pointlight.position.set( 50, 5, 5 );
const light = new THREE.HemisphereLight( 0xff00FFFF, 0x080820, 0.5 );
scene.add( pointlight,light);




function animate() {
	requestAnimationFrame( animate );
  cube.rotation.x += 0.005;
cube.rotation.y += 0.002;
cube.rotation.z += 0.001;

 cube.position.z = -9;
	renderer.render( scene, camera );
}
animate();

