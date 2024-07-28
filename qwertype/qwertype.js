console.log("Hello World");




function choose_category(){
    let category_choice=prompt("Do you want the words quizz, or the sentences quizz?")
    while((category_choice!== "words") && (category_choice!=="sentences")){
        category_choice=prompt("Do you want the words quizz, or the sentences quizz?")
    }   
    return category_choice
}

function comment_score(score, total_questions){
    let comment="Your score is "+score+"/"+total_questions
    return comment
}

function game_loop(category_choice){
    let score=0
    if(category_choice==="words"){
        for (let i=0; i<3; i++){
    
            let user_word = prompt("Enter the word : "+app_words[i])
            if(user_word===app_words[i]){
                console.log("Good job!")
                score++
            }
            else{
                console.log("You're just bad...")
            } 
        }
    }
    else{
        for (let i=0; i<3; i++){
    
            let user_word = prompt("Enter the sentence : "+app_sentences[i])
            if(user_word===app_sentences[i]){
                console.log("Good job!")
                score++
            }
            else{
                console.log("You're just bad...")
            } 
        }
    }
    return score
}


function launch_game(){

    let category_choice=choose_category()
    let score=game_loop(category_choice);
    
    switch (score){
        case 1:
            console.log("You're meh you should train some more")
            break
        case 2:
            console.log("You're good but you can do better")
            break
        case 3:
            console.log("Perfect")
            break
        default:
            console.log("You're trash find something to do with your life")
    }
    
    console.log(comment_score(score, 3))    
}




