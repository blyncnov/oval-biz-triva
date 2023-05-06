(function(){"use strict";var e={3647:function(e,t,s){var i=s(144),n=s(8345),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view",{attrs:{realtime:e.realtime}})],1)},r=[],o=s(8351),l={name:"App",components:{},data(){return{realtime:null}},created(){this.realtime=new o.Realtime({authUrl:"/auth"})},destroyed(){this.realtime.connection.close()}},u=l,c=s(1001),d=(0,c.Z)(u,a,r,!1,null,null,null),h=d.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.didPlayerEnterRoom?s("div",{staticClass:"video_section"},[s("div",{staticClass:"video_container"},[s("img",{attrs:{src:e.videoView,alt:"Video Mocked View"}})])]):e._e(),e.showQuestions?e._e():s("div",{staticClass:"player-home card"},[s("a",{staticClass:"ably-branding",attrs:{href:"https://www.ably.com/",target:"_blank"}},[s("h2",[e._v("Live Quiz App")]),s("hr"),s("div",{staticClass:"ably-power"},[s("strong",[e._v("powered by")]),s("img",{attrs:{src:e.headerLogo,alt:"Header image"}})])]),e.isRoomClosed?e._e():s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[e._v("Hello "+e._s(e.myNickname)+"!")]),e.didPlayerEnterRoom?[s("OnlinePlayers",{attrs:{timer:e.timer,onlinePlayersArr:e.onlinePlayersArr,didHostStartGame:e.didHostStartGame}}),e.didHostStartGame?e._e():s("div",[s("hr"),s("small",{staticClass:"text-muted"},[e._v("Waiting for your host, "),s("strong",[e._v(e._s(e.hostNickname))]),e._v(", to start the quiz")])])]:[s("p",{staticClass:"card-text"},[e._v("We need a nickname so others can identify you")]),s("div",{staticClass:"nickname-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.myNickname,expression:"myNickname"}],staticClass:"form-control host-nickname",attrs:{id:"host-nickname",placeholder:"Enter nickname"},domProps:{value:e.myNickname},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterRoomWithNickname()},input:function(t){t.target.composing||(e.myNickname=t.target.value)}}}),s("button",{staticClass:"btn",attrs:{type:"button create-random-btn"},on:{click:function(t){return e.enterRoomWithNickname()}}},[e._v(" GO ")])])]],2),e.isRoomClosed?s("div",{staticClass:"card-body"},[e._v(" Sorry this quiz room is no longer available to enter, either because the host is no longer online or the quiz has already started. ")]):e._e(),e._m(0)]),e.showQuestions&&!e.showAnswer?s("Question",{attrs:{newQuestion:e.newQuestion,newChoices:e.newChoices,choices_ids:e.choices_ids,newQuestionNumber:e.newQuestionNumber,isLastQuestion:e.isLastQuestion,question_id:e.question_id,questionTimer:e.questionTimer,correctAnswerIndex:e.correctAnswerIndex,showImg:e.showImg,questionImgLink:e.questionImgLink,isAdminView:!1,myInputCh:e.myInputCh},on:{"player-answer":function(t){return e.playerAnswer(t)}}}):e._e(),e.showAnswer?s("Answer",{attrs:{correctAnswer:e.newChoices[e.correctAnswerIndex],didAnswerCorrectly:e.didAnswerCorrectly,isAdminView:!1}}):e._e(),e.showAnswer&&!e.showFinalScreen?s("Leaderboard",{attrs:{leaderboard:e.leaderboard,finalScreen:!1,isPlayer:!0}}):e._e(),!e.showAnswer&&e.showQuestions?s("div",{staticClass:"live-stats"},[s("LiveStats",{attrs:{numAnswered:e.numAnswered,numPlaying:e.numPlaying}})],1):e._e(),e.didHostForceQuizEnd?[e._m(1)]:e._e(),e.showFinalScreen?[s("div",{staticClass:"quiz-end-player"},[e._v("This quiz has ended")]),s("div",[s("Leaderboard",{attrs:{isPlayer:!0,leaderboard:e.leaderboard,finalScreen:!0}})],1)]:e._e()],2)},p=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card-footer text-muted div-black"},[s("a",{staticClass:"link",attrs:{href:"https://github.com/Srushtika/realtime-quiz-framework",target:"_blank"}},[e._v("Learn how to build your own realtime quiz app with Ably →")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"alert alert-danger alert-quiz-ended",attrs:{role:"alert"}},[e._v(" This quiz has ended "),s("br"),e._v("Either the host has ended it or they have simply left. Please request the host to share a new link. ")])}],y=(s(7658),s(9669)),w=s.n(y),v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card",class:e.viewType},[s("div",{staticClass:"card-header"},[e._v("Question "+e._s(e.newQuestionNumber))]),s("h2",{staticClass:"question-div card-title"},[e._v(e._s(e.newQuestion))]),e.showImg?s("div",{staticClass:"img-div"},[s("img",{staticClass:"img-fluid q-img",attrs:{src:e.questionImgLink,alt:"Image for the question"}})]):e._e(),e.showAnswer?s("Answer",{attrs:{correctAnswer:e.newChoices[e.correctAnswerIndex],isAdminView:!0}}):e._e(),e.showAnswer?e._e():s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"}),e.answerSubmitted||e.isAdminView?e._e():s("div",{staticClass:"choices-container"},e._l(e.newChoices,(function(t,i){return s("button",{key:t,staticClass:"btn btn-outline-dark choice-btn",attrs:{type:"button"},on:{click:function(s){return e.sendMyAnswer(t,i,e.choices_ids,e.question_id)}}},[s("span",[e._v(" "+e._s(i)+". ")]),e._v(" "+e._s(t)+" ")])})),0),e.isAdminView?s("div",{staticClass:"choices-container"},e._l(e.newChoices,(function(t){return s("div",{key:t,staticClass:"choice-div"},[e._v(" "+e._s(t)+" ")])})),0):e._e(),e.answerSubmitted?s("div",{staticClass:"submitted-msg"},[s("h5",[e._v(" Your answer is submitted, waiting for everyone else to answer... ")])]):e._e()]),e.isAdminView&&e.showAnswer?e._e():s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated bg-dark",style:{width:e.questionTimer/30*100+"%"},attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100"}},[e._v(" "+e._s(e.questionTimer)+" ")])])],1)},b=[],C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card alert answer-div answer-card",class:e.cardColorClass},[e.isAdminView?e._e():s("div",{staticClass:"answer-eval"},[s("i",{staticClass:"fas",class:e.didAnswerCorrectly?"fa-check-circle":"fa-times-circle"}),e._v(" "+e._s(e.evalMessage)+" ")]),e.isAdminView?e._e():s("hr"),s("h5",[e._v("The answer is")]),s("h2",{staticClass:"card-title answer-text"},[e._v(e._s(e.correctAnswer))])])},_=[],g={name:"Answer",props:["correctAnswer","isAdminView","didAnswerCorrectly"],data(){return{evalMessage:!0===this.didAnswerCorrectly?"Correct Answer":"Wrong Answer",cardColorClass:null,viewType:1==this.isAdminView?"answer-card-host":"answer-card-player"}},methods:{},created(){this.isAdminView?this.cardColorClass="alert-secondary":this.cardColorClass=this.didAnswerCorrectly?"alert-success":"alert-danger"}},f=g,k=(0,c.Z)(f,C,_,!1,null,"60325806",null),Q=k.exports;const A="https://dev.triviabillionia.com/api";var z={name:"Question",components:{Answer:Q},props:["isAdminView","newQuestion","newChoices","newQuestionNumber","isLastQuestion","questionTimer","correctAnswerIndex","myInputCh","showImg","questionImgLink","showAnswer","correctAnswer","choices_ids","question_id"],data(){return{answerSubmitted:!1,viewType:1==this.isAdminView?"questions-card-host":"questions-card-player"}},methods:{sendMyAnswer(e,t,s,i){if(!this.isAdminView){this.answerSubmitted=!0,this.$emit("player-answer",{questionIndex:this.newQuestionNumber-1,playerAnswerIndex:t}),this.myInputCh.publish("player-answer",{questionIndex:this.newQuestionNumber-1,playerAnswerIndex:t,choice:e});let s=localStorage.getItem("token"),n=9,a=i;console.log(s,a,n,A,w())}}}},q=z,R=(0,c.Z)(q,v,b,!1,null,"e4dff16a",null),x=R.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.didHostStartGame?s("div",[s("h1",[e._v("Your quiz starts in")]),s("h1",{staticClass:"display-3"},[e._v(e._s(e.timer))])]):e._e(),e._v(" You'll see other players as they join "),s("div",{staticClass:"online-players"},e._l(e.onlinePlayersArr,(function(t){return s("div",{key:t.clientId,staticClass:"player-avatar",style:{color:t.avatarColor}},[s("figure",{staticClass:"figure"},[s("i",{staticClass:"fas fa-user-circle fa-3x"}),s("figcaption",{staticClass:"figure-caption"},[e._v(" "+e._s(t.nickname)+" ")])])])})),0)])},T=[],I={props:["timer","onlinePlayersArr","didHostStartGame"]},S=I,N=(0,c.Z)(S,P,T,!1,null,"2abb634e",null),L=N.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card text-white bg-dark mb-3 livestats-div"},[s("div",{staticClass:"card-header"},[e._v("Live stats")]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[e._v(" "+e._s(e.numAnswered)+" of "+e._s(e.numPlaying)+" people have answered this question ")])])])},O=[],$={name:"LiveStats",props:["numAnswered","numPlaying"]},H=$,G=(0,c.Z)(H,E,O,!1,null,"125d4578",null),U=G.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card text-white bg-success  mb-3",class:{"leaderboard-host":!e.isPlayer,"leaderboard-player":e.isPlayer}},[s("div",{staticClass:"card-header"},[s("h3",[e._v(e._s(0==e.finalScreen?"Top 5 scorers":"Final Leaderboard"))])]),s("div",{staticClass:"card-body"},[s("p",{staticClass:"card-text"},[e.leaderboard?s("ol",{staticClass:"score-list"},e._l(e.leaderboard.slice(0,e.leaderNum),(function(t,i){return s("li",{key:i,staticClass:"score-item"},[s("p",[e._v(e._s(t.nickname))]),s("p",[e._v(e._s(t.score))])])})),0):e._e()])])])},F=[];const M="hu";console.log(M);var W={name:"Leaderboard",props:["leaderboard","finalScreen","isPlayer"],data(){return{leaderNum:this.finalScreen?this.leaderboard.length:5}},created(){console.log(this.isPlayer)}},Z=W,B=(0,c.Z)(Z,V,F,!1,null,"68715486",null),j=B.exports;let D=localStorage.getItem("username");var Y={name:"WaitingArea",props:["realtime"],components:{Question:x,Answer:Q,OnlinePlayers:L,LiveStats:U,Leaderboard:j},data(){return{isRoomClosed:null,quizRoomCode:null,myQuizRoomCh:null,headerLogo:"https://static.ably.dev/logo-h-white.svg?realtime-quiz-framework",videoView:"https://i.ibb.co/55NDmGT/Video-view.png",myNickname:D,myAvatarColor:null,didPlayerEnterRoom:!1,onlinePlayersArr:[],hostNickname:null,didHostStartGame:!1,timer:null,showQuestions:!1,newQuestion:null,newChoices:null,choices_ids:[],question_id:null,newQuestionNumber:null,isLastQuestion:null,questionTimer:30,correctAnswerIndex:null,showAnswer:!1,myClientId:null,didAnswerCorrectly:null,clickedPlayerQuestionIndex:null,clickedPlayerAnswerIndex:null,showImg:!1,questionImgLink:null,didHostForceQuizEnd:!1,numAnswered:0,numPlaying:0,leaderboard:null,showFinalScreen:!1}},methods:{subscribeToQuizRoomChEvents(){this.myQuizRoomCh.subscribe("new-player",(e=>{this.handleNewPlayerEntered(e)})),this.myQuizRoomCh.subscribe("start-quiz-timer",(e=>{this.didHostStartGame=!0,this.timer=e.data.countDownSec})),this.myQuizRoomCh.subscribe("new-question",(e=>{this.handleNewQuestionReceived(e)})),this.myQuizRoomCh.subscribe("question-timer",(e=>{this.questionTimer=e.data.countDownSec,this.questionTimer<0&&(this.questionTimer=30)})),this.myQuizRoomCh.subscribe("correct-answer",(e=>{this.handleCorrectAnswerReceived(e)})),this.myQuizRoomCh.subscribe("quiz-ending",(()=>{this.handleQuizEnding()})),this.myQuizRoomCh.subscribe("live-stats-update",(e=>{this.numAnswered=e.data.numAnswered,this.numPlaying=e.data.numPlaying})),this.myQuizRoomCh.subscribe("full-leaderboard",(e=>{this.leaderboard=e.data.leaderboard}))},handleNewPlayerEntered(e){let{clientId:t,nickname:s,avatarColor:i}=e.data.newPlayerState;this.onlinePlayersArr.push({clientId:t,nickname:s,avatarColor:i})},handleNewQuestionReceived(e){console.log(e.data),this.showQuestions=!0,this.showAnswer=!1,this.newQuestionNumber=e.data.questionNumber,this.newQuestion=e.data.question,this.newChoices=e.data.choices,this.choices_ids=e.data.choices_ids,this.question_id=e.data.question_id,this.isLastQuestion=e.data.isLastQuestion,this.showImg=e.data.showImg,this.questionImgLink=e.data.imgLink,this.numAnswered=e.data.numAnswered,this.numPlaying=e.data.numPlaying},handleCorrectAnswerReceived(e){this.newQuestionNumber==e.data.questionNumber&&(this.correctAnswerIndex=e.data.correctAnswerIndex,this.newQuestionNumber-1==this.clickedPlayerQuestionIndex&&this.clickedPlayerAnswerIndex==this.correctAnswerIndex?this.didAnswerCorrectly=!0:this.didAnswerCorrectly=!1,this.showAnswer=!0),this.isLastQuestion&&(this.showFinalScreen=!0)},handleQuizEnding(){this.didHostForceQuizEnd=!0},setUpMyChannel(){this.myClientId=this.realtime.auth.clientId,this.myInputCh=this.realtime.channels.get(`${this.quizRoomCode}:player-ch-${this.myClientId}`)},async enterRoomWithNickname(){localStorage.getItem("token");this.myQuizRoomCh.presence.enter({nickname:this.myNickname,avatarColor:this.myAvatarColor,isHost:!1}),this.didPlayerEnterRoom=!0,this.getExistingPresenceSet(),this.subscribeToQuizRoomChEvents(),this.setUpMyChannel()},getExistingPresenceSet(){this.myQuizRoomCh.presence.get(((e,t)=>{if(e)console.log(e);else for(let s=0;s<t.length;s++){let{nickname:e,avatarColor:i,isHost:n}=t[s].data;n?this.hostNickname=e:this.onlinePlayersArr.push({clientId:t[s].clientId,nickname:e,avatarColor:i,isHost:n})}}))},playerAnswer(e){this.clickedPlayerQuestionIndex=e.questionIndex,this.clickedPlayerAnswerIndex=e.playerAnswerIndex}},async created(){this.quizRoomCode=this.$route.query.quizCode,await w().get("/game/checkRoomStatus?quizCode="+this.quizRoomCode).then((e=>{this.isRoomClosed=e.data.isRoomClosed})),this.myQuizRoomCh=this.realtime.channels.get(`${this.quizRoomCode}:primary`),this.myAvatarColor="#"+Math.random().toString(16).slice(-6)},beforeDestroy(){this.myQuizRoomCh&&this.myQuizRoomCh.presence.leave(),this.questionTimer=30}},J=Y,K=(0,c.Z)(J,m,p,!1,null,"4518fc39",null),X=K.exports,ee=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.isTypeChosen?e._e():s("div",{staticClass:"host-home card"},[s("div",{staticClass:"img-header"},[s("a",{staticClass:"ably-branding",attrs:{href:"https://www.ably.com/",target:"_blank"}},[s("h2",[e._v("Live Quiz App")]),s("hr"),s("div",{staticClass:"ably-power"},[s("strong",[e._v("powered by")]),s("img",{attrs:{src:e.headerLogo,alt:"Header image"}})])])]),s("div",{staticClass:"card-body home-text"},[s("h5",{staticClass:"card-title"},[e._v("Hello Quizmaster! + Oval")]),s("p",{staticClass:"card-text"},[e._v(" You can use this app to upload your own quiz questions and host a live quiz for any number of participants. As the host, you'll be able to see the live stats at all times and will have full control of the quiz during the live game. You can try it out by hosting a randomly chosen quiz! ")]),s("p",{staticClass:"card-text"},[e._v(" You can share your screen with the participants while they answer the questions via their mobile browsers for best experience. ")]),e.isSmallWidth?e._e():[s("button",{staticClass:"btn",attrs:{id:"btn-1",type:"submit"},on:{click:function(t){return e.setQuizType("CustomQuiz")}}},[e._v(" Create your own quiz ")]),s("button",{staticClass:"btn",attrs:{type:"submit"},on:{click:function(t){return e.setQuizType("RandomQuiz")}}},[e._v(" Host a randomly chosen quiz ")])],e.isSmallWidth?[e._m(0)]:e._e()],2),e._m(1)]),e.isTypeChosen?[s("CreateQuizRoom",{attrs:{realtime:e.realtime,ablyClientId:e.ablyClientId,quizType:e.quizType,showHome:e.showHome}})]:e._e()],2)},te=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("small",{staticClass:"mobile-msg"},[e._v(" It looks like you are on a mobile browser, please switch to a desktop to host this quiz."),s("br"),e._v(" Your audience can participate on mobile browsers though. ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card-footer text-muted footer-black"},[s("a",{staticClass:"link",attrs:{href:"https://github.com/Srushtika/realtime-quiz-framework",target:"_blank"}},[e._v("Learn how to build your own realtime quiz app with Ably →")])])}],se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.showQuestions?e._e():s("div",{staticClass:"host-home card"},[e.isRoomReady?s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[e._v("Your quiz room is ready")]),s("p",{staticClass:"card-text"},[e._v(" Invite your players to join by sharing this link ")]),s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(t){return e.copyPlayerInviteLink()}}},[e._v(" "+e._s(e.copyBtnText)+" "),e.copyClicked?e._e():s("i",{staticClass:"far fa-copy"})]),s("hr"),s("OnlinePlayers",{attrs:{timer:e.timer,onlinePlayersArr:e.onlinePlayersArr,didHostStartGame:e.didHostStartGame}}),e.onlinePlayersArr.length>0?[e.didHostStartGame?e._e():s("div",[s("hr"),s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(t){return e.startQuiz()}}},[e._v(" Start the quiz ")])])]:e._e()],2):s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title"},[e._v(" Host "+e._s("CustomQuiz"===e.quizType?"your own ":"a randomly chosen ")+" quiz ")]),"CustomQuiz"==e.quizType?[s("div",[s("p",{staticClass:"card-text"},[e._v(" You can add your own quiz questions in Google Sheets and host a live quiz. Simply make a copy of the template and fill it with your data. ")]),s("div",{staticClass:"sheets-template"},[s("a",{staticClass:"orange-txt",attrs:{href:e.templateCopyURL,target:"_blank",role:"button"}},[e._v(" Get the Google Sheets template")]),s("p",{staticClass:"card-text template-instructions"},[e._v(" After you've prepared the questions and answers, you need to do two things: "),s("br"),e._v(" 1. Copy the URL of your sheet from the browser's address bar and paste it in the field below "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.sheetURL,expression:"sheetURL"}],staticClass:"form-control input-box",attrs:{placeholder:"Add the URL to your sheet",disabled:e.createBtnClicked},domProps:{value:e.sheetURL},on:{input:function(t){t.target.composing||(e.sheetURL=t.target.value)}}}),e._v(" 2. Make your Google sheet publicly available by going to File > Publish to the web > Publish. You might be presented with a different shareable URL, you can ignore that. ")])])])]:e._e(),s("p",{staticClass:"card-text"},[e._v(" We need a nickname for you so the players of your quiz can identify you ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.hostNickname,expression:"hostNickname"}],staticClass:"form-control input-box",attrs:{placeholder:"Enter nickname",disabled:e.createBtnClicked},domProps:{value:e.hostNickname},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createQuizRoom()},input:function(t){t.target.composing||(e.hostNickname=t.target.value)}}}),s("button",{staticClass:"btn",attrs:{type:"button create-random-btn",disabled:e.createBtnClicked},on:{click:function(t){return e.createQuizRoom()}}},[e._v(" "+e._s(e.btnText)+" ")]),e.sheetURLErr?s("div",{staticClass:"alert alert-danger sheet-error",attrs:{role:"alert"}},[e._v(" There is a problem with the URL to your sheet. Please recheck it per the instructions above, refresh this page and try again. You can reach out to support@ably.com for further assistance. ")]):e._e()],2),s("div",{staticClass:"card-footer text-muted div-black"},[s("button",{staticClass:"btn btn-link back-btn",attrs:{type:"button"},on:{click:function(t){return e.showHome()}}},[e._v(" ← Go back ")])])]),e.showQuestions&&!e.showFinalScreen?s("div",{staticClass:"d-flex bd-highlight"},[s("div",{staticClass:"question-flex bd-highlight"},[s("Question",{attrs:{newQuestion:e.newQuestion,newChoices:e.newChoices,newQuestionNumber:e.newQuestionNumber,isLastQuestion:e.isLastQuestion,questionTimer:e.questionTimer,correctAnswerIndex:e.correctAnswerIndex,showImg:e.showImg,questionImgLink:e.questionImgLink,isAdminView:!0,correctAnswer:e.newChoices[e.correctAnswerIndex],showAnswer:e.showAnswer}})],1),s("div",{staticClass:"stats-flex bd-highlight"},[e.showAnswer?e._e():s("LiveStats",{attrs:{numAnswered:e.numAnswered,numPlaying:e.numPlaying}}),e.showAnswer?s("div",[s("Leaderboard",{attrs:{leaderboard:e.leaderboard,isPlayer:!1,finalScreen:!1}}),s("AdminPanel",{attrs:{hostAdminCh:e.hostAdminCh,prevQuestionNumber:e.newQuestionNumber},on:{"end-quiz-now":function(t){return e.endQuizNow()}}})],1):e._e()],1)]):e._e(),e.showFinalScreen?s("div",{staticClass:"quizEnded"},[e._m(0),s("Leaderboard",{attrs:{leaderboard:e.leaderboard,isPlayer:!1,finalScreen:!0}})],1):e._e()])},ie=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-white end-msg"},[s("h6",[e._v("The quiz has ended")]),s("h1",{staticClass:"display-4"},[e._v("Congratulations to the winners 🎉🎉🎉")])])}],ne=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"alert alert-secondary admin-panel",attrs:{role:"alert"}},[s("h4",{staticClass:"alert-heading"},[e._v("Host control panel")]),s("hr"),s("button",{staticClass:"btn btn-dark btn-next",attrs:{type:"button"},on:{click:function(t){return e.showNextQuestion()}}},[e._v(" Show next question ")]),s("br"),s("button",{staticClass:"btn btn-link end-btn",attrs:{type:"button"},on:{click:function(t){return e.endQuizNow()}}},[e._v(" End quiz and show results ")])])},ae=[],re={name:"AdminPanel",props:["hostAdminCh","prevQuestionNumber"],methods:{showNextQuestion(){this.hostAdminCh.publish("next-question",{prevQIndex:this.prevQuestionNumber-1})},endQuizNow(){this.hostAdminCh.publish("end-quiz-now",{end:!0}),this.$emit("end-quiz-now")}}},oe=re,le=(0,c.Z)(oe,ne,ae,!1,null,"002967ae",null),ue=le.exports,ce=s(2712),de={name:"QuizType",props:["resetCmpFn","realtime","quizType","showHome"],components:{Question:x,AdminPanel:ue,LiveStats:U,Leaderboard:j,OnlinePlayers:L},data(){return{globalQuizChName:"main-quiz-thread",globalQuizCh:null,myQuizRoomCode:this.getRandomRoomId(),myQuizRoomCh:null,hostAdminCh:"a",hostNickname:null,btnText:"Create my quiz room",createBtnClicked:!1,isRoomReady:!1,playerLinkBase:window.location.href+"/play",playerLink:null,copyBtnText:"Copy shareable link",copyClicked:!1,onlinePlayersArr:[],didHostStartGame:!1,timer:null,showQuestions:!1,newQuestionNumber:null,newQuestion:null,newChoices:[],choices_ids:[],isLastQuestion:null,questionTimer:30,correctAnswerIndex:null,showAnswer:!1,numAnswered:0,numPlaying:0,leaderboard:null,templateCopyURL:"https://docs.google.com/spreadsheets/d/12_Cnv86fI4JOnJq5t9BQmxiPTNZgMsd0PP7Sbjm7WkQ/copy?usp=sharing",sheetURL:"",sheetURLErr:!1,customQuizQuestions:null,showImg:!1,questionImgLink:null,showFinalScreen:!1}},methods:{createQuizRoom(){if(this.createBtnClicked=!0,"RandomQuiz"===this.quizType)this.btnText="Creating your quiz room...";else{this.btnText="Loading your questions and creating your quiz room...";let e=new RegExp("/spreadsheets/d/([a-zA-Z0-9-_]+)").exec(this.sheetURL)[1];if(null==e||null==this.sheetURL)return void(this.sheetURLErr=!0);const t={sheetId:e,sheetNumber:1,returnAllResults:!0};ce(t,(e=>{console.log(e),this.customQuizQuestions=e}),(e=>{this.sheetURLErr=!0,console.log(e)}))}this.waitForGameRoom(),this.enterMainThread()},waitForGameRoom(){this.myQuizRoomCh=this.realtime.channels.get(`${this.myQuizRoomCode}:primary`),this.hostAdminCh=this.realtime.channels.get(`${this.myQuizRoomCode}:host`),this.myQuizRoomCh.subscribe("thread-ready",(()=>{this.handleQuizRoomReady()}))},handleQuizRoomReady(){if(this.isRoomReady=!0,this.globalQuizCh.detach(),this.enterGameRoomAndSubscribeToEvents(),this.playerLink=`${this.playerLinkBase}?quizCode=${this.myQuizRoomCode}`,"CustomQuiz"==this.quizType){let e=this.customQuizQuestions;this.hostAdminCh.publish("quiz-questions",{questions:e})}},enterGameRoomAndSubscribeToEvents(){this.myQuizRoomCh.presence.enter({nickname:this.hostNickname,avatarColor:this.myAvatarColor,isHost:!0,quizType:this.quizType}),this.subscribeToRoomChEvents()},enterMainThread(){this.globalQuizCh=this.realtime.channels.get(this.globalQuizChName),this.globalQuizCh.presence.enter({nickname:this.hostNickname,roomCode:this.myQuizRoomCode})},getRandomRoomId(){return"room-"+Math.random().toString(36).substr(2,8)},subscribeToRoomChEvents(){this.myQuizRoomCh.subscribe("new-player",(e=>{this.handleNewPlayerEntered(e)})),this.myQuizRoomCh.subscribe("start-quiz-timer",(e=>{this.didHostStartGame=!0,this.timer=e.data.countDownSec})),this.myQuizRoomCh.subscribe("new-question",(e=>{this.handleNewQuestionReceived(e)})),this.myQuizRoomCh.subscribe("question-timer",(e=>{this.questionTimer=e.data.countDownSec,this.questionTimer<0&&(this.questionTimer=30)})),this.myQuizRoomCh.subscribe("correct-answer",(e=>{this.handleCorrectAnswerReceived(e)})),this.myQuizRoomCh.subscribe("live-stats-update",(e=>{this.numAnswered=e.data.numAnswered,this.numPlaying=e.data.numPlaying})),this.myQuizRoomCh.subscribe("full-leaderboard",(e=>{this.leaderboard=e.data.leaderboard}))},handleNewPlayerEntered(e){let{clientId:t,nickname:s,avatarColor:i,isHost:n}=e.data.newPlayerState;n||this.onlinePlayersArr.push({clientId:t,nickname:s,avatarColor:i,isHost:n})},handleNewQuestionReceived(e){this.showAnswer=!1,this.showQuestions=!0,this.newQuestionNumber=e.data.questionNumber,this.newQuestion=e.data.question,this.newChoices=e.data.choices,this.choices_ids=e.data.choices_ids,this.isLastQuestion=e.data.isLastQuestion,this.numAnswered=e.data.numAnswered,this.numPlaying=e.data.numPlaying,this.showImg=e.data.showImg,this.questionImgLink=e.data.imgLink},handleCorrectAnswerReceived(e){this.showAnswer=!0,this.newQuestionNumber==e.data.questionNumber&&(this.correctAnswerIndex=e.data.correctAnswerIndex),this.isLastQuestion&&(this.showFinalScreen=!0)},copyPlayerInviteLink(){this.copyClicked=!0,this.copyBtnText="Copied!",setTimeout((()=>{this.copyClicked=!1,this.copyBtnText="Copy shareable link"}),2e3),navigator.clipboard.writeText(this.playerLink)},startQuiz(){this.hostAdminCh.publish("start-quiz",{start:!0})},endQuizNow(){this.showFinalScreen=!0}},beforeDestroy(){this.myQuizRoomCh&&this.myQuizRoomCh.presence.leave(),this.questionTimer=30}},he=de,me=(0,c.Z)(he,se,ie,!1,null,"349b9ddc",null),pe=me.exports,ye={props:["realtime","ablyClientId"],data(){return{isTypeChosen:!1,headerLogo:"https://static.ably.dev/logo-h-white.svg?realtime-quiz-framework",quizType:"",windowWidth:window.innerWidth}},components:{CreateQuizRoom:pe},methods:{setQuizType(e){this.isTypeChosen=!0,this.quizType=e},showHome(){this.isTypeChosen=!1}},computed:{isSmallWidth(){return this.windowWidth>480?(console.log(this.windowWidth),!1):(console.log(this.windowWidth),!0)}}},we=ye,ve=(0,c.Z)(we,ee,te,!1,null,"62df76f2",null),be=ve.exports,Ce=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.requestOTP?s("div",{staticClass:"auth_section"},[s("div",{staticClass:"auth_container"},[s("div",{staticStyle:{"text-align":"center"}},[s("p",[e._v("Enter the 6-digit code we sent to "+e._s(e.channel_type)+e._s(e.phone_number.slice(1,11))+" ")])]),s("br"),s("div",[s("OTPInput",{attrs:{isDisabled:e.isDisabled,isError:e.isError,onChangeOTP:e.onChangeOTP,shouldResetOTP:e.shouldResetOTP,numberOfInput:6}}),s("br"),s("div",{staticClass:"validate_otp"},[s("button",{staticClass:"btn otp-btn",on:{click:e.onSubmitToLogin}},[e._v("Next")])])],1),e._m(0)])]):s("div",{staticClass:"auth_section"},[s("div",{staticClass:"auth_container"},[s("form",{attrs:{method:"POST"}},[e._m(1),s("div",{staticClass:"grouped_field"},[s("label",{attrs:{for:"phone-number"}},[e._v("Phone Number")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone_number,expression:"phone_number"}],staticClass:"form-control auth-input",attrs:{type:"text",required:"",minlength:"1",maxlength:"11",name:"phone-number"},domProps:{value:e.phone_number},on:{input:function(t){t.target.composing||(e.phone_number=t.target.value)}}})]),s("div",{staticClass:"grouped_field"},[s("label",{attrs:{for:"email"}},[e._v("Email Address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email_address,expression:"email_address"}],staticClass:"form-control auth-input",attrs:{type:"email",required:"",minlength:"1",name:"email-address"},domProps:{value:e.email_address},on:{input:function(t){t.target.composing||(e.email_address=t.target.value)}}})]),s("div",{staticClass:"submit_field"},[s("button",{staticClass:"btn auth-btn",on:{click:e.ConfirmOTP}},[e._v("Next")])])]),e._m(2)])])},_e=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"note_section"},[s("p",[e._v("Note:")]),s("ul",[s("li",[e._v("TriviaBillionia is available in only Nigeria currently")]),s("li",[e._v("Input your phon number & email to get OTP 6 digit code send to both (email is optional but include it just in case SMS delivery takes a while)")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"grouped_field"},[s("label",{attrs:{for:"phone-number"}},[e._v("Channel Type")]),s("select",{staticClass:"auth-selection",attrs:{name:"country-code"}},[s("option",{attrs:{value:"ng",selected:"",disabled:"",hidden:""}},[e._v("Nigeria (+234)")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"note_section"},[s("p",[e._v("Note:")]),s("ul",[s("li",[e._v("TriviaBillionia is available in only Nigeria currently")]),s("li",[e._v("Input your phon number & email to get OTP 6 digit code send to both (email is optional but include it just in case SMS delivery takes a while)")])])])}],ge=s(6098),fe=s.n(ge);const ke="https://dev.triviabillionia.com/api";var Qe={name:"login",components:{OTPInput:fe()},data(){return{channel_type:"phone",phone_number:"",email_address:"",requestOTP:!1,otp:null,isDisabled:!1,isError:!1,shouldResetOTP:!1}},methods:{onChangeOTP(e){this.otp=e},ConfirmOTP(e){if(e.preventDefault(),""!==this.phone_number&&""!==this.email_address)try{w().get(`${ke}/verify?type=1&number=${this.phone_number}&country=ng&language=en`).then((e=>{console.log(e.statusText),"OK"===e.statusText&&(this.requestOTP=!0)}))}catch(t){console.log(t)}},onSubmitToLogin(e){e.preventDefault(),console.log("Authenticate This User"),console.log(this.otp,this.phone_number,this.email_address,this.channel_type);try{w().post(`${ke}/login`,{channel_type:this.channel_type,channel_id:"+2348149055068",channel_email:this.email_address,channel_verification:this.otp}).then((e=>{console.log(e),console.log("Token: "+e.data.token),console.log("Username: "+e.data.username),localStorage.setItem("username",e.data.username),localStorage.setItem("token",e.data.token),"OK"===e.statusText&&this.$router.push({path:"/",replace:!0})}))}catch(t){console.log(t)}}}},Ae=Qe,ze=(0,c.Z)(Ae,Ce,_e,!1,null,"5decb430",null),qe=ze.exports,Re=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},xe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"auth_section"},[s("div",{staticClass:"auth_container"},[s("h1",[e._v("Profile Page")])])])}],Pe={},Te=(0,c.Z)(Pe,Re,xe,!1,null,null,null),Ie=Te.exports,Se=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ne=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"auth_section"},[s("div",{staticClass:"auth_container"},[s("h1",[e._v("LeaderBoard Page")])])])}],Le={},Ee=(0,c.Z)(Le,Se,Ne,!1,null,null,null),Oe=Ee.exports;const $e=[{path:"/game/play",component:X},{path:"/game",component:be},{path:"/login",component:qe},{path:"/game/profile",component:Ie},{path:"/game/leaderboard",component:Oe}];i["default"].config.productionTip=!1,i["default"].use(n.Z);const He=new n.Z({routes:$e,mode:"history"});new i["default"]({router:He,render:e=>e(h)}).$mount("#app")}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,i,n,a){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],a=e[c][2];for(var o=!0,l=0;l<i.length;l++)(!1&a||r>=a)&&Object.keys(s.O).every((function(e){return s.O[e](i[l])}))?i.splice(l--,1):(o=!1,a<r&&(r=a));if(o){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[i,n,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,a,r=i[0],o=i[1],l=i[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(l)var c=l(s)}for(t&&t(i);u<r.length;u++)a=r[u],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(c)},i=self["webpackChunkrealtime_quiz"]=self["webpackChunkrealtime_quiz"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(3647)}));i=s.O(i)})();
//# sourceMappingURL=app.0c3c4b48.js.map