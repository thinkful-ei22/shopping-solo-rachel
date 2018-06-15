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

//Make STORE array to keep item object literals.

const STORE = [
    {name: "flour", checked: false},
    {name: "cocoa", checked: false},
    {name: "baking soda", checked: false},
    {name: "sea salt" checked: false}
];

//Make function stubs

function renderShoppingList() {
    //console.log('`renderShoppingList'` ran');
}

function addItem() {}
function deleteItem() {}
function checkItemComplete() {}
function toggleItems() {}
function filterBySearch() {}
function editItemTitle() {}

function main() {

    function renderShoppingList() {}
    function addItem() {}
    function deleteItem() {}
    function checkItemComplete() {}
    function toggleItems() {}
    function filterBySearch() {}
    function editItemTitle() {}
}

// Run the `main` function when DOM loads
$(main);

