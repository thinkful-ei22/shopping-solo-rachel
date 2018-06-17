'use strict'
/*
As a user, upon first loading the app, I can see an empty shopping list
As a user, I can enter items I need to purchase by entering text and hitting "Return" or clicking the "Add item" button
As a user, I can delete an item from the list
As a user, check and uncheck items on the list by clicking the "Check" button
As a user, I can press a switch/checkbox to toggle between displaying all items or displaying only items that are unchecked
As a user, I can type in a search term and the displayed list will be filtered by item names only containing that search term
As a user, I can edit the title of an item
*/

//store array
const store = [
    {name: "flour", checked: false},
    {name: "cocoa", checked: false},
    {name: "baking soda", checked: true},
    {name: "sea salt", checked: false}
];

let filterCompletedItems = false;

//function stubs
//renderShoppingList function
    //where will the shoping list be rendered
    //iterate through store items
    //generate a new <li> DOM for each item
    //place ore replace the contents of <ul> with new <li> elements
function renderShoppingList() {
    console.log('`render shopping list` ran');
    console.log(store);
    let filteredList = $.grep(store, function (e) {
        if ( e.name.indexOf($('#js-shopping-list-filter').val()) > -1 ) {
            return true;
        } 
    });
    const iteratedList = filteredList.map(obj => generateItemElement(obj))
    console.log(iteratedList);
    $('.shopping-list').html(iteratedList.join(''));

}

function generateItemElement(item) {
    if (filterCompletedItems && item.checked) {
        return '';
    } else {
        return `<li>
        <span onclick="editItemTitle('${ item.name }')" class="shopping-item ${ item.checked ? 'shopping-item__checked' : '' }">${ item.name }</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle" onclick="checkItemComplete('${ item.name }')">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete" onclick="deleteItem('${ item.name }')">
            <span class="button-label">delete</span>
        </button>
        </div>
        </li>`;
    }
} 

/*
For each item in STORE, generate a string representing an <li> with:
the item name rendered as inner text
the item's index in the STORE set as a data attribute on the <li>
the item's checked state (true or false) rendered as the presence or absence of a CSS class for indicating checked items (specifically, .shopping-item__checked from index.css)
Join together the individual item strings into one long string
Insert the <li>s string inside the .js-shopping-list <ul> in the DOM.
*/

function addItem() {

    $('#js-shopping-list-form').on('submit', (event) => {
        event.preventDefault();
        console.log(event);
        const userInput = $('.js-shopping-list-entry').val();
        console.log(userInput);
        store.push({name: userInput, checked: false});
        renderShoppingList();
    });
    //   $('.shopping-item').text(store);
    // $('submit').on(click.store.push({name: "olive oil", checked: true});

}
function deleteItem(name) {
    console.log("delete clicked" + name);
    for (let i = 0; i < store.length; i++) {
        if (name === store[i].name) {
            store.splice(i, 1);
            break;
        }
    }
    renderShoppingList();

}
function checkItemComplete(name) {
    console.log("Item clicked: " + name);
    for (let i = 0; i < store.length; i++) {
        if (name === store[i].name) {
            store[i].checked = !store[i].checked;
        }
    }
    renderShoppingList();
}

function toggleItems() {
    $('#js-shopping-list-toggle').on('click', (event) => {
        filterCompletedItems = !filterCompletedItems;
        renderShoppingList();
    });
}
function filterBySearch() {
    console.log('filtersetup');
    $('#js-shopping-list-filter').on('keydown', (event) => {
        renderShoppingList();
    });
}

function editItemTitle(name) {
    for (let i = 0; i < store.length; i++) {
        if (name === store[i].name) {
            store[i].name = prompt();
        }
    }
    renderShoppingList();
}

function main() {

    renderShoppingList();
    addItem();
    // deleteItem(); 
    // checkItemComplete(); 
    toggleItems(); 
    filterBySearch(); 
    // editItemTitle();
}

// Run the `main` function when DOM loads
$(main);

