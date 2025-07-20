API INTEGRATION WEBSITE - CRYPTOFLOW

COMPANY: CODTECH IT SOLUTIONS

NAME: Aditya Samson

INTERN ID: CT08DL961

DOMAIN: FULL STACK WEB DEVELOPMENT

BATCH DURATION: May 20th, 2025 to July 20th, 2025

MENTOR NAME : NEELA SANTHOSH KUMAR


DESCRIPTION OF TASK PERFORMED :

The objective of Task 1 was to build a fully functional and responsive live cryptocurrency 
tracking web application using public APIs. 

This project, titled CryptoFlow, integrates with the CoinGecko API to fetch real-time market data 
of the most popular cryptocurrencies. 

The application provides live pricing, market capitalization, 24-hour percentage change, 
and search/filter capabilities,
all displayed in a structured and user-friendly table interface.

Initially, the app displays top 10 cryptocurrencies. 
Users can click on a “Show More” button to view up to 50 coins at once. 
This improves performance and usability by not overloading the UI with too much data initially.

This task focuses heavily on API integration, asynchronous JavaScript, DOM manipulation, 
and dynamic UI rendering.

It is implemented purely using vanilla HTML, CSS, and JavaScript.

<img width="1920" height="1080" alt="Screenshot (243)" src="https://github.com/user-attachments/assets/6919669f-273a-48d9-b034-4f48beed8478" />


Key Features
1. Live Crypto Data via API

The application uses the CoinGecko public API endpoint:

https://api.coingecko.com/api/v3/coins/markets

This endpoint provides essential data such as:

1- Coin name and symbol

2- Current price

3- Market capitalization

4- 24-hour price change percentage

5- Coin image/logo

Data is fetched based on a selected fiat currency (USD, EUR, INR), using the query parameter vs_currency.

2. Currency Selector
Users can choose between three fiat currencies:

USD ($)

EUR (€)

INR (₹)

On changing the currency, the data is re-fetched and displayed in the selected format, making it suitable for global users.

3. Search Functionality
A real-time search feature allows users to search for any cryptocurrency by name.

The app filters and displays matching results immediately.
It also handles cases with no results by showing a user-friendly message.

4. Responsive Table with Pagination
The main data is displayed in a structured table that shows:

1- Serial number (based on overall market cap ranking)

2- Current price in the selected currency

3- Market capitalization

4- 24-hour price change (color-coded: green for gain, red for loss)

5. Dynamic UI Updates
All DOM updates (table rendering, show/hide functionality, error messages) are handled dynamically using JavaScript. This creates a smooth and interactive user experience.

6. Error Handling
Robust error handling is implemented to manage:

1- API rate limits

2- No internet connectivity

3- API response errors

4- Users are shown a relevant error message if data fetching fails, ensuring transparency.

Technical Summary
Languages: HTML, CSS, JavaScript

Conclusion:
Task 1 successfully demonstrates how to integrate a third-party API into a front-end web application and render the data dynamically.

It simulates a real-world scenario where financial data needs to be fetched, processed, filtered, and displayed in an intuitive manner.

This task not only strengthens understanding of API handling and asynchronous programming in JavaScript but also emphasizes building interactive and 
user-friendly interfaces without relying on heavy frontend libraries.

OUTPUT:
<img width="1920" height="1080" alt="Screenshot (243)" src="https://github.com/user-attachments/assets/b373e104-7be9-4bd9-9332-ee170f35f7ea" />
<img width="1920" height="1080" alt="Screenshot (244)" src="https://github.com/user-attachments/assets/b2051b1e-1c61-43f4-af2f-5acc76d38984" />
<img width="1920" height="1080" alt="Screenshot (247)" src="https://github.com/user-attachments/assets/786a5663-bafa-47e4-95f1-7932b207f38f" />
