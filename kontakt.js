// Definer vi en variable
const toggleButton = document.getElementById("togglePopup");

// definer en variable udenfor vores function "toggleContactForm", for at kunne ændre værdien.
let popupVisible = false;

//Click functionen tænder for js koden
toggleButton.addEventListener("click", function() {
    toggleContactForm();
});

function toggleContactForm () {
    const popupMenu = document.getElementById("popupMenu");
    const form = document.getElementById("kontaktForm");
    const emailInput = document.getElementById("email");
    const checkboxes = document.querySelectorAll(".valgmulighed");

    popupVisible = !popupVisible;
    
    if (popupVisible) {
        popupMenu.style.display = "block";
        toggleButton.textContent = "Flere alternativer ▲";
        
    } else {
        popupMenu.style.display = "none";
        toggleButton.textContent = "Flere alternativer ▼";
    }        
        
        // Event listener for form submit
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Forhindrer formularen i at blive sendt, så vi kan behandle dataene
            
            let email = emailInput.value;
            if (!email.includes("@")) {
                alert("Indtast venligst en gyldig e-mail");
                return;
            }
            
            let selectedMode = document.querySelector('input[name="mode"]:checked');
            let modeValue = selectedMode ? selectedMode.value : "Ingen valg"; // Hvis ingen er valgt, vises "Ingen valg" i consol.log return
            
            
            let valgmulighed = [];
            checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                valgmulighed.push(checkbox.value);
            }
        });
        
        // Opret userData objekt
        let userData = {
            email: email,
            mode: modeValue, // Valg herre/dame
            valgmulighed: valgmulighed // Checkbokse
        };
        
        console.log("Kundens userdata er nu gemt:", userData);
        alert("Tak for din tilmelding!");
    });
};