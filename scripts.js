document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los contenedores de video
    const videoContainers = document.querySelectorAll('.projects__container__individual__video');

    // Detecta el ancho de la pantalla
    const isMobile = window.innerWidth <= 1000;

    // Agrega listeners a cada contenedor de video
    videoContainers.forEach(container => {
        const video = container.querySelector('video');
        const overlay = container.querySelector('div'); // El div con el texto "RECONOCIMIENTO FACIAL"

        if (isMobile) {
            // En dispositivos móviles, reproduce el video al hacer clic en el overlay
            overlay.addEventListener('click', () => {
                video.play();
                overlay.style.visibility = 'hidden'; // Oculta el overlay
                overlay.style.opacity = '0';
            });

            // Pausar el video al hacer clic nuevamente en el video
            video.addEventListener('click', () => {
                if (!video.paused) {
                    video.pause();
                    overlay.style.visibility = 'visible'; // Muestra el overlay
                    overlay.style.opacity = '1';
                }
            });
        } else {
            // En pantallas grandes, reproduce el video al pasar el cursor
            container.addEventListener('mouseover', () => {
                video.play();
                overlay.style.visibility = 'hidden'; // Oculta el overlay
                overlay.style.opacity = '0';
            });

            // Pausa el video al retirar el cursor
            container.addEventListener('mouseout', () => {
                video.pause();
                overlay.style.visibility = 'visible'; // Muestra el overlay
                overlay.style.opacity = '1';
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const descriptiveWords = ['EGOCÉNTRICO', 'NARCISISTA', 'RACISTA', 'HOMOFOBO', 'CLASISTA'];
    
    // Find the text container
    const textContainer = document.querySelector('.information__texts');
    
    // Create the new h1 element
    const dynamicTextElement = document.createElement('h1');
    dynamicTextElement.classList.add('dynamic-description-container');
    dynamicTextElement.innerHTML = '<span class="dynamic-description"></span>';
    
    // Insert the new element after the existing h1
    const existingTitle = textContainer.querySelector('.information__texts__title');
    existingTitle.insertAdjacentElement('afterend', dynamicTextElement);
    
    const container = document.querySelector('.dynamic-description');
    
    let currentIndex = 0;
    
    function rotateText() {
        container.style.opacity = 0;
        
        setTimeout(() => {
            container.textContent = descriptiveWords[currentIndex];
            container.style.opacity = 1;
            
            currentIndex = (currentIndex + 1) % descriptiveWords.length;
        }, 500); // Half of the transition time
    }
    
    // Initial call
    rotateText();
    
    // Set interval to rotate words every 2 seconds
    setInterval(rotateText, 2000);
});
function sendEmail() {
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    var mailtoLink = "mailto:santi.64.m@gmail.com"
      + "?subject=Busqueda laboral de " + name
      + "&body=" + message ;

    window.location.href = mailtoLink;
  }