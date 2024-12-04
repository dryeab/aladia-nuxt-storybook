# **Aladia Nuxt.js Assessment**

I called this app **MyStore**, a web application built with Vue 3, Vite, Tailwind CSS, and following the Atomic Design methodology.

## **Table of Contents**

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Running Storybook](#running-storybook)

---

## **Features**

- **Responsive Design**: Fully responsive layout that adapts to various screen sizes, including a mobile-friendly navigation menu.
- **Atomic Design**: Organized components following the Atomic Design methodology for scalability and maintainability.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Storybook Integration**: Interactive UI component development and testing environment.
- **Element Plus Integration**: Enhanced UI components using Element Plus.
- **Dynamic Data Fetching**: Fetches products and categories from a mock API for demonstration purposes.

---

## **Project Structure**

```
root/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
├── pages/
│   └── index.vue
├── assets/
│   └── css/
├── public/
│   └── favicon
├── stories/
│   └── (Storybook stories)
├── .storybook/
│   ├── main.js
│   └── preview.js
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## **Getting Started**

### **Prerequisites**

- ``Node.js`` & `npm`

### **Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dryeab/aladia-nuxt-storybook
   ```

2. **Navigate to the project directory:**

   ```bash
   cd aladia-nuxt-storybook
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

### **Running the Development Server**

Start the development server with hot module replacement:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.


### **Running Storybook**

Launch Storybook to view and interact with UI components:

```bash
npm run storybook
```

Storybook will start on `http://localhost:6006`.

---

## **Additional Notes**

- **API Data**: The application fetches product and category data from [Fake Store API](https://fakestoreapi.com/) for demonstration purposes.

---

Thank you for checking out **MyStore**!