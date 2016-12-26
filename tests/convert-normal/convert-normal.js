$( function() {
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
});