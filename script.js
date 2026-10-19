'use strict';

/* English Base: banco de preguntas escrito previamente y comprobado para nivel principiante. */
const questionBank = [];
let nextQuestionId = 1;
function add(theme, level, type, prompt, answer, wrong = [], explanation = '', context = '') {
  questionBank.push({
    id: nextQuestionId++, theme, level, type, prompt, answer,
    options: type === 'order' ? [] : [answer, ...wrong],
    explanation, context
  });
}

const THEMES = [
  'Saludos, números y calendario',
  'Familia, animales y cuerpo',
  'Comida, aula y lugares',
  'Pronombres y verbo to be',
  'Artículos, posesivos y demostrativos',
  'Presente simple y auxiliares',
  'Have/has, there is/are y plurales',
  'Preposiciones, can y comparativos',
  'Preguntas y orden de palabras',
  'Comprensión y traducción'
];

// Tema 1: saludos, números, colores, días y meses (20 preguntas)
const T = THEMES[0];
add(T,1,'mcq','What do you say when you meet someone in the morning?','Good morning',['Good night','Goodbye','See you later'],'“Good morning” se usa para saludar por la mañana.');
add(T,1,'matching','What does “Goodbye” mean?','Adiós',['Buenos días','Por favor','Gracias'],'“Goodbye” se usa para despedirse.');
add(T,1,'mcq','Choose the correct reply: “How are you?”','I am fine, thanks.',['My name fine.','I have fine.','I fine are.'],'Una respuesta común es “I am fine, thanks”.');
add(T,1,'mcq','Which number is “twelve”?','12',['20','2','10'],'“Twelve” significa doce.');
add(T,1,'mcq','What number comes after nineteen?','Twenty',['Thirty','Eighteen','Twelve'],'Después de nineteen (19) viene twenty (20).');
add(T,1,'translate','Choose the translation of “red”.','Rojo',['Azul','Verde','Amarillo'],'“Red” significa rojo.');
add(T,1,'mcq','Which color is the sky on a clear day?','Blue',['Brown','Pink','Black'],'“Blue” significa azul.');
add(T,1,'mcq','Which day comes after Monday?','Tuesday',['Sunday','Friday','Saturday'],'El día posterior a Monday es Tuesday.');
add(T,2,'mcq','Which day is usually the first day of the weekend?','Saturday',['Wednesday','Monday','Thursday'],'En el uso común, Saturday (sábado) es parte del fin de semana.');
add(T,2,'mcq','Which month comes before April?','March',['May','January','June'],'March es marzo y va antes de April (abril).');
add(T,2,'mcq','Which month is the first month of the year?','January',['February','December','October'],'January significa enero.');
add(T,2,'mcq','Choose the correct greeting for the evening.','Good evening',['Good afternoon','Good morning','Goodbye morning'],'“Good evening” se usa para saludar por la tarde-noche.');
add(T,2,'translate','What does “See you later” mean?','Hasta luego',['Mucho gusto','Buenos días','Lo siento'],'“See you later” es una despedida: hasta luego.');
add(T,2,'mcq','Which spelling is correct for the number 8?','Eight',['Eigt','Aight','Eit'],'La escritura correcta de ocho es “eight”.');
add(T,3,'mcq','It is 7:00 a.m. Which greeting is most appropriate?','Good morning',['Good night','Good evening','Good afternoon'],'A las siete de la mañana se usa normalmente “Good morning”.');
add(T,3,'translate','Choose the best translation: “Have a nice day!”','¡Que tengas un buen día!',['¡Buenas noches!','¡Nos vemos ayer!','¡Feliz cumpleaños!'],'Es una expresión para desear un buen día.');
add(T,3,'mcq','Which sequence is in the correct calendar order?','January, February, March',['March, January, February','February, March, January','January, March, February'],'El orden correcto empieza enero, febrero y marzo.');
add(T,3,'mcq','A person says “Thank you.” What is a suitable reply?','You’re welcome.',['I’m sorry.','Good night.','Excuse me?'],'“You’re welcome” significa “de nada”.');
add(T,3,'mcq','Which number is between thirty and thirty-two?','Thirty-one',['Twenty-one','Thirty-three','Thirteen'],'Thirty-one significa treinta y uno.');
add(T,3,'translate','What does “What is your favorite color?” mean?','¿Cuál es tu color favorito?',['¿De qué color es tu casa?','¿Dónde está el color?','¿Cuántos colores tienes?'],'“Favorite color” significa “color favorito”.');

// Tema 2: familia, animales, cuerpo y ropa (20 preguntas)
const T2 = THEMES[1];
add(T2,1,'translate','What does “mother” mean?','Madre',['Hermana','Tía','Abuela'],'“Mother” significa madre.');
add(T2,1,'mcq','Your father’s daughter is your…','Sister',['Mother','Cousin','Grandmother'],'La hija de tu padre puede ser tu hermana.');
add(T2,1,'mcq','Which animal says “meow”?','Cat',['Dog','Cow','Horse'],'Un gato hace “meow”.');
add(T2,1,'mcq','Which animal can fly and has feathers?','Bird',['Fish','Dog','Cow'],'“Bird” significa ave o pájaro.');
add(T2,1,'translate','What does “hand” mean?','Mano',['Cabeza','Pie','Rodilla'],'“Hand” significa mano.');
add(T2,1,'mcq','Which body part do you use to see?','Eyes',['Ears','Hands','Feet'],'Usamos los ojos (eyes) para ver.');
add(T2,1,'translate','What does “shirt” mean?','Camisa',['Zapatos','Sombrero','Pantalones'],'“Shirt” significa camisa.');
add(T2,1,'mcq','Which animal lives in water and has fins?','Fish',['Lion','Chicken','Rabbit'],'“Fish” significa pez.');
add(T2,2,'mcq','Your mother’s mother is your…','Grandmother',['Aunt','Sister','Niece'],'La madre de tu madre es tu abuela.');
add(T2,2,'translate','What does “uncle” mean?','Tío',['Primo','Sobrino','Abuelo'],'“Uncle” significa tío.');
add(T2,2,'mcq','Which body part is between your hand and your shoulder?','Arm',['Foot','Head','Back'],'El brazo conecta la mano con el hombro.');
add(T2,2,'mcq','You wear these on your feet.','Shoes',['Gloves','Glasses','Scarf'],'“Shoes” significa zapatos.');
add(T2,2,'mcq','Which animal is known for barking?','Dog',['Cat','Duck','Sheep'],'Los perros suelen ladrar; “dog” significa perro.');
add(T2,2,'translate','What does “cousin” mean?','Primo o prima',['Padre','Hermano mayor','Nieto'],'“Cousin” se usa para primo o prima.');
add(T2,3,'mcq','Anna is my father’s sister. Anna is my…','Aunt',['Niece','Granddaughter','Mother'],'La hermana de tu padre es tu tía: aunt.');
add(T2,3,'mcq','Which word names a part of the face?','Nose',['Knee','Finger','Elbow'],'“Nose” significa nariz.');
add(T2,3,'translate','Choose the translation of “These are my gloves.”','Estos son mis guantes.',['Este es mi abrigo.','Esos son tus calcetines.','Estas son mis camisas.'],'“These are” significa “estos/estas son”.');
add(T2,3,'mcq','Which item do you usually wear when it is cold around your neck?','Scarf',['Shorts','Sandals','T-shirt'],'“Scarf” significa bufanda.');
add(T2,3,'mcq','A baby dog is called a…','Puppy',['Kitten','Calf','Chick'],'“Puppy” significa cachorro de perro.');
add(T2,3,'mcq','Which sentence correctly describes two brothers?','They are brothers.',['He are brother.','They is brothers.','Them are brother.'],'“They are” se usa con un sujeto plural.');

