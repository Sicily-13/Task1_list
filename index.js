console.log(document.getElementById("input"));
document.addEventListener("DOMContentLoaded",()=>{
    const add = document.getElementById("add");
    add.addEventListener("click",()=>{
        console.log(document.getElementById("input").value);
        console.log("click");
        const cross = document.createElement("button");
        cross.innerHTML="&#10006;";
        const addCheckbox = document.createElement("input");
        addCheckbox.type="checkbox";
        const text = document.createTextNode(document.getElementById("input").value);
        const newElement = document.createElement("li");
        newElement.append(addCheckbox);
        newElement.append(text);
        newElement.append(cross);
        document.getElementById("list").appendChild(newElement);
    })
})

