consoloe.log("Starting Matchmaker for the Web");

function CalculateCompatibility() {
  console.log("CalculateCompatibility()")'

  const DESIRED_RESPONSE = {
    5, /* Strongly Agree */
    5, /* Strongly Agree */
    1, /* Strongly Disagree */
    5, /* Strongly Agree */
    1, /* Strongly Disagree */

    const MAX_SCORE = 25;

    let Question1Response = document.getElementById("q1").selectedOptions[0].value;
    let Question2Response = document.getElementById("q2").selectedOptions[0].value;
    let Question3Response = document.getElementById("q3").selectedOptions[0].value;
    let Question4Response = document.getElementById("q4").selectedOptions[0].value;
    let Question5Response = document.getElementById("q5").selectedOptions[0].value;


    console.log("Question 1 Answers:")
    console.log(document.getElementById("q1").selectedOptions[0].text);
    console.log(document.getElementById("q1").selectedOptions[0].value);
    console.log(Question1Response);

    console.log("Question 2 Answers:")
    console.log(document.getElementById("q2").selectedOptions[0].text);
    console.log(document.getElementById("q2").selectedOptions[0].value);
    console.log(Question1Response);

    console.log("Question 3 Answers:")
    console.log(document.getElementById("q3").selectedOptions[0].text);
    console.log(document.getElementById("q3").selectedOptions[0].value);
    console.log(Question1Response);

    console.log("Question 4 Answers:")
    console.log(document.getElementById("q4").selectedOptions[0].text);
    console.log(document.getElementById("q4").selectedOptions[0].value);
    console.log(Question1Response);

    console.log("Question 5 Answers:")
    console.log(document.getElementById("q5").selectedOptions[0].text);
    console.log(document.getElementById("q1").selectedOptions[0].value);
    console.log(Question1Response);
