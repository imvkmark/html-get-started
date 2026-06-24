

var L=(function(){
	window.addEventListener("resize",setFont);
	setFont();
	function setFont(){
		if(window.innerWidth>window.innerHeight){
			document.getElementsByTagName("html")[0].style.fontSize=window.innerHeight/750*100+"px";
		}else{
			document.getElementsByTagName("html")[0].style.fontSize=window.innerWidth/750*100+"px";
		}
	}
	var L={};
	L.imgPath="//img.ruiccm.com/2020/szzn/images/";
	L.soundPath="//img.ruiccm.com/2020/szzn/sound/";
	/*
	 * L.Loader.load(preFun,endFun)开始加载 preFun-加载过程调用  endFun加载完调用
	 * L.Loader.add(list)  添加要加载的图片
	 * L.Loader.setLoadTime(time)自定义加载时间
	 * L.Loader.getRes(resourceName)  resourceName 资源名  获取资源
	 */
	L.Loader=(function(){
		var imgs;
		var loadList=[];
		var img_obj={};
		var preFun,endFun;
		
		
		
		var loadTime=null;
		var startTime;
		var seTime=30;
		var n=0;
		function load(){
			var s=this;
		}
		load.prototype.load=function(fun1,fun2){
			var s=this;
			preFun=fun1;
			endFun=fun2;
			document.addEventListener("DOMContentLoaded",function(){
				startTime=new Date().getTime();
				if(loadTime){
					loadTime+=startTime;
					ani();
				}
				imgs=document.getElementsByTagName("img");
				for(var i=0;i<imgs.length;i++){
					loadList.push(imgs[i].src);
				}
				loop();
			})
			function loop(){
				var img=document.createElement("img");
				img.onload=loaded;
				img.onerror=loaded;
				if(typeof loadList[n]=="string"){
					img.src=loadList[n];
					var str=loadList[n].split("/");
					img_obj[str[str.length-1]]=img;
				}else if(typeof loadList[n]=="object"){
					img.src=loadList[n].path;
					img_obj[loadList[n].name]=img;
				}
			}
			function loaded(){
				n++;
				if(!loadTime&&preFun){
					preFun(Math.floor(n/loadList.length*100>100?100:n/loadList.length*100));
				}
				if(n>=loadList.length){
					if(!loadTime&&endFun)endFun();
					return;
				}
				loop();
			}
		}
		load.prototype.getRes=function(resourceName){
			return img_obj[resourceName];
		}
		//list:[]
		load.prototype.add=function(list){
			var s=this;
			list=list||[];
			for(var i=0;i<list.length;i++){
				if(typeof list[i]=="string"){
					loadList.push(L.imgPath+list[i]);
				}else if(typeof list[i]=="object"){
					loadList.push({name:list[i].name,path:L.imgPath+list[i].path});
				}
			}
		}
		////自定义加载时间
		load.prototype.setLoadTime=function(time){
			var s=this;
			loadTime=time;
		}
		
		function ani(){
			var step=1/((loadTime-startTime)/seTime);
			var pre=0;
			loop();
			function loop(){
				pre+=step;
				preFun&&preFun(Math.floor(pre*100>100?100:pre*100));
				if(pre>=1){
					endFun&&endFun();
					return;
				}
				setTimeout(loop,seTime);
			}
		}
		return new load();
	})();
	
	L.wxReadyRun=[];
	L.wxReadyRunAdd=function(f){
		if(typeof f!="function")return;
		L.wxReadyRun.push(f);
	}
	
	L.Browser=(function(){
		var u = navigator.userAgent;
		var isWeiXin=u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
		var ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		return {isWeiXin:isWeiXin,ios:ios};
	})();
	
	L.Sound=(function(){
		var s=this;
		function sound(){
			s=this;
			s.soundList={};
			s.autoPlayList=[];
		}
		var _sound=new sound();
		sound.prototype.addSound=function(list){
			s=this;
			list=list||[];
			for(var i=0;i<list.length;i++){
				var _audio=document.createElement("audio");
				_audio.src=L.soundPath+list[i].path;
				_audio.isPlay=false;
				s.soundList[list[i].name]=_audio;
				if(list[i].loop){
					_audio.loop=true;
				}
				if(list[i].auto){
					s.autoPlayList.push(_audio);
				}
				_audio.end=function(){};
				_audio.addEventListener("ended",function(){
					_audio.isPlay=false;
					_audio.end();
				})
			}
			
		}
		sound.prototype.end=function(name,fun){
			s.soundList[name].end=fun;
		}
		sound.prototype.play=function(p){
			if(!s.soundList[p])return;
			s.soundList[p].isPlay=true;
			if(!s.soundList[p].loop){
				s.soundList[p].pause();
				s.soundList[p].currentTime=0;
			}
			setTimeout(function(){
				s.soundList[p].play();
			},25)
		}
		sound.prototype.pause=function(p){
			if(!s.soundList[p]||!s.soundList[p].isPlay)return;
			s.soundList[p].isPlay=false;
			s.soundList[p].pause();
		}
		
		////背景声音
		/*L.Sound.BgSound()  背景声音
		 * bgSound:"声音文件名"
		 * icon:{width:图标宽度,height:图标高度,left:,right:,top:,bottom:}///声音图标样式
		 * playIcon{name:"图标图片文件名",width:宽度,ani:"css3动画"}///播放状态图标信息
		 * stopIcon{name:"图标图片文件名",width:宽度,ani:"css3动画"}///停止状态图标信息
		 * parent:".box"
		 */
		sound.prototype.BgSound=function(o){
			
			var _s=this;
			var box=document.createElement("div");
			box.style.position="absolute";
			box.style.width="40px";
			box.style.height="40px";
			box.style.right="0px";
			box.style.top="0px";
			box.style.zIndex=100;
//			box.style.display="none";
			if(o.icon){
				for(var i in o.icon){
					box.style[i]=o.icon[i];
				}
			}
			var s1=document.createElement("div");
			s1.style.cssText="width:100%;height:100%;position:relative;"
			box.appendChild(s1);
			var s2=document.createElement("div");
			s2.style.cssText="width:100%;height:100%;position:relative;"
			box.appendChild(s2);
			
			if(o.playIcon){
				for(var i=0;i<o.playIcon.length;i++){
					var img=document.createElement("img");
					img.src=L.imgPath+o.playIcon[i].name;
					img.style.position="absolute";
					img.style.width=o.playIcon[i].width;
					img.style.left="0px";
					img.style.right="0px";
					img.style.top="0px";
					img.style.bottom="0px";
					img.style.margin="auto";
					if(o.playIcon[i].ani){
						img.className=o.playIcon[i].ani;
					}
					s1.appendChild(img);
				}
			}
			if(o.stopIcon){
				for(var i=0;i<o.stopIcon.length;i++){
					var img=document.createElement("img");
					img.src=L.imgPath+o.stopIcon[i].name;
					img.style.position="absolute";
					img.style.width=o.stopIcon[i].width;
					img.style.left="0px";
					img.style.right="0px";
					img.style.top="0px";
					img.style.bottom="0px";
					img.style.margin="auto";
					if(o.stopIcon[i].ani){
						img.className=o.stopIcon[i].ani;
					}
					s2.appendChild(img);
				}
			}
			s1.style.display="none";
			s2.style.display="block";
			var bgSound=document.createElement("audio");
			bgSound.src=L.soundPath+o.bgSound;
			bgSound.loop=true;
			var isPlay=false
			_s.play=function(){
				if(isPlay)return;
				isPlay=true;
				bgSound.play();
				s1.style.display="block";
				s2.style.display="none";
				box.style.display="block";
			}
			_s.pause=function(){
				if(!isPlay)return;
				isPlay=false;
				bgSound.pause();
				s1.style.display="none";
				s2.style.display="block";
			}
			_s.stop=function(){
				isPlay=false;
				bgSound.pause();
				s1.style.display="none";
				s2.style.display="block";
				box.style.display="none";
			}
			
			var isPlay=false;
			box.on(L.EVENT.CLICK,function(){
				if(isPlay){
					_s.pause();
				}else{
					_s.play();
				}
			})
//			s.autoPlayList.push(bgSound);
			
			
//			L.wxReadyRunAdd(function(){
//				document.body.appendChild(box);
//			})
			
			window.addEventListener("load",function(){
				if(o.parent){
					var parent=document.querySelector(o.parent);
					parent.appendChild(box);
				}else{
					document.body.appendChild(box);
				}
				
			})
//			document.addEventListener("WeixinJSBridgeReady",function(){
//				_s.play();
//			}, false)
		}
		
		return _sound;
	})();
	/*
	 * L.EFFECT 页面切换效果
	 * page.show() 默认切换效果渐隐 
	 * page.show(毫秒) 渐隐效果毫秒数
	 * 
	 */
	L.EFFECT={FADE:"fade",SLIDE_LEFT:"slide_left",SLIDE_RIGHT:"slide_right",SLIDE_UP:"slide_up",SLIDE_DOWN:"slide_down"};
	L.EVENT={TOUCHSTART:"touchstart",TOUCHMOVE:"touchmove",TOUCHEND:"touchend",CLICK:"click",SLIDE:"slide",SLIDE_X:"slide_x",SLIDE_Y:"slide_y",SLIDESTART:"slidestart",SLIDEEND:"slideend"};
	L.EventHandler=[];
	L.Page=function(o){
		var s=this;
		var time=800;
		
		if(typeof o=="object"){
			s.page=document.createElement("div");
			s.page.style.display="none";
			document.body.appendChild(s.page);
			s.page.innerHTML=o.html;
			s.page.className=o.className;
		}else if(typeof o=="string"){
			s.page=document.querySelector(o);
		}
		s.init=function(){};
		s.show=function(t,p){
			if(arguments.length==0){
				effect();
			}else if(arguments.length==1){
				effect(t);
			}else{
				effect(t,p);
			}
			s.init();
		}
		s.hide=function(t,p){
			if(arguments.length==0){
				effect("true");
			}else if(arguments.length==1){
				effect(t,"true");
			}else{
				effect(t,p,"true");
			}
		}
		s.getChild=function(childName){
			return s.page.querySelector(childName);
		}
		s.getChilds=function(childName){
			return s.page.querySelectorAll(childName);
		}
		s.on=function(event,handler){
			s.page.on(event,handler);
		}
		s.off=function(event){
			s.page.off(event,handler);
		}
		//t,p,type
		function effect(){
			if(arguments[arguments.length-1]!="true"){
				s.page.style.opacity=0;
				s.page.style.display="block";
				s.page.style.zIndex=20;
				var bv=0;
				var v=1;
				var p1=null;
				var p2=s.page;
				var arg1=0,arg2=1,arg3=2;
			}else{
				var bv=1;
				var v=0;
				var p1=s.page;
				var p2=null;
				var arg1=1,arg2=2,arg3=3;
			}
			var _time=time;
			L.Timer.frameTime=30;
			if(arguments.length==arg1){
				s.page.style.transition=s.page.style.webkitTransition=null;
				setTimeout(function(){
					s.page.style.transform=s.page.style.webkitTransform="translate3d(0,0,0)";
					L.Tween.to(s.page.style,Math.floor(time/L.Timer.frameTime),{opacity:{bv:bv,v:v}},L.Ease.Linear);
				},30)
				
			}else if(arguments.length==arg2){
				if(typeof arguments[0]=="number"){
					_time=arguments[0];
					s.page.style.transition=s.page.style.webkitTransition=null;
					setTimeout(function(){
						s.page.style.transform=s.page.style.webkitTransform="translate3d(0,0,0)";
						L.Tween.to(s.page.style,Math.floor(_time/L.Timer.frameTime),{opacity:{bv:bv,v:v}},L.Ease.Linear);
					},30)
					
				}else if(typeof arguments[0]=="string"){
					switch_type(time,arguments[0]);
					_time+=200;
				}
			}else if(arguments.length>=arg3){
				if(typeof arguments[0]=="number"&&typeof arguments[1]=="string"){
					_time=arguments[0]+200;
					switch_type(arguments[0],arguments[1]);
					
				}else if(typeof arguments[0]=="string"&&typeof arguments[1]=="number"){
					_time=arguments[1]+200;
					switch_type(arguments[1],arguments[0]);
				}
				
			}
			if(arguments[arguments.length-1]=="true"){
				setTimeout(function(){s.page.style.display="none"},_time);
			}
			
			function switch_type(t,p){
				switch(p){
					case L.EFFECT.FADE:
						s.page.style.transition=s.page.style.webkitTransition=null;
						setTimeout(function(){
							s.page.style.transform=s.page.style.webkitTransform="translate3d(0,0,0)";
							L.Tween.to(s.page.style,Math.floor(t/L.Timer.frameTime),{opacity:{bv:bv,v:v}},L.Ease.Linear);
						},30)
						
						break;
					case L.EFFECT.SLIDE_LEFT:
						L.Slide.slide(p1,p2,L.Slide.SLIDETYPE.LEFT,t/1000);
						break;
					case L.EFFECT.SLIDE_RIGHT:
						L.Slide.slide(p1,p2,L.Slide.SLIDETYPE.RIGHT,t/1000);
						break;
					case L.EFFECT.SLIDE_UP:
						L.Slide.slide(p1,p2,L.Slide.SLIDETYPE.UP,t/1000);
						break;
					case L.EFFECT.SLIDE_DOWN:
						L.Slide.slide(p1,p2,L.Slide.SLIDETYPE.DOWN,t/1000);
						break;
				}
			}
		}
	};
	
	
	
	/*
	 * L.Timer.loop(time,callBack,d) 间隔时间循环  time--毫秒  callBack--循环回调  d--第一次执行延时 
	 * L.Timer.frameLoop(frames,callBack) 设定帧数循环  frames--帧数  callBack--循环回调
	 * L.Timer.clear(loop) 清除某个循环
	 */
	L.Timer={};
	(function(){
		var cTime=new Date().getTime();
		var cFrame=0;
		var handler=[];
		L.Timer.one=function(time,callBack){
			var item={type:"one",time:time,nextTime:cTime+time,callBack:callBack};
			handler.push(item);
			return item;
		}
		L.Timer.loop=function(time,callBack,d){
			var item={type:"loop",time:time,nextTime:cTime+time+(d?d:0),callBack:callBack};
			handler.push(item);
			return item;
		}
		L.Timer.frameLoop=function(frames,callBack){
			var item={type:"frameLoop",frames:frames,nextFrame:cFrame+frames,callBack:callBack};
			handler.push(item);
			return item;
		};
		L.Timer.clear=function(item){
			for(var i=0;i<handler.length;i++){
				if(handler[i]===item){
					handler.splice(i,1);
					break;
				}
			}
		};
		L.Timer.frameTime=30;
		(function onframe(){
			cFrame++;
			var t=new Date().getTime();
			L.Timer.frameTime=t-cTime;
			if(L.Timer.frameTime<1000/60){
				L.Timer.frameTime=1000/60;
			}
			L.Timer.frameTime=30;
			cTime=t;
			for(var i=0;i<handler.length;i++){
				if(handler[i].type=="frameLoop"){
					if(cFrame>=handler[i].nextFrame){
						handler[i].nextFrame+=handler[i].frames;
						handler[i].callBack();
					}
				}else{
					if(cTime>=handler[i].nextTime){
						handler[i].callBack();
						if(handler[i].type=="one"){
							handler.splice(i,1);
							i--;
						}else if(handler[i].type=="loop"){
							handler[i].nextTime+=handler[i].time;
						}
					}
				}
				
			}
			requestAnimationFrame(onframe);
		})();
	})();
	
	
	
	
	L.Tween=(function(){
		var handler=[];
		function to(o,f,p,easeFun,endFun,preFun){
			var item={state:"play",n:0,loop:false,handler:[]};
			handler.push(item);
			var g={item:item,to:_to,loop:loop};
			g.to(o,f,p,easeFun,endFun,preFun);
			return g;
		}
		function _to(o,f,p,easeFun,endFun,preFun){
			var s=this;
			var t=0,d=f;
			var _b=[],_c=[];
			for(var i in p){
				_b.push(p[i].bv);
				_c.push(p[i].v-p[i].bv);
			}
			s.item.handler.push(function(){
				t++;
				
				if(t>d){
					endFun&&endFun();
					t=0;
					s.item.n++;
					if(s.item.n>=s.item.handler.length){
						if(s.item.loop){
							s.item.n=0;
						}else{
							s.item.state="end";
						}
					}
					return;
				}
				var j=0;
				for(var i in p){
					var n=easeFun(t,_b[j],_c[j],d);
					o[i]=n;
					j++;
				}
				preFun&&preFun();
			})
			return s;
		}
		function loop(){
			this.item.loop=true;
			return this;
		}
		function pause(item){
			if(!item)return;
			item.item.state="pause";
		}
		function reStart(item){
			if(!item)return;
			item.item.state="play";
		}
		function clear(item){
			if(!item)return;
			item.item.state="end";
		}
		function run(){
			for(var i=0;i<handler.length;i++){
				if(handler[i].state=="play"){
					handler[i].handler[handler[i].n]();
				}
			}
			for(var i=0;i<handler.length;i++){
				if(handler[i].state=="end"){
					handler.splice(i,1);
					i--;
				}
			}
		}
		L.Timer.frameLoop(1,run);
		
		return {to:to,pause:pause,reStart:reStart,clear:clear};
	})();
	
	

	
	HTMLElement.prototype.on=function(event,handler){
		var s=this;
		var f=false;
		if(event==L.EVENT.SLIDE){
			
		}else{
			addHandler(L.EventHandler,s,handler);
		}
		switch(event){
			case L.EVENT.TOUCHSTART:
			case L.EVENT.TOUCHMOVE:
			case L.EVENT.TOUCHEND:
			case L.EVENT.SLIDE:
			case L.EVENT.CLICK:
				addEvent(s,event,handler);
				break;
		}
		function addHandler(eventHandler,s,handler){
			for(var i=0;i<eventHandler.length;i++){
				if(eventHandler[i].s==s){
					if(!eventHandler[i].handler[event]){
						eventHandler[i].handler[event]=[];
					}
					eventHandler[i].handler[event].push(handler);
					f=true;
					break;
				}
			}
			if(!f){
				eventHandler.push({s:s,handler:{}});
				eventHandler[eventHandler.length-1].handler[event]=[handler];
			}
		}
	}
	HTMLElement.prototype.off=function(event){
		var s=this;
		if(event==L.EVENT.SLIDE||event==L.EVENT.CLICK){
			if(s.handler){
				s.removeEventListener(L.EVENT.TOUCHSTART,s.handler);
				s.removeEventListener(L.EVENT.TOUCHMOVE,s.handler);
				s.removeEventListener(L.EVENT.TOUCHEND,s.handler);
			}
			return;
		}
		switch(event){
			case L.EVENT.TOUCHSTART:
			case L.EVENT.TOUCHMOVE:
			case L.EVENT.TOUCHEND:
				var handler;
				for(var i=0;i<L.EventHandler.length;i++){
					if(L.EventHandler[i].s==s){
						for(var j in L.EventHandler[i].handler){
							if(j==event){
								handler=L.EventHandler[i].handler[j];
							}
						}
						break;
					}
				}
				if(handler){
					for(var i=0;i<handler.length;i++){
						s.removeEventListener(event,handler[i]);
					}
				}
				
				break;
		}
		for(var i=0;i<L.EventHandler.length;i++){
			if(L.EventHandler[i].s==s){
				for(var j in L.EventHandler[i].handler){
					if(j==event){
						delete L.EventHandler[i].handler[event];
					}
				}
			}
		}
	}
	
	L.Slide={};
	L.Slide.SLIDETYPE={UP:"up",DOWN:"down",LEFT:"left",RIGHT:"right"};
	L.Slide.slideTime=0.8;
	L.Slide.slide=(function(){
		var time;
		function slide(p1,p2,type,t,h){
			type=type||"left";
			if(p1){
				p1.isSlide=true;
			}
			if(p2){
				p2.isSlide=true;
			}
			time=t||L.Slide.slideTime;
			var x,y;
			switch(type){
				case L.Slide.SLIDETYPE.UP:
					x=0;
					y=-window.innerHeight;
					if(h){
						y=-h;
					}
					break;
				case L.Slide.SLIDETYPE.DOWN:
					x=0;
					y=window.innerHeight;
					if(h){
						y=h;
					}
					break;
				case L.Slide.SLIDETYPE.LEFT:
					x=-window.innerWidth;
					if(h){
						x=-h;
					}
					y=0;
					break;
				case L.Slide.SLIDETYPE.RIGHT:
					x=window.innerWidth;
					if(h){
						x=h;
					}
					y=0;
					break;
			}
			next(p1,p2,x,y);
		}
		function next(p1,p2,x,y){
			if(p1){
				p1.style.transition=p1.style.webkitTransition=null;
			}
			if(p2){
				p2.style.display="none";
				p2.style.transition=p2.style.webkitTransition=null;
			}
			setTimeout(function(){
				if(p1){
					p1.style.transform=p1.style.webkitTransform="translate3d(0,0,0)";
					p1.style.display="block";
					p1.style.opacity=1;
				}
				if(p2){
					p2.style.transform=p2.style.webkitTransform="translate3d("+(-x)+"px,"+(-y)+"px,0)";
					p2.style.display="block";
					p2.style.opacity=1;
				}
				setTimeout(function(){
					if(p1){
						p1.style.transition="transform "+time+"s";
						p1.style.webkitTransition="-webkit-transform "+time+"s";
					}
					if(p2){
						p2.style.transition="transform "+time+"s";
						p2.style.webkitTransition="-webkit-transform "+time+"s";
					}
					setTimeout(function(){
						slideStart(p1,p2);
						if(p1){
							p1.style.transform=p1.style.webkitTransform="translate3d("+x+"px,"+y+"px,0)";
						}
						if(p2){
							p2.style.transform=p2.style.webkitTransform="translate3d(0,0,0)";
						}
						setTimeout(function(){
							if(p1){
								p1.isSlide=false;
							}
							if(p2){
								p2.isSlide=false;
							}
							slideEnd(p1,p2);
						},time*1000)
					},30)
				},100)
			},30)
		}
		function slideStart(p1,p2){
			for(var i=0;i<L.EventHandler.length;i++){
				if(L.EventHandler[i].s==p1||L.EventHandler[i].s==p2){
					for(var j in L.EventHandler[i].handler){
						if(j==L.EVENT.SLIDESTART){
							for(var l=0;l<L.EventHandler[i].handler[L.EVENT.SLIDESTART].length;l++){
								L.EventHandler[i].handler[L.EVENT.SLIDESTART][l]();
							}
						}
					}
				}
			}
		}
		function slideEnd(p1,p2){
			for(var i=0;i<L.EventHandler.length;i++){
				if(L.EventHandler[i].s==p1||L.EventHandler[i].s==p2){
					for(var j in L.EventHandler[i].handler){
						if(j==L.EVENT.SLIDEEND){
							for(var l=0;l<L.EventHandler[i].handler[L.EVENT.SLIDEEND].length;l++){
								L.EventHandler[i].handler[L.EVENT.SLIDEEND][l]();
							}
						}
					}
				}
			}
		}
		return slide;
	})();
	L.Class=function(subClass,pageName){
		L.Page.call(subClass,pageName);
	}
	function addEvent(o,type,handler){
		switch(type){
			case L.EVENT.TOUCHSTART:
				o.addEventListener("touchstart",handler);
				break;
			case L.EVENT.TOUCHMOVE:
				o.addEventListener("touchmove",handler);
				break;
			case L.EVENT.TOUCHEND:
				o.addEventListener("touchend",handler);
				break;
			case L.EVENT.CLICK:
				touchEvent(o,handler,type);
				break;
			case L.EVENT.SLIDE:
				touchEvent(o,handler,type);
				break;
		}
	}
	function touchEvent(o,handler,type){
		var event={};
		var sx,mx,ex,sy,my,ey;
		if(type){
			o.handler=slideClickHandler;
		}
		o.addEventListener("touchstart",slideClickHandler);
		o.addEventListener("touchmove",slideClickHandler);
		o.addEventListener("touchend",slideClickHandler);
		function slideClickHandler(e){
//			e.preventDefault();
			if(e.type=="touchstart"){
				event.type="touchstart";
				event.slideType=null;
				event.sx=e.changedTouches[0].clientX;
				event.sy=e.changedTouches[0].clientY;
				if(!type){
					handler(event,e);
				}
			}else if(e.type=="touchmove"){
				event.type="touchmove";
				event.slideType=null;
				event.mx=e.changedTouches[0].clientX;
				event.my=e.changedTouches[0].clientY;
				if(!type){
					handler(event,e);
				}
			}else if(e.type=="touchend"){
				event.type="touchend";
				event.ex=e.changedTouches[0].clientX;
				event.ey=e.changedTouches[0].clientY;
				if(type){
					if(Math.abs(event.ex-event.sx)<=3&&Math.abs(event.ey-event.sy)<=3&&type==L.EVENT.CLICK){
						handler(event,e);
					}else if(event.ex-event.sx<-8&&Math.abs(event.ex-event.sx)>Math.abs(event.ey-event.sy)&&type==L.EVENT.SLIDE){
						event.slideType=L.Slide.SLIDETYPE.LEFT;
						handler(event);
					}else if(event.ex-event.sx>8&&Math.abs(event.ex-event.sx)>Math.abs(event.ey-event.sy)&&type==L.EVENT.SLIDE){
						event.slideType=L.Slide.SLIDETYPE.RIGHT;
						handler(event);
					}else if(event.ey-event.sy<-8&&Math.abs(event.ey-event.sy)>Math.abs(event.ex-event.sx)&&type==L.EVENT.SLIDE){
						event.slideType=L.Slide.SLIDETYPE.UP;
						handler(event);
					}else if(event.ey-event.sy>8&&Math.abs(event.ey-event.sy)>Math.abs(event.ex-event.sx)&&type==L.EVENT.SLIDE){
						event.slideType=L.Slide.SLIDETYPE.DOWN;
						handler(event);
					}
				}else{
					handler(event,e);
				}
				
			}
		}
	}
	
	L.Scroll={};
	/////{o:o,sc1:sc1,sc2:sc2,p:p,scrollLength:100,autoSpeed:0.3}
	L.Scroll.scroll=function(obj){
		var o=obj.o;
		var p=obj.p||"scrollTop";
		var sc1=obj.sc1;
		var sc2=obj.sc2;
		var scrollLength=o.scrollLength;
		var sx,sy;
		var sh;
		var t;
		touchEvent(o,function(e){
			if(e.type=="touchstart"){
				autoScroll.stop();
				sx=e.sx;
				sy=e.sy;
				if(sc1&&sc2){
					if(p=="scrollTop"){
						scrollLength=o.scrollHeight-o.offsetHeight;
						t="top";
						sh=sc1.offsetHeight-sc2.offsetHeight;
					}else if(p=="scrollLeft"){
						scrollLength=o.scrollWidth-o.offsetWidth;
						t="left";
						sh=sc1.offsetWidth-sc2.offsetWidth;
					}
				}
			}else if(e.type=="touchmove"){
				
				if(p=="scrollTop"||p=="y"){
					var move=e.my-e.sy;
				}else if(p=="scrollLeft"||p=="x"){
					var move=e.mx-e.sx;
				}

				if(p=="scrollTop"||p=="scrollLeft"){
					o[p]-=move;
				}else{
					o[p]+=move;
					if(o[p]<scrollLength){
						o[p]=scrollLength;
					}
				}
				
				e.sx=e.mx;
				e.sy=e.my;
				
				if(sc1&&sc2&&scrollLength&&sh){
					sc2.style[t]=o[p]/scrollLength*sh+"px";
				}
			}else if(e.type=="touchend"){
				if(p=="scrollTop"||p=="y"){
					autoScroll.start(e.ey-sy);
				}else{
					autoScroll.start(e.ex-sx);
				}
			}
		});
		if(sc1&&sc2){
			touchEvent(sc2,function(e){
				if(e.type=="touchstart"){
					autoScroll.stop();
					sx=e.sx;
					sy=e.sy;
					if(p=="scrollTop"){
						scrollLength=o.scrollHeight-o.offsetHeight;
						t="top";
						sh=sc1.offsetHeight-sc2.offsetHeight;
					}else if(p=="scrollLeft"){
						scrollLength=o.scrollWidth-o.offsetWidth;
						t="left";
						sh=sc1.offsetWidth-sc2.offsetWidth;
					}
				}else if(e.type=="touchmove"){
					if(p=="scrollTop"){
						var move=e.my-sy;
					}else if(p=="scrollLeft"){
						var move=e.mx-sx;
					}
					o[p]-=move;
					sc2.style[t]=sc2["offset"+t.substr(0,1).toUpperCase()+t.substr(1)]+move+"px";
					sx=e.mx;
					sy=e.my;
					
					o[p]=scrollLength*(sc2["offset"+t.substr(0,1).toUpperCase()+t.substr(1)]/sh);
					
				}
			});
		}
		
		autoScroll.autoSpeed=(o.autoSpeed||0.3)/10;
		autoScroll.run=function(m){
			if(p=="scrollTop"||p=="scrollLeft"){
				o[p]-=m;
			}else{
				o[p]+=m;
				if(o[p]<scrollLength){
					o[p]=scrollLength;
				}
			}
			if(sc1&&sc2&&scrollLength&&sh){
				sc2.style[t]=o[p]/scrollLength*sh+"px";
			}
		}
	}
	var autoScroll=new AutoScroll();
	function AutoScroll(){
		var s=this;
		var t=0;
		var d=50;
		var b=0;
		var c=0;
		var last=0;
		var current;
		var lastTime;
		var temp;
		var se;
		s.autoSpeed=0.03;
		s.end=function(){};
		s.run=function(){};
		function loop(){
			t++;
			if(t>d||Math.abs(temp)<1){
				temp=10;
				s.end();
				return;
			}
			current=Math.floor(Tween.Cubic.easeOut(t,b,c,d));
			temp=current-last;
			s.run(temp);
			last=current;
			se=setTimeout(loop,1000/60);
		}
		s.start=function(move){
			var time=new Date().getTime()-lastTime;
			if(time>=0){
				time=(300-time)<0?0:(300-time);
				move=time*move*0.95*s.autoSpeed+move*0.05*s.autoSpeed;
			}
			
			t=0;
			d=50;
			b=0;
			c=move;
			last=0;
			loop();
		}
		s.stop=function(){
			lastTime=new Date().getTime();
			clearTimeout(se);
		}
	};
	/*图片栽剪编辑
	 * L.Photo.edit(box,photo,eventObject)
	 * box-图片外层元素
	 * photo-图片
	 * eventObject-注册事件元素(可省略，省略以box作为注册事件元素)
	 * L.Photo.setPhoto(img) 重新设置栽剪编辑图片
	 * L.Photo.createPhoto() 生成栽剪后图片
	 */
	L.Photo=(function(){
		function photo(){
			var s=this;
			var point1={sx:0,ex:0,sy:0,ey:0};
			var point2={sx:0,ex:0,sy:0,ey:0};
			var eo;
			var o,_photo;
			var photoImg=document.createElement("img");
			photoImg.crossOrigin="*";
			var x;
			var y;
			var offY=0;
			var scale;
			var rotate;
			var isAuto;
			var isScale;
			s.isRotation=false;
			s.edit=function(box,photo,eventObject){
				_photo=photo;
				o=box;
				photoImg.src=photo.src;
				eo=eventObject||box;
				s.init();
				touchEvent(eo,function(event,e){
					if(isAuto)return;
					if(e.type=="touchstart"){
						if(e.touches[0]){
							point1.sx=e.touches[0].clientX;
							point1.sy=e.touches[0].clientY;
						}
						if(e.touches[1]){
							point2.sx=e.touches[1].clientX;
							point2.sy=e.touches[1].clientY;
						}else{
							point2.sx=null;
							point2.sy=null;
						}
					}else if(e.type=="touchmove"){
						if(e.touches[0]){
							point1.ex=e.touches[0].clientX;
							point1.ey=e.touches[0].clientY;
						}
						if(e.touches[1]&&point2.sx!=null&&point2.sy!=null){
							isScale=true;
							point2.ex=e.touches[1].clientX;
							point2.ey=e.touches[1].clientY;
							var sc=Math.sqrt((point2.ex-point1.ex)*(point2.ex-point1.ex)+(point2.ey-point1.ey)*(point2.ey-point1.ey))-Math.sqrt((point2.sx-point1.sx)*(point2.sx-point1.sx)+(point2.sy-point1.sy)*(point2.sy-point1.sy));
							sc*=0.0015;
							if(isNaN(sc)){
								sc=0;
							}
							scale+=sc;
//							scale<1?scale=1:true;
							if(s.isRotation){
								rotate+=(Math.atan2(point2.ey-point1.ey,point2.ex-point1.ex)-Math.atan2(point2.sy-point1.sy,point2.sx-point1.sx))*180/Math.PI;
							}
							
							point2.sx=point2.ex;
							point2.sy=point2.ey;
						}else{
							if(!isScale){
								x+=point1.ex-point1.sx;
								y+=point1.ey-point1.sy;
							}
							isScale=false;
						}
						point1.sx=point1.ex;
						point1.sy=point1.ey;
						photo.style.transform=photo.style.webkitTransform="translate3d("+x+"px,"+(y+offY)+"px,0) scale("+scale+") rotate("+rotate+"deg)";
					}else if((e.type=="touchend"||e.type=="touchcancel")&&!s.isRotation){
//						return;
						var w=photo.offsetWidth;
						var h=photo.offsetHeight;
						var boxH=box.clientHeight;
						var boxW=box.clientWidth;
						if((h-h*scale)/2+y>0){
							photo.style.transition=photo.style.webkitTransition="all 0.2s";
							y=-((h-h*scale)/2)-offY;
							isAuto=true;
						}else if((h-h*scale)/2+y+h*scale<boxH){
							photo.style.transition=photo.style.webkitTransition="all 0.2s";
							y+=boxH-((h-h*scale)/2+y+h*scale)-offY;
							isAuto=true;
						}
						if((w-w*scale)/2+x>0){
							photo.style.transition=photo.style.webkitTransition="all 0.2s";
							x=-((w-w*scale)/2);
							isAuto=true;
						}else if((w-w*scale)/2+x+w*scale<boxW){
							photo.style.transition=photo.style.webkitTransition="all 0.2s";
							x+=boxW-((w-w*scale)/2+x+w*scale);
							isAuto=true;
						}
						if(isAuto){
							photo.style.transform=photo.style.webkitTransform="translate3d("+x+"px,"+(y+offY)+"px,0) scale("+scale+") rotate("+rotate+"deg)";
							setTimeout(function(){
								photo.style.transition=photo.style.webkitTransition=null;
								isAuto=false;
							},200)
						}
					}
				})
			}
			s.createPhoto=function(callback){
				var img=document.createElement("img");
				img.crossOrigin="*";
				img.onload=function(){
					var sc=2;
					var w=_photo.offsetWidth;
					var h=_photo.offsetHeight;
					var temp_can=document.createElement("canvas");
					temp_can.width=w*scale*sc;
					temp_can.height=h*scale*sc;
					var temp_ctx=temp_can.getContext("2d");
					temp_ctx.drawImage(img,0,0,temp_can.width,temp_can.height);
					
					var canvas=document.createElement("canvas");
					canvas.width=o.clientWidth*sc;
					canvas.height=o.clientHeight*sc;
					var ctx=canvas.getContext("2d");
					ctx.translate(temp_can.width/2,temp_can.height/2);
					ctx.rotate(rotate*Math.PI/180);
					ctx.drawImage(temp_can,-temp_can.width/2+x*sc,-temp_can.height/2+y*sc,temp_can.width,temp_can.height);
					var photo=canvas.toDataURL("image/jpeg");
					
					callback&&callback(photo);
				}
				img.src=photoImg.src;
			}
			s.init=function(){
				
				if(_photo.offsetHeight<o.clientHeight){
					scale=o.clientHeight/_photo.offsetHeight;
					offY=(o.clientHeight-_photo.offsetHeight)/2;
					console.log(offY,o.clientHeight,_photo.offsetHeight)
				}else{
					offY=0;
					scale=1;
				}
				x=0;
				y=0;
				rotate=0;
				isAuto=false;
				isScale=false;
				_photo.style.transform=_photo.style.webkitTransform="translate3d(0,"+(y+offY)+"px,0) scale("+scale+") rotate(0deg)";
			}
			s.setPhoto=function(src){
				
				_photo.src=src;
				photoImg.src=_photo.src;
				
				if(_photo.complete){
					setTimeout(function(){
						s.init();
					},50)
				}else{
					_photo.onload=function(){
						
						s.init();
					}
				}
			}
		}
		return new photo();
	})();
	
	
	
	
	L.Screen=(function(){
		var isFocus;
		function rotateScreen(page,lock){
			var p=document.querySelector(page);
			var lockPage;
			if(lock){
				lockPage=document.createElement("div");
				lockPage.style.cssText="width:100%;height:100%;position: absolute;left:0;top:0;background:#000;z-index:9999;";
				var img=document.createElement("img");
				img.src=L.imgPath+lock.img;
				img.style.width=lock.width+"px";
				img.style.position="absolute";
				img.style.left="0px";
				img.style.right="0px";
				img.style.top="0px";
				img.style.bottom="0px";
				img.style.margin="auto";
				img.style.display="block";
				lockPage.appendChild(img);
				document.body.appendChild(lockPage);
			}
			var se;
			rotate();
			function rotate(){
				clearTimeout(se);
				loop();
				function loop(){
					if(window.innerWidth<window.innerHeight){
						p.style.width=window.innerHeight+"px";
						p.style.height=window.innerWidth+"px";
						p.style.transformOrigin=p.style.webkitTransformOrigin="left top";
						p.style.transform=p.style.webkitTransform="translate("+window.innerWidth+"px,0) rotate(90deg)";
						if(lockPage){
							lockPage.style.display="none";
						}
					}else if(!isFocus){
						p.style.width=window.innerWidth+"px";
						p.style.height=window.innerHeight+"px";
						p.style.transform=p.style.webkitTransform="translate(0,0) rotate(0deg)";
						if(lockPage){
							lockPage.style.display="block";
						}
					}
					se=setTimeout(loop,500);
				}
				
			}
//			window.addEventListener("resize",rotate);
		}
		function focus(){
			isFocus=true;
		}
		function blur(){
			isFocus=false;
		}
		
		return {width:window.innerWidth,height:window.innerHeight,rotateScreen:rotateScreen,focus:focus,blur:blur};
	})();
	
	window.addEventListener("load",function(){
		if(L.Screen.width==0||L.Screen.height==0){
			L.Screen.width=window.innerWidth;
			L.Screen.height=window.innerHeight;
		}
	})
	
// Tween类
/**
 参数列表 
t: current time(当前时间)
b: beginning value(初始值)
c: change in value(变化量)
d: duration(持续时间)
*/
/*
效果说明:
Linear：无缓动效果；
Quadratic：二次方的缓动（t^2）；
Cubic：三次方的缓动（t^3）；
Quartic：四次方的缓动（t^4）；
Quintic：五次方的缓动（t^5）；
Sinusoidal：正弦曲线的缓动（sin(t)）；
Exponential：指数曲线的缓动（2^t）；
Circular：圆形曲线的缓动（sqrt(1-t^2)）；
Elastic：指数衰减的正弦曲线缓动；
Back：超过范围的三次方缓动（(s+1)*t^3 - s*t^2）；
Bounce：指数衰减的反弹缓动。
ps：以上都是自己的烂翻译，希望各位修正。
每个效果都分三个缓动方式（方法），分别是：
easeIn：从0开始加速的缓动；
easeOut：减速到0的缓动；
easeInOut：前半段从0开始加速，后半段减速到0的缓动。
其中Linear是无缓动效果，没有以上效果。
 */
var Tween = {
	Linear: function(t,b,c,d){ return c*t/d + b; },
	Quad: {
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t + b;
		},
		easeOut: function(t,b,c,d){
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t + b;
			return -c/2 * ((--t)*(t-2) - 1) + b;
		}
	},
	Cubic: {
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t*t + b;
		},
		easeOut: function(t,b,c,d){
			return c*((t=t/d-1)*t*t + 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t*t + b;
			return c/2*((t-=2)*t*t + 2) + b;
		}
	},
	Quart: {
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t*t*t + b;
		},
		easeOut: function(t,b,c,d){
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		}
	},
	Quint: {
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t*t*t*t + b;
		},
		easeOut: function(t,b,c,d){
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
			return c/2*((t-=2)*t*t*t*t + 2) + b;
		}
	},
	Sine: {
		easeIn: function(t,b,c,d){
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		},
		easeOut: function(t,b,c,d){
			return c * Math.sin(t/d * (Math.PI/2)) + b;
		},
		easeInOut: function(t,b,c,d){
			return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		}
	},
	Expo: {
		easeIn: function(t,b,c,d){
			return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOut: function(t,b,c,d){
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	},
	Circ: {
		easeIn: function(t,b,c,d){
			return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		},
		easeOut: function(t,b,c,d){
			return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
			return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
		}
	},
	Elastic: {
		easeIn: function(t,b,c,d,a,p){
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		easeOut: function(t,b,c,d,a,p){
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
		},
		easeInOut: function(t,b,c,d,a,p){
			if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
			if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
		}
	},
	Back: {
		easeIn: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158;
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		easeOut: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158;
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		easeInOut: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158; 
			if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		}
	},
	Bounce: {
		easeIn: function(t,b,c,d){
			return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
		},
		easeOut: function(t,b,c,d){
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			}
		},
		easeInOut: function(t,b,c,d){
			if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
			else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
		}
	}
};
	
	L.Ease={};
	L.Ease.Linear=Tween.Linear;
	L.Ease.Quad={easeIn:Tween.Quad.easeIn,easeOut:Tween.Quad.easeOut,easeInOut:Tween.Quad.easeInOut};
	L.Ease.Cubic={easeIn:Tween.Cubic.easeIn,easeOut:Tween.Cubic.easeOut,easeInOut:Tween.Cubic.easeInOut};
	
	
	L.alert=function(str,type,callback,rotate){
		var type=type||1;
		if(type==1){
			t1();
		}else if(type==2){
			t2();
		}
		function t1(){
			var div=document.createElement("div");
			div.style.cssText="width:100%;height: 100%;position: absolute;left:0;top:0;z-index: 999;background:rgba(0,0,0,0.8);";
			var html='<div class="el" style="width:200px;height:120px;position:absolute;left:50%;top:50%;margin-top:-60px;border-radius:5px;box-shadow:3px 3px 8px #222;background:#fff;margin-left:-100px">'+
						'<div style="width:100%;text-align:center;position:absolute;left:0;top:25%;font-size:13px;">'+str+'</div>'+
						'<div class="close" style="width:50%;height:28px;font-size:13px;text-align:center;line-height:28px;background:#eee;border-radius:2px;position:absolute;left:25%;top:63%;">确定</div>'+
					 '</div>'
			div.innerHTML=html;
			document.body.appendChild(div);
			var el=div.getElementsByClassName("el")[0];
			if(rotate){
				el.style.transformOrigin=el.style.webkitTransformOrigin="center center";
				el.style.transform=el.style.webkitTransform="rotate(90deg)";
			}
			var close=div.getElementsByClassName("close")[0];
			close.on(L.EVENT.CLICK,function(){
				setTimeout(function(){
					document.body.removeChild(div);
					callback&&callback();
				},50)
				
			})
		}
		function t2(){
			var div=document.createElement("div");
			div.innerHTML=str;
			div.style.cssText="width:200px;height:45px;line-height:45px;position:absolute;left:50%;top:47%;font-size:13px;color:#fff;text-align:center;background:rgba(0,0,0,0.75);border-radius: 8px;z-index: 9999;margin-left:-100px";
			document.body.appendChild(div);
			if(rotate){
				div.style.transformOrigin=div.style.webkitTransformOrigin="center center";
				div.style.transform=div.style.webkitTransform="rotate(90deg)";
			}
			setTimeout(function(){
				document.body.removeChild(div);
			},2000)
		}
	}
	
	
	return L;
})();


