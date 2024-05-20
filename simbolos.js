document.addEventListener('DOMContentLoaded', function() {
    const radios = document.querySelectorAll('input[name="select-info"]');
    const guaraniInfos = document.querySelectorAll('.guarani-info');

    function showInfo(value) {
        guaraniInfos.forEach(info => {
            info.style.display = (info.id === value) ? 'block' : 'none';
        });
    }

    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            showInfo(this.value);
        });
    });

    // Mostrar a informação inicial com base no radio inicialmente selecionado
    const selectedRadio = document.querySelector('input[name="select-info"]:checked');
    if (selectedRadio) {
        showInfo(selectedRadio.value);
    }
});