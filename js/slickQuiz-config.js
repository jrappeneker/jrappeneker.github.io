// Setup your quiz text and questions here
// NOTE: pay attention to commas, IE struggles with those bad boys
var quizJSON = {
    "info": {
        "name": "Unit 3",
        "main": "Quiz 3 – Finish the sentence",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1": "Excellent",
        "level2": "Very good",
        "level3": "Not bad",
        "level4": "Needs work",
        "level5": "Try reading the unit again" // no comma here
    },
    "questions": [
	{ "q": "I like studying, but . . .", "a":[{
	"option":"Peter likes studying, too.", "correct":false }, {
	"option":"I don’t like doing homework.", "correct":true }, {
	"option":"I like speaking English.", "correct":false }], "correct":"Well done!", "incorrect":"Oh no!"},
	{ "q": "I lost my purse, so …", "a":[{
	"option":"I went to the police.", "correct":true }, {
	"option":"I lost my handbag.", "correct":false }, {
	"option":"I didn’t lose my handbag.", "correct":false }], "correct":"Well done!", "incorrect":"Oh no!"},
	
		{ "q": "We might go swimming, or …", "a":[{
	"option":"we won’t go the park.", "correct":false }, {
	"option":"then we will go to the park.", "correct":false }, {
	"option":"we might go to the park.", "correct":true }], "correct":"Well done!", "incorrect":"Oh no!"},
	
	{ "q": "My dad bought a DVD, and …", "a":[{
	"option":"he didn’t buy another one.", "correct":false }, {
	"option":"I didn’t buy anything.", "correct":false }, {
	"option":"my mum bought a book.", "correct":true }], "correct":"Well done!", "incorrect":"Oh no!"},
		
	{ "q": "It was very cold, but …", "a":[{
	"option":"the children played football.", "correct":true }, {
	"option":"it was snowing.", "correct":false }, {
	"option":"we didn’t play outside.", "correct":false }], "correct":"Well done!", "incorrect":"Oh no"},
	
	{ "q": "I failed the writing test, so …", "a":[{
	"option":"I also failed the speaking test.", "correct":false }, {
	"option":"I passed the speaking test.", "correct":false }, {
	"option":"I have to take the test again.", "correct":true }], "correct":"Well done!", "incorrect":"Oh no!"},
		
	
	{ "q": "You should hurry, or …", "a":[{
	"option":"you will miss the train.", "correct":true }, {
	"option":"you will not miss the train.", "correct":false }, {
	"option":"you will catch the train.", "correct":false }], "correct":"Well done!", "incorrect":"Oh no!"},
		
	{ "q": "My sister cooked the meal, and …", "a":[{
	"option":"neither did I.", "correct":false }, {
	"option":"I made the dessert.", "correct":true }, {
	"option":"she didn’t make the dessert.", "correct":false }], "correct":"Well done!", "incorrect":"Oh no!"},


	{ "q": "I don’t like horror movies, but …", "a":[{
	"option":"I like comedies.", "correct":true }, {
	"option":"I don’t like romantic movies.", "correct":false }, {
	"option":"I never watch them.", "correct":false }], "correct":"Well done!", "incorrect":"Oh no!"},
	
	{ "q": "My teacher is from England, so …", "a":[{
	"option":"she doesn’t live in London.", "correct":false }, {
	"option":"she comes from London.", "correct":false }, {
	"option":"I asked her about it.", "correct":true }], "correct":"Well done!", "incorrect":"Oh no!"},
	
		
	{ "q": "You should stop that, or …", "a":[{
	"option":"you will get angry.", "correct":false }, {
	"option":"I will get angry.", "correct":true }, {
	"option":"I will not get angry.", "correct":false }], "correct":"Well done!", "incorrect" :"Oh no!"},
		
	{ "q": "My sister works in an office, and …", "a":[{
	"option":"my brother doesn’t work in an office.", "correct":false }, {
	"option":"my brother works in a bank.", "correct":true }, {
	"option":"she doesn’t work in a bank.", "correct":false }], "correct":"Well done!", "incorrect":"Oh no!"},
	
		
	
	{ "q": "The food was great, but …", "a":[{
	"option":"it was too expensive.", "correct":true }, {
	"option":"we enjoyed it very much.", "correct":false }, {
	"option":"it was delicious..", "correct":false }], "correct":"Well done!", "incorrect":"Oh no!"},
	
	{ "q": "I am vegetarian, so …", "a":[{
	"option":"I don’t like vegetables.", "correct":false }, {
	"option":"I eat a lot of vegetables.", "correct":true }, {
	"option":"I like eating meat.", "correct":false }], "correct":"Well done!", "incorrect":"Oh no!"},
	
	{ "q": "I often go to the pool on Saturday, or …", "a":[{
	"option":"I don’t like swimming very much.", "correct":false }, {
	"option":"I like swimming.", "correct":false }, {
	"option":"I go to the gym.", "correct":true }], "correct":"Well done!", "incorrect":"Oh no!"},
	
	{ "q": "I was born in England, and …", "a":[{
	"option":"I didn’t grow up there.", "correct":false }, {
	"option":"I don’t live there now.", "correct":false }, {
	"option":"I have always lived there.", "correct":true }], "correct":"Well done!", "incorrect":"Oh no!"},
	
	{ "q": "He is very rich, but …", "a":[{
	"option":"he is not very happy.", "correct":true }, {
	"option":"he has a big house.", "correct":false }, {
	"option":"he is not poor.", "correct":false }], "correct":"Well done!", "incorrec":"Oh no!"},
	
		
	
	{ "q": "We worked from 9 a.m. until midnight, so …", "a":[{
	"option":"we were not very tired.", "correct":false }, {
	"option":"we were very tired.", "correct":true }, {
	"option":"that was all day.", "correct":false }], "correct":"Well done!", "incorrect":"Oh no!"},
	
	{ "q": "I have to study hard, or …", "a":[{
	"option":"I will pass the test.", "correct":false }, {
	"option":"I can pass the test.", "correct":false }, {
	"option":"I will not pass the test.", "correct":true }], "correct":"Well done!", "incorrect":"Oh no!"},
	
	{ "q": "Mr Jones speaks Spanish, and … ", "a":[{
	"option":"his wife does not speak Spanish.", "correct":false }, {
	"option":"his wife speaks French.", "correct":true }, {
	"option":"he does not speak French.", "correct":false }], "correct":"Well done!", "incorrect":"Oh no!"}
    ]
};
