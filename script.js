function processImage() {
    const input = document.getElementById('imageInput');
    const output = document.getElementById('output');
    const questions = document.getElementById('questions');
    const imageContainer = document.getElementById('imageContainer');
  
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const uploadedImage = document.getElementById('uploadedImage');
        uploadedImage.src = e.target.result;
        imageContainer.style.display = 'block';
      };
      reader.readAsDataURL(input.files[0]);
      // Show the questions section
      questions.style.display = 'block';
      // Hide the output section (if previously shown)
      output.style.display = 'none';
    } else {
      alert('Please select an image.');
    }
  }
  
  let currentQuestion = 1;
  
  function nextQuestion() {
    const currentQuestionDiv = document.getElementById(`question${currentQuestion}`);
    const nextQuestionDiv = document.getElementById(`question${currentQuestion + 1}`);
    currentQuestionDiv.style.display = 'none';
    if (nextQuestionDiv) {
      nextQuestionDiv.style.display = 'block';
      currentQuestion++;
    } else {
      document.getElementById('questions').style.display = 'none';
      document.getElementById('output').style.display = 'block';
    }
  }
  
  function submitAnswers() {
    const answer1 = document.getElementById('answer1').value;
    const answer2 = document.getElementById('answer2').value;
    const answer3 = document.getElementById('answer3').value;
  
    // You can use the answers to perform further processing if needed
    // For now, just display the output section
    document.getElementById('questions').style.display = 'none';
    document.getElementById('output').style.display = 'block';
  }
  