import * as THREE from 'three'; //import
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

//此函数包含新建场景，帧率、控制器等小组件，通用初始化
export function universalInit(domEl) {
  const scene = new THREE.Scene(); //new一个场景对象
  scene.background = new THREE.Color('#111111'); //场景的bgc

  let canvas = document.querySelector(domEl); //取canavs元素
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true }); //创建渲染器
  renderer.shadowMap.enabled = true; //阴影设置
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  /*const floorGeometry = new THREE.PlaneGeometry(3000, 3000); //地板
  const floorMaterial = new THREE.MeshPhongMaterial({color: 0x9aa0a4});//地板材质
  const floor = new THREE.Mesh(floorGeometry,floorMaterial);
  floor.receiveShadow=true;
  //floor.rotation.x = -0.5 * Math.PI
  floor.position.y = -1;
	floor.name="floor"
  scene.add(floor);*/

  const ambient = new THREE.AmbientLight(0xffffff, 0.77); //环境光
  scene.add(ambient);
  const sunLight = new THREE.DirectionalLight(0xaeaeae, 0.79); //平行光
  sunLight.castShadow = true;
  sunLight.position.set(100, 0, 300);
  sunLight.shadow.camera.near = 0.5;
  sunLight.shadow.camera.far = 1000;
  sunLight.shadow.camera.left = -2000;
  sunLight.shadow.camera.right = 200;
  sunLight.shadow.camera.top = 500;
  sunLight.shadow.camera.bottom = -1300;
  sunLight.shadow.mapSize = new THREE.Vector2(4096, 4096);
  const helper = new THREE.CameraHelper(sunLight.shadow.camera);
  scene.add(sunLight, helper);
  //stats，显示帧率

  const camera = new THREE.PerspectiveCamera( //透视相机，
    47, //fov，视野角度
    1, //视窗的高宽比
    1, //near,近面，距离相机小于0.1则不会被渲染。
    2000
  ); //far,远面，距离大于1000则不会被渲染
  camera.position.set(50, 50, 50); //相机位置
  camera.lookAt(0, 0, 50);
  camera.up.x = 0;
  camera.up.y = 0; //相机绕x轴转90度，正过来，此时z轴在上面
  camera.up.z = 1;
  const axisHelper = new THREE.AxesHelper(2000); //辅助坐标轴
  scene.add(axisHelper);
  //OrbitControls：控制器，鼠标拖动
  const controls = new OrbitControls(camera, renderer.domElement); //轨道控制器
  controls.enableDamping = true; //阻尼器
  const composer = new EffectComposer(renderer);
  var renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);
  const outlinePass = new OutlinePass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    scene,
    camera
  );
  composer.addPass(outlinePass);
  const effectFXAA = new ShaderPass(FXAAShader);
  effectFXAA.uniforms['resolution'].value.set(
    1 / window.innerWidth,
    1 / window.innerHeight
  );
  composer.addPass(effectFXAA);
  return {
    renderer,
    scene,
    controls,
    camera,
    composer,
    effectFXAA,
    outlinePass,
  };
}
//动态调整显示尺寸
export function resizeRender(renderer, composer, effect) {
  let canvas = renderer.domElement;
  let width = window.innerWidth;
  let height = window.innerHeight;
  let canvasPixelWidth = canvas.width / window.devicePixelRatio;
  let canvasPixelHeight = canvas.height / window.devicePixelRatio;
  let needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
    composer.setSize(width, height);
    effect.uniforms['resolution'].value.set(
      1 / window.innerWidth,
      1 / window.innerHeight
    );
  }
  return needResize;
}

//导入obj后，物体坐标是0，0，0（无论在哪），需重新获取
export function absPosition(object) {
  object.updateMatrixWorld();
  // 获得包围盒得min和max
  const box = new THREE.Box3().setFromObject(object);
  // 返回包围盒的中心点
  const center = box.getCenter(new THREE.Vector3());
  let x = center.x;
  let y = center.y;
  let z = center.z * 2.7777;
  return { x, y, z };
}

export function loadMO(modelName) {
  //传参为文件名，加载obj与mtl，
  const aLoad = new Promise(resolve => {
    let mtl = new MTLLoader();
    let obj = new OBJLoader();
    mtl.load(`${process.env.BASE_URL}${modelName}.mtl`, materials => {
      // 返回一个包含材质的对象MaterialCreator
      console.log(materials);
      //obj的模型会和MaterialCreator包含的材质对应起来
      obj.setMaterials(materials);
      //obj.load(`${process.env.BASE_URL}model/tinyM.obj`, obj=> {
      obj.load(`${process.env.BASE_URL}${modelName}.obj`, obj => {
        obj.scale.set(0.01, 0.01, 0.01); //放大obj组对象
        //console.log(obj.getWorldPosition())
        console.log(obj);
        obj.rotation.x = 0.5 * Math.PI;
        obj.castShadow = true;
        //obj.translateX(-400);
        //obj.translateZ(100);
        resolve(obj);
        //setModelPosition(obj);
      });
    });
  });
  return aLoad;
}

/*function setModelPosition(object) { 
      object.updateMatrixWorld();
      // 获得包围盒得min和max
      const box = new THREE.Box3().setFromObject(object);
      // 返回包围盒的宽度，高度，和深度
      //const boxSize = box.getSize();
      // 返回包围盒的中心点
      const center = box.getCenter(new THREE.Vector3());
      object.position.x = object.position.x - center.x;
      object.position.y += object.position.y - center.y; 
      //object.position.z = object.position.z - center.z;
    }*/
