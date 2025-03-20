    document.addEventListener('keydown', function (event) {
    let keys = event.key
    if (text.innerText == "lorem" && keys == "Enter") {
        text.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maiores maxime illum incidunt, non fuga sunt nihil accusamus ad! Autem omnis natus, doloremque laborum architecto cumque odio perspiciatis. Perspiciatis, quis.`
    }
})
let bold = document.getElementById('bold')
let color = document.getElementById('color')
let italic = document.getElementById('italic')
let text = document.getElementById('textarea')
let under = document.getElementById('under')
let size = document.getElementById('fontSize')
let upper = document.getElementById('upper')
let lower = document.getElementById('lower')
let select = window.getSelection();


color.addEventListener('input',()=>{

    backRGB = color.value;
    if (!select.isCollapsed) {
        let range = select.getRangeAt(0);
        let span = document.createElement('span');
        span.style.color = backRGB;
        range.surroundContents(span);
    }
})

bold.addEventListener('click', () => {

    // let select = window.getSelection();
    if (!select.isCollapsed) {
        let range = select.getRangeAt(0);
        let b = document.createElement('b')
        range.surroundContents(b)
    }
})
italic.addEventListener('click', () => {
    if (!select.isCollapsed) {
        let range = select.getRangeAt(0);
        let i = document.createElement('i')
        range.surroundContents(i)
    }
})
// function changeFontSize(sizeChange) {
let drop = document.getElementById('size')
drop.addEventListener('click', function () {
    // let select = window.getSelection();
    drop.addEventListener('change', () => {
        if (!select.isCollapsed) {
            let range = select.getRangeAt(0);
            let span = document.createElement('span')
            span.style.fontSize = `${drop.value}px`
            range.surroundContents(span)
        }
    })
})
upper.addEventListener('click', function () {
    // let select = window.getSelection();
    if (!select.isCollapsed) {
        let range = select.getRangeAt(0);
        let span = document.createElement('span')
        span.style.textTransform = uppercase
        range.surroundContents(span)
    }
})
lower.addEventListener('click', function () {
    // let select = window.getSelection();
    if (!select.isCollapsed) {
        let range = select.getRangeAt(0);
        let span = document.createElement('span')
        span.style.textTransform = lowercase
        range.surroundContents(span)
    }
})

under.addEventListener('click', function () {
    // let select = window.getSelection();
    if (!select.isCollapsed) {
        let range = select.getRangeAt(0);
        let span = document.createElement('span')
        span.style.textDecoration = underline
        range.surroundContents(span)
    }
})


