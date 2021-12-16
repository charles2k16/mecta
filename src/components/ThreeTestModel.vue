<template>
  <div class="full-content">
    <canvas
      id="three"
      ref="three"
      @mousedown="mouseDown"
      @mouseup="mouseUp"
      @mousemove="mouseMove"
    >
    </canvas>
    <div class="tool-tip" ref="tooltip"></div>
    <div class="dev-comp" ref="devComp">
      <ul>
        <li>
          <span>光照强度</span
          ><input v-model="lightIntensity" min="0" max="3" class="light" />
        </li>
        <li>
          <span>润</span
          ><input v-model="sightType1" class="run" type="checkbox" />
        </li>
        <li>
          <span>润2</span
          ><input v-model="sightType2" class="run" type="checkbox" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import {
  universalInit,
  resizeRender,
  absPosition,
  loadMO,
} from './threejs/3constructor';
//import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
//import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
//import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
//import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js'
let objS = {
  stats: null,
  controls: null,
  renderer: null,
  camera: null,
  scene: null,
  composer: null,
  effectFXAA: null,
  outlinePass: null,
};
//const objModel={};//存放模型，后期为精灵做字典
const box = {}; //存放模型边框，用于悬浮高亮
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let dragFlag = false;

//let count=0;
//let lastIntersect;

