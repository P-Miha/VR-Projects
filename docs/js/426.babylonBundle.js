"use strict";(self.webpackChunkbabylonjs_typescript_webpack_template=self.webpackChunkbabylonjs_typescript_webpack_template||[]).push([[426,329,974,384],{5426:(t,e,n)=>{n.r(e),n.d(e,{DefaultSceneWithTexture:()=>g,default:()=>w});var o=n(4147),r=n(3579),s=n(972),i=n(307),a=n(3242),l=n(388),c=n(4684),u=n(1552),h=n(3789),m=n(6070),d=n(4404);function b(t,e,n){const o=function(t,e){const n=e.getWorldMatrix(),o=new s.y3;return n.invertToRef(o),s.P.TransformCoordinates(t,o)}(t,e),r=function(t,e){const n=e.bbox.min;if(o=t,r=e.bbox.min,i=e.bbox.max,!(o.x>=r.x&&o.y>=r.y&&o.z>=r.z&&o.x<=i.x&&o.y<=i.y&&o.z<=i.z))return-1;var o,r,i;let a=t.subtract(n);a=a.divide(new s.P(e.cellSize,e.cellSize,e.cellSize));const l=new s.P(Math.round(a.x),Math.round(a.y),Math.round(a.z));return c=l.x,u=l.y,h=l.z,c+(m=e.res).x*(u+m.y*h);var c,u,h,m}(o,n);return-1===r?-1:n.distances[r]}function f(t,e,n,o){const r=Math.pow(e.subtract(t).length(),2)/2,s=n,i=new l.Vector3(o.x,o.y,o.z);return 1+5/(2*r)*Math.pow(s.cross(i).length(),2)}n(1723);const p=n.p+"628b10094e62129397fc4859ae7349d6.stl";class g{constructor(){this.createScene=async(t,e)=>{const g=new o.x(t);Promise.all([Promise.resolve().then(n.bind(n,1568)),Promise.all([n.e(319),n.e(596)]).then(n.t.bind(n,3596,23))]).then((t=>{console.log(t),g.debugLayer.show({handleResize:!0,overlay:!0,globalRoot:document.getElementById("#root")||void 0})})),d.a.DO_NOT_ALTER_FILE_COORDINATES=!0;const w=(await l.SceneLoader.ImportMeshAsync("","",p,g,void 0,".stl")).meshes[0];w.scaling=new s.P(1,1,-1);const y=await l.SceneLoader.ImportMeshAsync("","",p,g,void 0,".stl"),x=y.meshes[0];x.name="NagelPuzzleMoveable",x.visibility=1,x.scaling=new s.P(1,1,-1);const P=new l.Mesh("NagelPunkte",g);P.parent=y.meshes[0];const _=async function(t){try{const t=await fetch("https://raw.githubusercontent.com/P-Miha/Kyros-Zylinder/master/assets/SDFInformation/Nagel1.noff");return await t.text()}catch(t){throw console.error("Fehler beim Laden der Off-Datei:",t),t}}(),I=function(t){const e=t.trim().split("\n"),n=[],o=[];for(let t=3;t<e.length;t++){const r=e[t].trim().split(" ").map(parseFloat);if(r.length>=3){const t=l.Vector3.FromArray(r.slice(0,3));if(n.push(t),r.length>=6){const t=l.Vector3.FromArray(r.slice(3,6));o.push(t)}}}return{vertices:n,normals:o}}(await _),O=I.vertices,S=I.normals;for(let t=0;t<O.length;t++){const e=new l.Mesh("Punkt"+t,g);e.position=O[t],e.parent=P,e.visibility=0}x.position=new s.P(-.5,1,0),w.position=new s.P(0,1,0),x.rotationQuaternion=s._f.FromEulerVector(new s.P(Math.PI/2,Math.PI,0)),x.scaling=new s.P(.01,.01,.01),w.scaling=new s.P(.01,.01,.01);const E=async function(t){try{const t=await fetch("https://raw.githubusercontent.com/P-Miha/Kyros-Zylinder/master/assets/SDFInformation/Nagel1.sdf");return await t.text()}catch(t){throw console.error("Fehler beim Laden der SDF-Datei:",t),t}}(),F=function(t){const e=t.trim().split("\n"),n={bbox:{min:l.Vector3.Zero(),max:l.Vector3.Zero()},cellSize:0,res:l.Vector3.Zero(),numCells:0,distances:[]};for(let t=0;t<e.length;t++){const o=e[t].trim(),r=o.indexOf("#");if(-1!==r){const e=o.substring(0,r).trim();if(0===e.length)continue;const s=e.split(" ").map(parseFloat);s.length>0&&(0===t?n.bbox.min=l.Vector3.FromArray(s):1===t?n.bbox.max=l.Vector3.FromArray(s):2===t?n.cellSize=s[0]:3===t?n.res=l.Vector3.FromArray(s):4===t?n.numCells=s[0]:n.distances.push(...s))}else{const e=o.split(" ").map(parseFloat);e.length>0&&(0===t?n.bbox.min=l.Vector3.FromArray(e):1===t?n.bbox.max=l.Vector3.FromArray(e):2===t?n.cellSize=e[0]:3===t?n.res=l.Vector3.FromArray(e):4===t?n.numCells=e[0]:n.distances.push(...e))}}return n}(await E),A=new l.Mesh("boundingBox",g);A.setBoundingInfo(new l.BoundingInfo(F.bbox.min,F.bbox.max)),A.showBoundingBox=!0;const C=new r.Y("my first camera",0,Math.PI/3,10,new s.P(0,0,0),g);C.setTarget(s.P.Zero()),C.attachControl(e,!0);const M=(0,i.$6)("ground",{width:6,height:6},g),N=new a.K("ground material",g);N.diffuseTexture=new c.x(u.Z,g),M.material=N,M.receiveShadows=!0;const v=new h.O("light",new s.P(0,-1,1),g);v.intensity=.5,v.position.y=10;const D=new m.u(512,v);D.useBlurExponentialShadowMap=!0,D.blurScale=2,D.setDarkness(.2);const T=new a.K("collisionMaterial",g);T.diffuseColor=new l.Color3(1,0,0);const L=new a.K("noCollisionMaterial",g);L.diffuseColor=new l.Color3(0,1,0);const V=P.getChildMeshes(),z=await g.createDefaultXRExperienceAsync({floorMeshes:[M]}),R=(z.baseExperience.sessionManager.session,x);let B=null,K=null,k=!1;return z.input.onControllerAddedObservable.add((t=>{"right"===t.inputSource.handedness&&t.onMotionControllerInitObservable.add((()=>{const e=t.motionController?.getComponent("xr-standard-trigger");e&&e.onButtonStateChangedObservable.add((t=>{t.value>.5?k=!0:(k=!1,B=null,K=null)}))}))})),g.onBeforeRenderObservable.add((()=>{const t=V;let e=1,n=0;if(k){const t=z.input.controllers.find((t=>"right"===t.inputSource.handedness));if(t&&t.grip&&t.grip.position&&t.grip.rotationQuaternion){const e=t.grip.position,n=t.grip.rotationQuaternion;if(e&&n&&B&&K){const t=s._f.Identity().multiply(n).multiply(K.conjugate()),o=e.subtract(B).divide(R.scaling);R.position.addInPlace(o.scaleInPlace(.01)),R.rotationQuaternion.multiplyInPlace(t)}B=e.clone(),K=n.clone()}}for(let o=0;o<V.length;o++){const r=b(t[o].absolutePosition,w,F);r<e&&-1!=r&&r<0&&(console.log("KOLLISSION"),e=r,n=o)}if(e>0)w.material=L;else{w.material=T;const e=t[n].absolutePosition,o=(x.absolutePosition,new s.P(S[n].x,S[n].y,S[n].z));let r=s.P.TransformNormal(o,x.getWorldMatrix());r=r.multiply(new s.P(-1,-1,-1)),function(t,e){const n=e.x-t.x,o=e.y-t.y,r=e.z-t.z;Math.sqrt(n*n+o*o+r*r)}(F.bbox.min,F.bbox.max);const i=function(t,e,n,o,r,s,i){const a=f(e,n,o,i);return new l.Vector3(i.x,i.y,i.z).multiply(new l.Vector3(a,a,a)).multiply(new l.Vector3(1,1,1))}(0,F.bbox.min,F.bbox.max,e,0,0,r);console.log("Offset: ",i),console.log("CurrentPoint: ",e);const a=function(t,e,n,o,r,s,i,a){const c=Math.pow(n.subtract(e).length(),2)/2,u=o.cross(i),h=5/(2*c)*f(e,n,o,i),m=u.multiply(new l.Vector3(h,h,h)),d=a.rotationQuaternion;return new l.Quaternion(m.x/2,m.y/2,m.z/2,0).multiply(d)}(0,F.bbox.min,F.bbox.max,e,0,0,r,x),c=x.absolutePosition.add(i);console.log("NewPosition: ",c);const u=x.rotationQuaternion.add(a);x.position=new s.P(c.x,c.y,c.z),x.rotationQuaternion=u}})),g}}}const w=new g},1552:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"9b31293ea96c8dfa518b45622da82a13.jpg"},4404:(t,e,n)=>{n.d(e,{a:()=>l});var o=n(4651),r=n(7959),s=n(3632),i=n(6409),a=n(5702);class l{constructor(){this.solidPattern=/solid (\S*)([\S\s]*?)endsolid[ ]*(\S*)/g,this.facetsPattern=/facet([\s\S]*?)endfacet/g,this.normalPattern=/normal[\s]+([-+]?[0-9]+\.?[0-9]*([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+/g,this.vertexPattern=/vertex[\s]+([-+]?[0-9]+\.?[0-9]*([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+/g,this.name="stl",this.extensions={".stl":{isBinary:!0}}}importMesh(t,e,n,r,i){let a;if("string"!=typeof n){if(this._isBinary(n)){const t=new s.Kj("stlmesh",e);return this._parseBinary(t,n),i&&i.push(t),!0}const t=new Uint8Array(n);let o="";for(let e=0;e<n.byteLength;e++)o+=String.fromCharCode(t[e]);n=o}for(;a=this.solidPattern.exec(n);){let n=a[1];const r=a[3];if(r&&n!=r)return o.w1.Error("Error in STL, solid name != endsolid name"),!1;if(t&&n)if(t instanceof Array){if(!t.indexOf(n))continue}else if(n!==t)continue;n=n||"stlmesh";const l=new s.Kj(n,e);this._parseASCII(l,a[2]),i&&i.push(l)}return!0}load(t,e,n){return this.importMesh(null,t,e,n,null)}loadAssetContainer(t,e,n){const o=new a.TJ(t);return t._blockEntityCollection=!0,this.importMesh(null,t,e,n,o.meshes),t._blockEntityCollection=!1,o}_isBinary(t){const e=new DataView(t);if(e.byteLength<=80)return!1;if(84+50*e.getUint32(80,!0)===e.byteLength)return!0;const n=[115,111,108,105,100];for(let t=0;t<5;t++)if(e.getUint8(t)!==n[t])return!0;return!1}_parseBinary(t,e){const n=new DataView(e),o=n.getUint32(80,!0);let s=0;const i=new Float32Array(3*o*3),a=new Float32Array(3*o*3),c=new Uint32Array(3*o);let u=0;for(let t=0;t<o;t++){const e=84+50*t,o=n.getFloat32(e,!0),r=n.getFloat32(e+4,!0),h=n.getFloat32(e+8,!0);for(let t=1;t<=3;t++){const c=e+12*t;i[s]=n.getFloat32(c,!0),a[s]=o,l.DO_NOT_ALTER_FILE_COORDINATES?(i[s+1]=n.getFloat32(c+4,!0),i[s+2]=n.getFloat32(c+8,!0),a[s+1]=r,a[s+2]=h):(i[s+2]=n.getFloat32(c+4,!0),i[s+1]=n.getFloat32(c+8,!0),a[s+2]=r,a[s+1]=h),s+=3}l.DO_NOT_ALTER_FILE_COORDINATES?(c[u]=u,c[u+1]=u+2,c[u+2]=u+1,u+=3):(c[u]=u++,c[u]=u++,c[u]=u++)}t.setVerticesData(r.o.PositionKind,i),t.setVerticesData(r.o.NormalKind,a),t.setIndices(c),t.computeWorldMatrix(!0)}_parseASCII(t,e){const n=[],o=[],s=[];let i,a=0;for(;i=this.facetsPattern.exec(e);){const t=i[1],e=this.normalPattern.exec(t);if(this.normalPattern.lastIndex=0,!e)continue;const r=[Number(e[1]),Number(e[5]),Number(e[3])];let c;for(;c=this.vertexPattern.exec(t);)l.DO_NOT_ALTER_FILE_COORDINATES?(n.push(Number(c[1]),Number(c[3]),Number(c[5])),o.push(r[0],r[2],r[1])):(n.push(Number(c[1]),Number(c[5]),Number(c[3])),o.push(r[0],r[1],r[2]));l.DO_NOT_ALTER_FILE_COORDINATES?(s.push(a,a+2,a+1),a+=3):s.push(a++,a++,a++),this.vertexPattern.lastIndex=0}this.facetsPattern.lastIndex=0,t.setVerticesData(r.o.PositionKind,n),t.setVerticesData(r.o.NormalKind,o),t.setIndices(s),t.computeWorldMatrix(!0)}}l.DO_NOT_ALTER_FILE_COORDINATES=!1,i.n&&i.n.RegisterPlugin(new l)}}]);
//# sourceMappingURL=426.babylonBundle.js.map