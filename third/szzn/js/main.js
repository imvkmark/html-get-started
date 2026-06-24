var LGlobal={};

L.imgPath="images/";
L.soundPath="sound/";
L.Loader.add([
	{name:"bg",path:"bg.jpg"},{name:"s0_e1",path:"s0_e1.png"},{name:"s0_t1",path:"s0_t1.png"},{name:"s0_t2",path:"s0_t2.png"},
	{name:"bg1",path:"bg1.jpg"},{name:"bg2",path:"bg2.jpg"},{name:"bg3",path:"bg3.jpg"},{name:"bg4",path:"bg4.jpg"},
	{name:"bg5",path:"bg5.jpg"},{name:"bg6",path:"bg6.jpg"},{name:"bg7",path:"bg7.jpg"},{name:"bg8",path:"bg8.jpg"},
	{name:"bg9",path:"bg9.jpg"},{name:"bg10",path:"bg10.jpg"},{name:"bg11",path:"bg11.jpg"},{name:"bg12",path:"bg12.jpg"},
	{name:"bg13",path:"bg13.jpg"},{name:"bg14",path:"bg14.jpg"},{name:"bg15",path:"bg15.jpg"},
	{name:"bg16",path:"bg16.jpg"},{name:"bg17",path:"bg17.jpg"},{name:"bg18",path:"bg18.jpg"},
	{name:"bg19",path:"bg19.jpg"},{name:"bg20",path:"bg20.jpg"},{name:"bg21",path:"bg21.jpg"},{name:"bg22",path:"bg22.jpg"},
	{name:"bg23",path:"bg23.jpg"},{name:"bg24",path:"bg24.jpg"},
	{name:"s1_e1",path:"s1_e1.png"},{name:"s1_e2",path:"s1_e2.png"},{name:"s1_e3",path:"s1_e3.png"},
	{name:"s1_e4",path:"s1_e4.png"},{name:"s1_e5",path:"s1_e5.png"},{name:"s1_t1",path:"s1_t1.png"},
	{name:"s1_t2",path:"s1_t2.png"},{name:"s1_t3",path:"s1_t3.png"},{name:"s1_t1",path:"s1_t1.png"},
	{name:"s1_t2",path:"s1_t2.png"},{name:"s1_t3",path:"s1_t3.png"},
	{name:"s2_e1",path:"s2_e1.png"},{name:"s2_e2",path:"s2_e2.png"},
	{name:"jb1",path:"jb1.png"},{name:"jb2",path:"jb2.png"},{name:"jb3",path:"jb3.png"},{name:"jb4",path:"jb4.png"},
	{name:"jb5",path:"jb5.png"},{name:"jb6",path:"jb6.png"},{name:"jb7",path:"jb7.png"},
	{name:"s3_t1",path:"s3_t1.png"},
	{name:"s4_e1",path:"s4_e1.png"},
	{name:"s5_t1",path:"s5_t1.png"},
	{name:"s6_e1",path:"s6_e1.png"},{name:"s6_e3",path:"s6_e3.png"},
	{name:"s6_e4",path:"s6_e4.png"},{name:"s6_e5",path:"s6_e5.png"},{name:"s6_e6",path:"s6_e6.png"},
	{name:"s6_e7",path:"s6_e7.png"},{name:"s6_t1",path:"s6_t1.png"},{name:"s6_t2",path:"s6_t2.png"},{name:"s6_t3",path:"s6_t3.png"},
	{name:"s7_t1",path:"s7_t1.png"},
	{name:"ql",path:"ql.png"},
	{name:"s8_e1",path:"s8_e1.png"},{name:"s8_e2",path:"s8_e2.png"},{name:"s8_e3",path:"s8_e3.png"},
	{name:"s8_e4",path:"s8_e4.png"},{name:"s8_e5",path:"s8_e5.png"},
	{name:"point1",path:"point1.png"},{name:"point2",path:"point2.png"},
	{name:"s8_t1",path:"s8_t1.png"},{name:"s8_t2",path:"s8_t2.png"},{name:"s8_t3",path:"s8_t3.png"},
	{name:"s9_t1",path:"s9_t1.png"},{name:"s9_t2",path:"s9_t2.png"},
	{name:"s9_e2",path:"s9_e2.png"},{name:"s9_e3",path:"s9_e3.png"},
	{name:"s9_e4",path:"s9_e4.png"},{name:"s9_e5",path:"s9_e5.png"},
	{name:"arrow",path:"arrow.png"},
	{name:"s10_t1",path:"s10_t1.png"},{name:"s10_t2",path:"s10_t2.png"},
	{name:"pointer",path:"pointer.png"},
	{name:"p1",path:"p1.png"},{name:"p2",path:"p2.png"},
	{name:"yz1",path:"yz1.png"},{name:"yz2",path:"yz2.png"},{name:"yz3",path:"yz3.png"},
	{name:"yz4",path:"yz4.png"},{name:"yz5",path:"yz5.png"},{name:"yz6",path:"yz6.png"},
	{name:"fd1",path:"fd1.png"},{name:"fd2",path:"fd2.png"},{name:"fd3",path:"fd3.png"},
	{name:"s6_e8",path:"s6_e8.png"},
	{name:"s10_e1",path:"s10_e1.png"},
	{name:"s11_e1",path:"s11_e1.png"},
	{name:"s11_e2",path:"s11_e2.png"},
	{name:"s11_e3",path:"s11_e3.png"},
	{name:"s11_e4",path:"s11_e4.png"},
	{name:"s11_t1",path:"s11_t1.png"},
	{name:"s11_t2",path:"s11_t2.png"},
	{name:"plane",path:"plane.png"},
	{name:"s13_e1",path:"s13_e1.png"},
	{name:"s13_t1",path:"s13_t1.png"},
	{name:"s13_t2",path:"s13_t2.png"},
	{name:"s14_t1",path:"s14_t1.png"},
	{name:"s14_t2",path:"s14_t2.png"},
	{name:"s15_e1",path:"s15_e1.png"},
	{name:"s15_e2",path:"s15_e2.png"},
	{name:"s15_e3",path:"s15_e3.png"},
	{name:"s15_e4",path:"s15_e4.png"},
	{name:"s15_e5",path:"s15_e5.png"},
	{name:"s15_e6",path:"s15_e6.png"},
	{name:"s15_e7",path:"s15_e7.png"},
	{name:"s15_e8",path:"s15_e8.png"},
	{name:"s15_e9",path:"s15_e9.png"},
	{name:"s15_e10",path:"s15_e10.png"},
	{name:"s15_e11",path:"s15_e11.png"},
	{name:"s15_e12",path:"s15_e12.png"},
	{name:"s15_t1",path:"s15_t1.png"},
	{name:"s12_e1",path:"s12_e1.png"},
	{name:"s12_p1",path:"s12_p1.png"},
	{name:"s12_p2",path:"s12_p2.png"},
	{name:"s12_t1",path:"s12_t1.png"},
	{name:"s12_t2",path:"s12_t2.png"},
	{name:"s12_t3",path:"s12_t3.png"},
	{name:"s12_t4",path:"s12_t4.png"},
	{name:"s12_t5",path:"s12_t5.png"},
	{name:"s12_p3",path:"s12_p3.png"},
	{name:"text1",path:"text1.png"},
	{name:"text2",path:"text2.png"},
	{name:"hand",path:"hand.png"},
	{name:"g1",path:"g1.jpg"},
	{name:"g2",path:"g2.jpg"},
	{name:"unlock",path:"unlock.png"},
	{name:"unlock2",path:"unlock2.png"},
	{name:"wave1",path:"wave1.png"},
	{name:"wave2",path:"wave2.png"},
	{name:"arrow2",path:"arrow2.png"},
	{name:"s2_e3",path:"s2_e3.png"},
	{name:"s6_e9",path:"s6_e9.png"},
	{name:"s4_e2",path:"s4_e2.png"},
	{name:"bg25",path:"bg25.jpg"},
	{name:"bg26",path:"bg26.jpg"},
	{name:"d1",path:"d1.png"},{name:"d2",path:"d2.png"},{name:"d3",path:"d3.png"},{name:"d4",path:"d4.png"},
	{name:"d5",path:"d5.png"},{name:"d6",path:"d6.png"},{name:"d7",path:"d7.png"},{name:"d8",path:"d8.png"},
	{name:"d9",path:"d9.png"},{name:"d10",path:"d10.png"},{name:"d11",path:"d11.png"},{name:"d12",path:"d12.png"},
	{name:"d13",path:"d13.png"},{name:"d14",path:"d14.png"},{name:"d15",path:"d15.png"},{name:"d16",path:"d16.png"},
	{name:"d17",path:"d17.png"},{name:"d18",path:"d18.png"},{name:"d19",path:"d19.png"},{name:"d20",path:"d20.png"},
	{name:"s0_t3",path:"s0_t3.png"},
])
L.Sound.addSound([
	{name:"s1",path:"s1.mp3",auto:true},{name:"s2",path:"s2.mp3",auto:true,loop:true},{name:"s3",path:"s3.mp3",auto:true,loop:true},
	{name:"s4",path:"s4.mp3",auto:true,loop:true},{name:"s5",path:"s5.mp3",auto:true,loop:true},{name:"s6",path:"s6.mp3",auto:true,loop:true},
	{name:"s7",path:"s7.mp3",auto:true,loop:true},{name:"s8",path:"s8.mp3",auto:true,loop:true}
])
LGlobal.bgSound=new L.Sound.BgSound({
		bgSound:"bgsound.mp3",
		icon:{width:"40px",height:"40px",right:"0",top:"0"},
		playIcon:[{name:"music.gif",width:"40px"},{name:"music_off.png",width:"25px",ani:"ani_ro"}],
		stopIcon:[{name:"music_off.png",width:"25px"}]
	});
