# 📈 TradeStockly

![MERN Stack](https://img.shields.io/badge/MERN-Stack-000000?style=for-the-badge&logo=mongodb&logoColor=green)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

> **A High-Performance Full-Stack Trading Platform & Dashboard**

TradeStockly is a comprehensive **MERN stack** application engineered to simulate a professional stock trading environment (similar to Zerodha's Kite & Console). It features a robust backend handling orders and holdings, coupled with a highly responsive frontend offering real-time analytics, interactive charts, and seamless portfolio management.

---

## 📸 Screenshots

| Dashboard View | Holdings & Portfolio |
| :---: | :---: |
| *[Add your dashboard screenshot here]* | *[Add your holdings screenshot here]* |

| Trading Interface | Interactive Charts |
| :---: | :---: |
| *[Add your trading UI screenshot here]* | *[Add your chart screenshot here]* |

---

## 🚀 Key Features

### 🖥️ Client-Side (Frontend)
* **Real-Time Dashboard:** Live updates of stock prices, market trends, and portfolio summary.
* **Interactive Charts:** Advanced technical analysis charts integrated via **Chart.js** (Candlestick, Line, etc.).
* **Order Management:** seamless Buy/Sell interface for Equity, F&O, and Commodities.
* **Dynamic Watchlist:** Create, edit, and delete custom watchlists with real-time price tracking.
* **Portfolio Analytics:** Visual breakdown of current holdings, invested value, and P&L statements.
* **Responsive Design:** Mobile-first architecture using **Tailwind CSS**.

### ⚙️ Server-Side (Backend)
* **Secure Authentication:** Robust JWT-based auth flow with HttpOnly cookies.
* **Order Execution Engine:** Logic to handle market orders, limit orders, and transaction validation.
* **Database Modeling:** Normalized **MongoDB** schemas for Users, Orders, Holdings, and Positions.
* **API Architecture:** RESTful endpoints structured for scalability and performance.
* **Data Simulation:** Mock logic to simulate live market movements (Tickers).

---

## 🏗️ Tech Stack

### Frontend
-   **Core:** React.js (Hooks, Context API)
-   **Styling:** Tailwind CSS, Material UI Icons
-   **State Management:** React Context / Redux (if applicable)
-   **Visualizations:** Chart.js / Recharts
-   **Routing:** React Router v6

### Backend
-   **Runtime:** Node.js
-   **Framework:** Express.js
-   **Database:** MongoDB & Mongoose ODM
-   **Auth:** JSON Web Tokens (JWT), Bcrypt.js
-   **Testing:** Jest & Supertest

---

## 🛠️ Installation & Setup

Follow these steps to set up the project locally.

### Prerequisites
* Node.js (v14 or higher)
* MongoDB (Local or Atlas URL)
* Git

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/tradestockly.git](https://github.com/your-username/tradestockly.git)
cd tradestockly
