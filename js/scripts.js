$(document).ready(function() {
  $("form#formy").submit(function(event) {
    event.preventDefault();
    $("span#nametarget").remove();
    $("p.answer").hide();
    
    let gryffindor = 0;
    let ravenclaw = 0;
    let slytherin = 0;
    let hufflepuff = 0;
    const name = $("input#name").val();
    $("p.answer").append("<span id=\"nametarget\"></span>");
    $("span#nametarget").text(name);
    //question 1
    if (parseInt($("select#question1").val()) === 1) {
      gryffindor += 1;
    }
    else if (parseInt($("select#question1").val()) === 2) {
      ravenclaw += 1;
    }
    else if (parseInt($("select#question1").val()) === 3) {
      slytherin += 1;
    }
    else if (parseInt($("select#question1").val()) === 4) {
      hufflepuff += 1;
    }
    //question 2
    if (parseInt($("select#question2").val()) === 1) {
      gryffindor += 1;
    }
    else if (parseInt($("select#question2").val()) === 2) {
      ravenclaw += 1;
    }
    else if (parseInt($("select#question2").val()) === 3) {
      slytherin += 1;
    }
    else if (parseInt($("select#question2").val() === 4)) {
      hufflepuff += 1;
    }
    //question 3
    if (parseInt($("select#question3").val()) === 1) {
      gryffindor += 1;
    }
    else if (parseInt($("select#question3").val()) === 2) {
      ravenclaw += 1;
    }
    else if (parseInt($("select#question3").val()) === 3) {
      slytherin += 1;
    }
    else if (parseInt($("select#question3").val()) === 4) {
      hufflepuff += 1;
    }
    //question 4
    if (parseInt($("select#question4").val()) === 1) {
      gryffindor += 1;
    }
    else if (parseInt($("select#question4").val()) === 2) {
      ravenclaw += 1;
    }
    else if (parseInt($("select#question4").val()) === 3) {
      slytherin += 1;
    }
    else if (parseInt($("select#question4").val()) === 4) {
      hufflepuff += 1;
    }
    //question 5
    if (parseInt($("select#question5").val()) === 1) {
      gryffindor += 1;
    }
    else if (parseInt($("select#question5").val()) === 2) {
      ravenclaw += 1;
    }
    else if (parseInt($("select#question5").val()) === 3) {
      slytherin += 1;
    }
    else if (parseInt($("select#question5").val()) === 4) {
      hufflepuff += 1;
    }
    
    if (gryffindor > ravenclaw && gryffindor > slytherin && gryffindor > hufflepuff) {
      $("p#answer-gryf").show();
    }
    else if (ravenclaw > gryffindor && ravenclaw > slytherin && ravenclaw > hufflepuff) {
      $("p#answer-raven").show();
    }
    else if (slytherin > gryffindor && slytherin > ravenclaw && slytherin > hufflepuff) {
      $("p#answer-slyth").show();
    }
    else if (hufflepuff > gryffindor && hufflepuff > ravenclaw && hufflepuff > slytherin) {
      $("p#answer-huff").show();
    }
    else {
      $("p#unclear").show();
    }
  });
});