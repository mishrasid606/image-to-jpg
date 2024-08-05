document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                const jpgDataUrl = canvas.toDataURL('image/jpeg');
                displayImage(jpgDataUrl);
            };
        };
        reader.readAsDataURL(file);
    }
});

function displayImage(jpgDataUrl) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h5>Converted Image:</h5>
        <img src="${jpgDataUrl}" alt="Converted Image" class="img-fluid">
        <a href="${jpgDataUrl}" download="converted-image.jpg" class="btn btn-success btn-block mt-3">Download JPG</a>
    `;
}
