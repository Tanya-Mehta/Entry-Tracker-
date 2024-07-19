let countel = document.getElementById("count")
let saveEl = document.getElementById("save-el")

let count = 0;
function increment() {
    count += 1
    countel.innerText = count
}

increment()
function save() {
    let countstr = count + " - "
    saveEl.textContent+= countstr
countel.innerText=0
count=0

}


