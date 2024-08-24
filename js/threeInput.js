// triangle-calculate

document.getElementById('triangle-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('triangle').innerText;

    const firstInputEement = document.getElementById('triangle-base')
    const firstInputString = firstInputEement.value;
    const firstInput = parseFloat(firstInputString);

    const secondInputElement = document.getElementById('triangle-height');
    const secondInputString = secondInputElement.value;
    const secondInput = parseFloat(secondInputString);

    firstInputEement.value = '';
    secondInputElement.value = '';

    if (isNaN(firstInput) || isNaN(secondInput) || firstInput === '' || secondInput === '' || firstInput <= 0 || secondInput <= 0) {
        alert('Please give correct value (number & positive & dont empty)');
        return;
    }

    const triangleArea = threeInputArea(0.5, firstInput, secondInput).toFixed(2) + 'cm' + '<sup>2</sup>';

    showData(cardTitle, triangleArea)
    serial++;
})

// rhombus-calculate

document.getElementById('rhombus-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('rhombus').innerText;
    const firstInput = document.getElementById('rhombus-diagonal-one').innerText;
    const secondInput = document.getElementById('rhombus-diagonal-two').innerText;

    const rhombusArea = threeInputArea(0.5, firstInput, secondInput).toFixed(2) + 'cm' + '<sup>2</sup>';

    showData(cardTitle, rhombusArea)
    serial++;
})

// pentagon-calculate

document.getElementById('pentagon-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('pentagon').innerText;
    const firstInput = document.getElementById('pentagon-a').innerText;
    const secondInput = document.getElementById('pentagon-b').innerText;

    const pentagonArea = threeInputArea(0.5, firstInput, secondInput).toFixed(2) + 'cm' + '<sup>2</sup>';

    showData(cardTitle, pentagonArea)
    serial++;
})

// ellipse-calculate

document.getElementById('ellipse-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('ellipse').innerText;
    const firstInput = document.getElementById('ellipse-a-axis').innerText;
    const secondInput = document.getElementById('ellipse-b-axis').innerText;

    const ellipseArea = threeInputArea(3.14,firstInput, secondInput).toFixed(2) + 'cm' + '<sup>2</sup>';

    showData(cardTitle, ellipseArea);
    serial++;
})

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'question.html';
  });