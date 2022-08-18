let calculator = {
  read: function (a, b) {
    this.a = a, 
    this.b = b 
  },
  sum: function () {
    return this.a + this.b
  },
  mul: function () {
    return this.a * this.b
  }
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально


calculator.read(3, 5);
calculator.sum();
calculator.mul();