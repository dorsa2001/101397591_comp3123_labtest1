const MixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

const lowerCaseWords = (input) => {
  let finalResult = input
    .filter((i) => typeof i === "string")
    .map((i) => i.toLowerCase());

  return new Promise((resolve, reject) => {
    resolve(finalResult);
  });
};

lowerCaseWords(MixedArray)
  .then((r) => console.log("data: ", r))
  .catch((error) => console.log("error: ", error));