// Tema 3: alimentos, salón de clases, lugares y profesiones (20 preguntas)
const T3 = THEMES[2];
add(T3,1,'translate','What does “water” mean?','Agua',['Leche','Pan','Jugo'],'“Water” significa agua.');
add(T3,1,'mcq','Which food is usually made from flour and used for sandwiches?','Bread',['Rice','Cheese','Apple'],'“Bread” significa pan.');
add(T3,1,'mcq','You write with a…','Pencil',['Plate','Pillow','Window'],'“Pencil” significa lápiz.');
add(T3,1,'translate','What does “book” mean?','Libro',['Silla','Puerta','Reloj'],'“Book” significa libro.');
add(T3,1,'mcq','Where do students usually study?','At school',['At the hospital','At the airport','At the farm'],'Los estudiantes normalmente estudian en la escuela.');
add(T3,1,'mcq','Who teaches students?','Teacher',['Chef','Pilot','Farmer'],'“Teacher” significa maestro o maestra.');
add(T3,1,'translate','What does “apple” mean?','Manzana',['Zanahoria','Pollo','Arroz'],'“Apple” significa manzana.');
add(T3,1,'mcq','Which room is used to cook food at home?','Kitchen',['Bathroom','Bedroom','Garage'],'“Kitchen” significa cocina.');
add(T3,2,'mcq','Which person helps sick people in a hospital?','Doctor',['Baker','Singer','Driver'],'Un doctor ayuda a las personas enfermas.');
add(T3,2,'translate','What does “library” mean?','Biblioteca',['Panadería','Estación','Piscina'],'“Library” significa biblioteca.');
add(T3,2,'mcq','Choose the drink.','Milk',['Bread','Egg','Carrot'],'“Milk” significa leche.');
add(T3,2,'mcq','Which object do you sit on in a classroom?','Chair',['Board','Pencil','Notebook'],'“Chair” significa silla.');
add(T3,2,'translate','What does “police officer” mean?','Policía',['Cocinero','Enfermero','Artista'],'“Police officer” significa policía.');
add(T3,2,'mcq','You borrow books here. Where are you?','At the library',['At the bakery','At the bank','At the beach'],'En la biblioteca se pueden consultar o pedir prestados libros.');
add(T3,3,'mcq','Which sentence is a polite way to ask for food?','Can I have a sandwich, please?',['I sandwich want now.','Give me sandwich.','Can I am sandwich?'],'“Can I have… please?” es una forma sencilla y amable de pedir algo.');
add(T3,3,'mcq','A person who prepares food in a restaurant is a…','Cook',['Dentist','Mechanic','Nurse'],'“Cook” significa cocinero o cocinera.');
add(T3,3,'translate','Choose the translation: “The students are in the classroom.”','Los estudiantes están en el salón de clases.',['Los maestros están en casa.','El estudiante está en la biblioteca.','Los estudiantes están en el hospital.'],'“Classroom” significa salón de clases.');
add(T3,3,'mcq','Which pair contains two school objects?','Notebook and ruler',['Apple and milk','Window and doctor','Shirt and shoe'],'Notebook (cuaderno) y ruler (regla) son objetos escolares.');
add(T3,3,'mcq','Where would you most likely buy bread?','At a bakery',['At a hospital','At a school','At a police station'],'“Bakery” significa panadería.');
add(T3,3,'mcq','Which word is a profession?','Nurse',['Hungry','Kitchen','Purple'],'“Nurse” significa enfermero o enfermera.');

// Tema 4: pronombres personales y verbo to be (20 preguntas)
const T4 = THEMES[3];
add(T4,1,'mcq','Choose the correct pronoun: Maria is my friend. ___ is kind.','She',['He','They','We'],'Usamos “she” para una mujer o niña.');
add(T4,1,'fill','I ___ a student.','am',['is','are','be'],'Con “I” se usa “am”: I am a student.');
add(T4,1,'fill','He ___ my brother.','is',['am','are','be'],'Con “he” se usa “is”.');
add(T4,1,'fill','They ___ at school.','are',['is','am','be'],'Con “they” se usa “are”.');
add(T4,1,'mcq','Which pronoun replaces “Carlos and I”?','We',['They','He','You'],'“Carlos and I” incluye a quien habla, por eso se reemplaza por “we”.');
add(T4,1,'fill','You ___ my friend.','are',['am','is','be'],'Con “you” se usa “are”.');
add(T4,1,'mcq','Choose the pronoun for a table.','It',['He','She','They'],'Para un objeto singular como una mesa se usa “it”.');
add(T4,1,'mcq','Which sentence is correct?','We are happy.',['We is happy.','We am happy.','We be happy.'],'“We” se combina con “are”.');
add(T4,2,'fill','My parents ___ teachers.','are',['is','am','be'],'“My parents” es plural; se usa “are”.');
add(T4,2,'mcq','Choose the negative form: “I am tired.”','I am not tired.',['I not am tired.','I is not tired.','I do not tired.'],'Para negar con “to be” se añade “not” después del verbo.');
add(T4,2,'mcq','Choose the correct question.','Are you ready?',['You are ready?','Do you are ready?','Is you ready?'],'En preguntas con “to be”, el verbo va antes del sujeto.');
add(T4,2,'fill','It ___ cold today.','is',['are','am','be'],'Con “it” se usa “is”.');
add(T4,2,'mcq','Complete: “___ they your classmates?”','Are',['Am','Is','Be'],'La pregunta con “they” empieza con “are”.');
add(T4,2,'mcq','Choose the correct contraction for “she is”.','She’s',['Shes','She’re','She am'],'“She’s” es la contracción de “she is”.');
add(T4,3,'mcq','Choose the correct sentence.','The children are excited.',['The children is excited.','The children am excited.','The children be excited.'],'“Children” es plural, así que usamos “are”.');
add(T4,3,'mcq','Choose the correct short answer: “Is he at home?”','Yes, he is.',['Yes, he are.','Yes, he does.','Yes, is he.'],'La respuesta corta conserva “is”: Yes, he is.');
add(T4,3,'mcq','Choose the correct negative sentence.','They aren’t late.',['They isn’t late.','They don’t late.','They not are late.'],'“Aren’t” significa “are not” y se usa con “they”.');
add(T4,3,'mcq','Choose the correct question for the answer “I’m from Mexico.”','Where are you from?',['Where you are from?','Where do you from?','What you are from?'],'“Where are you from?” pregunta de dónde es alguien.');
add(T4,3,'mcq','Select the correct form: “My name ___ Luis.”','is',['am','are','be'],'“My name” es singular, por eso se usa “is”.');
add(T4,3,'mcq','Which sentence correctly talks about three friends?','They are in the park.',['He is in the park.','They is in the park.','We am in the park.'],'“They are” se usa para hablar de varias personas.');

// Tema 5: artículos, posesivos y demostrativos (20 preguntas)
const T5 = THEMES[4];
add(T5,1,'fill','I have ___ apple.','an',['a','the','some'],'“An” se usa antes de un sonido de vocal, como en “apple”.');
add(T5,1,'fill','She has ___ book.','a',['an','thee','are'],'“Book” empieza con sonido consonántico, por eso va “a”.');
add(T5,1,'mcq','Choose the possessive adjective: This is ___ bag. (I)','my',['me','mine is','I'],'El adjetivo posesivo correspondiente a “I” es “my”.');
add(T5,1,'mcq','This is Ana. ___ brother is Tom.','Her',['His','Our','Their'],'“Her” expresa posesión de una mujer o niña.');
add(T5,1,'mcq','Choose the demonstrative for one object near you.','This',['Those','These','They'],'“This” se usa para un objeto singular cercano.');
add(T5,1,'mcq','Choose the demonstrative for several objects near you.','These',['This','That','It'],'“These” se usa para objetos plurales cercanos.');
add(T5,1,'fill','Those are ___ shoes. (you)','your',['you','yours are','our'],'“Your” es el adjetivo posesivo de “you”.');
add(T5,1,'mcq','Which article is used for a specific book already mentioned?','the',['a','an','am'],'“The” señala algo específico o conocido.');
add(T5,2,'fill','He loves ___ dog.','his',['her','their','our'],'“His” es el adjetivo posesivo de “he”.');
add(T5,2,'mcq','Choose the demonstrative for one object far away.','That',['This','These','Those ones is'],'“That” se usa para un objeto singular lejano.');
add(T5,2,'mcq','Choose the demonstrative for several objects far away.','Those',['That','This','These'],'“Those” se usa para objetos plurales lejanos.');
add(T5,2,'fill','We are students. This is ___ classroom.','our',['their','his','your'],'“Our” significa nuestro/nuestra.');
add(T5,2,'mcq','Choose the correct phrase.','an orange',['a orange','the orange one is','an oranges'],'“Orange” empieza con sonido de vocal, por eso se usa “an”.');
add(T5,2,'mcq','Which sentence correctly shows possession by a group?','Their house is big.',['They house is big.','Them house is big.','Theirs house is big.'],'Antes del sustantivo “house” se usa “their”.');
add(T5,3,'mcq','You see two pencils in your hand. Choose the sentence.','These are my pencils.',['This are my pencils.','Those is my pencils.','These is my pencil.'],'“These are” concuerda con objetos plurales cercanos.');
add(T5,3,'mcq','Choose the correct phrase for one hour.','an hour',['a hour','the hours','an hours'],'La h de “hour” no se pronuncia, así que inicia con sonido de vocal.');
add(T5,3,'mcq','Choose the correct sentence about a boy named Leo.','His sister is twelve.',['Her sister is twelve.','He sister is twelve.','Him sister is twelve.'],'“His” es el posesivo que corresponde a Leo en esta oración.');
add(T5,3,'mcq','Which sentence uses “the” naturally for a unique object in context?','Please close the door.',['Please close a door now the.','Please close an door.','Please close door the.'],'“The door” indica una puerta específica, por ejemplo, la de la habitación.');
add(T5,3,'mcq','Choose the correct sentence.','That is her backpack.',['That are her backpack.','Those is her backpack.','That is she backpack.'],'“That is” concuerda con un objeto singular.');
add(T5,3,'mcq','Choose the correct possessive adjective: “The dog is wagging ___ tail.”','its',['it’s','their','his are'],'“Its” indica posesión de un animal u objeto; “it’s” significa “it is”.');

