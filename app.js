let bold = document.getElementById('bold')
let color = document.getElementById('color')
let italic = document.getElementById('italic')
let text = document.getElementById('textarea')
let size = document.getElementById('fontSize')
let upper = document.getElementById('upper')
let lower = document.getElementById('lower')

color.addEventListener('click', () => {
    let select = window.getSelection().toString();
    color.addEventListener('change', () => {
        let newt = `<span style="color:${color.value};">${select}</span>`// select.
        let full = text.innerText;
        text.innerHTML = full.replace(select, newt)
    })
})
bold.addEventListener('click', () => {
    document.execCommand('bold', false, null)
})
italic.addEventListener('click', () => {
    document.execCommand('italic', false, null)
})
function changeFontSize(sizeChange) {
    document.execCommand('fontSize', false, sizeChange);
}

upper.addEventListener('click', () => {

    document.execCommand("insertHTML", false, window.getSelection().toString().toUpperCase());

})
lower.addEventListener('click', () => {

    document.execCommand("insertHTML", false, window.getSelection().toString().toLowerCase());
})


document.addEventListener('keydown', (event) => {
    let keys = event.key
    if (text.innerText == "lorem" && keys == "Enter") {
        text.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maiores maxime illum incidunt, non fuga sunt nihil accusamus ad! Autem omnis natus, doloremque laborum architecto cumque odio perspiciatis. Perspiciatis, quis.`
    }
})


