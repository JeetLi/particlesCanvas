// (function () {
//     let canvas = document.createElement('canvas'),
//         ctx = canvas.getContext('2d'),
//         w = canvas.width = window.innerWidth,
//         h = canvas.height = window.innerHeight,
//         particles = [],
//         properties = {
//             bgColor: 'rgba(189, 178, 178, 0)',
//             particleColor: 'rgba(189, 178, 178, 0.1)',
//             particleRadius: 3,
//             particleCount: 60,
//             particleMaxVelocity: 1,
//             lineLength: 150,
//             particleLife: 6,
//         };

//     document.getElementById('particles').appendChild(canvas);

//     window.onresize = function () {
//         w = canvas.width = window.innerWidth;
//         h = canvas.height = window.innerHeight;
//     }

//     class Particle {
//         constructor() {
//             this.x = Math.random() * w;
//             this.y = Math.random() * h;
//             this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
//             this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
//             this.life = Math.random() * properties.particleLife * 60;
//         }
//         position() {
//             if ((this.x + this.velocityX > w && this.velocityX > 0) || (this.x + this.velocityX < 0 && this.velocityX < 0)) {
//                 this.velocityX *= -1;
//             }
//             if ((this.y + this.velocityY > h && this.velocityY > 0) || (this.y + this.velocityY < 0 && this.velocityY < 0)) {
//                 this.velocityY *= -1;
//             }
//             this.x += this.velocityX;
//             this.y += this.velocityY;
//         }
//         reDraw() {
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
//             ctx.closePath();
//             ctx.fillStyle = properties.particleColor;
//             ctx.fill();
//         }
//         reCalculateLife() {
//             if (this.life < 1) {
//                 this.x = Math.random() * w;
//                 this.y = Math.random() * h;
//                 this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
//                 this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
//                 this.life = Math.random() * properties.particleLife * 60;
//             }
//             this.life--;
//         }
//     }

//     function reDrawBackground() {
//         ctx.fillStyle = properties.bgColor;
//         ctx.fillRect(0, 0, w, h);
//     }

//     function drawLines() {
//         let x1, y1, x2, y2, length, opacity;
//         for (let i = 0; i < particles.length; i++) {
//             for (let j = i + 1; j < particles.length; j++) {
//                 x1 = particles[i].x;
//                 y1 = particles[i].y;
//                 x2 = particles[j].x;
//                 y2 = particles[j].y;
//                 length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
//                 if (length < properties.lineLength) {
//                     opacity = 1 - length / properties.lineLength;
//                     ctx.lineWidth = '0.5';
//                     ctx.globalAlpha = opacity;
//                     ctx.strokeStyle = properties.particleColor;
//                     ctx.beginPath();
//                     ctx.moveTo(x1, y1);
//                     ctx.lineTo(x2, y2);
//                     ctx.closePath();
//                     ctx.stroke();
//                 }
//             }
//         }
//         ctx.globalAlpha = 1.0; // Reset alpha after drawing lines
//     }

//     function reDrawParticles() {
//         particles.forEach(particle => {
//             particle.reCalculateLife();
//             particle.position();
//             particle.reDraw();
//         });
//     }

//     function loop() {
//         reDrawBackground();
//         reDrawParticles();
//         drawLines();
//         requestAnimationFrame(loop);
//     }

//     function init() {
//         for (let i = 0; i < properties.particleCount; i++) {
//             particles.push(new Particle());
//         }
//         loop();
//     }

//     init();
// }());
// Drawing and animating circles with random velocity and color

// Report JS file connected