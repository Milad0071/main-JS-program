const num = 1;

function editTest() {

   document.getElementById("submit-test").classList.remove("d-none")
   document.getElementById('quest-creator').classList.add("d-none")

}

function validationFunction() {



   document.getElementById('name-error').classList.add("d-none");
   document.getElementById('sub-date-error').classList.add("d-none");
   document.getElementById('run-date-error').classList.add("d-none");
   document.getElementById('quest-num-error').classList.add("d-none");

   let testName = document.forms["testForm"]["testName"].value;
   let testSubDate = document.forms["testForm"]["testSubDate"].value;
   let testRunDate = document.forms["testForm"]["testRunDate"].value;
   let testًQuestNum = document.forms["testForm"]["testًQuestNum"].value;


   let validation = true;
   if (testName === "") {


      document.getElementById('name-error').innerHTML = 'لطفاً نام آزمون را وارد کنید.';
      document.getElementById('name-error').classList.remove("d-none");
      validation = false;

   }

   if (testSubDate === "") {


      document.getElementById('sub-date-error').innerHTML = 'لطفاً تاریخ ثبت آزمون را وارد کنید.';
      document.getElementById('sub-date-error').classList.remove("d-none");
      validation = false;

   }

   if (testRunDate === "") {


      document.getElementById('run-date-error').innerHTML = 'لطفاً تاریخ برگزاری آزمون را وارد کنید.';
      document.getElementById('run-date-error').classList.remove("d-none");
      validation = false;

   }

   if (testًQuestNum === "") {


      document.getElementById('quest-num-error').innerHTML = 'لطفاً تعداد سؤالات آزمون را وارد کنید.';
      document.getElementById('quest-num-error').classList.remove("d-none");
      validation = false;

   }

   if (validation) {

      let table = document.getElementById('main-table')

      table.innerHTML = `<tr id="class-name-${num}"> 
      <td scope="col">${num}</td>
      <td scope="col">${testName}</td>
      <td scope="col">${testSubDate}</td>
      <td scope="col">${testRunDate}</td>
      <td scope="col">${testًQuestNum}</td>
      <td scope="col">
      
         <input id="question-creator-button" type="button" value="ایجاد سؤال" onclick="createQuestionFunction()">
         <input id="run-test" class="d-none" type="button" value="برگزاری آزمون" onclick="runTestFunction()">
         <p id="run-text" class="d-none">در حال برگزاری</p>
         
      </td>
      <td scope="col" >
         
         <span class="trash fa fa-trash text-danger" onclick="deleteRow(${num})"></span>
         <span class="fa fa-edit text-primary" onclick="editTest()")</span>
         
      </td>
   
      </tr>`;
      document.getElementById("submit-test").classList.add("d-none")
   }

}

function deleteRow(row) {
   Swal.fire({
      title: 'مطمئنید؟',
      text: "در صورت تأیید، امکان بازگشت وجود ندارد!",
      icon: 'هشدار',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'بله حذف شود',
      cancelButtonText: 'لغو',
   }).then((result) => {
      if (result.isConfirmed) {
         document.getElementById(`class-name-${row}`).remove()
         Swal.fire({
            title: 'پیغام سیستم',
            text: "آزمون با موفقیت حذف شد",
            icon: 'success',

         })
      }
   })

}

function createQuestionFunction() {

   document.getElementById('quest-creator').classList.remove("d-none");
   document.getElementById("text-box").classList.remove("d-none")
   document.getElementById("tests").classList.remove("d-none")
   document.getElementById("next-question").classList.remove("d-none")
   document.getElementById("submit-questions").classList.add("d-none")
   document.getElementById("finish-questions").classList.add("d-none")
   document.getElementById('question-creator-button').classList.add("d-none");

}

let questions = [];

