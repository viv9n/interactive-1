console.log('hello world');

for (j = 0; j < 20; j++) {

  console.log("A new j begins:" + j);

  for (i = 0; i < 10; i++) {

    console.log("j:" + j, "i:" + i);

    let element = document.createElement("div");
    element.classList.add("rect");
    if ( i == 5) {
      element.style.borderRadius = "20px";
    }
    if (i == 6) {
      element.style.backgroundColor = "blue";
    } else {
      element.style.backgroundColor = "hsl(" + i * 10 + ", 100%, 50%)";
    }
    document.querySelector(".container").appendChild(element);
  }

  let breaker = document.createElement("div");
  breaker.classList.add("clear");
  document.querySelector(".container").appendChild(breaker);

}