QUnit.module("display", () => {
	QUnit.module("dec", () => {
		var currSys = 'dec';
		QUnit.test("length <= 18", (assert) => {
			var val = 123;
			display(val, currSys);
			assert.deepEqual($('#main').text(), '123', "display main correctly");
			assert.deepEqual($('.value#hex').text(), '7B', "display base 16 correctly");
			assert.deepEqual($('.value#dec').text(), '123', "display base 10 correctly");
			assert.deepEqual($('.value#oct').text(), '173', "display base 8 correctly");
			assert.deepEqual($('.value#bin').text(), '1111011', "display base 2 correctly");
			//assert.deepEqual($('#main').css('font-size'), '100%', "display base 2 correctly");
		});
/*		QUnit.test("length > 18", (assert) => {
			var val = 1234567;
			display(val, currSys);
			assert.deepEqual($('#main').text(), '1234567', "display main correctly");
			assert.deepEqual($('.value#hex').text(), '12D687', "display base 16 correctly");
			assert.deepEqual($('.value#dec').text(), '1234567', "display base 10 correctly");
			assert.deepEqual($('.value#oct').text(), '4553207', "display base 8 correctly");
			assert.deepEqual($('.value#bin').text(), '100101101011010000111', "display base 2 correctly");
		});*/
	});
	QUnit.module("hex", () => {
		var currSys = 'hex';
		QUnit.test("length <= 18", (assert) => {
			var val = 123;
			display(val, currSys);
			assert.deepEqual($('#main').text(), '7B', "display main correctly");
			assert.deepEqual($('.value#hex').text(), '7B', "display base 16 correctly");
			assert.deepEqual($('.value#dec').text(), '123', "display base 10 correctly");
			assert.deepEqual($('.value#oct').text(), '173', "display base 8 correctly");
			assert.deepEqual($('.value#bin').text(), '1111011', "display base 2 correctly");
		});
	});
	QUnit.module("oct", () => {
		var currSys = 'oct';
		QUnit.test("length <= 18", (assert) => {
			var val = 123;
			display(val, currSys);
			assert.deepEqual($('#main').text(), '173', "display main correctly");
			assert.deepEqual($('.value#hex').text(), '7B', "display base 16 correctly");
			assert.deepEqual($('.value#dec').text(), '123', "display base 10 correctly");
			assert.deepEqual($('.value#oct').text(), '173', "display base 8 correctly");
			assert.deepEqual($('.value#bin').text(), '1111011', "display base 2 correctly");
		});
	});
	QUnit.module("bin", () => {
		var currSys = 'bin';
		QUnit.test("length <= 18", (assert) => {
			var val = 123;
			display(val, currSys);
			assert.deepEqual($('#main').text(), '1111011', "display main correctly");
			assert.deepEqual($('.value#hex').text(), '7B', "display base 16 correctly");
			assert.deepEqual($('.value#dec').text(), '123', "display base 10 correctly");
			assert.deepEqual($('.value#oct').text(), '173', "display base 8 correctly");
			assert.deepEqual($('.value#bin').text(), '1111011', "display base 2 correctly");
		});
	});
});