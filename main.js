let bar = document.getElementById("bar");
let navbars = document.getElementById("nv")
bar.onclick = function(){
    navbars.classList.toggle("active")
}
   // JavaScript to toggle FAQ answer visibility
   document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('open');
    });
});
// Function to toggle the display of the answer
function toggleAnswer(index) {
    const answers = document.querySelectorAll('.answer');
    const selectedAnswer = answers[index];

    // Toggle between showing and hiding the answer
    if (selectedAnswer.style.display === "block") {
        selectedAnswer.style.display = "none";
    } else {
        selectedAnswer.style.display = "block";
    }
}
function openWhatsApp() {
    let phoneNumber = "0654078525";
    let message = "Hello! I'm contacting you via your website.";
    let whatsappLink = "";

    // Check if the user is on mobile or desktop
    if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
        whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    } else {
        whatsappLink = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    }

    // Open WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('successMessage').style.display = 'block';
        this.reset(); // Clear the form
    }