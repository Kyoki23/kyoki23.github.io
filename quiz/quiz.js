const questions = [
    {
        question: "¿Cuál es mi segundo apellido?",
        correctAnswer: "sotelo",
        hint: "¿Pregunta 1 y ya pidiendo ayuda? :p... empieza con S",
        correct: "Empezamos fácil, ¿no? :3",
        easterEggs: [
            { answer: "vazquez", message: "Ese es mi primer apellido >:3" },
            { answer: "vega", message: "Sería un lindo apellido para mis hijos, ¿no crees?" },
            { answer: "santander", message: "Lindo apellido, pero no :3" },
        ]
    },
    {
        question: "¿Cuál es mi anime favorito?",
        correctAnswer: "codegeass",
        hint: "Siempre te he dicho que quiero que lo veamos juntos, mando mensajes en mis estados tambien, dos palabras, C[...] G[....]",
        correct: "¿Si lo vamos a ver juntos o nadota?",
        easterEggs: [
            { answer: "danganronpa", message: "No lo terminamos de ver al final, ¿no? Incorrecto de todos modos" },
            { answer: "shingeki", message: "Ew, no" },
            { answer: "shingekinokyogin", message: "Ew, no" },
            { answer: "deathnote", message: "No soy tan fan" },
            { answer: "hunterxhunter", message: "Me encanta, pero no es el favorito" }
        ]
    },
    {
        question: "¿Cuál es el nombre de mi gata vaquita?",
        correctAnswer: "lola",
        hint: "Empieza con L y es un nombre de 4 letras",
        correct: "La vaca Lola, la vaca Lola, tiene cabeza y tiene cola owo",
        easterEggs: [
            { answer: "nikki", message: "Esa es la marrón ^^'" },
            { answer: "bolillo", message: "¿Bolillo ajolote o bolillo dragón? Está mal de todos modos u.u" },
            { answer: "apolo", message: "Que lindo Apolito <3... pero no ^^" },
            { answer: "apolito", message: "Que lindo Apolito <3... pero no ^^" }
        ]
    },
    {
        question: "Quitando el grado (Licenciatura), ¿Cuál es el nombre COMPLETO de mi carrera? (Osea, empieza con Ingenieria en <...>)",
        correctAnswer: "ingenieriaendesarrolloygestiondesoftware",
        hint: "La abreviación sería IDGS, si lo quieres abreviar menos... Ing. en D. y G. de S.",
        correct: "Imaginate casarte con un ingeniero... yo lanzo la ficha, just think about it ^^",
        easterEggs: [
            { answer: "software", message: "Empieza con 'Ingeniería' dije >:3" },
            { answer: "ingenieriaensoftware", message: "Casi, pero te falta algo mas" },
            { answer: "ingenieriaenprogramacion", message: "¿Solo eso te acuerdas? Auch, ni siquiera te acercas al nombre :/" },
            { answer: "programacion", message: "Solo eso te acuerdas? Auch, aparte, empieza con 'Ingenieria'" },
            { answer: "sistemas", message: "No, ¿tan poco recuerdas de mi? Me mega odias :c" },
            { answer: "ingenieriaensistemas", message: "No, ¿tan poco recuerdas de mi? Me mega odias :c" },
            { answer: "ingenieriaentecnologiasdelainformacioneinnovaciondigital", message: "Checaste la página de mi uni? Tramposa >:3, cambió el plan de estudios, no es ese :b" },
        ]
    },
    {
        question: "¿En qué municipio vivo?",
        correctAnswer: "jiutepec",
        hint: "Según me comentaste, a tu padre le gustaba ir a su zócalo... Comienza con J",
        correct: "Hace calor, buuh",
        easterEggs: [
            { answer: "cuernavaca", message: "Un poco mas al lado >:3" },
            { answer: "morelos", message: "Ese es el estado xd" },
            { answer: "xochitepec", message: "Soy el mas duro de Xochitepec, pero no soy de ahi xd" },
            { answer: "yautepec", message: "Nopi, ¿Al final fuiste a ver tu obra expuesta?" },
        ]
    },
    {
        question: "¿Cual es mi saga de videojuegos favorita?",
        correctAnswer: "gearsofwar",
        hint: "Esta pregunta ya te la había hecho antes, y respondiste mal, busque en whats bleeh :b",
        correct: "Esta saga me acompañó desde los 10 años",
        easterEggs: [
            { answer: "persona", message: "Me encanta, pero no es mi favorita al 100 owo" },
            { answer: "minecraft", message: "No es saga owo" },
            { answer: "hollowknight", message: "Nopi, y ya no me has compartido tu aventura, me requete odias u.u" },
        ]
    },
    {
        question: "¿Cual es mi color favorito?",
        correctAnswer: "morado",
        hint: "El mismo que Vegetta777",
        correct: "Me encanta el morado owo",
        easterEggs: [
            { answer: "negro", message: "La vez que comentamos esto la pregunta era ¿Prefiero el negro o el blanco? No mi favorito general ^^" },
            { answer: "blanco", message: "Combina con todo owo, no" },
            { answer: "rosa", message: "No ^^, ¿Te gusta mucho, eh? " },
        ]
    },
    {
        question: "¿Cuántos años tengo?",
        correctAnswer: "21",
        hint: "¿Necesitas pista en serio? Soy unos cuantos meses mas grande que tu u.u",
        correct: "Una diferencia de edad que me parece linda ^^",
        easterEggs: [
            { answer: "20", message: "¿Te quedaste en el pasado? Eso fue al poco de conocernos :b" },
            { answer: "22", message: "¿Tan viejo me veo? Chale" },
            { answer: "19", message: "No... ¿Te gustan menores, eh? ^^' " },
            { answer: "18", message: "No... ¿Te gustan menores, eh? ^^' " },
        ]
    },
    {
        question: "¿Quién es mi youtuber favorito?",
        correctAnswer: "elrichmc",
        hint: "¿Cómo no vas a saberlo si es del único youtuber que sabes que veo contenido? Vimos videos de él juntos",
        correct: "Eyeyeyey, aaquiii el Rich owo, nunca quisiste continuar viendolo conmigo :c",
        easterEggs: [
            { answer: "vegetta777", message: "Ya no suelo verlo :c" },
            { answer: "willyrex", message: "Nunca me encantó en realidad, pero me ví todas sus series jsjs" },
            { answer: "rich", message: "Correcto, pero pon el nombre completo o está mal >:3" },
            { answer: "town", message: "Hace años no veo contenido de él, no :b" },
            { answer: "itowngameplays", message: "Hace años no veo contenido de él, no :b" },
        ]
    },
    {
        question: "¿Cuál es mi fruta favorita? (en singular)",
        correctAnswer: "uva",
        hint: "Circular y pequeña... haciamos bromas de que nuestros nenes iban a ser de gustos caros por nuestras frutas favoritas, por la fresa y la...?",
        correct: "Están muy ñam",
        easterEggs: [
            { answer: "fresa", message: "Te gustan mucho las fresas, ¿no? Me agradan a mi también, pero no es mi favorita ^^" },
            { answer: "manzana", message: "No es manzana :b" },
            { answer: "mango", message: "El mango es rico, pero no es mi favorito" },
            { answer: "naranja", message: "¿Cómo que naranja? >:3" }
        ]
    },
    {
        question: "¿Cuál es mi animal favorito?",
        correctAnswer: "zorroartico",
        hint: "Tu animal favorito pertenecía al mismo grupo animal que este, es de color blanco y vive en zonas frías",
        correct: "Es que son todos bonitos jsjsj <3",
        easterEggs: [
            { answer: "zorropolar", message: "Si... pero no es el nombre correcto :b" },
            { answer: "zorro", message: "Casi... es una subespecie del zorro!" },
            { answer: "zorroalbino", message: "El albinismo es una condición genética, asi que no, ¡pero casi!" },
            { answer: "fenec", message: "Ese era el tuyo, pero no vas mal encaminada" },
            { answer: "feneco", message: "Ese era el tuyo, pero no vas mal encaminada" },
            { answer: "zorrodeldesierto", message: "Ese era el tuyo, pero no vas mal encaminada" },
            { answer: "gato", message: "No es mi favorito, pero me encantan" },
            { answer: "perro", message: "No soy mucho de perros de hecho" },
            { answer: "iguana", message: "Lindo Apolito, pero no :3" },
            { answer: "dragonbarbudo", message: "Larga vida a Bolillo, pero no es mi animal favorito owo" },
            { answer: "barbudo", message: "Larga vida a Bolillo, pero no es mi animal favorito owo" },
            { answer: "gecko", message: "Ese era mi reptíl favorito, no mi animal favorito, pero te acordaste, que lindo <3" },
        ]
    },
    {
        question: "¿Cuál es canción favorita de José José?",
        correctAnswer: "sere",
        hint: "La tuve por mucho tiempo en mi perfil de ig, además siempre que puedo la menciono",
        correct: "Soy ese, quien todo lo dió por triunfar, dejando su vida al pasar hecha pedazos",
        easterEggs: [
            { answer: "eltriste", message: "Soy ese, pero no es la canción correcta :b" },
            { answer: "volcan", message: "Soy ese, un volcan apagado, pero no :3" },
            { answer: "lanavedelolvido", message: "Yo contigo, no es mi favorita sin embargo :b" },
            { answer: "simedejasahora", message: "Yo contigo, no es mi favorita sin embargo :b" },
            { answer: "mivida", message: "Yoooooo, pero no >:3" },
            { answer: "almohada", message: "Yo cuando pienso en ti, pero no es la correcta, bleeh :b" },
            { answer: "quieroperdermecontigo", message: "Yo contigo, pero no es la favorita :b" },
            { answer: "voyallenartetoda", message: "El Lunes 28 de José José, pero no es" },
            { answer: "payaso", message: "Y es verdad soy un payaso, pero no owo" },
            { answer: "preso", message: "De la carcel de tus besos, no es ^^" },
        ]
    },
    {
        question: "¿Cuál es canción favorita de Persona 5?",
        correctAnswer: "nomorewhatifs",
        hint: "En español el nombre sería ' No más y si's ' ^^",
        correct: "Es una canción muy especial para mi, me encanta",
        easterEggs: [
            { answer: "lifewillchange", message: "Esta es especial owo, pero no" },
            { answer: "lastsurprise", message: "La canción mas conocida diría yo, pero no owo" },
            { answer: "riversinthedesert", message: "Es la canción del boss final owo, nopi" },
        ]
    },
    {
        question: "¿Cuál es canción favorita de Enjambre?",
        correctAnswer: "elordinario",
        hint: "La escuchamos juntos en el álbum de Noches de Salón, te pregunté su nombre",
        correct: "Soy ese, no sé si es bueno o malo, pero soy ese",
        easterEggs: [
            { answer: "necropolis", message: "Me gusta y es tu favorita del álbum, pero no <3" },
            { answer: "vidaenelespejo", message: "Es una linda canción, pero no" },
            { answer: "impacto", message: "No me mires con esos ojooooos, no es mi fav owo" },
            { answer: "elvacio", message: "Yo owo, pero no es mi fav u.u" },
            { answer: "elemento", message: "Mi elemento vitaaaaal, no es mi fav u.u" },
            { answer: "somosajenos", message: "Me hace sentir identificado... aunque no es mi fav :3" },
            { answer: "tulipanes", message: "De cierta forma me hace recordar a nuestra elacion, ¿a ti no?, pero no es mi fav :3" },
            { answer: "maniacardiaca", message: "Me gusta mucho, pero no es mi fav :3" },
        ]
    },
    {
        question: "¿Cuál fue el primer apodo que me diste?",
        correctAnswer: "ratoncito",
        hint: "El nombre de tu playlist de spotify",
        correct: "Nunca volví a escucharlo, siempre me gustó",
        easterEggs: [
            { answer: "alex", message: "Diría yo que es el mas actual, y el único por el que me llamas ahora mismo" },
            { answer: "amor", message: "Muak, pero no es el primero" },
            { answer: "amow", message: "Muak, pero no es el primero" },
            { answer: "esposo", message: "Muak, ojalá algun día, pero no es el primero" },
        ]
    },
    {
        question: "¿Cuál fue el primer juego que te regalé?",
        correctAnswer: "dontstarvetogether",
        hint: "El juego tiene un arte parecido al de Tim Burton, es por eso que te llamó la atención",
        correct: "Me encanta el juego, y que lo hayamos jugado <3, aunque no te encante a ti, doblemente especial que lo hayas jugado owo",
        easterEggs: [
            { answer: "minecraft", message: "Ese no se lo regalé" },
            { answer: "stardewvalley", message: "Ese fue el segundo owo" },
            { answer: "detroit", message: "No fue el primero, pero si uno que me hizo ilusión regalarte <3" },
            { answer: "detroitbecomehuman", message: "No fue el primero, pero si uno que me hizo ilusión regalarte <3" },
            { answer: "omori", message: "Ese no lo jugó u.u" },
        ]
    },
    {
        question: "¿Cuál es mi Pokemón favorito?",
        correctAnswer: "gardevoir",
        hint: "282",
        correct: "Dará su vida para proteger a su entrenador, un pokemon que da la mayor muestra de amor <3",
        easterEggs: [
            { answer: "pikachu", message: "Muy basico, ¿no?" },
            { answer: "mimikyu", message: "Está lindo, a ti te encanta ^^, pero no owo" },
            { answer: "wooper", message: "Te gusta mucho, ¿no? ^^, es lindo, no mi favorito" },
            { answer: "charmander", message: "Muy basico, ¿no?" },
        ]
    },
    {
        question: "¿Cuál es mi pan de dulce favorito?",
        correctAnswer: "chocolatin",
        hint: "Es un pan francés de hojaldre con chocolate, muy ñam",
        correct: "Es pan de señor, yo sé jasdj, pero me gusta, ¿Qué le vamos a hacer? :3",
        easterEggs: [
            { answer: "croissant", message: "Cuason owo, nopi" },
            { answer: "dona", message: "Si está ñam, pero no es mi pan favorito" },
            { answer: "concha", message: "Se cae todo y hace un desastre, si está ñam pero no es el favorito" },
            { answer: "oreja", message: "Me gustaría morderte tu oreja... ah, ¿Seguíamos hablando de panes? Uys, no es mi fav" },
            { answer: "beso", message: "Muak <3, ah, ¿el pan?, no, no es mi favorito" },
            { answer: "concha", message: "Se cae todo y hace un desastre, si está ñam pero no es el favorito" },
        ]
    },
    
];

