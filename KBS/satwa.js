
        // Search functionality
        function searchAnimals() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const cards = document.querySelectorAll('.animal-card');
            
            cards.forEach(card => {
                const animalName = card.querySelector('.animal-name').textContent.toLowerCase();
                const animalLatin = card.querySelector('.animal-latin').textContent.toLowerCase();
                const animalDescription = card.querySelector('.animal-description').textContent.toLowerCase();
                
                if (animalName.includes(searchTerm) || animalLatin.includes(searchTerm) || animalDescription.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Filter functionality
        function filterCategory(category) {
            const cards = document.querySelectorAll('.animal-card');
            const buttons = document.querySelectorAll('.category-btn');
            
            // Update active button
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Filter cards
            cards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Search on Enter key
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchAnimals();
            }
        });
  