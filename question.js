// Questions
const questions = [
    {
        "question": "1. วันนี้เป็นวันที่อากาศร้อนมาก คุณจะทำอะไร?",
        "answer1": "นอนเปิดแอร์เย็นสุดขั้วอยู่ในห้อง",
        "answer2": "ไปว่ายน้ำอาบแดดกันดีกว่า",
        "answer3": "ไปนั่งในสวนเย็นๆชมวิวชิวๆ",
        "answer4": "นั่งรับลมอยู่หน้าบ้าน",
    },
    {
        "question": "2. มีจานผลไม้ตั้งอยู่หน้าคุณ คุณจะเลือกกินอันไหน?",
        "answer1": "แอปเปิ้ล",
        "answer2": "อินผาลัม",
        "answer3": "ทุเรียน",
        "answer4": "เบอร์รี่",
    },
    {
        "question": "3. ถ้าคุณได้รับเลือกให้ทำหน้าที่เป็นผู้ดูแลสวนสัตว์ คุณอยากดูแลสัตว์ชนิดใด?",
        "answer1": "สิงโต",
        "answer2": "เรนเดียร์",
        "answer3": "อัลปาก้า",
        "answer4": "นกหัวขวาน",
    },
    {
        "question": "4. วันนี้คุณจะออกไปข้างนอก คุณจะเลือกแต่งตัวแบบไหน?",
        "answer1": "เสื้อเชิ้ตสีขาวโปร่งสบาย",
        "answer2": "เสื้อยืดตัวโปรด",
        "answer3": "เสื้อหนังสัตว์สุดเท่ๆ",
        "answer4": "เสื้อฮู้ดสุดเก๋",
    },
    {
        "question": "5. พรุ่งนี้คุณต้องเตรียต้นไม้เพื่อไปนำเสนอในงานจัดสวน คุณจะเลือกต้นไม้อะไร?",
        "answer1": "กระบองเพชร",
        "answer2": "ต้นเมเปิล",
        "answer3": "ต้นปาล์มๆ",
        "answer4": "ต้นเฟอร์",
    },
    {
        "question": "6. คุณได้ตั๋วฟรีได้ไปท่องเที่ยว 1 ที่ คุณอยากไปที่ไหน?",
        "answer1": "สโตนเฮจน์",
        "answer2": "พีระมิดแห่งกีซา",
        "answer3": "ทุ่งซาฟารี",
        "answer4": "น้ำตกไนเองการ่า",
    }
    ,
    {
        "question": "7. หากคุณเลือกเข้างานเทศกาลได้ 1 งาน คุณจะเลือกอะไร?",
        "answer1": "เทศกาลรีดนมวัว",
        "answer2": "เทศกาลจับปลา",
        "answer3": "เทศกาลสงกรานต์",
        "answer4": "เทศกาลฮาโลวีน",
    }
    ,
    {
        "question": "8. บ้านหลังไหนที่คุณอยากเข้าไปอยู่?",
        "answer1": "บ้านไม้ริมทะเลสาบ",
        "answer2": "บ้านเล็กๆที่มีลานกว้าง",
        "answer3": "บ้านต้นไม้แสนร่มรื่น",
        "answer4": "บ้านสไตล์โมเดิร์นแสนอบอุ่น",
    }
]

// Variables
let currentQuestion = 0;
const totalQuestions = questions.length;
const questionText = document.querySelector('#qstn');
const choice1 = document.querySelector('#button1');
const choice2 = document.querySelector('#button2');
const choice3 = document.querySelector('#button3');
const choice4 = document.querySelector('#button4');

// Biome Score
let tund = 0; // Tundra
let des = 0; // Desert
let sav = 0; // Savanna
let trf = 0; // Tropical
let cf = 0; // Coniferous
let tdf = 0; // Temperate
let gl = 0; // Grassland

// Print variables to console
function prntLog() {
    console.log("totalQuestions: " + totalQuestions);
    console.log("currentQuestions: " + currentQuestion);
    console.log("tund: " + tund);
    console.log("des: " + des);
    console.log("sav:" + sav);
    console.log("trf: " + trf);
    console.log("cf: " + cf);
    console.log("tdf: " + tdf);
    console.log("gl: " + gl);
}

// Go to the biome depending on the score
function goToBiome() {
    if (tund >= des && tund >= sav && tund >= trf && tund >= cf && tund >= tdf && tund >= gl) {
        document.location = 'minigametundra.html';
    }
    else if (des >= tund && des >= sav && des >= trf && des >= cf && des >= tdf && des >= gl) {
        document.location = 'desertgame.html';
    }
    else if (sav >= tund && sav >= des && sav >= trf && sav >= cf && sav >= tdf && sav >= gl) {
        document.location = 'minigamesavanna.html';
    }
    else if (trf >= tund && trf >= des && trf >= sav && trf >= cf && trf >= tdf && trf >= gl) {
        document.location = 'minigameTropical.html';
    }
    else if (cf >= tund && cf >= des && cf >= sav && cf >= trf && cf >= tdf && cf >= gl) {
        document.location = 'minigamecf.html';
    }
    else if (tdf >= tund && tdf >= des && tdf >= sav && tdf >= trf && tdf >= cf && tdf >= gl) {
        document.location = 'tdfgame.html';
    }
    else if (gl >= tund && gl >= des && gl >= sav && gl >= trf && gl >= cf && gl >= tdf) {
        document.location = 'minigrassland.html';
    }
}

