var workspace= Blockly.inject('blocklyDiv',
        {toolbox: document.getElementById('toolbox')});
		

//var code = Blockly.JavaScript.;

function myUpdateFunction(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  //document.getElementById('textarea').value = code;
  
  console.log(code);
}

workspace.addChangeListener(myUpdateFunction);