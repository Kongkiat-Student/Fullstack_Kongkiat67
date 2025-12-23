const findname = 'Allice';
const names = ['Allice', 'Bob', 'Charlie', 'David'];
index = 0;

while(names.length>index){
    if (names[index] === findname){
        console.log("Found Charlie");
        index++;
        break;
    }
}