document.addEventListener("WeixinJSBridgeReady",function(){
	LGlobal.bgSound.play();
}, false)


L.Loader.load(function(p){
	if(!LGlobal.loadPage){
		LGlobal.loadPage=new loadPage();
	}
	LGlobal.loadPage.set(p);
},function(){
	init();
})
//21.3

function init(){
	
	LGlobal.page1=new page1();
	LGlobal.loadPage.close();
	LGlobal.page1.show();
}

function loadPage(){
	var s=this;
	L.Page.call(s,".loadPage");
//	var loadP=s.getChild(".loadP");
//	var loadNum=s.getChild(".loadNum");
	var line=s.getChild(".line");
	var loadNum=s.getChild(".line>span");
	s.page.style.transformOrigin=s.page.style.webkitTransformOrigin="left top";
	s.set=function(p){
//		loadP.style.width=p+"%";
		loadNum.innerHTML=1980+Math.floor(p/2.5);
		line.style.width=15+0.4*p+"%";
	}
	s.close=function(){
		s.page.style.zIndex=1;
		L.Timer.one(1000,function(){
			s.page.style.display="none";
		})
	}
	window.addEventListener("resize",resize);
	resize();
	function resize(){
		if(window.innerWidth>window.innerHeight){
//			loadP.parentNode.style.transform=loadP.parentNode.style.webkitTransform="rotate(0deg)";
//			loadP.parentNode.style.top="45%";
//			loadP.parentNode.style.left="25%";
//			loadNum.style.transform=loadNum.style.webkitTransform="rotate(0deg)";
			
			
			s.page.style.width="100%";
			s.page.style.height="100%";
			s.page.style.transform=s.page.style.webkitTransform="translate3d(0,0,0) rotate(0deg)";
			
		}else{
//			loadP.parentNode.style.transform=loadP.parentNode.style.webkitTransform="rotate(90deg)";
//			loadP.parentNode.style.top="50%";
//			loadP.parentNode.style.left="31%";
//			loadNum.style.transform=loadNum.style.webkitTransform="rotate(90deg)";
			
			s.page.style.width=window.innerHeight+"px";
			s.page.style.height=window.innerWidth+"px";
			s.page.style.transform=s.page.style.webkitTransform="translate3d("+window.innerWidth+"px,0,0) rotate(90deg)";
			
		}
	}
}