// Tema 6: presente simple y auxiliares do/does (20 preguntas)
const T6 = THEMES[5];
add(T6,1,'fill','I ___ soccer every Saturday.','play',['plays','playing','am play'],'Con “I” en presente simple se usa la forma base “play”.');
add(T6,1,'mcq','Choose the correct sentence.','She likes music.',['She like music.','She liking music.','She do likes music.'],'En afirmaciones con “he/she/it”, normalmente se añade -s al verbo.');
add(T6,1,'fill','They ___ English at school.','study',['studies','studying','studys'],'Con “they” se usa la forma base “study”.');
add(T6,1,'mcq','Choose the correct negative sentence.','I don’t like coffee.',['I doesn’t like coffee.','I not like coffee.','I don’t likes coffee.'],'Con “I” se usa “don’t” y el verbo queda en su forma base.');
add(T6,1,'mcq','Choose the correct question.','Do you play tennis?',['Does you play tennis?','Are you play tennis?','Do you plays tennis?'],'Para preguntar con “you” en presente simple se usa “do”.');
add(T6,1,'fill','My brother ___ TV after school.','watches',['watch','watching','watchs'],'Con “he” y verbos terminados en -ch se añade -es: watches.');
add(T6,1,'mcq','Complete: “We ___ live near the school.”','don’t',['doesn’t','aren’t','isn’t'],'La negación del presente simple con “we” se forma con “don’t”.');
add(T6,1,'mcq','Which verb form completes “He ___ to school by bus”?','goes',['go','going','is go'],'Con “he”, “go” cambia a “goes”.');
add(T6,2,'fill','___ your sister speak English?','Does',['Do','Is','Are'],'Con “your sister” (she) se usa “does”.');
add(T6,2,'mcq','Choose the correct short answer: “Do they work here?”','Yes, they do.',['Yes, they does.','Yes, they are.','Yes, do they.'],'La respuesta corta a “Do they…?” usa “they do”.');
add(T6,2,'mcq','Choose the correct negative sentence.','He doesn’t eat meat.',['He don’t eat meat.','He doesn’t eats meat.','He not eats meat.'],'Después de “doesn’t”, el verbo principal va en forma base: eat.');
add(T6,2,'fill','My parents ___ dinner at seven.','cook',['cooks','cooking','does cook'],'“My parents” es plural; el verbo no lleva -s.');
add(T6,2,'mcq','Choose the correct question about a daily habit.','What time does he get up?',['What time do he gets up?','What time does he gets up?','What time is he get up?'],'Después de “does”, se usa “get”, no “gets”.');
add(T6,2,'mcq','Choose the correct sentence.','Emma studies every evening.',['Emma study every evening.','Emma studys every evening.','Emma does studies every evening.'],'Con “study”, la tercera persona cambia -y por -ies: studies.');
add(T6,3,'mcq','Complete the dialogue: “___ you like pizza?” “Yes, I do.”','Do',['Does','Are','Is'],'La respuesta “Yes, I do” corresponde a una pregunta con “Do”.');
add(T6,3,'mcq','Choose the correct sentence about a routine.','My dad goes to work at eight.',['My dad go to work at eight.','My dad going to work at eight.','My dad does goes to work at eight.'],'En afirmación con “my dad” se usa “goes”.');
add(T6,3,'mcq','Which sentence is correct?','She doesn’t have a car.',['She don’t has a car.','She doesn’t has a car.','She isn’t have a car.'],'Después de “doesn’t” se usa el verbo base “have”.');
add(T6,3,'mcq','Choose the correct question.','Where do your friends live?',['Where does your friends live?','Where your friends do live?','Where are your friends live?'],'Con “your friends” se usa “do”; después va el sujeto y el verbo base.');
add(T6,3,'mcq','Choose the correct sentence for a habit.','Our teacher reads every day.',['Our teacher read every day.','Our teacher reading every day.','Our teacher does reads every day.'],'“Our teacher” es tercera persona singular: reads.');
add(T6,3,'error','Which sentence contains a grammar mistake?','She don’t like tea.',['She doesn’t like tea.','They don’t like tea.','He likes tea.'],'Con “she” se usa “doesn’t”, no “don’t”.');

// Tema 7: have/has, there is/are y plurales (20 preguntas)
const T7 = THEMES[6];
add(T7,1,'fill','I ___ a new notebook.','have',['has','having','am have'],'Con “I” se usa “have”.');
add(T7,1,'fill','She ___ two brothers.','has',['have','is have','having'],'Con “she” se usa “has”.');
add(T7,1,'mcq','Choose the correct sentence for one desk in a room.','There is a desk.',['There are a desk.','There be a desk.','It are a desk.'],'“There is” se usa para indicar que hay una cosa singular.');
add(T7,1,'mcq','Choose the correct sentence for three books.','There are three books.',['There is three books.','There be three books.','It is three books.'],'“There are” se usa con sustantivos plurales.');
add(T7,1,'mcq','What is the plural of “cat”?','Cats',['Cates','Caties','Cat’s'],'El plural regular de “cat” se forma añadiendo -s.');
add(T7,1,'mcq','What is the plural of “box”?','Boxes',['Boxs','Boxies','Boxen'],'En general, los sustantivos terminados en -x añaden -es.');
add(T7,1,'mcq','Choose the correct sentence.','I have a pencil.',['I has a pencil.','I am have a pencil.','I haves a pencil.'],'Con “I” se usa “have”.');
add(T7,1,'mcq','Complete: “There ___ two windows.”','are',['is','am','be'],'“Two windows” es plural, por eso usamos “are”.');
add(T7,2,'mcq','Choose the correct plural of “baby”.','Babies',['Babys','Babyes','Babys’'],'En muchos sustantivos que terminan en consonante + y, se cambia y por -ies.');
add(T7,2,'mcq','Choose the correct sentence.','He has a bicycle.',['He have a bicycle.','He haves a bicycle.','He having a bicycle.'],'Con “he” se usa “has”.');
add(T7,2,'mcq','Complete: “There isn’t ___ milk in the fridge.”','any',['many','a','these'],'“Any” se usa comúnmente en oraciones negativas con sustantivos incontables o plurales.');
add(T7,2,'mcq','Choose the correct question.','Are there any chairs?',['Is there any chairs?','There are chairs?','Do there are chairs?'],'Para preguntar por objetos plurales se usa “Are there…?”');
add(T7,2,'mcq','What is the plural of “child”?','Children',['Childs','Childes','Childrens'],'“Children” es el plural irregular de “child”.');
add(T7,2,'mcq','Choose the correct negative sentence.','She doesn’t have a car.',['She hasn’t a car. (for this basic pattern)','She don’t have a car.','She doesn’t has a car.'],'En presente simple negativo se usa “doesn’t have”.');
add(T7,3,'mcq','Choose the correct sentence.','There are five people in my family.',['There is five people in my family.','There are five person in my family.','There be five people in my family.'],'“People” es plural y se combina con “there are”.');
add(T7,3,'mcq','Choose the correct question for the answer “Yes, there are.”','Are there any students here?',['Is there any students here?','Do there students here?','There are students here?'],'“Yes, there are” responde a una pregunta con “Are there…?”');
add(T7,3,'mcq','Choose the correct sentence with an irregular plural.','The women are doctors.',['The womans are doctors.','The womens are doctor.','The woman are doctors.'],'El plural de “woman” es “women”.');
add(T7,3,'mcq','Choose the correct sentence.','My sister has two watches.',['My sister have two watchs.','My sister has two watch.','My sister haves two watches.'],'“Has” concuerda con “my sister”; el plural de “watch” es “watches”.');
add(T7,3,'mcq','Complete: “There ___ some rice on the plate.”','is',['are','have','do'],'“Rice” es incontable en este contexto, así que se usa “there is”.');
add(T7,3,'mcq','Choose the correct sentence about possession.','We have an English class today.',['We has an English class today.','We having an English class today.','We haves an English class today.'],'Con “we” se usa “have”.');