// Generate Question and Answers
function generateQuestions(index) {
    const question = questions[index];
    questionText.innerHTML = `${question.question}`
    choice1.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + `${question.answer1}`
    choice2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + `${question.answer2}`
    choice3.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + `${question.answer3}`
    choice4.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + `${question.answer4}`
}

// Scoring for button1 (A.) answers
function ans1() {
    // Question 1 
    if (currentQuestion == 0) {
        tund += 1;
    }
    // Question 2
    else if (currentQuestion == 1) {
        tdf += 1;
    }
    // Question 3
    else if (currentQuestion == 2) {
        sav += 1;
    }
    // Question 4
    else if (currentQuestion == 3) {
        des += 2;
    }
    // Question 5
    else if (currentQuestion == 4) {
        sav += 2;
    }
    // Question 6
    else if (currentQuestion == 5) {
        gl += 2;
    }
    // Question 7
    else if (currentQuestion == 6) {
        gl += 3;
    }
    // Question 8
    else if (currentQuestion == 7) {
        cf += 1;
    }

    prntLog();

    // Go to the biome if it's the last question
    if (currentQuestion == totalQuestions - 1) {
        goToBiome();
        return;
    }
    // Go to the next question
    currentQuestion++;
    generateQuestions(currentQuestion);

}

// Scoring for button2 (B.) answers
function ans2() {
    // Question 1 
    if (currentQuestion == 0) {
        sav += 1;
    }
    // Question 2
    else if (currentQuestion == 1) {
        des += 1;
    }
    // Question 3
    else if (currentQuestion == 2) {
        cf += 1;
    }
    // Question 4
    else if (currentQuestion == 3) {
        trf += 2;
    }
    // Question 5
    else if (currentQuestion == 4) {
        tdf += 3;
    }
    // Question 6
    else if (currentQuestion == 5) {
        des += 3;
    }
    // Question 7
    else if (currentQuestion == 6) {
        tund += 4;
    }
    // Question 8
    else if (currentQuestion == 7) {
        gl += 1;
    }

    prntLog();

    // Go to the biome if it's the last question
    if (currentQuestion == totalQuestions - 1) {
        goToBiome();
        return;
    }
    // Go to the next question
    currentQuestion++;
    generateQuestions(currentQuestion);

}

// Scoring for button3 (C.) answers
function ans3() {
    // Question 1 
    if (currentQuestion == 0) {
        cf += 1;
    }
    // Question 2
    else if (currentQuestion == 1) {
        trf += 1;
    }
    // Question 3
    else if (currentQuestion == 2) {
        gl += 1;
    }
    // Question 4
    else if (currentQuestion == 3) {
        tund += 2;
    }
    // Question 5
    else if (currentQuestion == 4) {
        trf += 3;
    }
    // Question 6
    else if (currentQuestion == 5) {
        sav += 3;
    }
    // Question 7
    else if (currentQuestion == 6) {
        sav += 4;
    }
    // Question 8
    else if (currentQuestion == 7) {
        trf += 1;
    }

    prntLog();

    // Go to the biome if it's the last question
    if (currentQuestion == totalQuestions - 1) {
        goToBiome();
        return;
    }
    // Go to the next question
    currentQuestion++;
    generateQuestions(currentQuestion);

}

// Scoring for button4 (D.) answers
function ans4() {
    // Question 1 
    if (currentQuestion == 0) {
        gl += 1;
    }
    // Question 2
    else if (currentQuestion == 1) {
        tund += 1;
    }
    // Question 3
    else if (currentQuestion == 2) {
        tdf += 2;
    }
    // Question 4
    else if (currentQuestion == 3) {
        cf += 2;
    }
    // Question 5
    else if (currentQuestion == 4) {
        tund += 3;
    }
    // Question 6
    else if (currentQuestion == 5) {
        cf += 3;
    }
    // Question 7
    else if (currentQuestion == 6) {
        tdf += 4;
    }
    // Question 8
    else if (currentQuestion == 7) {
        des += 1;
    }

    prntLog();

    // Go to the biome if it's the last question
    if (currentQuestion == totalQuestions - 1) {
        goToBiome();
        return;
    }
    // Go to the next question
    currentQuestion++;
    generateQuestions(currentQuestion);

}

// Execute the main function
generateQuestions(currentQuestion);

// Update score and go to the next question when a button is clicked
button1.addEventListener('click', ans1);
button2.addEventListener('click', ans2);
button3.addEventListener('click', ans3);
button4.addEventListener('click', ans4);