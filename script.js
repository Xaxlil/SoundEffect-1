var sound;


var fft;

function preload() {
  sound = loadSound('music.mp3');
}

function setup() {
  createCanvas(600, 600);
  sound.loop();
  fft = new p5.FFT();
}

function draw() {
  background(255);

  let spectrum = fft.analyze();
  // print(spectrum);
  
  fill(255, 0, 255);

  noStroke();
  circle(width/2, height/2, 100)
  
  for (let i = 0; i < spectrum.length; i++) {
    strokeWeight(1);
    stroke(map(i, 0, spectrum.length, 0, 255), 0, 0);
    // let x = map(i, 0, spectrum.length, 0, width);
    // let h = -height + map(spectrum[i], 0, 255, height, 0);
    // rect(x, height, width / spectrum.length, h )
    let phi = map(i, 0, spectrum.length / 2, 0, 2*PI);
    let r = map(spectrum[i], 0, 255, 50, 100);
    let x2 = width / 2 + r * cos(phi);
    let y2 = height / 2 + r * sin(phi);

    let x1 = width / 2 + 50 * cos(phi);
    let y1 = height / 2 + 50 * sin(phi);
    line(x1, y1, x2, y2);
  }

  // let waveform = fft.waveform();
  // print(waveform);
  // noFill();
  // beginShape();
  // stroke(20);
  // for (let i = 0; i < waveform.length; i++){
  //   let x = map(i, 0, waveform.length, 0, width);
  //   let y = map( waveform[i], -1, 1, 0, height);
  //   vertex(x,y);
  // }
  // endShape();

}