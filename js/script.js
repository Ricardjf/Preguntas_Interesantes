// Estado de la aplicación
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentCategory = 'Todos';
let currentSearchTerm = '';
let visibleQuestions = 12;
let currentView = 'grid'; // 'grid' o 'list'

// Elementos del DOM
const questionsGrid = document.getElementById('questionsGrid');
const categoriesContainer = document.getElementById('categoriesContainer');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const favoritesCount = document.getElementById('favoritesCount');
const navFavoritesCount = document.getElementById('navFavoritesCount');
const totalFavoritesStat = document.getElementById('totalFavoritesStat');
const viewFavoritesBtn = document.getElementById('viewFavoritesBtn');
const navFavoritesBtn = document.getElementById('navFavoritesBtn');
const favoritesModal = document.getElementById('favoritesModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const favoritesList = document.getElementById('favoritesList');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreContainer = document.getElementById('loadMoreContainer');
const backToTop = document.getElementById('backToTop');
const questionsCount = document.getElementById('questionsCount');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const clearAllFavorites = document.getElementById('clearAllFavorites');
const modalFavoritesCount = document.getElementById('modalFavoritesCount');
const footerCategories = document.getElementById('footerCategories');
const viewOptions = document.querySelectorAll('.view-option');
const quickFilters = document.querySelectorAll('.quick-filter');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderQuestions();
    updateFavoritesCount();
    renderFooterCategories();
    setupEventListeners();
    checkBackToTop();
});

// Configurar event listeners
function setupEventListeners() {
    // Búsqueda
    searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase();
        visibleQuestions = 12;
        renderQuestions();
    });

    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        currentSearchTerm = '';
        visibleQuestions = 12;
        renderQuestions();
    });

    // Favoritos
    viewFavoritesBtn.addEventListener('click', showFavoritesModal);
    if (navFavoritesBtn) {
        navFavoritesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showFavoritesModal();
        });
    }

    closeModalBtn.addEventListener('click', () => {
        favoritesModal.classList.remove('show');
    });

    window.addEventListener('click', (e) => {
        if (e.target === favoritesModal) {
            favoritesModal.classList.remove('show');
        }
    });

    // Cargar más
    loadMoreBtn.addEventListener('click', () => {
        visibleQuestions += 12;
        renderQuestions();
    });

    // Back to top
    window.addEventListener('scroll', checkBackToTop);
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Menú móvil
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Limpiar todos los favoritos
    if (clearAllFavorites) {
        clearAllFavorites.addEventListener('click', () => {
            if (favorites.length > 0) {
                if (confirm('¿Seguro que quieres eliminar todos tus favoritos?')) {
                    favorites = [];
                    localStorage.setItem('favorites', JSON.stringify(favorites));
                    updateFavoritesCount();
                    if (favoritesModal.classList.contains('show')) {
                        showFavoritesModal();
                    }
                    renderQuestions();
                    showNotification('Todos los favoritos eliminados');
                }
            }
        });
    }

    // Cambiar vista (grid/list)
    viewOptions.forEach(option => {
        option.addEventListener('click', () => {
            viewOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            currentView = option.dataset.view;
            renderQuestions();
        });
    });

    // Filtros rápidos
    quickFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const filterType = filter.dataset.filter;
            applyQuickFilter(filterType);
        });
    });

    // Cerrar menú móvil al hacer click fuera
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('show') && 
            !navMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('show');
        }
    });
}

// Renderizar categorías
function renderCategories() {
    const allCategories = ['Todos', ...questionsData.categories];
    categoriesContainer.innerHTML = allCategories.map(category => `
        <div class="category-tag ${category === currentCategory ? 'active' : ''}" 
             onclick="filterByCategory('${category}')">
            ${category}
        </div>
    `).join('');
}

// Filtrar por categoría
window.filterByCategory = (category) => {
    currentCategory = category;
    visibleQuestions = 12;
    renderCategories();
    renderQuestions();
    
    // Scroll suave a las preguntas
    document.querySelector('.questions-header').scrollIntoView({ behavior: 'smooth' });
};

