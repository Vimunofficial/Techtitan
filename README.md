Smart Glove Gesture Recognition System

📌 Overview

The Smart Glove Gesture Recognition System is designed to help individuals communicate using hand gestures. The system consists of an Arduino Nano that processes data from flex sensors, detects gestures, and transmits them to a web portal for visualization. The web portal displays the recognized gestures and plays corresponding audio feedback.

🛠️ Technology Stack

Hardware Components

Arduino Nano – Processes sensor data and detects gestures

Flex Sensors – Measures finger bending to recognize gestures

Power Supply – Powers the system

Software & Web Portal

Arduino C – Code for gesture detection

Node.js & Express – Backend server for handling serial data

Socket.io – Real-time communication between Arduino and the web portal

HTML, CSS, JavaScript – Frontend interface for displaying gesture data

🚀 Features

✅ Gesture Recognition – Detects hand gestures using flex sensors✅ Real-Time Data Transmission – Sends gesture data to a web portal via serial communication✅ Audio Feedback – Plays pre-recorded messages for each gesture✅ User-Friendly Web Interface – Displays gesture data and raw sensor values

📌 Installation & Setup

1️⃣ Hardware Setup

Connect Flex Sensors to the Arduino Nano's analog pins

Power the Arduino with USB or an external battery

Upload the Arduino code to the Nano

2️⃣ Web Server Setup

Install Node.js and npm


Install dependencies:

npm install

Start the server:

node server.js

Open the browser and go to:

http://localhost:3000

📌 Future Enhancements

🚀 Bluetooth/WiFi Integration – To make it wireless🚀 ML-Based Gesture Prediction – More accurate recognition🚀 Expanded Gesture Library – Support for more hand gestures

🤝 Contributing

Pull requests are welcome! Feel free to fork the repository and enhance the project.

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
