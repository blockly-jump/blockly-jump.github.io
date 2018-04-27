
function laya_init(){
Laya.init(400, 400); 
Laya.stage.bgColor = "#232628"


var canvas = document.getElementById("layaCanvas");
canvas.style.left = '60px';
canvas.style.top = '90px';
canvas.style.width = '300px';
canvas.style.height = '200px';
Laya.stage.scaleMode = "fixedauto";
}





laya_init();
// create program script
var codeDoc= document.createElement('script');
/*
code.text= ' var txt = new Laya.Text();\
	txt.text = "Hello Layabox";\
	txt.color = "#ffffff";\
	Laya.stage.addChild(txt);';
	*/
document.body.appendChild(codeDoc);
