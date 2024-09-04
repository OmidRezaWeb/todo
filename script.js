window.onload = function () {
    let textInput = document.querySelector('.text-input');
    let listItem = document.querySelector('.list_item');
    let btn = document.querySelectorAll('.btn')[0];

    btn.addEventListener('click', function () {
        console.log(this)
        let itemLi = document.createElement('li')
        let item = document.createElement('p')
        let todo = document.createTextNode(textInput.value);

        item.appendChild(todo)
        itemLi.appendChild(item)
        listItem.appendChild(itemLi)

        textInput.value = ''

        console.log(this)
    })
}