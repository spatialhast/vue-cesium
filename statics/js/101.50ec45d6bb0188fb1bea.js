(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{TSzH:function(t,s,e){t.exports=e("XMi9")},XMi9:function(t,s,e){"use strict";e.r(s);var a={data:function(){return{id:"This is a billboard",description:"Hello Vue Cesium",image:"https://zouyaoji.top/vue-cesium/favicon.png",position:{lng:108,lat:35,height:100},billboard:{}}},mounted:function(){this.$refs.entity.createPromise.then((function(t){t.Cesium;var s=t.viewer,e=t.cesiumObject;console.log(e),s.zoomTo(e)}))},methods:{ready:function(t){var s=t.Cesium,e=t.viewer;this.viewer=e,this.description=this.$refs.bubbleContainer.innerHTML,this.billboard=new s.BillboardGraphics({image:"https://zouyaoji.top/vue-cesium/favicon.png",show:!0,pixelOffset:new s.Cartesian2(0,-50),eyeOffset:new s.Cartesian3(0,0,0),horizontalOrigin:s.HorizontalOrigin.CENTER,verticalOrigin:s.VerticalOrigin.BOTTOM,scale:.5,color:s.Color.LIME,alignedAxis:s.Cartesian3.ZERO})},selectedEntityChanged:function(t){console.log(t),t?(this.frame=this.viewer.infoBox.frame,this.frame.contentWindow.addEventListener("click",this.frameClick)):this.frame&&this.frame.contentWindow.removeEventListener("click",this.frameClick)},frameClick:function(t){console.log("frame clicked"),"test"===t.target.id&&console.log("test clicked")},LEFT_CLICK:function(t){var s=this.viewer.scene.pick(t.position);console.log(s)},cameraClicked:function(t){console.log("cameraClicked",t)},closeClicked:function(t){console.log("closeClicked",t)}}},r=e("JFUb"),v=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("Entity")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("示例")]),t._v(" "),e("h3",[t._v("加载实体")]),t._v(" "),e("h4",[t._v("预览")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{ref:"viewer",on:{ready:t.ready,LEFT_CLICK:t.LEFT_CLICK,selectedEntityChanged:t.selectedEntityChanged,cameraClicked:t.cameraClicked,closeClicked:t.closeClicked}},[e("vc-entity",{ref:"entity",attrs:{position:t.position,billboard:t.billboard,description:t.description,id:t.id}})],1),t._v(" "),e("div",{ref:"bubbleContainer",attrs:{id:"bubbleContainer",hidden:""}},[e("button",{attrs:{id:"test"}},[t._v("Test")])])],1)]],2),t._v(" "),e("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),e("hr"),t._v(" "),t._m(3),t._v(" "),e("h2",[t._v("事件")]),t._v(" "),t._m(4),t._v(" "),e("hr")],1)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",{pre:!0},[t._v("vc-entity")]),t._v(" 组件用于加载 Cesium 实体。 作为 "),e("code",{pre:!0},[t._v("vc-viewer")]),t._v(" 或者 "),e("code",{pre:!0},[t._v("vc-datasource-xxx")]),t._v(" 子组件使用。 通过 "),e("code",{pre:!0},[t._v("vc-entity")]),t._v(" 可以加载多种可视化对象（graphics），如点、线、面、标签、广告牌等。可以直接指定 "),e("code",{pre:!0},[t._v("vc-entity")]),t._v(" 的各个 "),e("code",{pre:!0},[t._v("graphic")]),t._v(" 属性或者用 VueCesium 提供的 "),e("code",{pre:!0},[t._v("vc-graphics-xxx")]),t._v(" 组件作为 "),e("code",{pre:!0},[t._v("vc-entity")]),t._v(" 子组件指定 "),e("code",{pre:!0},[t._v("graphics")]),t._v(" 属性。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@LEFT_CLICK")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"LEFT_CLICK"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@selectedEntityChanged")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"selectedEntityChanged"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@cameraClicked")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"cameraClicked"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@closeClicked")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"closeClicked"')]),t._v("\n    >")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"entity"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":position")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"position"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":billboard")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"billboard"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":description")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"description"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":id")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"id"')]),t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-entity")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"bubbleContainer"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"bubbleContainer"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("hidden")]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"test"')]),t._v(">")]),t._v("Test"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("button")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("id")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'This is a billboard'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("description")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'Hello Vue Cesium'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("image")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),t._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("position")]),t._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lng")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("108")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("lat")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("35")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("height")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("100")]),t._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("billboard")]),t._v(": {}\n      }\n    },\n    mounted() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.entity.createPromise.then("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[t._v("("),e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("{ Cesium, viewer, cesiumObject }")]),t._v(") =>")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(cesiumObject)\n        viewer.zoomTo(cesiumObject)\n      })\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".viewer = viewer\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".description = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.bubbleContainer.innerHTML\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".billboard = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.BillboardGraphics({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("image")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default: undefined")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("pixelOffset")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.Cartesian2("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-50")]),t._v("), "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default: (0, 0)")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("eyeOffset")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.Cartesian3("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.0")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.0")]),t._v("), "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("horizontalOrigin")]),t._v(": Cesium.HorizontalOrigin.CENTER, "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("verticalOrigin")]),t._v(": Cesium.VerticalOrigin.BOTTOM, "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default: CENTER")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("scale")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.5")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default: 1.0")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("color")]),t._v(": Cesium.Color.LIME, "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default: WHITE")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// rotation: Cesium.Math.PI_OVER_FOUR, // default: 0.0")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("alignedAxis")]),t._v(": Cesium.Cartesian3.ZERO "),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// default")]),t._v("\n        })\n      },\n      selectedEntityChanged(entity) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(entity)\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (entity) {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".frame = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".viewer.infoBox.frame\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".frame.contentWindow.addEventListener("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'click'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".frameClick)\n        } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("else")]),t._v(" {\n          "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".frame && "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".frame.contentWindow.removeEventListener("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'click'")]),t._v(", "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".frameClick)\n        }\n      },\n      frameClick(event) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'frame clicked'")]),t._v(")\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("if")]),t._v(" (event.target.id === "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'test'")]),t._v(") {\n          "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'test clicked'")]),t._v(")\n        }\n      },\n      LEFT_CLICK(movement) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" feature = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".viewer.scene.pick(movement.position)\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(feature)\n      },\n      cameraClicked(e) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'cameraClicked'")]),t._v(", e)\n      },\n      closeClicked(e) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'closeClicked'")]),t._v(", e)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("属性名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 的唯一标识符。如果没有提供，则生成 GUID。")])]),t._v(" "),e("tr",[e("td",[t._v("name")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 名称，名称可不必唯一。")])]),t._v(" "),e("tr",[e("td",[t._v("availability")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的可用性参数。")])]),t._v(" "),e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 及其子项是否显示。")])]),t._v(" "),e("tr",[e("td",[t._v("description")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 的 HTML 描述信息。")])]),t._v(" "),e("tr",[e("td",[t._v("position")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 的位置。 "),e("strong",[t._v("结构：{ lng: number, lat: number, height: number }")])])]),t._v(" "),e("tr",[e("td",[t._v("orientation")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 的方向。")])]),t._v(" "),e("tr",[e("td",[t._v("viewFrom")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 的初始偏移量。")])]),t._v(" "),e("tr",[e("td",[t._v("parent")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的父实体。")])]),t._v(" "),e("tr",[e("td",[t._v("billboard")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的布告板。")])]),t._v(" "),e("tr",[e("td",[t._v("box")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的盒子对象。")])]),t._v(" "),e("tr",[e("td",[t._v("corridor")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的走廊对象。")])]),t._v(" "),e("tr",[e("td",[t._v("cylinder")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的圆柱对象。")])]),t._v(" "),e("tr",[e("td",[t._v("ellipse")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的椭圆对象。")])]),t._v(" "),e("tr",[e("td",[t._v("ellipsoid")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的椭球体对象。")])]),t._v(" "),e("tr",[e("td",[t._v("label")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的标签对象。")])]),t._v(" "),e("tr",[e("td",[t._v("model")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的模型对象。")])]),t._v(" "),e("tr",[e("td",[t._v("path")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的路径对象。")])]),t._v(" "),e("tr",[e("td",[t._v("plane")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的平面对象。")])]),t._v(" "),e("tr",[e("td",[t._v("point")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的点对象。")])]),t._v(" "),e("tr",[e("td",[t._v("polygon")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的多边形对象。")])]),t._v(" "),e("tr",[e("td",[t._v("polyline")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的折线对象。")])]),t._v(" "),e("tr",[e("td",[t._v("properties")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的属性。")])]),t._v(" "),e("tr",[e("td",[t._v("polylineVolume")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的多线段柱体对象。")])]),t._v(" "),e("tr",[e("td",[t._v("rectangle")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的矩形对象。")])]),t._v(" "),e("tr",[e("td",[t._v("wall")]),t._v(" "),e("td"),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定 entity 关联的墙对象。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("参考官方文档： "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/Entity.html"}},[this._v("Entity")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),t._v(" "),e("tr",[e("td",[t._v("definitionChanged")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("每当更改或修改属性或子属性时触发该事件。")])])])])}],!1,null,null,null);s.default=v.exports}}]);
//# sourceMappingURL=101.50ec45d6bb0188fb1bea.js.map