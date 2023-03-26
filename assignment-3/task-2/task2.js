function check() {
  let num = document.getElementById("num-inp").value;

  if (num != "" && num == 0) {
    alert(`"${num}" is an even number.`);
  } else if (num != "" && num > 0) {
    if (num % 2 == 0) {
      alert(`"${num}" is an even number.`);
    } else {
      alert(`"${num}" is an odd number.`);
    }
  } else {
    if (num < 0) {
      alert("Enter a positive number!");
    } else {
      alert("Enter a number first!");
    }
  }
}
