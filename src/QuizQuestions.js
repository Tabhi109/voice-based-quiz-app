const quizData = [
  {
    question: "What is the full form of CPU?",
    options: [
      "Central Processing Unit",
      "Central Power Unit",
      "Central Program Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "What is the purpose of an operating system?",
    options: [
      "To manage computer hardware and software resources",
      "To control the flow of data in a network",
      "To provide internet connectivity",
    ],
    answer: "To manage computer hardware and software resources",
  },
  {
    question: "What is the binary representation of the decimal number 10?",
    options: ["1010", "1100", "1001"],
    answer: "1010",
  },
  {
    question: "What is the time complexity of a linear search algorithm?",
    options: ["O(n)", "O(log n)", "O(1)"],
    answer: "O(n)",
  },
  {
    question: "What is the purpose of a constructor in object-oriented programming?",
    options: [
      "To initialize an object's state and perform setup operations",
      "To define the blueprint for an object",
      "To access and modify object properties",
    ],
    answer: "To initialize an object's state and perform setup operations",
  },
  {
    question: "What is the difference between HTTP and HTTPS?",
    options: [
      "HTTP is unsecured, and HTTPS is secured using SSL/TLS encryption",
      "HTTP is faster than HTTPS",
      "HTTP is used for static websites, and HTTPS is used for dynamic websites",
    ],
    answer: "HTTP is unsecured, and HTTPS is secured using SSL/TLS encryption",
  },
  {
    question: "What is the purpose of an index in a database?",
    options: [
      "To improve the performance of data retrieval operations",
      "To store backup copies of the database",
      "To secure the database from unauthorized access",
    ],
    answer: "To improve the performance of data retrieval operations",
  },
  {
    question: "What is the difference between TCP and UDP?",
    options: [
      "TCP provides reliable, ordered, and error-checked delivery of data",
      "UDP is faster than TCP",
      "TCP is connectionless, and UDP is connection-oriented",
    ],
    answer: "TCP provides reliable, ordered, and error-checked delivery of data",
  },
  {
    question: "What is the role of a compiler in programming?",
    options: [
      "To translate source code into machine code",
      "To execute the program and produce the output",
      "To debug and fix errors in the code",
    ],
    answer: "To translate source code into machine code",
  },
  {
    question: "What is the purpose of a foreign key in a database?",
    options: [
      "To establish a relationship between two tables",
      "To store large binary data, such as images or documents",
      "To perform complex mathematical calculations",
    ],
    answer: "To establish a relationship between two tables",
  },
  {
    question: "What is the difference between a stack and a queue?",
    options: [
      "A stack follows the Last-In-First-Out (LIFO) principle, and a queue follows the First-In-First-Out (FIFO) principle",
      "A stack is used for searching and sorting operations, and a queue is used for data storage",
      "A stack is a linear data structure, and a queue is a hierarchical data structure",
    ],
    answer:
      "A stack follows the Last-In-First-Out (LIFO) principle, and a queue follows the First-In-First-Out (FIFO) principle",
  },
  {
    question: "What is the purpose of recursion in programming?",
    options: [
      "To solve complex problems by breaking them down into smaller, simpler subproblems",
      "To handle errors and exceptions in the code",
      "To improve the performance of the program",
    ],
    answer: "To solve complex problems by breaking them down into smaller, simpler subproblems",
  },
  {
    question: "What is the difference between synchronous and asynchronous programming?",
    options: [
      "Synchronous programming executes tasks in sequential order, while asynchronous programming allows tasks to be executed concurrently",
      "Synchronous programming is faster than asynchronous programming",
      "Synchronous programming requires more memory than asynchronous programming",
    ],
    answer:
      "Synchronous programming executes tasks in sequential order, while asynchronous programming allows tasks to be executed concurrently",
  },
  {
    question: "What is the role of a primary key in a database?",
    options: [
      "To uniquely identify each record in a table",
      "To define the structure and layout of the database",
      "To perform complex data manipulations and calculations",
    ],
    answer: "To uniquely identify each record in a table",
  },
  {
    question: "What is the purpose of a linked list in data structures?",
    options: [
      "To store and retrieve data efficiently",
      "To perform sorting and searching operations",
      "To represent hierarchical relationships between data elements",
    ],
    answer: "To store and retrieve data efficiently",
  },
  {
    question: "What is the time complexity of a binary search algorithm?",
    options: ["O(log n)", "O(n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question: "What is the purpose of an API (Application Programming Interface)?",
    options: [
      "To enable communication and interaction between software applications",
      "To display web pages on the internet",
      "To store and manage data in a database",
    ],
    answer: "To enable communication and interaction between software applications",
  },
  {
    question: "What is the difference between a static method and an instance method in object-oriented programming?",
    options: [
      "A static method can be called without creating an instance of a class, whereas an instance method requires an instance of a class",
      "A static method can only be used within the same class, whereas an instance method can be accessed from any class",
      "A static method is used for mathematical calculations, whereas an instance method is used for data manipulation",
    ],
    answer: "A static method can be called without creating an instance of a class, whereas an instance method requires an instance of a class",
  },
  {
    question: "What is the purpose of SQL (Structured Query Language)?",
    options: [
      "To communicate with and manipulate databases",
      "To design user interfaces for web applications",
      "To write algorithms and solve complex mathematical problems",
    ],
    answer: "To communicate with and manipulate databases",
  },
  {
    question: "What is the difference between a local variable and a global variable in programming?",
    options: [
      "A local variable is declared within a specific block of code, whereas a global variable is accessible throughout the entire program",
      "A local variable can only be used within a function, whereas a global variable can be accessed from any part of the program",
      "A local variable has a smaller memory footprint than a global variable",
    ],
    answer: "A local variable is declared within a specific block of code, whereas a global variable is accessible throughout the entire program",
  },
  {
    question: "What is the purpose of version control software, such as Git?",
    options: [
      "To track changes and manage different versions of source code",
      "To compile and execute programs",
      "To generate documentation for software projects",
    ],
    answer: "To track changes and manage different versions of source code",
  },
  {
    question: "What is the difference between a linked list and an array?",
    options: [
      "A linked list has dynamic size and allows efficient insertion and deletion of elements, whereas an array has a fixed size and requires shifting of elements for insertion and deletion",
      "A linked list is a linear data structure, whereas an array is a hierarchical data structure",
      "A linked list can only store integer values, whereas an array can store any data type",
    ],
    answer: "A linked list has dynamic size and allows efficient insertion and deletion of elements, whereas an array has a fixed size and requires shifting of elements for insertion and deletion",
  },
  {
    question: "What is the purpose of a hashing function?",
    options: [
      "To convert an input into a fixed-size string of characters",
      "To encrypt and secure data",
      "To perform complex mathematical calculations",
    ],
    answer: "To convert an input into a fixed-size string of characters",
  },
  {
    question: "What is the difference between HTTP and HTTPS?",
    options: [
      "HTTP is unsecured, and HTTPS is secured using SSL/TLS encryption",
      "HTTP is faster than HTTPS",
      "HTTP is used for static websites, and HTTPS is used for dynamic websites",
    ],
    answer: "HTTP is unsecured, and HTTPS is secured using SSL/TLS encryption",
  },
  {
    question: "What is the purpose of an index in a database?",
    options: [
      "To improve the performance of data retrieval operations",
      "To store backup copies of the database",
      "To secure the database from unauthorized access",
    ],
    answer: "To improve the performance of data retrieval operations",
  },
  {
    question: "What is the difference between TCP and UDP?",
    options: [
      "TCP provides reliable, ordered, and error-checked delivery of data",
      "UDP is faster than TCP",
      "TCP is connectionless, and UDP is connection-oriented",
    ],
    answer: "TCP provides reliable, ordered, and error-checked delivery of data",
  },
  {
    question: "What is the role of a compiler in programming?",
    options: [
      "To translate source code into machine code",
      "To execute the program and produce the output",
      "To debug and fix errors in the code",
    ],
    answer: "To translate source code into machine code",
  },
  {
    question: "What is the purpose of a foreign key in a database?",
    options: [
      "To establish a relationship between two tables",
      "To store large binary data, such as images or documents",
      "To perform complex mathematical calculations",
    ],
    answer: "To establish a relationship between two tables",
  },
  {
    question: "What is the purpose of an interface in object-oriented programming?",
    options: [
      "To define a contract for classes to follow",
      "To store and retrieve data from a database",
      "To handle errors and exceptions in the code",
    ],
    answer: "To define a contract for classes to follow",
  },
  {
    question: "What is the difference between a breadth-first search (BFS) and a depth-first search (DFS)?",
    options: [
      "BFS explores all neighboring nodes before going deeper, while DFS explores as far as possible before backtracking",
      "BFS always finds the optimal solution, while DFS may find a suboptimal solution",
      "BFS is more memory-efficient than DFS",
    ],
    answer: "BFS explores all neighboring nodes before going deeper, while DFS explores as far as possible before backtracking",
  },
  {
    question: "What is the purpose of virtual memory in operating systems?",
    options: [
      "To extend the available memory by using disk space as a temporary storage",
      "To prevent unauthorized access to memory locations",
      "To facilitate communication between processes",
    ],
    answer: "To extend the available memory by using disk space as a temporary storage",
  },
  {
    question: "What is the difference between synchronous and asynchronous programming?",
    options: [
      "Synchronous programming executes tasks in sequential order, while asynchronous programming allows tasks to be executed concurrently",
      "Synchronous programming is faster than asynchronous programming",
      "Synchronous programming requires more memory than asynchronous programming",
    ],
    answer: "Synchronous programming executes tasks in sequential order, while asynchronous programming allows tasks to be executed concurrently",
  },
  {
    question: "What is the purpose of a linked list in data structures?",
    options: [
      "To store and retrieve data efficiently",
      "To perform sorting and searching operations",
      "To represent hierarchical relationships between data elements",
    ],
    answer: "To store and retrieve data efficiently",
  },
  {
    question: "What is the difference between a compiler and an interpreter?",
    options: [
      "A compiler translates the entire program into machine code before execution, while an interpreter translates and executes the program line by line",
      "A compiler is used for high-level programming languages, while an interpreter is used for low-level programming languages",
      "A compiler generates faster and more efficient code than an interpreter",
    ],
    answer: "A compiler translates the entire program into machine code before execution, while an interpreter translates and executes the program line by line",
  },
  {
    question: "What is the purpose of data normalization in database design?",
    options: [
      "To eliminate redundancy and ensure data consistency",
      "To encrypt and secure sensitive data",
      "To perform complex data analysis",
    ],
    answer: "To eliminate redundancy and ensure data consistency",
  },
  {
    question: "What is the difference between a stack and a queue?",
    options: [
      "A stack follows the Last-In-First-Out (LIFO) principle, and a queue follows the First-In-First-Out (FIFO) principle",
      "A stack is used for searching and sorting operations, and a queue is used for data storage",
      "A stack is a linear data structure, and a queue is a hierarchical data structure",
    ],
    answer: "A stack follows the Last-In-First-Out (LIFO) principle, and a queue follows the First-In-First-Out (FIFO) principle",
  },
  {
    question: "What is the purpose of recursion in programming?",
    options: [
      "To solve complex problems by breaking them down into smaller, simpler subproblems",
      "To handle errors and exceptions in the code",
      "To improve the performance of the program",
    ],
    answer: "To solve complex problems by breaking them down into smaller, simpler subproblems",
  },
];

export default quizData;
