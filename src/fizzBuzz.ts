class fizzBuzz {

  evaluate (num: number) {
    return num === 0 ? "0"
      : this.isMultipleOf(num, 3*5) ? "FizzBuzz"
      : this.isMultipleOf(num, 5) ? "Buzz"
      : this.isMultipleOf(num, 3) ? "Fizz"
      : num + ""
  }

  private isMultipleOf(num: number, divisor: number): boolean {
    return num % divisor === 0
  }

}

export default new fizzBuzz()