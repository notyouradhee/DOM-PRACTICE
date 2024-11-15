document.getElementById('changeBackgroundColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

document.getElementById('createRandomBoxBtn').addEventListener('click', function() {
    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomColor();
    newBox.style.transform = 'scale(0)';
    newBox.style.transition = 'transform 0.5s ease';
    document.getElementById('boxContainer').appendChild(newBox);
    setTimeout(() => {
        newBox.style.transform = 'scale(1)';
    }, 100);
});

document.getElementById('animateCircleBtn').addEventListener('click', function() {
    const circle = document.getElementById('circle');
    circle.style.transform = 'rotate(360deg) scale(1.5)';
    setTimeout(() => {
        circle.style.transform = 'rotate(0deg) scale(1)';
    }, 1000);
});

document.getElementById('toggleThemeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('fetchDataBtn').addEventListener('click', function() {
    fetchData();
});

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = `
        <h2>Fetched Data</h2>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Body:</strong> ${data.body}</p>
    `;
}      

    

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
