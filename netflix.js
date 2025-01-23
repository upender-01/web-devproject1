
const questions = document.querySelectorAll('.ques');

        questions.forEach(question => {
            question.addEventListener('click', () => {
                // Find the answer inside the clicked question
                const answer = question.querySelector('.answer');

                // Toggle the visibility of the answer
                const isVisible = answer.style.display === 'block';
                answer.style.display = isVisible ? 'none' : 'block';// ternary operator
            });
        });
        
        

