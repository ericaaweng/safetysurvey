// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
                type: "radiogroup",
                name: "question1",
                title: "Which of the following is NOT a recommended practice for preventing kitchen fires?",
                choices: [
                    "Leaving cooking unattended", "Keeping flammable materials away from the stove", "Using a timer to remind you to check on food", "SharksKeeping a fire extinguisher in the kitchen"
                ],
                correctAnswer: "Leaving cooking unattended"
            },
            {
                type: "radiogroup",
                name: "question2",
                title: "When handling knives in the kitchen, what is the safest way to hold them?",
                choices: [
                    "With the blade facing down", "With the blade facing up", "Gripping the blade tightly", "Gripping the handle firmly"
                ],
                correctAnswer: "With the blade facing down"
            },
            {
                type: "radiogroup",
                name: "question3",
                title: "Which of the following should be done before using electrical appliances in the kitchen?",
                choices: [
                    "Plugging multiple appliances into the same outlet", "Checking for frayed cords or damaged plugs", "Leaving appliances plugged in when not in use", "Using appliances with wet hands"
                ],
                correctAnswer: "Checking for frayed cords or damaged plugs"
            },
            {
                type: "radiogroup",
                name: "question4",
                title: "If a grease fire occurs in a pan on the stove, what should you do?",
                choices: [
                    "Pour water on the fire", "Cover the pan with a metal lid", "Attempt to move the pan to another location", "Use a cloth to try to smother the flames"
                ],
                correctAnswer: "Cover the pan with a metal lid"
            },
            {
                type: "radiogroup",
                name: "question5",
                title: "When lifting heavy objects in the kitchen, what is the best technique to avoid injury?",
                choices: [
                    "Bending at the waist", "Holding the object away from your body", "Keeping your back straight and using your legs", "Lifting with your back muscles"
                ],
                correctAnswer: "Keeping your back straight and using your legs"
            },
            {
                type: "radiogroup",
                name: "question6",
                title: "Before leaving the kitchen, what should you ensure?",
                choices: [
                    "All appliances are plugged in", "All dishes are left unwashed for later", "The stove and oven are turned off", "There are no utensils left on the counter"
                ],
                correctAnswer: "The stove and oven are turned off"
            },
            {
                type: "radiogroup",
                name: "question7",
                title: "How should you handle a pot with hot oil in it?",
                choices: [
                    "Carefully lift it with one hand while holding something else in the other hand", "Fill it to the brim to avoid spills", "Keep it near the edge of the counter", "Use oven mitts and both hands to carry it to the desired location"
                ],
                correctAnswer: "Use oven mitts and both hands to carry it to the desired location"
            },
            {
                type: "radiogroup",
                name: "question8",
                title: "When working with knives, what is the correct way to pass them to someone else?",
                choices: [
                    "Hand them over with the blade facing the other person", "Hold the handle and offer it to the other person", "Toss them lightly to the other person", "Place them on the counter and let the other person pick them up"
                ],
                correctAnswer: "Hold the handle and offer it to the other person"
            },
            {
                type: "radiogroup",
                name: "question9",
                title: "Which of the following should NOT be used to put out a grease fire on the stove?",
                choices: [
                    "Water", "Baking Soda", "Salt", "Fire extinguisher"
                ],
                correctAnswer: "Water"
            },
            {
                type: "radiogroup",
                name: "question10",
                title: "To prevent foodborne illness, what temperature should leftovers be reheated to?",
                choices: [
                    "120°F (49°C)", "145°F (63°C)", "165°F (74°C)", "200°F (93°C)"
                ],
                correctAnswer: "165°F (74°C)"
            },
            ];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Kitchen Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Kitchen Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}