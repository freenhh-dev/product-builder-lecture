const URL = "https://teachablemachine.withgoogle.com/models/klUCH7X3c/";

let model, labelContainer, maxPredictions;

// Load the image model
async function initModel() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function predict(imageElement) {
    const prediction = await model.predict(imageElement);
    labelContainer.innerHTML = '';
    
    // Sort predictions by probability
    prediction.sort((a, b) => b.probability - a.probability);

    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = prediction[i].className;
        const probability = (prediction[i].probability * 100).toFixed(0);
        
        const resultDiv = document.createElement("div");
        resultDiv.style.marginBottom = "1rem";
        resultDiv.innerHTML = `
            <div>${classPrediction}: ${probability}%</div>
            <div class="result-bar">
                <div class="result-fill" style="width: ${probability}%"></div>
            </div>
        `;
        labelContainer.appendChild(resultDiv);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await initModel();

    const fileInput = document.getElementById('file-input');
    const imagePreview = document.getElementById('image-preview');

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            imagePreview.src = event.target.result;
            imagePreview.style.display = 'block';
            
            // Wait for image to load into the element before predicting
            imagePreview.onload = () => {
                predict(imagePreview);
            };
        };
        reader.readAsDataURL(file);
    });
});
