// State
let currentState = {
    view: 'home',
    // progress: 0, // Deprecated in favor of granular tracking
    completed: { en: [], id: [] }, // Store completed module IDs
    currentFlashcardIndex: 0,
    currentQuizIndex: 0,
    score: 0,
    language: 'en',
    currentFlashcardIndex: 0,
    currentQuizIndex: 0,
    score: 0,
    language: 'en',
    level: 'beginner', // 'beginner', 'intermediate', 'advanced'
    quizType: null, // null, 'text', 'voice'
    flashcardCategory: null // null or index of category
};

// DOM Elements
const mainContent = document.getElementById('main-content');
const themeBtn = document.querySelector('.theme-toggle');
const langSelect = document.getElementById('lang-select');

// Initialization
function init() {
    loadSettings();
    updateUIText();
    renderView('home');
    updateThemeIcon();
}

// Language Handling
function t(key) {
    return appData.translations[currentState.language][key] || key;
}

function changeLanguage(lang) {
    currentState.language = lang;
    localStorage.setItem('language', lang);
    updateUIText();
    renderView(currentState.view);
}

function updateUIText() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelector('h1').textContent = t('title');
    if (langSelect.value !== currentState.language) {
        langSelect.value = currentState.language;
    }
}

// Navigation
function navigateTo(view) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    const navItems = document.querySelectorAll('.nav-item');
    if (view === 'home') navItems[0].classList.add('active');
    if (view === 'home') navItems[0].classList.add('active');
    if (view === 'vocab') navItems[1].classList.add('active');
    if (view === 'flashcards') navItems[2].classList.add('active');
    if (view === 'flashcards') navItems[2].classList.add('active');
    if (view === 'flashcards') navItems[2].classList.add('active');
    if (view === 'quiz') navItems[3].classList.add('active');
    if (view === 'progress') navItems[4].classList.add('active');

    if (view === 'quiz') navItems[3].classList.add('active');

    // Reset quiz state when entering quiz view (optional, but good for starting fresh)
    if (view === 'quiz') {
        currentState.quizType = null;
        currentState.currentQuizIndex = 0;
        currentState.score = 0;
    }

    currentState.view = view;
    renderView(view);
}

// Render Views
function renderView(view) {
    mainContent.innerHTML = '';
    mainContent.style.opacity = '0';

    setTimeout(() => {
        switch (view) {
            case 'home':
                mainContent.classList.add('home-view');
                renderHome();
                break;
            default:
                mainContent.classList.remove('home-view');
                switch (view) {
                    case 'vocab':
                        renderVocabCategories();
                        break;
                    case 'flashcards':
                        renderFlashcards();
                        break;
                    case 'quiz':
                        renderQuiz();
                        break;
                    case 'progress':
                        renderProgress();
                        break;
                }
                break;
        }
        mainContent.style.opacity = '1';
    }, 200);
}

// Helper: Level Selection UI
function getLevelControl() {
    return `
        <div class="level-control">
            <label>${t('selectLevel')}: </label>
            <select onchange="changeLevel(this.value)" class="level-select">
                <option value="beginner" ${currentState.level === 'beginner' ? 'selected' : ''}>${t('levelBeginner')}</option>
                <option value="intermediate" ${currentState.level === 'intermediate' ? 'selected' : ''}>${t('levelIntermediate')}</option>
                <option value="advanced" ${currentState.level === 'advanced' ? 'selected' : ''}>${t('levelAdvanced')}</option>
            </select>
        </div>
    `;
}

function changeLevel(level) {
    currentState.level = level;
    // content re-render is handled by specific views if needed, or we just re-render current view
    renderView(currentState.view);
}

// Home View
function renderHome() {

    const stats = calculateStats();

    mainContent.innerHTML = `
        <section class="hero">
            <div style="margin-bottom: 2rem;">
                <img src="assets/mascot.png" alt="Cute Korean Mascot" style="max-width: 200px; border-radius: 20px; box-shadow: var(--shadow); transform: rotate(-5deg);">
            </div>
            <h2>${t('heroTitle')}</h2>
            <p style="color: var(--text-color); margin-bottom: 2rem; font-weight: 600;">${t('heroSubtitle')}</p>
            <button class="btn" onclick="navigateTo('vocab')">${t('startBtn')}</button>
            

        </section>
    `;
}

