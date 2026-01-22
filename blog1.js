//Toggle Button - Títulos//
// Seleciona todos os títulos toggle da página
        const toggleTitles = document.querySelectorAll('.toggle-title');

        // Adiciona funcionalidade de toggle para cada título
        toggleTitles.forEach(title => {
            title.addEventListener('click', function() {
                // Encontra o elemento de conteúdo logo após o título
                const content = this.nextElementSibling;
                
                // Alterna a classe 'active' para mostrar/ocultar o conteúdo
                content.classList.toggle('active');
            });
        });

        // Opcional: Fecha todos os toggles ao clicar fora deles
        document.addEventListener('click', function(event) {
            // Verifica se o clique foi fora de qualquer título ou conteúdo toggle
            const isToggleTitle = event.target.closest('.toggle-title');
            const isToggleContent = event.target.closest('.toggle-content');
            
            if (!isToggleTitle && !isToggleContent) {
                // Remove a classe 'active' de todos os conteúdos abertos
                document.querySelectorAll('.toggle-content.active').forEach(content => {
                    content.classList.remove('active');
                });
            }
        });
