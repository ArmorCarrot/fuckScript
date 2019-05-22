// ↓ fuckScript核心部分 
var fuck = $;

//以下为fuck功能测试
fuck(document).ready(function(){
	console.log(fuck('.div'));
	fuck('.div').css({'width':'500px','height':'200px','background':'#0e0'});
	fuck('.div').siblings().css({'width':'500px','height':'200px','background':'#0c0'});
	fuck('p')[0].innerHTML="fuckScript";
	var pp = fuck('p');
	pp[0].className+=" middleText";
	fuck('div').mouseover(function(){
		fuck('.div').css('font-weight','bold');
		fuck('div > p').css('font-size','2em');
	});
	fuck('h1+ul').css('color','red');
});

