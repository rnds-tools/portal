"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[6266],{3905:(e,a,r)=>{r.d(a,{Zo:()=>d,kt:()=>m});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),p=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=t,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(f,i(i({ref:a},d),{},{components:r})):n.createElement(f,i({ref:a},d))}));function m(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1978:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),t=(r(7294),r(3905));const o={sidebar_position:1,title:"Gest\xe3o do Ambiente"},i=void 0,l={unversionedId:"cli/gestao",id:"cli/gestao",title:"Gest\xe3o do Ambiente",description:"O aplicativo adf \xe9 respons\xe1vel pelo gerenciamento de inst\xe2ncias do Ambiente",source:"@site/docs/cli/gestao.md",sourceDirName:"cli",slug:"/cli/gestao",permalink:"/portal/docs/cli/gestao",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/gestao.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Gest\xe3o do Ambiente"},sidebar:"tutorialSidebar",previous:{title:"adf (CLI)",permalink:"/portal/docs/category/adf-cli"},next:{title:"Fun\xe7\xf5es",permalink:"/portal/docs/cli/funcoes"}},s={},p=[{value:"Instalar",id:"instalar",level:3},{value:"Remover",id:"remover",level:3},{value:"Vers\xf5es instaladas",id:"vers\xf5es-instaladas",level:3},{value:"Definir a vers\xe3o corrente a ser usada",id:"definir-a-vers\xe3o-corrente-a-ser-usada",level:3},{value:"Ajuda",id:"ajuda",level:3},{value:"Iniciar/parar o ambiente",id:"iniciarparar-o-ambiente",level:3},{value:"Inst\xe2ncias em execu\xe7\xe3ao",id:"inst\xe2ncias-em-execu\xe7\xe3ao",level:3},{value:"Reiniciar o ambiente",id:"reiniciar-o-ambiente",level:3},{value:"Registros de log",id:"registros-de-log",level:3},{value:"Exibe configura\xe7\xe3o",id:"exibe-configura\xe7\xe3o",level:3},{value:"Validar inst\xe2ncia",id:"validar-inst\xe2ncia",level:3},{value:"Adiciona perfil",id:"adiciona-perfil",level:3},{value:"Remove perfil",id:"remove-perfil",level:3}],d={toc:p};function c(e){let{components:a,...r}=e;return(0,t.kt)("wrapper",(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"O aplicativo ",(0,t.kt)("strong",{parentName:"p"},"adf")," \xe9 respons\xe1vel pelo gerenciamento de inst\xe2ncias do Ambiente\nde Desenvolvimento FHIR e tamb\xe9m pode ser empregado para submeter requisi\xe7\xf5es,\ndentre outras fun\xe7\xf5es."),(0,t.kt)("admonition",{title:"Instala\xe7\xe3o",type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Fa\xe7a o ",(0,t.kt)("em",{parentName:"p"},"download")," do aplicativo ",(0,t.kt)("strong",{parentName:"p"},"adf")," por meio do endere\xe7o\n",(0,t.kt)("a",{parentName:"p",href:"https://rnds.software/get"},"https://rnds.software/get")," conforme o seu sistema operacional (Linux, Windows ou Mac)")),(0,t.kt)("h3",{id:"instalar"},"Instalar"),(0,t.kt)("p",null,"O comando abaixo obt\xe9m a vers\xe3o mais recente, caso j\xe1 n\xe3o esteja dispon\xedvel."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf install\n")),(0,t.kt)("p",null,"Alternativamente, o comando abaixo instala a vers\xe3o ",(0,t.kt)("strong",{parentName:"p"},"1.0.0"),", conforme indicado."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf install 1.0.0\n")),(0,t.kt)("p",null,"Qualquer vers\xe3o dispon\xedvel pode ser definida como corrente (",(0,t.kt)("inlineCode",{parentName:"p"},"adf use"),")."),(0,t.kt)("p",null,"Observe que se a vers\xe3o indicada j\xe1 estiver dispon\xedvel ser\xe1 feita uma restaura\xe7\xe3o,\nse for o caso."),(0,t.kt)("h3",{id:"remover"},"Remover"),(0,t.kt)("p",null,"Para remover a vers\xe3o corrente execute o comando abaixo.\nAp\xf3s esta opera\xe7\xe3o a vers\xe3o corrente torna-se aquela mais recente dispon\xedvel. Para saber qual a vers\xe3o corrente use o comando ",(0,t.kt)("inlineCode",{parentName:"p"},"adf use"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf uninstall\n")),(0,t.kt)("p",null,"Ou para remover uma vers\xe3o espec\xedfica, execute o comando"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf uninstall 1.0.0\n")),(0,t.kt)("h3",{id:"vers\xf5es-instaladas"},"Vers\xf5es instaladas"),(0,t.kt)("p",null,"Exibe a lista de vers\xf5es dispon\xedveis localmente. A vers\xe3o corrente,\nempregada por padr\xe3o, caso nenhuma outra seja especificamente indicada, \xe9\nfornecida entre asteriscos, por exemplo, ","*","1.1.0","*","."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf list\n")),(0,t.kt)("h3",{id:"definir-a-vers\xe3o-corrente-a-ser-usada"},"Definir a vers\xe3o corrente a ser usada"),(0,t.kt)("p",null,"Enquanto ",(0,t.kt)("inlineCode",{parentName:"p"},"adf list")," exibe as vers\xf5es instaladas, o comando"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf use\n")),(0,t.kt)("p",null,"exibe qual a vers\xe3o corrente, ou seja, aquela a ser utilizada. Para definir\na vers\xe3o ",(0,t.kt)("strong",{parentName:"p"},"1.0.1")," como a vers\xe3o corrente, dentre aquelas dispon\xedveis, use o comando abaixo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf use 1.0.1\n")),(0,t.kt)("h3",{id:"ajuda"},"Ajuda"),(0,t.kt)("p",null,"Informa\xe7\xf5es sobre as op\xe7\xf5es podem ser obtidas com o comando"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf help\n")),(0,t.kt)("p",null,"Para mais detalhes espec\xedficos de um comando use"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf help [<command>]\n")),(0,t.kt)("p",null,"Por exemplo, para detalhar o comando que lista as vers\xf5es instaladas use ",(0,t.kt)("inlineCode",{parentName:"p"},"adf help list"),"."),(0,t.kt)("h3",{id:"iniciarparar-o-ambiente"},"Iniciar/parar o ambiente"),(0,t.kt)("p",null,"Inicia empregando a vers\xe3o corrente na porta padr\xe3o (",(0,t.kt)("strong",{parentName:"p"},"8087"),")."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf start\n")),(0,t.kt)("p",null,"Alternativamente pode ser utilizada uma vers\xe3o e/ou porta espec\xedficas para in\xedcio,\nconforme abaixo."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf start [<version>] [--port <number>]\n")),(0,t.kt)("p",null,"O comando abaixo, por outro lado, interrompe a execu\xe7\xe3o do ambiente:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf stop\n")),(0,t.kt)("p",null,"Enquanto aquele abaixo interrompe uma inst\xe2ncia espec\xedfica"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf start [<version>] [--run <number>] [--port <number>]\n")),(0,t.kt)("p",null,"O par\xe2metro ",(0,t.kt)("strong",{parentName:"p"},"number")," indica o n\xfamero \xfanico atribu\xeddo a uma inst\xe2ncia espec\xedfica\ne pode ser obtido com o comando ",(0,t.kt)("inlineCode",{parentName:"p"},"adf run"),"."),(0,t.kt)("h3",{id:"inst\xe2ncias-em-execu\xe7\xe3ao"},"Inst\xe2ncias em execu\xe7\xe3ao"),(0,t.kt)("p",null,"Lista as inst\xe2ncias do ambiente em execu\xe7\xe3o"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf run\n")),(0,t.kt)("h3",{id:"reiniciar-o-ambiente"},"Reiniciar o ambiente"),(0,t.kt)("p",null,"Reinicia a \xfanica inst\xe2ncia em execu\xe7\xe3o."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf restart\n")),(0,t.kt)("p",null,"Se mais de uma inst\xe2ncia \xe9 executada na m\xe1quina em quest\xe3o, ent\xe3o o\ncomando correspondente deve ser"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf restart [--run <number>] [--port <number>]\n")),(0,t.kt)("p",null,"Onde ",(0,t.kt)("strong",{parentName:"p"},"<number",">")," indica o n\xfamero da inst\xe2ncia conforme fornecido por ",(0,t.kt)("inlineCode",{parentName:"p"},"adf run")," ou a porta empregada pela inst\xe2ncia a ser reiniciada."),(0,t.kt)("h3",{id:"registros-de-log"},"Registros de log"),(0,t.kt)("p",null,"Exibe os \xfaltimos registros de log do ambiente. Tamb\xe9m \xe9 poss\xedvel indicar que\nregistros devem ser aguardados indefinidamente e exibidos, quando dispon\xedveis."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf log [--watch]\n")),(0,t.kt)("h3",{id:"exibe-configura\xe7\xe3o"},"Exibe configura\xe7\xe3o"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf configure\n")),(0,t.kt)("h3",{id:"validar-inst\xe2ncia"},"Validar inst\xe2ncia"),(0,t.kt)("p",null,"Valida uma inst\xe2ncia de um recurso considerando os perfis eventualmente fornecidos."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf validate <resource file> [<profile>*]\n")),(0,t.kt)("p",null,"Observe que se o recurso possui um valor para a propriedade ",(0,t.kt)("strong",{parentName:"p"},"meta.profile"),",\nent\xe3o a verifica\xe7\xe3o em conformidade com este valor tamb\xe9m \xe9 realizada."),(0,t.kt)("h3",{id:"adiciona-perfil"},"Adiciona perfil"),(0,t.kt)("p",null,"Acrescenta perfil \xe0 lista de perfis dispon\xedveis para eventuais valida\xe7\xf5es."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf add <profile>\n")),(0,t.kt)("p",null,"Adicionalmente pode-se especificar todo um diret\xf3rio contendo perfis a serem consultados recursivamente."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"adf add --dir <directory>\n")),(0,t.kt)("h3",{id:"remove-perfil"},"Remove perfil"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"adf remove <profile>"),"\n(remove o profile da lista daqueles que ser\xe3o considerados pelo servidor para valida\xe7\xe3o e outras atividades)")))}c.isMDXComponent=!0}}]);