QUnit.test("+-x%", (assert) => {
	var current = 2;
	var operand = [];
	var operator = [];
	var latestOp = false;
	var lastOpnd = 0;
	var lastOptr = '';
	var currSys = 'dec';
	const convertSys = {'hex':16, 'dec':10, 'oct':8, 'bin':2};

	operand = ['7'];
	operator = ['x'];
	
	var precedence = function(a, b) { // return if a <= b
    if( '+-'.indexOf(a) === -1 ){
        if( '+-'.indexOf(b) === -1 ) return true; //a == b
        else return false; //a > b
    }
    else return true; // a <= b
}
	$('.btn-mark').click(function() {
        let id = $(this).prop('id');
        console.log(id);
        if( '+-x%'.indexOf(id) >= 0 || id === 'Mod' ){ 
            //if prev is empty: add a 0 first
            //if prev is operator: cover it
            //if prev is number: store it
            if( operator.length > 0 && latestOp === true ){
                operator[operator.length-1] = id;
                latestOp = true;
            }
            else {
                latestOp = true;
                //check precedence
                while( operator.length > 0 && precedence(id, operator[operator.length-1]) ) {
                    //compute until id > top
					console.log("here");
                    let top = operator[operator.length-1];
                    let opnd = operand[operand.length-1];
					console.log(top);
					console.log(opnd);
                    operator.pop();
                    operand.pop();
                    if (top === '+') current = current + opnd;
                    if (top === '-') current = opnd - current;
                    if (top === 'x') current = current * opnd;
                    if (top === '%') current = parseInt(opnd / current);
                    if (top === 'Mod') current = opnd % current;
                
                    current = current & 0xFFFF;
                    if(current > 0x7FFF) current = current - 0xFFFF - 1;
                    //display(current);
                }
                operand.push(current);
                operator.push(id);
            }
        }
    });
	
	$('#-').click();
	assert.deepEqual(current, 14, "7x2- display 14");
});
QUnit.test("=", (assert) => {
	var current = 2;
	var operand = [];
	var operator = [];
	var latestOp = false;
	var lastOpnd = 0;
	var lastOptr = '';
	var currSys = 'dec';
	const convertSys = {'hex':16, 'dec':10, 'oct':8, 'bin':2};

	operand = ['5', '6'];
	operator = ['-', '%'];
	
	var precedence = function(a, b) { // return if a <= b
		if( '+-'.indexOf(a) === -1 ){
			if( '+-'.indexOf(b) === -1 ) return true; //a == b
			else return false; //a > b
		}
		else return true; // a <= b
	}
	$('.btn-mark').click(function() {
        let id = $(this).prop('id');
		if(id=="equ") id = '=';
        if(id === '='){
            latestOp = true;
            //start to compute
            //or repeat the latest oprate
            if ( operator.length === 0 ){
                console.log(lastOptr);
                console.log(lastOpnd);
                if (lastOptr === '+') current = current + lastOpnd;
                if (lastOptr === '-') current = current - lastOpnd;
                if (lastOptr === 'x') current = current * lastOpnd;
                if (lastOptr === '%') current = parseInt(current / lastOpnd);
                if (lastOptr === 'Mod') current = current % lastOpnd;
                /*if(current > 32767 || current < -32768){
                    alert('The answer is overflow! Please use AC to clean and re-compute.');
                    return false;
                }
                else*/
                current = current & 0xFFFF;
                if(current > 0x7FFF) current = current - 0xFFFF - 1;
                //display(current);
            }
            var top, opnd;
            while( operator.length > 0 ) {
                top = operator[operator.length-1];
                opnd = operand[operand.length-1];
                operator.pop();
                operand.pop();

                lastOptr = top;
                lastOpnd = current;
				console.log(top);
				console.log(current);
                if (top === '+') current = current + opnd;
                if (top === '-') current = opnd - current;
                if (top === 'x') current = current * opnd;
                if (top === '%') current = parseInt(opnd / current);
                if (top === 'Mod') current = opnd % current;

                current = current & 0xFFFF;
                if(current > 0x7FFF) current = current - 0xFFFF - 1;
                //display(current);
            }
        }
    });
	
	$("#equ").click();
	assert.deepEqual(current, 2, "5-6/2= display 2");
});
QUnit.test("←", (assert) => {
	var current = 117;
	var operand = [];
	var operator = [];
	var latestOp = false;
	var lastOpnd = 0;
	var lastOptr = '';
	var currSys = 'dec';
	const convertSys = {'hex':16, 'dec':10, 'oct':8, 'bin':2};
	
	$('.btn-mark').click(function() {
        let id = $(this).prop('id');
		console.log(id);
        if( id === 'back' ){
            if(latestOp === true || current.toString(convertSys[currSys]).length === 0) alert('Cant backtrack now!');
            else {
                let tmp = (current<0? 0xFFFF + current + 1 :current).toString(convertSys[currSys]);
                console.log(tmp);
                if(tmp.length === 1) current = 0;
                else current = parseInt(tmp.toString(convertSys[currSys]).substr(0,tmp.length-1), convertSys[currSys]);
                //display(current);
            }
        }
    });
	
	$("#back").click();
	assert.deepEqual(current, 11, "117← display 11");
});
QUnit.test("CE", (assert) => {
	var current = 7;
	var operand = [];
	var operator = [];
	var latestOp = false;
	var lastOpnd = 0;
	var lastOptr = '';
	var currSys = 'dec';
	const convertSys = {'hex':16, 'dec':10, 'oct':8, 'bin':2};
	
	operand = ['11'];
	operator = ['+'];
	
	$('.btn-mark').click(function() {
        let id = $(this).prop('id');
        console.log(id);
        if( '+-x%'.indexOf(id) >= 0 || id === 'Mod' ){
            //if prev is empty: add a 0 first
            //if prev is operator: cover it
            //if prev is number: store it
            if( operator.length > 0 && latestOp === true ){
                operator[operator.length-1] = id;
                latestOp = true;
            }
            else {
                latestOp = true;
                //check precedence
                while( operator.length > 0 && precedence(id, operator[operator.length-1]) ) {
                    //compute until id > top
                    let top = operator[operator.length-1];
                    let opnd = operand[operand.length-1];
                    operator.pop();
                    operand.pop();
                    if (top === '+') current = current + opnd;
                    if (top === '-') current = opnd - current;
                    if (top === 'x') current = current * opnd;
                    if (top === '%') current = parseInt(opnd / current);
                    if (top === 'Mod') current = opnd % current;
                    /*if(current > 32767 || current < -32768){
                        alert('The answer is overflow! Please use AC to clear and re-compute.');
                        return false;
                    }*/
                    //if(current > 0x7FFF) current = current - 0xFFFF - 1;
                    //if(current < -32768) current = current - 0xFFFF - 1;
                    current = current & 0xFFFF;
                    if(current > 0x7FFF) current = current - 0xFFFF - 1;
                    display(current);
                }
                operand.push(current);
                operator.push(id);
            }
        }
        if( id === 'CE' ){
            //only clear the latest key-in number (set as 0 at first, then can type other to cover)
            current = 0;

        }
        if(id === 'equ'){
            latestOp = true;
            //start to compute
            //or repeat the latest oprate
            if ( operator.length === 0 ){
                console.log(lastOptr);
                console.log(lastOpnd);
                if (lastOptr === '+') current = current + lastOpnd;
                if (lastOptr === '-') current = current - lastOpnd;
                if (lastOptr === 'x') current = current * lastOpnd;
                if (lastOptr === '%') current = parseInt(current / lastOpnd);
                if (lastOptr === 'Mod') current = current % lastOpnd;
                /*if(current > 32767 || current < -32768){
                    alert('The answer is overflow! Please use AC to clean and re-compute.');
                    return false;
                }
                else*/
                current = current & 0xFFFF;
                if(current > 0x7FFF) current = current - 0xFFFF - 1;

            }
            var top, opnd;
            while( operator.length > 0 ) {
                top = operator[operator.length-1];
                opnd = operand[operand.length-1];
                operator.pop();
                operand.pop();

                lastOptr = top;
                lastOpnd = current;
                if (top === '+') current = current + opnd;
                if (top === '-') current = opnd - current;
                if (top === 'x') current = current * opnd;
                if (top === '%') current = parseInt(opnd / current);
                if (top === 'Mod') current = opnd % current;

                current = current & 0xFFFF;
                if(current > 0x7FFF) current = current - 0xFFFF - 1;

            }
        }

    });
	
	$("#CE").click();
	$("#equ").click();
	assert.deepEqual(current, 11, "11+7CE= display 11");
});
QUnit.test("C", (assert) => {
	var current = 7;
	var operand = [];
	var operator = [];
	var latestOp = false;
	var lastOpnd = 0;
	var lastOptr = '';
	var currSys = 'dec';
	const convertSys = {'hex':16, 'dec':10, 'oct':8, 'bin':2};
	
	operand = ['11'];
	operator = ['+'];
	
	$('.btn-mark').click(function() {
        let id = $(this).prop('id');
        console.log(id);
        if( '+-x%'.indexOf(id) >= 0 || id === 'Mod' ){
            //if prev is empty: add a 0 first
            //if prev is operator: cover it
            //if prev is number: store it
            if( operator.length > 0 && latestOp === true ){
                operator[operator.length-1] = id;
                latestOp = true;
            }
            else {
                latestOp = true;
                //check precedence
                while( operator.length > 0 && precedence(id, operator[operator.length-1]) ) {
                    //compute until id > top
                    let top = operator[operator.length-1];
                    let opnd = operand[operand.length-1];
                    operator.pop();
                    operand.pop();
                    if (top === '+') current = current + opnd;
                    if (top === '-') current = opnd - current;
                    if (top === 'x') current = current * opnd;
                    if (top === '%') current = parseInt(opnd / current);
                    if (top === 'Mod') current = opnd % current;
                    /*if(current > 32767 || current < -32768){
                        alert('The answer is overflow! Please use AC to clear and re-compute.');
                        return false;
                    }*/
                    //if(current > 0x7FFF) current = current - 0xFFFF - 1;
                    //if(current < -32768) current = current - 0xFFFF - 1;
                    current = current & 0xFFFF;
                    if(current > 0x7FFF) current = current - 0xFFFF - 1;
                    display(current);
                }
                operand.push(current);
                operator.push(id);
            }
        }
        if( id === 'C' ){
            //clear stack and value
            current = 0;
            operand = [];
            operator = [];
            latestOp = false;
            lastOpnd = 0;
            lastOptr = '';
        }
        if(id === 'equ'){
            latestOp = true;
            //start to compute
            //or repeat the latest oprate
            if ( operator.length === 0 ){
                console.log(lastOptr);
                console.log(lastOpnd);
                if (lastOptr === '+') current = current + lastOpnd;
                if (lastOptr === '-') current = current - lastOpnd;
                if (lastOptr === 'x') current = current * lastOpnd;
                if (lastOptr === '%') current = parseInt(current / lastOpnd);
                if (lastOptr === 'Mod') current = current % lastOpnd;
                /*if(current > 32767 || current < -32768){
                    alert('The answer is overflow! Please use AC to clean and re-compute.');
                    return false;
                }
                else*/
                current = current & 0xFFFF;
                if(current > 0x7FFF) current = current - 0xFFFF - 1;

            }
            var top, opnd;
            while( operator.length > 0 ) {
                top = operator[operator.length-1];
                opnd = operand[operand.length-1];
                operator.pop();
                operand.pop();

                lastOptr = top;
                lastOpnd = current;
                if (top === '+') current = current + opnd;
                if (top === '-') current = opnd - current;
                if (top === 'x') current = current * opnd;
                if (top === '%') current = parseInt(opnd / current);
                if (top === 'Mod') current = opnd % current;

                current = current & 0xFFFF;
                if(current > 0x7FFF) current = current - 0xFFFF - 1;

            }
        }

    });
	
	$("#C").click();
	$("#equ").click();
	assert.deepEqual(current, 0, "11+7C= display 0");
});
QUnit.test("neg", (assert) => {
	var current = 5;
	var operand = [];
	var operator = [];
	var latestOp = false;
	var lastOpnd = 0;
	var lastOptr = '';
	var currSys = 'dec';
	const convertSys = {'hex':16, 'dec':10, 'oct':8, 'bin':2};
		
	$('.btn-mark').click(function() {
        let id = $(this).prop('id');
        console.log(id);
        if(id === 'neg'){
            //turn latest operand upside down
            current = -current;
        }
    });
	
	$("#neg").click();

	assert.deepEqual(current, -5, "neg(5) display -5");
});
QUnit.test("Mod", (assert) => {
	var current = 3;
	var operand = [];
	var operator = [];
	var latestOp = false;
	var lastOpnd = 0;
	var lastOptr = '';
	var currSys = 'dec';
	const convertSys = {'hex':16, 'dec':10, 'oct':8, 'bin':2};
	
	operand = ['5'];
	operator = ['Mod'];
	
	$('.btn-mark').click(function() {
        let id = $(this).prop('id');
        console.log(id);
        if( '+-x%'.indexOf(id) >= 0 || id === 'Mod' ){
            //if prev is empty: add a 0 first
            //if prev is operator: cover it
            //if prev is number: store it
            if( operator.length > 0 && latestOp === true ){
                operator[operator.length-1] = id;
                latestOp = true;
            }
            else {
                latestOp = true;
                //check precedence
                while( operator.length > 0 && precedence(id, operator[operator.length-1]) ) {
                    //compute until id > top
                    let top = operator[operator.length-1];
                    let opnd = operand[operand.length-1];
                    operator.pop();
                    operand.pop();
                    if (top === '+') current = current + opnd;
                    if (top === '-') current = opnd - current;
                    if (top === 'x') current = current * opnd;
                    if (top === '%') current = parseInt(opnd / current);
                    if (top === 'Mod') current = opnd % current;
                    /*if(current > 32767 || current < -32768){
                        alert('The answer is overflow! Please use AC to clear and re-compute.');
                        return false;
                    }*/
                    //if(current > 0x7FFF) current = current - 0xFFFF - 1;
                    //if(current < -32768) current = current - 0xFFFF - 1;
                    current = current & 0xFFFF;
                    if(current > 0x7FFF) current = current - 0xFFFF - 1;
                    display(current);
                }
                operand.push(current);
                operator.push(id);
            }
        }
        if(id === 'equ'){
            latestOp = true;
            //start to compute
            //or repeat the latest oprate
            if ( operator.length === 0 ){
                console.log(lastOptr);
                console.log(lastOpnd);
                if (lastOptr === '+') current = current + lastOpnd;
                if (lastOptr === '-') current = current - lastOpnd;
                if (lastOptr === 'x') current = current * lastOpnd;
                if (lastOptr === '%') current = parseInt(current / lastOpnd);
                if (lastOptr === 'Mod') current = current % lastOpnd;
                /*if(current > 32767 || current < -32768){
                    alert('The answer is overflow! Please use AC to clean and re-compute.');
                    return false;
                }
                else*/
                current = current & 0xFFFF;
                if(current > 0x7FFF) current = current - 0xFFFF - 1;

            }
            var top, opnd;
            while( operator.length > 0 ) {
                top = operator[operator.length-1];
                opnd = operand[operand.length-1];
                operator.pop();
                operand.pop();

                lastOptr = top;
                lastOpnd = current;
                if (top === '+') current = current + opnd;
                if (top === '-') current = opnd - current;
                if (top === 'x') current = current * opnd;
                if (top === '%') current = parseInt(opnd / current);
                if (top === 'Mod') current = opnd % current;

                current = current & 0xFFFF;
                if(current > 0x7FFF) current = current - 0xFFFF - 1;

            }
        }

    });
	
	$("#equ").click();
	assert.deepEqual(current, 2, "5Mod3= display 2");
});