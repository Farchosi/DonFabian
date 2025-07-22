function copiar_numero() {
    const phoneNumberSpan = document.getElementById('numero');
    if (phoneNumberSpan) {
        const phoneNumber = phoneNumberSpan.textContent;
        navigator.clipboard.writeText(phoneNumber).then(() => {
            alert('Número de teléfono copiado: ' + phoneNumber);
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
            alert('No se pudo copiar el número de teléfono.');
        });
    }
}

function mas_info() {
    const deliveryInfo = document.getElementById('delivery-info');
    if (deliveryInfo) {
        if (deliveryInfo.style.display === 'none') {
            deliveryInfo.style.display = 'block'; 
        } else {
            deliveryInfo.style.display = 'none'; 
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const mapButton = document.getElementById('mapa');
    if (mapButton) {
        mapButton.addEventListener('click', () => {
            window.open('https://www.google.com/maps/search/?api=1&query=Av.Lecuna,+esquina+Angelito+a+Puerto+escondido,+Pasaje+Capriles,+locales+7+y+8+A,+Caracas,+Venezuela', '_blank');
        });
    }
});