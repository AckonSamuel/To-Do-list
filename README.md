![](https://img.shields.io/badge/Microverse-blueviolet)

> This is a solo project being built in our second module of our curriculum at microverse. It is a to-do list application where you are able to add, remove and mark completed tasks

Our goal here is to Build a To-do list application with add, remove and checked feature from scratch using JavaScripts.

### Features implemented so far are:

- Responsive HTML page
- Integrated webpack
- dynamic to-do list dom manipulation
- Add a task to list [Hit enter key to add a new task]
- Edit a task to list [this is done on editable and hit enter key to save to list]
- Save current state to local-storage.
- Addition of unit test using Jest.

## Built With

- Lighthouse (An open-source, automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO and more).
- Webhint (A customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors).
- Stylelint (A mighty, modern linter that helps you avoid errors and enforce conventions in your styles).
- ESlint (A mighty, modern linter that helps you avoid errors and enforce conventions in JavaScript codes)
- Webpack (Used for bundling JavaScript files for usage in a browser)
- Jest (A JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.)

To get a local copy up and running follow these simple example steps.

### Prerequisites

The basic requirements for building the executable are:

- A working browser application (Google chrome, Mozilla Fire fox, Microsoft edge ...)
- VSCode or any other equivalent code editor
- Node Package Manager (For installing packages like Lighthous, webhint & stylelint used for checking for debugging bad codes before deployment)

# Getting Started

#### Cloning the project

```
git clone  https://github.com/AckonSamuel/To-Do-list <Your-Build-Directory>
```

## Getting packages and dependencies
To get all package modules required to build the project run:
```
npm install
```
every package module required to build the project is listed in the package.json file. this is used as a reference to get all dependencies.

## Building 

To build the project run:
```
npm run build
```
after you run this sucessfully you'd locate the build from in the ```dist``` folder located from the parent directory of the project. two files are being built which are, ```main.js and index.html```

## Running

To run the program on a browser through a server run this command in your cli
```
npm start
```
This should open the page in your localhost on port 8080. then you'd be able to view the built page generated using webpack.

## Authors

👤 **Ackon Samuel**

- GitHub: [@AckonSamuel](https://github.com/AckonSamuel)
- Twitter: [@AckonSamuel2](https://twitter.com/AckonSamuel)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/samuel-ackon-882717190/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./MIT.md) licensed.
