const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');
let ticketPrice = parseInt (movieSelect.value);

// Update count, total when seat selection changes
function updateSelectedCount() {
    // Get all selected seats
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // Create an array of all of selected seat index's from the master array 'seat' 
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

// Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

console.log(typeof ticketPrice);
