(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{"0y7h":function(s,t,a){"use strict";a.r(t);var e={data:function(){return{modelUrl:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",distanceMeasuring:!1,areaMeasuring:!1,heightMeasuring:!1,clampToGround:!1}},methods:{ready:function(s){s.Cesium;var t=s.viewer;t.scene.debugShowFramesPerSecond=!0,this.cesiumInstance=s,t.scene.globe.depthTestAgainstTerrain=!0},toggle:function(s){this.$refs[s].measuring=!this.$refs[s].measuring},clear:function(){this.$refs.measureDistance.clear(),this.$refs.measureArea.clear(),this.$refs.measureHeight.clear()},activeEvt:function(s){this[s.type]=s.isActive},measureEvt:function(s){console.log(s)},movingEvt:function(s){console.log(s)},readyPromise:function(s){this.cesiumInstance.viewer.zoomTo(s,new Cesium.HeadingPitchRange(0,-.5,2*s.boundingSphere.radius))}}},v=a("JFUb"),r=Object(v.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("量算工具")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("测量距离、面积、高度")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{attrs:{scene3DOnly:""},on:{ready:s.ready}},[a("vc-measure-distance",{ref:"measureDistance",attrs:{clampToGround:s.clampToGround},on:{activeEvt:s.activeEvt,measureEvt:s.measureEvt,movingEvt:s.movingEvt}}),s._v(" "),a("vc-measure-area",{ref:"measureArea",attrs:{clampToGround:s.clampToGround},on:{activeEvt:s.activeEvt,measureEvt:s.measureEvt,movingEvt:s.movingEvt}}),s._v(" "),a("vc-measure-height",{ref:"measureHeight",on:{activeEvt:s.activeEvt,measureEvt:s.measureEvt,movingEvt:s.movingEvt}}),s._v(" "),a("vc-primitive-tileset",{attrs:{url:s.modelUrl},on:{readyPromise:s.readyPromise}})],1),s._v(" "),a("div",{staticClass:"demo-tool"},[a("md-button",{staticClass:"md-raised md-accent",on:{click:function(t){return s.toggle("measureDistance")}}},[s._v(s._s(s.distanceMeasuring?"停止":"距离"))]),s._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:function(t){return s.toggle("measureArea")}}},[s._v(s._s(s.areaMeasuring?"停止":"面积"))]),s._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:function(t){return s.toggle("measureHeight")}}},[s._v(s._s(s.heightMeasuring?"停止":"高度"))]),s._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:function(t){s.clampToGround=!s.clampToGround}}},[s._v("贴地")]),s._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:s.clear}},[s._v("清除")])],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),a("h3",[s._v("vc-measure-distance")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),a("h3",[s._v("vc-measure-area")]),s._v(" "),s._m(3),s._v(" "),a("hr"),s._v(" "),a("h3",[s._v("vc-measure-height")]),s._v(" "),s._m(4),s._v(" "),a("hr"),s._v(" "),a("h3",[s._v("标签文字属性")]),s._v(" "),s._m(5),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(6),s._v(" "),a("h2",[s._v("方法")]),s._v(" "),s._m(7)],1)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("code",{pre:!0},[s._v("vc-measure-distance")]),s._v(" 组件用于距离量算。")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("vc-measure-area")]),s._v(" 组件用于量算面积")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("vc-measure-height")]),s._v(" 组件用于量算高程。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scene3DOnly")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-measure-distance")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":clampToGround")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clampToGround"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"measureDistance"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@activeEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"activeEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@measureEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"measureEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@movingEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"movingEvt"')]),s._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-measure-distance")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-measure-area")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"measureArea"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@activeEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"activeEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@measureEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"measureEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@movingEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"movingEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":clampToGround")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clampToGround"')]),s._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-measure-area")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-measure-height")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"measureHeight"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@activeEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"activeEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@measureEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"measureEvt"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@movingEvt")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"movingEvt"')]),s._v("\n      >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-measure-height")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-tileset")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelUrl"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@readyPromise")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"readyPromise"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-tileset")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"toggle('measureDistance')\"")]),s._v("\n        >")]),s._v("{{ distanceMeasuring ? '停止' : '距离' }}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v("\n      >")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"toggle('measureArea')\"")]),s._v(">")]),s._v("{{ areaMeasuring ? '停止' : '面积' }}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("\"toggle('measureHeight')\"")]),s._v(">")]),s._v("{{ heightMeasuring ? '停止' : '高度' }}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clampToGround=!clampToGround"')]),s._v(">")]),s._v("贴地"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"md-raised md-accent"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"clear"')]),s._v(">")]),s._v("清除"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-button")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelUrl")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("distanceMeasuring")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("areaMeasuring")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("heightMeasuring")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clampToGround")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" scene = viewer.scene\n        scene.debugShowFramesPerSecond = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      },\n      toggle(type) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs[type].measuring = !"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs[type].measuring\n      },\n      clear() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.measureDistance.clear()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.measureArea.clear()\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.measureHeight.clear()\n      },\n      activeEvt(_) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v("[_.type] = _.isActive\n      },\n      measureEvt(result) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(result)\n      },\n      movingEvt(position) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(position)\n      },\n      readyPromise(tileset) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { viewer } = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.zoomTo(tileset, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.HeadingPitchRange("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-0.5")]),s._v(", tileset.boundingSphere.radius * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2.0")]),s._v("))\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("mode")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 测量模式，0 连续测量，1 测量一次就结束。")])]),s._v(" "),a("tr",[a("td",[s._v("font")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'100 20px SimSun'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 label 字体。")])]),s._v(" "),a("tr",[a("td",[s._v("depthTest")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定标签文字和线对象是参与深度测试。")])]),s._v(" "),a("tr",[a("td",[s._v("arcType")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线的呈现方式， 0 空间直线，1 测地线。")])]),s._v(" "),a("tr",[a("td",[s._v("clampToGround")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 是否贴地量算。")])]),s._v(" "),a("tr",[a("td",[s._v("alongLine")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 是否显示沿线标注。")])]),s._v(" "),a("tr",[a("td",[s._v("polylineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("2")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线宽度。")])]),s._v(" "),a("tr",[a("td",[s._v("polylineMaterial")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("fabric: { type: 'Color', uniforms: { color: '#51ff00' } }")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线材质")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("mode")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 测量模式，0 连续测量，1 测量一次就结束。")])]),s._v(" "),a("tr",[a("td",[s._v("font")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'100 20px SimSun'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定标签 CSS 字体。")])]),s._v(" "),a("tr",[a("td",[s._v("depthTest")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定标签文字和线对象是参与深度测试。")])]),s._v(" "),a("tr",[a("td",[s._v("clampToGround")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 是否贴地量算。")])]),s._v(" "),a("tr",[a("td",[s._v("alongLine")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 是否显示沿线标注。")])]),s._v(" "),a("tr",[a("td",[s._v("polylineMaterial")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("fabric: { type: 'Color', uniforms: { color: '#51ff00' } }")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线材质")])]),s._v(" "),a("tr",[a("td",[s._v("polylineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("2")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线宽度。")])]),s._v(" "),a("tr",[a("td",[s._v("polygonMaterial")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("fabric: { type: 'Color', uniforms: { color: 'rgba(255,165,0,0.25)' } }")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定面材质。")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("mode")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 测量模式，0 连续测量，1 测量一次就结束。")])]),s._v(" "),a("tr",[a("td",[s._v("font")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'100 20px SimSun'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定标签 CSS 字体。")])]),s._v(" "),a("tr",[a("td",[s._v("depthTest")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("false")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定标签文字和线对象是参与深度测试。")])]),s._v(" "),a("tr",[a("td",[s._v("polylineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("2")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线宽度。")])]),s._v(" "),a("tr",[a("td",[s._v("polylineMaterial")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("fabric: { type: 'Color', uniforms: { color: '#51ff00' } }")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定线材质。")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("backgroundColor")]),s._v(" "),a("td",[s._v("String|Array|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'rgba(38, 38, 38, 0.85)'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定标签文字背景颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("fillColor")]),s._v(" "),a("td",[s._v("String|Array|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("WHITE")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定文字标签填充色。")])]),s._v(" "),a("tr",[a("td",[s._v("font")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'100 20px SimSun'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定文字标签 CSS 字体。")])]),s._v(" "),a("tr",[a("td",[s._v("labelStyle")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("2")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定标签文字填充色。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineColor")]),s._v(" "),a("td",[s._v("String|Array|Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'BLUE'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定标签文字轮廓线颜色。")])]),s._v(" "),a("tr",[a("td",[s._v("outlineWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("1")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定标签文字轮廓线宽度。")])]),s._v(" "),a("tr",[a("td",[s._v("pixelOffset")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("{x: 15, y: -20}")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定标签文字像素偏移。")])]),s._v(" "),a("tr",[a("td",[s._v("showBackground")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("true")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定标签文字是否显示背景。")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("activeEvt")]),s._v(" "),a("td",[s._v("{ type: String, isActive: Boolean }")]),s._v(" "),a("td",[s._v("量算开始或停止时触发，返回量算类型包括"),a("code",{pre:!0},[s._v("'areaMeasuring'")]),s._v("、"),a("code",{pre:!0},[s._v("'distanceMeasuring'")]),s._v("、"),a("code",{pre:!0},[s._v("'heightMeasuring'")]),s._v("。")])]),s._v(" "),a("tr",[a("td",[s._v("movingEvt")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td",[s._v("量算过程中触发。返回鼠标位置。")])]),s._v(" "),a("tr",[a("td",[s._v("measureEvt")]),s._v(" "),a("td",[s._v("{ polyline: Object, label: Object, type: String, finished: Boolean }")]),s._v(" "),a("td",[s._v("量算过程中触发。返回量算的结果，文字标签对象。可以获取文字标签对象自定义文字单位小数点等。")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("方法名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("clear")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("清除量算结果（同时停止量算）。")])])])])}],!1,null,null,null);t.default=r.exports},y9Xj:function(s,t,a){s.exports=a("0y7h")}}]);
//# sourceMappingURL=176.04a92f7f795dd66239b2.js.map