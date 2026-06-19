// today's temp in kelvin. using const because it won't change
const kelvin = 293;

// to get celsius, just subtract 273 from kelvin
const celsius = kelvin - 273;

// formula to find fahrenheit. making it 'let' so we can round it down later
let fahrenheit = celsius * (9 / 5) + 32;

// rounding down the number so there are no decimals
fahrenheit = Math.floor(fahrenheit);

// showing the final answer on the screen
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


// --- EXTRA PRACTICE ---

// finding newton scale
let newton = celsius * (33 / 100);

// rounding down newton too
newton = Math.floor(newton);

// printing newton temp
console.log(`The temperature is ${newton} degrees Newton.`);