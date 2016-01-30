window.onload=function(){
function game(){
 this.clientw=document.documentElement.clientWidth;//窗口宽度
 this.clienth=document.documentElement.clientHeight;//窗口高度
 this.letterArr=["A","B","C","D","E","F","G","H","I",
 "J","K",'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];//字母
 this.letterLen=5;//第一关出现5个字母
 this.speed=3;//速度是3
 this.spans=[];//每个字母放在span中，这些span组成一个数组，便于操作
 this.currArr=[];//当前屏幕中的的字母
 this.currPosArr=[];//当前屏幕中字母的位置
 this.die=10;//生命
 this.sore=0;//分数
 this.currSore=0;//本关分数
 this.num=10;//第一关10个后下一关
 //显示分数
 this.soreEle=document.getElementsByClassName("sore")[0].getElementsByTagName("span")[1];
  // this.soreEle.innerHTML=
 //显示生命
 this.dieEle=document.getElementsByClassName("die")[0].getElementsByTagName("span")[1];
  this.dieEle.innerHTML=this.die;
 // this.step=100;//每关多少个可到下一关；
 this.aa=1;//关卡。第一关
}
game.prototype={
   play:function(){
       //将字母显示到body里面
       this.getLetter(this.letterLen);
       this.move();
       this.key();
   },
    key:function(){
        var that=this;
      document.onkeydown=function(e){
        audio1.currentTime=0;
        audio1.pause();
        // video.currentTime=0;
        // video.pause();
          var ev=e||window.event;
            // alert(ev.keyCode);
          var code=String.fromCharCode(ev.keyCode);
          for(var i=0;i<that.spans.length;i++){
              if(that.spans[i].innerHTML==code){
                // audio.pause();
               
                audio1.play();
                // span.style.cssText="width:"+width+"px;height:50px;background:url(tu.png) no-repeat center;background-size:cover;text-align:center;position:absolute;left:"+x+"px;top:"+y+"px;color:#fff;font-size:2em;";

                 that.spans[i].style.background='url(tu1.gif) no-repeat center';
               
                 that.spans[i].style.borderRadius='50%';
                 setTimeout(function(){
                    document.body.removeChild(that.spans[i]);
                    that.spans.splice(i,1);

                    that.currArr.splice(i,1);
                    that.currPosArr.splice(i,1);

                    that.getLetter(1);//打对了消除
                    that.sore++;
                    that.currSore++;
                    that.soreEle.innerHTML=that.sore;
                      if(that.currSore%that.num==0){
                      that.aa++;
                      if(that.aa>20){
                        alert("您已通关");
                        that.restart();

                      }else{
                         video.play();
                         audio.pause();
                          alert("第"+that.aa+"关");
                          k_b=true;
                           audio.currentTime=0;
                     audio.play();

                      that.next();
                      }
                    
                  }
                 },100);
                  

                
                  break;
              }
              // if(that.spans[i].innerHTML!==code){
              //    video.play();
              //    console.log(1);
              // }
              // 
          }
      }
      document.onkeyup=function(){
        audio.play();
      }
    },

    next:function(){
      clearInterval(this.t);
      for(var i=0;i<this.spans.length;i++){
         document.body.removeChild(this.spans[i]);
      }
        this.spans=[];
        this.currArr=[];
        this.currPosArr=[];

        this.speed++;
        this.letterLen++;
        this.currSore=0;
        this.num+=10;
        this.play();


    },
    restart:function(){
       clearInterval(this.t);
      for(var i=0;i<this.spans.length;i++){
         document.body.removeChild(this.spans[i]);
      }
        this.spans=[];
        this.currArr=[];
        this.currPosArr=[];
        this.speed=3;
        this.die=10;
        this.letterLen=5;
         this.sore=0;
        this.currSore=0;
        this.num=10;
        this.aa=0;
        // this.play();
           this.soreEle.innerHTML=0;
             this.dieEle.innerHTML=this.die;
    },


    move:function(){
       var that=this;
       this.t=setInterval(function(){
         for(var i=0;i<that.spans.length;i++){
             var top=that.spans[i].offsetTop+that.speed;
             that.spans[i].style.top=top+"px";
             if(top>that.clienth){
                 document.body.removeChild(that.spans[i]);
                 that.spans.splice(i,1);
                  that.currArr.splice(i,1);
                  that.currPosArr.splice(i,1);

                 that.getLetter(1);//移到最下面看不到了消除重新添加
                 that.die--;
                 that.dieEle.innerHTML=that.die;
                 if(that.die==0){
                  audio.pause();
                  video1.play();

                     alert("game over!");
                     video1.pause();
                     audio.currentTime=0;
                     audio.play();
                     
                     video1.currentTime=0;
                     that.restart();
                    
                 }


             }
         }

       },60)
    },



    getLetter:function(num){
        //先获取到指定的字母
        var arr=this.getRand(num);
        var posArr=[];//数组存放每个span左边位置和右边位置的x的值

        for(var i=0;i<arr.length;i++){
            var span=document.createElement("span");
            span.innerHTML=arr[i];


            var x=(100+(this.clientw-200)*Math.random());
            var y=(100*Math.random());
            var width=80;//每个span的高度
            var height=50;
            // if(arr.length==1){
            // 	for(var j=0;j<this.spans.length;j++){
            // 		posArr.push({minx:this.spans[j].offsetLeft,maxx:this.spans[j].offsetLeft+this.spans[j].offsetWidth});
            		
            		
            // 	}
            	
            // }
	            while (this.check1(this.currPosArr,x,width)){//横向不重合
	                x=(100+(this.clientw-200)*Math.random());
	            }
	             posArr.push({minx:x,maxx:x+width});
               this.currPosArr.push({minx:x,maxx:x+width});
	            span.style.cssText="width:"+width+"px;height:80px;background:url(tu.png) no-repeat center;background-size:cover;text-align:center;line-height:80px;position:absolute;left:"+x+"px;top:"+y+"px;color:#fff;font-size:3em;";
	            document.body.appendChild(span);
	           // eleArr.push(span);
	            this.spans.push(span);
	        
        }
       // return eleArr;

    },
    check1:function(arr,x,width){
        for(var i=0;i<arr.length;i++){
            if(!(x+width<arr[i].minx+50||arr[i].maxx+width<x+50)){
                return true;
            }
        }
        return false;
    },
    getRand:function(num){
       var arr=[];
       // var arr1=[];
       for(var i=0;i<num;i++) {
           var rand = Math.floor(this.letterArr.length * Math.random());
           // if(num==1){
           // 		for(var j=0;j<this.spans.length;j++){
           // 			arr1.push(this.spans[j].innerHTML);
           		
           // 		}
           // 		while(this.check(arr1,this.letterArr[rand])){//通过判断是否有重复的
	          //      rand = Math.floor(this.letterArr.length * Math.random());
	          //  }
           // }else{
	           while(this.check(this.currArr,this.letterArr[rand])){//通过判断是否有重复的
	               rand = Math.floor(this.letterArr.length * Math.random());
	           }
       		// }
       		
       		
           arr.push(this.letterArr[rand]);
           this.currArr.push(this.letterArr[rand]);
       }

        return arr;

    },
    check:function(arr,val){
       for(var i=0;i<arr.length;i++){
           if(arr[i]==val){
               return true;
           }
       }
        return false;
    }

}

   var audio=document.getElementsByTagName('audio')[0];
  var audio1=document.getElementsByTagName('audio')[1];
    var video=document.getElementsByTagName('video')[0];
    var video1=document.getElementsByTagName('video')[1];
  audio.play();
  var games=new game();
  // games.play();
  var select=document.getElementsByTagName('select')[0];
  select.onchange=function(){
    games.speed+=parseInt(select[select.selectedIndex].value);
    games.letterLen+=parseInt(select[select.selectedIndex].value);
    games.aa=parseInt(select[select.selectedIndex].value);
    games.play();
  }
  // games.play();
    var k_b=true
  document.getElementById('start').onclick=function(){
      games.play();
      if(k_b){

          k_b=false;
          this.style.animation=' none';
var that=this;
          setTimeout(function(){
              that.style.animation=' scale1 1s linear forwards';

          },60)
      }

      //this.style.animation='none';
  }

//$('#start').click(function(){

//})










};