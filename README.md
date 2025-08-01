# Quiz App 🧠

A modern, interactive quiz application built with vanilla JavaScript, HTML, and CSS. Test your knowledge with computer science and programming questions in a beautifully designed interface.

## 🌟 Features

### 🎯 Core Functionality
- **Interactive Quiz Interface**: Clean, modern design with smooth transitions
- **Multiple Choice Questions**: Computer Science and programming focused questions
- **Real-time Scoring**: Live score tracking throughout the quiz
- **Progress Tracking**: Visual progress bar showing quiz completion
- **Timer System**: 30-second countdown for each question (with circular progress indicator)
- **Results Screen**: Detailed results with performance feedback
- **Restart Capability**: Easy quiz restart functionality

### 🎨 User Experience
- **Responsive Design**: Works perfectly on all device sizes
- **Smooth Animations**: Elegant transitions between screens
- **Visual Feedback**: Clear indication of correct/incorrect answers
- **Progress Visualization**: Multiple progress indicators for better UX

## 🚀 Demo

![Quiz App Demo](screenshot.png)

*Experience an engaging quiz with real-time feedback and beautiful animations.*

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with modern design principles
- **Animation**: CSS transitions and transforms
- **Architecture**: Vanilla JavaScript with modular approach

## 📁 Project Structure

```
Quiz-App/
├── index.html          # Main HTML structure
├── style.css          # Styling and animations
├── script.js          # Quiz logic and interactions
└── README.md          # Project documentation
```

## 🎮 How to Play

1. **Start**: Click "Start Quiz" to begin
2. **Answer**: Select your answer from the multiple choices
3. **Progress**: Watch your score and progress update in real-time
4. **Timer**: Answer within 30 seconds per question
5. **Results**: View your final score and performance message
6. **Restart**: Click "Restart Quiz" to play again

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/princerxj/Quiz-App.git
   ```

2. **Navigate to project directory**
   ```bash
   cd Quiz-App
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server for development
   
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Start playing!**
   Navigate to `http://localhost:8000` (if using a server) or open `index.html` directly.

## 🎯 Quiz Content

### Question Categories
- **Data Structures**: Arrays, Trees, Graphs, Stacks, Queues
- **Algorithms**: Time Complexity, Sorting, Searching
- **Programming Concepts**: General computer science knowledge

### Question Format
- Multiple choice (4 options per question)
- Single correct answer per question
- Mix of difficulty levels

### Sample Questions
- "What is the time complexity of binary search?"
- "Which data structure uses FIFO (First In, First Out)?"
- "What is the worst-case time complexity of quicksort?"

## 🎨 Design Features

### Visual Elements
- **Clean Interface**: Minimalist design with focus on content
- **Color Scheme**: Warm, accessible color palette
- **Typography**: Clean, readable fonts
- **Responsive Layout**: Mobile-first approach

### Interactive Elements
- **Hover Effects**: Smooth button and answer hover states
- **Progress Indicators**: Multiple visual progress tracking methods
- **Animations**: Smooth screen transitions
- **Feedback**: Visual confirmation of user actions

## ⚙️ Customization

### Adding New Questions
Edit the `quizQuestions` array in `script.js`:

```javascript
const quizQuestions = [
  {
    question: "Your question here?",
    answers: [
      { text: "Option 1", correct: false },
      { text: "Option 2", correct: true },
      { text: "Option 3", correct: false },
      { text: "Option 4", correct: false },
    ],
  },
  // Add more questions...
];
```

### Modifying Timer
Change the timer duration in `script.js`:

```javascript
let timeLeft = 30; // Change to desired seconds
```

### Styling Customization
Modify colors, fonts, and layout in `style.css`:

```css
body {
    background: #your-color; /* Change background */
}
```

## 🌟 Features Breakdown

| Feature | Description | Status |
|---------|-------------|---------|
| Multiple Choice | 4 options per question | ✅ |
| Score Tracking | Real-time score updates | ✅ |
| Progress Bar | Visual quiz progress | ✅ |
| Timer | 30-second countdown | ✅ |
| Responsive Design | Mobile-friendly | ✅ |
| Results Screen | Final score display | ✅ |
| Restart Function | Play again option | ✅ |

## 🚀 Future Enhancements

- [ ] Question categories/difficulty levels
- [ ] User accounts and score history
- [ ] Leaderboard system
- [ ] Sound effects and music
- [ ] Multiple quiz topics
- [ ] Question randomization
- [ ] Detailed explanations for answers
- [ ] Social sharing features

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by modern quiz applications
- Built with vanilla JavaScript for educational purposes
- Designed with accessibility and user experience in mind

---

**Built with ❤️ using Vanilla JavaScript**

*Test your knowledge and have fun learning!* 🎓
