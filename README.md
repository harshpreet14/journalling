# 📌`Journaling App`
I have witnessed the struggles of friends, family, and even myself when it comes to mental health. Many of us have turned to therapy, and one preliminary method that most therapists recommend is  journaling. However, traditional journaling has its limitations, which became apparent to me and those close to me.

The first challenge we encountered with traditional journaling is the difficulty of capturing our thoughts and emotions in real-time. The speed at which our minds generate thoughts surpasses our ability to write them down. It's frustrating when we can't fully express ourselves and capture the essence of our experiences.
Secondly, traditional journaling often requires dedicated time set aside for writing, which means important triggers and emotions experienced throughout the day may be missed or forgotten.

That's why I was inspired to create an application that addresses these challenges head-on. 

The 'Journaling App' is a comprehensive full-stack project that leverages a tech stack comprising React for the frontend, Auth0 for third-party authentication, Express for the backend, and MongoDB Atlas as the cloud database. 
It enables users to record voice notes seamlessly and utilizes OpenAI's advanced Whisper model for speech-to-text transcription.These voice notes would be converted to text, allowing you to read and edit them later at your convenience.

Currently, I am working on AI integration, to perform sentiment analysis on the text using the powerful ChatGPT API. This analysis would help you identify triggers, patterns, and fluctuations in your mood throughout the day.

<img width="959" alt="image" src="https://github.com/harshpreet14/journalling/assets/114172812/9f2108f1-cd84-41e0-8070-1f40461b9911">

## `Features`

1. **Voice Notes Recording**: Users can effortlessly record voice notes throughout the day, capturing their thoughts and emotions in real-time.

2. **OpenAI Whisper Integration**: To enhance the user experience, the 'Journaling App' leverages OpenAI's  Whisper model for speech-to-text transcription. This empowers users to effortlessly convert their voice notes into text, making it easy to review and analyze their daily entries.

## `Tech Stack`

- **Frontend**: The frontend is built using React, a powerful JavaScript library for creating dynamic and interactive user interfaces. The intuitive and responsive design ensures a seamless user experience.

- **Third-Party Authentication**: The application employs Auth0 for robust and secure third-party authentication. This ensures that user data and privacy are protected, and seamless sign-in experiences are delivered.

- **Backend**: The backend is powered by Express, a flexible and minimalist Node.js web application framework. Express facilitates smooth data flow and efficient communication between the frontend and database.

- **Cloud Database**: MongoDB Atlas is used as the cloud database, offering scalability, performance, and reliable data storage for the 'Journaling App'.

## `Environment Variables`
Replace the following environment variables in config.env files
1. `OPEN_AI_KEY`: Use your OpenAI key to access the Whisper API for speech-to-text transcription. 
2. `DATABASE`: Connect to your own MONGODB Atlas cloud database. Follow the steps here - https://hevodata.com/learn/mongodb-atlas-nodejs/
3. `Auth0 Application`: Follow the steps to create an Auth0 application - https://auth0.com/docs/get-started/auth0-overview/create-applications
4. `Auth0 API`: Follow the steps to create Auth0 API to protect your backend, and replace variables like audience, token-issuer and signing algorithm- https://auth0.com/docs/get-started/auth0-overview/set-up-apis
 
## `Local Installation Guide`

### `Prerequisites:`
1. Node.js: Install node version (v18.16.0) on your local environment.
   
2. Git: Download the latest version of Git from their official website.  

### Follow the steps below:
1. `Clone the repository`: Open the terminal or command prompt and navigate to the directory where you want to store the project. Then, run the following command to clone the repository:
```git clone https://github.com/harshpreet/journaling.git```

3. `Navigate to the backend`: After the repository is cloned, navigate to the backend directory using the following command:
```cd backend```

3. `Install dependencies`: Once you’re inside the project directory, run the following command to install the dependencies required for the project:
```npm install```

4. `Run backend `: Start the backend server by running the following command:
```nodemon server.js```

5. `Navigate to the frontend`: After starting the backend server, navigate to the frontend directory using the following commands:  
```cd..```

```cd frontend```

6. ```Install dependencies```: Repeat step 3
    
7. `Run frontend`: Start the frontend server by running the following command and access the application on `http://localhost:5173/`:
    
```npm run dev```
## `Future` 
Integrating ChatGPT to analyze the journal entries, and provide insights to manage triggers and monitor mood fluctuations would be another interesting feature. 
