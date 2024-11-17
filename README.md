# Zerodha (Frontend)

The Zerodha Clone project replicates basic stock trading functionalities, including buying stocks and placing orders, in a dummy-based environment. The backend powers user authentication, and mock transactions, providing a safe space for users to experience stock trading without financial risks.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Routes & Components](#routes-Components)
- [Project Structure (MVC)](#project-structure-mvc)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

## About the Project

This project is a frontend replica of the Zerodha platform, focusing on delivering information related to brokerage, pricing, and trading services. The site mimics Zerodha's offerings such as pricing details, products, and brokerage plans. It provides static pages, including Home, Signup, Products, Pricing, and more, that users can explore for educational and informational purposes. Note: The frontend connects to a backend server for authentication and data fetching, which is handled by the [Zerodha Backend](https://github.com/abdulsattar0617/zerodha-backend) repo.

 
### Features

- **Homepage**: Provides key information, statistics, and primary navigation to various sections of the platform.
- **Signup Page**: Allows new users to register for an account via an intuitive form.
- **About Page**: Describes the platform and its offerings, replicating Zerodha's actual service model.
- **Product Page**: Displays details about available products, including their features and benefits.
- **Pricing Page**: Lists brokerage pricing and fee structure, aligned with Zerodha’s real pricing model.
- **Support Page**: Provides access to customer support, including creating tickets for assistance.
- **Responsive Design**: Optimized for mobile and desktop devices for smooth navigation.


### Tech Stack

- **Frontend**: React.js, HTML5, CSS3, JavaScript
- **UI Framework**: Bootstrap, Material UI Icons
- **State Management**: React Context API
- **API Calls**: Axios for HTTP requests
- **Routing**: React Router for navigation
- **Testing**: Jest (Hero.test.js)
- **Version Control**: Git and GitHub



## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abdulsattar0617/zerodha-frontend.git
   cd zerodha-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```bash
   PORT=3000
   REACT_APP_DASHBOARD_URL=your-dashboard-server-uri
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   Visit `http://localhost:3000` to view the app.


## Routes & Components

| Path           | Component        |
|----------------|------------------|
| `/`            | HomePage.js      |
| `/signup`      | Signup.js        |
| `/about`       | AboutPage.js     |
| `/product`     | ProductPage.js   |
| `/pricing`     | PricingPage.js   |
| `/support`     | SupportPage.js   |
| `/*`           | NotFound.js      |



 
## Usage

1. Clone or download the repository to your local machine.
2. Run `npm install` to install the dependencies.
3. Start the development server using `npm start`.
4. Once the server is running, you can access the application in your browser.
5. Use the provided routes to navigate through the app:
   - `/signup`: Signup page
   - `/about`: About page
   - `/product`: Product page
   - `/pricing`: Pricing page
   - `/support`: Support page
   - `/`: Home page
   - `*`: NotFound page for undefined routes
6. For data integration, refer to the [Zerodha Backend](https://github.com/abdulsattar0617/zerodha-backend) repository.


## Live Demo

You can access the live version of the application here: [Zerodha Deployed link](https://zerodha-frontend-xl0h.onrender.com)


## Project Structure

```bash
zerodha-frontend/
│
├── public/
│   ├── media/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── landing_page/
│   │   ├── about/
│   │   │   ├── AboutPage.js
│   │   │   ├── Hero.js
│   │   │   └── Team.js
│   │   ├── home/
│   │   │   ├── Awards.js
│   │   │   ├── Education.js
│   │   │   ├── Hero.js
│   │   │   ├── HomePage.js
│   │   │   ├── Pricing.js
│   │   │   └── Stats.js
│   │   ├── pricing/
│   │   │   ├── Brokerage.js
│   │   │   ├── Hero.js
│   │   │   └── PricingPage.js
│   │   ├── products/
│   │   │   ├── Hero.js
│   │   │   ├── LeftSection.js
│   │   │   ├── ProductionPage.js
│   │   │   ├── RightSection.js
│   │   │   └── Universe.js
│   │   ├── signup/
│   │   │   └── Signup.js
│   │   ├── support/
│   │   │   ├── CreateTicket.js
│   │   │   ├── Hero.js
│   │   │   └── SupportPage.js
│   ├── Footer.js
│   ├── Navbar.js
│   ├── NotFound.js
│   └── OpenAccount.js
│
├── test/
│   └── Hero.test.js
│
├── CSS_SignupPage.css
├── index.css
└── index.js
├── package.json
├── package-lock.json
└── readme.md
```

## Contributing

We welcome contributions to the Zerodha Clone Frontend project! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request with a description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/abdulsattar0617/zerodha-frontend/blob/main/LICENSE) file for more details.
