angular.module("kbushInspire", [])
  .controller("mainController", function ($scope, $sce)
  {
    $scope.colorsArray = ["Red", "Green", "Blue"];

     $scope.yourName = "";
     $scope.showFrame = false;



        $scope.questArray1 = [
      {id: "1", answer: "I keep saying Big Data but nothings happening", ranking:1},
      {id: "2", answer: "I'm getting alot of 'Leadership' from my Boss right now", ranking:2},
      {id: "3", answer: "I need 7 perpendicular red lines", ranking:3},
      {id: "4", answer: "I'm drinking all this Kool-Aid...and its delicious", ranking:4}

    ];

    currentQuestValue = $scope.questArray1;

        $scope.questArray2 = [
      {id: "1", answer: "They're chattel to be crushed under my intellectual boot", ranking: 1,},
      {id: "2", answer: "There's no 'I' in team. But there's one in Ass Kisser", ranking: 2},
      {id: "3", answer: "We do Lean Startup book readings on the weekend", ranking: 3},
      {id: "4", answer: "Responsive Design Responsive Design...sorry what was the question?", ranking: 4}

    ];

           $scope.questArray3 = [
      {id: "1", answer: "Code: Its not a bug. Its a feature.", ranking: 1,},
      {id: "2", answer: "Management: Leadership. It's kind of a big deal.", ranking: 2},
      {id: "3", answer: "Compliance: I got 99 problems, but a snitch ain't one.", ranking: 3},
      {id: "4", answer: "Marketing: Its like sales...with friggin lasers.", ranking: 4}

    ];

    

    $scope.kateUpdateScore = function(ranking) {
    // When a new selection is made, update course object on scope
    // and trigger recalculation of overall GPA

    energySelectValue = ranking;
    

    console.log(energySelectValue, innovationSelectValue);
    $scope.totalCalculate();
  
		};

	 $scope.innoUpdateScore = function(ranking1) {
    // When a new selection is made, update course object on scope
    // and trigger recalculation of overall GPA

   
    innovationSelectValue = ranking1;

    console.log(energySelectValue, innovationSelectValue);
    $scope.totalCalculate();
  
		};

	 $scope.chuckUpdateScore = function(ranking2) {
    // When a new selection is made, update course object on scope
    // and trigger recalculation of overall GPA

   
    chuckSelectValue = ranking2;

    console.log(energySelectValue, innovationSelectValue, chuckSelectValue);
    $scope.totalCalculate();
  
		};


	  $scope.totalCalculate = function() {
    // Recalculate GPA on every dropdown change.
    var total_units = 0;
    var total_score = 0;

    total_score = total_score + energySelectValue + innovationSelectValue + chuckSelectValue;
    console.log(total_score);

  };
  	
 


      $scope.getRanking = function(){
      	var total_units = 0;
  		var total_score = 0;
		total_score = total_score + energySelectValue + innovationSelectValue + chuckSelectValue;
	  	
	  
	  	$scope.showFrame = true;	

	  	if(total_score < 5) {
	  	$scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/wp43OdtAAkM');
	  	$scope.kateSays ="you're struggling up that innovation hill. You're zigging when you should be zagging. Remember, if at first you don't succeed, just call it version 1.0.";
	  }
	  	else if(total_score <7) {
	  	$scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/VerK4zwMRQw');	
	  	$scope.kateSays ="your project is dogging it and the bosses want an update. Just tell them you're 'Agile' and it doesn't work like that. Then add a few more pink stickies to your Kanban board.";
	  	}

      else if(total_score <9) {
      $scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/-1pMMIe4hb4');  
      $scope.kateSays ="your MVP is wuthering and you got no PMF. Retweet ten Techcrunch articles with 'John 3:16' and drink lots of water to get your mojo back.";
      }

	  	else if(total_score <11) {
	  	$scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/VzlofSthVwc');	
	  	$scope.kateSays ="you're thinking too small and it's suffocating you. Get back on that horse and make a few Powerpoint decks about some really crazy stuff. Like mobile web. #YOLO";
	  	}

	  	else {
	  	$scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/6xckBwPdo1c');		
	  	$scope.kateSays ="what's the problem? You've got no problem! You're as disruptive as my old Babooshka. Go on then, tell me about your revolutionary mobile social network idea again!";					
	  	}

    	};




      $scope.reset = function(){
      	var total_units = 0;
  		var total_score = 0;
		total_score = total_score + energySelectValue + innovationSelectValue + chuckSelectValue;
	  	alert(total_score);
	  
	  	$scope.showFrame = $scope.showFrame === false ? true: false;	

    	};

  		

	  	



	


     $scope.questObject0= {
			"I hate you all." : 1,
			"Lost my job, my girl and my dog" : 2,
			"I just found my red stapler" : 3,
			"Aced that powerpoint presentation" : 4,
			"Big data!" : 5
		};
     


  });
