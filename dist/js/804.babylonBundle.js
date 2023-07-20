"use strict";(self.webpackChunkbabylonjs_typescript_webpack_template=self.webpackChunkbabylonjs_typescript_webpack_template||[]).push([[804],{2489:(t,e,r)=>{r.d(e,{p:()=>i});const i=(0,r(9371).Z)()},804:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});var i=r(4147),n=r(3579),o=r(972),s=r(2758),a=r(6765),u=r(307),f=(r(8522),r(3242),r(2489)),h=r(3239),c=r(8830),d=r(1503),p=r(766);const l=new class{constructor(){this.preTasks=[f.p],this.createScene=async(t,e)=>{const r=new i.x(t),l=new n.Y("my first camera",0,Math.PI/3,10,new o.P(0,0,0),r);l.setTarget(o.P.Zero()),l.attachControl(e,!0),new s.e("light",new o.P(0,1,0),r).intensity=.7;const m=(0,a.Qk)("sphere",{diameter:2,segments:32},r);m.position.y=4;const w=(0,u.$6)("ground",{width:10,height:10},r);r.enablePhysics(null,new p.a(!0,await f.p));const _=new h.V_(new o.P(0,0,0),1,r),g=new c.Q(m,d.c4.DYNAMIC,!1,r);_.material={friction:.2,restitution:.6},g.shape=_,g.setMassProperties({mass:1});const y=new h.y2(new o.P(0,0,0),o._f.Identity(),new o.P(10,.1,10),r),P=new c.Q(w,d.c4.STATIC,!1,r);return y.material={friction:.2,restitution:.8},P.shape=y,P.setMassProperties({mass:0}),r}}}},2758:(t,e,r)=>{r.d(e,{e:()=>f});var i=r(3555),n=r(6786),o=r(972),s=r(9859),a=r(2528),u=r(5046);a.N.AddNodeConstructor("Light_Type_3",((t,e)=>()=>new f(t,o.P.Zero(),e)));class f extends u._{constructor(t,e,r){super(t,r),this.groundColor=new s.Wo(0,0,0),this.direction=e||o.P.Up()}_buildUniformLayout(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("vLightGround",3),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()}getClassName(){return"HemisphericLight"}setDirectionToTarget(t){return this.direction=o.P.Normalize(t.subtract(o.P.Zero())),this.direction}getShadowGenerator(){return null}transferToEffect(t,e){const r=o.P.Normalize(this.direction);return this._uniformBuffer.updateFloat4("vLightData",r.x,r.y,r.z,0,e),this._uniformBuffer.updateColor3("vLightGround",this.groundColor.scale(this.intensity),e),this}transferToNodeMaterialEffect(t,e){const r=o.P.Normalize(this.direction);return t.setFloat3(e,r.x,r.y,r.z),this}computeWorldMatrix(){return this._worldMatrix||(this._worldMatrix=o.y3.Identity()),this._worldMatrix}getTypeID(){return u._.LIGHTTYPEID_HEMISPHERICLIGHT}prepareLightSpecificDefines(t,e){t["HEMILIGHT"+e]=!0}}(0,i.gn)([(0,n.n9)()],f.prototype,"groundColor",void 0),(0,i.gn)([(0,n.hd)()],f.prototype,"direction",void 0)}}]);
//# sourceMappingURL=804.babylonBundle.js.map