// Tema 8: preposiciones, habilidades con can y comparativos (20 preguntas)
const T8 = THEMES[7];
add(T8,1,'mcq','The book is ___ the table. (on top of it)','on',['under','behind','between'],'“On” significa sobre o encima de algo.');
add(T8,1,'mcq','The cat is ___ the box. You cannot see it because it is below the top.','under',['on','next to','behind'],'“Under” significa debajo de.');
add(T8,1,'mcq','The bank is ___ the school. They are side by side.','next to',['under','in','between'],'“Next to” significa al lado de.');
add(T8,1,'mcq','I ___ swim. I learned when I was six.','can',['cans','am can','do can'],'“Can” expresa habilidad y no cambia con el sujeto.');
add(T8,1,'mcq','Choose the negative form: “He can drive.”','He can’t drive.',['He doesn’t can drive.','He isn’t can drive.','He can’t drives.'],'La forma negativa de “can” es “cannot” o “can’t”; el verbo va en base.');
add(T8,1,'mcq','The ball is ___ the chair, so the chair hides it.','behind',['on','in front','next'],'“Behind” significa detrás de.');
add(T8,1,'mcq','Choose the correct ability question.','Can you dance?',['Do you can dance?','Are you can dance?','Can dance you?'],'Las preguntas con “can” empiezan con “can” seguido del sujeto.');
add(T8,1,'mcq','Which adjective describes a very tall building compared with a short one?','Taller',['Tallest','More tall than','Tallly'],'Para una comparación básica se usa “taller than”.');
add(T8,2,'mcq','The shoes are ___ the bed, beneath it.','under',['between','on','behind of'],'“Under the bed” significa debajo de la cama.');
add(T8,2,'mcq','My house is ___ the park and the school.','between',['next','under','behind of'],'“Between” se usa para indicar que algo está entre dos lugares.');
add(T8,2,'mcq','Choose the correct comparative: “A train is ___ than a bicycle.”','faster',['fast','fastest','more fast'],'El comparativo de “fast” es “faster”.');
add(T8,2,'mcq','Choose the correct sentence.','My bag is heavier than yours.',['My bag is heavy than yours.','My bag is more heavier than yours.','My bag heavier yours.'],'El comparativo de “heavy” es “heavier”.');
add(T8,2,'mcq','Which sentence correctly expresses inability?','I can’t sing.',['I don’t can sing.','I can’t to sing.','I not can sing.'],'Después de “can’t” va el verbo en forma base, sin “to”.');
add(T8,2,'mcq','The picture is ___ the wall. It touches the wall’s surface.','on',['under','between','behind'],'“On the wall” se usa para algo colocado sobre la pared.');
add(T8,3,'mcq','Choose the correct comparison.','My room is smaller than yours.',['My room is more smaller than yours.','My room smaller than yours is.','My room is small than yours.'],'El comparativo de “small” es “smaller”.');
add(T8,3,'mcq','Choose the correct sentence about ability.','They can play the guitar.',['They cans play the guitar.','They can to play the guitar.','They do can play the guitar.'],'“Can” no lleva -s y va seguido del verbo base.');
add(T8,3,'mcq','The supermarket is across the street from my house. It is…','opposite my house',['under my house','inside my house','behind of my house'],'“Opposite” puede expresar que algo está enfrente, al otro lado.');
add(T8,3,'mcq','Choose the correct comparative of “good”.','Better',['Gooder','More good','Best than'],'El comparativo irregular de “good” es “better”.');
add(T8,3,'mcq','Choose the correct sentence.','A plane is faster than a car.',['A plane is more faster than a car.','A plane faster a car.','A plane is fastest than a car.'],'“Faster than” compara la rapidez de dos cosas.');
add(T8,3,'mcq','Choose the correct question and answer.','Can Rosa cook? — Yes, she can.',['Does Rosa can cook? — Yes, she does.','Can Rosa cooks? — Yes, she can.','Is Rosa can cook? — Yes, she is.'],'La pregunta con “can” usa el verbo base y la respuesta corta repite “can”.');

// Tema 9: preguntas con WH y orden de palabras (20 preguntas)
const T9 = THEMES[8];
add(T9,1,'mcq','___ is your name?','What',['Where','Who','When'],'“What is your name?” pregunta el nombre de alguien.');
add(T9,1,'mcq','___ are you from? — I’m from Mexico.','Where',['Who','When','How many'],'“Where” pregunta por un lugar o procedencia.');
add(T9,1,'mcq','___ is your English teacher? — Ms. Lopez.','Who',['Where','When','What time'],'“Who” pregunta quién.');
add(T9,1,'mcq','___ are you? — I’m fine, thank you.','How',['Who','Where','When'],'“How are you?” pregunta cómo estás.');
add(T9,1,'order','Ordena las palabras para formar una pregunta.','What is your name?');
add(T9,1,'order','Ordena las palabras para formar una oración.','I am a student.');
add(T9,1,'order','Ordena las palabras para formar una pregunta.','Where do you live?');
add(T9,1,'order','Ordena las palabras para formar una oración.','She likes music.');
add(T9,2,'mcq','___ do you go to school? — At 7:30 a.m.','When',['Who','Where','Which color'],'“When” pregunta cuándo u a qué hora.');
add(T9,2,'mcq','___ students are in your class? — Twenty-five.','How many',['How much','How old','How long'],'“How many” pregunta por una cantidad contable.');
add(T9,2,'mcq','Choose the correct word order.','Does he play football?',['He does play football?','Does play he football?','Do he plays football?'],'En una pregunta con “does”, el orden es does + sujeto + verbo base.');
add(T9,2,'mcq','Choose the correct sentence order.','My friends live near school.',['Live my friends near school.','My friends near live school.','Near school live my friends is.'],'El orden básico es sujeto + verbo + complemento.');
add(T9,2,'order','Ordena las palabras para formar una pregunta.','What time does the bus arrive?');
add(T9,2,'order','Ordena las palabras para formar una oración.','They are in the classroom.');
add(T9,3,'mcq','___ does your brother go to work? — By bus.','How',['Who','When','What color'],'“How” puede preguntar por la manera o el medio de transporte.');
add(T9,3,'mcq','Choose the correct question for “I’m fifteen years old.”','How old are you?',['How many are you?','How much old are you?','What old you are?'],'“How old are you?” pregunta la edad.');
add(T9,3,'order','Ordena las palabras para formar una pregunta.','Why are you happy?');
add(T9,3,'order','Ordena las palabras para formar una oración.','My sister studies English every day.');
add(T9,3,'mcq','Choose the correct order for a question about a place.','Where is the bus stop?',['Where the bus stop is?','Where does is the bus stop?','Where are the bus stop?'],'Con “is”, la pregunta empieza con Where + is + sujeto.');
add(T9,3,'mcq','Choose the correct order for a simple negative sentence.','They do not like cold weather.',['They not do like cold weather.','They does not like cold weather.','They do not likes cold weather.'],'El orden es sujeto + do not + verbo en forma base.');

