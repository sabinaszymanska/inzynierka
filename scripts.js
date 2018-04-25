

$(document).on('click', '#grid div', function(){
    console.log($(this).data('x'), $(this).data('y'))
})

console.log(2*2)
const width = 5
const height = 5
const toFill = Math.round(width * height / 2) + 1 

$('#grid').width(width * 20)

let arr = Array(width).fill([])

for (let x in arr) {
    arr[x] = Array(height).fill(false)
}

console.log(arr)

let filled = 0

while (filled < toFill) {
    let x = Math.round(Math.random() * (width - 1))
    let y = Math.round(Math.random() * (height - 1))

    if (arr[x][y]) {
        continue
    }

    arr[x][y] = true
    filled++
    
    //break
} 
console.log(arr)

for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
        let div = $(`<div data-x="${x}" data-y="${y}"/>`)

        if (arr[x][y]) {
            div.addClass('active')
        }

        $('#grid').append(div)
    }
}

//

let columns = Array(width)

for (let x = 0; x < width; x++) {
    columns[x] = []
    let i = 0

    for (let y = 0; y < height; y++) {
        if (arr[x][y]) {
            i++
        } else {
            if (i) {
                columns[x].push(i)
            }

            i = 0
        }
    }

    if (i) {
        columns[x].push(i)
    }

    if (!columns[x].length) {
        columns[x].push(0)
    }
}

console.log(columns)

//

let rows = Array(height)

for (let y = 0; y < height; y++) {
    rows[y] = []
    let i = 0

    for (let x = 0; x < width; x++) {
        if (arr[x][y]) {
            i++
        } else {
            if (i) {
                rows[y].push(i)
            }

            i = 0
        }
    }

    if (i) {
        rows[y].push(i)
    }

    if (!rows[y].length) {
        rows[y].push(0)
    }
}

console.log(rows)

//

for (let x = 0; x < height; x++) {
    let div = $('<div/>')

    for (let number of columns[x]) {
        div.append($('<div>'+number+'</div>'))
    }

    $('#columns').append(div)
}

for (let y = 0; y < height; y++) {
    let div = $('<div/>')

    for (let number of columns[y]) {
        div.append($('<div>'+number+'</div>'))
    }

    $('#rows').append(div)
}









