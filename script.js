
const questions = [
    {
        question: "You receive a call from someone who is claiming to be from your bank. Right after you have received a notification from your bank alerting you that someone has tried to gain access to your account. The caller informs you are required to perform a verification process, or your account will be closed. This verification process requires to provide your account number and the 3 digits from the back of your card. What do you do?", 
        answers: [
            {text: " Proceed and complete the verification process", correct: false},
            {text: " Ask for the caller's full name and their workplace. So you would be able to locate and hold accountable if anything happens if you proceed with the verification process.", correct: false},
            {text: " Provide your full name and your id number, but not banking details", correct: false},
            {text: " End the call, contact your bank using contacts from the official website of your bank, or go to your neariest bank office.", correct: true},
            {text: " None of the above", correct: false},
        ]
    },
    {
        question:"You receive an email that appears to come from your company’s HR address asking you to update payroll details via a link. The message uses urgent language and a generic greeting like “Dear employee.” What should you do first?", 
        answers: [
            {text: "Do not click the link. Verify the request through a separate channel (e.g., call HR using a known number or check the HR portal directly).", correct: true},
            {text: "Click the link, then Verify the request through a separate channel.", correct: false},
            {text: "Click the link, but use someone else's details.", correct: false},
            {text: "Click the link, but use VPN.", correct: false},
            {text: "Click the link, but ensure to use https instead of http.", correct: false},
        ]
    },
    {
        question: "You find a USB drive in the office parking lot labeled “Payroll.” What’s the safest course of action??", 
        answers: [
            {text: "Plug it into a secure workstation. Find out what it consist.", correct: false},
            {text: "Hand it to your superior.", correct: false},
            {text: "Leave it there.", correct: false},
            {text: "Do not plug it into any workstation. Turn it over to your smart colleage and have him access it.", correct: false},
            {text: "Do not plug it into any workstation. Turn it over to IT or security for safe analysis.", correct: true},
        ]
    },
    {
        question: "A message claims to be from IT announcing a new VPN client and includes an installer link. The message is poorly written and the link domain is unrelated. What’s the right response?", 
        answers: [
            {text: "Enter credentials. Do not report it.", correct: false},
            {text: "Enter credentials, then report it.", correct: false},
            {text: "Report it, then enter the credentials.", correct: false},
            {text: " Do not enter credentials. Report the email and access the file share directly through the known portal to check quota.", correct: true},
            {text: "None of the above.", correct: false},
        ]
    },
    {
        question: "You receive a call from someone claiming to be from tech support, asking for your login credentials to fix an urgent issue. What should you do?", 
        answers: [
            {text: "Do not provide your credentials. Report it to the IT department.", correct: true},
            {text: "Request the process to be done through email.", correct: false},
            {text: "Gethar more information about the caller before providing your credentials.", correct: false},
            {text: "Before you provide your credentials, ask the caller to conform your job position.", correct: false},
            {text: "None of the above.", correct: false},
        ]
    },
    {
        question: "Your company’s security team runs a phishing simulation and you fall for it. What’s the best way to respond?", 
        answers: [
            {text: "Escape the scrutiny by being deceptive.", correct: false},
            {text: "Just lie.", correct: false},
            {text: "Accept your results, be open about them and learn from your mistake.", correct: true},
            {text: "Avoid being seen as the weakest link and lie.", correct: false},
            {text: "Do not be truthful, because of the fear of losing your job.", correct: false},
        ]
    },
    {
        question: "You receive a calendar invite from an external email with a meeting link and an attached agenda. You weren’t expecting a meeting. What should you check before joining?", 
        answers: [
            {text: "The meeting link.", correct: false},
            {text: "The email address.", correct: true},
            {text: "The attached agenda.", correct: false},
            {text: "If you are using VPN.", correct: false},
            {text: "None of the above.", correct: false},
        ]
    },
    {
        question: "A colleague calls and says they’re locked out of a shared admin tool and need you to read a one‑time code they just received. They sound rushed. What’s the correct response?", 
        answers: [
            {text: "Be a team player, and share authentication codes.", correct: false},
            {text: "Blindly help your colleague.", correct: false},
            {text: "Assist your colleague, they would owe you a huge favor. Since it might save their job.", correct: false},
            {text: "Refuse to share authentication codes. Tell them you’ll notify IT and confirm the request via the official ticketing system or a known contact method.", correct: true},
            {text: "None of the above.", correct: false},
        ]
    },
    {
        question: "A recruiter on LinkedIn offers a high‑paying remote role and asks you to complete a “quick skills test” hosted on an unfamiliar site that requests login via Google. What should you do?", 
        answers: [
            {text: "Follow the recruiter's instructions.", correct: false},
            {text: "Prioritize securing the job.", correct: false},
            {text: "Do not bother to verify the recruiter’s identity and the company’s careers page.", correct: false},
            {text: "Use authorizing third‑party apps with your corporate account.", correct: false},
            {text: "None of the above.", correct: true},
        ]
    },
   
    {
        question: "A stranger at a conference asks detailed questions about your company’s internal tools and team structure while appearing friendly. What should you do?", 
        answers: [
            {text: "Avoid discussing internal architecture or security controls.", correct: true},
            {text: "Share only general and sensitive information about the company.", correct: false},
            {text: "Show off your knowledge, and tell them about the complexity of your company's systems.", correct: false},
            {text: "Answer their questions, but say it was from a different company.", correct: false},
            {text: "None of the above.", correct: false},
        ]
    },
   
]

const questionElement = document.getElementById("question"); // fixed typo
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); // renamed to singular
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); // fixed: answerButtons + button
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer); // fixed: button not buttons
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; // fixed: backticks + ${}
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();