Blockly.Blocks['add_sprite'] = {
  init: function() {
    this.jsonInit({
      "message0": 'add a sprite at %1',
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": "Number"
        }
      ],
      "colour": 160,
    });
  }
};