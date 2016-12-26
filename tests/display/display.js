//var currSys = 'dec';
const convertSys = {'hex':16, 'dec':10, 'oct':8, 'bin':2};
var display = function(value, currSys) {
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