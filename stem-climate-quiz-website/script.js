    // define the points for each option
    const pointValues = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4
      };
    
      // get the form element
      const quizForm = document.getElementById("quiz-form");
    
      // listen for the form submission event
      quizForm.addEventListener("submit", function(event) {
        // prevent the form from submitting and refreshing the page
        event.preventDefault();
    
        // get the user's answers
        const userAnswers = [
          quizForm.q1.value,
          quizForm.q2.value
        ];
    
        // calculate the score
        let score = 0;
        for (let i = 0; i < userAnswers.length; i++) {
          score += pointValues[userAnswers[i]];
        }
    
        // display the score
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = `Your score is ${score}.`;
      });