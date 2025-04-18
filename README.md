# PepSales - eCommerce REST API

This is a scalable RESTful API for an eCommerce platform built using Node.js, Express.js, and MongoDB. It supports secure user authentication (JWT), CRUD operations for products and customers, as well as searching, filtering, and sorting functionalities.

---

## Features

Authentication  
- Sign-up and Sign-in for customers using JWT.  
- Authenticated routes using token middleware.

Customers  
- Create, Read, Update, Delete (CRUD) operations.  
- Customer data is publicly accessible — no authentication required for viewing or managing.

Products  
- Create, Read, Update, Delete (CRUD) operations.  
- A product is linked to the customer who created it.  
- Only the creator can update or delete their product.  
- Advanced querying:  
  - Search by product name  
  - Filter by price range  
  - Sort by price (asc/desc)

---

## Folder Structure

- `routes/api/v1/` - Contains versioned API routes (customer, product)  
- `controllers/` - Business logic for handling requests  
- `models/` - Mongoose schemas for MongoDB collections  
- `middleware/` - JWT auth middleware  
- `app.js` - Main Express app configuration  

---

## Running the Project

1. Clone the repository:  
   `git clone https://github.com/tani8227/PepSales.git`

2. Navigate to the backend directory:  
   `cd backend`

3. Install dependencies:  
   `npm install`

4. Set up your `.env` file:

5. Run the server:  
`npm start`

---

## API Endpoints Overview

### Auth
- `POST /api/v1/customer/sign-up` — Register a customer  
- `POST /api/v1/customer/sign-in` — Login and get token  

### Customers (No Auth Required)
- `GET /api/v1/customer/get-all`  
- `PATCH /api/v1/customer/update/:id`  
- `DELETE /api/v1/customer/delete/:id`
- `GET /api/v1/product/get-all`
 
### Products (Auth Required)
- `POST /api/v1/product/create`   
- `PATCH /api/v1/product/update/:id`  
- `DELETE /api/v1/product/delete/:id`  
- `GET /api/v1/product/search?keyword=shirt`  
- `GET /api/v1/product/filter?minPrice=100&maxPrice=500`  
- `GET /api/v1/product/sort-price?order=asc`  

---
