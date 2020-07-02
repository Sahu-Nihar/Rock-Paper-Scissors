let user_score = 0;
let computer_score = 0;

const user_score_span = document.getElementById("user-score");
const computer_score_span = document.getElementById("computer-score");

const score_board_div = document.querySelector(".score-board");

const result = document.querySelector(".result > p");

const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function convert_to_word(letter) {

    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    if (letter === 's') return 'Scissors';
}

function get_computer_choice() {

    const choice_list = ["r", "p", "s"];
    const random_number = Math.floor(Math.random() * 3);
    return choice_list[random_number];
}

const small_user_word = "[User]".fontsize(3).sub();
const small_computer_word = "[Comp]".fontsize(3).sub();

function win(user, computer) {

    user_score++;
    user_score_span.innerHTML = user_score;
    computer_score_span.innerHTML = computer_score;
    result.innerHTML = `${convert_to_word(user)}${small_user_word} beats ${convert_to_word(computer)}${small_computer_word}. You Win! 🔥`
    document.getElementById(user).classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 300)
}

function lose(user, computer) {

    computer_score++;
    user_score_span.innerHTML = user_score;
    computer_score_span.innerHTML = computer_score;
    result.innerHTML = `${convert_to_word(user)}${small_user_word} loses to ${convert_to_word(computer)}${small_computer_word}. You Lost... 💩`
    document.getElementById(user).classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 300)
}

function draw(user, computer) {

    result.innerHTML = `${convert_to_word(user)}${small_user_word}  equals ${convert_to_word(computer)}${small_computer_word}. It's a Draw.`;
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 300)
}

function game(user_choice) {

    const computer_choice = get_computer_choice();

    switch (user_choice + computer_choice) {

        case "rs":
        case "pr":
        case "sp":
            win(user_choice, computer_choice);
            break;

        case "sr":
        case "rp":
        case "ps":
            lose(user_choice, computer_choice);
            break;

        case 'rr':
        case 'pp':
        case 'ss':
            draw(user_choice, computer_choice);
            break;

        default:
            console.log("Invalid selection");
    }
}

function main() {

    rock.addEventListener('click', () => game("r"));

    paper.addEventListener('click', () => game("p"));

    scissors.addEventListener('click', () => game("s"));
}

main();