// Tema 10: lecturas, diálogos y traducción (20 preguntas)
const T10 = THEMES[9];
const read1 = 'Hi! My name is Daniel. I am sixteen years old. I live with my mother and my sister. I go to school from Monday to Friday. My favorite subject is English.';
add(T10,1,'reading','How old is Daniel?','He is sixteen.',['He is fifteen.','He is seventeen.','He is twenty.'],'El texto dice: “I am sixteen years old”.',read1);
add(T10,1,'reading','Who lives with Daniel?','His mother and sister.',['His father and brother.','His grandparents.','His friends.'],'Daniel vive con su madre y su hermana.',read1);
add(T10,1,'reading','What is Daniel’s favorite subject?','English.',['Math.','Science.','History.'],'Al final del texto, Daniel dice que su materia favorita es English.',read1);
add(T10,1,'dialogue','A: “Hello, I’m Mia.” B: “___”','Nice to meet you, Mia.',['I am twelve years.','Where school?','Good night yesterday.'],'“Nice to meet you” es una respuesta natural al conocer a alguien.','A: “Hello, I’m Mia.”\nB: “___”');
add(T10,1,'translate','Translate: “I have two sisters.”','Tengo dos hermanas.',['Soy dos hermanas.','Tengo dos hermanos.','Mis hermanas tienen dos.'],'“I have” significa “tengo” y “sisters” significa hermanas.');
add(T10,1,'translate','Translate: “The dog is black.”','El perro es negro.',['El gato es blanco.','El perro está bajo la mesa.','El perro tiene negro.'],'“Dog” es perro, “black” es negro y “is” funciona como es/está.');
add(T10,1,'dialogue','A: “Thank you for your help.” B: “___”','You’re welcome.',['I’m fifteen.','Good morning yesterday.','Where is your help?'],'“You’re welcome” es una respuesta común a “thank you”.','A: “Thank you for your help.”\nB: “___”');
add(T10,1,'mcq','Choose the best translation of “She is at home.”','Ella está en casa.',['Ella va a la escuela.','Él está en casa.','Ella tiene una casa.'],'“She” es ella y “at home” significa en casa.');
const read2 = 'On Saturday, Leo gets up at eight. He eats eggs and toast for breakfast. In the afternoon, he plays basketball with his friends. At night, he reads a book and goes to bed at ten.';
add(T10,2,'reading','What does Leo eat for breakfast?','Eggs and toast.',['Rice and fish.','Bread and soup.','An apple and cheese.'],'El texto menciona “eggs and toast”.',read2);
add(T10,2,'reading','When does Leo play basketball?','In the afternoon.',['In the morning.','At night.','On Monday morning.'],'El texto dice que juega por la tarde: “in the afternoon”.',read2);
add(T10,2,'reading','What time does Leo go to bed?','At ten.',['At eight.','At nine.','At twelve.'],'El texto indica que se acuesta a las diez.',read2);
add(T10,2,'dialogue','A: “Where is the nearest bank?” B: “___”','It’s next to the supermarket.',['I’m fourteen years old.','I like orange juice.','Yes, I can swim.'],'La pregunta pide la ubicación, así que la respuesta debe dar un lugar.','A: “Where is the nearest bank?”\nB: “___”');
add(T10,2,'translate','Translate: “There are three chairs in the room.”','Hay tres sillas en la habitación.',['Hay una mesa en la cocina.','Las sillas son de tres habitaciones.','Está la silla en la habitación.'],'“There are” significa “hay” con elementos plurales.');
add(T10,2,'mcq','Choose the best reply: “Do you speak English?”','A little.',['At the library.','I am sixteen.','It is blue.'],'La pregunta es sobre hablar inglés; “A little” (un poco) responde de forma adecuada.');
add(T10,2,'translate','Translate: “My brother doesn’t like onions.”','A mi hermano no le gustan las cebollas.',['A mi hermana le gustan las cebollas.','Mi hermano compra dos cebollas.','Mi hermano no tiene hermanos.'],'“Doesn’t like” expresa que no le gusta algo.');
const read3 = 'Hello, my name is Sara. I am new at this school. I like drawing and listening to music. I can play the piano, but I can’t play the guitar. I want to join the art club because I enjoy painting.';
add(T10,3,'reading','Why does Sara want to join the art club?','Because she enjoys painting.',['Because she plays football.','Because she wants to learn math.','Because she dislikes drawing.'],'Sara dice que quiere unirse porque disfruta pintar.',read3);
add(T10,3,'reading','What instrument can Sara play?','The piano.',['The guitar.','The violin.','The drums.'],'Sara puede tocar el piano, pero no la guitarra.',read3);
add(T10,3,'reading','Which activity does Sara like?','Drawing.',['Running marathons.','Cooking dinner.','Playing the guitar.'],'La primera parte del texto dice que le gusta dibujar.',read3);
add(T10,3,'dialogue','A: “I’m sorry I’m late.” B: “___”','That’s OK.',['I’m from Canada.','It is under the chair.','Yes, I do like.'],'“That’s OK” es una respuesta común para aceptar una disculpa.','A: “I’m sorry I’m late.”\nB: “___”');
add(T10,3,'mcq','Choose the clearest translation of “Can you help me, please?”','¿Puedes ayudarme, por favor?',['¿Dónde ayudas, por favor?','¿Puedes ayudarme ayer?','¿Quién me ayuda, por favor?'],'“Can you help me?” pregunta si alguien puede ayudar.');
add(T10,3,'mcq','Choose the best reply: “What do you do?”','I’m a student.',['I’m fine, thanks.','I’m from Mexico.','I’m sixteen years old.'],'“What do you do?” puede preguntar por la ocupación; “I’m a student” responde eso.');

/* Estado persistente: la aplicación funciona también si localStorage no está disponible. */
const STORAGE_KEY = 'englishBaseProgressV1';
const defaultProgress = () => ({
  totalAnswered: 0, totalCorrect: 0, sessions: 0, unlockedLevel: 1,
  mistakes: [], topicStats: {}, bestLevelScores: {}, lastSession: null, theme: 'light'
});
function readProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultProgress();
    const parsed = JSON.parse(saved);
    return { ...defaultProgress(), ...parsed, mistakes: Array.isArray(parsed.mistakes) ? parsed.mistakes : [] };
  } catch (_) { return defaultProgress(); }
}
let progress = readProgress();
function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch (_) { /* Almacenamiento opcional */ }
}

const el = (id) => document.getElementById(id);
const screens = { home: el('homeScreen'), quiz: el('quizScreen'), results: el('resultsScreen') };
let session = null;
let timerId = null;
let remainingSeconds = 10;
let toastTimeout = null;
let lastSettings = { mode: 'practice', topic: 'all', level: 1, length: 20, timer: false };
const typeLabels = { mcq:'OPCIÓN MÚLTIPLE', fill:'COMPLETA LA ORACIÓN', translate:'TRADUCCIÓN', order:'ORDENA LAS PALABRAS', matching:'RELACIONA EL SIGNIFICADO', error:'IDENTIFICA EL ERROR', dialogue:'DIÁLOGO', reading:'COMPRENSIÓN DE LECTURA' };
const tips = [
  'Lee toda la oración antes de responder. Las palabras que la rodean pueden darte una pista.',
  'Fíjate en el sujeto: he, she e it suelen necesitar una forma verbal distinta en presente simple.',
  'No traduzcas palabra por palabra cuando una expresión completa tenga un significado común.',
  'En preguntas con do o does, recuerda usar el verbo principal en su forma base.',
  'Comprueba si el sustantivo es singular o plural antes de elegir is o are.'
];

