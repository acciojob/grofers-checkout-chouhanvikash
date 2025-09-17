const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let items=document.querySelectorAll(".price");
	let arr=Array.from(items);
	let sum=0;
	for(let i=0;i<arr.length;i++)
		{
			sum+=arr[i].textContent;
		}
	let table = document.getElementsByTagName("table")[0];
let tbody = table.tBodies[0];

// Insert a new row at the end
let row = tbody.insertRow();

// Insert a new cell in that row (first column)
let cell = row.insertCell(0);

// Put some text inside the cell
cell.textContent = sum;  // assuming sum is defined somewhere

  
};

getSumBtn.addEventListener("click", getSum);

