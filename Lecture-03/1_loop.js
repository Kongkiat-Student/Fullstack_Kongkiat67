const names= ['Justin' , 'Sarah' , 'Chistopher'];

for(let i = 0 ; i < names.lengthg ; i++){
    console.log(names[i]);
}

names.forEach(name => {
    console.log(name);  
});

for(const name of names){
    console.log(name);
}


names.forEach(myfunc);

function myfunc(name){
    console.log(name);
}