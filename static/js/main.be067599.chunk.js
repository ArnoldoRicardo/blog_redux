(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{70:function(e,r,c){},71:function(e,r,c){},72:function(e,r,c){},73:function(e,r,c){"use strict";c.r(r);var t={};c.r(t),c.d(t,"traerTodos",(function(){return R}));var n=c(1),a=c(0),o=c(18),s=c.n(o),i=c(12),u=c(11),j=c(40),d=c(13),b=c(4);function p(){return Object(n.jsxs)("nav",{id:"menu",children:[Object(n.jsx)(d.b,{to:"/blog_redux",children:"Usuarios"}),Object(n.jsx)(d.b,{to:"/tareas",children:"Tareas"})]})}var l=c(20),O=c(21),h=c(24),m=c(23),f=c(10),x=c.n(f),v=c(14),y=c(17),g=c.n(y),_="usuarios_traer_todos",w="usuarios_cargando",k="usuarios_error",R=function(){return function(){var e=Object(v.a)(x.a.mark((function e(r){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:w}),e.prev=1,e.next=4,g.a.get("https://jsonplaceholder.typicode.com/users");case 4:c=e.sent,r({type:_,payload:c.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:k,payload:"Informacion de usuarios no disponible."});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()};c(70);function C(){return Object(n.jsx)("div",{className:"center",children:Object(n.jsxs)("div",{className:"lds-ring",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})}function T(e){return Object(n.jsx)("h2",{className:"center rojo",children:e.mensaje})}var I=Object(u.b)((function(e){return e.usuarioReducer}))((function(e){return Object(n.jsxs)("table",{className:"tabla",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Nombre"}),Object(n.jsx)("th",{children:"Correo"}),Object(n.jsx)("th",{children:"Enalce"}),Object(n.jsx)("th",{children:"Acciones"})]})}),Object(n.jsx)("tbody",{children:e.usuarios.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.website}),Object(n.jsx)("td",{children:Object(n.jsx)(d.b,{to:"/publicaciones/".concat(e.id),children:Object(n.jsx)("div",{className:"eye-solid icon"})})})]},e.id)}))})]})})),N=function(e){Object(h.a)(c,e);var r=Object(m.a)(c);function c(){var e;Object(l.a)(this,c);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=r.call.apply(r,[this].concat(a))).ponerContenido=function(){return e.props.cargando?Object(n.jsx)(C,{}):e.props.error?Object(n.jsx)(T,{mensaje:e.props.error}):Object(n.jsx)(I,{})},e}return Object(O.a)(c,[{key:"componentDidMount",value:function(){this.props.usuarios.length||this.props.traerTodos()}},{key:"render",value:function(){return console.log(this.props.usuarios),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Usuarios"}),this.ponerContenido()]})}}]),c}(a.Component),P=Object(u.b)((function(e){return e.usuarioReducer}),t)(N),U=Object(u.b)((function(e){return e.publicacionReducer}))((function(e){if(e.com_error)return console.log(e.com_error),Object(n.jsx)(T,{mensaje:e.com_error});if(e.com_cargando&&!e.comments.length)return Object(n.jsx)(C,{});return Object(n.jsx)("ul",{children:e.comments.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:Object(n.jsx)("u",{children:e.email})}),Object(n.jsx)("br",{}),e.body]},e.id)}))})})),A=c(22),D=c(2),E="publicaciones_update",J="publicaciones_cargando",M="publicaciones_error",B="comentarios_update",q="comentarios_cargando",z="comentarios_error",F=R,G=function(e){return function(){var r=Object(v.a)(x.a.mark((function r(c,t){var n,a,o,s;return x.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t().publicacionReducer.publicaciones,c({type:J}),r.prev=2,r.next=5,g.a.get("https://jsonplaceholder.typicode.com/posts?userId=".concat(e));case 5:a=r.sent,o=a.data.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{comments:[],open:!1})})),s=Object(D.a)(Object(D.a)({},n),{},Object(A.a)({},e,o)),c({type:E,payload:s}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(2),c({type:M,payload:"Informacion de publicaciones no disponible."});case 14:case"end":return r.stop()}}),r,null,[[2,11]])})));return function(e,c){return r.apply(this,arguments)}}()},H=function(e,r){return function(c,t){var n=t().publicacionReducer.publicaciones,a=Object(D.a)({},n);a[e]=n[e].map((function(e){return e.id===r?Object(D.a)(Object(D.a)({},e),{},{open:!e.open}):e})),c({type:E,payload:a})}},K=function(e,r){return function(){var c=Object(v.a)(x.a.mark((function c(t,n){var a,o,s;return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a=n().publicacionReducer.publicaciones,t({type:q}),c.prev=2,c.next=5,g.a.get("https://jsonplaceholder.typicode.com/comments?postId=".concat(r));case 5:o=c.sent,(s=Object(D.a)({},a))[e]=a[e].map((function(e){return e.id===r?Object(D.a)(Object(D.a)({},e),{},{comments:o.data}):e})),t({type:B,payload:s}),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(2),t({type:z,payload:"Informacion de comentarios no disponible."});case 14:case"end":return c.stop()}}),c,null,[[2,11]])})));return function(e,r){return c.apply(this,arguments)}}()},L=function(e){Object(h.a)(c,e);var r=Object(m.a)(c);function c(){var e;return Object(l.a)(this,c),(e=r.call(this)).ponerUsuario=function(){var r=e.props,c=r.usuarioReducer,t=r.match.params.key;if(c.error)return Object(n.jsx)(T,{mensaje:c.error});if(!c.usuarios.length||c.cargando)return Object(n.jsx)(C,{});var a=c.usuarios[t].name;return Object(n.jsx)("div",{children:Object(n.jsxs)("h1",{children:["Publicaciones de ",a," "]})})},e.ponerPublicaciones=function(){var r=e.props,c=r.usuarioReducer,t=r.publicacionReducer,a=r.publicacionReducer.publicaciones,o=r.match.params.key;return t.error||c.error?Object(n.jsx)(T,{mensaje:t.error}):!a.hasOwnProperty(o)||t.cargando?Object(n.jsx)(C,{}):e.showInfo(a[o],o)},e.showInfo=function(r,c){return r.map((function(r){return Object(n.jsxs)("div",{className:"pub_titulo",onClick:function(){return e.showComments(c,r.id,r.comments)},children:[Object(n.jsx)("h2",{children:r.title}),Object(n.jsx)("p",{children:r.body}),r.open?Object(n.jsx)(U,{comments:r.comments}):"[ver-comentarios]"]},r.id)}))},e.showComments=function(r,c,t){e.props.openComments(r,c),t.length||e.props.getComments(r,c)},e.state={usuario:null},e}return Object(O.a)(c,[{key:"componentDidMount",value:function(){var e=Object(v.a)(x.a.mark((function e(){var r,c,t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,c=r.usuariosTraerTodos,t=r.publicacionTraerPorUsuario,n=r.match.params.key,this.props.usuarioReducer.usuarios.length){e.next=4;break}return e.next=4,c();case 4:this.props.publicacionReducer.publicaciones.hasOwnProperty(n)||t(n);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[this.ponerUsuario(),this.ponerPublicaciones()]})}}]),c}(a.Component),Q={usuariosTraerTodos:F,publicacionTraerPorUsuario:G,openComments:H,getComments:K},S=Object(u.b)((function(e){return{usuarioReducer:e.usuarioReducer,publicacionReducer:e.publicacionReducer}}),Q)(L),V=function(){return Object(n.jsx)("div",{children:"Tareas"})};function W(){return Object(n.jsxs)(d.a,{children:[Object(n.jsx)(p,{}),Object(n.jsx)("div",{className:"margen",children:Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/blog_redux",component:P}),Object(n.jsx)(b.a,{exact:!0,path:"/tareas",component:V}),Object(n.jsx)(b.a,{exact:!0,path:"/publicaciones/:key",component:S})]})})]})}var X={usuarios:[],cargando:!1,error:""},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case _:return Object(D.a)(Object(D.a)({},e),{},{usuarios:r.payload,cargando:!1,error:""});case w:return Object(D.a)(Object(D.a)({},e),{},{cargando:!0});case k:return Object(D.a)(Object(D.a)({},e),{},{error:r.payload,cargando:!1});default:return e}},Z={publicaciones:{},cargando:!1,error:"",com_cargando:!1,com_error:""},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case E:return Object(D.a)(Object(D.a)({},e),{},{publicaciones:r.payload,cargando:!1,error:""});case J:return Object(D.a)(Object(D.a)({},e),{},{cargando:!0});case M:return Object(D.a)(Object(D.a)({},e),{},{error:r.payload,cargando:!1});case B:return Object(D.a)(Object(D.a)({},e),{},{publicaciones:r.payload,com_cargando:!1,com_error:""});case q:return Object(D.a)(Object(D.a)({},e),{},{com_cargando:!0});case z:return Object(D.a)(Object(D.a)({},e),{},{com_error:r.payload,com_cargando:!1});default:return e}},ee=Object(i.c)({usuarioReducer:Y,publicacionReducer:$}),re=(c(71),c(72),Object(i.d)(ee,{},Object(i.a)(j.a)));s.a.render(Object(n.jsx)(u.a,{store:re,children:Object(n.jsx)(W,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.be067599.chunk.js.map