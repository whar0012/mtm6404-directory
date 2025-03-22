// This function helps generate an HTML list from an array of "clients"
function list(clients) {
    return clients.map((client, index) => `
        <li class="list-group-item d-flex justify-content-between" data-index="${index}">
            ${client.name} <strong>$${client.balance.toFixed(2)}</strong>
        </li>
    `).join('');
}

// This function helps to sort an array of the clients by a specified "property"
function order(clients, property) {
    return [...clients].sort((a, b) => (a[property] > b[property] ? 1 : -1));
}

// This is the function that helps calculate the total balance of all the clients
function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
}

// This function helps find the client information by index
function info(index, clients) {
    return clients.find((_, i) => i === index);
}

// This function helps to search for clients by name
function search(query, clients) {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
}