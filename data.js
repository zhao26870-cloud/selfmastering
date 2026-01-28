// data.js - Sample data and templates for SelfMaster
// Rewritten without ES6 modules for compatibility with HTML script includes

// Global SelfMasterData object
window.SelfMasterData = (function() {
    'use strict';

    // Sample tasks for initial setup
    const sampleTasks = [
        {
            id: 1,
            title: "Complete project proposal",
            description: "Finish the quarterly project proposal with budget estimates and timeline",
            priority: "high",
            dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            completed: false,
            tags: ["work", "important"],
            estimate: "2 hours",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 2,
            title: "Morning workout",
            description: "30 minutes of cardio and strength training",
            priority: "medium",
            dueDate: new Date().toISOString().split('T')[0],
            completed: true,
            tags: ["health", "routine"],
            estimate: "30 minutes",
            completedAt: new Date().toISOString(),
            createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 3,
            title: "Read industry report",
            description: "Review latest industry trends and analysis",
            priority: "low",
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            completed: false,
            tags: ["learning", "research"],
            estimate: "1 hour",
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 4,
            title: "Plan weekly meals",
            description: "Create meal plan and grocery list for the week",
            priority: "medium",
            dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            completed: false,
            tags: ["personal", "health"],
            estimate: "45 minutes",
            createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];

    // Sample habits for initial setup
    const sampleHabits = [
        {
            id: 1,
            name: "Morning Meditation",
            description: "10 minutes of mindfulness meditation",
            frequency: "daily",
            streak: 7,
            bestStreak: 21,
            calendar: Array(30).fill().map((_, i) => Math.random() > 0.3),
            category: "wellness",
            timeOfDay: "morning",
            createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
            reminders: ["08:00"]
        },
        {
            id: 2,
            name: "Evening Journal",
            description: "Reflect on the day and plan tomorrow",
            frequency: "daily",
            streak: 5,
            bestStreak: 14,
            calendar: Array(30).fill().map((_, i) => Math.random() > 0.4),
            category: "personal",
            timeOfDay: "evening",
            createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
            reminders: ["21:00"]
        },
        {
            id: 3,
            name: "Daily Reading",
            description: "Read at least 30 pages",
            frequency: "daily",
            streak: 3,
            bestStreak: 10,
            calendar: Array(30).fill().map((_, i) => Math.random() > 0.5),
            category: "learning",
            timeOfDay: "afternoon",
            createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
            reminders: ["19:00"]
        }
    ];

    // Sample goals for initial setup
    const sampleGoals = [
        {
            id: 1,
            title: "Learn Spanish",
            description: "Achieve conversational proficiency in Spanish",
            smart: {
                specific: "Hold a 30-minute conversation in Spanish",
                measurable: "Complete 50 Duolingo lessons and 20 conversation practices",
                achievable: "Study 30 minutes daily and practice weekly",
                relevant: "For upcoming trip to Spain and career advancement",
                timebound: "By June 2024"
            },
            progress: 35,
            milestones: [
                { id: 1, text: "Complete beginner course", completed: true, date: "2023-10-15" },
                { id: 2, text: "Learn 500 vocabulary words", completed: true, date: "2023-11-20" },
                { id: 3, text: "Practice with native speaker", completed: false },
                { id: 4, text: "Watch movie without subtitles", completed: false },
                { id: 5, text: "Have 30-minute conversation", completed: false }
            ],
            category: "learning",
            priority: "high",
            startDate: "2023-09-01",
            deadline: "2024-06-30",
            createdAt: new Date("2023-09-01").toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 2,
            title: "Run 5km without stopping",
            description: "Improve cardiovascular fitness and endurance",
            smart: {
                specific: "Run 5 kilometers continuously",
                measurable: "Track distance and time using fitness app",
                achievable: "Follow Couch to 5K training program",
                relevant: "Improve overall health and energy levels",
                timebound: "By March 2024"
            },
            progress: 20,
            milestones: [
                { id: 1, text: "Run 1km without stopping", completed: true, date: "2023-11-10" },
                { id: 2, text: "Run 2km without stopping", completed: false },
                { id: 3, text: "Run 3km without stopping", completed: false },
                { id: 4, text: "Run 4km without stopping", completed: false },
                { id: 5, text: "Run 5km without stopping", completed: false }
            ],
            category: "fitness",
            priority: "medium",
            startDate: "2023-11-01",
            deadline: "2024-03-31",
            createdAt: new Date("2023-11-01").toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];

    // Sample notes for initial setup
    const sampleNotes = [
        {
            id: 1,
            title: "Project Ideas Brainstorm",
            content: "## New Project Ideas\n\n1. **Personal Finance Tracker**\n   - Budget planning\n   - Investment tracking\n   - Expense categorization\n\n2. **Learning Platform**\n   - Interactive courses\n   - Progress tracking\n   - Community features\n\n3. **Health & Wellness App**\n   - Workout plans\n   - Nutrition tracking\n   - Mental health resources",
            tags: "ideas, brainstorming, projects",
            notebook: "ideas",
            createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 2,
            title: "Meeting Notes - Team Sync",
            content: "## Team Meeting - December 12, 2023\n\n### Attendees\n- John (Product)\n- Sarah (Engineering)\n- Mike (Design)\n- Lisa (Marketing)\n\n### Discussion Points\n1. **Q4 Goals Review**\n   - On track for 85% completion\n   - Need to accelerate marketing efforts\n\n2. **Q1 Planning**\n   - New feature development\n   - User research scheduled\n   - Budget allocation\n\n3. **Action Items**\n   - John: Finalize requirements doc by Friday\n   - Sarah: Setup development environment\n   - Mike: Create wireframes\n   - Lisa: Prepare marketing plan",
            tags: "meeting, work, team",
            notebook: "meetings",
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
        },
        {
            id: 3,
            title: "Learning Resources - Web Development",
            content: "## Web Development Learning Path\n\n### Frontend\n1. HTML/CSS Fundamentals\n2. JavaScript ES6+\n3. React/Vue.js\n4. State Management\n5. Testing\n\n### Backend\n1. Node.js/Express\n2. Databases (SQL/NoSQL)\n3. API Design\n4. Authentication\n5. Deployment\n\n### Resources\n- **FreeCodeCamp**\n- **MDN Web Docs**\n- **Frontend Masters**\n- **YouTube Channels**",
            tags: "learning, web-development, resources",
            notebook: "learning",
            createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
            updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
        }
    ];

    // Sample projects for initial setup
    const sampleProjects = [
        {
            id: 1,
            name: "Website Redesign",
            description: "Complete redesign of company website with modern UX/UI",
            status: "active",
            priority: "high",
            startDate: "2023-11-01",
            deadline: "2024-02-28",
            progress: 45,
            tasks: [
                { id: 1, title: "Research and Analysis", completed: true },
                { id: 2, title: "Wireframing", completed: true },
                { id: 3, title: "UI Design", completed: false },
                { id: 4, title: "Development", completed: false },
                { id: 5, title: "Testing", completed: false },
                { id: 6, title: "Launch", completed: false }
            ],
            team: ["John", "Sarah", "Mike"],
            budget: 15000,
            createdAt: new Date("2023-11-01").toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: 2,
            name: "Mobile App Development",
            description: "Build cross-platform mobile application for product",
            status: "planning",
            priority: "medium",
            startDate: "2024-01-15",
            deadline: "2024-06-30",
            progress: 10,
            tasks: [
                { id: 1, title: "Requirements Gathering", completed: true },
                { id: 2, title: "Tech Stack Selection", completed: false },
                { id: 3, title: "Architecture Design", completed: false },
                { id: 4, title: "Development Sprint 1", completed: false },
                { id: 5, title: "Development Sprint 2", completed: false }
            ],
            team: ["Alex", "Maria", "David"],
            budget: 25000,
            createdAt: new Date("2023-12-01").toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];

    // Sample time blocks for initial setup
    const sampleTimeBlocks = [
        {
            id: 1,
            title: "Deep Work - Project Planning",
            startTime: new Date(new Date().setHours(9, 0, 0, 0)).toISOString(),
            endTime: new Date(new Date().setHours(11, 0, 0, 0)).toISOString(),
            category: "work",
            color: "#4361ee",
            notes: "Focus on project requirements and planning",
            completed: true,
            createdAt: new Date().toISOString()
        },
        {
            id: 2,
            title: "Team Meeting",
            startTime: new Date(new Date().setHours(11, 30, 0, 0)).toISOString(),
            endTime: new Date(new Date().setHours(12, 30, 0, 0)).toISOString(),
            category: "work",
            color: "#4895ef",
            notes: "Weekly team sync and updates",
            completed: false,
            createdAt: new Date().toISOString()
        },
        {
            id: 3,
            title: "Learning Session",
            startTime: new Date(new Date().setHours(14, 0, 0, 0)).toISOString(),
            endTime: new Date(new Date().setHours(15, 0, 0, 0)).toISOString(),
            category: "learning",
            color: "#4cc9f0",
            notes: "Study new framework documentation",
            completed: false,
            createdAt: new Date().toISOString()
        }
    ];

    // Sample reviews for initial setup
    const sampleReviews = [
        {
            id: 1,
            type: "weekly",
            title: "Weekly Review",
            date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            answers: {
                accomplishments: "Completed project proposal, finished two major tasks, learned new framework",
                goal_progress: "Made good progress on Spanish learning goal, fell behind on fitness goal",
                challenges: "Time management was difficult, had too many meetings",
                lessons: "Need to batch similar tasks together, morning planning sessions help",
                start_stop_continue: "START: Time blocking\nSTOP: Multitasking\nCONTINUE: Daily reviews",
                energy_patterns: "Most productive in morning (9-12), energy dip after lunch",
                next_week_goals: "Complete UI design, exercise 4 times, read 100 pages",
                weekly_rating: "7"
            },
            actionItems: [
                {
                    id: 1,
                    text: "Implement time blocking for deep work sessions",
                    source: "start_stop_continue",
                    completed: false,
                    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
                },
                {
                    id: 2,
                    text: "Schedule exercise sessions in calendar",
                    source: "next_week_goals",
                    completed: true,
                    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
                }
            ],
            completed: true
        },
        {
            id: 2,
            type: "daily",
            title: "Daily Review",
            date: new Date().toISOString(),
            answers: {
                achievements: "Finished project proposal, exercised for 30 minutes",
                challenges: "Got distracted by social media in afternoon",
                learnings: "Pomodoro technique helps maintain focus",
                gratitude: "Grateful for supportive team and good health",
                energy: "8",
                tomorrow: "Complete UI mockups, read 30 pages, meditate"
            },
            actionItems: [
                {
                    id: 3,
                    text: "Use website blockers during work hours",
                    source: "challenges",
                    completed: false,
                    createdAt: new Date().toISOString()
                }
            ],
            completed: false
        }
    ];

    // Project templates
    const projectTemplates = {
        "product-launch": {
            id: "product-launch",
            name: "Product Launch",
            description: "Complete framework for launching a new product or service",
            type: "project",
            category: "business",
            duration: "2-3 months",
            difficulty: "medium",
            tasks: [
                "Market research and analysis",
                "Define product requirements and specifications",
                "Create marketing strategy and positioning",
                "Set up production or supply chain",
                "Develop pricing model",
                "Create sales materials and training",
                "Plan launch campaign timeline",
                "Coordinate with distribution channels",
                "Prepare customer support materials",
                "Execute launch day activities",
                "Monitor post-launch performance",
                "Collect and analyze customer feedback"
            ],
            milestones: [
                { name: "Research Complete", duration: "2 weeks" },
                { name: "Requirements Finalized", duration: "1 week" },
                { name: "Marketing Plan Ready", duration: "3 weeks" },
                { name: "Production Setup", duration: "4 weeks" },
                { name: "Sales Training", duration: "2 weeks" },
                { name: "Launch Execution", duration: "1 week" },
                { name: "Post-Launch Review", duration: "2 weeks" }
            ],
            tags: ["business", "marketing", "planning", "launch"],
            estimatedHours: 200,
            teamSize: "5-10 people"
        },
        "event-planning": {
            id: "event-planning",
            name: "Event Planning",
            description: "Organize and execute successful events from start to finish",
            type: "project",
            category: "logistics",
            duration: "1-6 months",
            difficulty: "medium",
            tasks: [
                "Define event objectives and theme",
                "Set budget and secure funding",
                "Choose venue and date",
                "Create guest list and invitations",
                "Arrange catering and entertainment",
                "Plan logistics and transportation",
                "Coordinate with vendors and suppliers",
                "Prepare event materials and signage",
                "Organize day-of schedule and staffing",
                "Set up registration and check-in",
                "Manage event execution",
                "Follow up with attendees and vendors"
            ],
            milestones: [
                { name: "Venue Booked", duration: "1 month" },
                { name: "Budget Approved", duration: "2 weeks" },
                { name: "Invitations Sent", duration: "6 weeks" },
                { name: "Vendors Confirmed", duration: "1 month" },
                { name: "Final Schedule", duration: "2 weeks" },
                { name: "Event Day", duration: "1 day" },
                { name: "Post-Event Review", duration: "1 week" }
            ],
            tags: ["event", "logistics", "planning", "coordination"],
            estimatedHours: 150,
            teamSize: "3-8 people"
        },
        "learning-project": {
            id: "learning-project",
            name: "Learning Project",
            description: "Structure for mastering a new skill or subject area",
            type: "project",
            category: "education",
            duration: "3-6 months",
            difficulty: "variable",
            tasks: [
                "Define learning objectives and goals",
                "Research available learning resources",
                "Create study schedule and timeline",
                "Complete foundational knowledge material",
                "Practice and apply knowledge through projects",
                "Join study group or find mentor",
                "Complete intermediate level projects",
                "Test your knowledge with assessments",
                "Teach others what you've learned",
                "Build portfolio of work",
                "Prepare for certification if applicable",
                "Create continuous learning plan"
            ],
            milestones: [
                { name: "Learning Plan Ready", duration: "1 week" },
                { name: "Foundations Complete", duration: "1 month" },
                { name: "First Project Done", duration: "2 weeks" },
                { name: "Intermediate Level", duration: "2 months" },
                { name: "Portfolio Created", duration: "1 month" },
                { name: "Knowledge Tested", duration: "1 week" },
                { name: "Teaching Others", duration: "2 weeks" }
            ],
            tags: ["learning", "education", "skills", "development"],
            estimatedHours: 300,
            teamSize: "Individual or small group"
        }
    };

    // SMART Goal questions template
    const smartGoalTemplate = {
        specific: "What exactly do I want to accomplish?",
        measurable: "How will I measure success?",
        achievable: "Is this goal realistic with available resources?",
        relevant: "Does this align with my broader objectives?",
        timebound: "What is the deadline for completion?"
    };

    // Eisenhower Matrix categories
    const eisenhowerMatrix = {
        quadrants: [
            {
                id: "quadrant-1",
                name: "Urgent & Important",
                description: "Do these tasks immediately",
                color: "danger",
                priority: "high",
                examples: ["Crisis situations", "Pressing problems", "Deadline-driven projects", "Emergency tasks"]
            },
            {
                id: "quadrant-2",
                name: "Not Urgent & Important",
                description: "Schedule these tasks for later",
                color: "success",
                priority: "medium",
                examples: ["Planning", "Relationship building", "Personal development", "Preventive maintenance"]
            },
            {
                id: "quadrant-3",
                name: "Urgent & Not Important",
                description: "Delegate these if possible",
                color: "warning",
                priority: "low",
                examples: ["Interruptions", "Some meetings", "Some emails", "Some phone calls"]
            },
            {
                id: "quadrant-4",
                name: "Not Urgent & Not Important",
                description: "Eliminate these tasks",
                color: "gray",
                priority: "none",
                examples: ["Trivial work", "Time wasters", "Excessive leisure", "Mindless activities"]
            }
        ]
    };

    // Review question templates
    const reviewTemplates = {
        daily: [
            "What were my top 3 achievements today?",
            "What challenges did I face today?",
            "What did I learn today?",
            "What am I grateful for today?",
            "What was my energy level today? (1-10)",
            "What are my top 3 priorities for tomorrow?"
        ],
        weekly: [
            "What were my major accomplishments this week?",
            "How did I progress on my weekly goals?",
            "What were the biggest challenges this week?",
            "What lessons did I learn this week?",
            "What should I START, STOP, and CONTINUE doing?",
            "When was I most/least productive and energetic?",
            "What are my goals for next week?",
            "How would I rate this week overall? (1-10)"
        ],
        monthly: [
            "What were my biggest achievements this month?",
            "How did I progress on my monthly goals?",
            "How consistent was I with my habits?",
            "What were the most important lessons learned?",
            "What challenges did I overcome?",
            "What areas need improvement?",
            "What are my goals for next month?",
            "What specific actions will I take next month?",
            "How would I rate this month overall? (1-10)"
        ],
        quarterly: [
            "What were the major achievements this quarter?",
            "How did I progress toward annual goals?",
            "What strategic insights did I gain?",
            "What were the biggest obstacles and how were they addressed?",
            "What should change in the next quarter?",
            "What resources do I need for the next quarter?",
            "What are the top 3 priorities for next quarter?",
            "How would I rate this quarter overall? (1-10)"
        ]
    };

    // Habit categories and suggestions
    const habitCategories = {
        wellness: [
            "Morning meditation",
            "Daily exercise",
            "Drink 8 glasses of water",
            "Get 8 hours of sleep",
            "Evening gratitude journal",
            "Digital detox before bed",
            "Healthy breakfast",
            "Posture checks",
            "Deep breathing exercises",
            "Daily stretching"
        ],
        productivity: [
            "Morning planning session",
            "Evening review",
            "Most Important Task first",
            "Pomodoro technique sessions",
            "Weekly review",
            "Inbox zero",
            "Single-tasking focus",
            "Learning time",
            "Creative time",
            "Admin time blocking"
        ],
        learning: [
            "Read 30 minutes daily",
            "Practice a skill",
            "Learn a new word",
            "Watch educational content",
            "Listen to podcasts",
            "Take notes while learning",
            "Review previous learning",
            "Teach someone something",
            "Work on a learning project",
            "Join a study group"
        ],
        personal: [
            "Connect with family",
            "Call a friend",
            "Practice a hobby",
            "Self-reflection",
            "Financial review",
            "Home organization",
            "Meal planning",
            "Digital organization",
            "Goal review",
            "Personal project work"
        ]
    };

    // Time blocking categories and colors
    const timeBlockCategories = {
        work: {
            name: "Work",
            color: "#4361ee",
            description: "Professional work and career-related activities"
        },
        personal: {
            name: "Personal",
            color: "#4cc9f0",
            description: "Personal development and self-care activities"
        },
        learning: {
            name: "Learning",
            color: "#4895ef",
            description: "Education and skill development activities"
        },
        health: {
            name: "Health",
            color: "#3f37c9",
            description: "Exercise, wellness, and healthcare activities"
        },
        social: {
            name: "Social",
            color: "#f72585",
            description: "Social interactions and relationship building"
        },
        admin: {
            name: "Admin",
            color: "#7209b7",
            description: "Administrative tasks and maintenance activities"
        }
    };

    // Note-taking templates
    const noteTemplates = {
        meeting: {
            name: "Meeting Notes",
            content: `# Meeting Notes

## Date: {{date}}
## Attendees: {{attendees}}
## Location: {{location}}

### Agenda
1. 
2. 
3. 

### Discussion Points
- 

### Decisions Made
- 

### Action Items
- [ ] 
- [ ] 
- [ ] 

### Next Meeting
**Date:** {{next_date}}
**Topics:** {{next_topics}}`,
            tags: "meeting, notes, work"
        },
        project: {
            name: "Project Plan",
            content: `# {{project_name}}

## Overview
**Goal:** {{project_goal}}
**Timeline:** {{timeline}}
**Budget:** {{budget}}

## Team
- **Project Lead:** {{lead}}
- **Team Members:** {{members}}

## Milestones
1. {{milestone_1}} - {{date_1}}
2. {{milestone_2}} - {{date_2}}
3. {{milestone_3}} - {{date_3}}

## Resources Needed
- 
- 
- 

## Risks & Mitigation
- 
- 
- 

## Success Metrics
- 
- 
- `,
            tags: "project, plan, management"
        },
        learning: {
            name: "Learning Notes",
            content: `# {{topic}}

## Date: {{date}}
## Source: {{source}}

## Key Concepts
- 
- 
- 

## Important Points
- 
- 
- 

## Questions to Explore
- 
- 
- 

## Practical Applications
- 
- 
- 

## Summary
{{summary}}`,
            tags: "learning, notes, education"
        }
    };

    // Public API - methods and data accessible globally
    const publicAPI = {
        // Data access
        getSampleTasks: function() { return JSON.parse(JSON.stringify(sampleTasks)); },
        getSampleHabits: function() { return JSON.parse(JSON.stringify(sampleHabits)); },
        getSampleGoals: function() { return JSON.parse(JSON.stringify(sampleGoals)); },
        getSampleNotes: function() { return JSON.parse(JSON.stringify(sampleNotes)); },
        getSampleProjects: function() { return JSON.parse(JSON.stringify(sampleProjects)); },
        getSampleTimeBlocks: function() { return JSON.parse(JSON.stringify(sampleTimeBlocks)); },
        getSampleReviews: function() { return JSON.parse(JSON.stringify(sampleReviews)); },
        
        // Templates access
        getProjectTemplates: function() { return JSON.parse(JSON.stringify(projectTemplates)); },
        getReviewTemplates: function() { return JSON.parse(JSON.stringify(reviewTemplates)); },
        getHabitCategories: function() { return JSON.parse(JSON.stringify(habitCategories)); },
        getTimeBlockCategories: function() { return JSON.parse(JSON.stringify(timeBlockCategories)); },
        getNoteTemplates: function() { return JSON.parse(JSON.stringify(noteTemplates)); },
        getSmartGoalTemplate: function() { return JSON.parse(JSON.stringify(smartGoalTemplate)); },
        getEisenhowerMatrix: function() { return JSON.parse(JSON.stringify(eisenhowerMatrix)); },
        
        // Initialize sample data if localStorage is empty
        initializeSampleData: function() {
            console.log('SelfMasterData: Checking for existing data...');
            
            const dataStores = [
                { key: 'tasks', data: sampleTasks },
                { key: 'habits', data: sampleHabits },
                { key: 'goals', data: sampleGoals },
                { key: 'notes', data: sampleNotes },
                { key: 'projects', data: sampleProjects },
                { key: 'timeBlocks', data: sampleTimeBlocks },
                { key: 'reviews', data: sampleReviews }
            ];
            
            let hasData = false;
            
            // Check if any data exists
            dataStores.forEach(store => {
                if (localStorage.getItem(store.key)) {
                    hasData = true;
                }
            });
            
            // Only initialize if no data exists
            if (!hasData) {
                console.log('SelfMasterData: Initializing with sample data...');
                
                dataStores.forEach(store => {
                    if (!localStorage.getItem(store.key)) {
                        try {
                            localStorage.setItem(store.key, JSON.stringify(store.data));
                            console.log(`SelfMasterData: Initialized ${store.key}`);
                        } catch (e) {
                            console.error(`SelfMasterData: Error initializing ${store.key}:`, e);
                        }
                    }
                });
                
                // Initialize templates
                localStorage.setItem('projectTemplates', JSON.stringify(projectTemplates));
                localStorage.setItem('reviewTemplates', JSON.stringify(reviewTemplates));
                localStorage.setItem('habitCategories', JSON.stringify(habitCategories));
                localStorage.setItem('timeBlockCategories', JSON.stringify(timeBlockCategories));
                localStorage.setItem('noteTemplates', JSON.stringify(noteTemplates));
                
                console.log('SelfMasterData: Sample data initialized successfully!');
            } else {
                console.log('SelfMasterData: Existing data found, skipping initialization.');
            }
        },
        
        // Get specific template
        getTemplate: function(templateId, type) {
            switch(type) {
                case 'project':
                    return projectTemplates[templateId] || null;
                case 'note':
                    return noteTemplates[templateId] || null;
                default:
                    return null;
            }
        },
        
        // Reset all data (for testing/debugging)
        resetAllData: function() {
            if (confirm('Are you sure you want to reset ALL data? This cannot be undone.')) {
                const keys = [
                    'tasks', 'habits', 'goals', 'notes', 'projects', 
                    'timeBlocks', 'reviews', 'focusStats',
                    'projectTemplates', 'reviewTemplates', 'habitCategories',
                    'timeBlockCategories', 'noteTemplates'
                ];
                
                keys.forEach(key => {
                    localStorage.removeItem(key);
                });
                
                this.initializeSampleData();
                alert('All data has been reset. Page will reload.');
                location.reload();
            }
        },
        
        // Export all data
        exportAllData: function() {
            const data = {};
            const keys = [
                'tasks', 'habits', 'goals', 'notes', 'projects', 
                'timeBlocks', 'reviews', 'focusStats'
            ];
            
            keys.forEach(key => {
                const value = localStorage.getItem(key);
                if (value) {
                    data[key] = JSON.parse(value);
                }
            });
            
            data.exportDate = new Date().toISOString();
            data.exportVersion = '1.0';
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `selfmaster-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        },
        
        // Import data
        importData: function(fileContent) {
            try {
                const data = JSON.parse(fileContent);
                
                // Validate basic structure
                if (typeof data !== 'object') {
                    throw new Error('Invalid data format');
                }
                
                // Backup current data first
                const backup = {};
                const keys = [
                    'tasks', 'habits', 'goals', 'notes', 'projects', 
                    'timeBlocks', 'reviews', 'focusStats'
                ];
                
                keys.forEach(key => {
                    const value = localStorage.getItem(key);
                    if (value) {
                        backup[key] = value;
                    }
                });
                
                localStorage.setItem('backup-before-import', JSON.stringify(backup));
                
                // Import new data
                Object.keys(data).forEach(key => {
                    if (keys.includes(key)) {
                        localStorage.setItem(key, JSON.stringify(data[key]));
                    }
                });
                
                return { success: true, message: 'Data imported successfully!' };
            } catch (error) {
                return { success: false, message: 'Error importing data: ' + error.message };
            }
        },
        
        // Version info
        version: '1.0.0',
        lastUpdated: '2023-12-01'
    };

    // Auto-initialize on load
    if (typeof window !== 'undefined') {
        window.addEventListener('load', function() {
            publicAPI.initializeSampleData();
        });
    }

    return publicAPI;
})();

// Also expose a global alias for convenience
window.SMData = window.SelfMasterData;

// Log initialization
console.log('SelfMasterData v' + window.SelfMasterData.version + ' loaded successfully.');