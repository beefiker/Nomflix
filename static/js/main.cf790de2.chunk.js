(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{21:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/popcorn.b0227c64.png"},70:function(e,t,n){"use strict";n.r(t);var r,i,c,a,o,s,l,d,j,b,u,p,x,h,g,O,m,f,v,_,w,y,k,S,z,U,M,N,R,T,F,I,C,L,P,V,B,E,D,q,H,J,A=n(1),G=n.n(A),K=n(35),Q=n.n(K),W=n(16),X=n(6),Y=n(3),Z=n(2),$=n(0),ee=Z.c.header(r||(r=Object(Y.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n  z-index: 10;\n"]))),te=Z.c.ul(i||(i=Object(Y.a)(["\n  display: flex;\n"]))),ne=Z.c.li(c||(c=Object(Y.a)(["\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  border-bottom: 3px solid ",";\n  transition: border-bottom 0.5s ease-in-out;\n  &:hover {\n    border-bottom: 3px solid ",";\n  }\n"])),(function(e){return e.current?"yellow":"transparent"}),(function(e){return e.current?"yellow":"gray"})),re=Object(Z.c)(W.b)(a||(a=Object(Y.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),ie=Object(X.g)((function(e){var t=e.location.pathname;return Object($.jsx)(ee,{children:Object($.jsxs)(te,{children:[Object($.jsx)(ne,{current:"/"===t,children:Object($.jsx)(re,{to:"/",children:"Home"})}),Object($.jsx)(ne,{current:"/tv"===t,children:Object($.jsx)(re,{to:"/tv",children:"TV"})}),Object($.jsx)(ne,{current:"/search"===t,children:Object($.jsx)(re,{to:"/search",children:"Search"})})]})})})),ce=n(11),ae=n.n(ce),oe=n(14),se=n(5),le=n(39),de=n.n(le).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"077990068b6dd97e94e25a6da056562a",language:"en-US"}}),je=function(){return de.get("movie/now_playing")},be=function(){return de.get("movie/upcoming")},ue=function(){return de.get("movie/popular")},pe=function(e){return de.get("search/movie",{params:{query:encodeURIComponent(e)}})},xe=function(e){return de.get("movie/".concat(e),{params:{append_to_response:"videos"}})},he=function(e){return de.get("movie/".concat(e,"/reviews"),{params:{page:1}})},ge=function(){return de.get("tv/top_rated")},Oe=function(){return de.get("tv/popular")},me=function(){return de.get("tv/airing_today")},fe=function(e){return de.get("search/tv",{params:{query:encodeURIComponent(e)}})},ve=function(e){return de.get("tv/".concat(e),{params:{append_to_response:"videos"}})},_e=Z.c.div(o||(o=Object(Y.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]))),we=Z.c.span(s||(s=Object(Y.a)(["\n  font-size: 20px;\n  font-weight: 600;\n"]))),ye=Z.c.div(l||(l=Object(Y.a)(["\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 15px;\n"]))),ke=function(e){var t=e.title,n=e.children;return Object($.jsxs)(_e,{children:[Object($.jsx)(we,{children:t}),Object($.jsx)(ye,{children:n})]})},Se=Z.c.div(d||(d=Object(Y.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n  margin-top: 20px;\n"]))),ze=function(){return Object($.jsx)(Se,{children:Object($.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f0"})})},Ue=Z.c.div(j||(j=Object(Y.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]))),Me=Z.c.span(b||(b=Object(Y.a)(["\n  color: ",";\n  font-size: 25px;\n"])),(function(e){return e.color})),Ne=function(e){var t=e.text,n=e.color;return Object($.jsx)(Ue,{children:Object($.jsx)(Me,{color:n,children:t})})},Re=Z.c.div(u||(u=Object(Y.a)(["\n  font-size: 12px;\n"]))),Te=Z.c.div(p||(p=Object(Y.a)(["\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  background-image: url(",");\n  transition: opacity 0.1s linear;\n"])),(function(e){return e.bgUrl})),Fe=Z.c.span(x||(x=Object(Y.a)(["\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]))),Ie=Z.c.div(h||(h=Object(Y.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),Te,Fe),Ce=Z.c.span(g||(g=Object(Y.a)(["\n  display: block;\n  margin-bottom: 2px;\n"]))),Le=Z.c.span(O||(O=Object(Y.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]))),Pe=function(e){var t=e.id,r=e.imageUrl,i=e.title,c=e.rating,a=e.year,o=e.isMovie,s=void 0!==o&&o;return Object($.jsx)(W.b,{to:s?"/movie/".concat(t):"/show/".concat(t),children:Object($.jsxs)(Re,{children:[Object($.jsxs)(Ie,{children:[Object($.jsx)(Te,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(21).default}),Object($.jsxs)(Fe,{children:[Object($.jsx)("span",{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"}),c,"/10"]})]}),Object($.jsx)(Ce,{children:i&&i.length>18?"".concat(i.substring(0,18),"..."):i}),Object($.jsx)(Le,{children:a})]})})},Ve=n(12),Be=Z.c.div(m||(m=Object(Y.a)(["\n  padding: 20px;\n"]))),Ee=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,i=e.error,c=e.loading;return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Ve.b,{children:Object($.jsx)("title",{children:"Movies | Nomflix"})}),c?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Ve.b,{children:Object($.jsx)("title",{children:"Loading | Nomflix"})}),Object($.jsx)(ze,{})]}):Object($.jsxs)(Be,{children:[t&&t.length>0&&Object($.jsx)(ke,{title:"Now Playing",children:t.map((function(e){return Object($.jsx)(Pe,{id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object($.jsx)(ke,{title:"Upcoming",children:n.map((function(e){return Object($.jsx)(Pe,{id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object($.jsx)(ke,{title:"Popular",children:r.map((function(e){return Object($.jsx)(Pe,{id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),i&&Object($.jsx)(Ne,{color:"#e74c3c",text:i})]})]})},De=function(){var e=Object(A.useState)([]),t=Object(se.a)(e,2),n=t[0],r=t[1],i=Object(A.useState)([]),c=Object(se.a)(i,2),a=c[0],o=c[1],s=Object(A.useState)([]),l=Object(se.a)(s,2),d=l[0],j=l[1],b=Object(A.useState)(null),u=Object(se.a)(b,2),p=u[0],x=u[1],h=Object(A.useState)(!0),g=Object(se.a)(h,2),O=g[0],m=g[1];return Object(A.useEffect)((function(){(function(){var e=Object(oe.a)(ae.a.mark((function e(){var t,n,i,c,a,s;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je();case 3:return t=e.sent,n=t.data.results,e.next=7,be();case 7:return i=e.sent,c=i.data.results,e.next=11,ue();case 11:a=e.sent,s=a.data.results,r(n),o(c),j(s),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),x("Can't find Movie information");case 21:return e.prev=21,m(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object($.jsx)(Ee,{nowPlaying:n,upcoming:a,popular:d,error:p,loading:O})},qe=Z.c.div(f||(f=Object(Y.a)(["\n  padding: 20px;\n"]))),He=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,i=e.error,c=e.loading;return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Ve.a,{children:Object($.jsx)("title",{children:"TV Shows | Nomflix"})}),c?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Ve.a,{children:Object($.jsx)("title",{children:"Loading | Nomflix"})}),Object($.jsx)(ze,{})]}):Object($.jsxs)(qe,{children:[t&&t.length>0&&Object($.jsx)(ke,{title:"Top Rated Shows",children:t.map((function(e){return Object($.jsx)(Pe,{id:e.id,title:e.original_name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object($.jsx)(ke,{title:"Popular Shows",children:n.map((function(e){return Object($.jsx)(Pe,{id:e.id,title:e.original_name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object($.jsx)(ke,{title:"Airing Today",children:r.map((function(e){return Object($.jsx)(Pe,{id:e.id,title:e.original_name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),i&&Object($.jsx)(Ne,{color:"#ff00ff",text:i})]})]})},Je=function(){var e=Object(A.useState)([]),t=Object(se.a)(e,2),n=t[0],r=t[1],i=Object(A.useState)([]),c=Object(se.a)(i,2),a=c[0],o=c[1],s=Object(A.useState)([]),l=Object(se.a)(s,2),d=l[0],j=l[1],b=Object(A.useState)(null),u=Object(se.a)(b,2),p=u[0],x=u[1],h=Object(A.useState)(!0),g=Object(se.a)(h,2),O=g[0],m=g[1];return Object(A.useEffect)((function(){(function(){var e=Object(oe.a)(ae.a.mark((function e(){var t,n,i,c,a,s;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ge();case 3:return t=e.sent,n=t.data.results,e.next=7,Oe();case 7:return i=e.sent,c=i.data.results,e.next=11,me();case 11:a=e.sent,s=a.data.results,r(n),o(c),j(s),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),x("Can't find TV Show information");case 21:return e.prev=21,m(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object($.jsx)(He,{topRated:n,popular:a,airingToday:d,error:p,loading:O})},Ae=Z.c.div(v||(v=Object(Y.a)(["\n  padding: 20px;\n"]))),Ge=Z.c.form(_||(_=Object(Y.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),Ke=Z.c.input(w||(w=Object(Y.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]))),Qe=function(e){var t=e.movieResults,n=e.tvResults,r=e.error,i=e.loading,c=e.searchTerm,a=e.handleSubmit,o=e.updateTerm;return Object($.jsxs)(Ae,{children:[Object($.jsx)(Ve.a,{children:Object($.jsx)("title",{children:"Search | Nomflix"})}),Object($.jsx)(Ge,{onSubmit:a,children:Object($.jsx)(Ke,{placeholder:"Search Movies or TV Shows...",value:c,onChange:o})}),i?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Ve.a,{children:Object($.jsx)("title",{children:"Loading | Nomflix"})}),Object($.jsx)(ze,{})]}):Object($.jsxs)($.Fragment,{children:[t&&t.length>0&&Object($.jsx)(ke,{title:"Movie Results",children:t.map((function(e){return Object($.jsx)(Pe,{id:e.id,title:e.original_title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object($.jsx)(ke,{title:"TV Show Results",children:n.map((function(e){return Object($.jsx)(Pe,{id:e.id,title:e.original_name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4)},e.id)}))}),r&&Object($.jsx)(Ne,{color:"#e74c3c",text:r}),n&&t&&n.length<1&&t<1&&Object($.jsx)(Ne,{text:"Nothing found",color:"#95a5a6"})]})]})},We=function(){var e=Object(A.useState)([]),t=Object(se.a)(e,2),n=t[0],r=t[1],i=Object(A.useState)([]),c=Object(se.a)(i,2),a=c[0],o=c[1],s=Object(A.useState)(""),l=Object(se.a)(s,2),d=l[0],j=l[1],b=Object(A.useState)(null),u=Object(se.a)(b,2),p=u[0],x=u[1],h=Object(A.useState)(!1),g=Object(se.a)(h,2),O=g[0],m=g[1],f=function(){var e=Object(oe.a)(ae.a.mark((function e(t){var n,i,c,a;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,pe(t);case 4:return n=e.sent,i=n.data.results,e.next=8,fe(t);case 8:c=e.sent,a=c.data.results,r(i),o(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),x("Can't find results");case 17:return e.prev=17,m(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,14,17,20]])})));return function(t){return e.apply(this,arguments)}}();return Object($.jsx)(Qe,{movieResults:n,tvResults:a,searchTerm:d,error:p,loading:O,handleSubmit:function(e){e.preventDefault(),""!==d&&f(d)},updateTerm:function(e){var t=e.target.value;j(t)}})},Xe=Z.c.div(y||(y=Object(Y.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 50px;\n"]))),Ye=Z.c.div(k||(k=Object(Y.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n"]))),Ze=Z.c.div(S||(S=Object(Y.a)(["\n  width: 20vw;\n  height: 50vh;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  z-index: 1;\n  border-radius: 5px;\n"])),(function(e){return e.bgImage})),$e=Z.c.div(z||(z=Object(Y.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n"])),(function(e){return e.bgImage})),et=Z.c.div(U||(U=Object(Y.a)(["\n  width: 70%;\n  margin-left: 20px;\n"]))),tt=Z.c.h1(M||(M=Object(Y.a)(["\n  font-size: 32px;\n"]))),nt=Z.c.div(N||(N=Object(Y.a)(["\n  margin: 10px 20px 10px 0;\n"]))),rt=Z.c.span(R||(R=Object(Y.a)([""]))),it=Z.c.a(T||(T=Object(Y.a)(["\n  background-color: #f5c518;\n  border-radius: 5px;\n  border: 1px solid black;\n  color: black;\n  font-size: 1px;\n  font-weight: 600;\n  padding: 2px;\n"]))),ct=Z.c.span(F||(F=Object(Y.a)(["\n  margin: 0 10px;\n"]))),at=Z.c.p(I||(I=Object(Y.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 1.3;\n  width: 100%;\n"]))),ot=Z.c.div(C||(C=Object(Y.a)(["\n  margin: 20px 20px 0 0;\n"]))),st=Z.c.div(L||(L=Object(Y.a)(["\n  width: 100%;\n  display: flex;\n  /* flex-wrap: wrap; */\n  overflow: ",";\n  &::-webkit-scrollbar {\n    /* \uc138\ub85c \uc2a4\ud06c\ub864 \ub113\uc774 */\n    width: 0px;\n    /* \uac00\ub85c \uc2a4\ud06c\ub864 \ub192\uc774 */\n    height: 7px;\n\n    border-radius: 6px;\n    background: rgba(255, 255, 255, 0.5);\n  }\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 0.7);\n    border-radius: 6px;\n  }\n"])),(function(e){return e.len>2?"scroll":"none"})),lt=Z.c.div(P||(P=Object(Y.a)(["\n  margin-top: 40px;\n  z-index: 2;\n  width: 100%;\n  /* height: 20%; */\n  flex-direction: column;\n"]))),dt=Z.c.span(V||(V=Object(Y.a)(["\n  font-size: 24px;\n  border-bottom: 2px solid #f5c518;\n  padding-bottom: 2px;\n"]))),jt=Z.c.div(B||(B=Object(Y.a)(["\n  display: flex;\n  /* margin-top: 5px; */\n"]))),bt=Z.c.div(E||(E=Object(Y.a)(["\n  width: 15vw;\n  height: 15vh;\n  margin-right: 20px;\n  background-image: url(",");\n  background-size: 70%;\n  background-repeat: no-repeat;\n  background-position: center center;\n"])),(function(e){return"https://image.tmdb.org/t/p/w300".concat(e.logoUrl)})),ut=Z.c.div(D||(D=Object(Y.a)(["\n  position: relative;\n  font-size: 13px;\n  top: 50px;\n"]))),pt=Z.c.p(q||(q=Object(Y.a)(["\n  font-size: 15px;\n  font-weight: 500;\n  margin: 20px 0 10px 0px;\n"]))),xt=Z.c.p(H||(H=Object(Y.a)(["\n  opacity: 0.7;\n  margin-bottom: 30px;\n"]))),ht=function(e){var t=e.reviews,r=e.result,i=e.error;return e.loading?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Ve.a,{children:Object($.jsx)("title",{children:"Loading | Nomflix"})}),Object($.jsx)(ze,{})]}):i?Object($.jsx)(Ne,{color:"#ff00ff",text:"Can't find Detail Information"}):Object($.jsxs)(Xe,{children:[Object($.jsx)(Ve.a,{children:Object($.jsx)("title",{children:r.original_name?"".concat(r.original_name," | Nomflix"):"".concat(r.original_title," | Nomflix")})}),Object($.jsx)($e,{bgImage:r.backdrop_path?"https://image.tmdb.org/t/p/original".concat(r.backdrop_path):n(21).default}),Object($.jsxs)(Ye,{children:[Object($.jsx)(Ze,{bgImage:r.poster_path?"https://image.tmdb.org/t/p/original".concat(r.poster_path):n(21).default},r.id),Object($.jsxs)(et,{children:[Object($.jsx)(tt,{children:r.original_title?r.original_title:r.original_name}),Object($.jsxs)(nt,{children:[Object($.jsx)(rt,{children:r.release_date?r.release_date.substring(0,4):r.first_air_date}),Object($.jsx)(ct,{children:"\u25cf"}),Object($.jsxs)(rt,{children:[r.runtime?r.runtime:r.episode_run_time," min"]}),Object($.jsx)(ct,{children:"\u25cf"}),Object($.jsx)(it,{href:"https://www.imdb.com/title/".concat(r.imdb_id,"/"),target:"_blank",children:"IMDB"}),Object($.jsx)(ct,{children:"\u25cf"}),Object($.jsx)(rt,{children:r.genres&&r.genres.map((function(e,t){return t===r.genres.length-1?e.name:"".concat(e.name," / ")}))}),Object($.jsx)(ct,{children:"\u25cf"}),r.production_countries&&r.production_countries.length>0&&r.production_countries.map((function(e,t){return Object($.jsx)("span",{children:e.name})}))]}),Object($.jsx)(at,{children:r.overview}),r.production_companies&&r.production_companies.length&&r.production_companies.length>2&&Object($.jsxs)(lt,{children:[Object($.jsx)(dt,{children:"Companies"}),Object($.jsx)(jt,{children:r.production_companies&&r.production_companies.length>1&&r.production_companies.map((function(e,t){if(null!==e.logo_path&&t<4)return Object($.jsx)(bt,{logoUrl:e.logo_path},e.id)}))})]}),r.videos&&r.videos.results&&r.videos.results.length>=1&&Object($.jsx)(st,{len:r.videos.results.length,children:r.videos.results.map((function(e){return Object($.jsx)(ot,{children:Object($.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(e.key),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},e.key)})}))})]})]}),t&&0!==t.length&&Object($.jsxs)(ut,{children:[Object($.jsx)(dt,{children:"Reviews"}),t&&t.length>0&&t.map((function(e){return Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(pt,{children:["- ",e.author]}),Object($.jsxs)(xt,{children:['" ',e.content,' "']})]})}))]})]})},gt=function(e){var t=e.location.pathname,n=Object(A.useState)(t.includes("/movie/")),r=Object(se.a)(n,2),i=r[0],c=(r[1],Object(A.useState)([])),a=Object(se.a)(c,2),o=a[0],s=a[1],l=Object(A.useState)([]),d=Object(se.a)(l,2),j=d[0],b=d[1],u=Object(A.useState)(null),p=Object(se.a)(u,2),x=p[0],h=p[1],g=Object(A.useState)(!0),O=Object(se.a)(g,2),m=O[0],f=O[1];return Object(A.useEffect)((function(){(function(){var t=Object(oe.a)(ae.a.mark((function t(){var n,r,c,a,o,l,d,j;return ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.match.params.id,r=e.history.push,c=parseInt(n),!isNaN(c)){t.next=4;break}return t.abrupt("return",r("/"));case 4:if(a=null,t.prev=5,!i){t.next=19;break}return t.next=9,xe(c);case 9:return o=t.sent,a=o.data,t.next=13,he(c);case 13:l=t.sent,d=l.data.results,b(d),console.log(d),t.next=23;break;case 19:return t.next=21,ve(c);case 21:j=t.sent,a=j.data;case 23:t.next=28;break;case 25:t.prev=25,t.t0=t.catch(5),h("Cant find anything");case 28:return t.prev=28,f(!1),s(a),t.finish(28);case 32:case"end":return t.stop()}}),t,null,[[5,25,28,32]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object($.jsx)(ht,{reviews:j,result:o,error:x,loading:m})},Ot=function(){return Object($.jsx)(W.a,{children:Object($.jsxs)($.Fragment,{children:[Object($.jsx)(ie,{}),Object($.jsxs)(X.d,{children:[Object($.jsx)(X.b,{path:"/",exact:!0,component:De}),Object($.jsx)(X.b,{path:"/tv",component:Je}),Object($.jsx)(X.b,{path:"/search",component:We}),Object($.jsx)(X.b,{path:"/movie/:id",component:gt}),Object($.jsx)(X.b,{path:"/show/:id",component:gt}),Object($.jsx)(X.a,{from:"*",to:"/"})]})]})})},mt=n(42),ft=Object(Z.a)(J||(J=Object(Y.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n       box-sizing: border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 12px;\n        background-color: rgba(20, 20, 20, 1);\n        color: white;\n        padding-top: 50px;\n    }\n"])),mt.a),vt=function(){return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(Ot,{}),Object($.jsx)(ft,{})]})};Q.a.render(Object($.jsx)(G.a.StrictMode,{children:Object($.jsx)(vt,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.cf790de2.chunk.js.map