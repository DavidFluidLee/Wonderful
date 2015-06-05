/*添加输入界面*/
var total=2;
function next_div(obj,num){//传入显示的页数
		//num=num-1;	
		var NodeId=num-1;	
		var targetNode=obj.children[NodeId];
		var rightNode=targetNode.nextElementSibling;
		var leftNode=targetNode.previousElementSibling;

	if(num>total-1){
		total++;
		var newObj = document.createElement("li");
		var inner='';
		inner='<input type="text" class="content_input label1 div_block div_border_bottom" id="input1_'+num+'"/><input type="text" class="content_input label1 div_block div_border_bottom" id="input2_'+num+'" readonly="true"/><input type="text" class="content_input label1 div_block div_border_bottom" id="input3_'+num+'" readonly="true"/><input type="text" class="content_input label1 div_block div_border_bottom" id="input4_'+num+'"  readonly="true"/><input type="number" class="content_input label1 div_block div_border_bottom" id="input5_'+num+'"/><input type="text" class="content_input label1 div_block div_border_bottom" id="input6_'+num+'"  readonly="true"/><input type="text" id="input6_'+num+'" class="content_input label1 div_block div_border_bottom" onfocus="HS_setDate(this)" readonly="true"/>';
		newObj.setAttribute('class',' vs-right div_border_left div_content');
		newObj.innerHTML=inner;
		newObj.id='li_'+num;
	    obj.insertBefore(newObj,obj.lastChild);
		change_num(num);
		return false;
	}
	else{
		//nextNode.setAttribute('class','div_content vs-current div_border_left');
		change_num(num);
	}
}
function change_style(class1,obj){
	 obj.className +=' '+class1;
	}
function pre_div(obj,num){
	var nextNode=obj.nextElementSibling;
	var preNode=obj.previousElementSibling;
	if(num>=1){
	//	obj.className += " " + "vs-container li_hidden";
	//	obj.setAttribute('class','div_inline  li_current vs-container');
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
 传入参数说明：当前页数，需要放大处理
*/

function change_num(num){
	var num_flag=true;
	var target=document.getElementById('bar_num');
	var bar_num=new Array(4);
	var max_num=parseInt(target.getElementsByTagName("label")[3].innerHTML);
	var min_num=parseInt(target.getElementsByTagName("label")[0].innerHTML);
	num_flag=((num<1)?false:true)
	
	for(var j=0;j<4;j++){
		bar_num[j]=parseInt(target.getElementsByTagName("label")[j].innerHTML);
		if(num==bar_num[j]){
			target.getElementsByTagName("label")[j].setAttribute('class', 'label1 num_big');
			num_flag=false;
		}
		else if(num==0){
			target.getElementsByTagName("label")[0].setAttribute('class', 'label1 num_big');
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
/*     页面局部元素滑动切换
					______________
					|            |
		____________|____________|____________ 
		|			|            |           |
		|	  C   <---->   A    <---->  B    |
		|			|            |           |
		|___________|____________|___________| 
					|            |
					|____________| 
 完成日期2015年6月3号
 传入参数说明：显示元素序数，切换方向，父亲元素
*/
	var div_transform=function(num,dir,obj){
		var num_flag=true;
		num=num-1;
		num_flag=((num<0)?false:true)
		if(num_flag){
			var targetNode=obj.children[num];
			var rightNode=targetNode.nextElementSibling;
			var leftNode=targetNode.previousElementSibling;
			if(dir==='right'){
				targetNode.classList.add('vs-move-'+dir);
				rightNode.classList.add('vs-move-'+dir);
			}
			if(dir==='left'){
				targetNode.classList.add('vs-move-'+dir);
				leftNode.classList.add('vs-move-'+dir);
			}
			obj.addEventListener('webkitTransitionEnd', function () {
				cleanClasses(obj);
				addAllClass(obj,'vs-right div_content div_border_left',num,obj.childElementCount-1);
				addAllClass(obj,'vs-left div_content div_border_left',0,num-1);
				targetNode.className+= ' '+'vs-current div_content div_border_left';
	        });	
        }
	}
	//cleanClasses(obj):清楚obj元素的所有子元素的样式
	function cleanClasses(obj) {
		var length=obj.childElementCount;
		for(var t=0;t<length;t++){
			obj.children[t].className=''
		}
	}
	//addAllClass(obj,classname,start,end):清楚obj元素的第startnum到endnum的子元素的添加样式from 0
	function addAllClass(obj,classname,start,end){
		var length=obj.childElementCount;
			start=((start=='')?0:start);
		if(start<=end){
			if((length < end+1)||(length < start+1)){
				alert('the input num is error');
			}
			else{
				for(start;start<=end;start++){
					obj.children[start].className += " " + classname;
				}
			}
		}	
	}
	//removeAllClass(obj,classname,start,end):清楚obj元素的第startnum到endnum的子元素的添加样式from 0
	function removeAllClass(obj,classname,start,end){
		var length=obj.childElementCount;
			start=((start=='')?0:start);
		if(start<=end){
			if((length < end+1)||(length < start+1)){
				alert('the input num is error');
			}
			else{
				for(start;start<=end;startnum++){
					obj.children[start].classList.remove(classname) ;
				}
			
			}
		}
	}