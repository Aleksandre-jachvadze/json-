fetch("information.json")
.then(function(response){
    return response.json()
})
.then(function(information){
    let placeholder= document.querySelector("#data-output");
    let out ="";
    for(let info of information){
        out +=`
        <tr>
            <td> ${info.name}</td>
            <td> ${info.date}</td>
            <td> ${info.title}</td>
            <td> ${info.amount}</td>
            <td><div class="danger">${info.status}</div></td>
        </tr>
        `;
    }
    
    placeholder.innerHTML=out;
})
.catch(error => console.error("Data ERROR", error))
document.addEventListener("DOMContentLoaded", function () {
    const sortButton = document.getElementById("sortButton");
    const dataOutput = document.getElementById("data-output");
    let ascendingOrder = true;
  
    sortButton.addEventListener("click", function () {
      fetch("information.json")
        .then(response => response.json())
        .then(information => {
          ascendingOrder = !ascendingOrder;
  
          information.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
  
            return ascendingOrder ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
          });
  
          const sortedHTML = information.map(info => `
            <tr>
                <td>${info.name}</td>
                <td>${info.date}</td>
                <td>${info.title}</td>
                <td>${info.amount}</td>
                <td><div class="danger">${info.status}</div></td>
            </tr>
          `).join('');
  
          dataOutput.innerHTML = sortedHTML;
        })
        .catch(error => console.error("Error fetching or sorting data:", error));
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
  
    sortButton.addEventListener("click", function () {
        sortButton.classList.toggle("rotate");
    });
  });