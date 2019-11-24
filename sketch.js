// Clasificación de imágenes con IA de Teachable Machine  | Autor: Luis.Dev

// Instancias e inicializaciones de variables
let video;
let clasificador;
let etiqueta    =  "Esperando...";
let modeloURL =  'https://teachablemachine.withgoogle.com/models/cJ8de1_J/';

function setup() 
  {
    createCanvas(640, 540);
    // Inicialización del video por entrada de webCam
    video = createCapture(VIDEO);
    // Esconder una instancia del video para que no se vea duplicado.
    video.hide();
    // Clasificación del vídeo
    clasificarVideo();
  }


function draw() 
  {
    background(0);
    
    // Pintar el video
    image(video, 0, 0);
    
    // Escribir la etiqueta
    text(etiqueta,width/2, height-25);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(255);
    
    
  }

// Precarga del modelo entrenado con IA
function preload() 
  { clasificador = ml5.imageClassifier(modeloURL + 'model.json'); }

// Clasificación del video 
function clasificarVideo() 
  { clasificador.classify(video,recogeResultados) }

// Recoger resultados
function recogeResultados(error, resultados)
  {  if (error) { console.error(error);  return; }
    etiqueta= resultados[0].label;
    clasificarVideo();
  }