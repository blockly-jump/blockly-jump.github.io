

var workspace= Blockly.inject('blocklyDiv',
        {toolbox: document.getElementById('toolbox')});
		

//var code = Blockly.JavaScript.;
/*
function myUpdateFunction(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  //document.getElementById('textarea').value = code;
  
  console.log(code);
}


workspace.addChangeListener(myUpdateFunction);
*/

var codeDoc = document.createElement('script');;
document.body.appendChild(codeDoc);

function run(){
	
	// reset laya
	//laya_init();
	//Laya.stage.destroy();
	laya_init();
	codeDoc.parentNode.removeChild(codeDoc);
	codeDoc= document.createElement('script');
/*
code.text= ' var txt = new Laya.Text();\
	txt.text = "Hello Layabox";\
	txt.color = "#ffffff";\
	Laya.stage.addChild(txt);';
	*/

	
	 var code = Blockly.JavaScript.workspaceToCode(workspace);
	 codeDoc.text = code;
	 
	 document.body.appendChild(codeDoc);
}