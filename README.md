# Ethereum Transactions List & Balances Checker

---
> Here is [DEMO](https://ethereum-transactions-list-vercel-9qrg.vercel.app/)

This full-stack web application provides users with the ability to track transactions for a last Ethereum blocks and check the balance of a wallet by its address. The application was built with Next.js for the frontend, Express.js for the backend, and MongoDB for the database.

Users can enter the number of an Ethereum block and view a list of the latest transactions for that token, including transaction hash, transaction id, sender and receiver addresses and the date of the transaction. Additionally, you can see the balance of the wallet using second endpoint, displayed in both ERC-20 the tokens and in Ether.

The application could be further improved by adding support for additional cryptocurrencies, improving the user interface, providing historical price data for specific cryptocurrencies, and implementing a real-time transaction feed.


## Technologies Used

---

The project was implemented using the following technologies:

* Node.js
* Express.js
* React.js
* Next.js
* TypeScript
* MongoDB
* mongoose
* web3.js API

## Getting Started

---

To get started with the project, follow these steps:

1. Clone the repository to your local machine.

```
git clone https://github.com/kryvets-vadym/ethereum-transactions-list.git
```

2. Navigate to the project folder:

```bash
cd ethereum-transactions-list
```

3. Install the dependencies by running the following command:

```bash
npm run install-dependencies
```

4. Start the web server by running the following command:
```bash
npm run start-server
```

4. Start the client by running the following command:
```bash
npm run start-client
```

4. To test the endpoint `/balances`, you can send a GET request to the `/balances` endpoint with the `address` query parameter set to the Ethereum address for which you want to fetch the balances. For example:
```
http://localhost:5000/api/balances/0xA145ac099E3d2e9781C9c848249E2e6b256b030D
```

## Available Routes

---

#### **GET** `/api/transactions`

* Used to return the transactions from database with pagination in JSON format.

#### **GET** `/api/balances/:address`

* Used to return the balances of all ERC20 tokens and native Ethereum tokens at the specified address in JSON format.


## What's included

Within the download you'll find the following working directories and files:

```
- server/
  ├── src/
  │   ├── config/
  │   │   └── config.ts
  │   ├── controllers
  │   │   ├── balanceController.ts
  │   │   └── transactionsController.ts  
  │   ├── helpers/
  │   │   ├── catchErrors.ts
  │   │   ├── sleep.ts
  │   │   └── isValidEteredData.ts   
  │   ├── middlewares/
  │   │   ├── validateTransactionsData.ts
  │   │   └── validateEtherumAddress.ts    
  │   ├── models/
  │   │   ├── Block.ts
  │   │   └── Transaction.ts  
  │   ├── routes/
  │   │   ├── transactionsRouter.ts
  │   │   └── balanceRouter.ts
  │   ├── services/
  │   │   ├── blockService.ts
  │   │   ├── transactionsService.ts
  │   │   └── balanceService.ts 
  │   ├── types/
  │   │   └── types.ts
  │   └── server.ts
  ├── .eslintrc
  ├── .gitignore
  ├── .prettierrc
  ├── nodemon.json
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── tsconfig.json
```

## Future Improvements

---

Here are some potential improvements that could be made to the project:

* Improve the UI/UX of the application: The current user interface is functional, but it could be improved to make it more visually appealing and easier to use.
* Add support for additional cryptocurrencies: Currently, the application only supports tracking transactions for Ethereum tokens. Adding support for additional cryptocurrencies would make the application more useful to a wider audience.
* Add the ability to view historical price data for a specific cryptocurrency: Providing historical price data for a specific cryptocurrency would allow users to better understand the value of their holdings.
* Add support for fetching balances for multiple addresses at once.
* Allow users to specify which tokens they want to include in the balance report.
* Add support for other blockchain networks, such as Binance Smart Chain or Polygon.
