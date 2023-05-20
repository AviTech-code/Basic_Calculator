//Make M+,M- and MC functionl;
let string = "";
let count = 0;
let count1 = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=' && count === 0) {
      string = eval(string);
      document.querySelector('input').value = string;
      count = 1;
      count1 = 0;
    }
    else if (e.target.innerHTML == '%') {
      string = eval(string);
      string = string / 100;
      document.querySelector('input').value = string;
      count = 1;
    }
    else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
      count1 = 0;
    }
    else if (e.target.innerHTML == '.') {
      if (count1 == 0) {
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
      }

      count1 = 1;
    }
    else if (count == 1) {
      string = "";
      document.querySelector('input').value = string;
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
      count = 0;
      //  console.log(1);
    }
    else {
      string = string + e.target.innerHTML;
      //This below line is for displaying the input on the screen that we are giving.
      document.querySelector('input').value = string;
      count = 0;
    }
    // console.log(e.target);

  })
});
