# Fetch Exercise

## Running Locally

This project requires yarn or npm to run locally.

1. Clone project
2. Navigate to project directory
3. Run `yarn install` or `npm install` to install dependencies
4. Run `yarn start` to serve the app on [http://localhost:3000](http://localhost:3000)

## Project structure

```txt
.
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
├── src
│   ├── components
│   │   ├── App.jsx
│   │   ├── List.jsx
│   │   └── MultipleLists.jsx
│   ├── icons
│   │   └── chevron_right_black_24dp.svg
│   ├── index.css
│   ├── index.jsx
│   ├── styles
│   │   ├── base.css
│   │   ├── components
│   │   │   ├── App.css
│   │   │   └── List.css
│   │   ├── helpers.css
│   │   └── settings.css
│   └── util
│       ├── reduce.js
│       └── sort.js
└── yarn.lock
```

## Key Files and Directories

- `public/index.html`: The application page. Links to the styles and JavaScript bundled from the `src` directory.
- `src/index.js`: The root of the source code. All other code in the src directory is referenced directly or indirectly by index.js. This code gets bundled and linked to `public/index.html`.
- `src/index.css`: The root stylesheet. Contains import statements referencing every sheet in `src/styles` directory.
- `src/components`: Contains React JSX Component files.
