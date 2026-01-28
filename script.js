// Main JavaScript for SelfMaster Website

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('show');
            mobileMenuBtn.innerHTML = nav.classList.contains('show') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Update window resize behavior
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && nav) {
            nav.classList.remove('show');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Initialize for mobile
    if (window.innerWidth <= 768 && nav) {
        nav.classList.remove('show');
    }
});

// Task Management Functions
function toggleTaskCompletion(checkbox) {
    const label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        label.classList.add('task-done');
    } else {
        label.classList.remove('task-done');
    }
    updateTaskStats();
}

function updateTaskStats() {
    const totalTasks = document.querySelectorAll('.task-item').length;
    const completedTasks = document.querySelectorAll('.task-check:checked').length;
    const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    // Update progress display if it exists
    const progressElement = document.querySelector('.progress-circle[data-percent]');
    if (progressElement) {
        progressElement.style.setProperty('--percent', progress + '%');
        progressElement.querySelector('span').textContent = progress + '%';
    }
}

// Habit Tracker Functions
function toggleHabitDay(dayElement) {
    dayElement.classList.toggle('active');
    updateHabitStats();
}

function updateHabitStats() {
    const activeDays = document.querySelectorAll('.calendar-day.active').length;
    const totalDays = document.querySelectorAll('.calendar-day').length;
    const streak = calculateCurrentStreak();
    
    // Update streak display if it exists
    const streakElement = document.querySelector('.streak-number');
    if (streakElement) {
        streakElement.textContent = streak;
    }
}

function calculateCurrentStreak() {
    // Simplified streak calculation
    const days = document.querySelectorAll('.calendar-day');
    let streak = 0;
    
    // Check from today backwards
    for (let i = days.length - 1; i >= 0; i--) {
        if (days[i].classList.contains('active')) {
            streak++;
        } else {
            break;
        }
    }
    
    return streak;
}

// Goal Progress Functions
function updateGoalProgress(goalId, progress) {
    const progressBar = document.getElementById(`progress-${goalId}`);
    if (progressBar) {
        progressBar.style.width = progress + '%';
        progressBar.setAttribute('data-progress', progress);
    }
}

// Motivation Generator
const quotes = [
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The future depends on what you do today.", author: "Mahatma Gandhi" }
];

const focuses = [
    "Complete high-priority tasks before noon and maintain your exercise routine.",
    "Focus on one major task at a time without distractions.",
    "Take regular breaks to maintain mental clarity throughout the day.",
    "Review your goals each morning to stay aligned with your priorities.",
    "Celebrate small wins to maintain motivation throughout your journey.",
    "Practice mindfulness during transitions between tasks.",
    "Schedule time for learning and skill development today."
];

function getNewMotivation() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomFocus = focuses[Math.floor(Math.random() * focuses.length)];
    
    return { quote: randomQuote, focus: randomFocus };
}

// Form Handling
function validateTaskForm() {
    const title = document.getElementById('task-title');
    const priority = document.getElementById('task-priority');
    
    if (!title.value.trim()) {
        alert('Please enter a task title');
        title.focus();
        return false;
    }
    
    if (!priority.value) {
        alert('Please select a priority level');
        priority.focus();
        return false;
    }
    
    return true;
}

// Local Storage Functions
function saveToLocalStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
    }
}

function loadFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Error loading from localStorage:', e);
        return null;
    }
}

// Initialize page-specific functionality
function initPage() {
    const page = document.body.id || window.location.pathname.split('/').pop().split('.')[0];
    
    switch(page) {
        case 'index':
        case '':
            initHomePage();
            break;
        case 'tasks':
            initTasksPage();
            break;
        case 'habits':
            initHabitsPage();
            break;
        case 'goals':
            initGoalsPage();
            break;
        case 'analytics':
            initAnalyticsPage();
            break;
    }
}

function initHomePage() {
    // Update motivation on button click
    const newQuoteBtn = document.getElementById('new-quote-btn');
    const quoteElement = document.getElementById('daily-quote');
    const authorElement = document.getElementById('quote-author');
    const focusElement = document.getElementById('daily-focus');
    
    if (newQuoteBtn && quoteElement) {
        newQuoteBtn.addEventListener('click', function() {
            const motivation = getNewMotivation();
            quoteElement.textContent = `"${motivation.quote.text}"`;
            authorElement.textContent = `- ${motivation.quote.author}`;
            focusElement.textContent = motivation.focus;
        });
    }
    
    // Initialize progress circles
    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent') || '0';
        circle.style.setProperty('--percent', percent + '%');
    });
}

