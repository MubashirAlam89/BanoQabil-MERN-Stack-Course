function check() {
  let name = document.getElementById("name-inp").value;
  let age = document.getElementById("age-inp").value;
  if (age > 0 && age !== "" && name !== "") {
    if (age >= 18) {
      alert(`Welcome! "${name}",${" "} you are an "adult".`);
    } else {
      alert(`Sorry! "${name}",${" "} you are "not adult" at yet.`);
    }
  } else {
    if (age < 0) {
      alert("Enter the positive number.");
    } else if (age == 0 && age !== "") {
      alert("Age should be greater then '0'.");
    } else if (!name && !age) {
      alert("Fill the fields first!");
    } else if (!name) {
      alert("Enter the name first!");
    } else if (!age) {
      alert("Enter the age first!");
    }
  }
}
