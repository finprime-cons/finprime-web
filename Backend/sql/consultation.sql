CREATE TABLE consultation_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    country VARCHAR(255),
    phone VARCHAR(50),
    looking_for TEXT,
    business_location VARCHAR(255),
    business_activity TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
