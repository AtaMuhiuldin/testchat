(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(15),i=n.n(s),r=(n(58),n(1)),c=n(4),l=n(5),u=n(6),d=function e(){var t=this;Object(r.a)(this,e),this._id=1e5*Math.random()*Math.random(),this.from="",this.to="",this.body="",this.status=e.SENDING,this.sentTimeDate=Date.now(),this.seenTimeDate=null,this.messageType=e.TEXT,this.chatType="single",this.setAttributes=function(e,n,a){return t.from=e,t.to=n,t.body=a,t},this.setValue=function(e){return t._id=e._id,t.from=e.from,t.to=e.to,t.body=e.body,t.status=e.status,t.type=e.type,t},this.setAsGroupMessage=function(){return t.chatType="group",t}};d.TEXT="TEXT",d.VIDEO="VIDEO",d.IMAGE="IMAGE",d.SENDING=0,d.SENT=1,d.RECIEVED=2,d.SEEN=3;var h=d,g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.message?this.props.message:(new h).setAttributes("","a","abasdfasdf asdfasdfasdfs dfasdfasdfasdf asdfasdfasdfasd fasdfasdfasd fasdfasdfc dedfsadf"),t=this.props.cid===e.from,n=t?"#F2F3F8":"#5BBC93",a=t?"#5BBC93":"#F2F3F8",s=t?"right":"left";return o.a.createElement("div",{style:{width:"100%",float:"left"}},o.a.createElement("div",{style:{display:"block",minWidth:"40%",maxWidth:"70%",float:s,backgroundColor:n,padding:10,marginTop:5}},o.a.createElement("span",{style:{color:a}}," ",e.body),o.a.createElement("span",{style:{float:"right",color:"red"}},e.status+"] "+new Date(e.sentTimeDate).toLocaleTimeString()," o")))}}]),n}(a.Component),C=n(16),m=n(50),f=n.n(m),E=function e(t,n,a){Object(r.a)(this,e),this.type=t,this.payload=n,this.to=a},p=function e(){Object(r.a)(this,e)};p.CALLING=0,p.RUNNING=1,p.ACCEPTED=2,p.CONNECTING=3,p.CONNECTED=4,p.ON_ANOTHER_CALL=5,p.DECLINED=6;var S=function e(t,n){var a=this;Object(r.a)(this,e),this.setChannelEnabled=function(e,t){var n=(a.localStream.getTracks()||[]).findIndex((function(t){return t.kind===e}));n>=0&&(a.localStream.getTracks()[n].enabled=t)},this.handleCommunication=function(){a.socket.on("onRecieveRTCMessage",(function(e){if(a.peerConnection){var t=e.query;switch(t.type){case"OFFER":console.log("STEP-1: RECIEVE OFFER"),console.log(t),console.log("---Adding offer to peer connection"),a.peerConnection.setRemoteDescription(new RTCSessionDescription(t.payload)).then((function(){console.log("---added remote offer"),a.recieveCall()})).catch((function(e){console.log("CATCH- error in setting remote offer"),console.log(e)}));break;case"ANSWER":console.log("STEP-4: ANSER RECIEVED"),a.peerConnection.setRemoteDescription(new RTCSessionDescription(t.payload)).then((function(){console.log("---added remote answer")})).catch((function(e){console.log("CATCH- error in setting remote answer"),console.log(e)}));break;case"CALLER_ICE":a.peerConnection.addIceCandidate(new RTCIceCandidate(t.payload)).then((function(){console.log("++++++++ICE ADDED: RECIEVER")})).catch((function(e){console.log("CATCH- error in setting remote Reciever ice candidate"),console.log(e)}));break;case"RECIEVER_ICE":console.log("++++++++ICE ADDED"),a.peerConnection.addIceCandidate(new RTCIceCandidate(t.payload)).then((function(){console.log("++++++++ICE ADDED: CALLER")})).catch((function(e){console.log("CATCH- error in setting remote Caller ice candidate"),console.log(e)}))}}else console.log("PEER CONNECTION NOT INITIALIZED")}))},this.createConnection=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;a.myId=e,a.peerId=t,null!==n&&(a.configuration=n),console.log("CONFIGS"),console.log(a.configuration),a.peerConnection=new RTCPeerConnection(a.configuration),a.peerConnection.onicecandidate=function(e){e.candidate&&(a.callerId?a.sendMessage(new E("CALLER_ICE",e.candidate,a.peerId)):a.sendMessage(new E("RECIEVER_ICE",e.candidate,a.peerId)))},a.peerConnection.onaddstream=function(e){console.log("Streaming...!!!"),console.log(e.stream),a.context.handelOnAddRemoteStream(e.stream),a.peerStream=e.stream},a.peerConnection.oniceconnectionstatechange=function(e){switch(console.info("ICE Connection State Changed:",e.target.iceConnectionState),e.target.iceConnectionState){case"closed":case"disconnected":case"failed":console.log("FAILD, Disconnected OR closed")}}},this.destroyConnection=function(){a.localStream&&a.localStream.getTracks().forEach((function(e){e.stop()})),a.peerConnection&&(a.peerConnection.close(),a.peerConnection=null,a.localStream=null,a.peerStream=null,a.peerId=null)},this.startCall=function(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a.callerId=!0,console.log("STEP-1: Turning On Cam");navigator.mediaDevices.enumerateDevices().then((function(t){console.log("Source Infos"),console.log(t);for(var n=0;n<t.length;n++){var a=t[n];"videoinput"==a.kind&&a.facing==(e?"front":"back")&&a.deviceId}})),navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0},video:!0}).then((function(e){a.localStream=e,a.context.handelOnAddLocalStream(e),console.log("STEP-2: ADDING STREAM TO PEER CONNECTION"),a.peerConnection.addStream(a.localStream),console.log(e),console.log("STEP-3: CREATING OFFER"),a.peerConnection.createOffer({offerToReceiveAudio:!0,offerToReceiveVideo:!0}).then((function(e){a.sendMessage(new E("OFFER",e,a.peerId)),a.peerConnection.setLocalDescription(e).then((function(){console.log("---Offer- locally added")})).catch((function(e){console.log("CATCH-error in adding offer")}))})).catch((function(e){console.log("CATCH- error in creating offer"),console.log(e)}))}))},this.recieveCall=function(){a.callerId=!1;navigator.mediaDevices.enumerateDevices().then((function(e){console.log("Source Infos"),console.log(e);for(var t=0;t<e.length;t++){var n=e[t];"videoinput"==n.kind&&"front"==n.facing&&n.deviceId}})),navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0},video:!0}).then((function(e){a.localStream=e,a.context.handelOnAddLocalStream(e),console.log("STEP-2: ADDING STREAM TO PEER CONNECTION"),a.peerConnection.addStream(a.localStream),console.log("STEP-3: CREATING ANSWER"),a.peerConnection.createAnswer({offerToReceiveAudio:!0,offerToReceiveVideo:!0}).then((function(e){console.log(e),a.sendMessage(new E("ANSWER",e,a.peerId)),console.log("---adding answer to description"),a.peerConnection.setLocalDescription(e).then((function(){console.log("---answer added locally")})).catch((function(e){console.log("CATCH- error in adding answer locally"),console.log(e)}))})).catch((function(e){console.log("CATCH-error in creating answer"),console.log(e)}))}))},this.sendMessage=function(e){console.log("---Sending message of type: "+e.type),console.log(e),a.socket.emit("onSendRTCMessage",{query:e})},this.getStream=function(){return a.localStream},this.socket=n,this.myId=null,this.peerId=null,this.localStream=null,this.peerStream=null,this.context=t,this.configuration={iceServers:[{url:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",username:"ata.mirza40@gmail.com",credential:"ataMirza12345_"}]},this.peerConnection=null,this.handleCommunication()},y=function e(){Object(r.a)(this,e)};y.RINGING_REQUEST=0,y.RINGING=2,y.ACCEPTED=3,y.REJECTED=4,y.USEROFFLINE=5,y.USERONLINE=6,y.ON_OHTER_CALL=7;var T=y,v=function e(t,n,a){Object(r.a)(this,e),this.type=t,this.to=n,this.from=a},I=function e(t,n){var a=this;Object(r.a)(this,e),this.handelSingnaling=function(){a.socket.on("onListen",(function(e){var t=e.query;switch(t.type){case T.RINGING_REQUEST:a.isBusy?a.socket.emit("onCommunicate",{query:new v(T.ON_OHTER_CALL,t.from,a.context.cid)}):(a.isBusy=!0,a.context.handelOnAddCallStatus(T.RINGING_REQUEST),a.peerId=t.from,console.log("INCOMMING CALL: RING REQUEST"),console.log("CREATING RTC CONNECTION: RECIVER"),a.context.createRTCConnection(t.from),a.socket.emit("onCommunicate",{query:new v(T.RINGING,t.from,a.context.cid)}));break;case T.RINGING:a.isBusy=!0,a.context.handelOnAddCallStatus(T.RINGING),console.log("CALL: RINGING...");break;case T.ACCEPTED:a.isBusy=!0,a.context.handelOnAddCallStatus(T.ACCEPTED),console.log("CALL: ACCEPTED"),a.context.startRTCCall(!0);break;case T.REJECTED:a.isBusy=!1,a.context.handelOnAddCallStatus(T.REJECTED),a.context.destroyRTCConnection();break;case T.ON_OHTER_CALL:a.isBusy=!1,a.context.handelOnAddCallStatus(T.ON_OHTER_CALL),a.context.destroyRTCConnection()}}))},this.connetingPeer=function(){console.log("Connecting..."),a.context.handelOnAddCallStatus(T.RINGING),a.socket.emit("onCommunicate",{query:new v(T.RINGING_REQUEST,a.peerId,a.context.cid)},(function(e){e.type===T.USEROFFLINE?(console.log("PEER OFFLINE: RECONNECTING"),a.connetingPeer(a.peerId)):console.log("PEER: ONLINE")}))},this.initializeSingnaling=function(e){return a.peerId=e,a.isBusy=!0,console.log("STEP1: initializing signaling"),new Promise((function(t,n){a.context.socketConnected?(console.log("Me: CONNECTED"),console.log("CREATING RTC CONNECTION: CALLER"),a.context.createRTCConnection(e),a.connetingPeer(e),t(!0)):(console.log("Me: NOT CONNECTED"),n(!1))}))},this.acceptSignaling=function(){return a.isBusy=!0,new Promise((function(e,t){a.socket.emit("onCommunicate",{query:new v(T.ACCEPTED,a.peerId,a.context.cid)},(function(n){n.type===T.USERONLINE?e(!0):t(!1)}))}))},this.endCallSingnal=function(e){a.socket.emit("onCommunicate",{query:new v(T.REJECTED,a.peerId,a.context.cid)}),a.context.handelOnAddCallStatus(T.REJECTED),a.isBusy=!1,a.peerId=null},this.socket=t,this.context=n,this.peerId=null,this.isBusy=!1,this.handelSingnaling()},N=function e(){var t=this;Object(r.a)(this,e),this.socket=null,this.dataHandler=null,this.ackEmitter=null,this.ackEmitters=null,this.cid=null,this.socketConnected=!1,this.rtcConfig={iceServers:[{url:"stun:stun.l.google.com:19302"},{urls:"turn:turn.msgsafe.io:443?transport=tcp",username:"a9a2b514",credential:"00163e7826d6"}]},this.callSignalingManager=!1,this.videoChatContext=null,this.rtcConnectionManager=null,this.connect=function(e,n,a,o){t.cid=e,t.dataHandler=n,t.ackEmitter=a,t.ackEmitters=o,t.socket=f()("http://localhost:5000",{query:{cid:e}}),t.rtcConnectionManager=new S(t,t.socket),t.callSignalingManager=new I(t.socket,t),t.send=function(e,n){console.log("EMIT ON SENT"),t.socket.emit("onMessageSent",{query:{message:e,chatId:n}},(function(e){t.ackEmitter(e.message,h.SENT)})),console.log("onSentCalled"),t.dataHandler(e)},t.markSeen=function(e,n,a){t.socket.emit("onMarkSeenSent",{query:{messages:e,to:n,from:t.cid,chatId:a}},(function(a){t.ackEmitters(e,n,h.SEEN)}))},t.sendOnRecieveAck=function(e){t.socket.emit("onRecievedAckSend",{query:{message:{_id:e._id,to:e.to,from:e.from}}}),t.ackEmitter(e,h.RECIEVED)},t.socket.on("onRecieveMessage",(function(e){console.log("onRecieve: called");var n=e.query;t.dataHandler(n.message),t.sendOnRecieveAck(n.message)})),t.socket.on("onRecievedAck",(function(e){t.ackEmitter(e.query.message,h.RECIEVED)})),t.socket.on("onMarkSeen",(function(e){t.ackEmitters(e.query.messages,e.query.from,h.SEEN)})),t.socket.on("connect",(function(){console.log("STATUS: CONNECTED"),t.socketConnected=!0})),t.socket.on("connect_error",(function(e){console.log("CONNECT: ERROR"),t.socketConnected=!1,console.log(e)})),t.socket.on("connect_timeout",(function(e){console.log("CONNECT: TIMEOUT"),console.log(e)})),t.socket.on("disconnect",(function(e){"io server disconnect"===e&&t.socket.connect()})),t.socket.on("reconnect",(function(e){console.log("SOCKET: RECONNECTED"),console.log(e)})),t.socket.on("reconnect_attempt",(function(e){console.log("RECONNECT ATTEMPTS"),console.log(e)})),t.socket.on("reconnecting",(function(e){console.log("RECONNECTING...")})),t.socket.on("reconnect_error",(function(e){console.log("RECONNECT ERROR")}))},this.initializeSignaling=function(e){t.callSignalingManager.initializeSingnaling(e)},this.acceptCall=function(){t.callSignalingManager.acceptSignaling()},this.setChatContext=function(e){t.videoChatContext=e},this.endCallSignal=function(){t.callSignalingManager.endCallSingnal()},this.createRTCConnection=function(e){t.rtcConnectionManager.createConnection(t.cid,e,t.rtcConfig)},this.startRTCCall=function(e){t.rtcConnectionManager.startCall(e)},this.setRTCChannelEnabled=function(e,n){t.rtcConnectionManager.setChannelEnabled(e,n)},this.destroyRTCConnection=function(){t.rtcConnectionManager.destroyConnection()},this.handelOnAddRemoteStream=function(e){t.videoChatContext.setState({peerStream:e})},this.handelOnAddLocalStream=function(e){t.videoChatContext.setState({localStream:e})},this.handelOnAddCallStatus=function(e){console.log("CALL STATUS "+e),t.videoChatContext.setState({callStatus:e})}},O=n(3),R=n(17),A=function e(){var t=this;Object(r.a)(this,e),this._id="",this.username="",this.phoneNumber="",this.setAttributes=function(e,n){return t._id=e,t.username=n,t},this.setValue=function(e){return t._id=e._id,t.username=e.username,t.phoneNumber=e.phoneNumber,t}},b=function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{_id:"",username:""};Object(r.a)(this,e),this._id="",this.cid=n._id,this.title=n.username,this.user=n,this.messages=[],this.selected=!1,this.unseenCount=0,this.lastMessage=new h,this.chatType="single",this.chatStatus=e.CHAT_NOT_FOUND,this.setAttributes=function(e,a){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t.user=n,t.cid=n._id,t.title=n.username,t.messages=e,t.selected=a,t.unseenCount=o,t},this.compose=function(e,n){return t.cid=e.cid,t.title=e.title,t.user=e.user,n.chat&&(t._id=n.chat._id,t.messages=n.chat.messages,t.chatStatus=n.chatStatus,t.unseenCount=n.unseenCount,t.messages.length>0&&(t.lastMessage=(new h).setValue(t.messages[t.messages.length-1]))),console.log("VALUE"),console.log(t),t},this.setValue=function(e){return t.cid=e._id,t.user=e.user,t.messages=e.chat,t.selected=!1,t.unseenCount=0,t},this.setChat=function(e){return e?(t.cid=e._id,t.messages=e.chat,t.title=e.title,t.selected=!1,t.unseenCount=0):(t.cid="",t.messages=[],t.selected=!1,t.unseenCount=0),t},this.setUser=function(e){return t.user=(new A).setValue(e),t}};b.USER_NOT_FOUND=0,b.CHAT_NOT_FOUND=1,b.USER_CHAT_FOUND=2;var _=b,w=function e(t){var n=this;Object(r.a)(this,e),this._id=t,this.cid=t,this.title="Group Chat",this.users=[],this.messages=[],this.selected=!1,this.unseenCount=0,this.lastMessage=new h,this.chatType="group",this.chatStatus=2,this.setAttributes=function(e,t,a){return setTimeout((function(){return K(n.cid)}),500),n.users=e,n.messages=t,n.selected=a,n},this.setValue=function(e){return setTimeout((function(){return K(n.cid)}),500),n.users=e.users,n.messages=e.messages,n.selected=e.selected,n.unseenCount=e.unseenCount,n}},k={Chat:[],user:{_id:"",username:""}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(R.a)({},k),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHAT_LIST_CM":return console.log(t.payload.chat),e.Chat=t.payload.chat,localStorage.setItem("userchatxyz1010",JSON.stringify(e)),L(e);case"USER_CHAT_DATA_COLLECTOR":var n=t.payload.message,a="group"===n.chatType?n.to:n.from;if(n.from!==e.user._id){console.log("=========user data collection========"),console.log(n);var o=e.Chat.findIndex((function(e){return e.cid===a}));o>=0?(e.Chat[o].messages.push(n),e.Chat[o].lastMessage=n,e.Chat.sort((function(e,t){return t.lastMessage.sentTimeDate-e.lastMessage.sentTimeDate}))):(console.log("Undefined user message"),console.log(n))}return e.Chat.sort((function(e,t){return t.lastMessage.sentTimeDate-e.lastMessage.sentTimeDate})),localStorage.setItem("userchatxyz1010",JSON.stringify(e)),L(e);case"INITIALIZE_CHAT_BETWEEN_CM":var s=t.payload,i=s.friend,r=s.chat,c=e.Chat.findIndex((function(e){return e.cid===i._id}));return c>=0&&(e.Chat[c]._id=r._id,e.Chat[c].chatStatus=_.USER_CHAT_FOUND),localStorage.setItem("userchatxyz1010",JSON.stringify(e)),L(e);case"USER_CHAT_SENT_DATA_COLLECTOR":console.log("=========send data collection========");var l=t.payload.message;console.log(l);var u=e.Chat.findIndex((function(e){return e.cid===l.to}));return u>=0?(e.Chat[u].messages.push(l),e.Chat[u].lastMessage=l,e.Chat.sort((function(e,t){return t.lastMessage.sentTimeDate-e.lastMessage.sentTimeDate}))):(console.log("Undefined user message"),console.log(l)),localStorage.setItem("userchatxyz1010",JSON.stringify(e)),L(e);case"USER_CHAT_HANDLE_SELECTD":for(var d=t.payload.cid,h=0;h<e.Chat.length;h++)e.Chat[h].cid===d?e.Chat[h].selected=!0:e.Chat[h].selected=!1;return localStorage.setItem("userchatxyz1010",JSON.stringify(e)),L(e);case"HANDLE_REMOVE_CHAT":return e.Chat=e.Chat.filter((function(e){return e.cid!==t.payload.cid})),e.Chat.sort((function(e,t){return t.lastMessage.sentTimeDate-e.lastMessage.sentTimeDate})),localStorage.setItem("userchatxyz1010",JSON.stringify(e)),L(e);case"MSG_ACK_ACTION":var g=t.payload.message,C=t.payload.status,m=e.Chat.findIndex((function(t){return t.cid===(g.to===e.user._id?g.from:g.to)}));if(m>=0){var f=e.Chat[m].messages.findIndex((function(e){return e._id===g._id}));f>=0?(e.Chat[m].messages[f].status=C,g.newId&&(e.Chat[m].messages[f]._id=g.newId)):console.log("MSG NOT FOUND")}else console.log("CHAT NOT FOUND");return localStorage.setItem("userchatxyz1010",JSON.stringify(e)),L(e);case"MSGS_ACK_ACTION":var E=t.payload.messages,p=t.payload.status,S=t.payload.cid,y=e.Chat.findIndex((function(e){return e.cid===S})),T=0;if(y>=0)for(var v=e.Chat[y].messages.length-1;v>=0;v--){for(var I=e.Chat[y].messages[v],N=0;N<E.length;N++){var O=E[N];if(O._id===I._id){e.Chat[y].messages[v].status=p,T++;break}}if(T>=E.length)break}return localStorage.setItem("userchatxyz1010",JSON.stringify(e)),L(e);case"SET_USER":return e.user=t.payload.user,localStorage.setItem("userchatxyz1010",JSON.stringify(e)),L(e);case"LOGOUT":return localStorage.removeItem("userchatxyz1010"),{Chat:[],user:{_id:"",username:""}};default:var A=localStorage.getItem("userchatxyz1010");return A?A=JSON.parse(A):L(e)}},L=function(e){return JSON.parse(JSON.stringify(e))},M={user:{_id:"",username:""}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(R.a)({},M),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return e.user=t.payload.user,localStorage.setItem("userauth1010",JSON.stringify(e)),U(e);case"LOGOUT":return localStorage.removeItem("userauth1010"),{user:{_id:"",username:""}};default:var n=localStorage.getItem("userauth1010");return n?JSON.parse(n):U(e)}},U=function(e){return JSON.parse(JSON.stringify(e))},G=Object(O.c)({ChatReducer:D,AuthReducer:x}),H=[n(52).a],j={},z=window.__REDUX_DEVTOOLS_EXTENSION__?Object(O.e)(G,j,Object(O.d)(O.a.apply(void 0,H),window.__REDUX_DEVTOOLS_EXTENSION__())):Object(O.e)(G,j,Object(O.d)(O.a.apply(void 0,H))),B=n(18),F=n.n(B),P=new N,V=[],J=function(e){F.a.post("http://localhost:5000/API/user/chat/user-chat",{userId:e}).then((function(e){if(e.data.success){for(var t=e.data.user.userChat,n=Object(C.a)(z.getState().ChatReducer.Chat),a=[],o=0;o<t.length;o++){for(var s=t[o],i=!1,r=0;r<n.length;r++){var c=n[r];if(c.cid===s.cid){i=!0,c._id=s._id,c.messages=s.messages,c.chatStatus=_.USER_CHAT_FOUND,a.push(c);break}}i||(s.chatStatus=_.USER_CHAT_FOUND,"group"===s.chatType&&a.push(new w(s._id).setValue(s)))}for(var l=0;l<n.length;l++){for(var u=n[l],d=!1,h=0;h<t.length;h++){var g=t[h];if(u.cid===g.cid){d=!0;break}}d||a.push(u)}z.dispatch({type:"SET_CHAT_LIST_CM",payload:{chat:a}})}})).catch((function(e){console.log("CATCH: Error"),console.log(e)}))},q=function(e,t){z.dispatch({type:"MSG_ACK_ACTION",payload:{message:e,status:t}})},W=function(e,t,n){z.dispatch({type:"MSGS_ACK_ACTION",payload:{messages:e,cid:t,status:n}})},Q=function(e){z.dispatch({type:"USER_CHAT_DATA_COLLECTOR",payload:{message:e}})},X=function(e){P.connect(e,Q,q,W),z.dispatch({type:"HANDLE_REMOVE_CHAT",payload:{cid:e}})},Z=function(e,t){P.send(e,t),function(e){z.dispatch({type:"USER_CHAT_SENT_DATA_COLLECTOR",payload:{message:e}})}(e)},K=function(e){V.push((new N).connect(e,Q,q,q))},Y=n(9),$=function(e){return function(t){t({type:"SET_USER",payload:{user:e}})}},ee=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={messageBody:"",chat:[]},e.handleSendMesage=function(t,n,a,o){e.setState({messageBody:""});var s=null;s="group"===o?(new h).setAttributes(a,t,e.state.messageBody).setAsGroupMessage():(new h).setAttributes(a,t,e.state.messageBody),Z(s,n)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.userChat.filter((function(e){return!0===e.selected}))[0];return!!t&&(t.chatStatus!==_.USER_CHAT_FOUND?o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return n=e.props.user._id,a=t.user._id,void F.a.post("http://localhost:5000/API/user/chat/initialize-chat",{userId:n,friendId:a}).then((function(e){e.data.success?z.dispatch({type:"INITIALIZE_CHAT_BETWEEN_CM",payload:{friend:e.data.friend,chat:e.data.chat}}):(console.log("INIT CHAT SUCCESS: FALSE"),console.log(e.data.error))})).catch((function(e){console.log("CATCH: INITIALIZE CHAT"),console.log(e)}));var n,a}},"Initialize Chat with ",t.title)):o.a.createElement("div",{style:{width:"100%",height:"100%"}},o.a.createElement("div",{style:{width:"100%",height:100,backgroundColor:"#5BBC93"}},o.a.createElement("span",{style:{fontSize:30,color:"white",marginLeft:20}},t.title)),o.a.createElement("div",{style:{height:550,width:"100%",overflowY:"scroll",backgroundColor:"white"}},t.messages.map((function(t,n){return o.a.createElement("div",{key:n},o.a.createElement(g,{message:t,cid:e.props.user._id}),o.a.createElement("br",null))}))),o.a.createElement("div",{style:{width:"100%",height:70,backgroundColor:"white"}},o.a.createElement("input",{onFocus:function(){return function(e,t){var n=z.getState().ChatReducer.Chat,a=n.findIndex((function(t){return t.cid===e}));if(a>=0){for(var o=n[a].messages.filter((function(t){return(t.status===h.SENDING||t.status===h.RECIEVED||t.status===h.SENT)&&t.from===e})),s=0;s<o.length;s++)o[s].status=h.SEEN,o[s].seenTimeDate=Date.now();P.markSeen(o,e,t)}}(t.cid,t._id)},value:this.state.messageBody,onChange:function(t){return e.setState({messageBody:t.target.value})},style:{borderRadius:30,padding:5,color:"#5BBC93",width:"70%",height:55,fontSize:25},placeholder:"frient name"}),o.a.createElement("button",{onClick:function(){return e.handleSendMesage(t.cid,t._id,e.props.user._id,t.chatType)},style:{backgroundColor:"#5BBC93",border:"2px solid white",borderRadius:30,width:"20%",height:55}},o.a.createElement("span",{style:{color:"white",fontSize:18}},"SEND")))))}}]),n}(o.a.Component),te=Object(Y.b)(null,{setUser:$})(ee),ne=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.singleChat,t=e.messages.length>0&&e.messages[e.messages.length-1].body,n=e.messages.unseenCount;return o.a.createElement("div",{onClick:function(){return t=e.cid,void z.dispatch({type:"USER_CHAT_HANDLE_SELECTD",payload:{cid:t}});var t},style:{cursor:"pointer",width:"100%",height:100,backgroundColor:e.selected?"#EBEBEB":"white",borderBottom:"2px solid #f0f0f0"}},o.a.createElement("div",{align:"center",style:{width:"30%",height:"100%",float:"left",borderRadius:50,border:"1px solid #f0f0f0"}},n>0&&o.a.createElement("div",{align:"center",style:{marginTop:"40%",zIndex:99,backgroundColor:"#5BBC93",borderRadius:50,width:"25px",height:"25px"}},n)),o.a.createElement("div",{style:{width:"65%",float:"right"}},o.a.createElement("span",{style:{fontSize:25,width:"100%",textAlign:"center"}},e.title),o.a.createElement("br",null),o.a.createElement("span",{style:{textOverflow:"ellipsis"}},t)))}}]),n}(a.Component),ae=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).connectUser=function(){""!==e.state.myId&&""!==e.state.friendId?(console.log("STATE"),console.log(e.state),X(e.state.myId)):alert("Invalid USER or FRIEND Id")},e.handleInitiateCall=function(){var t;t=e.state.friendId,P.initializeSignaling(t)},e.endCall=function(){P.destroyRTCConnection(),P.endCallSignal()},e.answerCall=function(){console.log("ANSWER CALL"),P.acceptCall(),e.setState({callStatus:T.ACCEPTED})},e.setSelected=function(t){for(var n=Object(C.a)(e.state.configs),a=0;a<n.length;a++){n[a].id===t?n[a].selected=!0:n[a].selected=!1}e.setState({configs:n})},e.getSelected=function(){return e.state.configs.filter((function(e){return!0===e.selected}))[0].value},e.state={localStream:null,peerStream:null,isConnected:!1,myId:"",friendId:"",callRunning:!1,isMute:!1,connectionState:"",callStatus:-1,configs:[{id:1,selected:!1,value:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",username:"ata.mirza40@gmail.com",credential:"ataMirza12345_"}]}},{id:2,selected:!1,value:{iceServers:[{url:"stun:stun.l.google.com:19302"}]}},{id:3,selected:!0,value:{iceServers:[{url:"stun:stun.l.google.com:19302"},{urls:"turn:turn.msgsafe.io:443?transport=tcp",username:"a9a2b514",credential:"00163e7826d6"}]}},{id:4,selected:!1,value:{iceServers:[{url:"stun:stun.l.google.com:19302"},{url:"turn:192.158.29.39:3478?transport=udp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"}]}},{id:5,selected:!1,value:{iceServers:[{url:"stun:stun.l.google.com:19302"},{urls:["turn:13.250.13.83:3478?transport=udp"],username:"YzYNCouZM1mhqhmseWk6",credential:"YzYNCouZM1mhqhmseWk6"}]}},{id:6,selected:!1,value:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:numb.viagenie.ca",username:"ata.mirza40@gmail.com",credential:"ataMirza12345_"}],iceTransports:"relay"}},{id:7,selected:!1,value:{iceServers:[{url:"stun:stun.l.google.com:19302"},{urls:"turn:turn.msgsafe.io:443?transport=tcp",username:"a9a2b514",credential:"00163e7826d6"}]}},{id:8,selected:!1,value:{iceServers:[{urls:"turn:turn.msgsafe.io:443?transport=tcp",username:"a9a2b514",credential:"00163e7826d6"}]}}]},e.peerConnectionA=null,e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e;e=this,P.setChatContext(e)}},{key:"render",value:function(){var e=this;switch(this.myStream&&(this.myStream.srcObject=this.state.localStream,this.myStream.volume=0,this.myStream.muted=0,this.friendStream.muted=0,this.friendStream.srcObject=this.state.peerStream),this.state.callStatus){case T.RINGING_REQUEST:return o.a.createElement("div",{style:{backgroundColor:"#363442",width:"100%",height:window.innerHeight}},o.a.createElement("div",{align:"center",style:{alignSelf:"center"}},o.a.createElement("div",{style:{height:200}}),o.a.createElement("span",{style:{color:"white",fontSize:30}},"Ringing..."),o.a.createElement("br",null),o.a.createElement("div",{style:{height:50}}),o.a.createElement("button",{onClick:function(){return e.answerCall()},style:{width:100,height:50,backgroundColor:"green",border:"0px",borderRadius:50,color:"white",fontSize:20}},"Accept"),o.a.createElement("button",{onClick:function(){return e.endCall()},style:{width:100,height:50,backgroundColor:"red",border:"0px",borderRadius:50,color:"white",fontSize:20}},"CANCEL")));case T.RINGING:return o.a.createElement("div",{style:{backgroundColor:"#363442",width:"100%",height:window.innerHeight}},o.a.createElement("div",{align:"center",style:{alignSelf:"center"}},o.a.createElement("div",{style:{height:200}}),o.a.createElement("span",{style:{color:"white",fontSize:30}},"Ringing..."),o.a.createElement("br",null),o.a.createElement("div",{style:{height:50}}),o.a.createElement("button",{onClick:function(){return e.endCall()},style:{width:100,height:50,backgroundColor:"red",border:"0px",borderRadius:50,color:"white",fontSize:20}},"CANCEL")));case T.ACCEPTED:return o.a.createElement("div",{style:{backgroundColor:"#363442",width:"100%",height:window.innerHeight}},o.a.createElement("video",{ref:function(t){return e.friendStream=t},style:{width:"100%",height:window.innerHeight,backfaceVisibility:"visible"},autoPlay:!0}),o.a.createElement("video",{ref:function(t){return e.myStream=t},style:{width:200,zIndex:999,position:"absolute",bottom:10,right:10,height:200,backfaceVisibility:"visible"}}),o.a.createElement("button",{onClick:function(){return e.endCall()},align:"center",style:{position:"absolute",backgroundColor:"red",width:60,height:60,color:"white",borderRadius:50,border:"0px",bottom:30,left:window.innerWidth/2-10}},"END"));default:return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{align:"center"},"CHAT APPLICATIONS"),o.a.createElement("div",{style:{height:100}}),this.state.isConnected?o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{align:"center"},"ME: ".concat(this.state.myId,", FRIEND: ").concat(this.state.friendId)),o.a.createElement("div",{style:{paddingLeft:"32%",width:"100%"}},o.a.createElement("button",{style:{width:300,height:50,borderRadius:30,margin:"auto"},onClick:function(){return e.handleInitiateCall()}},"START CALL"))):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{width:"100%",paddingLeft:"34%"}},o.a.createElement("span",{style:{fontSize:30}},"Me:"),o.a.createElement("br",null),o.a.createElement("input",{style:{borderRadius:20,padding:10,fontSize:20},value:this.state.myId,onChange:function(t){return e.setState({myId:t.target.value})},type:"text"})),o.a.createElement("div",{style:{width:"100%",paddingLeft:"34%"}},o.a.createElement("span",{style:{fontSize:30}},"Friend:"),o.a.createElement("br",null),o.a.createElement("input",{style:{borderRadius:20,padding:10,fontSize:20},value:this.state.friendId,onChange:function(t){return e.setState({friendId:t.target.value})},type:"text"})),o.a.createElement("div",{style:{height:30}}),o.a.createElement("div",{style:{paddingLeft:"32%",width:"100%"}},o.a.createElement("button",{style:{width:300,height:50,borderRadius:30,margin:"auto"},onClick:function(){return e.connectUser()}},"Connect"))))}}}]),n}(o.a.Component),oe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={calling:!0},e.handleConnect=function(t){X(t.cid),J(t.cid),e.props.setUser(t.user)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return this.state.calling?o.a.createElement(ae,null):o.a.createElement("div",{key:0,style:{width:"100%",height:"100%"}},""!==this.props.user._id?o.a.createElement("div",{key:1,style:{width:"100%",height:700}},o.a.createElement("div",{key:2,style:{width:"20%",height:"100%",backgroundColor:"white",float:"left"}},o.a.createElement("div",{key:3,style:{width:"100%",height:100,textAlign:"center"}},o.a.createElement("span",{key:4,style:{fontSize:25,color:"#5BBC93"}},this.props.user.username),o.a.createElement("button",{onClick:function(){z.dispatch({type:"LOGOUT"}),F.a.post("http://localhost:5000/API/user/auth/get-all").then((function(e){if(e.data.success){for(var t=e.data.users,n=[],a=0;a<t.length;a++){var o=t[a];n.push(new _((new A).setValue(o)).setAttributes([],!1))}z.dispatch({type:"SET_CHAT_LIST_CM",payload:{chat:n}})}else console.log("ERROR SUCCESS:FALSE"),console.log(e.data.error)})).catch((function(e){console.log("CATCH: API, NETWORK ERROR"),console.log(e)}))},style:{borderRadius:10}},"logout")),this.props.userChat.map((function(e,t){return o.a.createElement(ne,{key:t,singleChat:e})}))),o.a.createElement("div",{key:5,style:{width:"80%",float:"right"}},o.a.createElement(te,{key:6,user:this.props.user,userChat:this.props.userChat,onConnect:this.handleConnectSocket,onSendMessage:this.handleSendMessage}))):o.a.createElement("div",{key:7,align:"center",style:{margin:"auto",marginTop:100}},this.props.userChat.map((function(t,n){return o.a.createElement("button",{key:n,onClick:function(){return e.handleConnect(t)},style:{width:"200px",height:"100px",cursor:"pointer",border:"white",borderRadius:30}},o.a.createElement("span",{style:{color:t.reserved?"white":"#5BBC93",fontSize:18}},t.title))}))))}}]),n}(o.a.Component),se=Object(Y.b)((function(e){return{userChat:e.ChatReducer.Chat,user:e.AuthReducer.user}}),{setUser:$})(oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Y.a,{store:z},o.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,n){e.exports=n(112)},58:function(e,t,n){},88:function(e,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.61e4fe83.chunk.js.map