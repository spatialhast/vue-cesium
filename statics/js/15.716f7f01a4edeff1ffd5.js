(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"60rK":function(t,s,e){t.exports=e("LAho")},LAho:function(t,s,e){"use strict";e.r(s);var a={data:function(){return{id:"This is a billboard",description:"Hello Vue Cesium",image:"https://zouyaoji.top/vue-cesium/favicon.png",position:{lng:108,lat:35,height:100},billboard:{}}},mounted:function(){this.$refs.entity.createPromise.then((function(t){t.Cesium;var s=t.viewer,e=t.cesiumObject;console.log(e),s.zoomTo(e)}))},methods:{ready:function(t){var s=t.Cesium,e=t.viewer;this.viewer=e,this.description=this.$refs.bubbleContainer.innerHTML,this.billboard=new s.BillboardGraphics({image:"https://zouyaoji.top/vue-cesium/favicon.png",show:!0,pixelOffset:new s.Cartesian2(0,-50),eyeOffset:new s.Cartesian3(0,0,0),horizontalOrigin:s.HorizontalOrigin.CENTER,verticalOrigin:s.VerticalOrigin.BOTTOM,scale:.5,color:s.Color.LIME,alignedAxis:s.Cartesian3.ZERO})},selectedEntityChanged:function(t){console.log(t),t?(this.frame=this.viewer.infoBox.frame,this.frame.contentWindow.addEventListener("click",this.frameClick)):this.frame&&this.frame.contentWindow.removeEventListener("click",this.frameClick)},frameClick:function(t){console.log("frame clicked"),"test"===t.target.id&&console.log("test clicked")},LEFT_CLICK:function(t){var s=this.viewer.scene.pick(t.position);console.log(s)},cameraClicked:function(t){console.log("cameraClicked",t)},closeClicked:function(t){console.log("closeClicked",t)}}},r=e("JFUb"),n=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("Entity")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Example")]),t._v(" "),e("h3",[t._v("Load an entity with vc-entity component")]),t._v(" "),e("h4",[t._v("Preview")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{ref:"viewer",on:{ready:t.ready,LEFT_CLICK:t.LEFT_CLICK,selectedEntityChanged:t.selectedEntityChanged,cameraClicked:t.cameraClicked,closeClicked:t.closeClicked}},[e("vc-entity",{ref:"entity",attrs:{position:t.position,billboard:t.billboard,description:t.description,id:t.id}})],1),t._v(" "),e("div",{ref:"bubbleContainer",attrs:{id:"bubbleContainer",hidden:""}},[e("button",{attrs:{id:"test"}},[t._v("Test")])])],1)]],2),t._v(" "),e("h4",[t._v("Code")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("Instance Properties")]),t._v(" "),t._m(2),t._v(" "),e("hr"),t._v(" "),t._m(3),t._v(" "),e("h2",[t._v("Events")]),t._v(" "),t._m(4),t._v(" "),e("hr")],1)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("The "),e("code",{pre:!0},[t._v("vc-entity")]),t._v(" component is used to load Cesium entities. Used as a "),e("code",{pre:!0},[t._v("vc-viewer")]),t._v(" or "),e("code",{pre:!0},[t._v("vc-datasource-xxx")]),t._v(" subcomponent. With "),e("code",{pre:!0},[t._v("vc-entity")]),t._v(" you can load a variety of visualizations such as points, lines, polygons, labels, billboards, and more. You can specify the "),e("code",{pre:!0},[t._v("graphic")]),t._v(" attribute of "),e("code",{pre:!0},[t._v("vc-entity")]),t._v(" directly or the "),e("code",{pre:!0},[t._v("vc-graphics-xxx")]),t._v(" component provided by VueCesium as the "),e("code",{pre:!0},[t._v("graphics")]),t._v(" attribute of the "),e("code",{pre:!0},[t._v("vc-entity")]),t._v(" subcomponent.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@LEFT_CLICK")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"LEFT_CLICK"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@selectedEntityChanged")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"selectedEntityChanged"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@cameraClicked")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"cameraClicked"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@closeClicked")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"closeClicked"')]),t._v("\n    >")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"entity"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":position")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"position"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":billboard")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"billboard"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":description")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"description"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":id")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"id"')]),t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"bubbleContainer"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"bubbleContainer"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("hidden")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"test"')]),t._v(">")]),t._v("Test"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("button")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'This is a billboard'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("description")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Vue Cesium'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("image")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("position")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("108")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("35")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100")]),t._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("billboard")]),t._v(": {}\n      }\n    },\n    mounted() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.entity.createPromise.then("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("{ Cesium, viewer, cesiumObject }")]),t._v(") =>")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(cesiumObject)\n        viewer.zoomTo(cesiumObject)\n      })\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".viewer = viewer\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".description = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.bubbleContainer.innerHTML\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".billboard = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.BillboardGraphics({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("image")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default: undefined")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("pixelOffset")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.Cartesian2("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-50")]),t._v("), "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default: (0, 0)")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("eyeOffset")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.Cartesian3("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.0")]),t._v("), "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("horizontalOrigin")]),t._v(": Cesium.HorizontalOrigin.CENTER, "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("verticalOrigin")]),t._v(": Cesium.VerticalOrigin.BOTTOM, "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default: CENTER")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("scale")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.5")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default: 1.0")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": Cesium.Color.LIME, "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default: WHITE")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("alignedAxis")]),t._v(": Cesium.Cartesian3.ZERO "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default")]),t._v("\n        })\n      },\n      selectedEntityChanged(entity) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(entity)\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (entity) {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".frame = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".viewer.infoBox.frame\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".frame.contentWindow.addEventListener("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'click'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".frameClick)\n        } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".frame && "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".frame.contentWindow.removeEventListener("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'click'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".frameClick)\n        }\n      },\n      frameClick(event) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'frame clicked'")]),t._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (event.target.id === "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'test'")]),t._v(") {\n          "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'test clicked'")]),t._v(")\n        }\n      },\n      LEFT_CLICK(movement) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" feature = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".viewer.scene.pick(movement.position)\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(feature)\n      },\n      cameraClicked(e) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'cameraClicked'")]),t._v(", e)\n      },\n      closeClicked(e) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'closeClicked'")]),t._v(", e)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A unique identifier for this object. If none is provided, a GUID is generated.")])]),t._v(" "),e("tr",[e("td",[t._v("name")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A human readable name to display to users. It does not have to be unique.")])]),t._v(" "),e("tr",[e("td",[t._v("availability")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" The availability, if any, associated with this object.")])]),t._v(" "),e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A boolean value indicating if the entity and its children are displayed.")])]),t._v(" "),e("tr",[e("td",[t._v("description")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A string Property specifying an HTML description for this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("position")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the entity position. "),e("strong",[t._v("structure: { lng: number, lat: number, height: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("orientation")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the entity orientation.")])]),t._v(" "),e("tr",[e("td",[t._v("viewFrom")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A suggested initial offset for viewing this object.")])]),t._v(" "),e("tr",[e("td",[t._v("parent")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A parent entity to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("billboard")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A billboard to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("box")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A box to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("corridor")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A corridor to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("cylinder")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A cylinder to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("ellipse")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A ellipse to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("ellipsoid")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A ellipsoid to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("label")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A options.label to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("model")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A model to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("path")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A path to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("plane")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A plane to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("point")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A point to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("polygon")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A polygon to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("polyline")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A polyline to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("properties")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" Arbitrary properties to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("polylineVolume")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A polylineVolume to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("rectangle")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A rectangle to associate with this entity.")])]),t._v(" "),e("tr",[e("td",[t._v("wall")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" A wall to associate with this entity.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Refer to the official document: "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Entity.html"}},[this._v("Entity")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("parameter")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),t._v(" "),e("tr",[e("td",[t._v("definitionChanged")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Triggers whenever a property or sub-property is changed or modified.")])])])])}],!1,null,null,null);s.default=n.exports}}]);
//# sourceMappingURL=15.716f7f01a4edeff1ffd5.js.map