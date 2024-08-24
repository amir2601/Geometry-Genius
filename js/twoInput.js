// rectangle-calculate

document.getElementById('rectangle-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('rectangle').innerText;

    const firstInputEement = document.getElementById('rectangle-width')
    const firstInputString = firstInputEement.value;
    const firstInput = parseFloat(firstInputString);

    const secondInputElement = document.getElementById('rectangle-length');
    const secondInputString = secondInputElement.value;
    const secondInput = parseFloat(secondInputString);

    firstInputEement.value = '';
    secondInputElement.value = '';

    if (isNaN(firstInput) || isNaN(secondInput) || firstInput === '' || secondInput === '' || firstInput <= 0 || secondInput <= 0) {
        alert('Please give correct value (number & positive & dont empty)');
        return;
    }

    const rectangleArea = twoInputArea(firstInput, secondInput).toFixed(2) + 'cm' + '<sup>2</sup>';

    showData(cardTitle, rectangleArea);
    serial++;
})

// parallelogram-calculate

document.getElementById('parallelogram-calculate-btn').addEventListener('click', function () {
    const cardTitle = document.getElementById('parallelogram').innerText;
    const firstInput = document.getElementById('parallelogram-base').innerText;
    const secondInput = document.getElementById('parallelogram-height').innerText;

    const parallelogramArea = twoInputArea(firstInput, secondInput).toFixed(2) + 'cm' + '<sup>2</sup>';

    showData(cardTitle, parallelogramArea);
    serial++;
})