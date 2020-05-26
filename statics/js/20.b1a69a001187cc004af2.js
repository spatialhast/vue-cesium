(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Qe9M:function(s,t,e){s.exports=e("RYSs")},RYSs:function(s,t,e){"use strict";e.r(t);var r=e("eVuF"),a=e.n(r),n={data:function(){return{description:"Hello Vue Cesium",ellipse1:{},position1:{lng:111,lat:40,height:15e4},material1:"GREEN",ellipse2:{},position2:{lng:103,lat:40},material2:void 0,ellipse3:{},position3:{lng:95,lat:40,height:1e5},rotation3:0,material3:{}}},mounted:function(){a.a.all([this.$refs.entity1.createPromise,this.$refs.entity2.createPromise,this.$refs.entity3.createPromise]).then((function(s){s[0].viewer.zoomTo(s[0].viewer.entities)}))},methods:{ready:function(s){var t=s.Cesium;s.viewer;this.material2=t.Color.RED.withAlpha(.5),this.material3=t.Color.BLUE.withAlpha(.5),this.rotation3=t.Math.toRadians(45)}}},v=e("JFUb"),l=Object(v.a)(n,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("h1",[s._v("EllipseGraphics")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("Example")]),s._v(" "),s._m(1),s._v(" "),e("h4",[s._v("Preview")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:s.ready}},[e("vc-entity",{ref:"entity1",attrs:{position:s.position1,description:s.description,ellipse:s.ellipse1},on:{"update:ellipse":function(t){s.ellipse1=t}}},[e("vc-graphics-ellipse",{attrs:{semiMinorAxis:3e5,semiMajorAxis:3e5,height:2e5,material:s.material1,outline:!0}})],1),s._v(" "),e("vc-entity",{ref:"entity2",attrs:{position:s.position2,description:s.description,ellipse:s.ellipse2},on:{"update:ellipse":function(t){s.ellipse2=t}}},[e("vc-graphics-ellipse",{attrs:{semiMinorAxis:25e4,semiMajorAxis:4e5,material:s.material2}})],1),s._v(" "),e("vc-entity",{ref:"entity3",attrs:{position:s.position3,description:s.description,ellipse:s.ellipse3},on:{"update:ellipse":function(t){s.ellipse3=t}}},[e("vc-graphics-ellipse",{attrs:{semiMinorAxis:15e4,semiMajorAxis:3e5,extrudedHeight:2e5,rotation:s.rotation3,material:s.material3,outline:!0}})],1)],1)],1)]],2),s._v(" "),e("h4",[s._v("Code")]),s._v(" "),s._m(2),s._v(" "),e("h2",[s._v("Instance Properties")]),s._v(" "),s._m(3),s._v(" "),e("hr"),s._v(" "),s._m(4),s._v(" "),e("h2",[s._v("Events")]),s._v(" "),s._m(5),s._v(" "),e("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-graphics-ellipse")]),this._v(" component is used to load an ellipse, the ellipse conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume. Need to be used as a subcomponent of "),t("code",{pre:!0},[this._v("vc-entity")]),this._v(".")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[this._v("Load EllipseGraphics with "),t("code",{pre:!0},[this._v("vc-graphics-ellipse")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity1"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position1"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":ellipse.sync")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ellipse1"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-ellipse")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semiMinorAxis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"300000.0"')]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semiMajorAxis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"300000.0"')]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n        >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-ellipse")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity2"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position2"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":ellipse.sync")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ellipse2"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-ellipse")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semiMinorAxis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"250000.0"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semiMajorAxis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"400000.0"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-ellipse")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"entity3"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position3"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":ellipse.sync")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ellipse3"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-ellipse")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semiMinorAxis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"150000.0"')]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":semiMajorAxis")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"300000.0"')]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":extrudedHeight")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"200000.0"')]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rotation")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rotation3"')]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"material3"')]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v("\n        >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-graphics-ellipse")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-entity")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ellipse1")]),s._v(": {},\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position1")]),s._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("111.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("150000.0")]),s._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'GREEN'")]),s._v(",\n\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ellipse2")]),s._v(": {},\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position2")]),s._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("103.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("undefined")]),s._v(",\n\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ellipse3")]),s._v(": {},\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position3")]),s._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("95.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100000.0")]),s._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rotation3")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material3")]),s._v(": {}\n      }\n    },\n    mounted() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all(["),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity1.createPromise, "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity2.createPromise, "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.entity3.createPromise]).then(\n        "),e("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n          instances["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.zoomTo(instances["),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.entities)\n        }\n      )\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material2 = Cesium.Color.RED.withAlpha("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material3 = Cesium.Color.BLUE.withAlpha("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rotation3 = Cesium.Math.toRadians("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("45")]),s._v(")\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("type")]),s._v(" "),e("th",[s._v("default")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("show")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("true")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A boolean Property specifying the visibility of the ellipse.")])]),s._v(" "),e("tr",[e("td",[s._v("semiMajorAxis")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The numeric Property specifying the semi-major axis.")])]),s._v(" "),e("tr",[e("td",[s._v("semiMinorAxis")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The numeric Property specifying the semi-minor axis.")])]),s._v(" "),e("tr",[e("td",[s._v("height")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the altitude of the ellipse relative to the ellipsoid surface.")])]),s._v(" "),e("tr",[e("td",[s._v("heightReference")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying what the height is relative to. "),e("strong",[s._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),s._v(" "),e("tr",[e("td",[s._v("extrudedHeight")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the altitude of the ellipse's extruded face relative to the ellipsoid surface.")])]),s._v(" "),e("tr",[e("td",[s._v("extrudedHeightReference")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying what the extrudedHeight is relative to. "),e("strong",[s._v("NONE: 0, CLAMP_TO_GROUND: 1, RELATIVE_TO_GROUND: 2")])])]),s._v(" "),e("tr",[e("td",[s._v("rotation")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A numeric property specifying the rotation of the ellipse counter-clockwise from north.")])]),s._v(" "),e("tr",[e("td",[s._v("stRotation")]),s._v(" "),e("td",[s._v("Number|Object")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A numeric property specifying the rotation of the ellipse texture counter-clockwise from north.")])]),s._v(" "),e("tr",[e("td",[s._v("granularity")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the angular distance between points on the ellipse.")])]),s._v(" "),e("tr",[e("td",[s._v("fill")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("true")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A boolean Property specifying whether the ellipse is filled with the provided material.")])]),s._v(" "),e("tr",[e("td",[s._v("material")]),s._v(" "),e("td",[s._v("Object|String|Array")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("'white'")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying the material used to fill the ellipse.")])]),s._v(" "),e("tr",[e("td",[s._v("outline")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("false")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A boolean Property specifying whether the ellipse is outlined.")])]),s._v(" "),e("tr",[e("td",[s._v("outlineColor")]),s._v(" "),e("td",[s._v("Object|String|Array")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("'black'")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying the Color of the outline.")])]),s._v(" "),e("tr",[e("td",[s._v("outlineWidth")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("1.0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the width of the outline.")])]),s._v(" "),e("tr",[e("td",[s._v("numberOfVerticalLines")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("16")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A numeric Property specifying the number of vertical lines to draw along the perimeter for the outline.")])]),s._v(" "),e("tr",[e("td",[s._v("shadows")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("0")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" An enum Property specifying whether the ellipse casts or receives shadows from each light source. "),e("strong",[s._v("DISABLED: 0, ENABLED: 1, CAST_ONLY: 2, RECEIVE_ONLY: 3, NUMBER_OF_SHADOW_MODES: 4, RECEIVE_ONLY: 3")])])]),s._v(" "),e("tr",[e("td",[s._v("distanceDisplayCondition")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A Property specifying at what distance from the camera that this ellipse will be displayed. "),e("strong",[s._v("structure: { near: number, far: number }")])])]),s._v(" "),e("tr",[e("td",[s._v("classificationType")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("2")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" An enum Property specifying whether this ellipse will classify terrain, 3D Tiles, or both when on the ground. "),e("strong",[s._v("TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2, NUMBER_OF_CLASSIFICATION_TYPES: 3")])])]),s._v(" "),e("tr",[e("td",[s._v("zIndex")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" A property specifying the zIndex of the Ellipse. Used for ordering ground geometry. Only has an effect if the ellipse is constant and neither height or exturdedHeight are specified.")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/EllipseGraphics.html"}},[this._v("EllipseGraphics")])])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("parameter")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ready")]),s._v(" "),e("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),e("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),s._v(" "),e("tr",[e("td",[s._v("definitionChanged")]),s._v(" "),e("td"),s._v(" "),e("td",[s._v("Triggers whenever a property or sub-property is changed or modified.")])])])])}],!1,null,null,null);t.default=l.exports}}]);
//# sourceMappingURL=20.b1a69a001187cc004af2.js.map