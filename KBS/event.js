        // Filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        const eventCards = document.querySelectorAll('.event-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                eventCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Floating note functionality
        function hideNote() {
            document.getElementById('floatingNote').classList.add('hidden');
        }

        // Auto hide floating note after 10 seconds
        setTimeout(() => {
            const note = document.getElementById('floatingNote');
            if (note && !note.classList.contains('hidden')) {
                note.style.animation = 'fadeOut 1s ease';
                setTimeout(() => hideNote(), 1000);
            }
        }, 10000);

        // Add fade in animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        // Add click animation to event cards
        eventCards.forEach(card => {
            card.addEventListener('click', () => {
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = 'translateY(-5px)';
                }, 150);
            });
        });

        // Smooth scroll for better UX
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add loading animation on page load
        window.addEventListener('load', () => {
            const cards = document.querySelectorAll('.event-card');
            cards.forEach((card, index) => {
                card.style.animation = `fadeIn 0.5s ease ${index * 0.1}s both`;
            });
        });
  