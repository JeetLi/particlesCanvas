const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.size = Math.random() * 4;
        this.speedX = Math.random() * 2;
        this.speedY = Math.random() * 2;
    }

    update() {
        // Movement of particles
        this.x += this.speedX;
        this.y += this.speedY;

        // Check the boundaries of the canvas and change the direction if necessary
        if (this.x < 0 || this.x > canvas.width) {
            this.speedX = -this.speedX;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.speedY = -this.speedY;
        }


    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particles = [];

function init() {
    for (let i = 0; i < 60; i++) {
        particles.push(new Particle());

    }
}

init();

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Check particle spacing and draw lines
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 150) { // Threshold value for drawing a line
                ctx.beginPath();
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 0.2;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }

        // Removing particles when they become too small
        // if (particles[i].size <= 0.2) {
        //     particles.splice(i, 1);
        //     i--;
        // }
    }
}

function distanceBetween(p1, p2) {
    const a = p1.x - p2.x;
    const b = p1.y - p2.y;
    return Math.sqrt(a * a + b * b);
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();


window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// canvas.addEventListener('click', (event) => {
//     const x = event.x;
//     const y = event.y;
//     for (let i = 0; i < 10; i++) {
//         particles.push(new Particle(x, y));
//     }
// });

