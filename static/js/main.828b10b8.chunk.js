(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{42:function(e,t,n){e.exports=n(85)},47:function(e,t,n){},77:function(e,t){},85:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),o=n(13),r=n.n(o),i=(n(47),n(1)),c=n(3),l=n(4),u=n(5),d=function e(){var t=this;Object(i.a)(this,e),this._id=1e5*Math.random()*Math.random(),this.from="",this.to="",this.body="",this.status=e.SENDING,this.sentTimeDate=Date.now(),this.seenTimeDate=null,this.type=e.TEXT,this.chatType="single",this.setAttributes=function(e,n,s){return t.from=e,t.to=n,t.body=s,t},this.setValue=function(e){return t._id=e._id,t.from=e.from,t.to=e.to,t.body=e.body,t.status=e.status,t.type=e.type,t},this.setAsGroupMessage=function(){return t.chatType="group",t}};d.TEXT="TEXT",d.VIDEO="VIDEO",d.IMAGE="IMAGE",d.SENDING="gray",d.SENT="black",d.RECIEVED="yellow",d.SEEN="#0D4330";var h=d,f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.message?this.props.message:(new h).setAttributes("","a","abasdfasdf asdfasdfasdfs dfasdfasdfasdf asdfasdfasdfasd fasdfasdfasd fasdfasdfc dedfsadf"),t=this.props.cid===e.from,n=t?"#F2F3F8":"#5BBC93",s=t?"#5BBC93":"#F2F3F8",o=t?"right":"left";return a.a.createElement("div",{style:{width:"100%",float:"left"}},a.a.createElement("div",{style:{display:"block",minWidth:"40%",maxWidth:"70%",float:o,backgroundColor:n,padding:10,marginTop:5}},a.a.createElement("span",{style:{color:s}}," ",e.body),a.a.createElement("span",{style:{float:"right",color:e.status}}," "+new Date(e.sentTimeDate).toLocaleTimeString()," o")))}}]),n}(s.Component),g=n(39),m=n.n(g),p=function e(){var t=this;Object(i.a)(this,e),this.socket=null,this.dataHandler=null,this.ackEmitter=null,this.ackEmitters=null,this.cid=null,this.connect=function(e,n,s,a){t.cid=e,t.dataHandler=n,t.ackEmitter=s,t.ackEmitters=a,t.socket=m()("localhost:5000",{query:{cid:e}}),t.send=function(e){console.log("EMIT ON SENT"),t.socket.emit("onMessageSent",{query:{message:e}},(function(e){t.ackEmitter(e.message,h.SENT)})),console.log("onSentCalled"),t.dataHandler(e)},t.markSeen=function(e,n){t.socket.emit("onMarkSeenSent",{query:{messages:e,to:n,from:t.cid}},(function(s){t.ackEmitters(e,n,h.SEEN)}))},t.socket.on("onRecieveMessage",(function(e){console.log("onRecieve: called");var n=e.query;t.socket.emit("onRecievedAckSend",{query:{message:{_id:n.message._id,to:n.message.to,from:n.message.from}}}),t.dataHandler(n.message)})),t.socket.on("onRecievedAck",(function(e){t.ackEmitter(e.query.message,h.RECIEVED)})),t.socket.on("onMarkSeen",(function(e){t.ackEmitters(e.query.messages,e.query.from,h.SEEN)})),t.socket.on("connect",(function(){console.log("STATUS: CONNECTED")})),t.socket.on("connect_error",(function(e){console.log("CONNECT: ERROR"),console.log(e)})),t.socket.on("connect_timeout",(function(e){console.log("CONNECT: TIMEOUT"),console.log(e)})),t.socket.on("disconnect",(function(e){"io server disconnect"===e&&t.socket.connect()})),t.socket.on("reconnect",(function(e){console.log("SOCKET: RECONNECTED"),console.log(e)})),t.socket.on("reconnect_attempt",(function(e){console.log("RECONNECT ATTEMPTS"),console.log(e)})),t.socket.on("reconnecting",(function(e){console.log("RECONNECTING...")})),t.socket.on("reconnect_error",(function(e){console.log("RECONNECT ERROR")}))}},E=n(2),C=n(14),y=function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{_id:"",username:""};Object(i.a)(this,e),this.cid=n._id,this.title=n.username,this.user=n,this.messages=[],this.selected=!1,this.unseenCount=0,this.lastMessage=new h,this.chatType="single",this.setAttributes=function(e,s){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t.user=n,t.cid=n._id,t.title=n.username,t.messages=e,t.selected=s,t.unseenCount=a,t},this.setValue=function(e){return t.cid=e.cid,t.user=e.user,t.messages=e.messages,t.selected=e.selected,t.unseenCount=e.unseenCount,t}},v=function e(){var t=this;Object(i.a)(this,e),this._id="",this.username="",this.setAttributes=function(e,n){return t._id=e,t.username=n,t}},b=function e(t){var n=this;Object(i.a)(this,e),this.cid=t,this.title="Group Chat",this.users=[],this.messages=[],this.selected=!1,this.unseenCount=0,this.lastMessage=new h,this.chatType="group",this.setAttributes=function(e,t,s){return setTimeout((function(){return H(n.cid)}),500),n.users=e,n.messages=t,n.selected=s,n},this.setValue=function(e){return n}},T={Chat:[new y((new v).setAttributes("A","atamuhiuldin")).setAttributes([],!1),new y((new v).setAttributes("B","salman")).setAttributes([],!1),new y((new v).setAttributes("C","dawood")).setAttributes([],!1),new b("ABC").setAttributes(["A","B","C"],[],!1),new b("CDB").setAttributes(["A","B","C"],[],!1)],user:{_id:"",username:""}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(C.a)({},T),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_CHAT_DATA_COLLECTOR":var n=t.payload.message,s="group"===n.chatType?n.to:n.from;if(n.from!==e.user._id){console.log("=========user data collection========"),console.log(n);var a=e.Chat.findIndex((function(e){return e.cid===s}));a>=0?(e.Chat[a].messages.push(n),e.Chat[a].lastMessage=n,e.Chat.sort((function(e,t){return t.lastMessage.sentTimeDate-e.lastMessage.sentTimeDate}))):(console.log("Undefined user message"),console.log(n))}return O(e);case"USER_CHAT_SENT_DATA_COLLECTOR":console.log("=========send data collection========");var o=t.payload.message;console.log(o);var r=e.Chat.findIndex((function(e){return e.cid===o.to}));return r>=0?(e.Chat[r].messages.push(o),e.Chat[r].lastMessage=o,e.Chat.sort((function(e,t){return t.lastMessage.sentTimeDate-e.lastMessage.sentTimeDate}))):(console.log("Undefined user message"),console.log(o)),O(e);case"USER_CHAT_HANDLE_SELECTD":for(var i=t.payload.cid,c=0;c<e.Chat.length;c++)e.Chat[c].cid===i?e.Chat[c].selected=!0:e.Chat[c].selected=!1;return O(e);case"HANDLE_REMOVE_CHAT":return e.Chat=e.Chat.filter((function(e){return e.cid!==t.payload.cid})),O(e);case"MSG_ACK_ACTION":var l=t.payload.message,u=t.payload.status,d=e.Chat.findIndex((function(e){return e.cid===l.to}));if(d>=0){var h=e.Chat[d].messages.findIndex((function(e){return e._id===l._id}));h>=0&&(e.Chat[d].messages[h].status=u)}return O(e);case"MSGS_ACK_ACTION":var f=t.payload.messages,g=t.payload.status,m=t.payload.cid,p=e.Chat.findIndex((function(e){return e.cid===m})),E=0;if(p>=0)for(var y=e.Chat[p].messages.length-1;y>=0;y--){for(var v=e.Chat[p].messages[y],b=0;b<f.length;b++){var _=f[b];if(_._id===v._id){e.Chat[p].messages[y].status=g,E++;break}}if(E>=f.length)break}return O(e);case"SET_USER":return e.user=t.payload.user,O(e);default:return O(e)}},O=function(e){return JSON.parse(JSON.stringify(e))},S={user:{_id:"",username:""}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(C.a)({},S),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return e.user=t.payload.user,w(e);default:return w(e)}},w=function(e){return JSON.parse(JSON.stringify(e))},A=Object(E.c)({ChatReducer:_,AuthReducer:k}),N=[n(41).a],R={},D=window.__REDUX_DEVTOOLS_EXTENSION__?Object(E.e)(A,R,Object(E.d)(E.a.apply(void 0,N),window.__REDUX_DEVTOOLS_EXTENSION__())):Object(E.e)(A,R,Object(E.d)(E.a.apply(void 0,N))),B=new p,M=[],j=function(e,t){D.dispatch({type:"MSG_ACK_ACTION",payload:{message:e,status:t}})},I=function(e,t,n){D.dispatch({type:"MSGS_ACK_ACTION",payload:{messages:e,cid:t,status:n}})},x=function(e){D.dispatch({type:"USER_CHAT_DATA_COLLECTOR",payload:{message:e}})},L=function(e){B.connect(e,x,j,I),D.dispatch({type:"HANDLE_REMOVE_CHAT",payload:{cid:e}})},U=function(e){B.send(e),function(e){D.dispatch({type:"USER_CHAT_SENT_DATA_COLLECTOR",payload:{message:e}})}(e)},H=function(e){M.push((new p).connect(e,x,j,j))},G=n(8),V=function(e){return function(t){t({type:"SET_USER",payload:{user:e}})}},q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={messageBody:"",chat:[]},e.handleSendMesage=function(t,n,s){e.setState({messageBody:""});var a=null;a="group"===s?(new h).setAttributes(n,t,e.state.messageBody).setAsGroupMessage():(new h).setAttributes(n,t,e.state.messageBody),U(a)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.userChat.filter((function(e){return!0===e.selected}))[0];return!!t&&a.a.createElement("div",{style:{width:"100%",height:"100%"}},a.a.createElement("div",{style:{width:"100%",height:100,backgroundColor:"#5BBC93"}},a.a.createElement("span",{style:{fontSize:30,color:"white",marginLeft:20}},t.title)),a.a.createElement("div",{style:{height:550,width:"100%",overflowY:"scroll",backgroundColor:"white"}},t.messages.map((function(t,n){return a.a.createElement("div",{key:n},a.a.createElement(f,{message:t,cid:e.props.user._id}),a.a.createElement("br",null))}))),a.a.createElement("div",{style:{width:"100%",height:70,backgroundColor:"white"}},a.a.createElement("input",{onFocus:function(){return function(e){var t=D.getState().ChatReducer.Chat,n=t.findIndex((function(t){return t.cid===e}));if(n>=0){var s=t[n].messages.filter((function(t){return(t.status===h.SENDING||t.status===h.RECIEVED||t.status===h.SENT)&&t.from===e}));B.markSeen(s,e)}}(t.cid)},value:this.state.messageBody,onChange:function(t){return e.setState({messageBody:t.target.value})},style:{borderRadius:30,padding:5,color:"#5BBC93",width:"70%",height:55,fontSize:25},placeholder:"frient name"}),a.a.createElement("button",{onClick:function(){return e.handleSendMesage(t.cid,e.props.user._id,t.chatType)},style:{backgroundColor:"#5BBC93",border:"2px solid white",borderRadius:30,width:"20%",height:55}},a.a.createElement("span",{style:{color:"white",fontSize:18}},"SEND"))))}}]),n}(a.a.Component),z=Object(G.b)(null,{setUser:V})(q),F=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.singleChat,t=e.messages.length>0&&e.messages[e.messages.length-1].body,n=e.messages.unseenCount;return a.a.createElement("div",{onClick:function(){return t=e.cid,void D.dispatch({type:"USER_CHAT_HANDLE_SELECTD",payload:{cid:t}});var t},style:{cursor:"pointer",width:"100%",height:100,backgroundColor:e.selected?"#EBEBEB":"white",borderBottom:"2px solid #f0f0f0"}},a.a.createElement("div",{align:"center",style:{width:"30%",height:"100%",float:"left",borderRadius:50,border:"1px solid #f0f0f0"}},n>0&&a.a.createElement("div",{align:"center",style:{marginTop:"40%",zIndex:99,backgroundColor:"#5BBC93",borderRadius:50,width:"25px",height:"25px"}},n)),a.a.createElement("div",{style:{width:"65%",float:"right"}},a.a.createElement("span",{style:{fontSize:25,width:"100%",textAlign:"center"}},e.title),a.a.createElement("br",null),a.a.createElement("span",{style:{textOverflow:"ellipsis"}},t)))}}]),n}(s.Component),X=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleConnect=function(t){L(t.cid),e.props.setUser(t.user)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{key:0,style:{width:"100%",height:"100%"}},""!==this.props.user._id?a.a.createElement("div",{key:1,style:{width:"100%",height:700}},a.a.createElement("div",{key:2,style:{width:"20%",height:"100%",backgroundColor:"white",float:"left"}},a.a.createElement("div",{key:3,style:{width:"100%",height:100,textAlign:"center"}},a.a.createElement("span",{key:4,style:{fontSize:25,color:"#5BBC93"}},this.props.user.username)),this.props.userChat.map((function(e,t){return a.a.createElement(F,{key:t,singleChat:e})}))),a.a.createElement("div",{key:5,style:{width:"80%",float:"right"}},a.a.createElement(z,{key:6,user:this.props.user,userChat:this.props.userChat,onConnect:this.handleConnectSocket,onSendMessage:this.handleSendMessage}))):a.a.createElement("div",{key:7,align:"center",style:{margin:"auto",marginTop:100}},this.props.userChat.map((function(t,n){return a.a.createElement("button",{key:n,onClick:function(){return e.handleConnect(t)},style:{width:"200px",height:"100px",cursor:"pointer",border:"white",borderRadius:30}},a.a.createElement("span",{style:{color:t.reserved?"white":"#5BBC93",fontSize:18}},t.title))}))))}}]),n}(a.a.Component),J=Object(G.b)((function(e){return{userChat:e.ChatReducer.Chat,user:e.AuthReducer.user}}),{setUser:V})(X);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G.a,{store:D},a.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.828b10b8.chunk.js.map