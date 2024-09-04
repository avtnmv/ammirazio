const container = document.getElementById('container');
for (let i = 0; i < 300; i++) {
    const div = document.createElement('div');
    div.className = 'c';
    container.appendChild(div);
}