console.log(document.getElementById("input"));
document.addEventListener("DOMContentLoaded",()=>{
    const add = document.getElementById("add");
    let counter = 1;
    add.addEventListener("click",()=>{
        console.log(document.getElementById("input").value);

        const cross = document.createElement("button");
        cross.innerHTML="&#10006;";

        console.log(1,counter);
        const innerCounter = counter;
        cross.addEventListener("click",()=>{
            let el = document.getElementById(innerCounter.toString());
            el.parentNode.removeChild(el);
        })

        const addCheckbox = document.createElement("input");
        addCheckbox.type="checkbox";
        const text = document.createTextNode(document.getElementById("input").value);
        const newElement = document.createElement("li");
        newElement.id = counter.toString();
        counter++;
        newElement.append(addCheckbox);
        newElement.append(text);
        newElement.append(cross);
        document.getElementById("list").appendChild(newElement);
        let txt = document.getElementById("input");
        input.value = "";
    })


})





