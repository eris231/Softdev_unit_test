const convertSys = {'hex':16, 'dec':10, 'oct':8, 'bin':2};
QUnit.module("display test latestOp==true", () => {
	QUnit.test("latestOp==true", (assert) => {
		//mock the situation
		var currSys = 'dec';
		var current = 0;
		var latestOp = true;
		$('.btn-normal').click(function() {
			let id = $(this).prop('id');
			console.log(id);
			if( '1234567890ABCDEF'.indexOf(id) >= 0 ){
				if( latestOp ) {
					current = 0;
					latestOp = false;
				}
				let tmp;
				if(current < 0) tmp = current * convertSys[currSys] - parseInt(id, convertSys[currSys]);
				else tmp = current * convertSys[currSys] + parseInt(id, convertSys[currSys]);
				console.log(tmp & 0xFFFF0000);
				if((currSys !== 'dec' && tmp & 0xFFFF0000) || (currSys === 'dec' && tmp > 32767 || tmp < -32768)){
					//alert('You cannot type more!');
					//return false;
				}
				current = tmp;
				if(current > 0x7FFF) current = current - 0xFFFF -1;
				//display(current);
			}
			//return false;
		});
		$("#1").click(); 
		assert.deepEqual(current, 1, "value clear correctly");
	});
});
QUnit.module("display test latestOp==false", () => {
	QUnit.test("current==0", (assert) => {
		//mock the situation
		var currSys = 'dec';
		var current = 0;
		var latestOp = false;
		$('.btn-normal').click(function() {
			let id = $(this).prop('id');
			console.log(id);
			if( '1234567890ABCDEF'.indexOf(id) >= 0 ){
				if( latestOp ) {
					current = 0;
					latestOp = false;
				}
				let tmp;
				if(current < 0) tmp = current * convertSys[currSys] - parseInt(id, convertSys[currSys]);
				else tmp = current * convertSys[currSys] + parseInt(id, convertSys[currSys]);
				console.log(tmp & 0xFFFF0000);
				if((currSys !== 'dec' && tmp & 0xFFFF0000) || (currSys === 'dec' && tmp > 32767 || tmp < -32768)){
					//alert('You cannot type more!');
					//return false;
				}
				current = tmp;
				if(current > 0x7FFF) current = current - 0xFFFF -1;
				//display(current);
			}
			//return false;
		});
		$("#1").click(); 
		assert.deepEqual(current, 1, "value display correctly");
	});
	QUnit.test("current<0", (assert) => {
		//mock the situation
		var currSys = 'dec';
		var current = -2;
		var latestOp = false;
		$('.btn-normal').click(function() {
			let id = $(this).prop('id');
			console.log(id);
			if( '1234567890ABCDEF'.indexOf(id) >= 0 ){
				if( latestOp ) {
					current = 0;
					latestOp = false;
				}
				let tmp;
				if(current < 0) tmp = current * convertSys[currSys] - parseInt(id, convertSys[currSys]);
				else tmp = current * convertSys[currSys] + parseInt(id, convertSys[currSys]);
				console.log(tmp & 0xFFFF0000);
				if((currSys !== 'dec' && tmp & 0xFFFF0000) || (currSys === 'dec' && tmp > 32767 || tmp < -32768)){
					//alert('You cannot type more!');
					//return false;
				}
				current = tmp;
				if(current > 0x7FFF) current = current - 0xFFFF -1;
				//display(current);
			}
			//return false;
		});
		$("#1").click(); 
		assert.deepEqual(current, -21, "value display correctly");
	});
	QUnit.test("current>0", (assert) => {
		//mock the situation
		var currSys = 'dec';
		var current = 2;
		var latestOp = false;
		$('.btn-normal').click(function() {
			let id = $(this).prop('id');
			console.log(id);
			if( '1234567890ABCDEF'.indexOf(id) >= 0 ){
				if( latestOp ) {
					current = 0;
					latestOp = false;
				}
				let tmp;
				if(current < 0) tmp = current * convertSys[currSys] - parseInt(id, convertSys[currSys]);
				else tmp = current * convertSys[currSys] + parseInt(id, convertSys[currSys]);
				console.log(tmp & 0xFFFF0000);
				if((currSys !== 'dec' && tmp & 0xFFFF0000) || (currSys === 'dec' && tmp > 32767 || tmp < -32768)){
					//alert('You cannot type more!');
					//return false;
				}
				current = tmp;
				if(current > 0x7FFF) current = current - 0xFFFF -1;
				//display(current);
			}
			//return false;
		});
		$("#1").click(); 
		assert.deepEqual(current, 21, "value display correctly");
	});
	QUnit.test("current exceed hex", (assert) => {
		//mock the situation
		var currSys = 'hex';
		var current = 0x8000;
		var latestOp = false;
		var msg = "";
		$('.btn-normal').click(function() {
			let id = $(this).prop('id');
			console.log(id);
			if( '1234567890ABCDEF'.indexOf(id) >= 0 ){
				if( latestOp ) {
					current = 0;
					latestOp = false;
				}
				let tmp;
				if(current < 0) tmp = current * convertSys[currSys] - parseInt(id, convertSys[currSys]);
				else tmp = current * convertSys[currSys] + parseInt(id, convertSys[currSys]);
				console.log(tmp & 0xFFFF0000);
				if((currSys !== 'dec' && tmp & 0xFFFF0000) || (currSys === 'dec' && tmp > 32767 || tmp < -32768)){
					//alert('You cannot type more!');
					//return false;
					msg = 'You cannot type more!';
				}
				current = tmp;
				if(current > 0x7FFF) current = current - 0xFFFF -1;
				//display(current);
			}
			//return false;
		});
		$("#1").click(); 
		assert.deepEqual(msg, 'You cannot type more!', "value exceed test correctly");
	});
	QUnit.test("current exceed dec pos", (assert) => {
		//mock the situation
		var currSys = 'dec';
		var current = 3276;
		var latestOp = false;
		var msg = "";
		$('.btn-normal').click(function() {
			let id = $(this).prop('id');
			console.log(id);
			if( '1234567890ABCDEF'.indexOf(id) >= 0 ){
				if( latestOp ) {
					current = 0;
					latestOp = false;
				}
				let tmp;
				if(current < 0) tmp = current * convertSys[currSys] - parseInt(id, convertSys[currSys]);
				else tmp = current * convertSys[currSys] + parseInt(id, convertSys[currSys]);
				console.log(tmp & 0xFFFF0000);
				if((currSys !== 'dec' && tmp & 0xFFFF0000) || (currSys === 'dec' && tmp > 32767 || tmp < -32768)){
					//alert('You cannot type more!');
					//return false;
					msg = 'You cannot type more!';
				}
				current = tmp;
				if(current > 0x7FFF) current = current - 0xFFFF -1;
				//display(current);
			}
			//return false;
		});
		$("#8").click(); 
		assert.deepEqual(msg, 'You cannot type more!', "value exceed test correctly");
	});
	QUnit.test("current exceed dec neg", (assert) => {
		//mock the situation
		var currSys = 'dec';
		var current = -3276;
		var latestOp = false;
		var msg = "";
		$('.btn-normal').click(function() {
			let id = $(this).prop('id');
			console.log(id);
			if( '1234567890ABCDEF'.indexOf(id) >= 0 ){
				if( latestOp ) {
					current = 0;
					latestOp = false;
				}
				let tmp;
				if(current < 0) tmp = current * convertSys[currSys] - parseInt(id, convertSys[currSys]);
				else tmp = current * convertSys[currSys] + parseInt(id, convertSys[currSys]);
				console.log(tmp & 0xFFFF0000);
				if((currSys !== 'dec' && tmp & 0xFFFF0000) || (currSys === 'dec' && tmp > 32767 || tmp < -32768)){
					//alert('You cannot type more!');
					//return false;
					msg = 'You cannot type more!';
				}
				current = tmp;
				if(current > 0x7FFF) current = current - 0xFFFF -1;
				//display(current);
			}
			//return false;
		});
		$("#9").click(); 
		assert.deepEqual(msg, 'You cannot type more!', "value exceed test correctly");
	});
	
});