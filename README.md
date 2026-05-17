# Local Sports & Indoor Games Partner Finder Platform

## Project Overview

The Local Sports & Indoor Games Partner Finder Platform is a frontend-based web application designed to help users find nearby partners for indoor and outdoor games such as Badminton, Cricket, Chess, Carrom, Football, Table Tennis, and more.

The platform focuses on improving community engagement, promoting healthy recreational activities, and making it easier for users to connect with players who share similar sports interests, skill levels, and availability.
This project was developed as part of a Frontend Developer Internship using React and Vite.

## Problem Statement

Many people struggle to find suitable partners for casual sports and indoor games because of:

- Lack of awareness about nearby players
- Difficulty coordinating time and location
- Dependence on WhatsApp groups or word-of-mouth
- Reduced participation in recreational activities
- Limited access to local community networks

This platform solves that problem by providing a simple and connected digital solution.

## Key Features

### User Authentication

- Signup page with LocalStorage-based user registration
- Login system with protected routes
- Unauthorized users are redirected to Login page

### Profile Creation

- Create and update player profile
- Select:
  - Preferred sport
  - Skill level
  - Availability
  - Preferred playing location
  - User location

### Players Listing

- View nearby players using realistic dummy data
- Filter players by:
  - Sport
  - Skill level
  - Location

### Match Request System

- Send match requests to players
- Requests are saved in LocalStorage
- Request status:
  - Pending
  - Accepted
  - Declined

### Request History

- View full history of all requests
- Track final request status

### Admin Dashboard

- Total Registered Users
- Total Match Requests
- Accepted Matches
- Most Popular Sport
- Active Players

### Footer Support Pages

- About Us
- Contact
- Privacy Policy
- Terms of Service


## Tech Stack
### Frontend
- React.js
- Vite
- JavaScript (ES6)
- CSS3
- React Router DOM
### Data Handling

- LocalStorage
- Dummy JSON Data

### Deployment

- Vercel
