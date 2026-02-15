const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const fechaInicio = new Date(2025, 8, 4);
const fechaFin = new Date(2026, 1, 14);

const mensajesBrutos = `
            septiembre 5: Te amo tanto que no dejo de pensar en ti.
            septiembre 6: Te amo tanto que eres mi primer pensamiento al empezar cada día.
            septiembre 7: Te amo tanto que eres mi último pensamiento antes de dormir.
            septiembre 8: Te amo tanto que mis peores pesadillas son que te ocurra algo a ti.
            septiembre 9: Te amo tanto que tu sonido de notificación alegra mi dia entero.
            septiembre 10: Te amo tanto que me paso pensando como te verías vestida de novia.
            septiembre 11: Te amo tanto que a pesar de los problemas sigo esforzandome por nosotros.
            septiembre 12: Te amo tanto que sigo pensando y soñando en esos preciosos ojos tuyos.
            septiembre 13: Te amo tanto que todos los días espero un mensaje tuyo.
            septiembre 14: Te amo tanto que duele.
            septiembre 15: Te amo tanto que sueño con un futuro que hicimos nuestro.
            septiembre 16: Te amo tanto que si no me rindo aún es por ti.
            septiembre 17: Te amo tanto que todas las noches sueño con poder volver contigo.
            septiembre 18: Te amo tanto que mi futuro sigue brillando con tu luz.
            septiembre 19: Te amo tanto que sigo intentando resolver las cosas.
            septiembre 20: Te amo tanto que sigo aqui.
            septiembre 21: Te amo tanto que si ambos fuésemos girasoles, yo estaría viéndote, serías mi Sol.
            septiembre 22: Te amo tanto que incluso en ésta situación eres mi prioridad.
            septiembre 23: Te amo tanto que mi deseo de cumpleaños fue que volvamos y estemos juntos por siempre, o en su defecto,,, Que seas feliz en tu vida <3.
            septiembre 24: Te amo tanto que aunque mi mente me diga que huya, mi corazón sigue esperándote.
            septiembre 25: Te amo tanto que escribo esto porque es el único modo que me has permitido para darte mensajes de amor, haciendolo en secreto.
            septiembre 26: Te amo tanto que incluso en tu ausencia eres lo mas importante para mi.
            septiembre 27: Te amo tanto que si me llegase a hacer un tatuaje sería que hiciesemos match de los fragmentos del Alma de Monarca.
            septiembre 28: Te amo tanto que me dueles y me haces feliz.
            septiembre 29: Te amo tanto que incluso si dices estar soltera, hago lo posible para que no lo veas asi, al menos el tiempo que me lo permitas <3.
            septiembre 30: Te amo tanto que sufro con tal de estar contigo, y sufro por gusto.
            octubre 1: Amo tu carita divina, eres una obra de arte.
            octubre 2: Amo tus preciosos lunares, todos y cada uno de ellos <3.
            octubre 3: Amo tu precioso color canela de piel,,, Única en mi vida <3.
            octubre 4: Amo tu voz, escucharte me alegra el dia entero.
            octubre 5: Amo tu forma de vestir, el que seas femenina es algo fantástico.
            octubre 6: Amo tus celos fingidos cuando veíamos Danganronpa (es un cumplido aunque no lo parezca, es pumpe de Kiri).
            octubre 7: Amo tu forma tan linda de amar.
            octubre 8: Amo tu genuina manera de ver el mundo, le das color a lo grisáceo.
            octubre 9: Amo tu forma de ser, me vuelves loco, y me enamoras cada vez que hablamos.
            octubre 10: Amo tu delineado de los ojos, aumenta aún mas su belleza, asi como el maquillaje que te pones, no necesitas llevarlo pues eres perfecta, pero se le ve bien.
            octubre 11: Amo tu boquita preciosa, me encanta su forma y que parezca que tengas como boquita de gato :3.
            octubre 12: Amo tus esfuerzos por mejorar.
            octubre 13: Amo tus audios a cualquier momento del día, pueden subirme el ánimo por completo.
            octubre 14: Amo tu amor por la natuarleza, me haces querer la vida.
            octubre 15: Amo tu manera única de ser, eres una persona increíble.
            octubre 16: Amo tu carrera, amo tu dedicación y pasión por la misma.
            octubre 17: Amo tu risa, es contagiosa y me hace feliz.
            octubre 18: Amo tu forma de expresarte, me encanta leerte y escucharte, aunque digas groserias a veces u,u.
            octubre 19: Amo tus gestos y expresiones, como el decir en voz alta "pq" en vez de "porque" jsjs.
            octubre 20: Amo lo diferente pero iguales que somos a la vez.
            octubre 21: Amo tu forma de ser tan dulce y cariñosa, amaría verle diario.
            octubre 22: Amo tu amor al arte, me encantaría pintar contigo algun día, aunque probablemente yo sea un estorbo.
            octubre 23: Amo tu autenticidad.
            octubre 24: Amo tu paciencia, espero puedas seguir siendo paciente conmigo. 
            octubre 25: Amo tu figura, sin intención de sonar horny, me gusta verle ^^'.
            octubre 26: Amo la cicatriz de tu hombro, hace que seas aun mas única.
            octubre 27: Amo tu cabello, recuerdo aun su textura, y con tu nuevo tinte te ves mas preciosa aun, "de rojo te ves bieeeen" (aunque es rosa).
            octubre 28: Amo tu amor hacia los reptiles, espero podamos tener al barbudo, sería nuestro neuvo nene, ¿Qué nombre le pondrías?.
            octubre 29: Amo tus pinturas, son una obra de arte, pintadas por otra obra de arte.
            octubre 30: Amo tus mensajes al despertar, aunque no los haces ya, me ayudaban a iniciar el día.
            octubre 31: Amo tus ojos que brillan en la penumbra como linternas de calabaza.
            noviembre 1: Amo cuando me envías fotos, me hace recordar a que hay alguien que, aunque no directamente, me espera.
            noviembre 2: Amo cuando me cuentas de tu dia, me hace sentir parte de tu vida, o al menos que te acordaste de mi durante el dia.
            noviembre 3: Amo cuando un mensaje tuyo aparece en mi pantalla, me alegra el día, o al menos parte del mismo.
            noviembre 4: Amo cuando hago estos mensajes día a día, los mereces todos <3.
            noviembre 5: Amo cuando charlamos por mensaje, por efímero que sea el momento.
            noviembre 6: Amo cuando me das las "buenas noches", me hace sentir especial, y que sigo siendo importante :3.
            noviembre 7: Amo cuando me dices que me cuide, me hace sentir que te importo.
            noviembre 8: Amo cuando pienso en ti, me hace pensar que tambien piensas tu en mi.
            noviembre 9: Amo cuando me envías fotos de Apolito, es un nene muy lindo jsjs, Diogenes tambien owo.
            noviembre 10: Amo cuando haciamos pequeñas actividades en pareja.
            noviembre 11: Amo cuando interactuamos, aunque sea poco, me encantaría hablar mas contigo!.
            noviembre 12: Amo cuando veíamos series juntos, extraño esas noches juntos, nos quedó pendiente Danganronpa jsjs.
            noviembre 13: Amo cuando quedabas dormida y podía escribirte algo para que lo leyeras al despertar.
            noviembre 14: Amo cuando me decías "te amo" o "te quiero", me hacía sentir tan especial.
            noviembre 15: Amo cuando planeabamos nuestro futuro juntos.
            noviembre 16: Amo cuando me hacías sentir especial.
            noviembre 17: Amo cuando nos pasabamos todo el día jugando jueguitos.
            noviembre 18: Amo cuando explorabamos por el mundo de Minecraft.
            noviembre 19: Amo cuando nos la pasabamos hablando todo el día, todos los dias.
            noviembre 20: Amo cuando me hablabas de tus proyectos de la escuela, y como a veces te estresabas por ellos jsjs <3.
            noviembre 21: Amo cuando pienso en el día que nos vimos por primera vez (y única de momento xd), sentí que todo había valido la pena.
            noviembre 22: Amo cuando me pedías ayuda con algo, me hacía sentir útil.
            noviembre 23: Amo cuando me decías que te gustaba.
            noviembre 24: Amo cuando hablas conmigo.
            noviembre 25: Amo cuando me mandas algun meme para intentar hacer platica jsjs.
            noviembre 26: Amo cuando pienso en nuestro futuro.
            noviembre 27: Amo cuando escuchaba tus "te amo", aunque ya no lo hagas, espero pueda volver a escuchar esa frase salir de tí.
            noviembre 28: Amo cuando me dices que soy importante para ti.
            noviembre 29: Amo cuando me haces algun comentario bonito.
            noviembre 30: Amo cuando existes, amo tu mera existencia.
            diciembre 1: Te amo porque eres la persona mas hermosa que he conocido.
            diciembre 2: Te amo porque me haces querer vivir.
            diciembre 3: Te amo porque me inspiras a ser mejor.
            diciembre 4: Te amo porque contigo aprendí lo que es el amor.
            diciembre 5: Te amo porque me haces ser yo mismo.
            diciembre 6: Te amo porque somos el complemento del otro.
            diciembre 7: Te amo porque me diste ganas de vivir mi propia vida.
            diciembre 8: Te amo porque me haces feliz.
            diciembre 9: Te amo porque me hiciste apreciar el arte.
            diciembre 10: Te amo porque eres única.
            diciembre 11: Te amo porque sin tí no sabría lo que es de verdad el amor genuino.
            diciembre 12: Te amo porque contigo puedo ser mejor.
            diciembre 13: Te amo porque contigo no veo imposibles.
            diciembre 14: Te amo porque eres asombrosa, y nunca te rindes.
            diciembre 15: Te amo porque en tus ojos veo pasión por lo que te gusta.
            diciembre 16: Te amo porque eres tú, felíz aniversario, mi amor <3,,, Imagino un futuro juntos, te prometo que lo hago ^^.
            diciembre 17: Te amo porque a pesar de todo, sigues aquí.
            diciembre 18: Te amo porque contigo aprendí a amar.
            diciembre 19: Te amo porque me hiciste ver cosas nuevas.
            diciembre 20: Te amo porque me diste un futuro.
            diciembre 21: Te amo porque me haces querer luchar por nosotros.
            diciembre 22: Te amo porque me hiciste pensar en lo que siente mi corazón.
            diciembre 23: Te amo porque me haces querer ser feliz.
            diciembre 24: Te amo porque incluso a la distancia te siento parte de mi.
            diciembre 25: Te amo porque al pensar en una navidad familiar no puedo evitar imaginarte a ti.
            diciembre 26: Te amo porque gracias a ti continúo en la escuela, para darte un futuro, si, a ti ^^.
            diciembre 27: Te amo porque me haces querer soñar.
            diciembre 28: Te amo porque me haces querer vivir el presente mientras pienso en el futuro, un futuro contigo.
            diciembre 29: Te amo porque somos tan parecidos y a la vez tan diferentes.
            diciembre 30: Te amo porque solo contigo genuinamente me divierto y la paso bien.
            diciembre 31: Te amo porque desde que te conozco, 'un año nuevo' significa algo, un año menos para estar contigo.
            enero 1: Amo que tengas amor por la vida.
            enero 2: Amo que seas tan dedicada a tus metas.
            enero 3: Amo que seas tan apasionada por lo que te gusta.
            enero 4: Amo que seas tan creativa, eres mi artista favorita, nunca me cansaré de repetirlo <3.
            enero 5: Amo que nunca te rindas.
            enero 6: Amo que seas tan fuerte.
            enero 7: Amo que tengas un corazón tan grande.
            enero 8: Amo que de vez en cuando uses tu poco tiempo libre para hablar conmigo.
            enero 9: Amo que a pesar de todo sigas aquí.
            enero 10: Amo que no te hayas rendido.
            enero 11: Amo que hayas permanecido a mi lado.
            enero 12: Amo que sigas diciendo que me extrañas, me das esperanza.
            enero 13: Amo que sigas queriéndome.
            enero 14: Amo que de vez en cuando digas de hacer algo juntos, me encantaría hacer mas cosas juntos.
            enero 15: Amo que estés cumpliendo tus sueños.
            enero 16: Amo que no me hayas olvidado.
            enero 17: Amo que sigas siendo tú.
            enero 18: Amo que a pesar de todo sigas pensando en nosotros.
            enero 19: Amo que sigas queriendo hablar conmigo.
            enero 20: Amo que mantengas tu bio compartida conmigo.
            enero 21: Amo que sigas interesándote al menos un poco por mi vida.
            enero 22: Amo que sigas hablando conmigo y me cuentes tus días.
            enero 23: Amo que te siga amando, ironico, ¿no?.
            enero 24: Amo que continúo esperando por ti.
            enero 25: Amo que aún pienso en nuestro futuro.
            enero 26: Amo que sigas siendo parte de mi vida.
            enero 27: Amo que sigas siendo mi inspiración.
            enero 28: Amo que seas tan creativa.
            enero 29: Amo que sigas siendo mi motivación para seguir.
            enero 30: Amo que sigas siendo mi todo.
            enero 31: Amo que sigues siendo la persona que más amo en el mundo.
            febrero 1: 'A partir de cierto punto no hay retorno; ese es el punto que hay que alcanZar'</br> - Franz Kafka.
            febrero 2: 'Tenías mil razones para quedarte y tan solo te bastó un motivo para irte, algo sin sentido que me hizo pensar,,, que siempre te quisiste marchar' </br> - Mario Benedetti.
            febrero 3: 'Una carta no tiene importancia, por una te escribiré diez, Y si rompes las diez, las reemplazaré con cien' </br> - Franz Kafka.
            febrero 4: 'Si tuviera que volver a comenzar mi vida, intentaría encontrarte mucho antes' </br> - Antoine de Saint-Exupéry.
            febrero 5: 'No es lo que siento por ti, es lo que no siento por nadie más, tampoco es lo que hago por ti, es lo que no hago por nadie más' </br> - Jaime Sabines.
            febrero 6: 'La amistad puede convertirse en amor, El amor en amistad,,, nunca' </br> - Albert Camus.
            febrero 7: 'En fin, aquí me tienes siempre, No pienses, aunque haya silencio, que también hay olvido, Tu sabes que no es así, Nunca podrá ser' </br> - Alejandra Pizarnik.
            febrero 8: 'Hay veces en las que debemos alejarnos de quienes queremos, precisamente porque los queremos' </br> - C,C.
            febrero 9: 'Ojalá nunca hayas leido nada de lo que te he escrito, porque me destrozaría saber que a pesar de eso no me has buscado' </br> - Mario Benedetti.
            febrero 10: 'Jamás tendré la fuerza necesaria para prescindir de ti, lo siento asi, pero esto, que en otros lo consideraría una virtud, será mi mayor pecado' </br> - Franz Kafka.
            febrero 11: 'Hay que querer hasta el extremo de alcanzar el fin; todo lo demás son insignificacias' </br> - Fiodor Dostoievski.
            febrero 12: 'Voy detrás de ti como nunca nadie fue, voy detrás de ti como nunca nadie andará' </br> - Caifanes.
            febrero 13: 'Amar de verdad es aceptar la incertidumbre del futuro y el miedo que la acompaña, sabiendo que no hay garantías ni regreso; es entender que solo existe este instante y, aun asi, elegir quedarse, porque el amor vive en el ahora y la esperanza nace al decidirlo pese al riesgo de perderlo' </br> - Alex.
            febrero 14: Hoy sería un día a celebrar, un día en el que las parejas tienen un espacio y suspiran juntos, desde luego que esta no es la forma mas convencional para vivir este día, pero al menos es original, ¿no? Por cada día que hemos pasado separados, es un día que te he dicho que te amo, escribí todos los días, esperando a que mis palabras llegasen a ti en algún momento, y ese momento es ahora, ¿Mis palabras llegaron realmente a ti? ¿Sentiste algo? No tienes que responder, solo pensar en ello, He preparado un par de cosas mas que espero puedas experimentar, no deberías tardar mas de 20 minutos en terminar, no quise hacer de mas ya que cuando leas esto probablemente tengas cosas mas importantes que hacer que perder el tiempo aquí, nunca me mencionaste lo contrario asi que es suposición, espero que esta breve aventura que experimentarás sea suficiente para que al menos sonrías, me haría felíz que sonrieses con algo que haya hecho yo,,, Para progresar, ¿Viste algo diferente en algunos sobres? ¿Quizás algun color distinto? Mira la segunda letra mayúscula de los 4 sobres distintos, y una vez formes la palabra, son 4 en total, de tal modo que quedaría así: ([,,,]/github,io/[4LetrasEnMinuscula]), mucha suerte mi niña <3.
            `;