document.addEventListener("WeixinJSBridgeReady",function(){
	for(var i=0;i<L.Sound.autoPlayList.length;i++){
		L.Sound.autoPlayList[i].load();
		L.Sound.autoPlayList[i].play();
		L.Sound.autoPlayList[i].pause();
	}
	
	for(var i=0;i<L.wxReadyRun.length;i++){
		L.wxReadyRun[i]();
	}
	
}, false)

window.alert = function(name){
   var iframe = document.createElement("IFRAME");
iframe.style.display="none";
iframe.setAttribute("src", 'data:text/plain,');
document.documentElement.appendChild(iframe);
window.frames[0].window.alert(name);
iframe.parentNode.removeChild(iframe);
}

window.addEventListener("load",function(){
	inputBlur();
})
function inputBlur(){
	var inputs=document.getElementsByTagName("input");
	for(var i=0;i<inputs.length;i++){
		inputs[i].addEventListener("blur",reScroll);
		function reScroll(){
			setTimeout(function(){
			    window.scrollTo(0, document.body.scrollTop + 1);
			    document.body.scrollTop >= 1 && window.scrollTo(0, document.body.scrollTop - 1);  
			}, 10)
			L.Screen.blur();
		}
		inputs[i].addEventListener("focus",function(){
			L.Screen.focus();
		});
	}
	
}
function rotatePhoto(file,callback){
	getOrientation(file, function(n){
		var img=new Image();
		img.crossOrigin="*";
	    img.src=URL.createObjectURL(file);
		if(img.complete){
			draw(img);
		}else{
			img.onload=function(){
				draw(img);
			}
		}
		
		function draw(img){
			var canvas=document.createElement("canvas");
			if(n==6){
				canvas.width=img.height;
				canvas.height=img.width;
			}else{
				canvas.width=img.width;
				canvas.height=img.height;
			}
			
			
			var ctx=canvas.getContext("2d");
			ctx.translate(canvas.width/2,canvas.height/2);
			if(n==6){
				ctx.rotate(Math.PI/2);
			}
			
			ctx.drawImage(img,-img.width/2,-img.height/2,img.width,img.height);
			
			var src=canvas.toDataURL("image/jpeg");
			
			callback(src);
		}
		
	})
}
// 该函数返回照片方向的代码
///  1--正常   8--顺时针90度  3--顺时针180度  6--逆时针90度
function getOrientation(file, callback) {
  var reader = new FileReader();
  reader.onload = function(e) {

    var view = new DataView(e.target.result);
    if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
    var length = view.byteLength, offset = 2;
    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;
      if (marker == 0xFFE1) {
        if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
        var little = view.getUint16(offset += 6, false) == 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;
        for (var i = 0; i < tags; i++)
          if (view.getUint16(offset + (i * 12), little) == 0x0112)
            return callback(view.getUint16(offset + (i * 12) + 8, little),e.target.result);
      }
      else if ((marker & 0xFF00) != 0xFF00) break;
      else offset += view.getUint16(offset, false);
    }
    return callback(-1);
  };
  reader.readAsArrayBuffer(file);
}



function bezierFn(points, t) {
	var obj={}
	obj.x = (1 - t) * (1 - t) * points[0].x + 2 * t * (1 - t) * points[1].x + t * t * points[2].x;
	obj.y = (1 - t) * (1 - t) * points[0].y + 2 * t * (1 - t) * points[1].y + t * t * points[2].y;
	return obj;
}

function multiPointBezier(points, t){
    var len = points.length;
    var x = 0, y = 0;
    var erxiangshi = function (start, end) {
        var cs = 1, bcs = 1;
        while (end > 0) {
            cs *= start;
            bcs *= end;
            start--;
            end--;
        }
        return (cs / bcs);
    };
    for (var i = 0; i < len; i++) {
        var point = points[i];
        x += point.x * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (erxiangshi(len - 1, i));
        y += point.y * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (erxiangshi(len - 1, i));
    }
    return { x: x, y: y };
}




//_hmt.push(['_trackEvent', 'from', 'from_']);
