var n = Math.floor(Math.random() * 10);
function check() {
    var m = document.getElementById("tt").value;
    console.log(m)
    console.log(n)
    if (n == m) {
        document.getElementById("demo").innerHTML = "Your number is right";
    }
    else
        document.getElementById("demo").innerHTML = "your number not rigth";
}