//febrero 14: Si estás viendo este mensaje, es porque las cosas salieron mal, y lo nuestro finalmente no pudo ser, es una lástima, ésta página de aqui fue el trabajo que estuve realizando desde que terminamos, debido a que no me permitiste el decirte lo mucho que te amaba, quise hacer esto, para que supieras que nunca dejé de pensar en ti, son casi 900 lineas de código, había sobres con colores de corazón distintos, simbolizando que habría un secreto, pero no te molestes en buscar, aun no lo he hecho, como puedes ver, hay un patron en los mensajes, todos los mensajes de cada mes empiezan igual, noviembre sería "Amo cuando [actividad]", diciembre sería "Te amo porque [razón]", enero sería "Amo que [pensamiento tuyo]" y finalmente febrero tendría distintas citas de libros o momentos juntos, asi que nunca esperes menos de nadie, te amo y te amaré siempre,,, feliz san valentín adelantado, espero te haya gustado este regalo, adiós, Leyley <3.
//febrero 14: Hoy sería un día a celebrar, un día en el que las parejas tienen un espacio y suspiran juntos, desde luego que esta no es la forma mas convencional para mencionar eso, pero al menos es original, ¿no? Por cada día que hemos pasado separados, es un día que te he dicho que te amo, escribí todos los días, esperando a que mis palabras llegasen a ti en algún momento, y ese momento es ahora, ¿Mis palabras llegaron realmente a ti? ¿Sentiste algo? No tienes que responder, solo pensar en ello, He preparado un par de cosas mas que espero puedas experimentar, no deberías tardar mas de 20 minutos en terminar, no quise hacer de mas ya que cuando leas esto probablemente tengas cosas mas importantes que hacer que perderlas aquí, nunca me mencionaste lo contrario asi que es suposición, espero que esta breve aventura que experimentarás sea suficiente para que al menos sonrías, me haría felíz que sonrieses con algo que haya hecho yo,,, Para progresar, ¿Viste algo diferente en algunos sobres? ¿Quizás algun color distinto? Mira la segunda letra mayúscula de los 4 sobres distintos, y una vez formes la palabra, colocala en la URL despues del signo '/'.
//febrero 14: Si estás viendo este mensaje, es porque las cosas salieron mal, y lo nuestro finalmente no pudo ser, es una lástima, ésta página de aqui fue el trabajo que estuve realizando desde que terminamos, empieza el 5 de sept porque fue un día despues de mi mensaje y que supiese que, aunque las probabilidades fueran infimas, aún existía algo por lo que pelear y, debido a que no me permitiste el decirte lo mucho que te amaba en todo este tiempo, quise hacer esto, para que supieras que nunca dejé de pensar en ti, todos los días, sin falta alguna, escribía un mensaje para ti, en papel, celular, o computadora, esta página es una pequeña aventura que debías jugar, hay sobres con colores de corazón distintos, 4 en total, pon la segunda mayuscula en la url ([,,,]/github,io/[4LetrasEnMinuscula]),,, es un regalo que me llevó mucho tiempo, tiempo que, incluso sin ser mi pareja, te lo dí, te dí mi tiempo, y un pedazo de mi corazón se quedará en esta página para que sientas su calidez cada que quieras volver aquí, asi que nunca esperes menos de tu próxima pareja, es un regalo con un nivel de detalle que te mereces tener, te amo y te amaré siempre, jamás podrás saber lo mucho que te amo, pero creeme, te amo hasta morir,,, feliz san valentín adelantado, espero que te hayan gustado estos mensajes y te guste el resto, te aviso desde ya que la ultima fase va a ser mandarme un mensaje a mi, asi que dependiendo lo que haya ocurrido podrá ser imposible de que llegues al final, si estás leyendo esto ahora es muy probable que no nos hablemos mas, pero no pierdes nada por intentarlo, ¿no?,,, éste es el adiós, cuidate, y cumple todas tus metas, hazlo por ambos, si en unos años sigo vivo, necesito saber que triunfaste, necesito saber que tus obras triunfaron, necesito saber que te casaste o comprometiste en Italia, necesito saber que eres felíz, y que la persona con la que decidiste estar te ama tanto como yo, nuevamente, este es el ádios, te amo, mi linda y preciosa Leyley <3.
const diasEspeciales = [
    { dia: 23, mes: 8, año: 2025 },
    { dia: 3, mes: 9, año: 2025 }, 
    { dia: 16, mes: 11, año: 2025 },
    { dia: 1, mes: 1, año: 2026 }
];

