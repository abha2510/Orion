# Enhanced Dynamic FAQ System 💡
### An advanced FAQ system that integrates role-based authentication and private routing to provide users and administrators with a personalized experience.
### DeplyedLink: https://orion-tau-eta.vercel.app/
### APILink: https://bewildered-suspenders-clam.cyclic.app

🚀 Table of Contents
* Features
* Setup
* User Authentication
* Main FAQ Page
* Question Detail Page
* Admin Dashboard
* Styling & Responsiveness


🌟 Features
 - Role-based User Authentication:

* 🔒 Register as 'User'.
* 🧐 Determine role upon login with MongoDB.
* 🚫 Private routing based on roles.
 Private Routing:

- 🤔 Regular users: ask questions, answer, and rate answers.
- 🔧 Admin users: extra privileges plus admin dashboard access.
- 🚫 Non-authenticated users have no access.
### Other Features:

* 💬 Ask/Answer Questions.
* 👍 Rate Answers.
* 🛠️ Admin Dashboard.
* 📱 Responsive Design using styled components.
* 💾 State Management with React Context or Redux.

## 🛠️ Setup
Create a new React application using the Create React App.
Integrate MongoDB for data storage and authentication.
Install essential npm packages.

## 🔐 User Authentication
### Design captivating Register and Login pages.
### User role (Admin/Regular) stored in state or context post-login.
![1](https://github.com/abha2510/Orion/assets/107466839/d03ebd7f-14ca-4b08-bb38-8f175b461332)

![4](https://github.com/abha2510/Orion/assets/107466839/061c1d60-18da-45e2-a531-0a35d308c436)

## 📋 Main FAQ Page
### List of questions with count of answers and top-rated answer.
### Interactive questions for a detailed view.
![2](https://github.com/abha2510/Orion/assets/107466839/f876d718-9efb-4880-afd3-2a943101f337)


## 📖 Question Detail Page
### Exhibit the question and all related answers.
### Authenticated users can post answers or rate.
![5](https://github.com/abha2510/Orion/assets/107466839/544bd193-113a-483e-8042-f927db642e5d)



## 🛠️ Admin Dashboard
### Approval queue for questions and answers.
### Options to approve, delete, or flag content.
### Manage user privileges.
![7](https://github.com/abha2510/Orion/assets/107466839/7022f49f-73fc-45c3-baca-093148b637d5)


## 🎨 Styling & Responsiveness
### Use styled components for elegance.
### Clear distinction in UI for users and admins.
 mobile responsive.
![8](https://github.com/abha2510/Orion/assets/107466839/5ffc6e80-2d1e-4768-9e22-96c2d370839d)



## 📝 Considerations
### Robust role-based authentication is paramount.
### Leverage React’s useContext or Redux for user data.

🌠 Bonus Points
'Admin Request' feature implementation.
Memory of authentication status via session or local storage.
