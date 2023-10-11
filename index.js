// Iteration 1: Names and Input
let hacker1 = "Martin";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Marc";
console.log(`The navigator's name is ${hacker2}`);
let maxLen = null;

// Iteration 2: Conditionals
const h1Len = hacker1.length;
const h2Len = hacker2.length;
if (h1Len > h2Len) {
    console.log(`The driver has the longest name, it has ${h1Len} characters.`);
    maxlen = h1Len;
}
if (h1Len < h2Len) {
    console.log(`It seems that the navigator has the longest name, it has ${h2Len} characters.`);
    maxLen = h2Len;
}
if (h1Len === h2Len) {
    console.log(`Wow, you both have equally long names, ${h1Len} characters!`);
    maxLen = h1Len;
}
// Iteration 3: Loops
const driverAllCaps = hacker1.toUpperCase();
let driverCapsSpace = "";
for (let i = 0; i < h1Len; i++) {
    driverCapsSpace += driverAllCaps[i];
    if (i === h1Len - 1)
        break;
    else
        driverCapsSpace += ' ';
}
console.log(driverCapsSpace);

let navigatorsNameReverse = "";
for (i = h2Len; i > 0; i--)
    navigatorsNameReverse += hacker2[i - 1];
console.log(navigatorsNameReverse);

const namesOrder = hacker1.localeCompare(hacker2);
if (namesOrder === -1)
    console.log("The driver's name goes first.");
else if (namesOrder === 1)
    console.log("Yo, the navigator goes first, definitely.");
else if (namesOrder === 0)
    console.log("What?! You both have the same name?");

// BONUS 1

// 295 Words
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis ut dolor vitae scelerisque. Pellentesque nec mattis leo, eu convallis eros. Etiam vestibulum quam diam, at volutpat magna pulvinar quis. Sed vulputate ullamcorper rutrum. In a pellentesque nisl. Fusce feugiat mauris nec leo euismod condimentum. Pellentesque fermentum bibendum risus, eget cursus augue luctus et. Curabitur commodo, leo id sagittis viverra, magna erat ullamcorper metus, commodo ultrices risus eros eget sem. In volutpat, tortor eu ornare accumsan, neque erat molestie massa, nec placerat dui ipsum non augue. Nunc imperdiet tellus at ligula viverra, quis dictum augue iaculis. Duis efficitur ac lectus et consectetur.

Nam malesuada erat sit amet massa imperdiet auctor. Donec lobortis volutpat leo, ut bibendum augue pharetra sit amet. Phasellus eleifend nisi ut porttitor molestie. Sed nec magna in erat rhoncus laoreet. Etiam felis risus, auctor a diam gravida, condimentum posuere eros. Nulla semper orci tristique sem commodo imperdiet. Fusce auctor urna ut est gravida mattis. Cras id blandit lorem, eget ullamcorper lectus. Fusce varius, purus vel vulputate molestie, urna tortor sagittis ante, eget gravida sem velit vel dolor. Morbi ornare odio id eleifend vestibulum.

Cras ultrices imperdiet semper. Donec porta hendrerit urna, euismod mattis tortor ornare vel. Praesent ac rhoncus quam. Donec ut iaculis erat, et aliquam est. Morbi ultrices lectus vitae tempor mattis. Mauris sodales vel elit ut dictum. Etiam a justo et odio suscipit venenatis at et mauris. Nullam sit amet risus nec sem faucibus bibendum. Aliquam pharetra libero felis, id blandit neque imperdiet ut. Phasellus eu tellus in lacus euismod posuere. Vestibulum venenatis fermentum eros ut dictum. Duis non orci vitae nisl varius eleifend. Sed aliquam est sed nunc pharetra, non cursus odio dapibus. Morbi luctus purus quis orci mattis, non volutpat tellus ullamcorper. Aenean egestas vel erat sed lobortis.`;

let test = `  Lorem ipsum et et et. et,
dolor    .  `;
//text = text.trim();
text = longText.split(/[\n,\s]/);
console.log(`
Text:
` + text);
let wordsCount = text.length;
let etCount = 0;
for (let i = 0; i < wordsCount; i++) {
    if (text[i].endsWith('.'))
        text[i] = text[i].slice(0, -1);
    if (text[i] === 'et')
        etCount++;
    if (text[i] === '') {
        text.splice(i,1);
        i--;
        wordsCount--;
    }
}
// console.log("AFTER: " + text);
console.log(`
This text is ${wordsCount} words long and has ${etCount} 'et'.`);
