/*添加输入界面*/
var total=1;
function next_div(obj,num){
	var parent=obj.parentNode;
	var obj_chiled=parent.lastChild;
	var nextNode=obj.nextSibling;
	
	if(num>total){
		total++;
		var newObj = document.createElement("li");
		var inner='';
		inner='<input id="input_" type="text" class="content_input label1 div_block div_border_bottom" value="'+num+'"/><label class="label1 div_block div_border_bottom" >默认</label><label class="label1 div_block div_border_bottom" >00000</label><label class="label1 div_block div_border_bottom" >4000</label><input type="text" class="content_input label1 div_block div_border_bottom" value="1000"/><label class="label1 div_block div_border_bottom" >10</label><input type="text" class="content_input label1 div_block div_border_bottom" onfocus="HS_setDate(this)" readonly>';
		newObj.setAttribute('class','div_inline ');
		newObj.setAttribute('class','div_inline li_current ');
		newObj.innerHTML=inner;
		newObj.id='li_'+num;
	    parent.insertBefore(newObj,obj_chiled);
		change_num(num);
		return false;
	}
	else{
		nextNode.setAttribute('class','div_inline  li_current');
		change_num(num);
	}
}
function pre_div(obj,num){
	if(num>=1){
		obj.setAttribute('class','div_inline  li_current vs-container');
		change_num(num);
	}
	else{	
		return false;
	}
}
/*     底部标数字样式修改
	---------------------
	|                   |
	|                   |
	|                   |
	---------------------	
		   1 2 3 4
 完成日期2015年6月1号
*/

function change_num(num){
	var num_flag=true;
	var target=document.getElementById('bar_num');
	var bar_num=new Array(4);
	var max_num=parseInt(target.getElementsByTagName("label")[3].innerHTML);
	var min_num=parseInt(target.getElementsByTagName("label")[0].innerHTML);
	if(num<=0){
		num_flag=false
	}
	for(var j=0;j<4;j++){
		bar_num[j]=parseInt(target.getElementsByTagName("label")[j].innerHTML);
		if(num==bar_num[j]){
			target.getElementsByTagName("label")[j].setAttribute('class', 'label1 num_big');
			num_flag=false;
		}
		else{
			target.getElementsByTagName("label")[j].setAttribute('class', 'label1')
		}
	}
	if(num_flag)
	{
		if(num>max_num)
		{
		for(var j=0;j<4;j++){target.getElementsByTagName("label")[j].innerHTML=num+j;}
		change_num(num);
		}
		if(num<min_num)
		{
		var num_change=((num<4)?4:num);
		for(var j=3;j>=0;j--){target.getElementsByTagName("label")[j].innerHTML=num_change-3+j;}
		change_num(num);
		}
	}
}