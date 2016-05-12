// Setup your quiz text and questions here
// NOTE: pay attention to commas, IE struggles with those bad boys
var quizJSON = {
    "info": {
        "name": "Unit 1",
        "main": "Quiz 1 – Spot the mistake",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1": "Excellent",
        "level2": "Very good",
        "level3": "Not bad",
        "level4": "Needs work",
        "level5": "Try reading the unit again" // no comma here
    },
    "questions": [{ // Question 1 - Multiple Choice, Single True Answer
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "The weather is good today.",
            "correct": false
        }, {
            "option": "Is very hot today.",
            "correct": true
        }, {
            "option": "It is a lovely, sunny day.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> There is no subject in the sentence.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence with no subject.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "I am a vegetarian.",
            "correct": false
        }, {
            "option": "Because I am a vegetarian.",
            "correct": true
        }, {
            "option": "I don’t like to eat meat.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> The sentence begins with a conjunction.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which the sentence begins with a conjunction.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "I work in a small company.",
            "correct": false
        }, {
            "option": "My job is in a small company.",
            "correct": false
        }, {
            "option": "My job in a small company.",
            "correct": true
        }],
        "correct": "<p><span>That's right!</span> There is no verb in the sentence.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which there is no verb in the sentence.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "Playing basketball is David.",
            "correct": true
        }, {
            "option": "David is playing basketball.",
            "correct": false
        }, {
            "option": "David likes playing basketball.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> The subject and verb are in the wrong order.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which the subject and verb are in the wrong order.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "The sky is beautiful tonight.",
            "correct": false
        }, {
            "option": "The sky at night so beautiful.",
            "correct": true
        }, {
            "option": "I saw beautiful night skies in Asia.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> There is no verb in the sentence.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which there is no verb in the sentence.</p>" // no comma here

    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "I am very tired today.",
            "correct": false
        }, {
            "option": "The day was very tiring.",
            "correct": false
        }, {
            "option": "It is very tired today.",
            "correct": true
        }],
        "correct": "<p><span>That's right!</span> The subject in the sentence is wrong.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which the subject in the sentence is wrong.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "I always my homework in the evening.",
            "correct": true
        }, {
            "option": "Homework is important for students.",
            "correct": false
        }, {
            "option": "I don’t like doing homework late at night.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> There is no verb in the sentence.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which there is no verb in the sentence.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "The country is a little dangerous nowadays.",
            "correct": false
        }, {
            "option": "This country scary and dangerous.",
            "correct": true
        }, {
            "option": "Some countries are very dangerous to visit.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> There is no verb in the sentence.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which there is no verb in the sentence.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "But it was a very difficult language course.",
            "correct": true
        }, {
            "option": "I enjoyed the course, but it was difficult.",
            "correct": false
        }, {
            "option": "Learning a language is difficult.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> The sentence begins with a conjunction.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which the sentence begins with a conjunction.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "The restaurant is excellent.",
            "correct": false
        }, {
            "option": "It is the best restaurant in town.",
            "correct": false
        }, {
            "option": "Is a really wonderful restaurant.",
            "correct": true
        }],
        "correct": "<p><span>That's right!</span> There is no subject in the sentence.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which there is no subject in the sentence.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "The team always play in red shirts.",
            "correct": false
        }, {
            "option": "He football team plays in blue shirts this year.",
            "correct": true
        }, {
            "option": "They always play in blue and white shirts.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> The subject in the sentence is wrong.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which the subject in the sentence is wrong.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "Steve had a really bad experience in Tokyo.",
            "correct": false
        }, {
            "option": "The visit to Tokyo was a great experience.",
            "correct": false
        }, {
            "option": "Had a great time we in Tokyo.",
            "correct": true
        }],
        "correct": "<p><span>That's right!</span> The subject and verb are in the wrong order.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which the subject and verb are in the wrong order.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "And I bought the freshest fish at 6am.",
            "correct": true
        }, {
            "option": "I went to the market early and bought the freshest fish.",
            "correct": false
        }, {
            "option": "The freshest fish are always sold at 6am.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> The sentence begins with a conjunction.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which the sentence begins with a conjunction.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "The chicken curry is really good",
            "correct": false
        }, {
            "option": "The chicken curry tasty and delicious.",
            "correct": true
        }, {
            "option": "We enjoyed the chicken curry the most.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> There is no verb in the sentence.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which there is no verb in the sentence.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "Is living in New York my friend.",
            "correct": true
        }, {
            "option": "I have friends living in New York.",
            "correct": false
        }, {
            "option": "My friend wants me to move to New York.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> The subject and verb are in the wrong order.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which the subject and verb are in the wrong order.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "So my father bought some ice cream.",
            "correct": true
        }, {
            "option": "My father bought some ice cream.",
            "correct": false
        }, {
            "option": "He wanted to get ice cream.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> The sentence begins with a conjunction.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which the sentence begins with a conjunction.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "The orchestra practices on Saturday afternoon.",
            "correct": false
        }, {
            "option": "I play the trombone in the orchestra.",
            "correct": false
        }, {
            "option": "Used to like playing the saxophone.",
            "correct": true
        }],
        "correct": "<p><span>That's right!</span> There is no subject in the sentence.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which there is no subject in the sentence.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "They are beautiful mountains.",
            "correct": false
        }, {
            "option": "It is a beautiful mountain.",
            "correct": false
        }, {
            "option": "They is a beautiful mountain.",
            "correct": true
        }],
        "correct": "<p><span>That's right!</span> The subject in the sentence is wrong.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which the subject in the sentence is wrong.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "It’s a one-hour flight from London to Amsterdam.",
            "correct": false
        }, {
            "option": "Beautiful airport in Thailand.",
            "correct": true
        }, {
            "option": "The flight was very comfortable.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> There is no subject or verb in the sentence.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which there is no subject or verb in the sentence.</p>" // no comma here
    }, {
        "q": "Which sentence is incorrect?",
        "a": [{
            "option": "We always shopping in Ginza, Tokyo.",
            "correct": true
        }, {
            "option": "My mother goes shopping every Saturday.",
            "correct": false
        }, {
            "option": "I didn’t buy anything today.",
            "correct": false
        }],
        "correct": "<p><span>That's right!</span> There is no verb in the sentence.</p>",
        "incorrect": "<p><span>Incorrect.</span> Find the sentence in which there is no verb in the sentence.</p>" // no comma here
    }]
};
