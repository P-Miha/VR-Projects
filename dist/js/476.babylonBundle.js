"use strict";(self.webpackChunkbabylonjs_typescript_webpack_template=self.webpackChunkbabylonjs_typescript_webpack_template||[]).push([[476],{2489:(e,t,o)=>{o.d(t,{p:()=>s});const s=(0,o(9371).Z)()},7457:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var s=o(4147),n=o(3579),a=o(972),i=o(2758),r=o(307),c=(o(8522),o(2319),o(3242),o(2489)),l=o(3239),h=o(8830),d=o(1503),w=o(766),p=o(388),u=o(2110);const b=new class{constructor(){this.preTasks=[c.p],this.createScene=async(e,t)=>{const b=new s.x(e);Promise.all([Promise.resolve().then(o.bind(o,1568)),Promise.all([o.e(596),o.e(329)]).then(o.t.bind(o,3596,23))]).then((e=>{console.log(e),b.debugLayer.show({handleResize:!0,overlay:!0,globalRoot:document.getElementById("#root")||void 0})}));const m=new n.Y("my first camera",0,Math.PI/3,10,new a.P(0,0,0),b);m.setTarget(a.P.Zero()),m.attachControl(t,!0),new i.e("light",new a.P(0,1,0),b).intensity=.7;const P=(0,r.$6)("ground",{width:10,height:10},b),g=new w.a(!0,await c.p);b.enablePhysics(null,g),new p.Sound("buzzer","sounds/Buzzer.wav",b).play();const y=new l.y2(new a.P(0,0,0),a._f.Identity(),new a.P(10,.1,10),b),f=new h.Q(P,d.c4.STATIC,!1,b);y.material={friction:.2,restitution:.8},f.shape=y,f.setMassProperties({mass:0});const C=[],B=(0,p.CreateIcoSphere)("icoSphere");B.position=new a.P(0,2,0),B.showBoundingBox=!0,C.push(B);const M=(0,p.CreateTorus)("torusMesh");M.position=new a.P(0,2,3),M.showBoundingBox=!0,C.push(M);const k=(0,p.CreateBox)("stick",{width:.25,height:2,depth:.25},b);k.position=new a.P(0,2,-3),k.showBoundingBox=!0,C.push(k);const x=(0,p.CreateBox)("stickPhysic",{width:.25,height:2,depth:.25},b);x.position=new a.P(0,2,-6),x.showBoundingBox=!0;const I=new h.Q(x,d.c4.DYNAMIC,!1,b);I.setMassProperties({mass:0}),I.shape=new l.y2(x.absolutePosition,x.absoluteRotationQuaternion,new a.P(.25,2,.25),b);const S=(await p.SceneLoader.ImportMeshAsync("","",u.Z,b,void 0)).meshes[1];S.scaling=new a.P(.02,.02,.02);const v=new l.A1(S,b),_=new h.Q(S,d.c4.DYNAMIC,!1,b);_.shape=v,_.setMassProperties({mass:0}),g.getBoundingBox(v);const A=new p.StandardMaterial("materialCollision",b);A.diffuseColor=p.Color3.Red();const R=new p.StandardMaterial("materialNoCollision",b);R.diffuseColor=p.Color3.Green(),b.onBeforeRenderObservable.add((()=>{!function(){const e=[];for(let t=0;t<C.length;t++)C.forEach((o=>{C[t]!=o&&C[t].intersectsMesh(o,!0)?(C[t].material=A,o.material=A,console.log(C[t].name,o.name),e.push(C[t],o)):e.includes(C[t])||(C[t].material=R)}))}()}));const z={floorMeshes:[P]};return await b.createDefaultXRExperienceAsync(z),b}}}},2110:(e,t,o)=>{o.d(t,{Z:()=>s});const s=o.p+"87c16888db5ebec0fb7b6c3bb705d897.glb"}}]);
//# sourceMappingURL=476.babylonBundle.js.map