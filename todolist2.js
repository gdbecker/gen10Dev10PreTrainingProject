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
  
    //Get tomorrow's date
    var today = new Date()
    var tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
  
    //Format tomorrow's 
  
    var date = new Date();
    date = document.getElementById("date").valueAsDate;
  
    //Calculate days to complete the task
    var daysToComplete = Number(Math.round((date - today) / (1000 * 60 * 60 * 24))) + 1
  
    if (date == "") {
      alert("Please fill out this field");
      document.forms["todolist"]["date"]
        .parentElement.className = "form-group has-error";
      document.forms["todolist"]["date"].focus();
      return false;
    } else if (daysToComplete < 0) {
      alert("Value must be " + tomorrow.toLocaleDateString("en-US") + " or later.");
      document.forms["todolist"]["date"]
        .parentElement.className = "form-group has-error";
      document.forms["todolist"]["date"].focus();
      return false;
    }
  
    //Define key variables and initialize them
    var taskDescription = task; //String variable for taskDescription
  
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
    div.innerHTML += '<div class="' + alertType + '" role="alert" style="margin-left: 7.5px; margin-right: 7.5px; margin-bottom: 15px">' + taskDescription + '<br/>Due: ' + date.toLocaleDateString("en-US") + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
  
    document.forms["todolist"]["task"].value = "";
    document.forms["todolist"]["date"].value = "";
  
    return false;
  }