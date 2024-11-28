// console.log("hi")

// 1) Fetch data from this API: https://jsonplaceholder.typicode.com/users. Parse the data so that each object contains only four properties: id, name, username, and email. Write the resulting array to a file called users.json.

const fs = require("fs/promises");
const { stringify } = require("querystring");

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    //   console.log(data);
    const parsedData = data.map((data) => ({
      id: data.id,
      name: data.name,
      username: data.username,
      email: data.email,
    }));
    // console.log(parsedData);

    await fs.writeFile("user.json", JSON.stringify(parsedData));
  } catch (error) {
    console.error("error with fetching", error);
  }
}

fetchData();

// 2) Run the command node main.js Ferrari 2020 red, retrieve the data from process.argv, and build a car object with the properties id, carModel, carColor, and carReleaseDate. Append this object to cars.json. Each time you run this command, a new object should be added to cars.json, so if you run it five times, you should have five objects in the file.

// const [, , id, carModel, carReleaseDate, carColor] = process.argv;

// async function carFunc() {
//   const carsInfo = {
//     id,
//     carModel,
//     carReleaseDate,
//     carColor,
//   };
//   //   await fs.writeFile("car.json", JSON.parse(cars));
//   //   //   fs.readFile('car.json','utf-8')
//   //   //   const parsedCars = JSON.stringify

//   let cars = [];

//   try {
//     const data = await fs.readFile("car.json", "utf-8");
//     cars = JSON.parse(data);
//   } catch (err) {
//     console.log("car.json was not found");
//   }
//   cars.push(carsInfo);

//   await fs.writeFile("car.json", JSON.stringify(cars));
// }
// carFunc();

// 3) Write a random text into a file named text.txt. Then, read this file and count how many vowels are present.

async function countVowels() {
  const randomText = "this is the random text to count vowels";
  await fs.writeFile("text.txt", randomText);

  const readText = await fs.readFile("text.txt", "utf-8");

  const vowels = ["a", "e", "i", "o", "u"];
  const vowelCount = randomText.split("").reduce((count, char) => {
    return vowels.includes(char) ? count + 1 : count;
  }, 0);
  console.log(`there is ${vowelCount} vowel in text.`);
  //   randomText.split("").map((character) => {
  //     if (vowels.includes(character)) {
  //       vowelCount++;
  //     }
  //   });
}
countVowels();
