let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(let stat in statistics) {
    let num = statistics[stat];
    if(num % 2 == 1 || stat.startsWith('r')) {
        console.log(num);
    }
    
}