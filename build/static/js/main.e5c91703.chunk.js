(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{240:function(e,t){},249:function(e,t){},267:function(e,t){},269:function(e,t){},288:function(e,t){},289:function(e,t){},352:function(e,t){},354:function(e,t){},387:function(e,t){},389:function(e,t){},390:function(e,t){},395:function(e,t){},397:function(e,t){},403:function(e,t){},405:function(e,t){},418:function(e,t){},430:function(e,t){},433:function(e,t){},438:function(e,t){},446:function(e,t){},455:function(e,t){},457:function(e,t){},527:function(e,t,n){},528:function(e,t,n){},529:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(81),s=n.n(a),r=n(14),i=n.n(r),o=n(41),l=n(65),j=n(54),d=n(64),b=n.n(d),h=n(217),u=n.n(h),m=n(66),O=n(218),p=n(17),g={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(p.a)(Object(p.a)({},g),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(p.a)(Object(p.a)({},g),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(p.a)(Object(p.a)({},e),{},{account:t.payload.account});default:return e}},f={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(p.a)(Object(p.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(p.a)(Object(p.a)({},f),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},y=Object(m.b)({blockchain:x,data:v}),_=[O.a],C=Object(m.c)(m.a.apply(void 0,_)),w=Object(m.d)(y,C),E=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},T=function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,w.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(E("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},k=function(e){return{type:"CONNECTION_FAILED",payload:e}},A=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(T());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=n(0);var N=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.blockchain})),n=Object(j.c)((function(e){return e.data})),a=Object(c.useState)(!1),s=Object(l.a)(a,2),r=s[0],d=s[1],h=Object(c.useState)("Click buy to mint your NFT."),m=Object(l.a)(h,2),O=m[0],p=m[1],g=Object(c.useState)(1),x=Object(l.a)(g,2),f=x[0],v=x[1],y=Object(c.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),_=Object(l.a)(y,2),C=_[0],w=_[1],E=function(){""!==t.account&&null!==t.smartContract&&e(T(t.account))},N=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,w(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){N()}),[]),Object(c.useEffect)((function(){E()}),[t.account]),Object(S.jsxs)("div",{className:"wrapper",id:"modern_wrap",children:[Object(S.jsx)("img",{class:"logo",src:"./img/logo.png",alt:"EXILE XCiX"}),Object(S.jsx)("nav",{children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsx)("a",{href:"#join",children:"JOIN EXILE XCiX"})}),Object(S.jsx)("li",{children:Object(S.jsx)("a",{href:"#roadmap",children:"ROADMAP"})}),Object(S.jsx)("li",{children:Object(S.jsx)("a",{href:"#team",children:"THE TEAM"})})]})}),Object(S.jsxs)("header",{class:"two-col-block",children:[Object(S.jsxs)("div",{class:"hero-text two-col-block__column",children:[Object(S.jsx)("h1",{children:"Join the Axis of Exiles"}),Object(S.jsx)("p",{children:"9,999 unique Exile XCIX NFTs randomly generated on the Ethereum blockchain."}),"//--PRE MINT--",Object(S.jsx)("div",{class:"mint-button pre-mint button",children:Object(S.jsx)("p",{children:"Mint coming soon"})}),"//--END PRE MINT-- //--MINT--",Object(S.jsxs)("h2",{class:"availability",children:[n.totalSupply," / ",C.MAX_SUPPLY]}),"//-- SOLD OUT--",Number(n.totalSupply)>=C.MAX_SUPPLY?Object(S.jsxs)("div",{class:"sold-out",children:[Object(S.jsx)("div",{class:"mint-button button",children:Object(S.jsx)("p",{children:"SOLD OUT"})}),Object(S.jsxs)("p",{children:["You can still find ",C.NFT_NAME," on",Object(S.jsx)("a",{target:"_blank",href:C.MARKETPLACE_LINK,children:C.MARKETPLACE})]})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("h3",{children:["1 ",C.SYMBOL," costs ",C.DISPLAY_COST," ",C.NETWORK.SYMBOL,"."]}),Object(S.jsx)("p",{children:"Excluding gas fees."}),""===t.account||null===t.smartContract?Object(S.jsxs)("div",{class:"not-connected",children:[Object(S.jsxs)("p",{children:["Connect to the ",C.NETWORK.NAME," network"]}),Object(S.jsxs)("div",{class:"connect-wrap",children:[Object(S.jsx)("div",{class:"button connect-btn",onClick:function(t){t.preventDefault(),e(function(){var e=Object(o.a)(i.a.mark((function e(t){var n,c,a,s,r,o,l,j,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=e.sent,e.next=12,a.json();case 12:if(s=e.sent,r=window,!(o=r.ethereum)||!o.isMetaMask){e.next=33;break}return b.a.setProvider(o),l=new u.a(o),e.prev=18,e.next=21,o.request({method:"eth_requestAccounts"});case 21:return j=e.sent,e.next=24,o.request({method:"net_version"});case 24:e.sent==s.NETWORK.ID?(d=new b.a(c,s.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:j[0],smartContract:d,web3:l}}),o.on("accountsChanged",(function(e){t(A(e[0]))})),o.on("chainChanged",(function(){window.location.reload()}))):t(k("Change network to ".concat(s.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(k("Something went wrong."));case 31:e.next=34;break;case 33:t(k("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),E()},children:Object(S.jsx)("p",{children:"CONNECT"})}),""!==t.errorMsg?Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("p",{children:t.errorMsg})}):null]})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("p",{children:O}),Object(S.jsxs)("div",{class:"purchase-wrap",children:[Object(S.jsxs)("div",{class:"quantity",children:[Object(S.jsx)("div",{class:"button decrement-btn",disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=f-1;e<1&&(e=1),v(e)}()},children:"-"}),Object(S.jsx)("p",{children:f}),Object(S.jsx)("div",{class:"button increment-btn",disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=f+1;e>10&&(e=10),v(e)}()},children:"+"})]}),Object(S.jsx)("div",{class:"buy",children:Object(S.jsx)("div",{class:"button mint-nft",disabled:r?1:0,onClick:function(n){n.preventDefault(),function(){var n=C.WEI_COST,c=C.GAS_LIMIT,a=String(n*f),s=String(c*f);console.log("Cost: ",a),console.log("Gas limit: ",s),p("Minting your ".concat(C.NFT_NAME,"...")),d(!0),t.smartContract.methods.mint(f).send({gasLimit:String(s),to:C.CONTRACT_ADDRESS,from:t.account,value:a}).once("error",(function(e){console.log(e),p("Sorry, something went wrong please try again later."),d(!1)})).then((function(n){console.log(n),p("WOW, the ".concat(C.NFT_NAME," is yours! go visit Opensea.io to view it.")),d(!1),e(T(t.account))}))}(),E()},children:r?"BUSY":"BUY"})})]})]})]}),"//--END MINT--"]}),Object(S.jsxs)("div",{class:"hero-img two-col-block__column",children:[Object(S.jsx)("img",{src:"./img/hero.png",alt:"EXILE XCiX"}),Object(S.jsx)("div",{class:"sticky-tape sticky-tape-1"}),Object(S.jsx)("div",{class:"sticky-tape sticky-tape-2"})]})]}),Object(S.jsxs)("div",{class:"disclaimer",children:[Object(S.jsxs)("p",{children:["Please make sure you are connected to the right network (",C.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(S.jsxs)("p",{children:["We have set the gas limit to ",C.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]}),Object(S.jsxs)("main",{children:[Object(S.jsx)("a",{id:"join"}),Object(S.jsxs)("section",{class:"join-exile two-col-block","aria-label":"Join Exile XCiX",children:[Object(S.jsxs)("div",{class:"join-copy two-col-block__column",children:[Object(S.jsxs)("h2",{children:["NFT project for the ",Object(S.jsx)("span",{children:"XCIX"})]}),Object(S.jsx)("p",{children:"We'd love to bring together a diverse range of creators and help them to get their projects off the ground by introducing them to complementary creators, using our network to promote them and a community fund to invest in them."}),Object(S.jsx)("p",{children:"Join the Discord, follow on Twitter. If you want to be rewarded be brave, be busy, be creative, and importantly believe!"})]}),Object(S.jsxs)("div",{class:"join-links two-col-block__column",children:[Object(S.jsx)("p",{children:"JOIN US:"}),Object(S.jsxs)("div",{class:"two-col-block social",children:[Object(S.jsx)("a",{href:"",target:"_blank",class:"two-col-block__column",children:Object(S.jsx)("img",{src:"./img/discord.png",alt:"Discord"})}),Object(S.jsx)("a",{href:"https://twitter.com/ExileXCIX",target:"_blank",class:"two-col-block__column",children:Object(S.jsx)("img",{src:"./img/twitter.png",alt:"Twitter"})})]})]})]}),Object(S.jsx)("section",{class:"banner",children:Object(S.jsx)("img",{src:"./img/banner.png",alt:"banner"})}),Object(S.jsxs)("section",{class:"origins",children:[Object(S.jsx)("h2",{children:"Exile Origins"}),Object(S.jsxs)("div",{class:"two-col-block",children:[Object(S.jsxs)("div",{class:"origins-copy-left two-col-block__column",children:[Object(S.jsx)("p",{class:"no-margin",children:"You may not realise it but life exists beyond your reality, somewhat different yet sharing the same struggles. Tyranny, selfishness, greed. These are universal. Where there is life, they exist."}),Object(S.jsx)("p",{children:"For centuries and through these dimensions, a governing elite 1% have put in place rules, regulations and restrictions to control the \u2018remainder\u2019."}),Object(S.jsx)("p",{children:"One rebel, a variation of whom exists in every dimension, unique yet familiar, has long fought for this \u2018remainder\u2019. Operating in the shadows with name and description passed on through folklore, hearsay and partial sightings \u2013 long admired by the people."})]}),Object(S.jsxs)("div",{class:"origins-copy-right two-col-block__column",children:[Object(S.jsx)("p",{class:"no-margin",children:"However, the line between good and evil is a thin one. One man\u2019s friend is another man\u2019s foe. Increasingly outcast by mainstream society as the elite use their tightening grip of media to turn public opinion against the rebel and pursue them for their \u2018crimes\u2019."}),Object(S.jsx)("p",{children:"Individually outnumbered, out-financed, isolated and exhausted. The rebels have been banished from the disparate dimensions with a bounty on their head, exiled by the very people they were trying to help."}),Object(S.jsx)("p",{children:"Now, banding together for the first time, realising that they are stronger together than alone, our exiles are resolute."}),Object(S.jsx)("p",{children:"They will continue the fight for the remaining 99."})]})]})]}),Object(S.jsx)("a",{id:"roadmap"}),Object(S.jsxs)("section",{class:"roadmap",children:[Object(S.jsxs)("h2",{children:["Roadmap ",Object(S.jsx)("span",{children:"Coming Soon"})]}),Object(S.jsx)("p",{children:"Our project ethos is to help the underdog, support the little guy and a belief that we can achieve much more together than we could have alone. Our roadmap is design to help achieve that and will be voted on by the community before finalising."}),Object(S.jsx)("img",{src:"./img/graffiti.png",alt:"XCiX"})]}),Object(S.jsx)("a",{id:"team"}),Object(S.jsxs)("section",{class:"team",children:[Object(S.jsx)("h2",{children:"The Team"}),Object(S.jsx)("p",{class:"blurb",children:"A team of 4 Exiles each with 10-15yrs experience across creative, technical, marketing and innovation. All a bit worn down by the grind of a 9-5, feeling boxed-in and under-utilised. We aim to break free and invest more time in developing and supporting creative ventures. Hence the inspiration for the project."}),Object(S.jsxs)("div",{class:"team-member brian two-col-block",children:[Object(S.jsx)("img",{src:"./img/brian.png",alt:"Brian",class:"team-avatar two-col-block__column"}),Object(S.jsxs)("div",{class:"team-memeber-info two-col-block__column",children:[Object(S.jsx)("h4",{class:"team-member-name",children:"Xro"}),Object(S.jsx)("p",{class:"team-member-bio",children:"Story, organisation and coordination"})]})]}),Object(S.jsxs)("div",{class:"team-member peter two-col-block",children:[Object(S.jsx)("img",{src:"./img/peter.png",alt:"Peter",class:"team-avatar two-col-block__column"}),Object(S.jsxs)("div",{class:"team-memeber-info two-col-block__column",children:[Object(S.jsx)("h4",{class:"team-member-name",children:"Pedro"}),Object(S.jsx)("p",{class:"team-member-bio",children:"Artist with an attitude."})]})]}),Object(S.jsxs)("div",{class:"team-member alan two-col-block",children:[Object(S.jsx)("img",{src:"./img/alan.png",alt:"Alan",class:"team-avatar two-col-block__column"}),Object(S.jsxs)("div",{class:"team-memeber-info two-col-block__column",children:[Object(S.jsx)("h4",{class:"team-member-name",children:"Al"}),Object(S.jsx)("p",{class:"team-member-bio",children:"Technology and development."})]})]}),Object(S.jsxs)("div",{class:"team-member mal two-col-block",children:[Object(S.jsx)("img",{src:"./img/mal.png",alt:"Mal",class:"team-avatar two-col-block__column"}),Object(S.jsxs)("div",{class:"team-memeber-info two-col-block__column",children:[Object(S.jsx)("h4",{class:"team-member-name",children:"Macky"}),Object(S.jsx)("p",{class:"team-member-bio",children:"Community, creative and security."})]})]})]}),Object(S.jsxs)("section",{class:"partners",children:[Object(S.jsx)("h2",{children:"Exile Alliances"}),Object(S.jsxs)("div",{class:"partner-wrap",children:[Object(S.jsx)("div",{class:"partner",children:Object(S.jsx)("a",{href:"",target:"_blank",children:Object(S.jsx)("img",{src:"./img/alan.png",alt:""})})}),Object(S.jsx)("div",{class:"partner",children:Object(S.jsx)("a",{href:"",target:"_blank",children:Object(S.jsx)("img",{src:"./img/alan.png",alt:""})})}),Object(S.jsx)("div",{class:"partner",children:Object(S.jsx)("a",{href:"",target:"_blank",children:Object(S.jsx)("img",{src:"./img/alan.png",alt:""})})}),Object(S.jsx)("div",{class:"partner",children:Object(S.jsx)("a",{href:"",target:"_blank",children:Object(S.jsx)("img",{src:"./img/alan.png",alt:""})})}),Object(S.jsx)("div",{class:"partner",children:Object(S.jsx)("a",{href:"",target:"_blank",children:Object(S.jsx)("img",{src:"./img/alan.png",alt:""})})}),Object(S.jsx)("div",{class:"partner",children:Object(S.jsx)("a",{href:"",target:"_blank",children:Object(S.jsx)("img",{src:"./img/alan.png",alt:""})})})]})]})]})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,533)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(527),n(528);s.a.render(Object(S.jsx)(j.a,{store:w,children:Object(S.jsx)(N,{})}),document.getElementById("root")),M()}},[[529,1,2]]]);
//# sourceMappingURL=main.e5c91703.chunk.js.map