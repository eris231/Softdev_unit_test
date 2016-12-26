var display = function(value) {
    let dis = value;
    if(value < 0){
        dis = 0xFFFF + value + 1;
    }
    let main = value.toString();
    if(currSys !== 'dec') main = dis.toString(convertSys[currSys]).toUpperCase()
    $('#main').text(main);
    $('.value#hex').text(dis.toString(16).toUpperCase());
    $('.value#dec').text(value);
    $('.value#oct').text(dis.toString(8));
    $('.value#bin').text(dis.toString(2));

    if(main.length > 18) $('#main').css('font-size','50%');
    else $('#main').css('font-size','100%');
    if(dis.toString(16) > 18) $('.value#hex').css('font-size','50%');
    else $('.value#hex').css('font-size','100%');
    if(value.toString().length > 18) $('.value#dec').css('font-size','50%');
    else $('.value#dec').css('font-size','100%');
    if(dis.toString(8).length > 18) $('.value#oct').css('font-size','50%');
    else $('.value#oct').css('font-size','100%');
    if(dis.toString(2).length > 18)  $('.value#bin').css('font-size','50%');
    else $('.value#bin').css('font-size','100%');
}
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
			alert('You cannot type more!');
			return false;
		}

		current = tmp;
		if(current > 0x7FFF) current = current - 0xFFFF -1;
		display(current);
	}
	return false;
});