function safeText(value) { return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])); }
function shuffle(items) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function showToast(message) {
  const node = el('toast'); node.textContent = message; node.classList.add('show');
  clearTimeout(toastTimeout); toastTimeout = setTimeout(() => node.classList.remove('show'), 3000);
}
function showScreen(name) {
  Object.entries(screens).forEach(([key, node]) => { const active = key === name; node.hidden = !active; node.classList.toggle('active', active); });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function initTopicOptions() {
  const select = el('topicSelect');
  THEMES.forEach((theme, index) => { const option = document.createElement('option'); option.value = theme; option.textContent = theme; select.appendChild(option); });
}
function updateHomeStats() {
  el('totalAnswered').innerHTML = '<span aria-hidden="true">✦</span> ' + progress.totalAnswered + ' respuestas';
  el('statAccuracy').textContent = progress.totalAnswered ? Math.round(progress.totalCorrect / progress.totalAnswered * 100) + '%' : '—';
  el('statSessions').textContent = progress.sessions;
  el('statCorrect').textContent = progress.totalCorrect;
  el('unlockedText').textContent = progress.unlockedLevel + ' de 3';
  el('masteryFill').style.width = (progress.unlockedLevel / 3 * 100) + '%';
  const levelSelect = el('levelSelect');
  [...levelSelect.options].forEach(opt => {
    if (opt.value === '3') { opt.disabled = progress.unlockedLevel < 3; opt.textContent = progress.unlockedLevel < 3 ? 'Nivel 3 · Básico avanzado 🔒' : 'Nivel 3 · Básico avanzado'; }
    if (opt.value === '2') { opt.disabled = progress.unlockedLevel < 2; opt.textContent = progress.unlockedLevel < 2 ? 'Nivel 2 · Básico 🔒' : 'Nivel 2 · Básico'; }
  });
  if (Number(levelSelect.value) > progress.unlockedLevel) levelSelect.value = String(progress.unlockedLevel);
  const mode = el('modeSelect').value;
  el('timerSetting').style.opacity = mode === 'quick' ? '1' : '.55';
  el('timerToggle').disabled = mode !== 'quick';
  el('lengthRow').style.opacity = mode === 'quick' || mode === 'review' ? '.55' : '1';
  el('lengthSelect').disabled = mode === 'quick' || mode === 'review';
  const notes = {
    practice: 'Recibe una explicación después de cada respuesta.',
    exam: 'Responde todas las preguntas; las respuestas correctas se muestran al terminar.',
    quick: '10 preguntas rápidas. Puedes activar un límite de 10 segundos por pregunta.',
    review: 'Practica preguntas que contestaste mal en sesiones anteriores.'
  };
  el('modeHelp').textContent = notes[mode];
  el('startButton').innerHTML = ({practice:'Comenzar práctica',exam:'Comenzar examen',quick:'Iniciar modo rápido',review:'Repasar errores'}[mode]) + ' <span aria-hidden="true">→</span>';
}
function getSettings() {
  return { mode: el('modeSelect').value, topic: el('topicSelect').value, level: Number(el('levelSelect').value), length: Number(el('lengthSelect').value), timer: el('timerToggle').checked };
}
function makeSessionQuestions(settings) {
  let pool;
  if (settings.mode === 'review') {
    const missed = new Set(progress.mistakes);
    pool = questionBank.filter(q => missed.has(q.id) && (settings.topic === 'all' || q.theme === settings.topic));
  } else {
    pool = questionBank.filter(q => q.level <= settings.level && (settings.topic === 'all' || q.theme === settings.topic));
  }
  const shuffled = shuffle(pool);
  const desired = settings.mode === 'quick' ? 10 : settings.mode === 'review' ? Math.min(20, shuffled.length) : settings.length;
  return shuffled.slice(0, Math.min(desired, shuffled.length));
}
function startSession(overrides = null) {
  const settings = overrides || getSettings();
  lastSettings = { ...settings };
  const questions = makeSessionQuestions(settings);
  if (!questions.length) {
    if (settings.mode === 'review') showToast('No hay errores pendientes en este tema. Termina una práctica para guardar preguntas por corregir.');
    else showToast('No hay suficientes preguntas disponibles en esta selección. Elige otro tema o nivel.');
    return;
  }
  if (questions.length < (settings.mode === 'quick' ? 10 : settings.mode === 'review' ? 1 : settings.length)) {
    showToast(`Esta selección tiene ${questions.length} preguntas disponibles; se usarán todas sin repetir.`);
  }
  session = {
    settings, questions, index: 0, answers: [], currentSelection: null,
    currentOrder: [], currentOrderTokens: [], correct: 0, wrong: 0, timerExpired: false,
    startedAt: Date.now(), completed: false
  };
  el('sessionModeTag').textContent = ({practice:'PRÁCTICA',exam:'EXAMEN',quick:'MODO RÁPIDO',review:'REPASO DE ERRORES'})[settings.mode];
  el('liveNote').textContent = settings.mode === 'exam' ? 'Las respuestas se mostrarán al terminar.' : settings.mode === 'quick' ? 'Responde las 10 preguntas y consulta tu resultado.' : settings.mode === 'review' ? 'Corrige los errores para reforzar lo aprendido.' : 'Verás la explicación tras comprobar cada respuesta.';
  el('timerDisplay').hidden = !(settings.mode === 'quick' && settings.timer);
  showScreen('quiz'); renderQuestion();
}
function currentQuestion() { return session.questions[session.index]; }
function updateProgressDisplay() {
  const total = session.questions.length;
  const shown = session.index + (session.answers[session.index] ? 1 : 0);
  const percent = Math.round((session.index / total) * 100);
  el('questionCounter').textContent = `Pregunta ${Math.min(session.index + 1, total)} de ${total}`;
  el('progressPercent').textContent = percent + ' %';
  el('progressFill').style.width = percent + '%';
  el('liveCorrect').textContent = session.correct;
  el('liveWrong').textContent = session.wrong;
}
function renderQuestion() {
  stopTimer();
  if (!session || session.index >= session.questions.length) { finishSession(); return; }
  session.currentSelection = null; session.currentOrder = []; session.currentOrderTokens = []; session.timerExpired = false;
  const q = currentQuestion();
  updateProgressDisplay();
  el('questionCategory').textContent = q.theme.toUpperCase();
  el('questionType').textContent = typeLabels[q.type] || 'OPCIÓN MÚLTIPLE';
  el('quizHeading').textContent = q.prompt;
  el('questionInstruction').textContent = q.type === 'order' ? 'Toca las palabras en el orden correcto para construir la oración.' : 'Selecciona una respuesta.';
  el('questionContext').hidden = !q.context;
  el('questionContext').textContent = q.context;
  el('feedbackBox').hidden = true; el('feedbackBox').className = 'feedback-box';
  el('answeredStatus').textContent = 'Selecciona una opción para continuar.';
  el('nextButton').disabled = true;
  el('nextButton').innerHTML = (session.settings.mode === 'exam' || session.settings.mode === 'quick') ? 'Siguiente pregunta <span aria-hidden="true">→</span>' : 'Comprobar respuesta <span aria-hidden="true">→</span>';
  el('studyTip').textContent = tips[Math.floor(Math.random() * tips.length)];
  const area = el('answerArea'); area.innerHTML = '';
  if (q.type === 'order') renderOrderQuestion(q, area); else renderChoiceQuestion(q, area);
  if (session.settings.mode === 'quick' && session.settings.timer) startTimer();
}
function renderChoiceQuestion(q, area) {
  const options = shuffle(q.options.map((text, index) => ({ text, isCorrect: text === q.answer, originalIndex: index })));
  options.forEach((option, index) => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'answer-option';
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${safeText(option.text)}</span>`;
    button.dataset.answer = option.text;
    button.addEventListener('click', () => selectChoice(button, option.text));
    area.appendChild(button);
  });
}
function selectChoice(button, answer) {
  if (!session || session.completed || session.answers[session.index]) return;
  session.currentSelection = answer;
  document.querySelectorAll('.answer-option').forEach(item => item.classList.toggle('selected', item === button));
  el('nextButton').disabled = false;
  el('answeredStatus').textContent = 'Respuesta seleccionada.';
  if (session.settings.mode === 'practice' || session.settings.mode === 'review') el('nextButton').innerHTML = 'Comprobar respuesta <span aria-hidden="true">→</span>';
}
function renderOrderQuestion(q, area) {
  const answerWrap = document.createElement('div'); answerWrap.className = 'order-area';
  const label = document.createElement('p'); label.className = 'order-answer'; label.textContent = 'Tu oración:'; answerWrap.appendChild(label);
  const chosen = document.createElement('div'); chosen.className = 'order-chosen'; chosen.style.display = 'contents'; chosen.id = 'orderChosen'; answerWrap.appendChild(chosen);
  area.appendChild(answerWrap);
  const words = shuffle(q.answer.split(' ').map((word, index) => ({word, index})));
  const tools = document.createElement('div'); tools.className = 'order-tools';
  const undo = document.createElement('button'); undo.type = 'button'; undo.textContent = 'Deshacer última';
  const reset = document.createElement('button'); reset.type = 'button'; reset.textContent = 'Borrar';
  tools.append(undo, reset); area.appendChild(tools);
  const chips = document.createElement('div'); chips.className = 'answer-area'; chips.style.gridTemplateColumns = 'repeat(auto-fit,minmax(105px,1fr))';
  words.forEach(item => {
    const chip = document.createElement('button'); chip.type = 'button'; chip.className = 'word-chip'; chip.textContent = item.word; chip.dataset.tokenIndex = String(item.index);
    chip.addEventListener('click', () => {
      if (chip.disabled || session.answers[session.index]) return;
      session.currentOrder.push(item.index);
      chip.disabled = true;
      redrawOrderChosen(q, chips);
      if (session.currentOrder.length === q.answer.split(' ').length) {
        session.currentSelection = session.currentOrder.map(i => q.answer.split(' ')[i]).join(' ');
        el('nextButton').disabled = false;
      }
    });
    chips.appendChild(chip);
  });
  area.appendChild(chips);
  undo.addEventListener('click', () => {
    if (!session.currentOrder.length || session.answers[session.index]) return;
    const idx = session.currentOrder.pop();
    const chip = [...chips.querySelectorAll('button')].find(b => Number(b.dataset.tokenIndex) === idx);
    if (chip) chip.disabled = false;
    session.currentSelection = null; el('nextButton').disabled = true; redrawOrderChosen(q, chips);
  });
  reset.addEventListener('click', () => {
    if (session.answers[session.index]) return;
    session.currentOrder = []; session.currentSelection = null;
    chips.querySelectorAll('button').forEach(b => b.disabled = false);
    el('nextButton').disabled = true; redrawOrderChosen(q, chips);
  });
}
function redrawOrderChosen(q, chipArea) {
  const chosen = el('orderChosen'); if (!chosen) return;
  chosen.innerHTML = '';
  const tokens = q.answer.split(' ');
  session.currentOrder.forEach(index => {
    const span = document.createElement('span'); span.className = 'word-chip'; span.style.background = 'var(--primary-soft)'; span.textContent = tokens[index]; chosen.appendChild(span);
  });
  el('answeredStatus').textContent = session.currentOrder.length ? `${session.currentOrder.length} de ${tokens.length} palabras seleccionadas.` : 'Selecciona las palabras en orden.';
}
function normalizeSentence(sentence) { return String(sentence || '').toLowerCase().replace(/[.!?]/g,'').replace(/\s+/g,' ').trim(); }
function isCorrect(q, answer) { return normalizeSentence(answer) === normalizeSentence(q.answer); }
function recordAnswer(q, answer, timedOut = false) {
  const correct = !timedOut && isCorrect(q, answer);
  const record = { qid: q.id, theme: q.theme, prompt: q.prompt, type: q.type, answer: answer || '(Sin respuesta)', correctAnswer: q.answer, correct, timedOut, explanation: q.explanation, context: q.context };
  session.answers[session.index] = record;
  if (correct) session.correct++; else session.wrong++;
  if (!correct && !progress.mistakes.includes(q.id)) progress.mistakes.push(q.id);
  if (session.settings.mode === 'review' && correct) progress.mistakes = progress.mistakes.filter(id => id !== q.id);
  saveProgress();
  el('liveCorrect').textContent = session.correct; el('liveWrong').textContent = session.wrong;
  return record;
}
function submitCurrent() {
  if (!session || session.completed) return;
  const q = currentQuestion();
  if (session.settings.mode === 'practice' || session.settings.mode === 'review') {
    if (!session.answers[session.index]) {
      if (session.currentSelection === null) { showToast('Selecciona una respuesta antes de continuar.'); return; }
      const rec = recordAnswer(q, session.currentSelection);
      stopTimer(); displayFeedback(q, rec); styleChosenOption(q, rec);
      el('nextButton').disabled = false;
      el('nextButton').innerHTML = session.index === session.questions.length - 1 ? 'Ver resultados <span aria-hidden="true">→</span>' : 'Siguiente pregunta <span aria-hidden="true">→</span>';
      el('answeredStatus').textContent = rec.correct ? 'Respuesta correcta.' : 'Respuesta incorrecta. Lee la explicación.';
      return;
    }
    advanceQuestion(); return;
  }
  if (session.currentSelection === null) { showToast('Selecciona una respuesta antes de continuar.'); return; }
  recordAnswer(q, session.currentSelection); stopTimer(); advanceQuestion();
}
function displayFeedback(q, rec) {
  const box = el('feedbackBox'); box.hidden = false; box.className = 'feedback-box ' + (rec.correct ? 'good' : 'bad');
  const lead = rec.correct ? '¡Correcto!' : 'Respuesta correcta: ' + q.answer;
  box.innerHTML = `<strong>${safeText(lead)}</strong>${safeText(q.explanation || '')}${q.type === 'order' ? '' : ''}`;
}
function styleChosenOption(q, rec) {
  if (q.type === 'order') {
    const chips = el('answerArea').querySelectorAll('.word-chip'); chips.forEach(chip => chip.disabled = true); return;
  }
  document.querySelectorAll('.answer-option').forEach(button => {
    button.disabled = true;
    if (button.dataset.answer === q.answer) button.classList.add('correct');
    if (button.dataset.answer === rec.answer && !rec.correct) button.classList.add('incorrect');
  });
}
function advanceQuestion() {
  stopTimer(); session.index++;
  if (session.index >= session.questions.length) finishSession(); else renderQuestion();
}
function startTimer() {
  stopTimer(); remainingSeconds = 10; updateTimerLabel();
  timerId = setInterval(() => {
    remainingSeconds--; updateTimerLabel();
    if (remainingSeconds <= 0) {
      stopTimer();
      if (session && !session.completed && !session.answers[session.index]) {
        const q = currentQuestion();
        const chosenAnswer = session.currentSelection;
        const rec = recordAnswer(q, chosenAnswer || '', !chosenAnswer);
        if (session.settings.mode === 'practice' || session.settings.mode === 'review') {
          displayFeedback(q, rec); styleChosenOption(q, rec);
          el('nextButton').disabled = false;
          el('nextButton').innerHTML = session.index === session.questions.length - 1 ? 'Ver resultados →' : 'Siguiente pregunta →';
          el('answeredStatus').textContent = chosenAnswer ? 'Tiempo terminado; se registró tu respuesta.' : 'Se terminó el tiempo.';
          showToast(chosenAnswer ? 'Se terminó el tiempo; tu respuesta quedó registrada.' : 'Se acabó el tiempo para esta pregunta.');
        } else {
          el('nextButton').disabled = true;
          document.querySelectorAll('#answerArea button').forEach(button => { button.disabled = true; });
          showToast(chosenAnswer ? 'Se terminó el tiempo; se registró tu respuesta.' : 'Se acabó el tiempo. La pregunta se marcó como incorrecta.');
          setTimeout(advanceQuestion, 450);
        }
      }
    }
  }, 1000);
}
function updateTimerLabel() {
  const node = el('timerDisplay'); node.textContent = `00:${String(Math.max(0,remainingSeconds)).padStart(2,'0')}`;
  node.classList.toggle('urgent', remainingSeconds <= 3);
}
function stopTimer() { if (timerId !== null) { clearInterval(timerId); timerId = null; } el('timerDisplay').classList.remove('urgent'); }
function finishSession() {
  if (!session || session.completed) return;
  stopTimer(); session.completed = true;
  const answers = session.answers.filter(Boolean);
  // Si una pregunta quedó sin contestar al terminar, se registra como incorrecta.
  session.questions.forEach((q, index) => {
    if (!session.answers[index]) {
      const rec = { qid:q.id, theme:q.theme, prompt:q.prompt, type:q.type, answer:'(Sin respuesta)', correctAnswer:q.answer, correct:false, timedOut:false, explanation:q.explanation, context:q.context };
      session.answers[index] = rec; session.wrong++;
      if (!progress.mistakes.includes(q.id)) progress.mistakes.push(q.id);
    }
  });
  const allAnswers = session.answers.filter(Boolean);
  const correct = allAnswers.filter(a => a.correct).length;
  const total = allAnswers.length;
  const percent = total ? Math.round(correct / total * 100) : 0;
  const grade = total ? Math.round((correct / total * 10) * 10) / 10 : 0;
  const topicCorrect = {};
  allAnswers.forEach(answer => {
    progress.totalAnswered++;
    if (answer.correct) progress.totalCorrect++;
    if (!progress.topicStats[answer.theme]) progress.topicStats[answer.theme] = { correct:0, total:0 };
    progress.topicStats[answer.theme].total++;
    if (answer.correct) progress.topicStats[answer.theme].correct++;
  });
  progress.sessions++;
  const level = session.settings.level;
  if (session.settings.mode !== 'review') {
    progress.bestLevelScores[level] = Math.max(progress.bestLevelScores[level] || 0, percent);
    if (percent >= 80 && level === progress.unlockedLevel && progress.unlockedLevel < 3) progress.unlockedLevel++;
  }
  const topicScores = {};
  allAnswers.forEach(answer => {
    if (!topicScores[answer.theme]) topicScores[answer.theme] = { correct:0,total:0 };
    topicScores[answer.theme].total++; if (answer.correct) topicScores[answer.theme].correct++;
  });
  const topicEntries = Object.entries(topicScores).map(([theme, stat]) => ({ theme, percent: Math.round(stat.correct / stat.total * 100), total:stat.total, correct:stat.correct })).sort((a,b)=>b.percent-a.percent);
  progress.lastSession = { date: Date.now(), grade, percent, correct, total, topicEntries };
  saveProgress(); updateHomeStats(); showResults({ grade, percent, correct, total, topicEntries, answers: allAnswers });
}
function showResults(result) {
  el('finalGrade').textContent = result.grade.toFixed(1);
  el('scoreRing').style.setProperty('--score-angle', (result.percent / 100 * 360) + 'deg');
  el('resultCorrect').textContent = result.correct; el('resultWrong').textContent = result.total - result.correct; el('resultPercent').textContent = result.percent + '%';
  el('gradeSummary').textContent = `Contestaste correctamente ${result.correct} de ${result.total} preguntas.`;
  el('resultsSubtitle').textContent = session.settings.mode === 'review' ? 'Terminaste el repaso de errores.' : 'Tus resultados quedaron guardados en este dispositivo.';
  let title = 'Sigue practicando', message = 'Revisa los errores y vuelve a intentarlo.';
  if (result.percent >= 90) { title = 'Excelente resultado'; message = 'Tuviste muy pocos errores. Prueba con otro tema o nivel.'; }
  else if (result.percent >= 80) { title = 'Buen trabajo'; message = 'Alcanzaste el 80 %. Puedes continuar con el siguiente nivel si se desbloqueó.'; }
  else if (result.percent >= 60) { title = 'Vas avanzando'; message = 'Repasa las respuestas incorrectas y prueba otra combinación.'; }
  el('gradeMessage').textContent = title; el('nextStepText').textContent = message;
  el('resultsSymbol').textContent = result.percent >= 80 ? '✓' : '↻';
  const summaryGrid = el('topicSummaryGrid');
  summaryGrid.innerHTML = '';
  if (result.topicEntries.length) {
    const best = result.topicEntries[0];
    const needsPractice = result.topicEntries[result.topicEntries.length - 1];
    const bestCard = document.createElement('div'); bestCard.className = 'topic-summary-card';
    bestCard.innerHTML = `<span class="topic-summary-icon">★</span><div><span>Mejor resultado</span><strong>${safeText(best.theme)}</strong><small>${best.percent}% de aciertos (${best.correct}/${best.total})</small></div>`;
    const practiceCard = document.createElement('div'); practiceCard.className = 'topic-summary-card needs-work';
    practiceCard.innerHTML = `<span class="topic-summary-icon">↻</span><div><span>Necesita más práctica</span><strong>${safeText(needsPractice.theme)}</strong><small>${needsPractice.percent}% de aciertos (${needsPractice.correct}/${needsPractice.total})</small></div>`;
    summaryGrid.append(bestCard, practiceCard);
  }
  const list = el('answerReviewList'); list.innerHTML = '';
  result.answers.forEach((a, index) => {
    const entry = document.createElement('article'); entry.className = 'review-entry';
    const badge = a.correct ? '<span class="answer-badge good">CORRECTA</span>' : '<span class="answer-badge bad">INCORRECTA</span>';
    entry.innerHTML = `<div class="review-entry-head"><h3>${index+1}. ${safeText(a.prompt)}</h3>${badge}</div>${a.context ? `<p>${safeText(a.context).replace(/\n/g,'<br>')}</p>` : ''}<p>Tu respuesta: <strong>${safeText(a.answer)}</strong></p>${!a.correct ? `<p class="correct-answer">Respuesta correcta: ${safeText(a.correctAnswer)}</p>` : ''}<p>${safeText(a.explanation || '')}</p>`;
    list.appendChild(entry);
  });
  if (result.answers.every(a => a.correct)) { const empty = document.createElement('p'); empty.className = 'review-empty'; empty.textContent = '¡Perfecto! Respondiste todo correctamente.'; list.prepend(empty); }
  const hasMistakes = progress.mistakes.length > 0;
  el('reviewMistakesButton').disabled = !hasMistakes;
  el('reviewMistakesButton').textContent = hasMistakes ? `Repasar errores (${progress.mistakes.length}) →` : 'No hay errores pendientes';
  el('retryButton').textContent = session.settings.mode === 'review' ? 'Repetir repaso' : 'Nuevo intento';
  showScreen('results');
}
function beginReview() {
  const settings = { ...lastSettings, mode:'review', topic: el('topicSelect').value, level: Number(el('levelSelect').value), timer:false };
  startSession(settings);
}
function startRetry() { startSession({ ...lastSettings, mode: lastSettings.mode === 'review' ? 'review' : lastSettings.mode, timer:lastSettings.timer }); }
function quitSession() { stopTimer(); session = null; showScreen('home'); updateHomeStats(); }
function toggleTheme() {
  const dark = document.body.classList.toggle('dark');
  progress.theme = dark ? 'dark' : 'light'; saveProgress();
  el('themeToggle').textContent = dark ? '☼' : '◐';
  document.querySelector('meta[name="theme-color"]').setAttribute('content', dark ? '#141625' : '#f4f6fb');
}

// Eventos de interfaz
initTopicOptions();
if (progress.theme === 'dark') { document.body.classList.add('dark'); el('themeToggle').textContent = '☼'; document.querySelector('meta[name="theme-color"]').setAttribute('content','#141625'); }
updateHomeStats();
el('modeSelect').addEventListener('change', updateHomeStats);
el('startButton').addEventListener('click', () => startSession());
el('themeToggle').addEventListener('click', toggleTheme);
el('nextButton').addEventListener('click', submitCurrent);
el('quitButton').addEventListener('click', () => { if (el('quitDialog').showModal) el('quitDialog').showModal(); else if (confirm('¿Salir de la sesión?')) quitSession(); });
el('stayButton').addEventListener('click', () => el('quitDialog').close());
el('confirmQuitButton').addEventListener('click', () => { el('quitDialog').close(); quitSession(); });
el('reviewMistakesButton').addEventListener('click', beginReview);
el('retryButton').addEventListener('click', startRetry);
el('homeButton').addEventListener('click', () => { showScreen('home'); updateHomeStats(); });
el('levelSelect').addEventListener('change', () => { const level = Number(el('levelSelect').value); if (level > progress.unlockedLevel) { el('levelSelect').value = String(progress.unlockedLevel); showToast('Primero consigue 80 % en el nivel anterior.'); } });

// Comprobaciones básicas del banco en tiempo de inicio; se informan en consola si un dato queda incompleto.
(function validateQuestionBank() {
  const ids = new Set();
  questionBank.forEach(q => {
    if (ids.has(q.id) || !q.prompt || !q.answer || !q.theme) console.error('Pregunta incompleta o identificador duplicado:', q);
    ids.add(q.id);
    if (q.type !== 'order' && (!Array.isArray(q.options) || q.options.length !== 4 || new Set(q.options).size !== 4)) console.error('Las opciones deben ser cuatro y distintas:', q);
  });
  THEMES.forEach(theme => {
    const count = questionBank.filter(q => q.theme === theme).length;
    if (count < 20) console.warn(`El tema "${theme}" tiene ${count} preguntas.`);
  });
})();
