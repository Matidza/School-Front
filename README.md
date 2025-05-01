
---

# 🎓 Admission-Schools Frontend (React)

This is the React frontend for the **Admission-Schools** platform — a web application that allows parents to apply for school admissions from home, view real-time application statuses, and browse schools across South Africa. It communicates with a Django REST API that manages and stores school data.

---

## 🧩 Features

- 🔍 **Browse South African Schools**  
  Search and filter schools by name, location, and type.

- 📝 **Apply for Admission**  
  Parents can submit admission applications online for their children.

- 🗂️ **Upload Documents**  
  Upload required documents like transcripts, medical records, and photos.

- 🚦 **Track Application Status**  
  Real-time updates on the status of submitted applications.

- 🏫 **School Portal**  
  Registered schools can review and manage applications.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Axios, Bootstrap (or TailwindCSS if applicable)
- **Backend**: Django REST Framework (API)
- **API Communication**: Axios for HTTP requests

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/admission-schools-frontend.git
   cd admission-schools-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure API base URL:  
   Create a `.env` file in the root and add:

   ```env
   REACT_APP_API_BASE_URL=http://localhost:8000/api
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 📁 Project Structure

```
src/
│
├── components/         # Reusable UI components
├── pages/              # Route-level components
├── services/           # Axios API functions
├── assets/             # Images, styles, etc.
├── App.js              # Main app layout
└── index.js            # App entry point
```

---

## 🌍 API Reference

All school data and admission forms are powered by a Django REST API.  
Refer to the [API GitHub Repo](https://github.com/Matidza/CORE) for more details.

---

## 📦 Build for Production

```bash
npm run build
```

Builds the app for production to the `build/` directory.

---

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

---