// Aplicar filtro rápido
function applyQuickFilter(filterType) {
    switch(filterType) {
        case 'aleatorio':
            const randomQuestion = questionsData.questions[Math.floor(Math.random() * questionsData.questions.length)];
            currentSearchTerm = '';
            currentCategory = 'Todos';
            renderCategories();
            // Mostrar solo la pregunta aleatoria destacada
            showRandomQuestion(randomQuestion);
            break;
        case 'populares':
            // Aquí podrías implementar lógica de populares basada en visitas
            showNotification('Funcionalidad de populares pronto disponible');
            break;
        case 'recientes':
            // Ordenar por ID (asumiendo que IDs más altos son más recientes)
            const recentQuestions = [...questionsData.questions].sort((a, b) => b.id - a.id).slice(0, 12);
            displayQuestions(recentQuestions);
            break;
    }
}

// Mostrar pregunta aleatoria destacada
function showRandomQuestion(question) {
    questionsGrid.innerHTML = `
        <div class="random-question-highlight">
            <h3>Pregunta aleatoria</h3>
            ${createQuestionCard(question)}
            <button class="load-more-btn" onclick="applyQuickFilter('aleatorio')">
                <i class="fas fa-random"></i> Otra pregunta aleatoria
            </button>
        </div>
    `;
    loadMoreContainer.style.display = 'none';
}

// Renderizar preguntas
function renderQuestions() {
    let filteredQuestions = questionsData.questions;

    // Filtrar por categoría
    if (currentCategory !== 'Todos') {
        filteredQuestions = filteredQuestions.filter(q => q.category === currentCategory);
    }

    // Filtrar por búsqueda
    if (currentSearchTerm) {
        filteredQuestions = filteredQuestions.filter(q => 
            q.question.toLowerCase().includes(currentSearchTerm) ||
            q.context.toLowerCase().includes(currentSearchTerm) ||
            q.category.toLowerCase().includes(currentSearchTerm)
        );
    }

    // Actualizar contador
    if (questionsCount) {
        questionsCount.textContent = filteredQuestions.length;
    }

    // Limitar preguntas visibles
    const questionsToShow = filteredQuestions.slice(0, visibleQuestions);
    
    // Mostrar/ocultar botón "Cargar más"
    if (filteredQuestions.length <= visibleQuestions) {
        loadMoreContainer.style.display = 'none';
    } else {
        loadMoreContainer.style.display = 'block';
    }

    displayQuestions(questionsToShow, filteredQuestions.length === 0);
}

