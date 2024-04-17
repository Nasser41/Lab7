document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('colorForm');
    const colorInput = document.getElementById('colorInput');
    const hello = document.getElementById('hello');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        hello.style.color = colorInput.value;
        colorInput.value = ''; 
    });
});
