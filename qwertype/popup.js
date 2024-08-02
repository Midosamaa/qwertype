/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la 
 * fermeture de la popup de partage. 
 * 
 *********************************************************************************/


/**
 * Cette fonction affiche la popup pour partager son score. 
 */
function disp_popup() {
    let popup_background = document.querySelector(".popup_background");
    // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    popup_background.classList.add("active");
}

/**
 * Cette fonction cache la popup pour partager son score. 
 */
function hide_popup() {
    let popup_background = document.querySelector(".popup_background");
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popup_background.classList.remove("active");
}

/**
 * Cette fonction initialise les écouteurs d'événements qui concernent 
 * l'affichage de la popup. 
 */
function initAddEventListenerPopup() {
    // On écoute le click sur le bouton "partager"
    let share_btn = document.querySelector(".share_zone button")
    let popup_background = document.querySelector(".popup_background")
    share_btn.addEventListener("click", () => {
        // Quand on a cliqué sur le bouton partagé, on affiche la popup
        disp_popup()
    })

    // On écoute le click sur la div "popupBackground"
    popup_background.addEventListener("click", (event) => {
        // Si on a cliqué précisément sur la popupBackground 
        // (et pas un autre élément qui se trouve dedant)
        if (event.target === popup_background) {
            // Alors on cache la popup
            hide_popup()
        }
    })
}