let currentQuestionIndex = 0;
let helpCount = 0;
let hintShown = false;
let quizStarted = false;

const questionText = document.getElementById('questionText');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');
const questionCounter = document.getElementById('questionCounter');
const progressFill = document.getElementById('progressFill');
const helpButton = document.getElementById('helpButton');
const helpCounter = document.getElementById('helpCounter');
const modalOverlay = document.getElementById('modalOverlay');
const hintText = document.getElementById('hintText');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
const quizContainer = document.getElementById('quizContainer');
const completionScreen = document.getElementById('completionScreen');
const welcomeScreen = document.getElementById('welcomeScreen');
const startBtn = document.getElementById('startBtn');
const modalQuestion = document.getElementById('modalQuestion');
const modalAlready = document.getElementById('modalAlready');
const content = document.getElementById('content');
const helpCountDisplay = document.getElementById('helpCountDisplay');
const codeDisplay = document.getElementById('codeDisplay');
codeDisplay.textContent = localStorage.getItem("code");
helpCountDisplay.textContent = localStorage.getItem("helpCount") || "0";
const code = ["LEYCOD","LEYHKS","LEYSNR","ALERPM","ALETRI","BLEHFL"];

function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "")
        .trim();
}

function validateInput(input) {
    return input.replace(/[^\p{L}0-9\s]/gu, '');
}

