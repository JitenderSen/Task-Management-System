// localStorage.jsx
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "ankusen51@gmail.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 2,
      "acceptedTask": 3,
      "completedTask": 4,
      "pendingTask": 5,
      "failedTask": 1
    },
    "tasks": [
      {
        "title": "Task 1 for Employee 1",
        "description": "Complete the quarterly report.",
        "date": "2025-01-05",
        "category": "Reports",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      },
      {
        "title": "Task 2 for Employee 1",
        "description": "Update the client database.",
        "date": "2025-01-10",
        "category": "Data Management",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      },
      {
        "title": "Task 3 for Employee 1",
        "description": "Prepare a presentation for the meeting.",
        "date": "2025-01-15",
        "category": "Presentations",
        "active": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Ishaan",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completedTask": 0,
      "failedTask": 1
    },
    "tasks": [
      {
        "title": "Task 1 for Employee 2",
        "description": "Organize team meeting.",
        "date": "2025-01-06",
        "category": "Meetings",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      },
      {
        "title": "Task 2 for Employee 2",
        "description": "Prepare project proposal.",
        "date": "2025-01-12",
        "category": "Projects",
        "active": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      },
      {
        "title": "Task 3 for Employee 2",
        "description": "Follow up with the marketing team.",
        "date": "2025-01-14",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      },
      {
        "title": "Task 4 for Employee 2",
        "description": "Review last quarter's performance.",
        "date": "2025-01-18",
        "category": "Analysis",
        "active": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Ravi",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 1,
    },
    "tasks": [
      {
        "title": "Task 1 for Employee 3",
        "description": "Update the employee training manual.",
        "date": "2025-01-07",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      },
      {
        "title": "Task 2 for Employee 3",
        "description": "Draft a memo for the HR department.",
        "date": "2025-01-11",
        "category": "HR",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      },
      {
        "title": "Task 3 for Employee 3",
        "description": "Review vendor contracts.",
        "date": "2025-01-16",
        "category": "Contracts",
        "active": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Saanvi",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 1
    },
    "tasks": [
      {
        "title": "Task 1 for Employee 4",
        "description": "Conduct a safety audit.",
        "date": "2025-01-08",
        "category": "Audits",
        "active": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      },
      {
        "title": "Task 2 for Employee 4",
        "description": "Test the new software deployment.",
        "date": "2025-01-13",
        "category": "IT",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      },
      {
        "title": "Task 3 for Employee 4",
        "description": "Coordinate with external consultants.",
        "date": "2025-01-19",
        "category": "Consulting",
        "active": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Diya",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completedTask": 1,
      "failedTask": 1
    },
    "tasks": [
      {
        "title": "Task 1 for Employee 5",
        "description": "Plan the company event.",
        "date": "2025-01-09",
        "category": "Events",
        "active": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      },
      {
        "title": "Task 2 for Employee 5",
        "description": "Optimize website performance.",
        "date": "2025-01-14",
        "category": "Web Development",
        "active": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      },
      {
        "title": "Task 3 for Employee 5",
        "description": "Design new marketing materials.",
        "date": "2025-01-20",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false,
        "endDate": "2025-02-12",
        "endTime": "18:00"
      }
    ]
  }
];

  const admin = [
    {
      "id": 1,
      "firstName": "Jitender",
      "email": "a@gmail.com",
      "password": "123"
    }
  ];



  export const setLocalStorage = () => {
    const existingEmployees = JSON.parse(localStorage.getItem('employees'));
    const existingAdmin = JSON.parse(localStorage.getItem('admin'));
  
    // Agar employees ya admin pehle se localStorage mein hai toh overwrite mat karo
    if (!existingEmployees) {
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  
    if (!existingAdmin) {
      localStorage.setItem('admin', JSON.stringify(admin));
    }
  };

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
  
    console.log("Employees from LocalStorage:", employees);
    console.log("Admin from LocalStorage:", admin);
  
    return { employees, admin };
  }