function initTasksPage() {
    // Load tasks from localStorage
    const tasks = loadFromLocalStorage('tasks') || [];
    renderTasks(tasks);
    
    // Form submission
    const taskForm = document.getElementById('task-form');
    if (taskForm) {
        taskForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateTaskForm()) {
                const newTask = {
                    id: Date.now(),
                    title: document.getElementById('task-title').value,
                    description: document.getElementById('task-description').value,
                    priority: document.getElementById('task-priority').value,
                    dueDate: document.getElementById('task-due').value,
                    completed: false
                };
                
                tasks.push(newTask);
                saveToLocalStorage('tasks', tasks);
                renderTasks(tasks);
                taskForm.reset();
            }
        });
    }
    
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterTasks(this.dataset.filter);
        });
    });
}

function renderTasks(tasks) {
    const taskList = document.getElementById('task-list');
    if (!taskList) return;
    
    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="empty-state">No tasks yet. Add your first task above!</div>';
        return;
    }
    
    taskList.innerHTML = tasks.map(task => `
        <div class="task-item">
            <div class="task-info">
                <input type="checkbox" class="task-check" ${task.completed ? 'checked' : ''} 
                       onchange="toggleTaskCompletion(this)">
                <div class="task-title ${task.completed ? 'task-done' : ''}">
                    <strong>${task.title}</strong>
                    ${task.description ? `<p class="task-desc">${task.description}</p>` : ''}
                    ${task.dueDate ? `<small>Due: ${new Date(task.dueDate).toLocaleDateString()}</small>` : ''}
                </div>
            </div>
            <span class="task-priority priority-${task.priority}">${task.priority}</span>
            <div class="task-actions">
                <button class="action-btn" onclick="editTask(${task.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn" onclick="deleteTask(${task.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function filterTasks(filter) {
    // Implementation for filtering tasks
    console.log('Filtering tasks by:', filter);
}

function editTask(taskId) {
    console.log('Editing task:', taskId);
}

function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task?')) {
        let tasks = loadFromLocalStorage('tasks') || [];
        tasks = tasks.filter(task => task.id !== taskId);
        saveToLocalStorage('tasks', tasks);
        renderTasks(tasks);
    }
}

function initHabitsPage() {
    // Initialize habit calendar
    const calendarDays = document.querySelectorAll('.calendar-day');
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            this.classList.toggle('active');
            updateHabitStats();
        });
    });
}

function initGoalsPage() {
    // Goal page initialization
}

function initAnalyticsPage() {
    // Analytics page initialization
}

// Initialize when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}

// Enhanced SelfMaster with Advanced Features

// Eisenhower Matrix
function initializeMatrix() {
    const quadrants = document.querySelectorAll('.matrix-quadrant');
    quadrants.forEach(quadrant => {
        new Sortable(quadrant, {
            group: 'tasks',
            animation: 150,
            onEnd: function(evt) {
                updateTaskPriority(evt.item.dataset.taskId, evt.to.dataset.quadrant);
            }
        });
    });
}

function updateTaskPriority(taskId, quadrant) {
    const tasks = loadFromLocalStorage('tasks') || [];
    const taskIndex = tasks.findIndex(t => t.id == taskId);
    
    if (taskIndex !== -1) {
        tasks[taskIndex].quadrant = quadrant;
        tasks[taskIndex].priority = getPriorityFromQuadrant(quadrant);
        saveToLocalStorage('tasks', tasks);
    }
}

function getPriorityFromQuadrant(quadrant) {
    const priorityMap = {
        'quadrant-1': 'high',
        'quadrant-2': 'medium',
        'quadrant-3': 'low',
        'quadrant-4': 'delegate'
    };
    return priorityMap[quadrant] || 'medium';
}

// SMART Goal Framework
function createSMARTGoal() {
    const smartData = {
        specific: document.getElementById('smart-specific').value,
        measurable: document.getElementById('smart-measurable').value,
        achievable: document.getElementById('smart-achievable').value,
        relevant: document.getElementById('smart-relevant').value,
        timebound: document.getElementById('smart-timebound').value
    };
    
    const goal = {
        id: Date.now(),
        title: document.getElementById('goal-title').value,
        description: document.getElementById('goal-description').value,
        smart: smartData,
        progress: 0,
        milestones: [],
        createdAt: new Date().toISOString()
    };
    
    const goals = loadFromLocalStorage('goals') || [];
    goals.push(goal);
    saveToLocalStorage('goals', goals);
    return goal;
}

// Pomodoro Timer
class PomodoroTimer {
    constructor() {
        this.workTime = 25 * 60; // 25 minutes in seconds
        this.breakTime = 5 * 60; // 5 minutes in seconds
        this.timeLeft = this.workTime;
        this.isRunning = false;
        this.isWorkSession = true;
        this.timer = null;
    }
    
    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.timer = setInterval(() => this.tick(), 1000);
        }
    }
    
    pause() {
        this.isRunning = false;
        clearInterval(this.timer);
    }
    
    reset() {
        this.pause();
        this.timeLeft = this.isWorkSession ? this.workTime : this.breakTime;
        this.updateDisplay();
    }
    
    tick() {
        this.timeLeft--;
        this.updateDisplay();
        
        if (this.timeLeft <= 0) {
            this.switchSession();
        }
    }
    
    switchSession() {
        this.isWorkSession = !this.isWorkSession;
        this.timeLeft = this.isWorkSession ? this.workTime : this.breakTime;
        this.playNotification();
        this.updateSessionIndicator();
    }
    
    updateDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        const timerElements = document.querySelectorAll('.timer-display, .focus-timer');
        timerElements.forEach(el => {
            if (el) el.textContent = display;
        });
    }
    
    playNotification() {
        // Play sound or show notification
        if (typeof Audio !== 'undefined') {
            const audio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEAQB8AAEAfAAABAAgAZGF0YQ');
            audio.play();
        }
    }
    
    updateSessionIndicator() {
        const indicator = document.getElementById('session-indicator');
        if (indicator) {
            indicator.textContent = this.isWorkSession ? 'Focus Time' : 'Break Time';
            indicator.className = this.isWorkSession ? 'session-work' : 'session-break';
        }
    }
}

// Time Blocking
function createTimeBlock(start, end, task, category) {
    const timeBlock = {
        id: Date.now(),
        startTime: start,
        endTime: end,
        taskId: task.id,
        taskTitle: task.title,
        category: category,
        completed: false
    };
    
    const timeBlocks = loadFromLocalStorage('timeBlocks') || [];
    timeBlocks.push(timeBlock);
    saveToLocalStorage('timeBlocks', timeBlocks);
    return timeBlock;
}

function renderTimeBlocks(date) {
    const blocks = loadFromLocalStorage('timeBlocks') || [];
    const dayBlocks = blocks.filter(block => 
        new Date(block.startTime).toDateString() === date.toDateString()
    );
    
    // Sort by start time
    dayBlocks.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
    
    // Render to calendar
    const container = document.getElementById('time-blocks-container');
    if (container) {
        container.innerHTML = dayBlocks.map(block => `
            <div class="time-block" data-block-id="${block.id}">
                <div class="time-range">
                    ${formatTime(new Date(block.startTime))} - ${formatTime(new Date(block.endTime))}
                </div>
                <div class="block-task">${block.taskTitle}</div>
                <div class="block-category">${block.category}</div>
                <div class="block-actions">
                    <button onclick="completeTimeBlock(${block.id})" class="action-btn">
                        <i class="fas fa-check"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Weekly/Monthly Reviews
function loadReviewTemplate(templateType) {
    const templates = {
        weekly: [
            "What were my biggest accomplishments this week?",
            "What challenges did I face and how did I overcome them?",
            "What lessons did I learn?",
            "What should I start doing next week?",
            "What should I stop doing?",
            "What should I continue doing?"
        ],
        monthly: [
            "How did I progress on my monthly goals?",
            "What habits served me well this month?",
            "What habits need improvement?",
            "What was my biggest win?",
            "What was my biggest lesson?",
            "What will I focus on next month?"
        ]
    };
    
    return templates[templateType] || templates.weekly;
}

// Data Visualization
function generateProductivityChart() {
    const tasks = loadFromLocalStorage('tasks') || [];
    const completedByDay = {};
    
    tasks.forEach(task => {
        if (task.completed && task.completedAt) {
            const date = new Date(task.completedAt).toLocaleDateString();
            completedByDay[date] = (completedByDay[date] || 0) + 1;
        }
    });
    
    // Prepare data for chart (using Chart.js if available)
    const dates = Object.keys(completedByDay).sort();
    const counts = dates.map(date => completedByDay[date]);
    
    return { dates, counts };
}

// Focus Mode
function enterFocusMode(taskId) {
    const task = getTaskById(taskId);
    if (!task) return;
    
    // Save current state
    sessionStorage.setItem('preFocusScroll', window.scrollY);
    sessionStorage.setItem('focusTaskId', taskId);
    
    // Redirect to focus mode page
    window.location.href = 'focus.html';
}

function initializeFocusMode() {
    const taskId = sessionStorage.getItem('focusTaskId');
    const task = getTaskById(taskId);
    
    if (task) {
        document.getElementById('focus-task-title').textContent = task.title;
        if (task.description) {
            document.getElementById('focus-task-description').textContent = task.description;
        }
    }
    
    // Initialize Pomodoro timer
    window.pomodoro = new PomodoroTimer();
    window.pomodoro.updateDisplay();
}

// Template System
function loadTemplates() {
    const templates = [
        {
            id: 'project-launch',
            name: 'Project Launch',
            type: 'project',
            description: 'Complete framework for launching a new project',
            tags: ['project', 'planning', 'business'],
            tasks: [
                'Define project scope',
                'Set up project team',
                'Create timeline',
                'Define success metrics',
                'Plan launch campaign'
            ]
        },
        {
            id: 'weekly-review',
            name: 'Weekly Review',
            type: 'review',
            description: 'Structured weekly reflection template',
            tags: ['review', 'weekly', 'reflection']
        },
        {
            id: 'smart-goal',
            name: 'SMART Goal',
            type: 'goal',
            description: 'Framework for setting effective goals',
            tags: ['goal', 'planning', 'smart']
        }
    ];
    
    return templates;
}

function applyTemplate(templateId) {
    const template = loadTemplates().find(t => t.id === templateId);
    if (!template) return;
    
    switch(template.type) {
        case 'project':
            createProjectFromTemplate(template);
            break;
        case 'goal':
            createGoalFromTemplate(template);
            break;
        case 'review':
            loadReviewQuestions(template);
            break;
    }
}

// Export/Import Data
function exportData() {
    const data = {
        tasks: loadFromLocalStorage('tasks') || [],
        goals: loadFromLocalStorage('goals') || [],
        habits: loadFromLocalStorage('habits') || [],
        notes: loadFromLocalStorage('notes') || [],
        timeBlocks: loadFromLocalStorage('timeBlocks') || [],
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `selfmaster-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            // Validate data structure
            if (data.tasks && data.goals && data.habits) {
                // Backup current data first
                const backup = {};
                ['tasks', 'goals', 'habits', 'notes', 'timeBlocks'].forEach(key => {
                    backup[key] = loadFromLocalStorage(key);
                });
                
                // Save backup
                localStorage.setItem('backup-before-import', JSON.stringify(backup));
                
                // Import new data
                Object.keys(data).forEach(key => {
                    if (['tasks', 'goals', 'habits', 'notes', 'timeBlocks'].includes(key)) {
                        saveToLocalStorage(key, data[key]);
                    }
                });
                
                alert('Data imported successfully! Previous data backed up.');
                location.reload();
            } else {
                throw new Error('Invalid data format');
            }
        } catch (error) {
            alert('Error importing data: ' + error.message);
        }
    };
    reader.readAsText(file);
}

// Utility Functions
function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function getTaskById(id) {
    const tasks = loadFromLocalStorage('tasks') || [];
    return tasks.find(task => task.id == id);
}

function generateDailyFocus() {
    const priorities = ['Most Important Task', 'Strategic Work', 'Relationship Building', 'Learning'];
    const randomPriority = priorities[Math.floor(Math.random() * priorities.length)];
    
    const focusPhrases = [
        `Focus on completing your ${randomPriority.toLowerCase()} first.`,
        'Batch similar tasks together to maintain flow state.',
        'Take regular breaks to sustain energy throughout the day.',
        'Review your goals before starting work to ensure alignment.'
    ];
    
    return focusPhrases[Math.floor(Math.random() * focusPhrases.length)];
}

// Initialize all components
function initializeEnhancedApp() {
    initPage(); // From previous implementation
    
    // Initialize specific features if on relevant pages
    if (document.querySelector('.matrix-container')) {
        initializeMatrix();
    }
    
    if (document.querySelector('.pomodoro-container')) {
        window.pomodoro = new PomodoroTimer();
    }
    
    if (window.location.pathname.includes('focus.html')) {
        initializeFocusMode();
    }
    
    // Set daily focus
    const dailyFocusElement = document.getElementById('daily-focus');
    if (dailyFocusElement) {
        dailyFocusElement.textContent = generateDailyFocus();
    }
}

// Run initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEnhancedApp);
} else {
    initializeEnhancedApp();
}