function nextQuestionFunction() {

   let questionNumber = document.getElementById("question-number")
   let questionsCount = document.getElementById("test-quest-num").value


   if (questionNumber.value <= questionsCount) {


      document.getElementById("previous-question").classList.add("d-none")
      if (questionNumber.value == questionsCount) {

         document.getElementById("text-box").classList.add("d-none")
         document.getElementById("tests").classList.add("d-none")
         document.getElementById("next-question").classList.add("d-none")
         document.getElementById("submit-questions").classList.remove("d-none")
         document.getElementById("finish-questions").classList.remove("d-none")
         document.getElementById("previous-question").classList.remove("d-none")
      }

      document.getElementById('questText-error').classList.add("d-none");
      document.getElementById('questTest-error').classList.add("d-none");
      document.getElementById('testBox-error').classList.add("d-none");


      let questText = document.forms["questionForm"]["questText"].value;
      let test1 = document.forms["questionForm"]["test1"].value;
      let test2 = document.forms["questionForm"]["test2"].value;
      let test3 = document.forms["questionForm"]["test3"].value;
      let test4 = document.forms["questionForm"]["test4"].value;
      let number = questionNumber.value;
      let answer = document.querySelector('input[name="testBox"]:checked');


      let validation = true;
      if (questText === "") {

         document.getElementById('questText-error').innerHTML = 'لطفاً متن سوال را وارد کنید.';
         document.getElementById('questText-error').classList.remove("d-none");
         validation = false;

      }

      if (test1 === "" || test2 === "" || test3 === "" || test4 === "") {

         document.getElementById('questTest-error').innerHTML = 'لطفاً تمام گزینه‌ها را وارد کنید.';
         document.getElementById('questTest-error').classList.remove("d-none");
         validation = false;

      }

      if (answer === null) {

         document.getElementById('testBox-error').innerHTML = 'لطفاً پاسخ صحیح را انتخاب کنید.';
         document.getElementById('testBox-error').classList.remove("d-none");
         validation = false;

      } else {

         answer = document.querySelector('input[name="testBox"]:checked').value

      }




      function nextQuestionFunction(questionText, questionTest1, questionTest2, questionTest3, questionTest4, number, answer) {

         this.questionText = questionText
         this.questionTest1 = questionTest1
         this.questionTest2 = questionTest2
         this.questionTest3 = questionTest3
         this.questionTest4 = questionTest4
         this.number = number
         this.answer = answer

      }

      if (validation) {

         var consoleQuestion = new nextQuestionFunction(questText, test1, test2, test3, test4, number, answer)

         document.getElementById('questionText').value = ""
         document.getElementById('qText1').value = ""
         document.getElementById('qText2').value = ""
         document.getElementById('qText3').value = ""
         document.getElementById('qText4').value = ""
         document.querySelector('input[name="testBox"]:checked').checked = false;
         questionNumber.value++;
         document.getElementById("previous-question").classList.remove("d-none")


         questions[number] = consoleQuestion;
         console.log(consoleQuestion, questions)

      }
   }


   questions.forEach(function (item) {

      console.log(item.answer)
   })


}

function finalSubmit() {

   document.getElementById('previous-question').classList.add("d-none")
   document.getElementById('submit-questions').classList.add("d-none")
   document.getElementById("run-test").classList.remove("d-none")
   document.getElementById("finish-questions").classList.add("d-none")


   Swal.fire(
      'سؤالات با موفقیت ثبت شدند.'
   );

}

function previousQuestionFunction() {

   let questionNumber = document.getElementById("question-number")
   let questionsCount = document.getElementById("test-quest-num").value

   let question = questions [--questionNumber.value]

   document.getElementById("finalSubmit").classList.add("d-none")
   document.getElementById("finish-questions").classList.add("d-none")

   if (questionNumber.value < questionsCount) {

      if (questionNumber.value == 1) {

         document.getElementById("next-question").classList.remove ("d-none")
         document.getElementById("previous-question").classList.add("d-none")

      }

      document.getElementById("text-box").classList.remove("d-none")
      document.getElementById("tests").classList.remove("d-none")
      document.getElementById("next-question").classList.remove("d-none")
      document.getElementById("submit-questions").classList.add("d-none")
      document.getElementById("finish-questions").classList.add("d-none")
      document.getElementById("previous-question").classList.remove("d-none")
      
      

      if (question !== undefined) {

      document.forms["questionForm"]["questText"].value = questions [questText]
      document.forms["questionForm"]["test1"].value = questions [test1]
      document.forms["questionForm"]["test2"].value = questions [test2]
      document.forms["questionForm"]["test3"].value = questions [test3]
      document.forms["questionForm"]["test4"].value = questions [test4]
      document.querySelector('input[name="testBox"]:checked') = answer

      }
      
   }

}

