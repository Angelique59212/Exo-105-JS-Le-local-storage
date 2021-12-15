const storage = window.localStorage;
storage.setItem('number', '26');
storage.setItem('type', 'Material');
storage.setItem('theme', 'Pink');

let result = document.getElementById("result");

function resultDiv() {
    result.innerHTML = storage.getItem("theme") ;
    console.log("theme: " + storage.getItem("theme") + " type: " + storage.getItem("type") +
        " number: " + storage.getItem("number"));
}
resultDiv();
resultDiv();

localStorage.setItem("storage", JSON.stringify(storage));
let resultStorage = JSON.parse(localStorage.getItem("storage"));
console.log(resultStorage)