(self.webpackChunkglacage_api=self.webpackChunkglacage_api||[]).push([[8862],{78862:(Y,un,N)=>{"use strict";Y.exports=N(44051)},44051:function(Y,un,N){(function(en,$){Y.exports=$(N(67294),N(16384))})(this,function(en,$){return function(r){var d={};function n(o){if(d[o])return d[o].exports;var i=d[o]={i:o,l:!1,exports:{}};return r[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=r,n.c=d,n.d=function(o,i,l){n.o(o,i)||Object.defineProperty(o,i,{enumerable:!0,get:l})},n.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,i){if(1&i&&(o=n(o)),8&i||4&i&&typeof o=="object"&&o&&o.__esModule)return o;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:o}),2&i&&typeof o!="string")for(var s in o)n.d(l,s,function(c){return o[c]}.bind(null,s));return l},n.n=function(o){var i=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(i,"a",i),i},n.o=function(o,i){return Object.prototype.hasOwnProperty.call(o,i)},n.p="",n(n.s=99)}({0:function(r,d,n){r.exports=n(22)()},1:function(r,d){r.exports=en},10:function(r,d,n){"use strict";n.r(d),n.d(d,"Flex",function(){return e});var o,i=n(3),l=n.n(i),s=n(2),c=n.n(s),a=n(4),f=n(7),h=n(1),S=n.n(h),u=n(0),p=n.n(u),O=function(t){return S.a.createElement("div",t)},v={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},w={alignItems:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.number]),direction:p.a.string,gap:p.a.oneOfType([p.a.shape({desktop:p.a.number,mobile:p.a.number,tablet:p.a.number}),p.a.number,p.a.arrayOf(p.a.number),p.a.string]),inline:p.a.bool,justifyContent:p.a.string,reverse:p.a.bool,shrink:p.a.number,wrap:p.a.string};O.defaultProps=v,O.propTypes=w;var E={direction:!0},e=c()(a.Box).withConfig({shouldForwardProp:function(t,g){return!E[t]&&g(t)}})(o||(o=l()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-shrink: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(t){return t.alignItems},function(t){return t.inline?"inline-flex":"flex"},function(t){return t.direction},function(t){return t.shrink},function(t){return t.wrap},function(t){var g=t.gap,T=t.theme;return Object(f.a)("gap",g,T)},function(t){return t.justifyContent});e.defaultProps=v,e.propTypes=w},11:function(r,d,n){var o=n(27),i=n(28),l=n(25),s=n(29);r.exports=function(c,a){return o(c)||i(c,a)||l(c,a)||s()},r.exports.default=r.exports,r.exports.__esModule=!0},13:function(r,d,n){"use strict";n.d(d,"a",function(){return i}),n.d(d,"c",function(){return l}),n.d(d,"b",function(){return s});var o=n(8),i=function(c){return c.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},l=function(c){var a=c.variant,f=c.theme;switch(a){case o.a:return`
        font-weight: `.concat(f.fontWeights.bold,`;
        font-size: `).concat(f.fontSizes[5],`;
        line-height: `).concat(f.lineHeights[2],`;
      `);case o.b:return`
        font-weight: `.concat(f.fontWeights.bold,`;
        font-size: `).concat(f.fontSizes[4],`;
        line-height: `).concat(f.lineHeights[1],`;
      `);case o.c:return`
        font-weight: `.concat(f.fontWeights.semiBold,`;
        font-size: `).concat(f.fontSizes[3],`;
        line-height: `).concat(f.lineHeights[2],`;
      `);case o.d:return`
        font-size: `.concat(f.fontSizes[3],`;
        line-height: `).concat(f.lineHeights[6],`;
      `);case o.e:return`
        font-size: `.concat(f.fontSizes[2],`;
        line-height: `).concat(f.lineHeights[4],`;
      `);case o.f:return`
        font-size: `.concat(f.fontSizes[1],`;
        line-height: `).concat(f.lineHeights[3],`;
      `);case o.g:return`
        font-weight: `.concat(f.fontWeights.bold,`;
        font-size: `).concat(f.fontSizes[0],`;
        line-height: `).concat(f.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(f.fontSizes[2],`;
      `)}},s=function(c){var a=c.theme,f=c.textColor;return a.colors[f||"neutral800"]}},15:function(r,d){function n(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(r.exports=n=function(i){return typeof i},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=n=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},r.exports.default=r.exports,r.exports.__esModule=!0),n(o)}r.exports=n,r.exports.default=r.exports,r.exports.__esModule=!0},2:function(r,d){r.exports=$},22:function(r,d,n){"use strict";var o=n(23);function i(){}function l(){}l.resetWarningCache=i,r.exports=function(){function s(f,h,S,u,p,O){if(O!==o){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}function c(){return s}s.isRequired=s;var a={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:c,element:s,elementType:s,instanceOf:c,node:s,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:l,resetWarningCache:i};return a.PropTypes=a,a}},23:function(r,d,n){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},24:function(r,d){r.exports=function(n,o){(o==null||o>n.length)&&(o=n.length);for(var i=0,l=new Array(o);i<o;i++)l[i]=n[i];return l},r.exports.default=r.exports,r.exports.__esModule=!0},25:function(r,d,n){var o=n(24);r.exports=function(i,l){if(i){if(typeof i=="string")return o(i,l);var s=Object.prototype.toString.call(i).slice(8,-1);return s==="Object"&&i.constructor&&(s=i.constructor.name),s==="Map"||s==="Set"?Array.from(i):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?o(i,l):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},27:function(r,d){r.exports=function(n){if(Array.isArray(n))return n},r.exports.default=r.exports,r.exports.__esModule=!0},28:function(r,d){r.exports=function(n,o){var i=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(i!=null){var l,s,c=[],a=!0,f=!1;try{for(i=i.call(n);!(a=(l=i.next()).done)&&(c.push(l.value),!o||c.length!==o);a=!0);}catch(h){f=!0,s=h}finally{try{a||i.return==null||i.return()}finally{if(f)throw s}}return c}},r.exports.default=r.exports,r.exports.__esModule=!0},29:function(r,d){r.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},3:function(r,d){r.exports=function(n,o){return o||(o=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(o)}}))},r.exports.default=r.exports,r.exports.__esModule=!0},30:function(r,d){r.exports=function(n,o){if(n==null)return{};var i,l,s={},c=Object.keys(n);for(l=0;l<c.length;l++)i=c[l],o.indexOf(i)>=0||(s[i]=n[i]);return s},r.exports.default=r.exports,r.exports.__esModule=!0},4:function(r,d,n){"use strict";n.r(d),n.d(d,"Box",function(){return E});var o,i=n(3),l=n.n(i),s=n(2),c=n.n(s),a=n(7),f=n(1),h=n.n(f),S=n(0),u=n.n(S),p=function(e){return h.a.createElement("div",e)},O={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},v={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])};p.defaultProps=O,p.propTypes=v;var w={color:!0},E=c.a.div.withConfig({shouldForwardProp:function(e,t){return!w[e]&&t(e)}})(o||(o=l()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var t=e.fontSize;return e.theme.fontSizes[t]||t},function(e){var t=e.theme,g=e.background;return t.colors[g]},function(e){var t=e.theme,g=e.color;return t.colors[g]},function(e){var t=e.theme,g=e.padding;return Object(a.a)("padding",g,t)},function(e){var t=e.theme,g=e.paddingTop;return Object(a.a)("padding-top",g,t)},function(e){var t=e.theme,g=e.paddingRight;return Object(a.a)("padding-right",g,t)},function(e){var t=e.theme,g=e.paddingBottom;return Object(a.a)("padding-bottom",g,t)},function(e){var t=e.theme,g=e.paddingLeft;return Object(a.a)("padding-left",g,t)},function(e){var t=e.theme,g=e.marginLeft;return Object(a.a)("margin-left",g,t)},function(e){var t=e.theme,g=e.marginRight;return Object(a.a)("margin-right",g,t)},function(e){var t=e.theme,g=e.marginTop;return Object(a.a)("margin-top",g,t)},function(e){var t=e.theme,g=e.marginBottom;return Object(a.a)("margin-bottom",g,t)},function(e){var t=e.theme;return e.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0},function(e){var t=e.theme;return e.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0},function(e){var t=e.theme,g=e.hasRadius,T=e.borderRadius;return g?t.borderRadius:T},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var t=e.borderColor;return e.theme.colors[t]},function(e){var t=e.theme,g=e.borderColor,T=e.borderStyle,A=e.borderWidth;if(g&&!T&&!A)return"1px solid ".concat(t.colors[g])},function(e){var t=e.theme,g=e.shadow;return t.shadows[g]},function(e){return e.pointerEvents},function(e){var t=e._hover,g=e.theme;return t?t(g):void 0},function(e){return e.display},function(e){return e.position},function(e){var t=e.left;return e.theme.spaces[t]||t},function(e){var t=e.right;return e.theme.spaces[t]||t},function(e){var t=e.top;return e.theme.spaces[t]||t},function(e){var t=e.bottom;return e.theme.spaces[t]||t},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var t=e.width;return e.theme.spaces[t]||t},function(e){var t=e.maxWidth;return e.theme.spaces[t]||t},function(e){var t=e.minWidth;return e.theme.spaces[t]||t},function(e){var t=e.height;return e.theme.spaces[t]||t},function(e){var t=e.maxHeight;return e.theme.spaces[t]||t},function(e){var t=e.minHeight;return e.theme.spaces[t]||t},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});E.defaultProps=O,E.propTypes=v},48:function(r,d,n){"use strict";n.r(d),n.d(d,"Grid",function(){return T}),n.d(d,"GridItem",function(){return I});var o,i=n(6),l=n.n(i),s=n(5),c=n.n(s),a=n(3),f=n.n(a),h=n(1),S=n.n(h),u=n(2),p=n.n(u),O=n(0),v=n.n(O),w=Object(h.createContext)({gap:0,gridCols:12}),E=n(4),e=n(7),t=["gap","gridCols"],g=p()(E.Box)(o||(o=f()([`
  display: grid;
  grid-template-columns: repeat(`,`, 1fr);
  `,`
`])),function(b){return b.gridCols},function(b){var R=b.theme,j=b.gap;return Object(e.a)("gap",j,R)}),T=function(b){var R=b.gap,j=b.gridCols,W=c()(b,t);return S.a.createElement(w.Provider,{value:{gap:R,gridCols:j}},S.a.createElement(g,l()({gap:R,gridCols:j},W)))};T.defaultProps={gap:0,gridCols:12},T.propTypes={gap:v.a.oneOfType([v.a.number,v.a.arrayOf(v.a.number)]),gridCols:v.a.number};var A,q=["col","xs","s"],G=p.a.div(A||(A=f()([`
  grid-column: span `,`;
  max-width: 100%;

  `,` {
    grid-column: span `,`;
  }

  `,` {
    grid-column: span `,`;
  }
`])),function(b){return b.col},function(b){return b.theme.mediaQueries.tablet},function(b){return b.s},function(b){return b.theme.mediaQueries.mobile},function(b){return b.xs}),I=function(b){var R=b.col,j=b.xs,W=b.s,L=c()(b,q),k=Object(h.useContext)(w),J=k.gap,K=k.gridCols;return S.a.createElement(G,{gap:J,gridCols:K,col:R,xs:j,s:W},S.a.createElement(E.Box,L))};I.defaultProps={col:void 0,s:void 0,xs:void 0},I.propTypes={col:v.a.number,s:v.a.number,xs:v.a.number}},5:function(r,d,n){var o=n(30);r.exports=function(i,l){if(i==null)return{};var s,c,a=o(i,l);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(i);for(c=0;c<f.length;c++)s=f[c],l.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(i,s)&&(a[s]=i[s])}return a},r.exports.default=r.exports,r.exports.__esModule=!0},6:function(r,d){function n(){return r.exports=n=Object.assign||function(o){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(o[s]=l[s])}return o},r.exports.default=r.exports,r.exports.__esModule=!0,n.apply(this,arguments)}r.exports=n,r.exports.default=r.exports,r.exports.__esModule=!0},7:function(r,d,n){"use strict";var o=n(11),i=n.n(o),l=n(15),s=n.n(l);d.a=function(c,a,f){var h=a;if(Array.isArray(a)||s()(a)!=="object"||(h=[a==null?void 0:a.desktop,a==null?void 0:a.tablet,a==null?void 0:a.mobile]),h!==void 0){if(Array.isArray(h)){var S=h,u=i()(S,3),p=u[0],O=u[1],v=u[2],w="".concat(c,": ").concat(f.spaces[p],";");return O!==void 0&&(w+="".concat(f.mediaQueries.tablet,`{
          `).concat(c,": ").concat(f.spaces[O],`;
        }`)),v!==void 0&&(w+="".concat(f.mediaQueries.mobile,`{
          `).concat(c,": ").concat(f.spaces[v],`;
        }`)),w}var E=f.spaces[h]||h;return"".concat(c,": ").concat(E,";")}}},8:function(r,d,n){"use strict";n.d(d,"a",function(){return o}),n.d(d,"b",function(){return i}),n.d(d,"c",function(){return l}),n.d(d,"d",function(){return s}),n.d(d,"e",function(){return c}),n.d(d,"f",function(){return a}),n.d(d,"g",function(){return f}),n.d(d,"h",function(){return h});var o="alpha",i="beta",l="delta",s="epsilon",c="omega",a="pi",f="sigma",h=[o,i,l,s,c,a,f]},9:function(r,d,n){"use strict";n.r(d),n.d(d,"Typography",function(){return e});var o,i=n(3),l=n.n(i),s=n(2),c=n.n(s),a=n(13),f=n(1),h=n.n(f),S=n(0),u=n.n(S),p=n(8),O=function(t){return h.a.createElement("div",t)},v={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textAlign:void 0,textTransform:void 0,variant:p.e},w={ellipsis:u.a.bool,fontSize:u.a.oneOfType([u.a.number,u.a.string]),fontWeight:u.a.string,lineHeight:u.a.oneOfType([u.a.number,u.a.string]),textAlign:u.a.string,textColor:u.a.string,textTransform:u.a.string,variant:u.a.oneOf(p.h)};O.defaultProps=v,O.propTypes=w;var E={fontSize:!0,fontWeight:!0},e=c.a.span.withConfig({shouldForwardProp:function(t,g){return!E[t]&&g(t)}})(o||(o=l()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-align: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(t){var g=t.theme,T=t.fontWeight;return g.fontWeights[T]},function(t){var g=t.theme,T=t.fontSize;return g.fontSizes[T]},function(t){var g=t.theme,T=t.lineHeight;return g.lineHeights[T]},a.b,function(t){return t.textAlign},function(t){return t.textTransform},a.a,a.c);e.defaultProps=v,e.propTypes=w},99:function(r,d,n){"use strict";n.r(d),n.d(d,"Layout",function(){return w}),n.d(d,"ActionLayout",function(){return A}),n.d(d,"ContentLayout",function(){return q}),n.d(d,"HeaderLayout",function(){return Q}),n.d(d,"BaseHeaderLayout",function(){return H}),n.d(d,"TwoColsLayout",function(){return rn}),n.d(d,"GridLayout",function(){return on});var o,i,l=n(3),s=n.n(l),c=n(1),a=n.n(c),f=n(0),h=n.n(f),S=n(2),u=n.n(S),p=n(4),O=u()(p.Box)(o||(o=s()([`
  display: grid;
  grid-template-columns: `,`;
`])),function(m){return m.hasSideNav?"auto 1fr":"1fr"}),v=u()(p.Box)(i||(i=s()([`
  overflow-x: hidden;
`]))),w=function(m){var y=m.sideNav,x=m.children;return a.a.createElement(O,{hasSideNav:Boolean(y)},y,a.a.createElement(v,{paddingBottom:10},x))};w.defaultProps={sideNav:void 0},w.propTypes={children:h.a.node.isRequired,sideNav:h.a.node};var E,e,t=n(10),g=u()(t.Flex)(E||(E=s()([`
  & > * + * {
    margin-left: `,`;
  }

  margin-left: `,`;
`])),function(m){return m.theme.spaces[2]},function(m){return m.pullRight?"auto":void 0}),T=u()(g)(e||(e=s()([`
  flex-shrink: 0;
`]))),A=function(m){var y=m.startActions,x=m.endActions;return y||x?a.a.createElement(p.Box,{paddingLeft:10,paddingRight:10},a.a.createElement(p.Box,{paddingBottom:4},a.a.createElement(t.Flex,{justifyContent:"space-between",alignItems:"flex-start"},y&&a.a.createElement(g,{wrap:"wrap"},y),x&&a.a.createElement(T,{pullRight:!0},x)))):null};A.defaultProps={endActions:void 0,startActions:void 0},A.propTypes={endActions:h.a.node,startActions:h.a.node};var q=function(m){var y=m.children;return a.a.createElement(p.Box,{paddingLeft:10,paddingRight:10},y)};q.propTypes={children:h.a.node.isRequired};var G,I=n(5),b=n.n(I),R=n(6),j=n.n(R),W=n(11),L=n.n(W),k=n(9),J=["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"],K=function(){var m,y,x=Object(c.useRef)(null),B=Object(c.useState)(null),C=L()(B,2),_=C[0],F=C[1],nn=function(M){var P=Object(c.useRef)(null),cn=Object(c.useState)(!0),an=L()(cn,2),dn=an[0],ln=an[1],fn=function(V){var X=L()(V,1)[0];ln(X.isIntersecting)};return Object(c.useEffect)(function(){var V=P.current,X=new IntersectionObserver(fn,M);return V&&X.observe(P.current),function(){V&&X.disconnect()}},[P,M]),[P,dn]}({root:null,rootMargin:"0px",threshold:0}),D=L()(nn,2),z=D[0],U=D[1];return m=z,y=function(){z.current&&F(z.current.getBoundingClientRect())},Object(c.useLayoutEffect)(function(){var M=new ResizeObserver(y);return Array.isArray(m)?m.map(function(P){P.current&&M.observe(P.current)}):m.current&&M.observe(m.current),function(){M.disconnect()}},[]),Object(c.useEffect)(function(){x.current&&F(x.current.getBoundingClientRect())},[x]),{containerRef:z,isVisible:U,baseHeaderLayoutRef:x,headerSize:_}},Q=function(m){var y=K(),x=y.containerRef,B=y.isVisible,C=y.baseHeaderLayoutRef,_=y.headerSize;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{height:_==null?void 0:_.height},ref:x},B&&a.a.createElement(H,j()({ref:C},m))),!B&&a.a.createElement(H,j()({},m,{sticky:!0,width:_==null?void 0:_.width})))};Q.displayName="HeaderLayout";var sn=u()(p.Box)(G||(G=s()([`
  position: fixed;
  top: 0;
  right: 0;
  width: `,`px;
  z-index: 4;
  box-shadow: `,`;
`])),function(m){return m.width},function(m){return m.theme.shadows.tableShadow}),H=a.a.forwardRef(function(m,y){var x=m.navigationAction,B=m.primaryAction,C=m.secondaryAction,_=m.subtitle,F=m.title,nn=m.sticky,D=m.width,z=b()(m,J),U=typeof _=="string";return nn?a.a.createElement(sn,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:D,"data-strapi-header-sticky":!0},a.a.createElement(t.Flex,{justifyContent:"space-between"},a.a.createElement(t.Flex,null,x&&a.a.createElement(p.Box,{paddingRight:3},x),a.a.createElement(p.Box,null,a.a.createElement(k.Typography,j()({variant:"beta",as:"h1"},z),F),U?a.a.createElement(k.Typography,{variant:"pi",textColor:"neutral600"},_):_),C?a.a.createElement(p.Box,{paddingLeft:4},C):null),a.a.createElement(t.Flex,null,B?a.a.createElement(p.Box,{paddingLeft:2},B):void 0))):a.a.createElement(p.Box,{ref:y,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:x?6:8,background:"neutral100","data-strapi-header":!0},x?a.a.createElement(p.Box,{paddingBottom:2},x):null,a.a.createElement(t.Flex,{justifyContent:"space-between"},a.a.createElement(t.Flex,null,a.a.createElement(k.Typography,j()({as:"h1",variant:"alpha"},z),F),C?a.a.createElement(p.Box,{paddingLeft:4},C):null),B),U?a.a.createElement(k.Typography,{variant:"epsilon",textColor:"neutral600",as:"p"},_):_)});H.displayName="BaseHeaderLayout",H.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},H.propTypes={navigationAction:h.a.node,primaryAction:h.a.node,secondaryAction:h.a.node,sticky:h.a.bool,subtitle:h.a.oneOfType([h.a.string,h.a.node]),title:h.a.string.isRequired,width:h.a.number},Q.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},Q.propTypes={navigationAction:h.a.node,primaryAction:h.a.node,secondaryAction:h.a.node,subtitle:h.a.oneOfType([h.a.string,h.a.node]),title:h.a.string.isRequired};var tn,Z=n(48),rn=function(m){var y=m.startCol,x=m.endCol;return a.a.createElement(Z.Grid,{gap:4},a.a.createElement(Z.GridItem,{col:9,s:12},a.a.createElement(p.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},y)),a.a.createElement(Z.GridItem,{col:3,s:12},a.a.createElement(p.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},x)))};rn.propTypes={endCol:h.a.node.isRequired,startCol:h.a.node.isRequired};var on=u.a.div(tn||(tn=s()([`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: `,`;
`])),function(m){return m.theme.spaces[4]});on.propTypes={children:h.a.node.isRequired}}})})}}]);