function runTestFunction() {

   document.getElementById('answer-section').classList.remove("d-none")
   document.getElementById("run-test").classList.add("d-none")
   document.getElementById("run-text").classList.remove("d-none")
   document.getElementById("previous-answer").classList.add("d-none")
   nextAnswer();

}


function nextAnswer() {

   let answerNumber = document.getElementById("answer-number").value


   let question = questions[answerNumber];

   if (question !== undefined) {

      if (answerNumber > 1) {

         let user_answer = document.querySelector('input[name="testBox"]:checked').value
         questions[answerNumber - 1]['userAnswer'] = user_answer;

         document.getElementById("previous-answer").classList.remove("d-none")

      }

      document.getElementById('answer-content').innerHTML = `
      <div class="form-group">
         <label id="question-text">${question.questionText}</label>
      </div>
      <div class="form-check">
         <span class="m-5">
            <label for="answer1" id="answer-1-text" class = "ml-2">${question.questionTest1}</label>
            <input class="form-check-input mr-2" type="radio" name="testBox" id="answer1" value="option1">
         </span>
         <span class="m-5">
            <label for="answer2" id="answer-2-text" class = "ml-2">${question.questionTest2}</label>
            <input class="form-check-input mr-2" type="radio" name="testBox" id="answer2" value="option2">
         </span>
         <span class="m-5">
            <label for="answer3" id="answer-3-text" class = "ml-2">${question.questionTest3}</label>
            <input class="form-check-input mr-2" type="radio" name="testBox" id="answer3" value="option3">
         </span>
         <span class="m-5"> 
            <label for="answer4" id="answer-4-text" class = "ml-2">${question.questionTest4}</label>
            <input class="form-check-input mr-2" type="radio" name="testBox" id="answer4" value="option4">
         </span>
      </div>
      `;

      question = questions[++answerNumber];
      if (question == undefined) {
         document.getElementById("next-answer").classList.add("d-none")
         document.getElementById("submit-answers").classList.remove("d-none")
      }
      else {
         document.getElementById("answer-number").value++
      }
   }

}


function previousAnswer() {

   document.getElementById("submit-answers").classList.add("d-none")

   let answerNumber = document.getElementById("answer-number").value

   let question = questions[--answerNumber];


   if (question !== undefined) {

      if (answerNumber == 1) {

         document.getElementById("previous-answer").classList.add("d-none")
         document.getElementById("next-answer").classList.remove("d-none")

      }

      document.getElementById('answer-content').innerHTML = `
      <div class="form-group">
         <label id="question-text">${question.questionText}</label>
      </div>
      <div class="form-check">
         <span class="m-5">
            <label for="answer1" id="answer-1-text" class = "ml-2">${question.questionTest1}</label>
            <input class="form-check-input mr-2" type="radio" name="testBox" id="answer1" value="option1">
         </span>
         <span class="m-5">
            <label for="answer2" id="answer-2-text" class = "ml-2">${question.questionTest2}</label>
            <input class="form-check-input mr-2" type="radio" name="testBox" id="answer2" value="option2">
         </span>
         <span class="m-5">
            <label for="answer3" id="answer-3-text" class = "ml-2">${question.questionTest3}</label>
            <input class="form-check-input mr-2" type="radio" name="testBox" id="answer3" value="option3">
         </span>
         <span class="m-5"> 
            <label for="answer4" id="answer-4-text" class = "ml-2">${question.questionTest4}</label>
            <input class="form-check-input mr-2" type="radio" name="testBox" id="answer4" value="option4">
         </span>
      </div>
      `;


   }

}

function submitAnswers() {

   let answerNumber = document.getElementById("answer-number").value
   let user_answer = document.querySelector('input[name="testBox"]:checked').value
   questions[answerNumber]['userAnswer'] = user_answer;

   console.log(questions)


   let sum = 0;
   let answer = 0;
   questions.forEach(function (question) {
      sum++;
      if (question.userAnswer === question.answer) {
         answer++;
      }
   })
   answer = (answer * 100) / sum

   if (answer > 70) {
      Swal.fire({
         text: 'نتیجه آزمون: ' + answer,
         title: 'قبول در آزمون',
         icon: 'success'
      })
   } else {
      Swal.fire({
         text: 'نتیجه آزمون: ' + answer,
         title: 'مردود در آزمون',
         icon: 'error'
      })
   }

}


