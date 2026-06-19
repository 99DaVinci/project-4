// making the menu object
const menu = {
  _meal: '',
  _price: 0,

  // setter to check if the meal is actually text
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    }
  },

  // setter to check if the price is actually a number
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    }
  },

  // getter to print the special
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};

// adding the meal and price for today
menu.meal = 'Spaghetti';
menu.price = 5;

// showing the special on the screen
console.log(menu.todaysSpecial);