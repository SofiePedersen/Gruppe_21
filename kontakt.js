$(document).ready(function() {
    let popupVisible = false;

    $("#togglePopup").on("click", function() {
        popupVisible = !popupVisible;
        $("#popupMenu").slideToggle();
        $(this).text(popupVisible ? "Flere alternativer ▲" : "Flere alternativer ▼");
    });
    
});