function page1(){
	var s=this;
	L.Page.call(s,".page1");
	var canvas_box=s.getChild(".canvas-box");
	s.init=function(){
		
	}
	var game=new Game();
	function Game(){
		var _s=this;
		var render,stage,bgLayer;
		var info={
			stageWidth:750,
			stageHeight:750/window.innerWidth*window.innerHeight,
			els:{},
			gameStart:false,
			initX:[260,480],
			unlock:false,
			unlock2:false,
			path:[{x:8923,y:428},{x:9425,y:518},{x:9739,y:340},{x:10053,y:475},{x:10347,y:300},{x:10608,y:518},{x:10791,y:428}]
		}
		
		var list=[
			{name:"g1",x:15886+3500+1280,y:0,property:{alpha:0},ani:{alpha:{bv:0,v:1}},sx:15886+3500+1280+800},
			{name:"g2",x:15886+3500+1280+997,y:0,property:{alpha:0},ani:{alpha:{bv:0,v:1}},sx:15886+3500+1280+800},
			{name:"s1_e5",x:2012,y:68,ani:{alpha:{bv:0,v:1}},frameNum:120},
			{name:"bg25",x:7895,y:0},
			{name:"bg26",x:7895+1492,y:0},
			{name:"point2",x:info.initX[0],y:428,cx:0.5,cy:0.5,otherName:"r1"},
			{name:"point1",x:info.initX[0],y:428,cx:0.5,cy:0.5,otherName:"r2"},
			{name:"s1_e1",x:1896,y:368,ani:{alpha:{bv:0,v:1}}},
			{name:"s1_e2",x:2388,y:217,ani:{alpha:{bv:0,v:1}}},
			{name:"s1_e3",x:2850,y:40,ani:{alpha:{bv:0,v:1}}},
			{name:"s1_t1",x:2245,y:453,ani:{alpha:{bv:0,v:1}}},
			{name:"s1_t2",x:2743,y:222,ani:{alpha:{bv:0,v:1}}},
			{name:"s1_t3",x:3330,y:96,ani:{alpha:{bv:0,v:1}}},
			{name:"s2_e3",x:4396+75,y:111},
			{name:"pointer",x:4672,y:303,cx:0.212,cy:0.75},
			{name:"s2_e1",x:3948,y:265,ani:{y:{bv:750,v:265}},ease:L.Ease.Quad.easeIn,frameNum:20},
			{name:"s2_e2",x:4396,y:551,ani:{alpha:{bv:0,v:1}}},
			{name:"jb1",x:4000,y:-100,otherName:"jb1"},{name:"jb1",x:4000,y:-100,otherName:"jb2"},
			{name:"jb2",x:4000,y:-100,otherName:"jb3"},{name:"jb2",x:4000,y:-100,otherName:"jb4"},
			{name:"jb3",x:4000,y:-100,otherName:"jb5"},{name:"jb3",x:4000,y:-100,otherName:"jb6"},
			{name:"jb4",x:4000,y:-100,otherName:"jb7"},{name:"jb4",x:4000,y:-100,otherName:"jb8"},
			{name:"jb5",x:4000,y:-100,otherName:"jb9"},{name:"jb5",x:4000,y:-100,otherName:"jb10"},
			{name:"jb6",x:4000,y:-100,otherName:"jb11"},{name:"jb6",x:4000,y:-100,otherName:"jb12"},
			{name:"jb7",x:4000,y:-100,otherName:"jb13"},{name:"jb7",x:4000,y:-100,otherName:"jb14"},
			{name:"s3_t1",x:5690,y:123,ani:{alpha:{bv:0,v:1}}},
			{name:"wave1",x:5690+1420,y:420},
			{name:"wave2",x:5690+1420,y:420},
			{name:"s4_e2",x:8895-793,y:167},
			{name:"s4_e1",x:7405,y:560},
			{name:"s5_t1",x:8895,y:190,ani:{alpha:{bv:0,v:1}}},
			{name:"s6_e1",x:10955+338,y:405},
			{name:"s6_e6",x:10955+358,y:566},
			{name:"s6_e7",x:10955+388,y:305},
			{name:"s6_e5",x:10955+1589,y:326,ani:{alpha:{bv:0,v:1}},frameNum:20},
			{name:"s6_e4",x:10955+1340,y:252},
			{name:"s6_e3",x:10955+1340+145,y:297},
			{name:"s6_t1",x:10955+45,y:102,ani:{alpha:{bv:0,v:1}}},
			{name:"s6_t2",x:10955+1097,y:224,ani:{alpha:{bv:0,v:1}}},
			{name:"s6_t3",x:10955+1477,y:134,ani:{alpha:{bv:0,v:1}}},
			{name:"s7_t1",x:10955+2800,y:189,ani:{alpha:{bv:0,v:1}}},
			{name:"s6_e8",x:10955+388+1989+30,y:293},
			{name:"ql",x:176,y:323,cx:0.5,cy:0.5},
			{name:"ql",x:622,y:300,cx:0.5,cy:0.5,scale:0.6,otherName:"ql2"},
			{name:"s8_e1",x:15886,y:365,frame:{x:0,y:227,width:277,height:288},otherName:"s8_e1_1"},
			{name:"s8_e1",x:15886+137,y:138,frame:{x:137,y:0,width:233,height:198},otherName:"s8_e1_2"},
			{name:"s8_e1",x:15886+632,y:138,frame:{x:632,y:10,width:159,height:216},otherName:"s8_e1_3"},
			{name:"p1",x:15886+137+10,y:138+8},
			{name:"p2",x:15886+632+6,y:148+9},
			{name:"s8_e2",x:15886+285,y:313,ani:{alpha:{bv:0,v:1}},frameNum:20},
			{name:"s8_e4",x:15886+750,y:245},
			{name:"s8_e5",x:15886+1266,y:57},
			{name:"s8_e3",x:15886+911,y:44,ani:{alpha:{bv:0,v:1}},frameNum:20},
			{name:"point2",x:15886+750,y:502,cx:0.5,cy:0.5,scale:0.41,otherName:"point1"},
			{name:"point1",x:15886+750,y:502,cx:0.5,cy:0.5,scale:0.41,otherName:"point2"},
			{name:"point2",x:15886+1266,y:246,cx:0.5,cy:0.5,scale:0.41,otherName:"point3"},
			{name:"point1",x:15886+1266,y:246,cx:0.5,cy:0.5,scale:0.41,otherName:"point4"},
			{name:"point2",x:15886+1643,y:57,cx:0.5,cy:0.5,scale:0.41,otherName:"point5"},
			{name:"point1",x:15886+1643,y:57,cx:0.5,cy:0.5,scale:0.41,otherName:"point6"},
			{name:"s8_t1",x:15886+738,y:530},
			{name:"s8_t2",x:15886+1253,y:275},
			{name:"s8_t3",x:15886+1630+128,y:88+47,cx:0.5,cy:0.5},
			{name:"s9_t1",x:15886+2393,y:525,ani:{alpha:{bv:0,v:1}}},
			{name:"s9_t2",x:15886+3500,y:129,ani:{alpha:{bv:0,v:1}}},
			{name:"s9_e2",x:15886+3130,y:69},
			{name:"s9_e3",x:15886+3130,y:69},
			{name:"s9_e4",x:15886+3435,y:563},
			{name:"s9_e5",x:15886+3536+477,y:451+200,cx:0.987,cy:1},
			{name:"s10_e1",x:15886+3500+720,y:-57,ani:{y:{bv:750,v:-57}},ease:L.Ease.Quad.easeInOut},
			{name:"arrow",x:38,y:443},
			{name:"arrow",x:770,y:365,cx:0.5,cy:0.5,scale:-1,otherName:"arrow2"},
			{name:"s10_t1",x:15886+5213,y:60,ani:{alpha:{bv:0,v:1}}},
			{name:"s10_t2",x:15886+6197,y:588,ani:{alpha:{bv:0,v:1}}},
			{name:"yz1",x:4672+457,y:-100,otherName:"yz1"},{name:"yz2",x:4672+457,y:-100,otherName:"yz2"},
			{name:"yz3",x:4672+457,y:-100,otherName:"yz3"},{name:"yz4",x:4672+457,y:-100,otherName:"yz4"},
			{name:"yz4",x:4672+457,y:-100,otherName:"yz5"},{name:"yz4",x:4672+457,y:-100,otherName:"yz6"},
			{name:"yz4",x:4672+457,y:-100,otherName:"yz7"},{name:"yz4",x:4672+457,y:-100,otherName:"yz8"},
			{name:"yz5",x:4672+457,y:-100,otherName:"yz9"},{name:"yz6",x:4672+457,y:-100,otherName:"yz10"},
			{name:"yz6",x:4672+457,y:-100,otherName:"yz11"},{name:"yz6",x:4672+457,y:-100,otherName:"yz12"},
			{name:"yz6",x:4672+457,y:-100,otherName:"yz13"},{name:"yz6",x:4672+457,y:-100,otherName:"yz14"},
			{name:"fd1",x:5690+590,y:8},{name:"fd2",x:5690+800,y:33},{name:"fd3",x:5690+1005,y:-2},
			{name:"fd2",x:5690+1285,y:25,otherName:"fd4",property:{rotation:35*Math.PI/180}},{name:"fd2",x:5690+1485,y:38,otherName:"fd5"},
			{name:"fd3",x:5690+1670,y:0,otherName:"fd6",property:{scale:0.75}},
			{name:"s11_e1",x:20106+2600,y:80},
			{name:"plane",x:20106+2780,y:530,cx:0,cy:0.9,ani:{x:{bv:20106+2720,v:20106+2780},scale:{bv:0.75,v:1}},ease:L.Ease.Quad.easeInOut,frameNum:80},
			{name:"s11_e2",x:20106+3020,y:490},
			{name:"s11_e3",x:20106+3815,y:228,property:{scale:0.51},otherName:"s11_e3_1",frame:{x:0,y:0,width:233,height:300}},
			{name:"s11_e3",x:20106+3952,y:168,property:{scale:0.618},otherName:"s11_e3_2",frame:{x:0,y:0,width:233,height:300}},
			{name:"s11_e3",x:20106+4140,y:124,property:{scale:0.79},otherName:"s11_e3_3"},
			{name:"s11_e3",x:20106+4376,y:68,otherName:"s11_e3_4"},
			{name:"s11_e4",x:20106+3776,y:375,cx:0,cy:0.223,ani:{scale:{bv:0.25,v:1}},ease:L.Ease.Quad.easeInOut,frameNum:80},
			{name:"s11_t1",x:20106+3128,y:96,ani:{alpha:{bv:0,v:1}}},
			{name:"s11_t2",x:20106+3772,y:579,ani:{alpha:{bv:0,v:1}}},
			{name:"s13_e1",x:20106+3776+3720,y:192,ani:{alpha:{bv:0,v:1}}},
			{name:"s13_t1",x:20106+3776+4500,y:172,ani:{alpha:{bv:0,v:1}}},
			{name:"s13_t2",x:20106+3776+4500,y:503,ani:{alpha:{bv:0,v:1}}},
			{name:"s14_t1",x:20106+3776+5677,y:288,ani:{alpha:{bv:0,v:1}}},
			{name:"s14_t2",x:20106+3776+5700,y:503,ani:{alpha:{bv:0,v:1}}},
			{name:"s15_e3",x:29932+1141,y:363,property:{alpha:0}},
			{name:"s15_e4",x:29932+1371,y:310,property:{alpha:0}},
			{name:"s15_e5",x:29932+1371,y:279,property:{alpha:0}},
			{name:"s15_e6",x:29932+1749,y:347,property:{alpha:0}},
			{name:"s15_e7",x:29932+1721,y:223,property:{alpha:0}},
			{name:"s15_e8",x:29932+1711,y:188,property:{alpha:0}},
			{name:"s15_e9",x:29932+2030,y:320,property:{alpha:0}},
			{name:"s15_e10",x:29932+2632,y:253,property:{alpha:0}},
			{name:"s15_e11",x:29932+2728,y:422,property:{alpha:0}},
			{name:"s15_e12",x:29932+2728,y:380,property:{alpha:0}},
			{name:"s15_e2",x:29932+1152,y:490,cx:0.5,cy:0.5,property:{scale:0.585,alpha:0},otherName:"s15_e2_1"},
			{name:"s15_e2",x:29932+1379,y:460,cx:0.5,cy:0.5,property:{scale:0.585,alpha:0},otherName:"s15_e2_2"},
			{name:"s15_e2",x:29932+1414,y:385,cx:0.5,cy:0.5,property:{scale:0.47,alpha:0},otherName:"s15_e2_3"},
			{name:"s15_e2",x:29932+1560,y:315,cx:0.5,cy:0.5,property:{scale:0.6,alpha:0},otherName:"s15_e2_4"},
			{name:"s15_e2",x:29932+1720,y:372,cx:0.5,cy:0.5,otherName:"s15_e2_5",property:{alpha:0}},
			{name:"s15_e2",x:29932+1813,y:303,cx:0.5,cy:0.5,property:{scale:0.47,alpha:0},otherName:"s15_e2_6"},
			{name:"s15_e2",x:29932+1929,y:360,cx:0.5,cy:0.5,property:{scale:0.47,alpha:0},otherName:"s15_e2_7"},
			{name:"s15_e2",x:29932+2037,y:449,cx:0.5,cy:0.5,property:{scale:0.757,alpha:0},otherName:"s15_e2_8"},
			{name:"s15_e2",x:29932+2095,y:388,cx:0.5,cy:0.5,property:{scale:0.43,alpha:0},otherName:"s15_e2_9"},
			{name:"s15_e2",x:29932+2539,y:407,cx:0.5,cy:0.5,property:{scale:0.757,alpha:0},otherName:"s15_e2_10"},
			{name:"s15_e2",x:29932+2630,y:313,cx:0.5,cy:0.5,property:{scale:0.8,alpha:0},otherName:"s15_e2_11"},
			{name:"s15_e2",x:29932+3007,y:507,cx:0.5,cy:0.5,property:{scale:0.47,alpha:0},otherName:"s15_e2_12"},
			{name:"s15_e2",x:29932+3180,y:562,cx:0.5,cy:0.5,property:{scale:0.47,alpha:0},otherName:"s15_e2_13"},
			{name:"s15_t1",x:29932+1620,y:120,property:{alpha:0}},
			{name:"s15_e1",x:29932+1850,y:448},
			{name:"s12_e1",x:20106+3776+1437,y:270,otherName:"line1",frame:{x:0,y:111,width:2,height:158}},
			{name:"s12_e1",x:20106+3776+1720,y:429,otherName:"line2",frame:{x:0,y:0,width:2,height:173}},
			{name:"s12_e1",x:20106+3776+1959,y:159,otherName:"line3"},
			{name:"s12_e1",x:20106+3776+2385,y:269,otherName:"line4",frame:{x:0,y:111,width:2,height:158}},
			{name:"s12_e1",x:20106+3776+2557,y:429,otherName:"line5",frame:{x:0,y:0,width:2,height:135}},
			{name:"s12_t1",x:20106+3776+1487,y:246,otherName:"t1"},
			{name:"s12_t2",x:20106+3776+1761,y:556,otherName:"t2"},
			{name:"s12_t3",x:20106+3776+2007,y:140,otherName:"t3"},
			{name:"s12_t4",x:20106+3776+2437,y:246,otherName:"t4"},
			{name:"s12_t5",x:20106+3776+2605,y:543,otherName:"t5"},
			{name:"s12_p3",x:20106+3776+1438,y:428,cx:0.5,cy:0.5,otherName:"c1"},
			{name:"s12_p3",x:20106+3776+1721,y:428,cx:0.5,cy:0.5,otherName:"c2"},
			{name:"s12_p3",x:20106+3776+1960,y:428,cx:0.5,cy:0.5,otherName:"c3"},
			{name:"s12_p3",x:20106+3776+2386,y:428,cx:0.5,cy:0.5,otherName:"c4"},
			{name:"s12_p3",x:20106+3776+2558,y:428,cx:0.5,cy:0.5,otherName:"c5"},
//			{name:"unlock",x:4396+712,y:375,frame:{x:0,y:96,width:170,height:40},otherName:"unlock_2"},
//			{name:"unlock",x:4396+712,y:315,frame:{x:0,y:0,width:170,height:96}},
//			{name:"unlock2",x:15886+3500+2230,y:375,frame:{x:0,y:0,width:170,height:60}},
//			{name:"unlock2",x:15886+3500+2230,y:435,frame:{x:0,y:60,width:170,height:40},otherName:"unlock2_2"},
			{name:"text1",x:300,y:213},
			{name:"text2",x:300,y:543},
			{name:"hand",x:350,y:582},
			{name:"s6_e9",x:10955+45+766,y:147},
			
		]
		var stageWidth;
		initFrame();
		function initFrame(){
			render=new PIXI.CanvasRenderer(info.stageWidth,info.stageHeight,{transparent: true});
			render.view.style.width="100%";
			render.view.style.height="100%";
			canvas_box.appendChild(render.view);
			stage=new PIXI.Container();
			bgLayer=new PIXI.Container();
			stage.addChild(bgLayer);			
			var w=0;
			for(var i=1;i<=22;i++){
				var bg=new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(L.Loader.getRes("bg"+i))));
				bg.x=w;
				if(i>10){
					w--;
				}
				w+=bg.width;
				bgLayer.addChild(bg);
			}
			
			window.addEventListener("resize",resize);
			resize();
			function resize(){
				if(window.innerWidth>window.innerHeight){
					stage.rotation=0;
					stage.x=0;
					info.stageWidth=750/window.innerHeight*window.innerWidth;
					info.stageHeight=750;
				}else{
					info.stageWidth=750;
					info.stageHeight=750/window.innerWidth*window.innerHeight;
					stage.rotation=Math.PI/2;
					stage.x=info.stageWidth;
					
				}
				render.view.width=info.stageWidth;
				render.view.height=info.stageHeight;
			}
			if(window.innerWidth>window.innerHeight){
				stageWidth=info.stageWidth;
			}else{
				stageWidth=info.stageHeight;
			}
			var x,x1,x2;
			var sTime;
			render.view.ontouchstart=function(e){
				if(!info.gameStart)return;
				if(window.innerWidth>window.innerHeight){
					x1=x2=e.changedTouches[0].clientX;
				}else{
					x1=x2=e.changedTouches[0].clientY;
				}
				x=bgLayer.x;
				sTime=new Date().getTime();
				L.Tween.clear(auto);
				bgLayer.isMove=false;
			}
			
			render.view.ontouchmove=function(e){
				if(!info.gameStart)return;
				
				if(window.innerWidth>window.innerHeight){
					x2=e.changedTouches[0].clientX;
					stageWidth=info.stageWidth;
				}else{
					x2=e.changedTouches[0].clientY;
					stageWidth=info.stageHeight;
				}
				if(!isNaN(x2-x1)){
					bgLayer.x=x+x2-x1;
				}else{
					x1=x2;
					x=bgLayer.x;
					sTime=new Date().getTime();
				}
//				if(Math.abs(bgLayer.x)+stageWidth/2>info.els["unlock"].x&&!info.unlock){
//					bgLayer.x=stageWidth/2-info.els["unlock"].x;
//				}
//				if(Math.abs(bgLayer.x)+stageWidth/2>info.els["unlock2"].x&&!info.unlock2){
//					bgLayer.x=stageWidth/2-info.els["unlock2"].x;
//				}

				L.Tween.clear(auto);
				elAni();
				
				if(Math.abs(x2-x1)>2){
					bgLayer.isMove=true;
				}
				
			}
			render.view.ontouchend=function(e){
				if(!info.gameStart)return;
				end();
				bgLayer.isMove=false;
				if(light){
//					_unlock.stop();
					light.stop();
				}
			}
			render.view.ontouchcancel=function(e){
				if(!info.gameStart)return;
				end();
				bgLayer.isMove=false;
				if(light){
//					_unlock.stop();
					light.stop();
				}
			}
			var auto;
			function end(){
				if(isNaN(x2-x1))return;
				var t=new Date().getTime()-sTime;
				var d=Math.floor((500-t<0?0:500-t)/500*(x2-x1))*5;
				x1=null;
				x2=null;
				auto=L.Tween.to(bgLayer,60,{x:{bv:bgLayer.x,v:bgLayer.x+d}},L.Ease.Quad.easeOut,function(){
					
				},function(){
//					if(Math.abs(bgLayer.x)+stageWidth/2>info.els["unlock"].x&&!info.unlock){
//						bgLayer.x=stageWidth/2-info.els["unlock"].x;
//					}
//					if(Math.abs(bgLayer.x)+stageWidth/2>info.els["unlock2"].x&&!info.unlock2){
//						bgLayer.x=stageWidth/2-info.els["unlock2"].x;
//					}
					
					elAni();
				});
			}
			createEls();
		}
		
		function createEls(){
			var bg1=new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(L.Loader.getRes("bg23"))));
			var bg2=new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(L.Loader.getRes("bg24"))));
			bg1.x=bgLayer.width-bg1.width-bg2.width;
			bg1.y=0;
			bgLayer.addChild(bg1);
			bg2.x=bg1.x+bg1.width;
			bg2.y=0;
			bgLayer.addChild(bg2);
			info.els["bg23"]=bg1;
			info.els["bg24"]=bg2;
			for(var i=0;i<list.length;i++){
				var el=new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(L.Loader.getRes(list[i].name))));
				el.x=list[i].x;
				el.y=list[i].y;
				if(list[i].cx){
					el.anchor.x=list[i].cx;
				}
				if(list[i].cy){
					el.anchor.y=list[i].cy;
				}
				if(list[i].scale){
					el.scale.x=el.scale.y=list[i].scale;
				}
				if(list[i].frame){
					el.texture.frame.x=list[i].frame.x;
					el.texture.frame.y=list[i].frame.y;
					el.texture.frame.width=list[i].frame.width;
					el.texture.frame.height=list[i].frame.height;
				}
				if(list[i].ani){
					for(var p in list[i].ani){
						el[p]=list[i].ani[p].bv;
					}
				}
				if(list[i].property){
					for(var p in list[i].property){
						if(p=="scale"){
							el[p].x=el[p].y=list[i].property[p];
						}else{
							el[p]=list[i].property[p];
						}
					}
				}
				if(list[i].name.indexOf("ql")>-1){
					info.els["s6_e8"].addChild(el);
				}else if(list[i].name.indexOf("arrow")>-1){
					info.els["s10_e1"].addChild(el);
				}else{
					bgLayer.addChild(el);
				}
				
				if(list[i].otherName){
					info.els[list[i].otherName]=el;
				}else{
					info.els[list[i].name]=el;
				}
				
				
				if(list[i].name=="pointer"){
					L.Timer.loop(100,function(){
						info.els["pointer"].rotation+=3*Math.PI/180;
					})
					L.Timer.frameLoop(1,function(){
						if(info.els["ql"]&&info.els["ql2"]){
							info.els["ql"].rotation+=5*Math.PI/180;
							info.els["ql2"].rotation+=5*Math.PI/180;
						}
					})
				}
				if(list[i].name=="s4_e1"){
					info.els["s4_e1"].anchor.x=0.04;
					info.els["s4_e1"].anchor.y=0.95;
					s4_e1();
					function s4_e1(){
						L.Tween.to(info.els["s4_e1"].scale,550,{x:{bv:0.6,v:1},y:{bv:0.6,v:1}},L.Ease.Linear);
						L.Tween.to(info.els["s4_e1"],550,{x:{bv:7250,v:7265}},L.Ease.Linear,function(){
							L.Timer.one(350,s4_e1);
						})
					}
				}
				if(list[i].name=="s6_e1"){
					info.els["s6_e1"].anchor.x=0.53;//18
					info.els["s6_e1"].anchor.y=0.983;//118
					info.els["s6_e1"].x+=18;
					info.els["s6_e1"].y+=118;
					s6_e1();
					function s6_e1(){
						L.Tween.to(info.els["s6_e1"],35,{rotation:{bv:-8*Math.PI/180,v:8*Math.PI/180}},L.Ease.Quad.easeInOut)
							   .to(info.els["s6_e1"],35,{rotation:{bv:8*Math.PI/180,v:-8*Math.PI/180}},L.Ease.Quad.easeInOut,function(){
							   		s6_e1();
							   })
					}
				}
				if(list[i].name=="s6_e6"){
					info.els["s6_e6"].anchor.x=0.843;//75
					info.els["s6_e6"].anchor.y=0.08;//118
					info.els["s6_e6"].x+=75;
					info.els["s6_e6"].y+=14;
					s6_e6();
					function s6_e6(){
						L.Tween.to(info.els["s6_e6"],35,{rotation:{bv:0,v:10*Math.PI/180}},L.Ease.Quad.easeInOut)
							   .to(info.els["s6_e6"],35,{rotation:{bv:10*Math.PI/180,v:0}},L.Ease.Quad.easeInOut,function(){
							   		s6_e6();
							   })
					}
				}
				if(list[i].name=="s9_e3"){
					s9_e2();
					function s9_e2(){
						L.Tween.to(info.els["s9_e2"],50,{alpha:{bv:1,v:0}},L.Ease.Cubic.easeIn)
						L.Tween.to(info.els["s9_e3"],50,{alpha:{bv:0,v:1}},L.Ease.Cubic.easeIn,function(){
							
							L.Timer.one(500,function(){
								L.Tween.to(info.els["s9_e3"],50,{alpha:{bv:1,v:0}},L.Ease.Cubic.easeIn)
								L.Tween.to(info.els["s9_e2"],50,{alpha:{bv:0,v:1}},L.Ease.Cubic.easeIn,function(){
									L.Timer.one(500,s9_e2);
								})
								
							})
						})
					}
				}
				if(list[i].name=="s9_e5"){
					s9_e5();
					function s9_e5(){
						L.Tween.to(info.els["s9_e5"],50,{rotation:{bv:-2*Math.PI/180,v:20*Math.PI/180}},L.Ease.Quad.easeInOut)
						       .to(info.els["s9_e5"],50,{rotation:{bv:20*Math.PI/180,v:-2*Math.PI/180}},L.Ease.Quad.easeInOut,function(){
									if(Math.abs(bgLayer.x)+stageWidth>info.els["s9_e5"].x&&info.els["s9_e5"].x>Math.abs(bgLayer.x)){
										info.els["s9_e5"].isPlay=true;
										L.Sound.play("s1");
									}
							   		s9_e5();
							   })
					}
				}
				if(list[i].name.indexOf("fd")>-1){
					if(!fds){
						fds=[];
					}
					fds.push(el);
				}
				if(list[i].name=="s6_e8"){
					var x=info.els["s6_e8"].x;
					s6_e8();
					function s6_e8(){
						L.Tween.to(info.els["s6_e8"],80,{x:{bv:x,v:x+120}},L.Ease.Quad.easeIn,function(){
							L.Timer.one(500,s6_e8);
						})
					}
				}
				if(list[i].otherName=="arrow2"){
					arrow();
					function arrow(){
						L.Tween.to(info.els["arrow2"],50,{x:{bv:770,v:778}},L.Ease.Quad.easeIn);
						L.Tween.to(info.els["arrow"],50,{x:{bv:38,v:30}},L.Ease.Quad.easeIn,function(){
							arrow();
						})
					}
				}
				
				if(list[i].name=="s15_e1"){
					info.els["s15_e1"].interactive=true;
					info.els["s15_e1"].on("tap",function(){
						info.els["s15_e1"].interactive=false;
						info.els["s15_e1"].visible=false;
						L.Tween.to(info.els["s15_t1"],50,{alpha:{bv:0,v:1}},L.Ease.Linear);
						L.Tween.to(info.els["bg23"],50,{alpha:{bv:1,v:0}},L.Ease.Linear);
						L.Tween.to(info.els["bg24"],50,{alpha:{bv:1,v:0}},L.Ease.Linear);
						s15_ani();
					})
				}
				if(list[i].name=="hand"){
					hand();
					function hand(){
						L.Tween.to(info.els["hand"],70,{x:{bv:350,v:300}},L.Ease.Quad.easeInOut,function(){
									hand();
						})
					}
				}
				if(list[i].name=="wave2"){
					wave();
					function wave(){
						var n=1;
						L.Timer.frameLoop(18,function(){
							info.els["wave1"].visible=false;
							info.els["wave2"].visible=false;
							info.els["wave"+n].visible=true;
							n<2?n++:n=1;
						})
					}
				}
				if(list[i].otherName=="r1"){
					info.els["r1"].initY=info.els["r1"].y;
				}
			}
			_jb=new JbAni("jb",4000,150,1,2);
			_jb.start();
			
			fdAni();
			
			c_ani();
			unlock();
