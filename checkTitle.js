function checkTitle(title) {
    let bool = true;
    let arr = title.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===arr[i].toLowerCase()) {
            bool = false;
        }
    }
    console.log(bool);
}


checkTitle("A Mind Boggling Achievement") 

checkTitle("A Simple Java Script Program!")

checkTitle("Water is transparent")