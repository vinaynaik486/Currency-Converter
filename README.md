# 💱 Currency Converter App

A modern and responsive currency converter built with React that allows users to convert between multiple currencies in real time using live exchange rates.

---

## 🚀 Features

* Convert between multiple currencies
* Real-time exchange rates using API
* Swap currencies instantly
* Clean and responsive UI
* Optimized state management using React hooks

---

## 🛠️ Tech Stack

* React
* JavaScript
* Tailwind CSS
* Custom Hooks (`useCurrencyInfo`)
* REST API (Exchange rates)

---

## ⚙️ How It Works

* Uses a custom hook `useCurrencyInfo` to fetch live currency data
* Fetches exchange rates dynamically based on selected base currency
* Performs conversion using latest rates
* Allows quick currency swapping with a single click

---

## 📂 Project Structure

```id="c1nqk2"
src/
 ├── components/
 │   └── InputBox.jsx
 ├── hooks/
 │   └── useCurrencyInfo.js
 ├── App.jsx
 └── main.jsx
```

---

## ⚡ Getting Started

### 1. Clone the repository

```id="r6x9w2"
git clone https://github.com/vinaynaik486/currency-converter.git
```

### 2. Install dependencies

```id="h7k3qp"
npm install
```

### 3. Run the development server

```id="m2d8zf"
npm run dev
```

---

## 🌐 API Used

* Currency API by Fawaz Ahmed
* Provides real-time exchange rate data

---

## 💡 Future Improvements

* Add loading and error states
* Cache API responses for better performance
* Add currency search functionality
* Add historical exchange rate charts
* Improve accessibility

---

## 📄 License

This project is open source and available under the MIT License.
