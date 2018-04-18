function Button(text) {
	this.text = text || 'Hello!';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.on('click', function(){
			alert(self.text);
		});
		this.$element.on('focus', function(){
			var para = $('<p>Hey! Stop doing this! I am thicklish :[</p>');
			$('body').append(para);
		});
		$('body').append(this.$element);
	}
}

var btn1 = new Button('Hello!');

btn1.create();