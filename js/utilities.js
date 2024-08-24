let serial = 1;

function threeInputArea(inputOne, inputTwo, inputThree) {
    const area = inputOne * inputTwo * inputThree;
    return area;
}

function twoInputArea (inputOne, inputTwo){
    const area = inputOne * inputTwo;
    return area;
}

function showData(dataOne, dataTwo) {
    const container = document.getElementById('area-container');
    const tr = document.createElement('tr');

    const button = document.createElement('button');
    button.textContent = 'Convert to m²';
    button.classList.add('bg-blue-500', 'text-white', 'px-4', 'mt-4', 'rounded-lg');

    tr.innerHTML = `
    <td>${serial}</td>
    <td>${dataOne}</td>
    <td>${dataTwo}</td>
`;
    tr.appendChild(button);
    container.appendChild(tr);
}

const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
  card.addEventListener("mouseover", function() {
    

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    card.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });

  card.addEventListener("mouseout", function() {
    card.style.backgroundColor = "white";
  });
});

document.getElementById('go-to-calc-page-btn').addEventListener('click', function(){
  window.location.href = 'index.html';
});