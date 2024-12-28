defineBMI = (weight, height) => {
    return weight / (height * height);
}

function compareBMI(person1, person2) {
    const bmi1 = defineBMI(person1.weight, person1.height);
    const bmi2 = defineBMI(person2.weight, person2.height);

    let result = `The BMI of ${person1.name} is ${bmi1.toFixed(2)}, The BMI of ${person2.name} is ${bmi2.toFixed(2)}.`;

    if (bmi1 > bmi2) {
        result += ` ${person1.name}'s BMI is higher than ${person2.name}'s BMI.`;
    } else if (bmi2 > bmi1) {
        result += ` ${person2.name}'s BMI is higher than ${person1.name}'s BMI.`;
    } else {
        result += ` Both have the same BMI.`;
    }

    console.log(result);
}

// Define two people with their weight (kg) and height (m)
const person1 = { name: "Lucas", weight: 78, height: 1.69 };
const person2 = { name: "Peter", weight: 92, height: 1.95 };

// Compare their BMIs
compareBMI(person1, person2);