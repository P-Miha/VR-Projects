"use strict";(self.webpackChunkbabylonjs_typescript_webpack_template=self.webpackChunkbabylonjs_typescript_webpack_template||[]).push([[734],{3789:(t,e,o)=>{o.d(e,{O:()=>d});var i=o(3555),r=o(6786),n=o(972),s=o(2528),a=o(5046),h=o(6942);s.N.AddNodeConstructor("Light_Type_1",((t,e)=>()=>new d(t,n.P.Zero(),e)));class d extends h.O{get shadowFrustumSize(){return this._shadowFrustumSize}set shadowFrustumSize(t){this._shadowFrustumSize=t,this.forceProjectionMatrixCompute()}get shadowOrthoScale(){return this._shadowOrthoScale}set shadowOrthoScale(t){this._shadowOrthoScale=t,this.forceProjectionMatrixCompute()}get orthoLeft(){return this._orthoLeft}set orthoLeft(t){this._orthoLeft=t}get orthoRight(){return this._orthoRight}set orthoRight(t){this._orthoRight=t}get orthoTop(){return this._orthoTop}set orthoTop(t){this._orthoTop=t}get orthoBottom(){return this._orthoBottom}set orthoBottom(t){this._orthoBottom=t}constructor(t,e,o){super(t,o),this._shadowFrustumSize=0,this._shadowOrthoScale=.1,this.autoUpdateExtends=!0,this.autoCalcShadowZBounds=!1,this._orthoLeft=Number.MAX_VALUE,this._orthoRight=Number.MIN_VALUE,this._orthoTop=Number.MIN_VALUE,this._orthoBottom=Number.MAX_VALUE,this.position=e.scale(-1),this.direction=e}getClassName(){return"DirectionalLight"}getTypeID(){return a._.LIGHTTYPEID_DIRECTIONALLIGHT}_setDefaultShadowProjectionMatrix(t,e,o){this.shadowFrustumSize>0?this._setDefaultFixedFrustumShadowProjectionMatrix(t):this._setDefaultAutoExtendShadowProjectionMatrix(t,e,o)}_setDefaultFixedFrustumShadowProjectionMatrix(t){const e=this.getScene().activeCamera;e&&n.y3.OrthoLHToRef(this.shadowFrustumSize,this.shadowFrustumSize,void 0!==this.shadowMinZ?this.shadowMinZ:e.minZ,void 0!==this.shadowMaxZ?this.shadowMaxZ:e.maxZ,t,this.getScene().getEngine().isNDCHalfZRange)}_setDefaultAutoExtendShadowProjectionMatrix(t,e,o){const i=this.getScene().activeCamera;if(!i)return;if(this.autoUpdateExtends||this._orthoLeft===Number.MAX_VALUE){const t=n.P.Zero();this._orthoLeft=Number.MAX_VALUE,this._orthoRight=Number.MIN_VALUE,this._orthoTop=Number.MIN_VALUE,this._orthoBottom=Number.MAX_VALUE;let i=Number.MAX_VALUE,r=Number.MIN_VALUE;for(let s=0;s<o.length;s++){const a=o[s];if(!a)continue;const h=a.getBoundingInfo().boundingBox;for(let o=0;o<h.vectorsWorld.length;o++)n.P.TransformCoordinatesToRef(h.vectorsWorld[o],e,t),t.x<this._orthoLeft&&(this._orthoLeft=t.x),t.y<this._orthoBottom&&(this._orthoBottom=t.y),t.x>this._orthoRight&&(this._orthoRight=t.x),t.y>this._orthoTop&&(this._orthoTop=t.y),this.autoCalcShadowZBounds&&(t.z<i&&(i=t.z),t.z>r&&(r=t.z))}this.autoCalcShadowZBounds&&(this._shadowMinZ=i,this._shadowMaxZ=r)}const r=this._orthoRight-this._orthoLeft,s=this._orthoTop-this._orthoBottom,a=void 0!==this.shadowMinZ?this.shadowMinZ:i.minZ,h=void 0!==this.shadowMaxZ?this.shadowMaxZ:i.maxZ,d=this.getScene().getEngine().useReverseDepthBuffer;n.y3.OrthoOffCenterLHToRef(this._orthoLeft-r*this.shadowOrthoScale,this._orthoRight+r*this.shadowOrthoScale,this._orthoBottom-s*this.shadowOrthoScale,this._orthoTop+s*this.shadowOrthoScale,d?h:a,d?a:h,t,this.getScene().getEngine().isNDCHalfZRange)}_buildUniformLayout(){this._uniformBuffer.addUniform("vLightData",4),this._uniformBuffer.addUniform("vLightDiffuse",4),this._uniformBuffer.addUniform("vLightSpecular",4),this._uniformBuffer.addUniform("shadowsInfo",3),this._uniformBuffer.addUniform("depthValues",2),this._uniformBuffer.create()}transferToEffect(t,e){return this.computeTransformedInformation()?(this._uniformBuffer.updateFloat4("vLightData",this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z,1,e),this):(this._uniformBuffer.updateFloat4("vLightData",this.direction.x,this.direction.y,this.direction.z,1,e),this)}transferToNodeMaterialEffect(t,e){return this.computeTransformedInformation()?(t.setFloat3(e,this.transformedDirection.x,this.transformedDirection.y,this.transformedDirection.z),this):(t.setFloat3(e,this.direction.x,this.direction.y,this.direction.z),this)}getDepthMinZ(t){const e=this._scene.getEngine();return!e.useReverseDepthBuffer&&e.isNDCHalfZRange?0:1}getDepthMaxZ(t){const e=this._scene.getEngine();return e.useReverseDepthBuffer&&e.isNDCHalfZRange?0:1}prepareLightSpecificDefines(t,e){t["DIRLIGHT"+e]=!0}}(0,i.gn)([(0,r.qC)()],d.prototype,"shadowFrustumSize",null),(0,i.gn)([(0,r.qC)()],d.prototype,"shadowOrthoScale",null),(0,i.gn)([(0,r.qC)()],d.prototype,"autoUpdateExtends",void 0),(0,i.gn)([(0,r.qC)()],d.prototype,"autoCalcShadowZBounds",void 0),(0,i.gn)([(0,r.qC)("orthoLeft")],d.prototype,"_orthoLeft",void 0),(0,i.gn)([(0,r.qC)("orthoRight")],d.prototype,"_orthoRight",void 0),(0,i.gn)([(0,r.qC)("orthoTop")],d.prototype,"_orthoTop",void 0),(0,i.gn)([(0,r.qC)("orthoBottom")],d.prototype,"_orthoBottom",void 0)},6942:(t,e,o)=>{o.d(e,{O:()=>h});var i=o(3555),r=o(6786),n=o(972),s=o(5046),a=o(730);class h extends s._{constructor(){super(...arguments),this._needProjectionMatrixCompute=!0}_setPosition(t){this._position=t}get position(){return this._position}set position(t){this._setPosition(t)}_setDirection(t){this._direction=t}get direction(){return this._direction}set direction(t){this._setDirection(t)}get shadowMinZ(){return this._shadowMinZ}set shadowMinZ(t){this._shadowMinZ=t,this.forceProjectionMatrixCompute()}get shadowMaxZ(){return this._shadowMaxZ}set shadowMaxZ(t){this._shadowMaxZ=t,this.forceProjectionMatrixCompute()}computeTransformedInformation(){return!(!this.parent||!this.parent.getWorldMatrix||(this.transformedPosition||(this.transformedPosition=n.P.Zero()),n.P.TransformCoordinatesToRef(this.position,this.parent.getWorldMatrix(),this.transformedPosition),this.direction&&(this.transformedDirection||(this.transformedDirection=n.P.Zero()),n.P.TransformNormalToRef(this.direction,this.parent.getWorldMatrix(),this.transformedDirection)),0))}getDepthScale(){return 50}getShadowDirection(t){return this.transformedDirection?this.transformedDirection:this.direction}getAbsolutePosition(){return this.transformedPosition?this.transformedPosition:this.position}setDirectionToTarget(t){return this.direction=n.P.Normalize(t.subtract(this.position)),this.direction}getRotation(){this.direction.normalize();const t=n.P.Cross(this.direction,a.RD.Y),e=n.P.Cross(t,this.direction);return n.P.RotationFromAxis(t,e,this.direction)}needCube(){return!1}needProjectionMatrixCompute(){return this._needProjectionMatrixCompute}forceProjectionMatrixCompute(){this._needProjectionMatrixCompute=!0}_initCache(){super._initCache(),this._cache.position=n.P.Zero()}_isSynchronized(){return!!this._cache.position.equals(this.position)}computeWorldMatrix(t){return!t&&this.isSynchronized()?(this._currentRenderId=this.getScene().getRenderId(),this._worldMatrix):(this._updateCache(),this._cache.position.copyFrom(this.position),this._worldMatrix||(this._worldMatrix=n.y3.Identity()),n.y3.TranslationToRef(this.position.x,this.position.y,this.position.z,this._worldMatrix),this.parent&&this.parent.getWorldMatrix&&(this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(),this._worldMatrix),this._markSyncedWithParent()),this._worldMatrixDeterminantIsDirty=!0,this._worldMatrix)}getDepthMinZ(t){return void 0!==this.shadowMinZ?this.shadowMinZ:t.minZ}getDepthMaxZ(t){return void 0!==this.shadowMaxZ?this.shadowMaxZ:t.maxZ}setShadowProjectionMatrix(t,e,o){return this.customProjectionMatrixBuilder?this.customProjectionMatrixBuilder(e,o,t):this._setDefaultShadowProjectionMatrix(t,e,o),this}_syncParentEnabledState(){super._syncParentEnabledState(),this.parent&&this.parent.getWorldMatrix||(this.transformedPosition=null,this.transformedDirection=null)}}(0,i.gn)([(0,r.hd)()],h.prototype,"position",null),(0,i.gn)([(0,r.hd)()],h.prototype,"direction",null),(0,i.gn)([(0,r.qC)()],h.prototype,"shadowMinZ",null),(0,i.gn)([(0,r.qC)()],h.prototype,"shadowMaxZ",null)},4774:(t,e,o)=>{o.d(e,{i:()=>d});var i=o(3555),r=o(1932),n=o(4684),s=o(3127);s.v.IncludesShadersStore.kernelBlurVaryingDeclaration="varying vec2 sampleCoord{X};",o(2310);s.v.IncludesShadersStore.kernelBlurFragment="#ifdef DOF\nfactor=sampleCoC(sampleCoord{X}); \ncomputedWeight=KERNEL_WEIGHT{X}*factor;\nsumOfWeights+=computedWeight;\n#else\ncomputedWeight=KERNEL_WEIGHT{X};\n#endif\n#ifdef PACKEDFLOAT\nblend+=unpack(texture2D(textureSampler,sampleCoord{X}))*computedWeight;\n#else\nblend+=texture2D(textureSampler,sampleCoord{X})*computedWeight;\n#endif\n";s.v.IncludesShadersStore.kernelBlurFragment2="#ifdef DOF\nfactor=sampleCoC(sampleCenter+delta*KERNEL_DEP_OFFSET{X});\ncomputedWeight=KERNEL_DEP_WEIGHT{X}*factor;\nsumOfWeights+=computedWeight;\n#else\ncomputedWeight=KERNEL_DEP_WEIGHT{X};\n#endif\n#ifdef PACKEDFLOAT\nblend+=unpack(texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X}))*computedWeight;\n#else\nblend+=texture2D(textureSampler,sampleCenter+delta*KERNEL_DEP_OFFSET{X})*computedWeight;\n#endif\n";s.v.ShadersStore.kernelBlurPixelShader="uniform sampler2D textureSampler;\nuniform vec2 delta;\nvarying vec2 sampleCenter;\n#ifdef DOF\nuniform sampler2D circleOfConfusionSampler;\nfloat sampleCoC(in vec2 offset) {\nfloat coc=texture2D(circleOfConfusionSampler,offset).r;\nreturn coc; \n}\n#endif\n#include<kernelBlurVaryingDeclaration>[0..varyingCount]\n#ifdef PACKEDFLOAT\n#include<packingFunctions>\n#endif\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void)\n{\nfloat computedWeight=0.0;\n#ifdef PACKEDFLOAT\nfloat blend=0.;\n#else\nvec4 blend=vec4(0.);\n#endif\n#ifdef DOF\nfloat sumOfWeights=CENTER_WEIGHT; \nfloat factor=0.0;\n#ifdef PACKEDFLOAT\nblend+=unpack(texture2D(textureSampler,sampleCenter))*CENTER_WEIGHT;\n#else\nblend+=texture2D(textureSampler,sampleCenter)*CENTER_WEIGHT;\n#endif\n#endif\n#include<kernelBlurFragment>[0..varyingCount]\n#include<kernelBlurFragment2>[0..depCount]\n#ifdef PACKEDFLOAT\ngl_FragColor=pack(blend);\n#else\ngl_FragColor=blend;\n#endif\n#ifdef DOF\ngl_FragColor/=sumOfWeights;\n#endif\n}";s.v.IncludesShadersStore.kernelBlurVertex="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";s.v.ShadersStore.kernelBlurVertexShader="attribute vec2 position;\nuniform vec2 delta;\nvarying vec2 sampleCenter;\n#include<kernelBlurVaryingDeclaration>[0..varyingCount]\nconst vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nsampleCenter=(position*madd+madd);\n#include<kernelBlurVertex>[0..varyingCount]\ngl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";var a=o(9827),h=o(6786);class d extends r.D{set kernel(t){this._idealKernel!==t&&(t=Math.max(t,1),this._idealKernel=t,this._kernel=this._nearestBestKernel(t),this._blockCompilation||this._updateParameters())}get kernel(){return this._idealKernel}set packedFloat(t){this._packedFloat!==t&&(this._packedFloat=t,this._blockCompilation||this._updateParameters())}get packedFloat(){return this._packedFloat}getClassName(){return"BlurPostProcess"}constructor(t,e,o,i,r,s=n.x.BILINEAR_SAMPLINGMODE,a,h,d=0,l="",u=!1,c=5){super(t,"kernelBlur",["delta","direction"],["circleOfConfusionSampler"],i,r,s,a,h,null,d,"kernelBlur",{varyingCount:0,depCount:0},!0,c),this._blockCompilation=u,this._packedFloat=!1,this._staticDefines="",this._staticDefines=l,this.direction=e,this.onApplyObservable.add((t=>{this._outputTexture?t.setFloat2("delta",1/this._outputTexture.width*this.direction.x,1/this._outputTexture.height*this.direction.y):t.setFloat2("delta",1/this.width*this.direction.x,1/this.height*this.direction.y)})),this.kernel=o}updateEffect(t=null,e=null,o=null,i,r,n){this._updateParameters(r,n)}_updateParameters(t,e){const o=this._kernel,i=(o-1)/2;let r=[],n=[],s=0;for(let t=0;t<o;t++){const e=t/(o-1),a=this._gaussianWeight(2*e-1);r[t]=t-i,n[t]=a,s+=a}for(let t=0;t<n.length;t++)n[t]/=s;const a=[],h=[],d=[];for(let t=0;t<=i;t+=2){const e=Math.min(t+1,Math.floor(i));if(t===e)d.push({o:r[t],w:n[t]});else{const o=e===i,s=n[t]+n[e]*(o?.5:1),a=r[t]+1/(1+n[t]/n[e]);0===a?(d.push({o:r[t],w:n[t]}),d.push({o:r[t+1],w:n[t+1]})):(d.push({o:a,w:s}),d.push({o:-a,w:s}))}}for(let t=0;t<d.length;t++)h[t]=d[t].o,a[t]=d[t].w;r=h,n=a;const l=this.getEngine().getCaps().maxVaryingVectors,u=Math.max(l,0)-1;let c=Math.min(r.length,u),f="";f+=this._staticDefines,-1!=this._staticDefines.indexOf("DOF")&&(f+=`#define CENTER_WEIGHT ${this._glslFloat(n[c-1])}\r\n`,c--);for(let t=0;t<c;t++)f+=`#define KERNEL_OFFSET${t} ${this._glslFloat(r[t])}\r\n`,f+=`#define KERNEL_WEIGHT${t} ${this._glslFloat(n[t])}\r\n`;let p=0;for(let t=u;t<r.length;t++)f+=`#define KERNEL_DEP_OFFSET${p} ${this._glslFloat(r[t])}\r\n`,f+=`#define KERNEL_DEP_WEIGHT${p} ${this._glslFloat(n[t])}\r\n`,p++;this.packedFloat&&(f+="#define PACKEDFLOAT 1"),this._blockCompilation=!1,super.updateEffect(f,null,null,{varyingCount:c,depCount:p},t,e)}_nearestBestKernel(t){const e=Math.round(t);for(const t of[e,e-1,e+1,e-2,e+2])if(t%2!=0&&Math.floor(t/2)%2==0&&t>0)return Math.max(t,3);return Math.max(e,3)}_gaussianWeight(t){const e=1/3,o=-t*t/(2*e*e);return 1/(Math.sqrt(2*Math.PI)*e)*Math.exp(o)}_glslFloat(t,e=8){return t.toFixed(e).replace(/0+$/,"")}static _Parse(t,e,o,i){return h.p4.Parse((()=>new d(t.name,t.direction,t.kernel,t.options,e,t.renderTargetSamplingMode,o.getEngine(),t.reusable,t.textureType,void 0,!1)),t,o,i)}}(0,i.gn)([(0,h.qC)("kernel")],d.prototype,"_kernel",void 0),(0,i.gn)([(0,h.qC)("packedFloat")],d.prototype,"_packedFloat",void 0),(0,i.gn)([(0,h.QC)()],d.prototype,"direction",void 0),(0,a.H)("BABYLON.BlurPostProcess",d)},2310:(t,e,o)=>{o(3127).v.IncludesShadersStore.packingFunctions="vec4 pack(float depth)\n{\nconst vec4 bit_shift=vec4(255.0*255.0*255.0,255.0*255.0,255.0,1.0);\nconst vec4 bit_mask=vec4(0.0,1.0/255.0,1.0/255.0,1.0/255.0);\nvec4 res=fract(depth*bit_shift);\nres-=res.xxyz*bit_mask;\nreturn res;\n}\nfloat unpack(vec4 color)\n{\nconst vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);\nreturn dot(color,bit_shift);\n}"}}]);
//# sourceMappingURL=734.babylonBundle.js.map