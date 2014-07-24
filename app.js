$(document).ready(function() {

/**********************************************
Global Variables
***********************************************/
	var i = 0;
	var numberCorrect = 0;

/**********************************************
Question Constructor
***********************************************/
	function Question(question, choice1, choice2, choice3, choice4, answer) {
		this.question = question;
		this.choice1  = choice1;
		this.choice2  = choice2;
		this.choice3  = choice3;
		this.choice4  = choice4;
		this.answer   = answer;
		this.getAnswer = function() {
			return answer;
		};
	}


/**********************************************
Health Quiz Question Builder
***********************************************/
	var healthQuiz = new Array();
	healthQuiz[0] = new Question(
		"How did Ma and Pa first meet?","A) In church","B) At school","C) Through Flores at Pa's lola's place, at a religous event offering fresh flowers at month of May","D) At a school dance","c");
	healthQuiz[1] = new Question("Where did Pa hang out all the time to hang with ma?", "A) Fish store, Ma was a good at fishing and sold fish there", "B) At the Park near ma's house.  Ma was always sitting near the water sunbathing", "C) Record store.  They were always browsing and listening to the latest hits that played", "D) Convenience Store - Owned by Ma's mom, she would always come out when Pa came to buy something", "d");
	healthQuiz[2] = new Question("How long after they met did ma and pa start going out?", "A) 2 years", "B) 3 years", "C) 5 years", "D) 7 years", "d");
	healthQuiz[3] = new Question("How long were they together before they got married?", "A) 1 year", "B) 2 years", "C) 3 years", "D) 4 years", "b");
	healthQuiz[4] = new Question("What romantic things did Pa do to woo Ma?", "A) Love poem", "B) Flowers", "C) singing telegram", "D) A romantic drawing", "a");
	healthQuiz[5] = new Question("How did Pa propose to ma", "A) During romantic dinner", "B) A letter", "C) Proposed at a family gathering", "D) Through ESP", "b");
	healthQuiz[6] = new Question("Where did pa and ma get married?", "A) Quezon City", "B) Cebu", "C) Manila", "D) Calabanga", "d");
	healthQuiz[7] = new Question("What did ma study in school?", "A) Chemical Engineering", "B) Economics", "C) Law", "D) Computer Science", "a");
	healthQuiz[8] = new Question("What did pa study in school?", "A) Science", "B) Law", "C) Business", "D) All of the above", "d");
	healthQuiz[9] = new Question("what is Pa's favourite dish that Ma cooks?", "A) Ganeeling", "B) Sinagang", "C) Sotanghon", "D) Springrolls", "c");



/**********************************************
Pre-populate Fields (maybe have a pre-populate fields function)
***********************************************/
	if(i == 0) {
		$("#question-number>span").text((i+1));
		$("#status-box>span").text(i);
		$("#question-container").empty().text(healthQuiz[i].question);
		$("li#a").empty().text(healthQuiz[i].choice1);
		$("li#b").empty().text(healthQuiz[i].choice2);
		$("li#c").empty().text(healthQuiz[i].choice3);
		$("li#d").empty().text(healthQuiz[i].choice4);
	}




/**********************************************
Listen For Answer
***********************************************/
	$(this).on("click", "#choices > li", function() {
		if(i >= 0 && i <= 9) {
			if($(this).attr("id") == healthQuiz[i].answer) {
				$("#pop-up-bg").css({"display":"block"});
				$("#pop-up-correct").css({"display":"block"});
				i++;
				numberCorrect += 1;
				if(i == 10) {
					$("#pop-up-bg").css({"display":"block"});
					$("#pop-up-end").css({"display":"block"});
					$("#result>span").text((numberCorrect * 10) + "%");
					return;
				}
				$("#question-number>span").text((i+1));
				$("#status-box>span").text(numberCorrect);
				$("#question-container").empty().text(healthQuiz[i].question);
				$("li#a").empty().text(healthQuiz[i].choice1);
				$("li#b").empty().text(healthQuiz[i].choice2);
				$("li#c").empty().text(healthQuiz[i].choice3);
				$("li#d").empty().text(healthQuiz[i].choice4);

			}
			else {
				$("#pop-up-bg").css({"display":"block"});
				$("#pop-up-incorrect").css({"display":"block"});
				i++;
				if(i == 10) {
					$("#pop-up-bg").css({"display":"block"});
					$("#pop-up-end").css({"display":"block"});
					$("#result>span").text((numberCorrect * 10) + "%");
					return;
				}
				$("#question-number>span").text((i+1));
				$("#question-container").empty().text(healthQuiz[i].question);
				$("li#a").empty().text(healthQuiz[i].choice1);
				$("li#b").empty().text(healthQuiz[i].choice2);
				$("li#c").empty().text(healthQuiz[i].choice3);
				$("li#d").empty().text(healthQuiz[i].choice4);
			}
	    }
	});


/**********************************************
Next Button
***********************************************/
	$(this).on("click", "#next-button", function() {
		$(this).closest("#pop-up-bg").css({"display":"none"});
		$("#pop-up-correct").css({"display":"none"});
		$("#pop-up-incorrect").css({"display":"none"});
		$("#pop-up-end").css({"display":"none"});
	});


/**********************************************
Start Over.
***********************************************/
    $(this).on("click", "#start-over", function() {
    	i = 0;
    	numberCorrect = 0;
    	$("#question-number>span").text((i+1));
    	$("#status-box>span").text(numberCorrect);
    	$("#question-container").empty().text(healthQuiz[i].question);
		$("li#a").empty().text(healthQuiz[i].choice1);
		$("li#b").empty().text(healthQuiz[i].choice2);
		$("li#c").empty().text(healthQuiz[i].choice3);
		$("li#d").empty().text(healthQuiz[i].choice4);
    });

    $(this).on("click", "#restartBtn", function() {
    	$(this).closest("#pop-up-bg").css({"display":"none"});
		$("#pop-up-correct").css({"display":"none"});
		$("#pop-up-incorrect").css({"display":"none"});
		$("#pop-up-end").css({"display":"none"});

		i = 0;
    	numberCorrect = 0;
    	$("#question-number>span").text((i+1));
    	$("#status-box>span").text(numberCorrect);
    	$("#question-container").empty().text(healthQuiz[i].question);
		$("li#a").empty().text(healthQuiz[i].choice1);
		$("li#b").empty().text(healthQuiz[i].choice2);
		$("li#c").empty().text(healthQuiz[i].choice3);
		$("li#d").empty().text(healthQuiz[i].choice4);
    });

});