(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{2094:function(a,t,s){a.exports=s.p+"assets/img/1651028841683-f01b58e6-4274-4074-82b6-0b4f05c87475.36318e73.png"},2095:function(a,t,s){a.exports=s.p+"assets/img/1651028825347-5151f68b-125c-4334-830e-4b4282df4b09.eaa446c3.png"},2096:function(a,t,s){a.exports=s.p+"assets/img/1651029262386-e799b54d-5d9f-4d63-8a95-e74b729ba966.db05db1c.png"},2097:function(a,t,s){a.exports=s.p+"assets/img/1651029326354-a2d6830f-8087-4c6f-a295-e94964b8877e.7d3c345f.png"},2098:function(a,t,s){a.exports=s.p+"assets/img/1651029367812-9d8bcfc1-201d-4343-a1ca-fd97686cd3b9.9872022e.png"},3128:function(a,t,s){"use strict";s.r(t);var r=s(64),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"grafana-mysql-后台任意文件读取漏洞-cve-2019-19499"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grafana-mysql-后台任意文件读取漏洞-cve-2019-19499"}},[a._v("#")]),a._v(" Grafana mysql 后台任意文件读取漏洞 CVE-2019-19499")]),a._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),t("p",[a._v("Grafana 是一个用于分析、监控和数据可视化的开源应用程序。数以千计的公司使用 Grafana，包括 PayPal、eBay 和 Intel 等主要代表。通过登录后台设置Mysql可以读取服务器中的任意文件")]),a._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),t("a-checkbox",{attrs:{checked:""}},[a._v("Grafana < 6.4.4")]),t("br"),a._v(" "),t("h2",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull grafana/grafana:6.4.3 \n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("grafana "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3000")]),a._v(":3000 grafana/grafana:6.4.3 \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),t("p",[a._v("登录后台 admin/admin, 添加数据源 Mysql")]),a._v(" "),t("p",[t("img",{attrs:{src:s(2094),alt:"img"}})]),a._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/grafana/grafana/pull/20192/files",target:"_blank",rel:"noopener noreferrer"}},[a._v("修复漏洞参考"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("img",{attrs:{src:s(2095),alt:"img"}})]),a._v(" "),t("p",[a._v("修复部分为 database数据库名的用户可控部分，由于 allowAllFiles=true 参数可以禁用对 LOCAL INFILE 请求的保护，再通过之前有关Mysql任意文件读取的漏洞即可获取服务器中的任意文件")]),a._v(" "),t("p",[t("img",{attrs:{src:s(2096),alt:"img"}})]),a._v(" "),t("p",[a._v("再创建一个恶意Mysql： "),t("a",{attrs:{href:"https://github.com/allyshka/Rogue-MySql-Server",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/allyshka/Rogue-MySql-Server"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("img",{attrs:{src:s(2097),alt:"img"}})]),a._v(" "),t("p",[a._v("执行 Save 即可读取文件")]),a._v(" "),t("p",[t("img",{attrs:{src:s(2098),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=e.exports}}]);