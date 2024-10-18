/** @type {import('tailwindcss').Config} */

const SCALE = 0.375;

const sizes = {};
for (let i = 0; i < 1000; i++) {
  sizes[i] = `calc(${i}rem * ${SCALE})`;
}

const zIndexes = {};
for (let i = 0; i < 100; i++) {
  zIndexes[i] = `${i}`;
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-tile": `url(./assets/sprites/dark-tile.png)`,
        "light-tile": `url(./assets/sprites/light-tile.png)`,
        "board-border": `url(./assets/sprites/board-border.png)`,

        "king-light": `url(./assets/sprites/pieces/king-light.png)`,
        "queen-light": `url(./assets/sprites/pieces/queen-light.png)`,
        "bishop-light": `url(./assets/sprites/pieces/bishop-light.png)`,
        "knight-light": `url(./assets/sprites/pieces/knight-light.png)`,
        "tower-light": `url(./assets/sprites/pieces/tower-light.png)`,
        "pawn-light": `url(./assets/sprites/pieces/pawn-light.png)`,

        "king-dark": `url(./assets/sprites/pieces/king-dark.png)`,
        "queen-dark": `url(./assets/sprites/pieces/queen-dark.png)`,
        "bishop-dark": `url(./assets/sprites/pieces/bishop-dark.png)`,
        "knight-dark": `url(./assets/sprites/pieces/knight-dark.png)`,
        "tower-dark": `url(./assets/sprites/pieces/tower-dark.png)`,
        "pawn-dark": `url(./assets/sprites/pieces/pawn-dark.png)`,

        "piece-shadow": `url(./assets/sprites/pieces/piece-shadow.png)`,
      },
      dropShadow: {
        outline: "0 0 0px 1rem rgba(255,255,255,1)",
      },
      spacing: sizes,
      size: sizes,
      zIndex: zIndexes,
      colors: {
        "dark-brown": "#52333f",
      },
    },
  },
  safelist: [
    "bg-king-light",
    "bg-queen-light",
    "bg-bishop-light",
    "bg-knight-light",
    "bg-tower-light",
    "bg-pawn-light",
    "bg-king-dark",
    "bg-queen-dark",
    "bg-bishop-dark",
    "bg-knight-dark",
    "bg-tower-dark",
    "bg-pawn-dark",
  ],
  plugins: [],
};