//			unlock2();
		}
//		var _unlock;
//		var jbAni;
		function unlock(){
//			info.els["unlock"].interactive=true;
//			info.els["unlock_2"].interactive=true;
//			var tween;
//			ani();
//			function ani(){
//				tween=L.Tween.to(info.els["unlock_2"],25,{alpha:{bv:1,v:0.2}},L.Ease.Linear)
//				       .to(info.els["unlock_2"],25,{alpha:{bv:0.2,v:1}},L.Ease.Linear,function(){
//				       	    ani();
//				       })
//			}
//			var timer1,timer2;
			var jbAni=new JbAni("yz",4672+457,500,1,2);
			jbAni.start();
//			info.els["unlock"].on("pointerdown",function(){
//				start();
//
//			})
//			info.els["unlock_2"].on("pointerdown",function(){
//				start();
//			})

//			info.els["unlock"].on("pointerup",function(){
//				stop();
//			})
//			info.els["unlock"].on("pointerout",function(){
//				stop();
//			})
//			info.els["unlock"].touchcancel=function(){
//				stop();
//			}
//			function start(){
//				timer1=L.Timer.one(500,function(){
//					if(bgLayer.isMove)return;
//					L.Tween.clear(tween);
//					
//					info.els["unlock"].interactive=false;
//					info.els["unlock_2"].interactive=false;
//					info.els["unlock"].visible=false;
//					info.els["unlock_2"].visible=false;
//					info.unlock=true;
//					jbAni.start();
//				})
//			}
//			function stop(){
//				L.Timer.clear(timer1);
//				L.Timer.clear(timer2);
//			}
//			return {stop:stop};
		}
		////解锁2
		var light;
		function unlock2(){
			info.els["unlock2"].interactive=true;
			info.els["unlock2_2"].interactive=true;
			var tween;
			ani();
			function ani(){
				tween=L.Tween.to(info.els["unlock2_2"],25,{alpha:{bv:1,v:0.2}},L.Ease.Linear)
				       .to(info.els["unlock2_2"],25,{alpha:{bv:0.2,v:1}},L.Ease.Linear,function(){
				       	    ani();
				       })
			}
			light=new Light();
			info.els["unlock2"].on("pointerdown",function(){
				L.Timer.one(100,function(){
					if(bgLayer.isMove)return;
					light.start();
				})
				
			})
			info.els["unlock2_2"].on("pointerdown",function(){
				L.Timer.one(100,function(){
					if(bgLayer.isMove)return;
					light.start();
				})
			})
			info.els["unlock2"].on("pointerup",function(){
				light.stop();
			})
			info.els["unlock2"].touchcancel=function(){
				light.stop();
			}
			info.els["unlock2_2"].on("pointerup",function(){
				light.stop();
			})
			info.els["unlock2_2"].touchcancel=function(){
				light.stop();
			}
			
			function Light(){
				var _s=this;
				info.els["g1"].visible=true;
				info.els["g2"].visible=true;
				info.els["g1"].alpha=0;
				info.els["g2"].alpha=0;
				var step=1/170;
				var frameLoop;
				function loop(){
					info.els["g1"].alpha+=step;
					info.els["g2"].alpha+=step;
					if(info.els["g1"].alpha>=1){
						info.els["unlock2"].interactive=false;
						info.els["unlock2_2"].interactive=false;
						info.els["unlock2"].visible=false;
						info.els["unlock2_2"].visible=false;
						info.unlock2=true;
						L.Timer.clear(frameLoop);
					}
					
				}
				_s.start=function(){
					info.els["unlock2_2"].alpha=1;
					L.Timer.clear(frameLoop);
					frameLoop=L.Timer.frameLoop(1,loop);
				}
				_s.stop=function(){
					L.Timer.clear(frameLoop);
				}
			}
		}
		////白点动画
		function c_ani(){
			var cs=[
				[info.els["c1"],info.els["line1"],info.els["t1"],-1],
				[info.els["c2"],info.els["line2"],info.els["t2"],1],
				[info.els["c3"],info.els["line3"],info.els["t3"],-1],
				[info.els["c4"],info.els["line4"],info.els["t4"],-1],
				[info.els["c5"],info.els["line5"],info.els["t5"],1],
			]
			L.Timer.frameLoop(1,function(){
				for(var i=0;i<cs.length;i++){
					var ox=info.els["r1"].x-cs[i][0].x;
					if(ox<0){
						cs[i][0].visible=false;
						cs[i][1].visible=false;
						cs[i][2].visible=false;
					}else{
						cs[i][0].visible=true;
						cs[i][1].visible=true;
						cs[i][0].y=info.els["r1"].y+ox*cs[i][3];
						if((cs[i][3]<0&&cs[i][0].y<=cs[i][1].y)||(cs[i][3]>0&&cs[i][0].y>=cs[i][1].y+cs[i][1].height)){
							cs[i][3]<0?cs[i][0].y=cs[i][1].y:cs[i][0].y=cs[i][1].y+cs[i][1].height;
							if(!cs[i][2].visible){
								cs[i][2].visible=true;
								cs[i][2].alpha=0;
								L.Tween.to(cs[i][2],20,{alpha:{bv:0,v:1}},L.Ease.Linear);
							}
						}else{
							cs[i][2].visible=false;
						}
					}
				}
			})
		}
		///点和弧线动画
		function s15_ani(){
			var temp=[];
			for(var p in info.els){
				if(p.indexOf("s15_e")>-1&&p!="s15_e1"){
					temp.push(info.els[p]);
				}
			}
			      
			for(var i=0;i<temp.length;i++){
				loop(temp[i]);
			}
			function loop(o){
				var frame=50+Math.floor(Math.random()*50);
				var delay=Math.floor(Math.random()*1500);
				L.Timer.one(delay,ani);
				function ani(){
					L.Tween.to(o,frame,{alpha:{bv:0,v:1}},L.Ease.Linear)
						   .to(o,frame,{alpha:{bv:1,v:0}},L.Ease.Linear,function(){
						   	  ani();
						   })
				}
			}
		}
		var fds;
		function fdAni(){
			var n=0;
			L.Timer.frameLoop(25,function(){
				for(var i=0;i<fds.length;i++){
					fds[i].visible=false;
				}
				fds[n].visible=true;
				n<fds.length-1?n++:n=0;
			})
		}
		function JbAni(name,d,offsetX,y1,y2){
			var _s=this;
			var jbs1=[];
			var jbs2=[];
			for(var i=0;i<list.length;i++){
				if(list[i].name.indexOf(name)>-1){
					var str=list[i].otherName?list[i].otherName:list[i].name;
					jbs1.push(info.els[str]);
				}
			}
			var lastTime=new Date().getTime();
			var t=50+Math.floor(Math.random()*300);
			var frameLoop;
			var isStart;
			function loop(){
				if(new Date().getTime()-lastTime>=t&&isStart){
					lastTime=new Date().getTime();
					t=350+Math.floor(Math.random()*800);
					if(jbs1.length>0){
						var n=Math.floor(Math.random()*jbs1.length);
						var jb=jbs1[n];
						jbs1.splice(n,1);
						jb.mx=Math.floor(Math.random()*2*10)/10;
						jb.my=y1+Math.floor(Math.random()*y2*10)/10;
						
						jb.x=d+Math.floor(Math.floor(Math.random()*offsetX));
						jb.y=-jb.height;
						jbs2.push(jb);
					}
					
				}
				for(var i=0;i<jbs2.length;i++){
					jbs2[i].x+=jbs2[i].mx;
					jbs2[i].y+=jbs2[i].my;
					if(jbs2[i].y>info.stageHeight){
						jbs1.push(jbs2[i]);
						jbs2.splice(i,1);
						i--;
					}
				}
			}
			L.Timer.frameLoop(1,loop);
			_s.start=function(){
				isStart=true;
			}
			_s.stop=function(){
				isStart=false;
			}
		}
		function elAni(){
			
			if(bgLayer.x>0){
				bgLayer.x=0;
			}else if(bgLayer.x<stageWidth-bgLayer.width){
				bgLayer.x=stageWidth-bgLayer.width;
			}
			if(Math.abs(bgLayer.x)<500){
				info.els["r1"].x=info.els["r2"].x=info.initX[0]-bgLayer.x+(info.initX[1]-info.initX[0])/500*Math.abs(bgLayer.x);
			}else{
				info.els["r1"].x=info.initX[1]-bgLayer.x;
				info.els["r2"].x=info.initX[1]-bgLayer.x;
				if((info.els["r1"].x>10955&&info.els["r1"].x<10955+667)||info.els["r1"].x>31084||(info.els["r1"].x>14470&&info.els["r1"].x<14770)||(info.els["r1"].x>14825&&info.els["r1"].x<14825+845)||(info.els["r1"].x>15886+2393&&info.els["r1"].x<15886+2393+638)){
					info.els["r1"].visible=false;
					info.els["r2"].visible=false;
				}else{
					info.els["r1"].visible=true;
					info.els["r2"].visible=true;
				}
			}
			
//			for(var i=0;i<info.path.length-1;i++){
//				if(info.els["r1"].x>info.path[i].x&&info.els["r1"].x<=info.path[i+1].x){
//					var x1=info.path[i].x;
//					var y1=info.path[i].y;
//					var x2=info.path[i+1].x;
//					var y2=info.path[i+1].y;
//					var angle=Math.atan2(y2-y1,x2-x1);
//					var a=info.els["r1"].x-info.path[i].x;
//					var r=a/Math.cos(angle);
//					var y=Math.sin(angle)*r;
//					info.els["r1"].y=info.els["r2"].y=info.path[i].y+y;
//					break;
//				}else{
//					info.els["r1"].y=info.els["r2"].y=info.els["r1"].initY;
//				}
//			}
			
			for(var i=0;i<list.length;i++){
				var name=list[i].otherName?list[i].otherName:list[i].name;
				
				var x=list[i].sx?list[i].sx:info.els[name].x;
				if(list[i].ani&&!info.els[name].ani&&Math.abs(bgLayer.x-stageWidth*0.6)>x&&Math.abs(bgLayer.x)<x){
					
					info.els[name].ani=true;
					(function(i){
						var frameNum=50;
						if(list[i].frameNum){
							frameNum=list[i].frameNum;
						}
						var ease=L.Ease.Linear;
						if(list[i].ease){
							ease=list[i].ease;
						}
						var endFun=null;
						if(name=="s6_e5"){
							endFun=function(){
								info.els["s6_e4"].tween=L.Tween.to(info.els["s6_e4"],25,{y:{bv:750,v:252}},L.Ease.Quad.easeIn,function(){
									info.els["s6_e3"].tween=L.Tween.to(info.els["s6_e3"],50,{alpha:{bv:0,v:1}},L.Ease.Linear);
								});
							}
						}
						if(name=="s8_e2"){
							endFun=function(){
								info.els["s8_e1_1"].tween=L.Tween.to(info.els["s8_e1_1"],15,{alpha:{bv:0,v:1}},L.Ease.Linear,function(){
									info.els["s8_e1_2"].tween=L.Tween.to(info.els["s8_e1_2"],15,{alpha:{bv:0,v:1}},L.Ease.Linear,function(){
										info.els["s8_e1_3"].tween=L.Tween.to(info.els["s8_e1_3"],15,{alpha:{bv:0,v:1}},L.Ease.Linear,function(){
											info.els["p1"].tween=L.Tween.to(info.els["p1"],5,{alpha:{bv:0,v:1}},L.Ease.Linear,function(){
												info.els["p2"].tween=L.Tween.to(info.els["p2"],5,{alpha:{bv:0,v:1}},L.Ease.Linear)
											})
										});
									});
								});
							}
						}
						if(name=="s8_e3"){
							endFun=function(){
								L.Tween.to(info.els["point1"],15,{alpha:{bv:0,v:1}},L.Ease.Linear);
								L.Tween.to(info.els["point2"],15,{alpha:{bv:0,v:1}},L.Ease.Linear);
								L.Tween.to(info.els["s8_t1"],15,{alpha:{bv:0,v:1}},L.Ease.Linear,function(){
									L.Tween.to(info.els["s8_e4"],15,{alpha:{bv:0,v:1}},L.Ease.Linear,function(){
										L.Tween.to(info.els["point3"],15,{alpha:{bv:0,v:1}},L.Ease.Linear);
										L.Tween.to(info.els["point4"],15,{alpha:{bv:0,v:1}},L.Ease.Linear);
										L.Tween.to(info.els["s8_t2"],15,{alpha:{bv:0,v:1}},L.Ease.Linear,function(){
											L.Tween.to(info.els["s8_e5"],15,{alpha:{bv:0,v:1}},L.Ease.Linear,function(){
												L.Tween.to(info.els["point5"],15,{alpha:{bv:0,v:1}},L.Ease.Linear);
												L.Tween.to(info.els["point6"],15,{alpha:{bv:0,v:1}},L.Ease.Linear);
												L.Tween.to(info.els["s8_t3"],30,{alpha:{bv:0,v:1}},L.Ease.Linear);
												L.Tween.to(info.els["s8_t3"].scale,30,{x:{bv:2,v:1},y:{bv:2,v:1}},L.Ease.Linear);
											})
										})
									});
								});
								
							}
						}
						if(name=="s11_e4"){
							s11_e3();
							function s11_e3(){
								var n=1;
								loop();
								function loop(){
									var time=n==1?0:300;
									L.Timer.one(time,function(){
										L.Tween.to(info.els["s11_e3_"+n],5,{alpha:{bv:0,v:1}},L.Ease.Linear,function(){
											if(n<4){
												n++;
												loop();
											}
										});
									})
								}
							}
						}
						var delay=list[i].delay||0;
						(function (name,delay){
							L.Timer.one(delay,function(){
								if(list[i].ani.scale){
									var scale=list[i].ani.scale;
									delete list[i].ani.scale;
									L.Tween.to(info.els[name].scale,frameNum,{x:{bv:scale.bv,v:scale.v},y:{bv:scale.bv,v:scale.v}},ease,function(){
										list[i].ani.scale=scale;
									});
								}
								info.els[name].tween=L.Tween.to(info.els[name],frameNum,list[i].ani,ease,endFun);
							})
							
						})(name,delay);
							

						
					})(i)
					
				}
				if(Math.abs(bgLayer.x)>x+info.els[name].width+stageWidth*0.5||x>Math.abs(bgLayer.x)+stageWidth*1.5){
					info.els[name].ani=false;
					if(info.els[name].tween){
						L.Tween.clear(info.els[name].tween);
					}
					if(list[i].ani){
						for(var p in list[i].ani){
							if(p=="scale"){
								info.els[name][p].x=info.els[name][p].y=list[i].ani[p].bv;
							}else{
								info.els[name][p]=list[i].ani[p].bv;
							}
						}
					}

					if(name=="s6_e4"){
						info.els["s6_e4"].y=750;
						info.els["s6_e3"].alpha=0;
						info.els["s6_e5"].alpha=0;
						info.els["s6_e5"].ani=false;
					}
					if(name=="s8_e1_1"){
						info.els["s8_e1_1"].alpha=0;
						info.els["s8_e1_2"].alpha=0;
						info.els["s8_e1_3"].alpha=0;
						info.els["p1"].alpha=0;
						info.els["p2"].alpha=0;
						info.els["s8_e2"].alpha=0;
						info.els["s8_e2"].ani=false;
					}
					if(name=="s8_e3"){
						for(var j=1;j<=6;j++){
							info.els["point"+j].alpha=0;
							if(info.els["s8_t"+j]){
								info.els["s8_t"+j].alpha=0;
							}
						}
						info.els["s8_e4"].alpha=0;
						info.els["s8_e5"].alpha=0;
					}
					if(name=="s11_e4"){
						info.els["s11_e3_1"].alpha=0;
						info.els["s11_e3_2"].alpha=0;
						info.els["s11_e3_3"].alpha=0;
						info.els["s11_e3_4"].alpha=0;
					}
				}
				
			}
			
			if(Math.abs(bgLayer.x)+stageWidth>info.els["bg25"].x+1000&&Math.abs(bgLayer.x)+stageWidth<info.els["bg25"].x+info.els["bg25"].width*2){
				var sc=(Math.abs(bgLayer.x)+stageWidth-info.els["bg25"].x-1000)/(info.els["bg25"].width*2-1000);
				info.els["bg25"].alpha=sc;
				info.els["bg26"].alpha=sc;
			}else if(Math.abs(bgLayer.x)+stageWidth<info.els["bg25"].x||Math.abs(bgLayer.x)>info.els["bg25"].x+info.els["bg25"].width*2){
				info.els["bg25"].alpha=0;
				info.els["bg26"].alpha=0;
			}else if(Math.abs(bgLayer.x)+stageWidth>info.els["bg25"].x+info.els["bg25"].width*2){
				info.els["bg25"].alpha=1;
				info.els["bg26"].alpha=1;
			}
			
			for(var i=0;i<soundData.length;i++){
				if(Math.abs(bgLayer.x)+stageWidth>soundData[i].x&&soundData[i].x>Math.abs(bgLayer.x)&&!info.els[soundData[i].name].isPlay){
					info.els[soundData[i].name].isPlay=true;
					L.Sound.play(soundData[i].sound);
				}else if((Math.abs(bgLayer.x)>soundData[i].x||soundData[i].x>Math.abs(bgLayer.x)+stageWidth)&&info.els[soundData[i].name].isPlay){
					info.els[soundData[i].name].isPlay=false;
					L.Sound.pause(soundData[i].sound);
				}
			}
		}
		var soundData=[
//			{name:"s9_e5",x:info.els["s9_e5"].x,sound:"s1"},///锤子
			{name:"plane",x:info.els["plane"].x+150,sound:"s2"},//飞机
			{name:"s11_e4",x:info.els["s11_e4"].x+500,sound:"s3"},//高铁
			{name:"s6_e7",x:info.els["s6_e7"].x+info.els["s6_e7"].width,sound:"s4"},//黑板
//			{name:"s6_e8",x:info.els["s6_e8"].x+info.els["s6_e8"].width,sound:"s5"},//救护车
			{name:"pointer",x:info.els["pointer"].x+info.els["pointer"].width,sound:"s6"},//时钟
			{name:"fd3",x:info.els["fd3"].x+info.els["fd3"].width,sound:"s7"},//小鸟
			{name:"s4_e1",x:info.els["s4_e1"].x+info.els["s4_e1"].width,sound:"s8"}//游轮
		]
		
		L.Timer.frameLoop(1,onframe);
		function onframe(){
			render.render(stage);
		}
		_s.init=function(){
			bgLayer.x=0;
//			stage.interactive=true;
			
			info.gameStart=true;
			r1();
		}
		
		function r1(){
			L.Tween.to(info.els["r1"],30,{alpha:{bv:1,v:0.7}},L.Ease.Quad.easeIn)
			       .to(info.els["r1"],20,{alpha:{bv:0.7,v:0}},L.Ease.Quad.easeIn);
			L.Tween.to(info.els["r1"].scale,30,{x:{bv:0,v:1},y:{bv:0,v:1}},L.Ease.Quad.easeInOut)
			       .to(info.els["r1"].scale,20,{x:{bv:1,v:1.5},y:{bv:1,v:1.5}},L.Ease.Quad.easeInOut,function(){
						r1();
			})
		}
		var gdPage=new GdPage();
		function GdPage(){
			var gdLayer=new PIXI.Container();
			stage.addChild(gdLayer);
			var bg=new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(L.Loader.getRes("bg"))));
			gdLayer.addChild(bg);
			var s0_e1=new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(L.Loader.getRes("s0_e1"))));
			s0_e1.anchor.x=0.53;
			s0_e1.anchor.y=0.548;
			s0_e1.x=bg.width/2;
			s0_e1.y=370;
			s0_e1.scale.x=s0_e1.scale.y=0.85;
			gdLayer.addChild(s0_e1);
			var s0_t1=new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(L.Loader.getRes("s0_t1"))));
			s0_t1.anchor.x=0.5;
			s0_t1.x=bg.width/2;
			s0_t1.y=370;
			gdLayer.addChild(s0_t1);
			var s0_t2=new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(L.Loader.getRes("s0_t2"))));
			s0_t2.x=bg.width/2-498;
			s0_t2.y=410;
			gdLayer.addChild(s0_t2);
			var s0_t3=new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(L.Loader.getRes("s0_t3"))));
			s0_t3.x=bg.width/2+290;
			s0_t3.y=410;
			gdLayer.addChild(s0_t3);
			
			var graphics=new PIXI.Graphics();
			gdLayer.addChild(graphics);
			
			var r=214*s0_e1.scale.x;
			var arrow2=new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(L.Loader.getRes("arrow2"))));
			arrow2.anchor.x=0.52;
			arrow2.anchor.y=0.5;
			arrow2.x=s0_e1.x+r;
			arrow2.y=s0_e1.y;
			gdLayer.addChild(arrow2);
			
			ani();
			function ani(){
				var angle=0.017*5;
				var sx=arrow2.x;
				var sy=arrow2.y;
				var x=Math.cos(angle)*r+s0_e1.x;
				var y=Math.sin(angle)*r+s0_e1.y;
				loop();
				function loop(){
					arrow2.ani=L.Tween.to(arrow2,25,{x:{bv:sx,v:x},y:{bv:sy,v:y}},L.Ease.Quad.easeInOut,function(){
						loop();
					})
				}
			}
			var timer=L.Timer.frameLoop(1,function(){
				s0_e1.rotation+=0.017*2;
			})
			window.addEventListener("resize",resize);
			resize();
			function resize(){
				if(window.innerWidth>window.innerHeight){
					gdLayer.x=(info.stageWidth-gdLayer.width)/2;
				}else{
					gdLayer.x=(info.stageHeight-gdLayer.width)/2;
				}
			}
			//创建文本并设置样式
			var  style = new PIXI.TextStyle({
			    fontFamily:"tt",
			    fontSize:72,
			    fill:"#9a5232",
			});
			var str = "1980";
			var  year = new PIXI.Text(str, style);
			year.anchor.x=0.5;
			year.x=745;
			year.y=280;
			gdLayer.addChild(year);
			var step=9;
			var cx=(s0_e1.x+gdLayer.x)/(info.stageWidth/window.innerWidth);
			var cy=s0_e1.y/(info.stageWidth/window.innerWidth);
			var x1,x2,y1,y2;
			var lastAngle,cAngle=0,angle;
			var isTouch;
			var isEnd=false;
