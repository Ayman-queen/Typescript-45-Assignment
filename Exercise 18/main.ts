let placeToVisit: string[] = ["Paris","Italy","Mecca","Medina","Indonesia"];

// print in original order
console.log("Original order:", placeToVisit);

// print array in Alphabetical order
console.log("Alphabetical order:", placeToVisit.slice().sort());

// array is still in the original order
console.log("Original order after sorting:", placeToVisit);

// print array in revers alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical order:", placeToVisit.slice().sort().reverse());

// array is still in its original order
console.log("Original order after reverse sort:", placeToVisit);

// reverse the order of list
placeToVisit.reverse();
console.log("Reverse order:", placeToVisit);

// reverse the order of list again
placeToVisit.reverse();
console.log("Back to order:", placeToVisit);

// sort array so it's stored in alphabetical order
console.log("Sorted in Alphabetical order:", placeToVisit.slice().sort());

// sort to change array to it's stored in reverse alphabetical order
console.log("Stored in Reverse Alphabetical order:", placeToVisit.slice().sort().reverse());