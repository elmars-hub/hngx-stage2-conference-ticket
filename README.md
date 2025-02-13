# Conference Ticket Generator

A modern React application for generating and managing conference tickets. This project demonstrates the implementation of a multi-step form with data persistence using localStorage.

## 🚀 Features

- Multi-step form with progress tracking
- Image upload functionality
- Form data persistence
- Responsive design
- Modern UI with Tailwind CSS

## 💻 Technologies Used

### Core Technologies

- React
- Vite
- Tailwind CSS

### Key React Concepts Used

1. **Hooks**

   - `useState` for managing form data and current page
   - `useEffect` for handling side effects (localStorage updates)
   - `useRef` for file input reference

2. **Components**

   - Functional components with props
   - Component composition
   - Conditional rendering

3. **React Router**
   - Route configuration
   - Navigation between pages
   - Layout components

### Local Storage Implementation

We created a simple storage utility (`src/utils/storage.js`) to handle localStorage operations:

```javascript
const storage = {
  save: function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  get: function (key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },

  remove: function (key) {
    localStorage.removeItem(key);
  },
};
```

This utility is used to:

- Save form progress
- Persist user data between sessions
- Clear data when resetting the form

### Form Data Structure

```javascript
{
  ticketType: '',        // Type of ticket selected
  numberOfTickets: 1,    // Number of tickets
  imageUrl: '',          // Uploaded image URL
  name: '',             // Attendee name
  email: '',            // Attendee email
  specialRequest: ''    // Special requests
}
```

## 🎨 Styling

- Tailwind CSS for utility-first styling
- Custom gradients and backgrounds
- Responsive design with mobile-first approach
- Custom fonts integration

## 📚 Key Learning Points

1. **State Management**

   - How to manage complex form state
   - Using localStorage for data persistence
   - State lifting and prop drilling

2. **Form Handling**

   - Multi-step form implementation
   - Form validation
   - File upload handling

3. **localStorage Best Practices**

   - Creating a reusable storage utility
   - JSON serialization/deserialization
   - Error handling for localStorage operations

4. **Component Organization**

   - Separation of concerns
   - Component reusability
   - Props and state management

5. **UI/UX Considerations**
   - Progress indication
   - Form validation feedback
   - Responsive design implementation

## 🚦 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 📝 Project Structure

```
src/
├── components/          # Reusable components
│   ├── About.jsx
│   ├── PersonalInfo.jsx
│   ├── Ready.jsx
│   ├── TicketSelection.jsx
│   └── Tickets.jsx
├── ui/                 # UI components
│   ├── AppLayout.jsx
│   ├── Header.jsx
│   └── Home.jsx
├── utils/             # Utility functions
│   └── storage.js     # localStorage helper
├── App.jsx           # Main app component
└── main.jsx         # Entry point
```

## 🔍 Future Improvements

- Add ticket download functionality
- Implement backend integration
- Add user authentication
- Enhance form validation
- Add ticket management features
- Implement ticket sharing functionality

## 📖 What We Learned

1. **localStorage Abstraction**

   - How to create a simple yet powerful storage utility
   - The importance of abstracting complex operations

2. **React Best Practices**

   - Component organization
   - State management patterns
   - Effect handling

3. **Form Management**

   - Multi-step form implementation
   - Form state persistence
   - User input handling

4. **UI/UX Design**

   - Progress indication
   - Responsive design
   - User feedback

5. **Project Structure**
   - Organizing components
   - Separating concerns
   - Code maintainability
