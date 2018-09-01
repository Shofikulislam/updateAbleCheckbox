let getId = selector => {
    return document.getElementById(selector)
}


// Select the #checkboxform
let form = getId('checkboxform')
    //  Select the #checklistWrapper
let checklistWrapper = getId('checklistWrapper')

// Select all the checkboxes
let checkboxlist = form.querySelectorAll('input[type="checkbox"]');
// Convert Checkboxlist to an true array
var checkboxes = [...checkboxlist]

// Update checklistWrapper when checkobes is checked or unchecked
let check = () => {
    let ul = document.createElement('ul')
    checkboxes.forEach(function(value) {
        if (value.checked == true) {
            let li = document.createElement('li')
            li.innerHTML = value.value
            ul.appendChild(li)
        }
    })
    checklistWrapper.innerHTML = ''
    checklistWrapper.appendChild(ul)
}

// Add Event Listener to every checkbox item
checkboxes.forEach(function(value) {
    value.addEventListener('change', check)
})