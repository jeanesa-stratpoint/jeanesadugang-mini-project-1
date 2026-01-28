export interface Project {
    slug: string;
    title: string;
    image: string;
    images?: string[];
    tools: string[];
    date: string;
    role: string;
    description: string;
    contributions: string[];
    repositoryUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
  // tup-parkwise
  {
    slug: "tup-parkwise",
    title: "TUP ParkWise: Parking Monitoring System",
    image: "/projects/tup_parkwise/agent-homepage.png",
    images: [
            "/projects/tup_parkwise/agent-homepage.png", 
            "/projects/tup_parkwise/agent-admission.png", 
            "/projects/tup_parkwise/agent-dashboard.png", 
            "/projects/tup_parkwise/agent-exit-verification.png",
            "/projects/tup_parkwise/agent-history.png",
            "/projects/tup_parkwise/agent-home-dashboard.png",
            "/projects/tup_parkwise/agent-scan-qr.png",
            "/projects/tup_parkwise/agent-set-car.png",
            "/projects/tup_parkwise/user-parking-ticket.png",
            "/projects/tup_parkwise/user-public-viewing.png",
            "/projects/tup_parkwise/agent-logout.png"
          ],
    tools: ["HTML 5", "CSS", "JavaScript", "Node.js", "MySQL"],
    date: "October 2024 - January 2025",
    role: "Backend Developer, UI/UX Designer, Project Leader",
    description: "TUP ParkWise is a parking monitoring system developed for the Technological University of the Philippines (TUP). It provides real-time updates on available parking spaces, helping users save time and avoid unnecessary trips when no slots are open. The system enhances campus security by tracking vehicles entering and exiting, monitoring parking activities, and recording vehicle duration. With QR code verification, only authorized vehicles can access parking areas, ensuring safety and efficiency.  ",
    contributions: [
      "Led the project team and organized development flow. ",
      "Designed and implemented the database schema with proper constraints.",
      "Developed backend logic for vehicle tracking and QR code verification.",
      "Contributed to UI/UX design for a user-friendly interface."
    ],
    repositoryUrl: "https://github.com/Jeanesa/tup_parkwise.git"
  },
  // olfu-chatbot
  {
    slug: "olfu-chatbot",
    title: "OLFU - Valenzuela SHS Chatbot",
    image: "/projects/olfu_chatbot/olfu-1.png",
    images: [
            "/projects/olfu_chatbot/olfu-1.png",
            "/projects/olfu_chatbot/olfu-2.png",
            "/projects/olfu_chatbot/olfu-3.png",
            "/projects/olfu_chatbot/olfu-4.png",
            "/projects/olfu_chatbot/olfu-5.png"
          ],
    tools: ["HTML 5", "CSS", "JavaScript", "Python (Flask)", "Google AI Studio"],
    date: "February 2025 - May 2025",
    role: "Developer (Individual Project)",
    description: "This AI-powered chatbot was designed for the Senior High School (SHS) department of Our Lady of Fatima University – Valenzuela Campus. It provides automated, round-the-clock assistance for inquiries related to enrollment, academic policies, tuition, scholarships, and administrative contacts. The chatbot supports bilingual responses (English and Filipino) and features categorized FAQs, strand information (STEM, ABM, HUMSS, GAS), and structured enrollment guidance.",
    contributions: [
      "Designed and developed the chatbot’s backend using Python and Flask.",
      "Integrated conversational AI using Google AI Studio and Gemini API.",
      "Built a responsive frontend with HTML, CSS, and JavaScript.",
      "Implemented bilingual response handling and inquiry filtering."
    ],
    repositoryUrl: "https://github.com/Jeanesa/olfu-shs-chatbot.git"
  },
  // personalized-chatbot
  {
    slug: "personalized-chatbot",
    title: "Localized Personalty-Driven Chatbot (Jea's AI Clone)",
    image: "/projects/personal_chatbot/pc.png",
    images: [
            "/projects/personal_chatbot/pc-4.png",
            "/projects/personal_chatbot/pc-1.png",
            "/projects/personal_chatbot/pc-2.png",
            "/projects/personal_chatbot/pc-3.png",
          ],
    tools: ["HTML 5", "CSS", "JavaScript", "Python (Flask)", "Ollama Framework"],
    date: "February 2025 - May 2025",
    role: "Developer (Individual Project)",
    description: "Jea’s AI Clone is a personalized chatbot that emulates the personality, tone, and communication style of Jeanesa T. Dugang. Built using the Gemma3:4b language model and deployed locally via Ollama, the chatbot demonstrates persona-based customization without requiring internet access. It features a modular architecture with a web-based frontend, Flask backend, and a custom Modelfile containing prompts and conversation samples.",
    contributions: [
      "Designed system prompts and conversation samples for persona emulation.",
      "Developed backend integration with Flask and Ollama framework.",
      "Built a responsive frontend for interactive user experience.",
      "Ensured offline deployment for privacy and low-latency performance."
    ],
    repositoryUrl: "https://github.com/Jeanesa/personalized_local_chatbot.git"
  },
  // currenscan
  {
    slug: "currency-recognition-and-conversion",
    title: "CurrenScan: Currency Recognition and Conversion System",
    image: "/projects/currenscan/cs-1.png",
    images: [
            "/projects/currenscan/cs-4.png",
            "/projects/currenscan/cs-1.png",
            "/projects/currenscan/cs-2.png",
            "/projects/currenscan/cs-3.png",
          ],
    tools: ["Google Colab", "Python", "YOLOv8"],
    date: "October 2024 - January 2025",
    role: "Developer, Project Leader",
    description: "CurrenScan is a currency recognition and conversion system powered by the YOLOv8 object detection framework. It identifies denominations of Philippine pesos (PHP) and United States dollars (USD) with high accuracy, achieving a mean Average Precision (mAP) of 99.5% during training. The system supports real-time detection and integrates a dynamic currency conversion feature, making it useful for financial transactions, travel, and education.",
    contributions: [
      "Led the research and development of the system. ",
      "Preprocessed datasets and trained the YOLOv8 model for currency detection. ",
      "Implemented real-time recognition and conversion logic.",
      "Conducted validation testing and optimized model accuracy."
    ],
    repositoryUrl: "https://github.com/Jeanesa/currency_recognition_usd_php.git"
  },
  // book borrowing
  {
    slug: "book-borrowing",
    title: "Book Borrowing System – Access Control",
    image: "/projects/book_borrowing/bb-1.png",
    images: [
            "/projects/book_borrowing/bb-1.png",
            "/projects/book_borrowing/bb-2.png",
            "/projects/book_borrowing/bb-3.png",
            "/projects/book_borrowing/bb-4.png",
            "/projects/book_borrowing/bb-5.png"
          ],
    tools: ["React.js", "CSS"],
    date: "March 2025",
    role: "Developer (Individual Project)",
    description: "This project simulates access control in a book borrowing system for students, faculty, and librarians. Built as a frontend-only application, it demonstrates role-based permissions: students and faculty can borrow books, while librarians can add, delete, and manage announcements.",
    contributions: [
      "Designed and implemented role-based access control features.",
      "Built a React.js interface to simulate borrowing and management workflows.",
      "Created a responsive UI to demonstrate system functionality.",
    ],
    repositoryUrl: "https://github.com/Jeanesa/book_borrowing_system.git"
  },
]