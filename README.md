# Project: Command-Line Menu System by Alma Wanjiru

## Objective

Create a command-line application in JavaScript that presents users with a menu of options. The user interacts by entering a number corresponding to an action. The application continues running until the user chooses to exit.

This project is designed for learners who are familiar with:

- Variables
- Functions
- Loops
- Conditional statements
- User input/output

---

## Tools & Environment

- **JavaScript** (Node.js runtime)
- **prompt-sync** for receiving user input in the terminal

---

## Setup Instructions

1. **Ensure Node.js is installed:**

    ```bash
    node -v
    ```

2. **Create a project folder:**

    ```bash
    mkdir menu-app
    cd menu-app
    ```

3. **Initialize Node.js project:**

    ```bash
    npm init -y
    ```

4. **Install prompt-sync:**

    ```bash
    npm install prompt-sync
    ```

5. **Create a file named `menu.js`:**

    ```bash
    touch menu.js
    ```

---

## Program Requirements

Your program must:

- Display a clear menu with multiple options.
- Prompt the user to enter a number to choose an action.
- Execute the corresponding action.
- Display the menu again after the action.
- Exit only when the user selects the "Exit" option.
- Handle invalid input gracefully.

---

## Menu Options

The menu must include the following numbered options:

1. **Greet Me**  
    Display a friendly message to the user.

2. **Tell a Joke**  
    Display a hardcoded programming-related joke.

3. **Show Current Time**  
    Display the current time in a human-readable format.

4. **Reverse a Word**  
    Ask the user for a word and display the reversed word.

5. **Check if a Number is Even or Odd**  
    Prompt the user for a number and indicate whether it is even or odd.

6. **Calculate the Square of a Number**  
    Ask for a number and display the result of squaring it.

7. **Repeat a Phrase**  
    Ask the user for a phrase and a repetition count. Display the phrase that number of times.

8. **Convert Celsius to Fahrenheit**  
    Ask for a Celsius value and convert it to Fahrenheit using the formula: `F = C * 1.8 + 32`.

9. **Count Down from a Number**  
    Prompt for a number and count down to zero.

10. **Exit**  
     Terminate the program with a goodbye message.

---

## Additional Requirements

- Use a loop to continuously show the menu until the user selects "Exit".
- Use functions to organize the logic for each menu item.
- Validate numeric inputs before performing calculations.

---

## Optional Bonus Features

- Add a secret option only triggered by a special number (e.g., 42).
- Count how many actions the user has taken during the session.
- Include timestamps for actions using the JavaScript Date object.

---

## Sample Menu Display

```
=== Main Menu ===
1. Greet Me
2. Tell a Joke
3. Show Current Time
4. Reverse a Word
5. Check if a Number is Even or Odd
6. Calculate the Square of a Number
7. Repeat a Phrase
8. Convert Celsius to Fahrenheit
9. Count Down from a Number
10. Exit
```

---

## Submission Guidelines

Before you consider the project complete, ensure:

- The application runs without errors.
- All menu options work correctly.
- The program handles invalid input properly.
- Your code is structured clearly using functions.
- The loop only ends when "Exit" is selected.


## To access my repository
git clone https://github.com/almamutuguti/Command-Line-Menu-System.git


