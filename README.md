# KanjiStudy frontend app

This is a personal project based on my own interests to practice and learn further about the Japanese language.

The project is focused only on kanji for certain levels or grades for the official JLPT tests.

## About the Project: 📖

I have created this project as a way to create a tool for myself to practice and review the basics of Japanese
to have a place to quickly access and get a few minutes checking and reviewing my knowledge of basic Kanji.

Additionally, I have created a page to review katakana and hiragana, as occasionally I doubt myself when reading
some japanese text and I really want to solidify my basics!!


For my web development abilities, I chose to create a front-end project that utilizes an external backend not
created by myself to retrieve the necessary data to perform the tasks I wish.

I forced myself to use a third party backend to face the problems that I would face and how I would resolve them
in order to adapt the retrieved information but not miss any functionality that I desired to have on the app.

## Technologies Used: ☕️ ⚛️ 

#### Typescript
In order to further understand the intricacies of React, frontend development and how it all works together, I have
decided to use the superset of JS, Typescript.
By using this language, I have deepened my knowledge about types, how they work, how and why to pass props
a certain way and details that I was unaware of.
This has made me become more hungry for knowledge and wish to study more than ever.

### React JS
As a frontend library, I have chosen React given the flexibility it offers and high customizability.

#### Styled Components
For styling, I chose to create my own styled components.
This is the first time I have worked with them and I have learned to appreciate the flexibility and integration that
it offers with JS code, allowing to conditionally style components and edit the style based on variables, state or props.

## What I've learned: 📚 🤯

I have learned so much and gained so much more interest in learning much more!

As a few examples that come into mind:

#### Example issue:
The components that creates the quiz questions (KanjiQuiz) I was looping through
the array that contains the possible answers in the return of said component and
it was ok at first, however, once I tried to access and modify state variables,
it would re-shuffle the array, so when I clicked on an answer, they would move around!!

This taught me that I have to be very careful when and how I work with state variables and
how component re-rendering works.

#### Solution:
Store the shuffled array in state and then loop through said array upon calling render().

## Screenshots: 📷

To be added...

## Status: 📶

**Work in Progress

## Credits: 📝

API used:
app.kanjialive.com
