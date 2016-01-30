$.fn.extend({mouseWheel:function(upfn,downfn){
	$(this).each(function(index,obj){
		var obj=obj||document;
	if(obj.addEventListener){
		obj.addEventListener('mousewheel',fn,false);
		obj.addEventListener('DOMMouseScroll',fn,false);
	}
	else{
		obj.addEventListener('onmousewheel',fn,false);
	}



// alert(navigator.platform);
	function fn(e){

		var ev=e||window.event;
		var val=ev.wheelDelta||ev.tetail;
		if(navigator.platform=='MacIntel'){
			if(val==-3||val==1){
				upfn.call(obj)
			}else if(val==3||val==-1){
				downfn.call(obj);
			}
		}else{
			if(val==-3||val==120){
				upfn.call(obj)
			}else if(val==3||val==-120){
				downfn.call(obj);
			}
		}
	e.preventDefault();
	}
	});
	
}});