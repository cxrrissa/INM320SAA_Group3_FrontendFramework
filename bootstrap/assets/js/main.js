//fetch method for unresolved tickets
document.addEventListener('DOMContentLoaded', async () => {
    const ticketList = document.getElementById('ticket-list');

    async function fetchTickets() {
        try {
            const response = await fetch('assets/data/content.json');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            return data.tickets;
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    function displayTickets(tickets) {
        tickets.forEach(ticket => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `${ticket.description} <span>${ticket.count}</span>`;
            ticketList.appendChild(li);
        });
    }

    const tickets = await fetchTickets();
    if (tickets) {
        displayTickets(tickets);
    }
});
