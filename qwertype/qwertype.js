// To display score
function disp_score(score, total_questions) {
    document.querySelector(".score_zone span").textContent = `${score} / ${total_questions}`;
}

// To display suggestion
function display_suggestion(word) {
    document.querySelector(".suggestion_zone").textContent = word;
}

// To get the selected option
function option_choice() {
    let option_tag = document.querySelectorAll("input[name=option_source]");
    let selectedOption = "";

    option_tag.forEach(radio => {
        if (radio.checked) {
            selectedOption = radio.value;
        }
    });

    return selectedOption;
}

// To get the suggestion list based on the option
function option_list(option) {
    let suggestion_list = [];
    if (option === "1") {
        suggestion_list = app_words;
    } else if (option === "2") {
        suggestion_list = app_sentences;
    }
    return suggestion_list;
}

// To launch the game
function launch_game() {
    let score = 0;
    let i = 0;
    let suggestion_list = [];

    const start_button = document.getElementById("start_btn");
    const submit_button = document.getElementById("submit_btn");
    const typing_tag = document.getElementById("writing_input");

    start_button.addEventListener("click", () => {
        let option = option_choice(); // Retrieve selected option
        suggestion_list = option_list(option); // Get suggestion list based on the option

        // Check if we have valid suggestions
        if (suggestion_list.length > 0) {
            i = 0; // Reset index
            score = 0; // Reset score
            disp_score(score, i); // Display initial score
            display_suggestion(suggestion_list[i]); // Display the first suggestion
            submit_button.disabled = false; // Enable submit button in case it was disabled
        } else {
            display_suggestion("No options selected or invalid choice.");
        }
    });

    submit_button.addEventListener("click", () => {
        const user_input = typing_tag.value.trim(); // Get and trim user input
        const current_suggestion = document.querySelector(".suggestion_zone").textContent.trim();

        // Compare user input with the current suggestion (case-sensitive)
        if (user_input === current_suggestion) {
            score++; // Increment score if correct
        }

        disp_score(score, i + 1); // Display updated score
        i++; // Increment suggestion index
        if (suggestion_list[i] !== undefined) {
            display_suggestion(suggestion_list[i]);
        } else {
            display_suggestion("Game Over");
            submit_button.disabled = true; // Disable submit button when game ends
        }
        typing_tag.value = ""; // Clear input field after each submission
    });
}



