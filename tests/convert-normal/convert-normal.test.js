const convertSys = {'hex':16, 'dec':10, 'oct':8, 'bin':2};
QUnit.module("base 10 changing test", () => {
	QUnit.test("dec to hex", (assert) => {
		var currSys = 'dec';
		$('.convert-normal').click(function() {
			$(this).attr('disabled', true);
			$('#'+currSys).attr('disabled', false);
			currSys = $(this).attr('id');
			for(let i = 0; i < 16; i++){
				console.log(i.toString().toUpperCase(16));
				if( i < convertSys[currSys] ) $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', false);
				else $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', true);
			}
			//display(current);
		});
		
		$("button#hex.convert-normal").click(); 

		assert.deepEqual($("button#hex.convert-normal").prop('disabled'), true, "display main value correctly");
		assert.deepEqual($("button#dec.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#oct.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#bin.convert-normal").prop('disabled'), false, "display main value correctly");
		for(let i = 0; i < 16; i++){
			if( i < convertSys['hex'] )
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), false, "display main value correctly");
			else
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), true, "display main value correctly");
		}
	});
	QUnit.test("dec to oct", (assert) => {
		var currSys = 'dec';
		$('.convert-normal').click(function() {
			$(this).attr('disabled', true);
			$('#'+currSys).attr('disabled', false);
			currSys = $(this).attr('id');
			for(let i = 0; i < 16; i++){
				console.log(i.toString().toUpperCase(16));
				if( i < convertSys[currSys] ) $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', false);
				else $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', true);
			}
			//display(current);
		});
		
		$("button#oct.convert-normal").click(); 

		assert.deepEqual($("button#hex.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#dec.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#oct.convert-normal").prop('disabled'), true, "display main value correctly");
		assert.deepEqual($("button#bin.convert-normal").prop('disabled'), false, "display main value correctly");
		for(let i = 0; i < 16; i++){
			if( i < convertSys['oct'] )
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), false, "display main value correctly");
			else
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), true, "display main value correctly");
		}
	});
	QUnit.test("dec to bin", (assert) => {
		var currSys = 'dec';
		$('.convert-normal').click(function() {
			$(this).attr('disabled', true);
			$('#'+currSys).attr('disabled', false);
			currSys = $(this).attr('id');
			for(let i = 0; i < 16; i++){
				console.log(i.toString().toUpperCase(16));
				if( i < convertSys[currSys] ) $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', false);
				else $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', true);
			}
			//display(current);
		});
		
		$("button#bin.convert-normal").click(); 

		assert.deepEqual($("button#hex.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#dec.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#oct.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#bin.convert-normal").prop('disabled'), true, "display main value correctly");
		for(let i = 0; i < 16; i++){
			if( i < convertSys['bin'] )
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), false, "display main value correctly");
			else
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), true, "display main value correctly");
		}
	});
});
QUnit.module("base 16 changing test", () => {
	QUnit.test("hex to dec", (assert) => {
		//mock the situation
		$("button#hex.convert-normal").attr('disabled', true);
		$("button#dec.convert-normal").attr('disabled', false);
		$("button#oct.convert-normal").attr('disabled', false);
		$("button#bin.convert-normal").attr('disabled', false);
		
		var currSys = 'hex';
		$('.convert-normal').click(function() {
			$(this).attr('disabled', true);
			$('#'+currSys).attr('disabled', false);
			currSys = $(this).attr('id');
			for(let i = 0; i < 16; i++){
				console.log(i.toString().toUpperCase(16));
				if( i < convertSys[currSys] ) $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', false);
				else $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', true);
			}
			//display(current);
		});
		
		$("button#dec.convert-normal").click(); 

		assert.deepEqual($("button#hex.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#dec.convert-normal").prop('disabled'), true, "display main value correctly");
		assert.deepEqual($("button#oct.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#bin.convert-normal").prop('disabled'), false, "display main value correctly");
		for(let i = 0; i < 16; i++){
			if( i < convertSys['dec'] )
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), false, "display main value correctly");
			else
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), true, "display main value correctly");
		}
	});
	QUnit.test("hex to oct", (assert) => {
		//mock the situation
		$("button#hex.convert-normal").attr('disabled', true);
		$("button#dec.convert-normal").attr('disabled', false);
		$("button#oct.convert-normal").attr('disabled', false);
		$("button#bin.convert-normal").attr('disabled', false);
		
		var currSys = 'hex';
		$('.convert-normal').click(function() {
			$(this).attr('disabled', true);
			$('#'+currSys).attr('disabled', false);
			currSys = $(this).attr('id');
			for(let i = 0; i < 16; i++){
				console.log(i.toString().toUpperCase(16));
				if( i < convertSys[currSys] ) $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', false);
				else $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', true);
			}
			//display(current);
		});
		
		$("button#oct.convert-normal").click(); 

		assert.deepEqual($("button#hex.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#dec.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#oct.convert-normal").prop('disabled'), true, "display main value correctly");
		assert.deepEqual($("button#bin.convert-normal").prop('disabled'), false, "display main value correctly");
		for(let i = 0; i < 16; i++){
			if( i < convertSys['oct'] )
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), false, "display main value correctly");
			else
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), true, "display main value correctly");
		}
	});
	QUnit.test("hex to bin", (assert) => {
		//mock the situation
		$("button#hex.convert-normal").attr('disabled', true);
		$("button#dec.convert-normal").attr('disabled', false);
		$("button#oct.convert-normal").attr('disabled', false);
		$("button#bin.convert-normal").attr('disabled', false);
		
		var currSys = 'hex';
		$('.convert-normal').click(function() {
			$(this).attr('disabled', true);
			$('#'+currSys).attr('disabled', false);
			currSys = $(this).attr('id');
			for(let i = 0; i < 16; i++){
				console.log(i.toString().toUpperCase(16));
				if( i < convertSys[currSys] ) $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', false);
				else $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', true);
			}
			//display(current);
		});
		
		$("button#bin.convert-normal").click(); 

		assert.deepEqual($("button#hex.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#dec.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#oct.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#bin.convert-normal").prop('disabled'), true, "display main value correctly");
		for(let i = 0; i < 16; i++){
			if( i < convertSys['bin'] )
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), false, "display main value correctly");
			else
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), true, "display main value correctly");
		}
	});
});
QUnit.module("base 8 changing test", () => {
	QUnit.test("oct to hex", (assert) => {
		//mock the situation
		$("button#hex.convert-normal").attr('disabled', false);
		$("button#dec.convert-normal").attr('disabled', false);
		$("button#oct.convert-normal").attr('disabled', true);
		$("button#bin.convert-normal").attr('disabled', false);
		
		var currSys = 'oct';
		$('.convert-normal').click(function() {
			$(this).attr('disabled', true);
			$('#'+currSys).attr('disabled', false);
			currSys = $(this).attr('id');
			for(let i = 0; i < 16; i++){
				console.log(i.toString().toUpperCase(16));
				if( i < convertSys[currSys] ) $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', false);
				else $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', true);
			}
			//display(current);
		});
		
		$("button#hex.convert-normal").click(); 

		assert.deepEqual($("button#hex.convert-normal").prop('disabled'), true, "display main value correctly");
		assert.deepEqual($("button#dec.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#oct.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#bin.convert-normal").prop('disabled'), false, "display main value correctly");
		for(let i = 0; i < 16; i++){
			if( i < convertSys['hex'] )
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), false, "display main value correctly");
			else
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), true, "display main value correctly");
		}
	});
	QUnit.test("oct to dec", (assert) => {
		//mock the situation
		$("button#hex.convert-normal").attr('disabled', false);
		$("button#dec.convert-normal").attr('disabled', false);
		$("button#oct.convert-normal").attr('disabled', true);
		$("button#bin.convert-normal").attr('disabled', false);
		
		var currSys = 'oct';
		$('.convert-normal').click(function() {
			$(this).attr('disabled', true);
			$('#'+currSys).attr('disabled', false);
			currSys = $(this).attr('id');
			for(let i = 0; i < 16; i++){
				console.log(i.toString().toUpperCase(16));
				if( i < convertSys[currSys] ) $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', false);
				else $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', true);
			}
			//display(current);
		});
		
		$("button#dec.convert-normal").click(); 

		assert.deepEqual($("button#hex.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#dec.convert-normal").prop('disabled'), true, "display main value correctly");
		assert.deepEqual($("button#oct.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#bin.convert-normal").prop('disabled'), false, "display main value correctly");
		for(let i = 0; i < 16; i++){
			if( i < convertSys['dec'] )
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), false, "display main value correctly");
			else
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), true, "display main value correctly");
		}
	});
	QUnit.test("oct to bin", (assert) => {
		//mock the situation
		$("button#hex.convert-normal").attr('disabled', false);
		$("button#dec.convert-normal").attr('disabled', false);
		$("button#oct.convert-normal").attr('disabled', true);
		$("button#bin.convert-normal").attr('disabled', false);
		
		var currSys = 'oct';
		$('.convert-normal').click(function() {
			$(this).attr('disabled', true);
			$('#'+currSys).attr('disabled', false);
			currSys = $(this).attr('id');
			for(let i = 0; i < 16; i++){
				console.log(i.toString().toUpperCase(16));
				if( i < convertSys[currSys] ) $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', false);
				else $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', true);
			}
			//display(current);
		});
		
		$("button#bin.convert-normal").click(); 

		assert.deepEqual($("button#hex.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#dec.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#oct.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#bin.convert-normal").prop('disabled'), true, "display main value correctly");
		for(let i = 0; i < 16; i++){
			if( i < convertSys['bin'] )
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), false, "display main value correctly");
			else
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), true, "display main value correctly");
		}
	});
});
QUnit.module("base 2 changing test", () => {
	QUnit.test("bin to hex", (assert) => {
		//mock the situation
		$("button#hex.convert-normal").attr('disabled', false);
		$("button#dec.convert-normal").attr('disabled', false);
		$("button#oct.convert-normal").attr('disabled', false);
		$("button#bin.convert-normal").attr('disabled', true);
		
		var currSys = 'bin';
		$('.convert-normal').click(function() {
			$(this).attr('disabled', true);
			$('#'+currSys).attr('disabled', false);
			currSys = $(this).attr('id');
			for(let i = 0; i < 16; i++){
				console.log(i.toString().toUpperCase(16));
				if( i < convertSys[currSys] ) $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', false);
				else $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', true);
			}
			//display(current);
		});
		
		$("button#hex.convert-normal").click(); 

		assert.deepEqual($("button#hex.convert-normal").prop('disabled'), true, "display main value correctly");
		assert.deepEqual($("button#dec.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#oct.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#bin.convert-normal").prop('disabled'), false, "display main value correctly");
		for(let i = 0; i < 16; i++){
			if( i < convertSys['hex'] )
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), false, "display main value correctly");
			else
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), true, "display main value correctly");
		}
	});
	QUnit.test("bin to dec", (assert) => {
		//mock the situation
		$("button#hex.convert-normal").attr('disabled', false);
		$("button#dec.convert-normal").attr('disabled', false);
		$("button#oct.convert-normal").attr('disabled', false);
		$("button#bin.convert-normal").attr('disabled', true);
		
		var currSys = 'bin';
		$('.convert-normal').click(function() {
			$(this).attr('disabled', true);
			$('#'+currSys).attr('disabled', false);
			currSys = $(this).attr('id');
			for(let i = 0; i < 16; i++){
				console.log(i.toString().toUpperCase(16));
				if( i < convertSys[currSys] ) $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', false);
				else $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', true);
			}
			//display(current);
		});
		
		$("button#dec.convert-normal").click(); 

		assert.deepEqual($("button#hex.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#dec.convert-normal").prop('disabled'), true, "display main value correctly");
		assert.deepEqual($("button#oct.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#bin.convert-normal").prop('disabled'), false, "display main value correctly");
		for(let i = 0; i < 16; i++){
			if( i < convertSys['dec'] )
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), false, "display main value correctly");
			else
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), true, "display main value correctly");
		}
	});
	QUnit.test("bin to oct", (assert) => {
		//mock the situation
		$("button#hex.convert-normal").attr('disabled', false);
		$("button#dec.convert-normal").attr('disabled', false);
		$("button#oct.convert-normal").attr('disabled', false);
		$("button#bin.convert-normal").attr('disabled', true);
		
		var currSys = 'bin';
		$('.convert-normal').click(function() {
			$(this).attr('disabled', true);
			$('#'+currSys).attr('disabled', false);
			currSys = $(this).attr('id');
			for(let i = 0; i < 16; i++){
				console.log(i.toString().toUpperCase(16));
				if( i < convertSys[currSys] ) $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', false);
				else $('.btn-normal#'+i.toString(16).toUpperCase()).attr('disabled', true);
			}
			//display(current);
		});
		
		$("button#oct.convert-normal").click(); 

		assert.deepEqual($("button#hex.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#dec.convert-normal").prop('disabled'), false, "display main value correctly");
		assert.deepEqual($("button#oct.convert-normal").prop('disabled'), true, "display main value correctly");
		assert.deepEqual($("button#bin.convert-normal").prop('disabled'), false, "display main value correctly");
		for(let i = 0; i < 16; i++){
			if( i < convertSys['oct'] )
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), false, "display main value correctly");
			else
				assert.deepEqual($('.btn-normal#'+i.toString(16).toUpperCase()).prop('disabled'), true, "display main value correctly");
		}
	});
});