const mensajes = {};
mensajesBrutos.split(".").forEach(linea => {
    const limpio = linea.trim();
    if (!limpio) return;

    const [fechaParte, ...mensajeParte] = limpio.split(":");
    const mensaje = mensajeParte.join(":").trim();

    if (fechaParte && mensaje) {
        let [mesTexto, dia] = fechaParte.trim().split(" ");
        dia = parseInt(dia);

        const mesIndex = meses.findIndex(m => m.toLowerCase() === mesTexto.toLowerCase());
        if (mesIndex >= 0) {
            const año = (mesIndex < 8 ? 2026 : 2025);
            mensajes[`${dia}-${mesIndex}-${año}`] = mensaje;
        }
    }
});

let mesActual = fechaInicio.getMonth();
let añoActual = fechaInicio.getFullYear();

function esBisiesto(año) {
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

function getDiasMes(mes, año) {
    if (mes === 1 && esBisiesto(año)) return 29;
    return diasPorMes[mes];
}

function actualizarCalendario() {
    const monthDisplay = document.getElementById('monthDisplay');
    const calendarGrid = document.getElementById('calendarGrid');

    monthDisplay.textContent = `${meses[mesActual]} ${añoActual}`;
    calendarGrid.innerHTML = '';

    const diasEnMes = getDiasMes(mesActual, añoActual);

    for (let dia = 1; dia <= diasEnMes; dia++) {
        const fecha = new Date(añoActual, mesActual, dia);
        const bloqueado = fecha < fechaInicio || fecha > fechaFin;

        const dayContainer = document.createElement('div');
        dayContainer.className = 'day-container';

        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = dia;

        const envoltura = document.createElement('div');
        envoltura.className = 'envoltura-sobre';
        envoltura.dataset.dia = dia;
        envoltura.dataset.mes = mesActual;
        envoltura.dataset.año = añoActual;

        if (bloqueado) {
            envoltura.style.opacity = "0.3";
            envoltura.style.pointerEvents = "none";
        }

        const clave = `${dia}-${mesActual}-${añoActual}`;
        const mensaje = mensajes[clave];

        function esCorazonEspecial(dia, mes, año) {
            return diasEspeciales.some(fecha =>
                fecha.dia === dia && fecha.mes === mes && fecha.año === año
            );
        }

        if (mensaje) {
            const esCartaEspecial = dia === 14 && mesActual === 1 && añoActual === 2026;

            if (esCartaEspecial) {
                const claseCorazon = esCorazonEspecial(dia, mesActual, añoActual) ? 'corazon especial' : 'corazon';
                envoltura.innerHTML = `
                            <div class="sobre"></div>
                            <div class="solapa solapa-superior"></div>
                            <div class="solapa solapa-derecha"></div>
                            <div class="solapa solapa-izquierda"></div>
                            <div class="${claseCorazon}"></div>
                            <div class="carta">
                                <div class="contenido">
                                    <p class="saludo">Para Leslie,</p>
                                    <p class="cuerpo-feb14">${mensaje}</p>
                                    <div class="bloque-firma">
                                        <img src="/fotito.png" alt="Aquí hubiera estado una foto juntos jsjs ^^" class="imagen-recuerdo">
                                        <p class="firma">Con mucho amor,<br>Alex</p>
                                    </div>
                                </div>
                            </div>
                        `;
            } else {
                const claseCorazon = esCorazonEspecial(dia, mesActual, añoActual) ? 'corazon especial' : 'corazon';
                envoltura.innerHTML = `
                            <div class="sobre"></div>
                            <div class="solapa solapa-superior"></div>
                            <div class="solapa solapa-derecha"></div>
                            <div class="solapa solapa-izquierda"></div>
                            <div class="${claseCorazon}"></div>
                            <div class="carta normal">
                                <div class="contenido">
                                    <p class="cuerpo">${mensaje}</p>
                                </div>
                            </div>
                        `;
            }
        } else {
            envoltura.innerHTML = `
                    <div class="sobre"></div>
                    <div class="solapa solapa-superior"></div>
                    <div class="solapa solapa-derecha"></div>
                    <div class="solapa solapa-izquierda"></div>
                    <div class="corazon"></div>
                `;
            envoltura.style.pointerEvents = "none";
            envoltura.style.opacity = "0.5";
        }

        dayContainer.appendChild(dayNumber);
        dayContainer.appendChild(envoltura);
        calendarGrid.appendChild(dayContainer);
    }

    agregarEventListeners();
}

document.getElementById('prevMonth').addEventListener('click', () => {
    const nuevaFecha = new Date(añoActual, mesActual - 1);
    if (nuevaFecha >= new Date(fechaInicio.getFullYear(), fechaInicio.getMonth())) {
        mesActual--;
        if (mesActual < 0) {
            mesActual = 11;
            añoActual--;
        }
        actualizarCalendario();
    }
});

document.getElementById('nextMonth').addEventListener('click', () => {
    const nuevaFecha = new Date(añoActual, mesActual + 1);
    if (nuevaFecha <= new Date(fechaFin.getFullYear(), fechaFin.getMonth())) {
        mesActual++;
        if (mesActual > 11) {
            mesActual = 0;
            añoActual++;
        }
        actualizarCalendario();
    }
});

function agregarEventListeners() {
    const envolturasCartas = document.querySelectorAll('.envoltura-sobre');
    const overlay = document.getElementById('overlay');
    let cartaAbierta = null;
    let isAnimating = false;

    envolturasCartas.forEach(envoltura => {
        envoltura.addEventListener('click', (e) => {
            e.stopPropagation();

            if (isAnimating) return;

            const carta = envoltura.querySelector('.carta');
            if (!carta) return;

            if (!envoltura.classList.contains('abierto')) {
                if (cartaAbierta && cartaAbierta !== envoltura) {
                    cerrarCarta(cartaAbierta);
                }

                abrirCarta(envoltura);
                cartaAbierta = envoltura;
            }
        });
    });

    function abrirCarta(envoltura) {
        isAnimating = true;
        envoltura.classList.add('abierto');
        overlay.classList.add('active');

        const carta = envoltura.querySelector('.carta');
        carta.addEventListener('animationend', () => {
            isAnimating = false;
        }, { once: true });
    }

    function cerrarCarta(envoltura) {
        isAnimating = true;
        envoltura.classList.add('cerrando');
        overlay.classList.remove('active');

        const carta = envoltura.querySelector('.carta');
        carta.addEventListener('animationend', () => {
            envoltura.classList.remove('abierto', 'cerrando');
            isAnimating = false;
        }, { once: true });
    }

    overlay.addEventListener('click', () => {
        if (cartaAbierta && !isAnimating) {
            cerrarCarta(cartaAbierta);
            cartaAbierta = null;
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartaAbierta && !isAnimating) {
            cerrarCarta(cartaAbierta);
            cartaAbierta = null;
        }
    });
}

function mostrarCalendario() {
    document.getElementById('welcomeScreen').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('mainContent').classList.add('visible');
    }, 500);
}


actualizarCalendario();