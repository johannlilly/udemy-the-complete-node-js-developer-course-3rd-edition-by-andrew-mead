// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = x => x * x;

// const event = {
//     name: 'Birthday Party',
//     printGuestList: function() {
//         console.log('Guest list for ' + this.name);
//     }
// }

// const event = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name); // arrow functions don't bind `this` value
//     }
// }

const event = {
    name: 'Birthday Party',
    guestList: ['Ash', 'Red', 'Gary', 'Blue'],
    printGuestList() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach(guest => { // access binding of parent
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

event.printGuestList();