function displayQuestion() {
    submitBtn.disabled = false;
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    answerInput.value = '';
    feedback.classList.remove('show', 'success', 'error', 'easter');
    hintShown = false;
    modalQuestion.style.display = 'block';
    hintText.classList.remove('show');

    questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;

    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = progress + '%';

    answerInput.focus();
}

function checkAnswer() {
    const question = questions[currentQuestionIndex];
    const userAnswer = normalizeText(answerInput.value);
    const correctAnswer = normalizeText(question.correctAnswer);

    if (submitBtn.disabled) return;
    submitBtn.disabled = true;

    if (userAnswer === correctAnswer) {
        showFeedback(question.correct, 'success');
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
                submitBtn.disabled = false;
            } else {
                showCompletionScreen();
            }
        }, 4500);
        return;
    }

    let foundEasterEgg = false;
    for (let easterEgg of question.easterEggs) {
        if (userAnswer === normalizeText(easterEgg.answer)) {
            showFeedback(easterEgg.message, 'easter');
            foundEasterEgg = true;
            break;
        }
    }

    if (!foundEasterEgg) {
        showFeedback('No owo. ¿Me odia? :c', 'error');
    }
    submitBtn.disabled = false;
}

function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = 'feedback show ' + type;
}

function showCompletionScreen() {
    localStorage.setItem("quizTaken", "yes");
    localStorage.setItem("helpCount", helpCount);
    quizContainer.style.display = 'none';
    completionScreen.classList.add('active');
    progressFill.style.width = '100%';
    helpButton.style.display = 'none';

    document.getElementById('totalQuestions').textContent = questions.length;
    document.getElementById('totalHelps').textContent = helpCount;
    //pregs=18
    let performance = '';
    if (helpCount <= 2) {
        performance = `Lo hiciste muy bien Lily, me hace felíz que me conozcas tanto <3. Guarda el siguiente codigo antes de continuar: ${code[0]}`;
        localStorage.setItem("code", code[0]);
    } else if (helpCount <= 5) {
        performance = `Pocas ayudas, buen trabajo, me alegra que me conozcas bien :3. Guarda el siguiente codigo antes de continuar: ${code[1]}`;
        localStorage.setItem("code", code[1]);
    } else if (helpCount <= 8) {
        performance = `Pedir ayuda no es malo, hiciste un buen trabajo, bien hecho :3. Guarda el siguiente codigo antes de continuar: ${code[2]}`;
        localStorage.setItem("code", code[2]);
    } else if (helpCount <= 10) {
        performance = `Ayuda en la mitad de las preguntas, hiciste lo que pudiste, y eso está bien ^^. Guarda el siguiente codigo antes de continuar: ${code[3]}`;
        localStorage.setItem("code", code[3]);
    } else if (helpCount <= 13) {
        performance = `Ayudas en poco mas de la mitad de las preguntas, creo que al menos me conoces un poco, bien hecho ^^. Guarda el siguiente codigo antes de continuar: ${code[4]}`;
        localStorage.setItem("code", code[4]);
    } else if (helpCount <= 15) {
        performance = `Waos, muchas ayudas... ¿Te lo pasaste bien al menos? Ahora me conoces más ^^. Guarda el siguiente codigo antes de continuar: ${code[5]}`;
        localStorage.setItem("code", code[5]);
    } else {
        performance = `Supongo que no me conoces tanto como pensaba... ¿Me odias? :c. Guarda el siguiente codigo antes de continuar: ${code[5]}`;
    }

    document.getElementById('performanceText').textContent = performance;
}

