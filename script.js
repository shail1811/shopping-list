const item_form = document.getElementById('item-form');
const item_input = document.getElementById('item-input');
const ul = document.getElementById('item-list');
const clrBtn = document.getElementById('clear');
const filter = document.getElementById('filter');

function addItems(e){
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

    checkUI();
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

function removeItems(e){
    if(e.target.tagName === 'I'){
        ul.removeChild(e.target.parentElement.parentElement);
    }
    checkUI();
}

function clearAllItems(e){
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    checkUI();
}

function checkUI(){
    const li = ul.querySelectorAll('li');

    if(li.length ===  0){
        clrBtn.style.display = 'none';
        filter.style.display = 'none';
    }
    else{
        clrBtn.style.display = 'block';
        filter.style.display = 'block';
    }
}

checkUI();

item_form.addEventListener('submit' , addItems);
ul.addEventListener('click', removeItems);
clrBtn.addEventListener('click', clearAllItems);