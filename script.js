document.addEventListener("DOMContentLoaded", function() {
    const urlInputForm = document.getElementById('url-input-form');
    const previewFrame = document.getElementById('preview-frame');

    urlInputForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const url = document.getElementById('url-input').value;
        previewFrame.src = url;
    });
});
