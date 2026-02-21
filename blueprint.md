
# Lotto Number Recommendation Page

This document outlines the plan for creating a Lotto Number Recommendation Page.

## Overview

The goal is to create a simple web page that generates and displays six unique random numbers between 1 and 45, representing a lottery ticket.

## Project Structure

*   `index.html`: The main HTML file.
*   `style.css`: The CSS file for styling the page.
*   `main.js`: The JavaScript file for generating the lottery numbers.

## Plan

### `index.html`

*   Set the page title to "Lotto Number Generator".
*   Add a main heading `<h1>` with the text "Lotto Number Generator".
*   Add a button with the ID `generate-btn` to trigger the number generation.
*   Add a `div` with the ID `lotto-numbers` to display the generated numbers.
*   Link to `style.css` and `main.js`.

### `style.css`

*   Center the content of the page.
*   Style the main heading.
*   Style the "Generate" button.
*   Style the container for the lottery numbers.
*   Style the individual numbers.

### `main.js`

*   Create a function `generateLottoNumbers()` that:
    *   Creates an empty array to store the numbers.
    *   Loops until six unique numbers between 1 and 45 are generated.
    *   Sorts the numbers in ascending order.
    *   Returns the array of numbers.
*   Add a `DOMContentLoaded` event listener to the document.
*   Inside the event listener:
    *   Get the button and the number container elements by their IDs.
    *   Add a `click` event listener to the button.
    *   When the button is clicked:
        *   Call `generateLottoNumbers()` to get the numbers.
        *   Clear the previous numbers from the container.
        *   Create and append `span` elements for each number to the container.
