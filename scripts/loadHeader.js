document.addEventListener('DOMContentLoaded', function() {
    fetch('../templates/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            
            // Agregar clase activa al enlace actual
            const currentPage = window.location.pathname.split('/').pop();
            const links = document.querySelectorAll('.nav-links a');
            
            links.forEach(link => {
                const linkPage = link.getAttribute('href');
                if (linkPage === currentPage) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Error loading header:', error));
});