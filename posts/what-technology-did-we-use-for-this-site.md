---
author:
- Ben Spurlock
categories:
- Svelte
- CI/CD
- Technical
title: What technology did we use for this site?
date: 2020-09-06T06:00:00.000+00:00
picture: ''

---
This has been a really fun project to set up! We have wanted a way for our group to be able to make posts and share either technical or food recipes. The entire source code for this project is hosted on GitHub - [https://github.com/BenDaSpur/cwqe](https://github.com/BenDaSpur/cwqe "https://github.com/BenDaSpur/cwqe")

So for some basics the site is running on [Svelte](https://svelte.dev) for the front-end and [Sapper](https://sapper.svelte.dev) for the routing/back-end. Svelte came out with v3 and I think it is really intuitive for web development and Sapper makes the project into a server side rendered (SSR) website.

In terms of how we create content, currently it is using [Forestry.io](https://forestry.io/) and creates each post in markdown. This is a nice ability to have a simple CMS where we can produce new recipes!

As for testing I have been using a tool called [Cypress](https://www.cypress.io/ "Cypress") that is pretty awesome in terms of very little boiler plate and makes creating a CI/CD environment simple. When a user goes to push changes for a branch a tool called [Husky](https://github.com/typicode/husky#readme "Husky") will get called that will run some basic tests on the main pages of the site. If all tests pass then the changes will get pushed into our repo!