//			gdLayer.interactive=true;
			canvas_box.ontouchstart=function(e){
				L.Timer.clear(timer);
				if(!lastAngle){
					lastAngle=s0_e1.rotation;
				}
				
				if(window.innerWidth>window.innerHeight){
					x1=e.changedTouches[0].clientX;
					y1=e.changedTouches[0].clientY;
				}else{
					x1=e.changedTouches[0].clientY;
					y1=window.innerWidth-e.changedTouches[0].clientX;
					
				}
				isTouch=true;
			}
			var step;
			canvas_box.ontouchmove=function(e){
				
				if(!isTouch||isEnd)return;
				if(window.innerWidth>window.innerHeight){
					x2=e.changedTouches[0].clientX;
					y2=e.changedTouches[0].clientY;
				}else{
					x2=e.changedTouches[0].clientY;
					y2=window.innerWidth-e.changedTouches[0].clientX;
				}
				
				angle=Math.atan2(y1-cy,x1-cx);
				angle=angle<0?angle+Math.PI*2:angle;
				
				var temp=Math.atan2(y2-cy,x2-cx);
				temp=temp<0?temp+Math.PI*2:temp;
				step=temp-angle;
//				step=step<0?step+Math.PI*2:step;

				x1=x2;
				y1=y2;
				
				if(Math.abs(step*180/Math.PI)>100||(step<0&&s0_e1.rotation-lastAngle+step<0))return;
				
				s0_e1.rotation+=step;
				var rotation=s0_e1.rotation-lastAngle;
				
				
				
				var num=Math.floor(Math.floor(rotation*180/Math.PI/8.78))+1980;
//				console.log(num,angle,step,rotation)

				year.text=num;
				
				graphics.clear();
				graphics.lineStyle(6,0xd71111);
				graphics.beginFill(0xd71111,0);
				for(var i=0;i<rotation-0.017;i+=0.017){
					var tx=Math.cos(i)*r+s0_e1.x;
					var ty=Math.sin(i)*r+s0_e1.y;
					graphics.moveTo(tx,ty);
					tx=Math.cos(i+0.017)*r+s0_e1.x;
					ty=Math.sin(i+0.017)*r+s0_e1.y;
					graphics.lineTo(tx,ty);
				}
				L.Tween.clear(arrow2.ani);
				arrow2.rotation=rotation;
				arrow2.x=Math.cos(rotation)*r+s0_e1.x;
				arrow2.y=Math.sin(rotation)*r+s0_e1.y;
				if(num>=2020){
					year.text=2020;
					isEnd=true;
					L.Tween.to(gdLayer,35,{alpha:{bv:1,v:0}},L.Ease.Linear,function(){
						gdLayer.visible=false;
						
					});
					info.els["r1"].alpha=0;
					info.els["r2"].alpha=0;
					hxy.visible=true;
					ani2();
					L.Tween.to(hxy,35,{alpha:{bv:0,v:1}},L.Ease.Linear,function(){
						L.Tween.to(hxy.scale,80,{x:{bv:1,v:0.3},y:{bv:1,v:0.3}},L.Ease.Quad.easeInOut);
						L.Tween.to(hxy,80,{x:{bv:hxy.x,v:info.els["r1"].x},y:{bv:hxy.y,v:info.els["r1"].y}},L.Ease.Quad.easeInOut,function(){
							L.Tween.to(hxy,35,{alpha:{bv:1,v:0}},L.Ease.Linear);
							L.Tween.to(info.els["r1"],35,{alpha:{bv:0,v:1}},L.Ease.Linear);
							L.Tween.to(info.els["r2"],35,{alpha:{bv:0,v:1}},L.Ease.Linear,function(){
								L.Timer.clear(h_timer);
								hxy.destroy();
								game.init();
							});
							
						});
					});
				}

			}
			canvas_box.ontouchend=function(){
				isTouch=false;
				
			}
			canvas_box.ontouchcancel=function(){
				isTouch=false;
				
			}
			
			
			var face=[];
			
			for(var i=1;i<=20;i++){
				var texture=new PIXI.Texture(new PIXI.BaseTexture(L.Loader.getRes("d"+i)));
				face.push(texture);
			}
			var hxy=new PIXI.Sprite(face[0]);
			hxy.anchor.x=0.5;
			hxy.anchor.y=0.5;
			hxy.x=s0_e1.x+gdLayer.x;
			hxy.y=s0_e1.y;
			hxy.visible=false;
			stage.addChild(hxy);
			var h_timer;
			function ani2(){
				var n=0;
				h_timer=L.Timer.frameLoop(5,function(){
					n<face.length-1?n++:n=0;
					hxy.texture=face[n];
				})
			}
		}
	}
}
