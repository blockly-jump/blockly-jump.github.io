Blockly.JavaScript['add_sprite'] = function(block) {
var code = 
'\
this.img = new Laya.Sprite();\
this.img.loadImage("res/img/image.png", 100, 50);\
Laya.stage.addChild(img);'

;


return code;
};