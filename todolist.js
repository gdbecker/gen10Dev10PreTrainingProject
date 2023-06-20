//Function for clearing errors of main form
function clearErrors() {
    for (var loopCounter = 0; loopCounter < document.forms["todolist"].elements.length; loopCounter++) {
      if (document.forms["todolist"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
        document.forms["todolist"].elements[loopCounter].parentElement.className = "form-group";
      }
    }
  }
  
  //Primary function for ToDo List assignment
  //Attached to "Submit" button
  function submitTask() {
    clearErrors();
  
    //Collect Task description and number of days to complete
    //Check to make sure that these are valid values for each field
    var task = document.forms["todolist"]["task"].value;
    if (task.value == "" || task.length == 0 || task == null) {
      alert("Please fill out the 'Task' field.");
      document.forms["todolist"]["task"]
        .parentElement.className = "form-group has-error";
      document.forms["todolist"]["task"].focus();
      return false;
    }
  
    var days = document.forms["todolist"]["days"].value;
    if (days == "") {
      alert("Please enter a number");
      document.forms["todolist"]["days"]
        .parentElement.className = "form-group has-error";
      document.forms["todolist"]["days"].focus();
      return false;
    } else if (isNaN(days)) {
      alert("Please enter a number");
      document.forms["todolist"]["days"]
        .parentElement.className = "form-group has-error";
      document.forms["todolist"]["days"].focus();
      return false;
    } else if (days < 1) {
      alert("Please select a value that is no less than 1.");
      document.forms["todolist"]["days"]
        .parentElement.className = "form-group has-error";
      document.forms["todolist"]["days"].focus();
      return false;
    }
  
    //Define key variables and initialize them
    var taskDescription = task; //String variable for taskDescription
    var daysToComplete = 0; //String variable for daysToComplete
    daysToComplete = Number(days); //Number variable for daysToComplete
  
    //Define the type of alert to show to screen based on number of days to complete task
    var alertType = null;
  
    if (daysToComplete < 3) {
      alertType = "alert alert-danger alert-dismissible"; //red
    } else if ((daysToComplete < 7) && (daysToComplete >= 3)) {
      alertType = "alert alert-warning alert-dismissible"; //yellow
    } else {
      alertType = "alert alert-secondary alert-dismissible"; //gray
    }
  
    //Append new alert code to the existing div
    var div = document.getElementById("alerts");
    div.innerHTML += '<div class="' + alertType + '" role="alert" style="margin-left: 7.5px; margin-right: 7.5px; margin-bottom: 15px">' + taskDescription + '<br/>' + daysToComplete + ' day(s)<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
  
    document.forms["todolist"]["task"].value = "";
    document.forms["todolist"]["days"].value = "";
  
    return false;
  }