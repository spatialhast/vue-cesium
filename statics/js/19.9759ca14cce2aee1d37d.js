(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{xkSk:function(t,s,e){"use strict";e.r(s);var r=e("eVuF"),a=e.n(r),n={data:function(){return{description:"Hello Vue Cesium",cylinder1:{},position1:{lng:105,lat:40,height:2e5},outlineColor1:"DARK_GREEN",material1:{},cylinder2:{},position2:{lng:110,lat:40,height:2e5},material2:"RED"}},mounted:function(){a.a.all([this.$refs.entity1.createPromise,this.$refs.entity2.createPromise]).then((function(t){t[0].viewer.zoomTo(t[0].viewer.entities)}))},methods:{ready:function(t){var s=t.Cesium;t.viewer;this.material1=s.Color.GREEN.withAlpha(.5)},subReady:function(t){t.Cesium;var s=t.viewer;s.zoomTo(s.entities)}}},v=e("JFUb"),_=Object(v.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("CylinderGraphics")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Example")]),t._v(" "),e("h3",[t._v("Load CylinderGraphics with vc-graphics-cylinder")]),t._v(" "),e("h4",[t._v("Preview")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:t.ready}},[e("vc-entity",{ref:"entity1",attrs:{position:t.position1,description:t.description,cylinder:t.cylinder1},on:{"update:cylinder":function(s){t.cylinder1=s}}},[e("vc-graphics-cylinder",{attrs:{length:4e5,topRadius:2e5,bottomRadius:2e5,material:t.material1,outline:!0,outlineColor:t.outlineColor1}})],1),t._v(" "),e("vc-entity",{ref:"entity2",attrs:{position:t.position2,description:t.description,cylinder:t.cylinder2},on:{"update:cylinder":function(s){t.cylinder2=s}}},[e("vc-graphics-cylinder",{attrs:{length:4e5,topRadius:0,bottomRadius:2e5,material:t.material2}})],1)],1)],1)]],2),t._v(" "),e("h4",[t._v("Code")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("Instance Properties")]),t._v(" "),t._m(2),t._v(" "),e("hr"),t._v(" "),t._m(3),t._v(" "),e("h2",[t._v("Events")]),t._v(" "),t._m(4),t._v(" "),e("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The vc-graphics-cylinder"),s("code",{pre:!0},[this._v("component is used to load cylinder, cone, or truncated cone. Need to be used as a subcomponent of vc-entity")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"entity1"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":position")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"position1"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":description")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"description"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":cylinder.sync")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"cylinder1"')]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-cylinder")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":length")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"400000.0"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":topRadius")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"200000.0"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":bottomRadius")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"200000.0"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":material")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"material1"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":outline")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"true"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":outlineColor")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"outlineColor1"')]),t._v("\n        >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-cylinder")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"entity2"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":position")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"position2"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":description")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"description"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":cylinder.sync")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"cylinder2"')]),t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-cylinder")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":length")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"400000.0"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":topRadius")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"0.0"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":bottomRadius")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"200000.0"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":material")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"material2"')]),t._v("\n        >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-graphics-cylinder")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("description")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Vue Cesium'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cylinder1")]),t._v(": {},\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("position1")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("105.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("40.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("200000.0")]),t._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("outlineColor1")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'DARK_GREEN'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("material1")]),t._v(": {},\n\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("cylinder2")]),t._v(": {},\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("position2")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("110.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("40.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("200000.0")]),t._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("material2")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'RED'")]),t._v("\n      }\n    },\n    mounted() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Promise")]),t._v(".all(["),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.entity1.createPromise, "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.entity2.createPromise]).then("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("instances")]),t._v(") =>")]),t._v(" {\n        instances["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("].viewer.zoomTo(instances["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v("].viewer.entities)\n      })\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".material1 = Cesium.Color.GREEN.withAlpha("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.5")]),t._v(")\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying the visibility of the cylinder.")])]),t._v(" "),e("tr",[e("td",[t._v("length")]),t._v(" "),e("td",[t._v("Array")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the length of the cylinder.")])]),t._v(" "),e("tr",[e("td",[t._v("topRadius")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the radius of the top of the cylinder.")])]),t._v(" "),e("tr",[e("td",[t._v("bottomRadius")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the radius of the bottom of the cylinder.")])]),t._v(" "),e("tr",[e("td",[t._v("heightReference")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying what the height from the entity position is relative to. "),e("strong",[t._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),t._v(" "),e("tr",[e("td",[t._v("fill")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying whether the cylinder is filled with the provided material.")])]),t._v(" "),e("tr",[e("td",[t._v("material")]),t._v(" "),e("td",[t._v("Object|String|Array")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("'WHITE'")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the material used to fill the cylinder.")])]),t._v(" "),e("tr",[e("td",[t._v("outline")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("false")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A boolean Property specifying whether the cylinder is outlined.")])]),t._v(" "),e("tr",[e("td",[t._v("outlineColor")]),t._v(" "),e("td",[t._v("Object|String|Array")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("'BLACK'")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the Color of the outline.")])]),t._v(" "),e("tr",[e("td",[t._v("outlineWidth")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("1.0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the width of the outline.")])]),t._v(" "),e("tr",[e("td",[t._v("numberOfVerticalLines")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("16")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A numeric Property specifying the number of vertical lines to draw along the perimeter for the outline.")])]),t._v(" "),e("tr",[e("td",[t._v("slices")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("128")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The number of edges around the perimeter of the cylinder.")])]),t._v(" "),e("tr",[e("td",[t._v("shadows")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("0")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" An enum Property specifying whether the cylinder casts or receives shadows from each light source. "),e("strong",[t._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])]),t._v(" "),e("tr",[e("td",[t._v("distanceDisplayCondition")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying at what distance from the camera that this cylinder will be displayed. "),e("strong",[t._v("structure: { near: number, far: number }")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Refer to the official document: "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CylinderGraphics.html"}},[this._v("CylinderGraphics")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("parameter")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),t._v(" "),e("tr",[e("td",[t._v("definitionChanged")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Triggers whenever a property or sub-property is changed or modified.")])])])])}],!1,null,null,null);s.default=_.exports},zakd:function(t,s,e){t.exports=e("xkSk")}}]);
//# sourceMappingURL=19.9759ca14cce2aee1d37d.js.map