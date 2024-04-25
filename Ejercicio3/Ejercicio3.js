let estado = 0;

function dibujarAhorcado() {
  const canvas = document.getElementById('ahorcado');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    if (estado === 4) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      estado = 0;
    }

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    ctx.setLineDash([5, 3]);

    if (estado === 0) {
      ctx.beginPath();
      ctx.moveTo(10, 130); 
      ctx.lineTo(60, 130);
      ctx.moveTo(35, 20);  
      ctx.lineTo(35, 130);
      ctx.moveTo(35, 20);  
      ctx.lineTo(80, 20);
      ctx.moveTo(80, 20);  
      ctx.lineTo(80, 40);
      ctx.stroke();
    }

    
    ctx.setLineDash([]);

    switch (estado) {
      case 0:
        // Cabeza
        ctx.beginPath();
        ctx.arc(80, 50, 10, 0, Math.PI * 2);
        ctx.stroke();
        break;
      case 1:
        // Cuerpo
        ctx.beginPath();
        ctx.moveTo(80, 60);
        ctx.lineTo(80, 90);
        ctx.stroke();
        break;
      case 2:
        // Brazos
        ctx.beginPath();
        ctx.moveTo(80, 70);
        ctx.lineTo(70, 80);
        ctx.moveTo(80, 70);
        ctx.lineTo(90, 80);
        ctx.stroke();
        break;
      case 3:
        // Piernas
        ctx.beginPath();
        ctx.moveTo(80, 90);
        ctx.lineTo(70, 100);
        ctx.moveTo(80, 90);
        ctx.lineTo(90, 100);
        ctx.stroke();
        break;
    }

    if (estado === 0) {
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(110 + i * 20, 130);
        ctx.lineTo(125 + i * 20, 130);
        ctx.stroke();
      }
    }

    estado++;
  }
}
