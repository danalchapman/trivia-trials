<a name="readme-top"></a>

<!-- HEADER -->
<h1 align="center">Trivia Trials</h1>

<h3 align="center">Trivia for the curious... and the brave.</h3>

<h4 align="center"><a href="https://trivia-trials.vercel.app/"><strong>Trivia Trials: Live</strong></a> | <a href="https://github.com/danalchapman/trivia-trials"><strong>Repository »</strong></a></h4>

<p></p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
        <a href="#features">Features</a>
        <ul>
            <li><a href="#reflections">Reflections</a>
        </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project
Ever need to get some much-needed trivia practice between trivia nights with your friends? Look no further than **Trivia Trials** -- a dungeon-themed trivia application that takes you through five questions (choose your own difficulty!) and shares your score, along with giving you the ability to save questions to review.
<br>

<h3 align="center">Landing Page & Choose Your Difficulty</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/6JlZRgBYFBo4w0wpVt/giphy.gif" alt="Trivia Trials displaying the landing page and choosing game difficulty preview gif"></p>

<h3 align="center">No Review Questions & Bad URL Handling:</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/NXv8rdBM2L3lIHefhl/giphy.gif" alt="Trivia Trials visiting review page without any questions and bad URL handling preview gif"></p>

<br />
This solo showcase project was assigned during the third module of Turing's Front-End Engineering program. It's main goal was to give students an opportunity to show off their cumulative skills they've learned in at least 18 weeks of being in the program, including React, React-Router, Cypress, and more. The details of this project are outlined in <a href="https://frontend.turing.edu/projects/module-3/showcase.html">this</a> project spec.

### Built With

![React][React-shield]
![JavaScript][JavaScript-shield]
![CSS][CSS-shield]
![HTML5][HTML-shield]
![Cypress][Cypress-shield]
![NPM][NPM-shield]
![Vercel][Vercel-shield]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setup
- Clone the repository to your local machine
- `cd` into the repository
- Make sure the necessary dependencies are installed on your local machine (`react-router-dom`, `cypress`)
- Once the necessary dependencies are installed, `cd` back into the root of the repository, and run `npm start`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Roadmap

- [ ] Implement other game options -- category (dropdown list of available categories), type (multiple choice, true or false, or both), and length of game (number of questions)
- [ ] Refactoring the `.replaceAll()` methods in the `Question` and `Review` Components to something more efficient to remove the weird characters from the API

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- This code utilizes React, React-Router, and PropTypes throughout in order to create a smooth multi-page user experience, and to guarantee that data types are kept as intended. This includes URLs that were incorrectly input by a user and it allows them to be redirected to the landing page with ease.
- With this project Cypress E2E testing was used to create a vast suite of tests that include error-handling and happy/sad paths.

### Reflections
<b>Wins:</b><br>
One of my biggest celebrations was implementing React-Router and PropTypes with no hiccups, cementing my understanding of those tools - especially with not having used PropTypes in a project before. Getting to put together all the pieces of tools we learned over the five-weeks of this inning was validating and inspiring, and I'm looking forward to not only adding to this project, but creating new applications as well.
<p>
<b>Challenges:</b><br>
I spent a portion of the project-time overwhelmed by the logic in `QuestionContainer` and `Question`, trying to take on too many concepts at once. I had to take the time to slow down, take more notes, and call in the help of a mentor in order resettle my anxiety and continue on with the project. I had initially implemented vanilla JavaScript into the project when attempting to render the answer-buttons in `Question` -- and had to refactor to include an iterator for it to be less code, smoother, and more empathetic to what I was working towards. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

<table align="center">
    <tr>
        <td align="center"> Dana Chapman: <a href="https://github.com/danalchapman">GitHub</a> | <a href="https://www.linkedin.com/in/danalchapman/">LinkedIn</a></td>
    </tr>
 <td align="center"><img src="https://avatars.githubusercontent.com/u/105478792?v=4" alt="Dana Chapman GitHub"
 width="150" height="auto" /></td>
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[React-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[JavaScript-shield]: https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[CSS-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[HTML-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[Cypress-shield]: https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e
[NPM-shield]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[Vercel-shield]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white

