function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let walkedDog = false;

      if (walkedDog) {
        resolve("You walk the dog");
      } else reject("You didn't walked dog");
    }, 1000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean the Kitchen");
    }, 1000);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You take out the trash");
    }, 3000);
  });
}

walkDog()
  .then(value => {
    console.log(value);
    return cleanKitchen();
  })
  .then(value => {
    console.log(value);
    return takeOutTrash();
  })
  .then(value => {
    console.log(value);
    console.log("You completed the all task");
  })
  .catch(error => console.log(error));

// Async - Await

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
  } catch (error) {
    console.error(error);
  }
}

doChores();
