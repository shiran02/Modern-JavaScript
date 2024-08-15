const d = new Date(10,30,2022,19,0,0);
const hour = d.getHours();
const month = d.getMonth();



switch(month){
    case 1:
        console.log('It is january');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
    default:
        console.log('It is Not January, Feb , or March ');
}


switch(hour){
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Goood AfterNoon');
        break;
    default:
        console.log('Goood Night');
}