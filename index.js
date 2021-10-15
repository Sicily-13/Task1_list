console.log(document.getElementById("input"));
document.addEventListener("DOMContentLoaded",()=>{
    const add = document.getElementById("add");
    let counter = 1;
    add.addEventListener("click",()=>{
        console.log(document.getElementById("input").value);

        const cross = document.createElement("button");
        const addCheckbox = document.createElement("input");
        const text = document.createTextNode(document.getElementById("input").value);
        const newElement = document.createElement("li");
        const innerCounter = counter;
        let txt = document.getElementById("input");

        cross.innerHTML="&#10006;";
        addCheckbox.type="checkbox";


        newElement.id = counter.toString();
        counter++;
        newElement.append(addCheckbox);
        newElement.append(text);
        newElement.append(cross);
        document.getElementById("list").appendChild(newElement);
        input.value = "";

        cross.addEventListener("click",()=>{
            let el = document.getElementById(innerCounter.toString());
            el.parentNode.removeChild(el);
        })
    })


})





