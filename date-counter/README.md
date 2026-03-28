# Date Counter 📅

A simple React practice project that calculates and displays dates based on a counter offset.

## Features

- **Dynamic Step Control**: Adjust the step size (increment/decrement)
- **Count Adjustment**: Add or subtract counts using the step value
- **Date Calculation**: Automatically calculates dates relative to a base date (June 21, 2027)
- **Smart Date Display**: Shows different messages based on count:
  - "Today is" when count is 0
  - "X days from today is" when count is positive
  - "X days ago was" when count is negative

## Project Structure

```
src/
├── App.jsx          # Main app component
├── App.css          # App styles
├── App.css          # Global styles
├── main.jsx         # React entry point
└── component/
    └── Counter.jsx  # Counter component with date logic
```

## Tech Stack

- **React 19.2.4** - UI library
- **Vite 8.0.1** - Build tool
- **ESLint** - Code quality

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the app in development mode with hot reload.

### Build

```bash
npm run build
```

Creates an optimized production build.

## How to Use

1. Use the step buttons (`-` / `+`) to adjust the step size
2. Use the count buttons (`-` / `+`) to change the count by the step value
3. The date display automatically updates to show dates relative to the base date

## Learning Concepts

- React Hooks (`useState`)
- Component composition
- Date manipulation with JavaScript `Date` object
- Conditional rendering
- Event handling

## Author

Built as a React practice project 🚀
