export const generateChecklist = (role) => {
  const lowerRole = role.toLowerCase();

  if (
    lowerRole.includes("frontend") ||
    lowerRole.includes("front-end")
  ) {
    return [
      "HTML",
      "CSS",
      "Flexbox & Grid",
      "JavaScript ES6+",
      "DOM Manipulation",
      "React Basics",
      "API Fetching",
      "Responsive Design",
    ];
  }

  if (lowerRole.includes("react")) {
    return [
      "React Hooks",
      "Context API",
      "React Router",
      "API Fetching",
      "State Management",
      "JSX",
      "Component Lifecycle",
    ];
  }

  if (lowerRole.includes("backend")) {
    return [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "MongoDB",
      "SQL Basics",
      "Error Handling",
    ];
  }

  if (lowerRole.includes("full stack")) {
    return [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "Deployment",
    ];
  }

  if (lowerRole.includes("python")) {
    return [
      "Python OOP",
      "FastAPI",
      "Django Basics",
      "SQL",
      "Data Structures",
      "Problem Solving",
    ];
  }

  if (lowerRole.includes("java")) {
    return [
      "Core Java",
      "OOP",
      "Collections",
      "Exception Handling",
      "JDBC",
      "Spring Boot Basics",
    ];
  }

  if (lowerRole.includes("data")) {
    return [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Data Visualization",
      "Statistics",
    ];
  }

  if (lowerRole.includes("machine learning")) {
    return [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-Learn",
      "ML Algorithms",
      "Model Evaluation",
    ];
  }

  return [
    "Read Job Description Carefully",
    "Research Company",
    "Revise Resume",
    "Prepare Projects",
    "Practice Interview Questions",
  ];
};