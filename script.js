const item_form = document.getElementById('item-form');
const item_input = document.getElementById('item-input');
const ul = document.getElementById('item-list');

function onSubmit(e){
    e.preventDefault();

    const newItem = item_input.value;

    if(newItem === ''){
        alert('Please add an item');
        return;
    }

    //Create the li 
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    createButton('remove-item btn-link text-red' , li);
    
    //Append the li to ul 
    ul.appendChild(li);

    //Reset the form
    item_input.value = '';
}

//Creating a Button 
    //1.create button element
    //2.call create icon 
    //3.append icon to the button
    //4.append button to the parent
function createButton(classes , parent){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    parent.appendChild(button)
}

//Creating a Icon
    //create and return icon element
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

item_form.addEventListener('submit' , onSubmit);