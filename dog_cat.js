
var dogs = {
	raining: true,
	noise: "Woof",
	makeNoise: function(){
		if (this.raining) {
			console.log(this.noise);
		}
	}
}

var cats = {
  raining: true,
  noise: "Meow",
  makeNoise: function(){
    if (this.raining) {
      console.log(this.noise);
    }
  }
}

dogs.makeNoise()
cats.makeNoise()

 function massHysteria(dogs, cats) {
  if (cats.raining === true && dogs.raining === true) {
    console.log("mass hysteria")
  }
 }
 massHysteria(dogs, cats)
// * **Instructions**

//   * Make a dogs object with three keys...

//     * First key called "raining" with a value of true

//     * Second key called "noise" with a value of "Woof!"

//     * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs

//   * Make a cats object with three keys...

//     * First key called "raining" with a value of false

//     * Second key called "noise" with a value of "Meow!"

//     * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats

//   * Make the dog bark

//   * Make the cat meow

//   * BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the `raining` keys are equal to true.

//   * BONUS: Look to see if you can find any means to simplify your code further and further


// Add CommentCollapse 

// Message #class