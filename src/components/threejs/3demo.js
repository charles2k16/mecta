import * as THREE from 'three'; //import
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
//import * as Stats from 'three-stats';
export function initThree(domEl) {
  const scene = new THREE.Scene(); //new一个场景对象
  scene.background = new THREE.Color('#04183C'); //场景的bgc

  //daeLoader加载外部模型
  const loader = new ColladaLoader();
  loader.load(`${process.env.BASE_URL}idc/3d.dae`, LoadResult => {
    const idc = LoadResult.scene.children[0].clone();

    idc.rotation.x = -0.5 * Math.PI;
    idc.position.z = 350;
    let temp1, temp2;
    for (temp1 in idc.children) {
      //遍历设置cast和recieve阴影
      idc.children[temp1].castShadow = true;
      idc.children[temp1].receiveShadow = true;
      for (temp2 in idc.children[temp1].children) {
        idc.children[temp1].children[temp2].castShadow = true;
        idc.children[temp1].children[temp2].receiveShadow = true;
      }
    }
    //console.log(idc)
    //const edges = new THREE.BoxHelper(  idc, 0x1535f7 );

    scene.add(idc);
  });
  const mtlLoader = new MTLLoader(); //材质文件加载器
  const objLoader = new OBJLoader(); //OBJ加载器
  mtlLoader.load(`${process.env.BASE_URL}model/tinyM.mtl`, materials => {
    // 返回一个包含材质的对象MaterialCreator
    console.log(materials);
    //obj的模型会和MaterialCreator包含的材质对应起来
    objLoader.setMaterials(materials);
    objLoader.load(`${process.env.BASE_URL}model/tinyM.obj`, obj => {
      obj.name = 'test';
      console.log(obj);
      obj.scale.set(0.01, 0.01, 0.01); //放大obj组对象
      obj.castShadow = true;
      //scene.add(obj);//返回的组对象插入场景中
    });
  });

  const ambient = new THREE.AmbientLight(0x777777, 1.2); //添加光源  颜色和光照强度 环境光均匀照亮全场，故不会产生投影
  const spotLight = new THREE.SpotLight(0xffffff, 0); //点光源
  spotLight.position.set(90, 90, 300); //点光源位置
  //spotLight.target=(0,0,0);
  spotLight.angle = 3.14 / 6;
  const sunLight = new THREE.DirectionalLight(0xaeaeae, 1.03); //平行光
  sunLight.castShadow = true;

  sunLight.position.set(100, 900, -300);

  sunLight.shadow.camera.near = 0.5;
  sunLight.shadow.camera.far = 1000;
  sunLight.shadow.camera.left = -2000;
  sunLight.shadow.camera.right = 200;
  sunLight.shadow.camera.top = 500;
  sunLight.shadow.camera.bottom = -1300;
  sunLight.shadow.mapSize = new THREE.Vector2(4096, 4096);
  const helper = new THREE.CameraHelper(sunLight.shadow.camera);

  const axisHelper = new THREE.AxesHelper(600); //添加辅助坐标系 参数位辅助坐标系的长度
  scene.add(ambient, axisHelper, spotLight, sunLight, helper);

  /* //两个多面体
  const geometry = new THREE.IcosahedronGeometry(50);   //创建一个立方体几何对象Geometry
  const material = new THREE.MeshPhongMaterial	({      //材质对象Material
    color: 0x999999,
    //opacity:0.5,//不透明度
    //transparent:true,
    specular:0x4488ee, //高光颜色
    shininess:12      //高光亮度
  }); 
  const material1 =new THREE.MeshPhongMaterial({color:0x000000});
  let cube = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  let cube2 = new THREE.Mesh(geometry,material);
  let lCube = new THREE.Line(geometry, material1);
  cube.translateY(50);
  cube2.translateY(130);
  lCube.translateY(50);
  scene.add(cube,lCube,cube2); //网格模型添加到场景中*/

  //地板
  const floorGeometry = new THREE.PlaneGeometry(3000, 3000); //地板
  const floorMaterial = new THREE.MeshPhongMaterial({ color: 0x9aa0a4 }); //地板材质
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.receiveShadow = true;
  floor.rotation.x = -0.5 * Math.PI;
  floor.position.y = -1;
  scene.add(floor);

  const camera = new THREE.PerspectiveCamera( //透视相机，
    45, //fov，视野角度
    1, //视窗的高宽比
    1, //near,近面，距离相机小于0.1则不会被渲染。
    3000
  ); //far,远面，距离大于1000则不会被渲染
  camera.position.set(2000, 0, 0); //相机位置
  camera.lookAt(0, 0, 0); //看向scene

  // stats,用于显示帧率的小插件

  //------------------------------------

  //动态调整canvas分辨率适应屏幕
  function resizeRendererToDisplaySize(renderer) {
    let canvas = renderer.domElement;
    let width = window.innerWidth - 130;
    let height = window.innerHeight;
    let canvasPixelWidth = canvas.width / window.devicePixelRatio;
    let canvasPixelHeight = canvas.height / window.devicePixelRatio;
    let needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  /*function click(e){
    // 声明 raycaster 和 mouse 变量
      var raycaster = new THREE.Raycaster();
      var mouse = new THREE.Vector2();
  
      // 通过鼠标点击位置,计算出 raycaster 所需点的位置,以屏幕为中心点,范围 -1 到 1
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
      //通过鼠标点击的位置(二维坐标)和当前相机的矩阵计算出射线位置
      raycaster.setFromCamera(mouse, camera);
  
      // 获取与射线相交的对象数组，其中的元素按照距离排序，越近的越靠前
      var intersects = raycaster.intersectObjects(scene.children);
  
      var objs=[];
      for (var i = 0; i < intersects.length; i++) {
          var intersect = intersects[i];
          if (intersect.object instanceof THREE.Mesh) {
              var obj = intersect.object;
              //把距离加到模型用户数据里面，方便后面排序
              obj.userData.distance = intersect.distance;
              objs.push(obj);
          }
      }
  
      //按照距离排序
      objs = objs.sort(function (a, b) {
      return a.userData.distance - b.userData.distance;
      });
  
      //objs就是按照距离由近到远排列的选中模型数组集合
      //todo:后面操作渲染展示等等...
      //....
  }*/

  //渲，我疯狂的渲--------------------------------------
  let canvas = document.querySelector(domEl); //取canavs元素
  //创建渲染器，将canavs元素扔到webGlRender渲染器中渲染
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const controls = new OrbitControls(camera, renderer.domElement); //轨道控制器
  controls.enableDamping = true; //阻尼器
  //renderer.setSize(1277,838);

  console.log(scene);
  function animate() {
    //每一帧会执行一次
    controls.update();

    renderer.render(scene, camera);
    if (resizeRendererToDisplaySize(renderer)) {
      //动态调整分辨率
      let canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    requestAnimationFrame(animate);
  }
  animate();
}
