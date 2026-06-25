function setup() {
  createCanvas(400, 400);
  snake = [];
  snake.push([90, 90]);
  snake.push([90, 100]);
  snake.push([90, 110]);
  snake.push([90, 120]);
  snake_direction = "right";
  setInterval(() => {
    keyPressed();
    next_direction();
  }, 250);
  apples = [];
  create_apples()
}

function draw() {
  stroke ("grey")
  background(220);
  for (i=0; i < 41; i++)
  {
	  line(i*10,0,i*10,400);
  }
   for (i=0; i < 41; i++)
	  line(0,i*10,400,i*10);
  fill("green")
  snake.forEach((element) => {
    rect(element[0],element[1],10,10);
  });
  draw_apples()
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    snake_direction = "up";
  } else if (keyCode == DOWN_ARROW) {
    snake_direction = "down";
  } else if (keyCode == LEFT_ARROW) {
    snake_direction = "left";
  } else if (keyCode == RIGHT_ARROW) {
    snake_direction = "right";
  }
}

function next_direction() {
  snake_next_direction = null;
  if (snake_direction == "up") {
    snake_next_direction = [snake[0][0], snake[0][1] - 10];
	} else if (snake_direction == "down") {
    snake_next_direction = [snake[0][0], snake[0][1] + 10];
	} else if (snake_direction == "left") {
    snake_next_direction = [snake[0][0] - 10, snake[0][1]];
	} else if (snake_direction == "right") {
    snake_next_direction = [snake[0][0] + 10, snake[0][1]];
	}
  move_snake();
}
function move_snake() {
	snake.pop(); // supprime le dernier élément d'un tableau
  snake.unshift(snake_next_direction);  //ajoute un élément au début d'un tableau
}
function create_apples() { 
  for (i=0 ; i<=10 ;i++)
  {
    x= Math.floor(random(0, 40));
    y=Math.floor(random(0, 40));
    apples.push([x*10, y*10]);
  }
}
function draw_apples(){
  apples.forEach((element) => {
    fill("red")
    rect(element[0],element[1],10,10)
  });
  
}