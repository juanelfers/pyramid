# Pyramid

> A small React app that solves the classic **triangle path** problem: given a
> pyramid of numbers, it finds the lowest-sum path from the top down to the base
> and highlights it.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Create React App](https://img.shields.io/badge/CRA-09D3AC?style=flat-square&logo=createreactapp&logoColor=white)

## What it does

- Parses a number pyramid into rows
- Computes the **minimum-sum path** from the apex to the base with a recursive
  divide-and-conquer approach (see [`src/services/pyramid.js`](./src/services/pyramid.js))
- Renders the pyramid and the chosen path

> An early personal project (2021) exploring the problem recursively.

## Tech stack

React 17, bootstrapped with Create React App.

## Getting started

```sh
npm install
npm start        # http://localhost:3000
```

## License

[MIT](./LICENSE) © Juan Elfers
