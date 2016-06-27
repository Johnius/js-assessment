exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

    // Number should be either float or integer
    return isNaN(parseFloat(num))
      // If it's not true then return false
      ? false
      // But if num is number and it's 0 then return 0
      // If it's not 0 then (&&) use Conditional (ternary) Operator to check
      //   if the number is devisible by 3 and/or by 5.
      // If it's devisible in one or both of the cases then return
      //   Fizz and/or Buzz concatenated into string
      // Otherwise these conditional operators in sum will return
      //   empty string which then lead to evaluation of OR (||) logical
      //   operator that returns initial number
      : num && (num % 3 === 0 ? 'fizz' : '') + (num % 5 === 0 ? 'buzz' : '') || num

    // This way is not the best one for clearly understand what is going on
    //   but it shows my awareness of conditional and logical operators and
    //   how they can be combined
  }
};
