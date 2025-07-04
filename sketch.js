//Inisiasi Variabel
let theta    = 0;           // sudut awal
let pTali    = 180;         // panjang tali
let thetaVel = 0;           // kecepatan sudut awal
let thetaAcc = 0;           // percepatan sudut awal
let ballSize = 40;          // Ukuran bola
let gravity  = 0;           // gravitasi
let damping  = 0.00;        // redaman awal

//Gambar
let sudut;
let itera;
let mtk;

function preload(){
  sudut = loadImage("Sudut.png")
  itera = loadImage("ITERA.png")
  mtk = loadImage("mtk.png")
}


function resetNilai() {
  pTali    = 150; 
  gravity  = 0;
  ballSize = 40;
  theta    = 0;
  damping  = 0;
}

//Tambah dan Kurangi Panjang Tali
function Ttali(){
  pTali += 10
}

function Ktali(){
  pTali -= 10
  
  if (pTali < 10) {
    pTali = 10;
 }
}

//Tambah dan Kurangi Besar Pendulum
function Tbola(){
  ballSize += 10
}

function Kbola(){
  ballSize -= 10
  
  if (ballSize < 0) {
    ballSize = 0;
 }
}

//Tambah dan Kurangi Gravitasi
function Tgravitasi(){
  gravity += 1
}

function Kgravitasi(){
  gravity -= 1
  
  if (gravity < 0) {
    gravity = 0;
 } 
}

//Tambah dan Kurangi Redaman
function Tdamping(){
  damping += 0.01
}

function Kdamping(){
  damping -= 0.01
  
  if (damping < 0) {
    damping = 0;
  }
}


function setup() {
  createCanvas(1200, 620);
  
  //tombol Reset
  let tombolReset = createButton("Reset Angka");
  tombolReset.position(1080, 500);
  tombolReset.mousePressed(resetNilai)
  
  //tomboh tambah panjang
  let tTali = createButton("+")
  tTali.position (897,185)
  tTali.mousePressed(Ttali)
  
  //Tombol Kurangi Panjang
  let kTali = createButton("-")
  kTali.position (833,185)
  kTali.mousePressed(Ktali)
  
  
  //tomboh tambah besar bola
  let tBola = createButton("+")
  tBola.position (897,255)
  tBola.mousePressed(Tbola)
  
  //Tombol Kurangi Besar Bola
  let kBola = createButton("-")
  kBola.position (833,255)
  kBola.mousePressed(Kbola)
  
  
  //Tombol tambah Gravitasi
  let tGravitasi = createButton("+")
  tGravitasi.position (897,325)
  tGravitasi.mousePressed(Tgravitasi)
  
  //Tombol Kurangi Gravitasi
  let kGravitasi = createButton("-")
  kGravitasi.position (833,325)
  kGravitasi.mousePressed(Kgravitasi)
  
  
  //Tombol tambah Redaman
  let tDamping = createButton("+")
  tDamping.position (897,395)
  tDamping.mousePressed(Tdamping)
  
  //Tombol Kurangi Redaman
  let kDamping = createButton("-")
  kDamping.position (833,395)
  kDamping.mousePressed(Kdamping)
  
  
  //menambahkan besar sudut awal
  s = createInput(0)
  s.position(833, 125)
  s.changed(sudut)
  sudut();

function sudut(){
  theta = radians(s.value())
 } 
}

function draw() {
  background("#121F96FC");
  
  //Header
  fill("#88A6CD")
  rect(20,10,3,70)
  rect(20,10,1160,3)
  rect(1177,10,3,70)
  rect(20,80,1160,3)
  
  fill("white")
  textSize(25)
  text("P R O J E C T   P E N D U L U M"                 ,420,42)
  textSize(15)
  text("Mata Kuliah Visualisasi Dalam Sains (MA 2213)"   ,445,65)
  
  image(mtk,340,20,50,50)
  image(itera,820,20,50,50)
  
  
  //Navigation Bar
  fill("#88A6CD")
  rect(820,90,360,440)
  
  //Content
  rect(20,90,790,440)
  
  //Fotter
  rect(20,540, 1160,70)
  
  fill("black")
  textSize(15)
  text("INFORMASI KELOMPOK 2 :"            ,22,555)
  text("1. Yoga Andriyanto (121160008)"    ,22,580)
  text("2. Tiara Juliana (121160107)"      ,22,605)
  text("3. Cornelia Marsela (121160014)"   ,300,580)
  text("4. Peniel Manoah J H (119160092)"  ,300,605)
  text("5. Eni Perlove (121160088)"        ,590,580)
  text("6. Dyah Ayu W (121160073)"         ,590,605)
  text("7. Risma Dewi (121160051)"         ,850,580)
  
  
  //Navigation Control
  fill("black")
  textSize(16)
  text("Masukkan Sudut Awal :"     ,825,110)
  
  //Kotak Angka
  fill("white")
  rect(850,177,35,22)
  rect(850,247,35,22)
  rect(850,317,35,22)
  rect(850,387,35,22)
  
  //Menampilkan nilai variabel
  textSize(16)
  fill("black")
  text("Panjang Tali Pendulum :"       ,825,170)
  text(""+pTali                        ,853,195)
  text("Besar Bola Pendulum: "         ,825,240)
  text(""+ballSize                     ,853,265)
  text("Gaya Gravitasi : "             ,825,310)
  text(""+gravity                      ,861,335)
  text("Besar Redaman : "              ,825,380)
  text(""+round(damping,3)             ,853,405)
  text("Kecepatan Sudut : "            ,825,450)
  text(""+round(theta,3)               ,960,450)
  
  
  fill("black")
  rect(400,200,40,20)
  image(sudut,320,217,200,100)
  
  
  
  //Koding Simulasi
  translate(width/2-180, 220); // Pusatkan canvas di tengah
  
  // Menghitung percepatan sudut
  thetaAcc = (-gravity / pTali) * sin(theta) -(damping * thetaVel);
  
  // Menghitung kecepatan sudut
  thetaVel += thetaAcc;
  
  // Menghitung sudut
  theta += thetaVel;
  
  // Hitung koordinat ujung tali
  let x = pTali * sin(theta);
  let y = pTali * cos(theta);
  
  // Gambar tali
  stroke(0);
  strokeWeight(2);
  line(0, 0, x, y);
  
  // Gambar bola
  noStroke();
  fill("#FF0022");
  ellipse(x, y, ballSize, ballSize);
  
}
