const inputs = document.querySelectorAll(".controls input");

function handleUpdate(e) {
  const selectedBtn = e.target.name;
  switch (selectedBtn) {
    case "base":
      let eyes = document.querySelectorAll(".eye");
      eyes.forEach((eye) => (eye.style.background = e.target.value));
      break;
    case "base2":
      let ears = document.querySelectorAll(".ear");
      ears.forEach((ear) => (ear.style.background = e.target.value));
      break;
    case "base3":
      let nose = document.querySelector(".nose");
      nose.style.background = e.target.value;
      break;
  }
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));

//🤔 TOO EASY? Check out the advanced challenge here:⤵️ https://scrimba.com/scrim/cob054ac38a9da4bad303365a
