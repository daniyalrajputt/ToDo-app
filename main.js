

//  funtion to delete all list
function delWork() {
    alert("Deleted Successfull");
    document.getElementById('list').innerHTML = '';

}
// function for remove 
var remove = document.getElementsByClassName("remove");
var i;
for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


function addWork() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("name").value;
    var txt = document.createTextNode(inputValue);
    li.appendChild(txt);


    if (inputValue === '') {
        alert("You have to write something!");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("name").value = "";

    var pic = document.createElement("img");
    pic.className = "remove"
    pic.setAttribute("src", "del.PNG");
    li.appendChild(pic);

    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