// Mostrar preguntas en el grid
function displayQuestions(questions, isEmpty = false) {
    if (isEmpty) {
        questionsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No encontramos preguntas</h3>
                <p>Intenta con otra categoría o palabra clave</p>
                <button class="load-more-btn" onclick="resetFilters()">
                    <i class="fas fa-redo"></i> Ver todas las preguntas
                </button>
            </div>
        `;
        return;
    }

    questionsGrid.className = `questions-grid ${currentView === 'list' ? 'list-view' : ''}`;
    questionsGrid.innerHTML = questions.map(question => createQuestionCard(question)).join('');
}

// Crear tarjeta de pregunta
function createQuestionCard(question) {
    return `
        <div class="question-card" onclick="handleCardClick(event, ${question.id})">
            <div class="card-inner">
                <div class="card-front">
                    <span class="card-category">${question.category}</span>
                    <p class="card-question">${question.question}</p>
                    <div class="card-footer">
                        <button class="favorite-btn ${isFavorite(question.id) ? 'active' : ''}" 
                                onclick="toggleFavorite(event, ${question.id})">
                            <i class="fa${isFavorite(question.id) ? 's' : 'r'} fa-heart"></i>
                        </button>
                        <span class="flip-hint">
                            <i class="fas fa-sync-alt"></i> Ver contexto
                        </span>
                    </div>
                </div>
                <div class="card-back">
                    <p>${question.context}</p>
                </div>
            </div>
        </div>
    `;
}

// Resetear filtros
window.resetFilters = () => {
    currentCategory = 'Todos';
    currentSearchTerm = '';
    searchInput.value = '';
    visibleQuestions = 12;
    renderCategories();
    renderQuestions();
};

// Manejar clic en tarjeta (para flip)
window.handleCardClick = (event, questionId) => {
    if (event.target.closest('.favorite-btn')) {
        return;
    }
    
    const card = event.currentTarget;
    card.classList.toggle('flipped');
    
    // Auto voltear después de 8 segundos
    setTimeout(() => {
        card.classList.remove('flipped');
    }, 8000);
};

// Verificar si es favorito
function isFavorite(questionId) {
    return favorites.includes(questionId);
}

// Toggle favorito
window.toggleFavorite = (event, questionId) => {
    event.stopPropagation();
    
    const index = favorites.indexOf(questionId);
    if (index === -1) {
        favorites.push(questionId);
        showNotification('Añadido a favoritos');
    } else {
        favorites.splice(index, 1);
        showNotification('Eliminado de favoritos');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderQuestions();
};

// Actualizar contador de favoritos
function updateFavoritesCount() {
    const count = favorites.length;
    favoritesCount.textContent = count;
    if (navFavoritesCount) navFavoritesCount.textContent = count;
    if (totalFavoritesStat) totalFavoritesStat.textContent = count;
}

// Mostrar modal de favoritos
function showFavoritesModal() {
    const favoriteQuestions = questionsData.questions.filter(q => favorites.includes(q.id));
    
    if (favoriteQuestions.length === 0) {
        favoritesList.innerHTML = `
            <div class="empty-favorites">
                <i class="far fa-heart"></i>
                <h3>No tienes favoritos aún</h3>
                <p>Haz clic en el corazón de cualquier pregunta para guardarla aquí</p>
            </div>
        `;
    } else {
        favoritesList.innerHTML = favoriteQuestions.map(question => `
            <div class="favorite-item">
                <div class="favorite-item-content">
                    <span class="favorite-category">${question.category}</span>
                    <p class="favorite-question">${question.question}</p>
                </div>
                <button class="remove-favorite" onclick="removeFromFavorites(${question.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
    
    if (modalFavoritesCount) {
        modalFavoritesCount.textContent = `${favoriteQuestions.length} favoritos`;
    }
    
    favoritesModal.classList.add('show');
}

// Eliminar de favoritos desde el modal
window.removeFromFavorites = (questionId) => {
    const index = favorites.indexOf(questionId);
    if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavoritesCount();
        showFavoritesModal(); // Actualizar modal
        renderQuestions(); // Actualizar botones en grid
        showNotification('Eliminado de favoritos');
    }
};

// Mostrar notificación
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Verificar scroll para botón back to top
function checkBackToTop() {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

// Renderizar categorías en footer
function renderFooterCategories() {
    if (!footerCategories) return;
    
    const topCategories = questionsData.categories.slice(0, 6);
    footerCategories.innerHTML = topCategories.map(cat => `
        <li><a href="#" onclick="filterByCategory('${cat}'); return false;">${cat}</a></li>
    `).join('');
}

// Añadir estilos adicionales para nuevas funcionalidades
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .random-question-highlight {
        grid-column: 1 / -1;
        text-align: center;
        padding: 20px;
    }
    
    .random-question-highlight .question-card {
        max-width: 600px;
        margin: 20px auto;
    }
    
    .favorite-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        padding: 15px;
        border-bottom: 1px solid rgba(255,107,53,0.1);
    }
    
    .favorite-item-content {
        flex: 1;
    }
    
    .favorite-category {
        display: inline-block;
        padding: 3px 10px;
        background: rgba(255,107,53,0.1);
        color: var(--primary);
        border-radius: 50px;
        font-size: 0.8rem;
        margin-bottom: 5px;
    }
    
    .favorite-question {
        font-weight: 500;
        margin: 5px 0 0;
    }
    
    .reset-filters-btn {
        background: var(--primary);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 50px;
        cursor: pointer;
        margin-top: 20px;
    }
    
    @media (max-width: 768px) {
        .favorite-item {
            flex-direction: column;
            align-items: flex-start;
        }
        
        .remove-favorite {
            align-self: flex-end;
        }
    }
`;


document.head.appendChild(additionalStyles);
