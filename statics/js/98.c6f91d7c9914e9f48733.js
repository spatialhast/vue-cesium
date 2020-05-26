(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{VSy4:function(t,s,a){"use strict";a.r(s);var e=a("JFUb"),r=Object(e.a)({data:function(){return{show:!0}},methods:{ready:function(t){},subReady:function(t){t.Cesium;t.viewer.camera.flyHome(0)}}},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("CzmlDataSource")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("加载 CZML 数据源")]),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{attrs:{shouldAnimate:!0},on:{ready:t.ready}},[a("vc-datasource-czml",{attrs:{czml:"./statics/SampleData/simple.czml",show:t.show},on:{ready:t.subReady}})],1)],1)]],2),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),a("hr"),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(4),t._v(" "),a("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("vc-datasource-czml")]),this._v(" 组件用于加载 "),s("a",{attrs:{href:"https://github.com/AnalyticalGraphicsInc/czml-writer/wiki/CZML-Guide"}},[this._v("CZML")]),this._v(" 格式数据源。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":shouldAnimate")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"true"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-czml")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("czml")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"./statics/SampleData/simple.czml"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"subReady"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-czml")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {},\n      subReady(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        viewer.camera.flyHome("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0")]),t._v(")\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("czml")]),t._v(" "),a("td",[t._v("String|Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("required")]),t._v(" 指定 czml 对象或者 url。")])]),t._v(" "),a("tr",[a("td",[t._v("show")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("true")])]),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定数据源是否可见。")])]),t._v(" "),a("tr",[a("td",[t._v("options")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",{pre:!0},[t._v("optional")]),t._v(" 指定以下属性：")])]),t._v(" "),a("tr",[a("td",[t._v("sourceUri")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("credit")]),t._v(" "),a("td",[t._v("String|Object")]),t._v(" "),a("td"),t._v(" "),a("td")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("参考官方文档： "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CzmlDataSource.html"}},[this._v("CzmlDataSource")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("ready")]),t._v(" "),a("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),a("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),t._v(" "),a("tr",[a("td",[t._v("changedEvent")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("数据源改变时触发。")])]),t._v(" "),a("tr",[a("td",[t._v("errorEvent")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("数据源发生错误时触发。")])]),t._v(" "),a("tr",[a("td",[t._v("loadingEvent")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("数据源开始或结束加载时触发。")])]),t._v(" "),a("tr",[a("td",[t._v("clusterEvent")]),t._v(" "),a("td",[t._v("(clusteredEntities, cluster)")]),t._v(" "),a("td",[t._v("数据源聚合事件。")])]),t._v(" "),a("tr",[a("td",[t._v("collectionChanged")]),t._v(" "),a("td",[t._v("(collection, added, removed, changed)")]),t._v(" "),a("td",[t._v("数据源实体集合改变时触发。")])])])])}],!1,null,null,null);s.default=r.exports},drRm:function(t,s,a){t.exports=a("VSy4")}}]);
//# sourceMappingURL=98.c6f91d7c9914e9f48733.js.map