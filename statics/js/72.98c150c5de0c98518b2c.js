(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{BSK5:function(e,s,t){"use strict";t.r(s);var a={data:function(){return{appearance:null,geometry:null,image:"https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png",rectangle:{west:102.5,south:29.5,east:106.5,north:33.5},interleave:!0,asynchronous:!1}},methods:{ready:function(e){this.cesiumInstance=e;var s=this.cesiumInstance,t=s.Cesium;s.viewer.camera.setView({destination:new t.Cartesian3(-1432246.8223880068,5761224.588247942,3297281.1889481535),orientation:{heading:6.20312220367255,pitch:-.9937536846355606,roll:.002443376981836387}}),this.appearance=new t.MaterialAppearance({material:new t.Material({fabric:{type:"Image",uniforms:{image:this.image}}})}),this.play()},play:function(){var e=["https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png","https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/2.png","https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/3.png","https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/4.png","https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/5.png"],s=0,t=this;setInterval((function(){t.appearance.material.uniforms.image=e[s],5===++s&&(s=0)}),500)}}},r=t("JFUb"),n=Object(r.a)(a,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",[t("h1",[e._v("GroundPrimitive")]),e._v(" "),e._m(0),e._v(" "),t("h2",[e._v("Example")]),e._v(" "),e._m(1),e._v(" "),t("h4",[e._v("Preview")]),e._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:e.ready}},[t("vc-provider-terrain-cesium"),e._v(" "),t("vc-primitive-ground",{attrs:{appearance:e.appearance,asynchronous:e.asynchronous,interleave:e.interleave}},[t("vc-instance-geometry",{attrs:{geometry:e.geometry}},[t("vc-geometry-rectangle",{attrs:{rectangle:e.rectangle}})],1)],1)],1)],1)]],2),e._v(" "),t("h4",[e._v("Code")]),e._v(" "),e._m(2),e._v(" "),t("h2",[e._v("Instance Properties")]),e._v(" "),e._m(3),e._v(" "),t("hr"),e._v(" "),e._m(4),e._v(" "),t("h2",[e._v("Events")]),e._v(" "),e._m(5),e._v(" "),t("hr")],1)}),[function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("The "),s("code",{pre:!0},[this._v("vc-primitive-ground")]),this._v(" component is used to load a ground primitive. It represents geometry draped over terrain or 3D Tiles in the Scene. A primitive combines geometry instances with an Appearance that describes the full shading, including Material and RenderState. Roughly, the geometry instance defines the structure and placement, and the appearance defines the visual characteristics. Decoupling geometry and appearance allows us to mix and match most of them and add a new geometry or appearance independently of each other. Valid geometries are CircleGeometry, CorridorGeometry, EllipseGeometry, PolygonGeometry, and RectangleGeometry.")])},function(){var e=this.$createElement,s=this._self._c||e;return s("h3",[this._v("Load GroundPrimitive with "),s("code",{pre:!0},[this._v("vc-primitive-ground")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("class")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"viewer"')]),e._v(">")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("@ready")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"ready"')]),e._v(">")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-provider-terrain-cesium")]),e._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-provider-terrain-cesium")]),e._v(">")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-ground")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":appearance")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"appearance"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":asynchronous")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"asynchronous"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":interleave")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"interleave"')]),e._v(">")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-instance-geometry")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":geometry")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"geometry"')]),e._v(">")]),e._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-geometry-rectangle")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v(":rectangle")]),e._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"rectangle"')]),e._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-geometry-rectangle")]),e._v(">")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-instance-geometry")]),e._v(">")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-primitive-ground")]),e._v(">")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("vc-viewer")]),e._v(">")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("div")]),e._v(">")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("template")]),e._v(">")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[e._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("default")]),e._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("return")]),e._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("appearance")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("null")]),e._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("geometry")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("null")]),e._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("image")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png'")]),e._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("rectangle")]),e._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("west")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("102.5")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("south")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("29.5")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("east")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("106.5")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("north")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("33.5")]),e._v(" },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("interleave")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("true")]),e._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("asynchronous")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[e._v("false")]),e._v("\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("methods")]),e._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".cesiumInstance = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" { Cesium, viewer } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".cesiumInstance\n        viewer.camera.setView({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("destination")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.Cartesian3("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("-1432246.8223880068")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("5761224.588247942")]),e._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("3297281.1889481535")]),e._v("),\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("orientation")]),e._v(": {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("heading")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("6.20312220367255")]),e._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("pitch")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("-0.9937536846355606")]),e._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("roll")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0.002443376981836387")]),e._v("\n          }\n        })\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".appearance = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.MaterialAppearance({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("material")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("new")]),e._v(" Cesium.Material({\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("fabric")]),e._v(": {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("type")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'Image'")]),e._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("uniforms")]),e._v(": {\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v("image")]),e._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".image\n              }\n            }\n          })\n        })\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v(".play()\n      },\n      play() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("let")]),e._v(" urls = [\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png'")]),e._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/2.png'")]),e._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/3.png'")]),e._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/4.png'")]),e._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/5.png'")]),e._v("\n        ]\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("let")]),e._v(" i = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("let")]),e._v(" _this = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("this")]),e._v("\n        setInterval("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("function")]),e._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}}),e._v(") ")]),e._v("{\n          _this.appearance.material.uniforms.image = urls[i]\n          i++\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("if")]),e._v(" (i === "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("5")]),e._v(") i = "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v("\n        }, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("500")]),e._v(")\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[e._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[e._v("script")]),e._v(">")]),e._v("\n")])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("table",[t("thead",[t("tr",[t("th",[e._v("name")]),e._v(" "),t("th",[e._v("type")]),e._v(" "),t("th",[e._v("default")]),e._v(" "),t("th",[e._v("description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("geometryInstances")]),e._v(" "),t("td",[e._v("Object|Array")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The geometry instances to render.")])]),e._v(" "),t("tr",[t("td",[e._v("appearance")]),e._v(" "),t("td",[e._v("Object")]),e._v(" "),t("td"),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" The appearance used to render the primitive. Defaults to a flat PerInstanceColorAppearance when GeometryInstances have a color attribute.")])]),e._v(" "),t("tr",[t("td",[e._v("show")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("true")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Determines if this primitive will be shown.")])]),e._v(" "),t("tr",[t("td",[e._v("vertexCacheOptimize")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("false")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" When true, geometry vertices are optimized for the pre and post-vertex-shader caches.")])]),e._v(" "),t("tr",[t("td",[e._v("interleave")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("false")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time.")])]),e._v(" "),t("tr",[t("td",[e._v("compressVertices")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("true")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" When true, the geometry vertices are compressed, which will save memory.")])]),e._v(" "),t("tr",[t("td",[e._v("releaseGeometryInstances")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("true")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" When true, the primitive does not keep a reference to the input geometryInstances to save memory.")])]),e._v(" "),t("tr",[t("td",[e._v("allowPicking")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("true")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.")])]),e._v(" "),t("tr",[t("td",[e._v("asynchronous")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("true")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" Determines if the primitive will be created asynchronously or block until ready.")])]),e._v(" "),t("tr",[t("td",[e._v("classificationType")]),e._v(" "),t("td",[e._v("Number")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("2")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v("Determines whether terrain, 3D Tiles or both will be classified. "),t("strong",[e._v("TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2")])])]),e._v(" "),t("tr",[t("td",[e._v("debugShowBoundingVolume")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("false")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. Determines if this primitive's commands' bounding spheres are shown.")])]),e._v(" "),t("tr",[t("td",[e._v("debugShowShadowVolume")]),e._v(" "),t("td",[e._v("Boolean")]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("false")])]),e._v(" "),t("td",[t("code",{pre:!0},[e._v("optional")]),e._v(" For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false.")])])])])},function(){var e=this.$createElement,s=this._self._c||e;return s("p",[this._v("Refer to the official document: "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GroundPrimitive.html"}},[this._v("GroundPrimitive")])])])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("table",[t("thead",[t("tr",[t("th",[e._v("name")]),e._v(" "),t("th",[e._v("parameter")]),e._v(" "),t("th",[e._v("description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("ready")]),e._v(" "),t("td",[e._v("{Cesium, viewer, cesiumObject}")]),e._v(" "),t("td",[e._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);s.default=n.exports},"r/cq":function(e,s,t){e.exports=t("BSK5")}}]);
//# sourceMappingURL=72.98c150c5de0c98518b2c.js.map