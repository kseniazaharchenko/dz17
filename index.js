let ladder = {
  step: 0,
  up: function() {
    this.step++;
    return this; // повертаємо this для ланцюжкових викликів
  },
  down: function() {
    this.step--;
    return this; // повертаємо this для ланцюжкових викликів
  },
  showStep: function() {
    alert(this.step);
    return this; // повертаємо this для ланцюжкових викликів
  }
};

// Виклик методів по ланцюжку
ladder.up().up().down().showStep(); 