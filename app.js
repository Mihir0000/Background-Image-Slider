(function () {
    const picture = [
        "contBcg-0",
        "contBcg-1",
        "contBcg-2",
        "contBcg-3",
        "contBcg-4",
    ];
    // set up counter
    let counter = 0;
    // select buttons
    const btn = document.querySelectorAll(".btn");

    btn.forEach(function (btn) {
        btn.addEventListener("click", function (event) {
            // get event target
            let value = event.target;
            // console.log(value);
            if (value.classList.contains("btn-left")) {
                counter--;
                if (counter < 0) {
                    counter = picture.length - 1;
                }
                // console.log(counter);
                document.querySelector(
                    ".img-container"
                ).style.backgroundImage = `url('./img/${picture[counter]}.jpeg')`;
            }
            if (value.classList.contains("btn-right")) {
                counter++;
                if (counter > picture.length - 1) {
                    counter = 0;
                }
                // console.log(counter);
                document.querySelector(
                    ".img-container"
                ).style.backgroundImage = `url('./img/${picture[counter]}.jpeg')`;
            }
        });
    });
})();
