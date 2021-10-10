// var activityComment = {
    // comment: comment.value
// }

// localStorage.setItem("activityComment", JSON.stringify(activityComment));
// renderMessage();


$(document).ready(function(){
    var currentDayEl = document.getElementById("currentDay");
    var currentDay = moment().format("MMM Do, YYYY");
    currentDayEl.textContent = currentDay;
    $(".saveBtn").on("click", function(){
    var activity = $(this).siblings(".description").val();
    console.log(activity);
    })
})

