!function(t){function e(e){for(var o,a,r=e[0],l=e[1],u=e[2],d=0,h=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(c&&c(e);h.length;)h.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],o=!0,r=1;r<s.length;r++){var l=s[r];0!==n[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=s[0]))}return t}var o={},n={app:0},i=[];function a(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=o,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(s,o,function(e){return t[e]}.bind(null,o));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;i.push([0,"chunk-vendors"]),s()}({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("85ec");s.n(o).a},2033:function(t,e,s){},"4cdd":function(t){t.exports=JSON.parse("[[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]]")},"518f":function(t,e,s){"use strict";var o=s("2033");s.n(o).a},"56d7":function(t,e,s){"use strict";s.r(e),s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),n=s("d4ec"),i=s("bee2"),a=s("262e"),r=s("2caf"),l=new(function(t){Object(a.a)(s,t);var e=Object(r.a)(s);function s(t){var o;return Object(n.a)(this,s),(o=e.call(this)).id="",o.host=t,o.connect(),o}return Object(i.a)(s,[{key:"connect",value:function(){var t=this;this.ws=new WebSocket(this.host),this.ws.onmessage=function(e){var s=JSON.parse(e.data);t.emit(s.event,s.data)},this.ws.onopen=function(e){console.log("onopen",e);var s=localStorage.getItem("user_id");t.initUser(s),t.emit("open")},this.ws.onclose=function(e){console.log("onclose",e),setTimeout((function(){t.connect(t.host)}),1e3)},this.ws.onerror=function(e){console.error(e),t.ws.close(),t.emit("close")}}},{key:"initGame",value:function(t){this.id=t,this.message({event:"game",id:t,data:{id:t}})}},{key:"startGame",value:function(t){this.id=t,this.message({event:"start_game",id:t,data:{id:t}})}},{key:"getGame",value:function(t){this.id=t,this.message({event:"get_game",id:t,data:{id:t}})}},{key:"initUser",value:function(t){this.message({event:"user",data:{id:t}})}},{key:"updateUser",value:function(t){this.message({event:"update_user",data:t})}},{key:"updateGameBoard",value:function(t){this.message({event:"update_game_board",data:t})}},{key:"resetGameBoard",value:function(){this.message({id:this.id,event:"reset_game_board",data:null})}},{key:"skipTurn",value:function(){this.message({event:"skip_turn",id:this.id,data:null})}},{key:"makeMove",value:function(t){this.message({event:"make_move",id:this.id,data:t})}},{key:"message",value:function(t){this.ws.send(JSON.stringify(t))}}]),s}((s("c975"),s("a434"),function(){function t(){Object(n.a)(this,t),this.onListeners={}}return Object(i.a)(t,[{key:"on",value:function(t,e){this.onListeners[t]||(this.onListeners[t]=[]),this.onListeners[t].push(e)}},{key:"off",value:function(t,e){if(this.onListeners[t]){var s=this.onListeners[t].indexOf(e);s>-1&&this.onListeners[t].splice(s,1)}}},{key:"emit",value:function(t,e){if(this.onListeners[t])for(var s=1*this.onListeners[t].length,o=0;o<s;o++)this.onListeners[t]&&this.onListeners[t][o]&&this.onListeners[t][o](e)}},{key:"reset",value:function(){this.onListeners={}}}]),t}())))("wss://rummikub-server.kylehengst.com"),u={data:function(){return{connected:!1,touch:!1,registered:!1}},beforeMount:function(){var t=this;console.log(l),this.touch="ontouchstart"in document.documentElement,this.touch&&this.$store.commit("setEventTypes",{down:"touchstart",move:"touchmove",up:"touchend"}),this.$store.commit("setTouch",this.touch),l.on("open",(function(){t.connected=!0})),l.on("close",(function(){console.log("close"),t.connected=!1}))},methods:{}},c=(s("034f"),s("2877")),d=Object(c.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{desktop:!t.touch},attrs:{id:"app"}},[t.connected?s("router-view"):s("div",{staticClass:"connecting py-5"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t._v(" Connecting... ")])])]),s("div",{attrs:{id:"modals"}},[s("div",{staticClass:"modal fade",class:{show:t.$store.state.modal,"d-block":t.$store.state.modal},attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t.$store.state.modalTitle?s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(" "+t._s(t.$store.state.modalTitle)+" ")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.$store.commit("closeModal")}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]):t._e(),t.$store.state.modalBody?s("div",{staticClass:"modal-body"},[t._v(" "+t._s(t.$store.state.modalBody)+" ")]):t._e(),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.$store.commit("closeModal")}}},[t._v(" Close ")])])])])]),t.$store.state.modal?s("div",{staticClass:"modal-backdrop fade show",on:{click:function(e){return t.$store.commit("closeModal")}}}):t._e()]),s("audio",{attrs:{src:"/sound/cardPlace.mp3",id:"cardPlace"}}),s("audio",{attrs:{src:"/sound/bell.mp3",id:"bell"}}),s("audio",{attrs:{src:"/sound/alert.mp3",id:"alert"}})],1)}),[],!1,null,null,null).exports,h=s("8c4f"),m=(s("99af"),s("7db0"),s("b0c0"),s("96cf"),s("1da1")),f=(s("4160"),s("159b"),{props:["config","row","col","user","disabled"],data:function(){return{touchIndex:0,dragging:!1,startX:0,startY:0,offsetX:0,offsetY:0,left:0,top:0,eventTypes:{down:"mousedown",move:"mousemove",up:"mouseup"}}},computed:{style:function(){return this.dragging?{left:this.left+this.offsetX+"px",top:this.top+this.offsetY+"px"}:{}}},beforeMount:function(){this.$store.state.touch&&(this.eventTypes.down="touchstart",this.eventTypes.move="touchmove",this.eventTypes.up="touchend")},destroyed:function(){this.$refs.tile&&this.$refs.tile.removeEventListener(this.eventTypes.down,this.onMouseDown)},mounted:function(){this.$refs.tile.addEventListener(this.eventTypes.down,this.onMouseDown)},methods:{getTouchIndex:function(t){var e=this,s=-1;if(this.$store.state.touch){if(!t.touches.length)return-2;t.touches.forEach((function(t,o){t.target==e.$refs.tile&&(s=o)}))}return s},onMouseDown:function(t){if(console.log(t),!this.disabled){this.touchIndex=this.getTouchIndex(t),this.offsetX=0,this.offsetY=0;var e=this.$store.state.touch?t.touches[this.touchIndex].clientX:t.x,s=this.$store.state.touch?t.touches[this.touchIndex].clientY:t.y;this.startX=e,this.startY=s;var o=t.target.getBoundingClientRect();this.left=o.left,this.top=o.top,window.addEventListener(this.eventTypes.up,this.onMouseUp),window.addEventListener(this.eventTypes.move,this.onMouseMove),this.$emit("startdrag",this.config,{row:this.row,col:this.col,touchIndex:this.touchIndex,id:this._uid}),this.dragging=!0,t.stopPropagation(),t.preventDefault()}},onMouseMove:function(t){if(this.touchIndex=this.getTouchIndex(t),!(this.$store.state.touch&&this.touchIndex<0)){var e=this.$store.state.touch?t.touches[this.touchIndex].clientX:t.x,s=this.$store.state.touch?t.touches[this.touchIndex].clientY:t.y;this.offsetX=e-this.startX,this.offsetY=s-this.startY,this.$emit("drag",this.config,{row:this.row,col:this.col,touchIndex:this.touchIndex,id:this._uid,x:e,y:s})}},onMouseUp:function(t){t.target==this.$refs.tile&&this.dragging&&(console.log("onMouseUp"),this.dragging=!1,window.removeEventListener(this.eventTypes.up,this.onMouseUp),window.removeEventListener(this.eventTypes.move,this.onMouseMove),this.$emit("stopdrag",this.config,{row:this.row,col:this.col,touchIndex:this.touchIndex,id:this._uid}))}}}),g=(s("518f"),Object(c.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"tile",staticClass:"tile",class:{dragging:t.dragging},style:t.style},[s("div",{class:t.config.color},[t.config.isJoker?s("span",[s("img",{attrs:{src:"/img/joker.png",alt:""}})]):s("span",[t._v(t._s(t.config.score))])])])}),[],!1,null,"6a465335",null)).exports,p={name:"Home",components:{Tile:g},data:function(){return{newGame:"",game:"",registered:!1,user:"",prompt:!1,shareGame:""}},created:function(){var t=this;this.$workbox&&this.$workbox.addEventListener("waiting",(function(){t.prompt=!0}))},mounted:function(){l.on("game",this.onGame),l.on("user",this.onUser);var t=localStorage.getItem("user_id");l.initUser(t),this.newGame=this.$route.query.share||""},destroyed:function(){l.off("game",this.onGame),l.off("user",this.onUser)},computed:{yourGames:function(){return this.$store.state.savedGames.concat().sort((function(t,e){var s=t.state.created||0,o=e.state.created||0;return o>s?1:o<s?-1:0}))}},methods:{upgrade:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.prompt=!1,e.next=3,t.$workbox.messageSW({type:"SKIP_WAITING"});case 3:case"end":return e.stop()}}),e)})))()},startNewGame:function(){this.newGame&&(this.game=this.newGame,l.initGame(this.game))},startGame:function(t){this.game=t.id,l.initGame(this.game)},updateUser:function(){this.user&&(l.updateUser({name:this.user}),this.$store.commit("setUserName",this.user),this.registered=!0)},getWiner:function(t){var e=t.state.winningUser,s=t.users.find((function(t){if(t.id==e)return!0}));return s?s.name:""},onUser:function(t){console.log("onUser",t),localStorage.setItem("user_id",t.id),t.name&&(this.registered=!0),this.$store.commit("setUserId",t.id),this.$store.commit("setUserName",t.name),this.$store.commit("setGames",t.games)},onGame:function(t){console.log(t),t.game.started?this.$router.push({name:"Game",params:{id:this.game}}):this.$router.push({name:"Lobby",params:{id:this.game}})}}},v=(s("e0c6"),Object(c.a)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container py-5",attrs:{id:"home"}},[s("div",{staticClass:"mb-5"},[s("div",{staticClass:"d-flex"},[s("Tile",{attrs:{disabled:!0,config:{color:"red",score:"R"},row:0,col:0}}),s("Tile",{attrs:{disabled:!0,config:{color:"red",score:"u"},row:0,col:0}}),s("Tile",{attrs:{disabled:!0,config:{color:"red",score:"m"},row:0,col:0}}),s("Tile",{attrs:{disabled:!0,config:{color:"red",score:"m"},row:0,col:0}}),s("Tile",{attrs:{disabled:!0,config:{color:"red",score:"i"},row:0,col:0}}),s("Tile",{attrs:{disabled:!0,config:{color:"red",score:"k"},row:0,col:0}}),s("Tile",{attrs:{disabled:!0,config:{color:"red",score:"u"},row:0,col:0}}),s("Tile",{attrs:{disabled:!0,config:{color:"red",score:"b"},row:0,col:0}}),s("Tile",{attrs:{disabled:!0,config:{color:"black",score:"i",isJoker:!0},row:0,col:0}})],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"-card -bg-primary"},[s("div",{staticClass:"-card-body"},[t.registered?s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.startNewGame(e)}}},[s("h3",{staticClass:"mb-3"},[t._v("Create or join a game")]),s("div",{staticClass:"input-group input-group-lg mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newGame,expression:"newGame"}],staticClass:"form-control",attrs:{placeholder:"Game Name",type:"text"},domProps:{value:t.newGame},on:{input:function(e){e.target.composing||(t.newGame=e.target.value)}}})]),s("button",{staticClass:"btn btn-success btn-lg"},[t._v("Go")])])]):s("form",{on:{submit:function(e){return e.preventDefault(),t.updateUser(e)}}},[s("div",{staticClass:"form-group"},[s("label",[t._v("What is your name?")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],staticClass:"form-control input-lg",attrs:{type:"text"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}})]),s("button",{staticClass:"btn btn-primary"},[t._v("Submit")])])])])]),s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"d-block d-sm-none pb-3"}),t.yourGames.length?s("div",{staticClass:"-card"},[s("div",{staticClass:"-card-body"},[s("h3",{staticClass:"mb-3"},[t._v("Your Games")]),s("div",{staticClass:"list-group"},t._l(t.yourGames,(function(e,o){return s("a",{key:o,staticClass:"list-group-item list-group-item-action bg-success",attrs:{href:"#"},on:{click:function(s){return t.startGame(e)}}},[s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("h4",{staticClass:"text-dark mb-3"},[s("strong",[t._v(t._s(e.id))])])]),s("div",{staticClass:"d-flex"},[s("div",t._l(e.users,(function(e,o){return s("span",{key:o,staticClass:"bg-dark rounded px-2 py-1 mr-1"},[t._v(" "+t._s(e.name)+" ")])})),0),s("div",{staticClass:"flex-fill"}),e.state.end?s("h4",{staticClass:"text-white mb-0"},[s("strong",[t._v(" "+t._s(e.state.users[e.state.winningUser].name)+" wins! ")])]):t._e()])])})),0)])]):t._e()])]),s("div",[s("div",{staticClass:"d-block d-sm-none pb-3"}),s("div",[t._v("Version 0.8")]),t.prompt?s("div",{staticClass:"mt-3"},[s("button",{staticClass:"btn btn-sm btn-secondary",on:{click:t.upgrade}},[t._v(" Click here to update ")])]):t._e()])])}),[],!1,null,"3d4311b1",null)).exports,b={name:"Lobby",data:function(){return{gameId:"",started:!1,users:[]}},mounted:function(){this.$store.state.userId?(this.gameId=this.$route.params.id,l.on("game",this.onGame),l.on("game_started",this.onGameStarted),l.on("new_user",this.onNewUser),l.getGame(this.$route.params.id)):this.$router.push({name:"Home"})},destroyed:function(){l.off("game",this.onGame),l.off("game_started",this.onGameStarted),l.off("new_user",this.onNewUser)},methods:{onGameStarted:function(){this.gotoGame()},onNewUser:function(t){this.users=t.users},onGame:function(t){console.log("onGameUsers",t),t.game&&t.users.length?t.game.started?this.gotoGame():this.users=t.users:this.$router.push({name:"Home"})},start:function(){l.startGame(this.$route.params.id)},gotoGame:function(){this.$router.push({name:"Game",params:{id:this.$route.params.id}})},shareGame:function(){location.href="mailto:?subject=Lets play Rummikub&body=".concat(location.origin,"/?share=").concat(this.gameId)}}},w=(s("e459"),Object(c.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container py-5",attrs:{id:"lobby"}},[s("h3",{staticClass:"mb-3"},[t._v(t._s(t.gameId))]),s("p",{staticClass:"lead"},[t._v("Waiting for players")]),s("ul",{staticClass:"list-group"},t._l(t.users,(function(e,o){return s("li",{key:o,staticClass:"list-group-item bg-success"},[s("h4",{staticClass:"mb-0"},[t._v(t._s(e.name))]),t._v(" has joined ")])})),0),s("div",{staticClass:"pb-3"}),s("div",{staticClass:"d-flex"},[s("button",{staticClass:"btn  btn-lg",class:{"btn-info":!t.users.length,"btn-dark":t.users.length>1},on:{click:function(e){return t.shareGame()}}},[t._v(" Share game ")]),s("div",{staticClass:"flex-fill"}),t.users.length>1?s("button",{staticClass:"btn btn-info btn-lg",on:{click:function(e){return t.start()}}},[t._v(" Play ")]):t._e()]),s("hr"),s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-dark",on:{click:function(e){return t.$router.push({name:"Home"})}}},[t._v(" Return to Home ")])])])}),[],!1,null,"1d8c09be",null)).exports;s("c740");var y={playSound:function(t){var e=new Audio;(e=document.getElementById(t)).currentTime=0,e.play()}},_=s("4cdd");function k(){return _}var C={name:"Game",components:{Tile:g},data:function(){return{board:[],shelf:k(),user:null,grid:[],dragging:!1,boardRow:-1,boardCol:-1,shelfRow:-1,shelfCol:-1,boardHeight:0,tileSlot:[],users:[],gameId:"",currentUser:"",modal:!1,modalBody:""}},beforeMount:function(){this.$store.state.userId?(console.log("beforeMount"),this.gameId=this.$route.params.id,l.on("game",this.onGame),l.on("reset",this.onReset),l.on("game_board_updated",this.onGameBoard),l.on("reset_game_board",this.onGameBoardReset),l.on("new_tile",this.onNewTile),l.on("invalid_move",this.onInvalidMove),l.on("winner",this.onWinner),l.getGame(this.gameId)):this.$router.push({name:"Home"})},mounted:function(){window.addEventListener("resize",this.onResize),this.onResize()},destroyed:function(){window.removeEventListener("resize",this.onResize),l.off("game",this.onGame),l.off("reset",this.onReset),l.off("game_board_updated",this.onGameBoard),l.off("reset_game_board",this.onGameBoardReset),l.off("new_tile",this.onNewTile),l.off("invalid_move",this.onInvalidMove),l.off("winner",this.onWinner)},computed:{yourTurn:function(){if(!this.game||!this.game.end)return this.currentUser==this.$store.state.userId}},methods:{onReset:function(){this.$router.push({name:"Home"})},onResize:function(){this.boardHeight=this.$refs.board.clientHeight},onGame:function(t){console.log(t),!t.game||t.users.length<2?this.$router.push({name:"Lobby",params:{id:this.gameId}}):(this.game=JSON.parse(JSON.stringify(t.game)),this.board=t.game.board,this.users=t.users,this.currentUser=t.game.end?"":t.game.currentUser,t.update?this.currentUser==this.$store.state.userId&&y.playSound("bell"):(this.setUserTiles(t.game.users),this.shelfSnapshot=JSON.parse(JSON.stringify(this.shelf))))},onGameBoard:function(t){console.log("onGameBoard",t),t.update&&this.board[t.update.row].splice(t.update.col,1,t.update.tile),t.remove&&this.board[t.remove.row].splice(t.remove.col,1,null),y.playSound("cardPlace")},onGameBoardReset:function(){console.log("onGameBoardReset"),this.resetBoard(!0)},onNewTile:function(t){console.log(t);var e=this.shelf[1].findIndex((function(t){return null===t}));this.shelf[1].splice(e,1,t.tile),this.shelfSnapshot=JSON.parse(JSON.stringify(this.shelf))},onInvalidMove:function(){this.$store.commit("setModal",{title:"Invalid move"}),y.playSound("alert")},onWinner:function(t){this.$store.commit("setModal",{title:"".concat(t.winner.name," wins!")})},setUserTiles:function(t){console.log("setUserTiles");var e=k(),s=JSON.parse(JSON.stringify(t[this.$store.state.userId].tiles));e[0].splice(0,s.length),e[0]=s.concat(e[0]),this.shelf=e},takeSnapshot:function(){this.snapshot=JSON.parse(JSON.stringify({game:this.game,shelf:this.shelf}))},resetShelf:function(){var t=this;this.board.forEach((function(e){e.forEach((function(e){e&&e.isOwn&&(e.board=!1,t.onNewTile({tile:e}))}))}))},resetBoard:function(){this.resetShelf(),l.resetGameBoard()},skipTurn:function(){this.currentUser="",this.resetShelf(),l.skipTurn()},makeMove:function(){var t=[];this.shelf.forEach((function(e){e.forEach((function(e){e&&t.push(e)}))})),l.makeMove({board:this.board,tiles:t})},onStartDrag:function(t,e){console.log(t,e)},onDragging:function(t,e){var s=this,o=e.x,n=e.y,i=o+this.$refs.board.scrollLeft,a=n+this.$refs.board.scrollTop,r=0,l=0,u=!1,c=!1,d=this.board;n>this.boardHeight&&(c=!0,d=this.shelf,i=o+this.$refs.shelf.scrollLeft,a=n+this.$refs.shelf.scrollTop,l=this.boardHeight),d.forEach((function(t,o){u||(r=0,t.forEach((function(t,n){if(!u)return i>=r&&i<=r+52&&a>=l&&a<=l+82?(s.$set(s.tileSlot,e.id,{row:o,col:n,shelf:c}),void(u=!0)):void(r+=52)})),l+=82)}))},onStopDrag:function(t,e){var s=this.tileSlot[e.id];console.log(t,s),s&&(s.shelf?this.updateShelf(t,e,s):this.updateBoard(t,e,s),this.$set(this.tileSlot,e.id,null),y.playSound("cardPlace"))},updateBoard:function(t,e,s){var o;!this.board[s.row][s.col]&&this.yourTurn&&(this.board[s.row].splice(s.col,1,t),t.board?(this.board[e.row].splice(e.col,1,null),o={row:e.row,col:e.col}):(t.board=!0,this.shelf[e.row].splice(e.col,1,null)),l.updateGameBoard({id:this.gameId,update:{row:s.row,col:s.col,tile:t},remove:o}))},updateShelf:function(t,e,s){t.board&&!t.isOwn||this.shelf[s.row][s.col]||(console.log("updateShelf",t,s),this.shelf[s.row].splice(s.col,1,t),t.board?(this.board[e.row].splice(e.col,1,null),t.board=!1,l.updateGameBoard({id:this.gameId,remove:{row:e.row,col:e.col,tile:t},update:null})):this.shelf[e.row].splice(e.col,1,null))},getTouchIndex:function(t){var e=-1;return t.touches.forEach((function(s,o){s.target==t.target&&(e=o)})),e},doHighlightTileSlot:function(t,e,s){return!!this.tileSlot.find((function(o){if(o)return o.row==t&&o.col==e&&o.shelf==s}))}}},$=(s("e37e"),Object(c.a)(C,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{dragging:t.dragging},attrs:{id:"game"}},[s("div",{ref:"board",attrs:{id:"board"}},[s("div",{attrs:{id:"tiles"}},t._l(t.board,(function(e,o){return s("div",{key:o,staticClass:"tile-row"},t._l(e,(function(e,n){return s("div",{key:n,staticClass:"tile-slot",class:{"tile-slot-highlight":t.doHighlightTileSlot(o,n,!1)},attrs:{"data-row":o,"data-col":n}},[e?s("Tile",{attrs:{config:e,row:o,col:n,disabled:!t.yourTurn},on:{startdrag:t.onStartDrag,drag:t.onDragging,stopdrag:t.onStopDrag}}):t._e()],1)})),0)})),0)]),s("div",{ref:"shelf",attrs:{id:"user"}},t._l(t.shelf,(function(e,o){return s("div",{key:o,staticClass:"tile-row"},t._l(e,(function(e,n){return s("div",{key:n,staticClass:"tile-slot tile-slot-shelf",class:{"tile-slot-highlight":t.doHighlightTileSlot(o,n,!0)},attrs:{"data-row":o,"data-col":n}},[e?s("Tile",{attrs:{config:e,row:o,col:n,user:!0},on:{startdrag:t.onStartDrag,drag:t.onDragging,stopdrag:t.onStopDrag}}):t._e()],1)})),0)})),0),s("div",{attrs:{id:"users"}},t._l(t.users,(function(e,o){return s("div",{key:o,staticClass:"button mr-2",class:{active:t.currentUser==e.id}},[t._v(" "+t._s(e.name)+" ")])})),0),s("div",{attrs:{id:"actions"}},[s("div",{staticClass:"button",on:{click:function(e){return t.$router.push({name:"Home"})}}},[t._v("Home")]),t.yourTurn?s("div",{staticClass:"button ml-3",on:{click:function(e){return t.resetBoard()}}},[t._v("Reset")]):t._e(),t.yourTurn?s("div",{staticClass:"button ml-3",on:{click:function(e){return t.skipTurn()}}},[t._v("Skip")]):t._e(),t.yourTurn?s("div",{staticClass:"button ml-5",on:{click:function(e){return t.makeMove()}}},[t._v("Play")]):t._e()])])}),[],!1,null,"a1b7e334",null)).exports;o.default.use(h.a);var G=[{path:"/",name:"Home",component:v},{path:"/lobby/:id",name:"Lobby",component:w},{path:"/game/:id",name:"Game",component:$}],T=new h.a({mode:"history",base:"/",routes:G}),x=s("2f62");o.default.use(x.a);var S,I=new x.a.Store({state:{touch:!1,eventTypes:{down:"mousedown",move:"mousemove",up:"mouseup"},userName:"",userId:"",modal:!1,modalTitle:"",modalBody:"",savedGames:[]},mutations:{setEventTypes:function(t,e){t.eventTypes=e},setTouch:function(t,e){t.touch=e},setUserName:function(t,e){t.userName=e},setUserId:function(t,e){t.userId=e},setModal:function(t,e){t.modalTitle=e.title||"",t.modalBody=e.body||"",t.modal=!0},closeModal:function(t){t.modal=!1},setGames:function(t,e){t.savedGames=e}},actions:{},modules:{}}),O=s("acfa");"serviceWorker"in navigator?((S=new O.a("".concat("/","service-worker.js"))).addEventListener("controlling",(function(t){console.log("controlling",t),window.location.reload()})),S.addEventListener("message",(function(t){console.log("message",t)})),S.register()):S=null;var M=S,U=(s("7588"),s("c944"),s("2b88")),L=s.n(U);o.default.use(L.a),o.default.config.productionTip=!1,o.default.prototype.$workbox=M,new o.default({router:T,store:I,render:function(t){return t(d)}}).$mount("#app")},6921:function(t,e,s){},7484:function(t,e,s){},7588:function(t,e,s){},"85ec":function(t,e,s){},"990b":function(t,e,s){},c944:function(t,e,s){},e0c6:function(t,e,s){"use strict";var o=s("990b");s.n(o).a},e37e:function(t,e,s){"use strict";var o=s("6921");s.n(o).a},e459:function(t,e,s){"use strict";var o=s("7484");s.n(o).a}});