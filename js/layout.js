document.getElementById('qzone').getElementsByTagName('button')[0].addEventListener('click',function(){
	document.getElementById('qzone').style.display = "none";
	document.getElementById('weibo').style.display = "none";
	document.getElementById('qzone_l').style.display = "block";

});
document.getElementById('weibo').getElementsByTagName('button')[0].addEventListener('click',function(){
	document.getElementById('qzone').style.display = "none";
	document.getElementById('weibo').style.display = "none";
	document.getElementById('weibo_l').style.display = "block";

});

