"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{360:function(e,t,s){s.d(t,{Z:function(){return c}});var n=s(7689),i=s(6731),r={cardList:"MoviesList_cardList__8c+Gu",movieCard:"MoviesList_movieCard__5oYAG",movieTitle:"MoviesList_movieTitle__9VXBM"},a=s(184),c=function(e){var t=e.response,s=(0,n.TH)();return(0,a.jsx)("ul",{className:r.movieList,children:t.results.map((function(e){return(0,a.jsx)("li",{className:r.movieCard,children:(0,a.jsxs)(i.rU,{to:"/movies/".concat(e.id),state:{from:s},children:[(0,a.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):"https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496_1280.png",alt:e.title}),(0,a.jsx)("h3",{className:r.movieTitle,children:e.title})]})},e.id)}))})}},2731:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var n=s(885),i=s(360),r={},a=s(2791),c=s(2834),o=s(7596),u=s(6731),l=s(184),m=function(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),s=t[0],m=t[1],h=(0,u.lr)({}),d=(0,n.Z)(h,2),v=d[0],p=d[1],f=(0,a.useState)(""),_=(0,n.Z)(f,2),x=_[0],j=_[1],g=v.get("query");(0,a.useEffect)((function(){g&&(0,c.bI)(g).then().then(m)}),[g]),(0,a.useEffect)((function(){x&&(0,c.bI)(x).then().then(m)}),[v]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("section",{className:r.moviePage,children:(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x?p({query:x}):o.Am.warn("Please, enter movie name")},className:r.searchForm,children:[(0,l.jsx)("input",{className:r.inputQuery,type:"text",placeholder:"Search...",value:x,onChange:function(e){j(e.currentTarget.value)}}),(0,l.jsx)("button",{type:"submit",className:r.searchButton,children:" SEARCH"})]})}),(0,l.jsxs)("section",{children:[s&&0===s.total_results&&(0,l.jsx)("h2",{children:"There are no movies matching your search"}),s&&(0,l.jsx)(i.Z,{response:s})]})]})}}}]);
//# sourceMappingURL=movies-page.9464fa39.chunk.js.map