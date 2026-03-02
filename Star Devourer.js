let canvas_size = 600
let agents = []
let count = 100
let limit = 0.05 // How close the point should be considered "eaten"
let score = 0

function setup() {
  createCanvas(canvas_size, canvas_size)
  
  for (let i = 0; i < count; i++) {
    let agent = {
      x: random() * width,
      y: random() * height,

      update() {
        this.x += (mouseX - this.x) * random() * 0.01
        this.y += (mouseY - this.y) * random() * 0.01
        if (this.x <= mouseX*(1+limit) && this.x >= mouseX*(1-limit) && this.y <= mouseY*(1+limit) && this.y >= mouseY*(1-limit)) {
          this.x = random() * width
          this.y = random() * height
          score++
        }    
      },

      draw() {
        circle(this.x, this.y, 1)
      }
    }
    agents.push(agent)
    
  strokeWeight(3)
  stroke("White")
  }
}

function draw() {
  
  background(0)
  
  text("Time Passed: " + floor(frameCount/60), 20, 20)
  text("Score: " + score, 20, 40)
  
  agents.forEach(a => { a.update(); a.draw() })
}
