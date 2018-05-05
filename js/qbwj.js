$(document).ready(function(){
	
$("#checkAll").click(
  function(){ 

    if(this.checked){ 
    	alert("1");
       	$(":checkbox").attr('checked', true);
    }else{ 
        $(":checkbox").attr('checked', false);
    } 
  } 
);


});