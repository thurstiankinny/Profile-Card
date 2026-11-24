
let light = document.getElementById("light");
let dark = document.getElementById("dark");

light.addEventListener("change", function() {

    if (light.checked) {
        document.body.style.backgroundColor = "lightblue";
        dark.checked = false;
    } else {
        light.checked = true;
    }

});

dark.addEventListener("change", function() {

    if (dark.checked) {
        document.body.style.backgroundColor = "black";
        light.checked = false;
    } else {
        dark.checked = true;
    }

});
