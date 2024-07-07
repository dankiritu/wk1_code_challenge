function checkSpeed() {
    let speed = prompt("Enter speed here in km/h");

    // Here we are converting the input into a number
    speed = Number(speed);

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    // Here we are Checking the speed and calculating the demerit points
    if (speed <= speedLimit) {
        console.log("Okay!");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(demeritPoints);

        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

// Here we are calling the function to execute it
checkSpeed();