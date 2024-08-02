

function disp_score(score, total_questions) {
    document.querySelector(".score_zone span").innerHTML=`<span>${score} / ${total_questions}</span>`;
}

function display_suggestion(word) {
    document.querySelector(".suggestion_zone").textContent = word;
}

function launch_game() {
    let score = 0;
    let i = 0;

    const submit_button = document.getElementById("submit_btn");
    const typing_tag = document.getElementById("writing_input");

    function check_and_update() {
        if (typing_tag.value === document.querySelector(".suggestion_zone").textContent) {
            score++;
        }
        disp_score(score, i + 1);
    }

    submit_button.addEventListener("click", () => {
        check_and_update();
        i++;
        if (app_words[i] !== undefined) {
            display_suggestion(app_words[i]);
        } else {
            display_suggestion("Game Over");
            submit_button.disabled = true;
        }
        typing_tag.value = ""; // Clear input field after each submission
    });

    if (app_words.length > 0) {
        display_suggestion(app_words[i]);
    }
}
