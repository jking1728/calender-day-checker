import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getDay, checkValid, Year, } from './../src/backend.js';


$(document).ready(function(){
  $("#userDate").submit(function(e){
    e.preventDefault();
    $("outputDay").empty();
    let userMonth = parseInt($("#month").val());
    let userDay = parseInt($("#day").val());
    let userYear = parseInt($("#year").val());
    let year = new Year (userYear);
    year.checkLeapYear();
    let isValid = checkValid(userMonth, userDay, year);
    if (isValid === true) {
      let date = new Date (userYear, userMonth, userDay);
      $("#outputDay").text(getDay(date));
      $("#result").show();
    }else {
      $("#result").show();
      $("#outputDay").text("is not a valid date");
    }


  });
});
