import './styles.css'
import './home_page1.scss'

window.addEventListener("load", function() {
    const close_symbol = document.querySelectorAll('.offer_close');
    close_symbol.forEach(element => {
        element.addEventListener("click", () => {
            const offer = document.getElementById('offer1');
            offer.style.display = 'none';
            console.log('hihihi');
        });
    });
});