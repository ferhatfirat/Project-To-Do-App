const inputButton = document.querySelector(".fa-plus-square");
const inputArea = document.getElementById("input");


const tickFunction = function () {
    document.querySelectorAll(".fa-square").forEach(function (elements) {
        elements.addEventListener("click", function() {
            console.log(elements.className);
            if (elements.className == "far fa-square") {
                this.setAttribute('class', 'fas fa-check-square');
                let moveElement = elements.closest(".section2");
                let header2 = document.getElementById("header2")
                header2.insertAdjacentElement('afterend', moveElement);
            }
    })
});
};
tickFunction();

const deleteFunction = function () {
    document.querySelectorAll(".fa-minus-circle").forEach(function(element) {
        element.addEventListener("click", () => {
            const delElement = element.closest(".section2");
            delElement.remove();
        })
    })
};
deleteFunction();

const taskMaker = function () {
    const task = document.createElement('section');
    const header1 = document.querySelector("#header1");
    task.setAttribute('class', 'section2')
    task.innerHTML = `
            <i class="far fa-square"></i>
            <p class="paragraph">${inputArea.value}</p>
            <i class="fas fa-minus-circle"></i>
            `
    header1.insertAdjacentElement('afterend', task);
}

inputButton.addEventListener("click", () => {
    if (inputArea.value.trim() != '') {
        taskMaker();
        inputArea.value = "";
        tickFunction();
        deleteFunction();
    }
})






