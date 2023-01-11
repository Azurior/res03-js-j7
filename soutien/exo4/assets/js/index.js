let ages = [23, 45, 67, 42, 23, 21, 41, 54, 45, 68, 48, 42];

let unique_ages = [];

for(age of ages){
    
    for(subage of age){
        if(subage !== ages){
            unique_ages.push(ages[i]);
        }
    }
    console.log(unique_ages);
}

