(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"3Yzh":function(s,e,t){"use strict";t.r(e);var a=t("JFUb"),r=Object(a.a)({data:function(){return{appearance:{},geometryInstances:{},positions:[{lng:100.1340164450331,lat:31.05494287836128},{lng:108.08821010582645,lat:31.05494287836128}]}},mounted:function(){this.$refs.polylineGround.createPromise.then((function(s){var e=s.Cesium,t=s.viewer,a=s.cesiumObject,r=e.BoundingSphere.fromPoints(a._positions);t.scene.camera.flyToBoundingSphere(r)}))},methods:{ready:function(s){var e=s.Cesium;s.viewer;this.appearance=new e.PolylineMaterialAppearance}}},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("section",[t("h1",[s._v("GroundPolylineGeometry")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Example")]),s._v(" "),s._m(1),s._v(" "),t("h4",[s._v("preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[t("vc-primitive-polyline-ground",{attrs:{appearance:s.appearance}},[t("vc-instance-geometry",[t("vc-geometry-polyline-ground",{ref:"polylineGround",attrs:{positions:s.positions,width:2}})],1)],1),s._v(" "),t("vc-provider-terrain-cesium"),s._v(" "),t("vc-layer-imagery",[t("vc-provider-imagery-mapbox",{attrs:{mapId:"mapbox.streets"}})],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(2),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(5),s._v(" "),t("hr")],1)}),[function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("The "),e("code",{pre:!0},[this._v("vc-geometry-polyline-ground")]),this._v(" component is used to load a polyline on terrain or 3D Tiles. Only to be used with GroundPolylinePrimitive. Need to be used as a subcomponent of "),e("code",{pre:!0},[this._v("vc-instance-geometry")]),this._v(". Only can be mounted to "),e("code",{pre:!0},[this._v("vc-primitive-polyline-ground")]),this._v(".")])},function(){var s=this.$createElement,e=this._self._c||s;return e("h3",[this._v("Load GroundPolylineGeometry with "),e("code",{pre:!0},[this._v("vc-geometry-polyline-ground")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-polyline-ground")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polyline-ground")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polylineGround"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":positions")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"positions"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":width")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"2"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polyline-ground")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-polyline-ground")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-mapbox")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapId")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"mapbox.streets"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-mapbox")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometryInstances")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("positions")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100.1340164450331")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.05494287836128")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.08821010582645")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.05494287836128")]),s._v(" }\n        ]\n      }\n    },\n    mounted() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.polylineGround.createPromise.then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ Cesium, viewer, cesiumObject }")]),s._v(") =>")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = Cesium.BoundingSphere.fromPoints(cesiumObject._positions)\n        viewer.scene.camera.flyToBoundingSphere(boundingSphere)\n      })\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready({ Cesium, viewer }) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.PolylineMaterialAppearance()\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("type")]),s._v(" "),t("th",[s._v("default")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("positions")]),s._v(" "),t("td",[s._v("Array")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("required")]),s._v(" An array of Cartesian3 defining the polyline's points. Heights above the ellipsoid will be ignored. "),t("strong",[s._v("Structure: [{ lng: number, lat: number, height: number },...,{ lng: number, lat: number, height: number }]")])])]),s._v(" "),t("tr",[t("td",[s._v("width")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("1.0")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The screen space width in pixels.")])]),s._v(" "),t("tr",[t("td",[s._v("granularity")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The distance interval in meters used for interpolating options.points. Defaults to 9999.0 meters. Zero indicates no interpolation.")])]),s._v(" "),t("tr",[t("td",[s._v("loop")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" Whether during geometry creation a line segment will be added between the last and first line positions to make this Polyline a loop.")])]),s._v(" "),t("tr",[t("td",[s._v("arcType")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("1")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The type of line the polyline segments must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB. "),t("strong",[s._v("NONE: 0, GEODESIC: 1, RHUMB: 2")])])])])])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("Refer to the official document: "),e("strong",[e("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylineGeometry.html"}},[this._v("GroundPolylineGeometry")])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),t("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);e.default=r.exports},vD6O:function(s,e,t){s.exports=t("3Yzh")}}]);
//# sourceMappingURL=42.85269ebc889bcdb6277f.js.map