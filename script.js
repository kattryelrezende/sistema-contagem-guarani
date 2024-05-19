function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function downScroll() {
    window.scrollTo({top: 956, behavior: 'smooth'});
}

function scrollToHand() {
    window.scrollTo({top: 5150, behavior: 'smooth'});
}

// Troca os elementos informativos na sessão de info control do index
document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[name="select-info"]');
    const infoDivs = document.querySelectorAll('.guarani-info');

    radios.forEach(radio => {
        radio.addEventListener('change', function () {
            infoDivs.forEach(div => {
                if (div.id === radio.value) {
                    div.classList.add('active');
                } else {
                    div.classList.remove('active');
                }
            });
        });
    });

    // Inicializa a div visível
    document.querySelector('input[name="select-info"]:checked').dispatchEvent(new Event('change'));
});

// Troca a cor do botão do info-control
document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[name="select-info"]');
    const infoDivs = document.querySelectorAll('.guarani-info');
    const infoControls = document.querySelectorAll('.info-control');

    radios.forEach((radio, index) => {
        radio.addEventListener('change', function () {
            infoDivs.forEach(div => {
                if (div.id === radio.value) {
                    div.classList.add('active');
                } else {
                    div.classList.remove('active');
                }
            });

            infoControls.forEach(control => {
                control.classList.remove('active');
            });

            infoControls[index].classList.add('active');
        });
    });

    // Inicializa o controle e a div visível
    document.querySelector('input[name="select-info"]:checked').dispatchEvent(new Event('change'));
});

// Configuração do Carrossel
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.caroussel-item');
    const radios = document.querySelectorAll('.caroussel-buttons input[type="radio"]');
    let currentIndex = 0;
    let interval = 7000; // tempo em milissegundos

    function showImage(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
            radios[i].checked = (i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % items.length;
        showImage(currentIndex);
    }

    // Mostra a primeira imagem imediatamente
    items[0].classList.add('first-active');

    // Remove a classe 'first-active' após a página carregar
    setTimeout(() => {
        items[0].classList.remove('first-active');
        // Troca de imagem automaticamente
        let timer = setInterval(nextImage, interval);
        // Controle manual com inputs de rádio
        radios.forEach((radio, index) => {
            radio.addEventListener('change', () => {
                clearInterval(timer); // para o intervalo
                currentIndex = index;
                showImage(currentIndex);
                timer = setInterval(nextImage, interval); // reinicia o intervalo
            });
        });
    }, 100);

    // Exibe a primeira imagem inicialmente
    showImage(currentIndex);
});