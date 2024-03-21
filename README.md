# Flipkart Clone Using Next.js

## Overview

* This project aims to create a Flipkart clone using Next.js, a React framework for building server-side rendered and statically generated applications. The clone will include essential features such as a search bar with debouncing, authentication, authorization, database integration using SupaBase, and ORM implementation with Prisma. Authentication will be handled using NextAuth.

## Features

### Search Bar

* Implement a search bar allowing users to search for products. Utilize debouncing to improve performance by reducing the number of API calls while the user is typing.

### Authentication

* Integrate NextAuth for authentication, allowing users to sign up, log in, and manage their accounts securely.

### Authorization

* Implement authorization to control access to certain features or pages based on user roles or permissions.

### SupaBase Integration

* Utilize SupaBase, a hosted PostgreSQL database, to store data in the cloud. Configure the database with appropriate tables and schemas to store product information, user data, etc.

### Prisma ORM

* Implement Prisma ORM to communicate with the SupaBase database. Prisma will handle database queries, migrations, and provide a type-safe interface for interacting with the database.

## Database Configuration

* Configure the SupaBase PostgreSQL instance with the following details:

- **Database Name:** flipkart-clone
- **Password:** flipkart-clone