function startQuiz() {
    welcomeScreen.classList.add('hidden');
    quizContainer.style.display = 'block';
    helpButton.style.display = 'flex';
    quizStarted = true;
    displayQuestion();
}

submitBtn.addEventListener('click', checkAnswer);

answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

answerInput.addEventListener('input', (e) => {
    e.target.value = validateInput(e.target.value);
});

startBtn.addEventListener('click', () => {
    const alreadyTaken = localStorage.getItem("quizTaken") === "yes";
    if (alreadyTaken) {

        welcomeScreen.classList.add('hidden');
        modalAlready.style.display = 'block';
        content.style.display = 'none';
        return;
    } else {
        startQuiz();
    }

});


helpButton.addEventListener('click', () => {
    const question = questions[currentQuestionIndex];
    hintText.textContent = question.hint;
    modalOverlay.classList.add('active');

    if (hintShown) {
        hintText.classList.add('show');
        modalQuestion.style.display = 'none';
    } else {
        hintText.classList.remove('show');
        modalQuestion.style.display = 'block';
    }
});

confirmBtn.addEventListener('click', () => {
    if (!hintShown) {
        hintText.classList.add('show');
        modalQuestion.style.display = 'none';
        helpCount++;
        helpCounter.textContent = helpCount;
        hintShown = true;
    } else {
        modalOverlay.classList.remove('active');
    }
});


cancelBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});