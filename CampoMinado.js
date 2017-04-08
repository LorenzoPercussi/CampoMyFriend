var quadradinho = {
    s: 25,
    bomba: false,
    proximidade: 0,
    revelado: false,
    col: 0,
    lin: 0,
    x: 0,
    y: 0,
    goto: function(col,lin) {
        this.col = col;
        this.lin = lin;
        this.x = col * this.s;       
        this.y = lin * this.s;     
    },
    d: function() {
        if (!this.revelado) {
            fill(0,100,250);
        } else{
            fill(255);
        
        if (this.bomba){
            fill(255,0,0);
        }
        }
        rect(this.x,this.y,this.s,this.s);
    }
};

var tabuleiro = [];

var colunas = 15;
var linhas = 15;

for (c = 0; c < colunas; c++){
    for (l=0; l<linhas; l++){
        q = Object.create(quadradinho);
        q.goto(c,l);
        tabuleiro.push(q);
    }
}

var qtb = 30;

while(qtb > 0) {
   var target = colunas*linhas;
    var aleatorio = Math.random() * target;
    var qbomba = Math.floor(aleatorio);
    if(!tabuleiro[qbomba].bomba){
        tabuleiro[qbomba].bomba = true;
        qtb--;
    }
}


function setup() {
    createCanvas(800,600);
}

function draw() {
    background(255);
    tabuleiro.forEach(function (q){
        q.d();
    });
}

function mousePressed() {
    tabuleiro.forEach(verificaClique);
}
function verificaClique(q) {
    cliqueX = Math.floor(mouseX / q.s);
    cliqueY = Math.floor(mouseY / q.s);
    
    if (cliqueX == q.col && cliqueY == q.lin) {
        q.revelado = true;
    }
}