function renderProgress() {
    const stats = calculateStats();

    mainContent.innerHTML = `
        <div class="stats-container" style="display: block; margin-top: 0;">
             <h2 style="margin-bottom: 1.5rem; text-align: left;">${t('progressTitle')}</h2>
             <div class="charts-container">
                <div class="chart-wrapper">
                    <canvas id="totalProgressChart"></canvas>
                </div>
                <div class="chart-wrapper">
                    <canvas id="categoryProgressChart"></canvas>
                </div>
             </div>
             
             <div class="roadmap-section" style="margin-top: 3rem;">
                <h3 style="margin-bottom: 1.5rem; text-align: left;">Learning Journey</h3>
                <div class="roadmap-container">
                    ${appData.learningTips[currentState.language].map((tip, index) => `
                        <div class="roadmap-item">
                            <div class="step-marker">${index + 1}</div>
                            <div class="step-content">
                                <h4>${tip.title}</h4>
                                <p>${tip.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    // Initialize Charts
    renderCharts(stats);
}

function calculateStats() {
    const lang = currentState.language;
    const allModules = appData.modules[lang];
    const completedIds = currentState.completed[lang] || [];

    // Total Progress
    const totalModules = allModules.length;
    const completedCount = completedIds.length;
    const totalPercentage = totalModules === 0 ? 0 : Math.round((completedCount / totalModules) * 100);

    // Category Progress
    const categories = ['beginner', 'intermediate', 'advanced'];
    const categoryData = categories.map(cat => {
        const catModules = allModules.filter(m => m.level === cat);
        const catTotal = catModules.length;
        const catCompleted = catModules.filter(m => completedIds.includes(m.id)).length;
        return catTotal === 0 ? 0 : Math.round((catCompleted / catTotal) * 100);
    });

    return { totalPercentage, categoryData };
}

function renderCharts(stats) {
    const ctxTotal = document.getElementById('totalProgressChart');
    const ctxCategory = document.getElementById('categoryProgressChart');

    if (ctxTotal) {
        new Chart(ctxTotal, {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'Remaining'],
                datasets: [{
                    data: [stats.totalPercentage, 100 - stats.totalPercentage],
                    backgroundColor: ['#ff85a2', '#f0f0f0'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: `Total: ${stats.totalPercentage}%` }
                }
            }
        });
    }

    if (ctxCategory) {
        new Chart(ctxCategory, {
            type: 'bar',
            data: {
                labels: ['Beginner', 'Intermediate', 'Advanced'],
                datasets: [{
                    label: 'Progress %',
                    data: stats.categoryData,
                    backgroundColor: ['#ffb7c5', '#ff85a2', '#fb6f92'],
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true, max: 100 }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
}

// Vocab View (Categories)
function renderVocabCategories() {
    // Filter modules based on current level
    const allModules = appData.modules[currentState.language];
    const filteredModules = allModules.filter(m => m.level === currentState.level);

    const modulesHtml = filteredModules.map(mod => `
        <div class="card" onclick="openModule(${mod.id})">
            <h3 style="margin-bottom: 0.5rem; color: var(--primary-color);">${mod.title}</h3>
            <p style="color: var(--text-color); opacity: 0.8;">${mod.description}</p>
            <span class="tag">${t('level' + currentState.level.charAt(0).toUpperCase() + currentState.level.slice(1))}</span>
        </div>
    `).join('');

    mainContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <h2>${t('navVocab')}</h2>
            ${getLevelControl()}
        </div>
        ${filteredModules.length > 0 ? `<div class="modules-grid">${modulesHtml}</div>` : `<div class="card"><p>${t('noQuizMsg').replace('{0}', '').replace('{1}', currentState.level)}</p></div>`}
    `;
}

function openModule(id) {
    const module = appData.modules[currentState.language].find(m => m.id === id);
    if (!module) return;

    if (!module) return;

    mainContent.innerHTML = `
        <button class="btn" onclick="navigateTo('vocab')" style="margin-bottom: 1.5rem; background-color: var(--bg-color); color: var(--text-color); border: 1px solid var(--border-color);">${t('backBtn')}</button>
        <div class="card">
            <h2 style="margin-bottom: 1.5rem; color: var(--primary-color);">${module.title}</h2>
            <div class="module-content">
                ${module.content}
            </div>
            <button class="btn" onclick="completeModule(${module.id})" style="margin-top: 2rem; width: 100%;">${t('completeBtn')}</button>
        </div>
    `;
}

// Flashcards View
function renderFlashcards() {
    // If no category selected, show categories
    if (currentState.flashcardCategory === null) {
        renderFlashcardCategories();
        return;
    }

    const categories = appData.flashcards[currentState.language];
    const category = categories[currentState.flashcardCategory];
    const cards = category.cards;
    const card = cards[currentState.currentFlashcardIndex];

    if (!card) {
        currentState.currentFlashcardIndex = 0;
        return renderFlashcards();
    }

    mainContent.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
            <button class="btn" onclick="currentState.flashcardCategory = null; renderFlashcards();" style="background: transparent; color: var(--text-color); border: 1px solid var(--border-color); padding: 0.5rem 1rem;">← Categories</button>
            <h3 style="margin: 0; color: var(--primary-color);">${category.title}</h3>
            <div style="width: 80px;"></div> <!-- Spacer -->
        </div>
        
        <h2 style="text-align: center;">${t('flashcardsTitle')} (${currentState.currentFlashcardIndex + 1}/${cards.length})</h2>
        <div class="flashcard-container" onclick="this.querySelector('.flashcard').classList.toggle('flipped')">
            <div class="flashcard">
                <div class="flashcard-front">
                    ${card.front}
                    <div style="font-size: 0.9rem; font-weight: 400; margin-top: 1rem; color: var(--text-muted);">${t('clickToFlip')}</div>
                </div>
                <div class="flashcard-back">
                    ${card.back}
                    <button class="btn" onclick="event.stopPropagation(); playAudio('${card.front}')" style="margin-top: 1rem; padding: 0.5rem 1rem; font-size: 0.9rem; background: rgba(255,255,255,0.2);">${t('listenBtn')}</button>
                </div>
            </div>
        </div>
        <div class="controls">
            <button class="btn" onclick="prevCard()" ${currentState.currentFlashcardIndex === 0 ? 'disabled style="opacity:0.5"' : ''}>${t('prevBtn')}</button>
            <button class="btn" onclick="nextCard()" ${currentState.currentFlashcardIndex === cards.length - 1 ? 'disabled style="opacity:0.5"' : ''}>${t('nextBtn')}</button>
        </div>
    `;
}

function renderFlashcardCategories() {
    const categories = appData.flashcards[currentState.language];

    const categoriesHtml = categories.map((cat, index) => `
        <div class="card" onclick="openFlashcardCategory(${index})">
            <h3 style="margin-bottom: 0.5rem; color: var(--primary-color);">${cat.title}</h3>
            <p style="color: var(--text-color); opacity: 0.8;">${cat.description}</p>
            <span class="tag">${cat.cards.length} Cards</span>
        </div>
    `).join('');

    mainContent.innerHTML = `
        <h2 style="margin-bottom: 1.5rem;">${t('flashcardsTitle')}</h2>
        <div class="modules-grid">
            ${categoriesHtml}
        </div>
    `;
}

function openFlashcardCategory(index) {
    currentState.flashcardCategory = index;
    currentState.currentFlashcardIndex = 0;
    renderFlashcards();
}

function nextCard() {
    const category = appData.flashcards[currentState.language][currentState.flashcardCategory];
    if (currentState.currentFlashcardIndex < category.cards.length - 1) {
        currentState.currentFlashcardIndex++;
        renderFlashcards();
    }
}

function prevCard() {
    if (currentState.currentFlashcardIndex > 0) {
        currentState.currentFlashcardIndex--;
        renderFlashcards();
    }
}

// Quiz View
function renderQuiz() {
    const allQuizzes = appData.quizzes[currentState.language][currentState.level];

    // Step 1: Quiz Type Selection
    if (!currentState.quizType) {
        mainContent.innerHTML = `
             <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h2>${t('navQuiz')} - ${t('selectLevel')}</h2>
                ${getLevelControl()}
             </div>
             
             <div style="text-align: center; margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem; color: var(--text-muted);">${t('quizChooseType')}</h3>
                <div class="charts-container" style="justify-content: center; gap: 1.5rem;">
                    <div class="card" onclick="startQuiz('multiple_choice')" style="cursor: pointer; width: 100%; max-width: 250px; text-align: center; border: 2px solid transparent; transition: all 0.3s; padding: 2rem;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">📝</div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--primary-color);">${t('quizTextPractice')}</h4>
                        <p style="font-size: 0.9rem; color: var(--text-muted);">${t('quizTextDesc')}</p>
                    </div>
                    
                    <div class="card" onclick="startQuiz('speaking')" style="cursor: pointer; width: 100%; max-width: 250px; text-align: center; border: 2px solid transparent; transition: all 0.3s; padding: 2rem;">
                         <div style="font-size: 3rem; margin-bottom: 1rem;">🎤</div>
                        <h4 style="margin-bottom: 0.5rem; color: var(--primary-color);">${t('quizVoiceChallenge')}</h4>
                        <p style="font-size: 0.9rem; color: var(--text-muted);">${t('quizVoiceDesc')}</p>
                    </div>
                </div>
             </div>
        `;
        return;
    }

    // Filter Quizzes based on Type
    // Note: 'multiple_choice' questions might not have a 'type' property (undefined), or explicitly 'multiple_choice'
    // 'speaking' questions explicitly have type: 'speaking'
    const quizzes = allQuizzes.filter(q => {
        if (currentState.quizType === 'speaking') {
            return q.type === 'speaking';
        } else {
            return q.type !== 'speaking';
        }
    });

    // Handle case if no quiz for this level/lang/type combo
    if (!quizzes || quizzes.length === 0) {
        mainContent.innerHTML = `
             <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h2>${t('navQuiz')}</h2>
                ${getLevelControl()}
             </div>
             <div class="card">
                <p>${t('noQuizMsg').replace('{0}', currentState.quizType).replace('{1}', t('level' + currentState.level.charAt(0).toUpperCase() + currentState.level.slice(1)))}</p>
                <button class="btn" onclick="resetQuiz()" style="margin-top: 1rem;">${t('backToSelection')}</button>
             </div>
         `;
        return;
    }

    if (currentState.currentQuizIndex >= quizzes.length) {
        showQuizResult(quizzes.length);
        return;
    }

    const q = quizzes[currentState.currentQuizIndex];

    mainContent.innerHTML = `
        <div style="display: flex; flex-direction: column; max-width: 600px; margin: 0 auto; width: 100%;">
             <button onclick="resetQuiz()" style="background:none; border:none; cursor:pointer; align-self: flex-start; margin-bottom: 1rem; color: var(--text-muted);">← ${t('backToMenu')}</button>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h2>${t('navQuiz')} (${currentState.quizType === 'speaking' ? (t('quizVoiceChallenge').split(' ')[0] || 'Voice') : (t('quizTextPractice').split(' ')[0] || 'Text')})</h2>
                <div style="font-size: 0.9rem; font-weight: 600; color: var(--primary-color); padding: 0.25rem 0.5rem; background: var(--bg-color); border-radius: 4px;">
                     ${t('level' + currentState.level.charAt(0).toUpperCase() + currentState.level.slice(1))}
                </div>
            </div>
            
            <div class="card" style="width: 100%;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                    <span>${t('questionLabel')} ${currentState.currentQuizIndex + 1}/${quizzes.length}</span>
                    <span>${t('scoreLabel')}: ${currentState.score}</span>
                </div>
                <h3 style="font-size: 1.25rem; margin-bottom: 1.5rem;">${q.question}</h3>
                
                ${q.type === 'speaking' ? `
                    <div class="voice-container">
                        <div style="text-align:center; margin-bottom: 1rem;">
                             <p style="font-size: 1.5rem; font-weight: 700; color: var(--primary-color); margin-bottom: 0.5rem;">${q.targetPhrase}</p>
                             <p style="color: var(--text-muted);">(${q.romaji})</p>
                        </div>
                        <button id="record-btn" class="record-btn" onclick="startListening()">🎤</button>
                        <p id="feedback-msg" class="speaking-feedback">Tap microphone to speak</p>
                    </div>
                ` : `
                    <div class="quiz-options">
                        ${q.options.map((opt, idx) => `
                            <button class="option-btn" onclick="checkAnswer(${idx})">${opt}</button>
                        `).join('')}
                    </div>
                `}
            </div>
        </div>
    `;
}

function startQuiz(type) {
    currentState.quizType = type;
    currentState.currentQuizIndex = 0;
    currentState.score = 0;
    renderQuiz();
}

function checkAnswer(selectedIndex) {
    const allQuizzes = appData.quizzes[currentState.language][currentState.level];
    const quizzes = allQuizzes.filter(q => currentState.quizType === 'speaking' ? q.type === 'speaking' : q.type !== 'speaking');
    const q = quizzes[currentState.currentQuizIndex];
    if (q.type === 'speaking') return; // Handled by startListening

    const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    if (selectedIndex === q.answer) {
        buttons[selectedIndex].classList.add('correct');
        currentState.score++;
        playAudio("정답입니다");
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[q.answer].classList.add('correct');
    }

    setTimeout(() => {
        currentState.currentQuizIndex++;
        renderQuiz();
    }, 1500);
}

function startListening() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert("Speech Recognition not supported in this browser. Please use Chrome.");
        // Skip question logic if not supported
        currentState.currentQuizIndex++;
        renderQuiz();
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'ko-KR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    const btn = document.getElementById('record-btn');
    const feedback = document.getElementById('feedback-msg');

    recognition.start();

    recognition.onstart = function () {
        btn.classList.add('recording');
        feedback.textContent = "Listening...";
        feedback.classList.add('listening');
    };

    recognition.onend = function () {
        btn.classList.remove('recording');
        feedback.classList.remove('listening');
    };

    recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        const allQuizzes = appData.quizzes[currentState.language][currentState.level];
        const quizzes = allQuizzes.filter(q => currentState.quizType === 'speaking' ? q.type === 'speaking' : q.type !== 'speaking');
        const q = quizzes[currentState.currentQuizIndex];

        // Remove spaces and punctuation for comparison
        const cleanTranscript = transcript.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, "");
        const cleanTarget = q.targetPhrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, "");

        feedback.textContent = `You said: "${transcript}"`;

        if (cleanTranscript.includes(cleanTarget) || cleanTarget.includes(cleanTranscript)) {
            feedback.style.color = "#15803d";
            feedback.textContent += " (Correct!)";
            currentState.score++;
            playAudio("정답입니다");
            setTimeout(() => {
                currentState.currentQuizIndex++;
                renderQuiz();
            }, 2000);
        } else {
            feedback.style.color = "#b91c1c";
            feedback.textContent += " (Try again)";
            playAudio("다시 시도해보세요"); // Try again
        }
    };

    recognition.onerror = function (event) {
        feedback.textContent = "Error occurred in recognition: " + event.error;
        btn.classList.remove('recording');
    };
}

function showQuizResult(totalQuestions) {
    const percentage = Math.round((currentState.score / totalQuestions) * 100);
    // updateProgress(percentage); // Removed legacy progress update

    const msg = t('correctMsg').replace('{0}', percentage);

    mainContent.innerHTML = `
        <div class="card" style="text-align: center; padding: 3rem; max-width: 600px; margin: 0 auto;">
            <h2>${t('quizCompleted')}</h2>
            <p style="font-size: 4rem; font-weight: 700; color: var(--primary-color); margin: 1rem 0;">${currentState.score}/${totalQuestions}</p>
            <p style="color: var(--text-muted); margin-bottom: 2rem;">${msg}</p>
            <button class="btn" onclick="resetQuiz()">${t('tryAgainBtn')}</button>
            <button class="btn" onclick="navigateTo('home')" style="background: transparent; color: var(--text-color); border: 1px solid var(--border-color); margin-left: 1rem;">${t('homeBtn')}</button>
        </div>
    `;
}

function resetQuiz() {
    currentState.quizType = null;
    currentState.currentQuizIndex = 0;
    currentState.score = 0;
    renderQuiz();
}

// Logic & Helpers
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark-mode');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
}

function playAudio(text) {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

function updateProgress(value) {
    currentState.progress = Math.min(100, Math.max(currentState.progress, value));
    localStorage.setItem('learnProgress', currentState.progress);
}

function loadSettings() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') document.body.classList.add('dark-mode');

    const savedCompleted = localStorage.getItem('completedModules');
    if (savedCompleted) {
        currentState.completed = JSON.parse(savedCompleted);
    } else {
        // Initialize if not exists
        currentState.completed = { en: [], id: [] };
    }
    // const savedProgress = localStorage.getItem('learnProgress'); // Deprecated

    const savedLang = localStorage.getItem('language');
    if (savedLang) currentState.language = savedLang;
}

function completeModule(id) {
    if (!currentState.completed[currentState.language].includes(id)) {
        currentState.completed[currentState.language].push(id);
        localStorage.setItem('completedModules', JSON.stringify(currentState.completed));
        alert("Module Completed!");
    } else {
        alert("You have already completed this module.");
    }
    navigateTo('home');
}

// Initialize
init();

