var kk = $("#col1");
var pp = $("#col2");
var kl = $("#col3");
var tr = $("#col4");
	
	kk.click(function(){
		$("#kereta").slideDown("slow");
		$("#par1").hide();
		kk.animate({left: '450px', width: '500px', height: '570px'}, "slow");
		kk.css("background-color", "#ff8967");
		kk.css("border", "5px solid #89eeb5");
	});
	pp.click(function(){
		$("#pesawat").slideDown("slow");
		$("#par2").hide();
		pp.animate({left: '450px', width: '500px', height: '680px'}, "slow");
		pp.css("background-color", "#ffba67");
		pp.css("border", "5px solid #91b4eb");
	});
	kl.click(function(){
		$("#kapal").slideDown("slow");
		$("#par3").hide();
		kl.animate({left: '450px', width: '500px', height: '680px'}, "slow");
		kl.css("background-color", "#5eadd7");
		kl.css("border", "5px solid #ffd893");
	});
	tr.click(function(){
		$("#travel").slideDown("slow");
		$("#par4").hide();
		tr.animate({left: '450px', width: '500px', height: '680px'}, "slow");
		tr.css("background-color", "#5adf98");
		tr.css("border", "5px solid #ffaa93");
	});
	