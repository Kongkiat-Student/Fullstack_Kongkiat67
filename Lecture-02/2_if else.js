const istatus = 200;

if (istatus ===200) {
    console.log('OK');
}else if (istatus === 400) {
    console.log('BAD REQUEST');
}else {
    console.log('Unknown');
}

switch (istatus) {
    case 200:
        console.log('OK');
        break;
    case 400:
        console.log('Bad Request');
        break;
    default:
        console.log('Unknown');
        break;
}

const statusmessage = (istatus === 200) ? 'OK' : 'Error!';
console.log(statusmessage);
