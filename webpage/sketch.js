let input, button, text_prompt, text_result;
let nn;

function preload() {  
  const options = { task: 'classification' };
  const modelDetails = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin'
  };
  nn = ml5.neuralNetwork(options);
  nn.load(modelDetails);
}

function setup() {
  createCanvas(250, 200);
  background(127);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(analyze);

  text_prompt = createElement('h2', 'Enter URL:');
  text_prompt.position(20, 5);
  
  text_result = createElement('h2', '');
  text_result.position(20, 100);

  textAlign(CENTER);
  textSize(50);
}

function analyze() {
  text_result.html('Thinking...');
  const string = input.value();
  input.value('');
  let xs = parse(string)
  nn.classify(xs, output);
}

function output(error, result) {
  if (error) {
    console.error(error);
    return;
  }
  displayResult(result[0].label, (int)(100*result[0].confidence));
}

function displayResult(label, confidence) {
  text_result.html(label + ': ' + confidence + '%');
}