export default {
  data() {
    return {
      reqId: 0,
      lightIntensity: 0,
      sightType1: 0,
      //objS:{} //接受初始化函数返回的渲染器、场景、监控、鼠标控制、相机对象
    };
  },
  mounted() {
    objS = universalInit('#three');
    this.load();
    this.reqId = requestAnimationFrame(this.animate);
    window.addEventListener('keydown', this.keyPress, false); //canvas不响应键盘，添加到window里
  },
  beforeDestroy() {
    console.log('boom');
    console.log(this.reqId);
    window.cancelAnimationFrame(this.reqId);
    document.body.removeChild(objS.stats.domElement); //把stats删了
    objS = null;
  },
  methods: {
    mouseDown(e) {
      dragFlag = false;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    },
    mouseUp(e) {
      let shiftJudge =
        Math.abs(mouse.x - e.clientX) + Math.abs(mouse.y - e.clientY); //判断鼠标移动量
      console.log(shiftJudge);
      if (shiftJudge > 7) dragFlag = 1;
      //大于7为拖动，反之为点击
      else dragFlag = false;
      if (dragFlag) {
        console.log('drag');
      } else {
        console.log('click');
        //将鼠标点击位置的屏幕坐标转成threejs中的标准坐标
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        //从相机发射一条射线，经过鼠标点击位置
        raycaster.setFromCamera(mouse, objS.camera);
        //计算射线相机到的对象，可能有多个对象，因此返回的是一个数组，按离相机远近排列
        let intersects = raycaster.intersectObjects(objS.scene.children);
        console.log(intersects);
        if (intersects.length > 0) {
          if (
            intersects[0].object.name != 'floor' &&
            intersects[0].object.type != 'Sprite'
          ) {
            const texture = new THREE.TextureLoader().load('deadly.png');
            const spriteMaterial = new THREE.SpriteMaterial({
              //color:0x123456,//设置精灵矩形区域颜色
              map: texture, //设置精灵纹理贴图
            });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.scale.set(10, 10, 1);
            let pos = absPosition(intersects[0].object);
            sprite.position.set(pos.x, pos.y, pos.z);
            console.log(sprite);
            objS.scene.add(sprite);
          }
        } else console.log('empty!');
      }
    },
    mouseMove(e) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      //从相机发射一条射线，经过鼠标点击位置
      raycaster.setFromCamera(mouse, objS.camera);
      //计算射线相机到的对象，可能有多个对象，因此返回的是一个数组，按离相机远近排列
      let intersects = raycaster.intersectObjects(objS.scene.children);
      let toolTip = this.$refs.tooltip;
      if (intersects.length > 0) {
        if (
          intersects[0].object.name != 'floor' &&
          intersects[0].object.type != 'Sprite'
        ) {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
          // 实时更新tooltip位置
          toolTip.style.left = e.clientX + -65 + 'px';
          toolTip.style.top = e.clientY + 13 + 'px';
          toolTip.style.visibility = 'visible';
          toolTip.textContent = intersects[0].object.name;
          //objS.scene.add(box.model1);
        } else {
          toolTip.style.visibility = 'hidden';
          objS.scene.remove(box.model1);
        }

        //outline
        let selectedObjects = [];
        selectedObjects.push(intersects[0].object);
        objS.outlinePass.selectedObjects = selectedObjects;
        console.log(objS.outlinePass);
      } else {
        toolTip.style.visibility = 'hidden';
      }

      console.log('dododod');
    },
    keyPress(e) {
      console.log(e.key);
      //if(this.sightType1){
      //switch (e.key){
      //case w: ;
      //case a:
      //}
      //}
    },

    animate() {
      objS.stats.update();
      objS.controls.update();
      //objS.renderer.render(objS.scene, objS.camera); //渲染
      objS.composer.render();
      if (resizeRender(objS.renderer, objS.composer, objS.effectFXAA)) {
        //动态调整分辨率
        let canvas = objS.renderer.domElement;
        objS.camera.aspect = canvas.clientWidth / canvas.clientHeight;
        objS.camera.updateProjectionMatrix();
      }
      if (!window.requestAnimationFrame) {
        //简简单单兼个容
        window.requestAnimationFrame =
          window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;
      }
      if (this.sightType1) {
        objS.camera.translateX(1);
      }
      this.reqId = window.requestAnimationFrame(this.animate);
    },
    load() {
      loadMO('B4F2/B4F2BG').then(data => {
        let line = /Line/;
        let rec = /Rectangle/;
        let color1 = { r: 0, g: 0.23, b: 0.5 };
        let color2 = { r: 0, g: 0.066, b: 0.2 };
        for (let x in data.children) {
          if (rec.exec(data.children[x].name) != null) {
            data.children[x].material.color = color2;
          }
          data.children[x].castShadow = true;
          data.children[x].receiveShadow = true;
        }
        for (let x in data.children) {
          if (line.exec(data.children[x].name) != null) {
            data.children[x].material.color = color1;
          }
        }
        objS.scene.add(data);
      });
      loadMO('model/TinyM').then(data => {
        for (let x in data.children) {
          data.children[x].castShadow = true;
          data.children[x].receiveShadow = true;
        }
        data.translateX(-300);
        data.translateZ(170);
        objS.scene.add(data);
      });
      //let obj=loadMO("B4F2/B4F2BG");

      /*const gltfLoader = new GLTFLoader()
      gltfLoader.load(`${process.env.BASE_URL}model/tinyM.gltf`, (gltf) => {
        var model = gltf.scene;
				
				model.name="gltf"
				model.scale.set(0.01,0.010,0.010)
				console.log(model)
        //objS.scene.add(model)
      })*/
      /*
			const loader = new ColladaLoader() //dae文件加载
  		loader.load(`${process.env.BASE_URL}idc/3d.dae`, LoadResult => {
    		const idc = LoadResult.scene.children[0].clone();
    		idc.rotation.x = -0.5 * Math.PI;
    		idc.position.z=350;
    		let temp1,temp2
    		for (temp1 in idc.children){ //遍历上阴影
      		idc.children[temp1].castShadow=true;
      		idc.children[temp1].receiveShadow=true
      		for(temp2 in idc.children[temp1].children){ //人人有影上
        		idc.children[temp1].children[temp2].castShadow=true;
        		idc.children[temp1].children[temp2].receiveShadow=true;
      		}
    		}
	  		objS.scene.add(idc)
  		})*/
      //mtlLoader.load(`${process.env.BASE_URL}model/tinyM.mtl`, materials=>{
    },
  },
  watch: {
    sightType1() {
      if (this.sightType1) {
        objS.camera.position.set(100, 100, 70);
      }
    },
  },
};
</script>

<style scoped>
.full-content {
  width: 100%;
  height: 100%;
  margin: 0px; /* 左边无空白，方便鼠标位置与三维坐标转换*/
}
#three {
  width: 100%;
  height: 700px;
  margin: 0px;
  top: 0;
}

.stats {
  width: 8px;
  height: 48px;
  display: block;
}
.tool-tip {
  position: absolute;
  z-index: 2;
  background: white;
  padding: 10px;
  border-radius: 4px;
  visibility: hidden;
  display: inline-block;
  user-select: none;
}
.dev-comp {
  text-align: right;
  position: fixed;
  width: 100px;
  right: 10px;
  background-color: black;
  border-radius: 10%;
}
.dev-comp ul {
  list-style-type: none;
}
.dev-comp span {
  color: white;
}
.dev-comp .light {
  width: 10px;
}
</style>
