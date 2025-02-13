
document.addEventListener("DOMContentLoaded", function () {
    const userIcon = document.getElementById("userIcon");
    
    let isDropdownOpen = false;
    
    //  Opret dropdown-menu dynamisk
    const dropdownMenu = document.createElement("div");
    dropdownMenu.id = "dropdownMenu";
    dropdownMenu.style.display = "none";

    //  "Log ind"-knappen (Sort baggrund, hvid skrift)
    const loginBtn = document.createElement("a");
    loginBtn.href = "#";
    loginBtn.textContent = "Log ind";
    loginBtn.classList.add("login-btn");
    dropdownMenu.appendChild(loginBtn);
    
    //  "Tilmeld dig" med separat tekst
    const registerWrapper = document.createElement("div");
    registerWrapper.classList.add("register-wrapper");
    
    const registerLink = document.createElement("a");
    registerLink.href = "#";
    registerLink.textContent = "Tilmeld dig";
    registerLink.classList.add("register-btn");
    
    const registerText = document.createElement("p");
    registerText.textContent = " - på et splitsekund";
    registerText.classList.add("register-text");
    
    registerWrapper.appendChild(registerLink);
    registerWrapper.appendChild(registerText);
    dropdownMenu.appendChild(registerWrapper);
    
    //  Resten af menu-elementerne
    const menuItems = ["Din oversigt", "Ordrer", "Returnér vare", "Hjælp & kontakt"];
    
    for (let i = 0; i < menuItems.length; i++) {
        let menuItem = document.createElement("a");
        menuItem.href = "#";
        menuItem.textContent = menuItems[i];
        
        dropdownMenu.appendChild(menuItem);
    }
    
    userIcon.appendChild(dropdownMenu);
    
    //  Hover-effekt til at vise/skjule dropdown-menu
    userIcon.addEventListener("mouseover", function () {
        if (!isDropdownOpen) {
            isDropdownOpen = true;
            dropdownMenu.style.display = "block";
        }
    });
    
    userIcon.addEventListener("mouseout", function () {
        if (isDropdownOpen) {
            isDropdownOpen = false;
            dropdownMenu.style.display = "none";
        }
    });

    //  INJICERER CSS DIREKTE MED JAVASCRIPT
    const style = document.createElement("style");
    style.innerHTML = `
        #dropdownMenu {
            position: absolute;
            right: 0;
            top: 40px;
            background-color: white;
            border: 1px solid black;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
            min-width: 260px;
            padding: 10px 0;
            text-align: left;
            z-index: 1000;
        }

        #dropdownMenu a {
            display: block;
            padding: 10px 16px;
            text-decoration: none;
            color: #333;
            font-size: 14px;
            font-weight: normal;
        }

        #dropdownMenu a:hover {
            background-color: #f1f1f1;
        }

        /* Log ind-knap */
        .login-btn {
            display: block;
            background: black;
            color: #FFFFFF !important;
            font-weight: bold;
            text-align: center;
            padding: 12px;
            text-decoration: none;
            transition: background 0.3s ease, color 0.3s ease;
            box-sizing: border-box;
            border: 1px solid transparent;
        }

        .login-btn:hover {
            background: white;
            color: black !important;
            border: 1px solid black;
        }

        /* "Tilmeld dig"-wrapper */
.register-wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center; /* Sørger for vertikal centrering */
    gap: 4px; /* Lidt mellemrum mellem link og tekst */
    padding: 10px 0px;
}

        /* "Tilmeld dig" - Link */
.register-btn {
    font-weight: bold;
    color: #5A3FFF !important; /* Sørger for, at farven er lilla */
    text-decoration: none;
    display: inline-block;
}


        /* "- på et splitsekund" - Tekst */
        .register-text {
            font-size: 14px;
            color: #333;
        }
            #userIcon {
    border: none !important;
}
    `;
    document.head.appendChild(style);
});
