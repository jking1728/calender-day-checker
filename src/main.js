import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getDay, checkValid, Year, } from './../src/backend.js'


$(document).ready(function(){
  $("#userDate").submit(function(e){
    e.preventDefault();
    $("outputDay").empty();
    let userMonth = $("#month").val();
    let userDay = $("#day").val();
    let userYear = $("#year").val();
    let year = new Year (userYear)
    year.checkLeapYear();
    let isValid = checkValid(userMonth, userDay, year)
    if (isValid === true) {
      let date = new Date (year, userMonth, userDay);
      $("#outputDay").text(getDay(date));
      $("#result").show();
    }else {
      $("#outputDay").text("The day you entered is not valid");
    }


  });
});
