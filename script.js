const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const getSum = () => {
    let items = document.querySelectorAll(".price");
    let arr = Array.from(items);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i].textContent);
    }

    let table = document.getElementsByTagName("table")[0];
    let tbody = table.tBodies[0];

    // Insert a new row at the end
    let row = tbody.insertRow();

    // Insert a new cell in that row
    let cell = row.insertCell(0);

    // Span across both columns for clarity
    cell.colSpan = 2;

    // Set the id for Cypress test to find
    cell.id = "ans";    

    // Put the total sum inside the cell
    cell.textContent = "Total Price: " + sum;
};


getSumBtn.addEventListener("click", getSum);

