QUnit.module("precedence", () => {
    QUnit.test("precedence", (assert) => {
		var a, b;
		a = "+";
		b = "+";
        assert.deepEqual(precedence(a, b), true, "a<=b");
		a = "%";
		b = "-";
        assert.deepEqual(precedence(a, b), false, "a>b");
		a = "x";
		b = "%";
        assert.deepEqual(precedence(a, b), true, "a==b");
    });
});