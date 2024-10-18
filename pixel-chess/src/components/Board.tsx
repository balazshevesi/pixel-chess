import { createSignal, For, Show } from "solid-js";
import { chessGame } from "~/store/chess";

interface PieceProps {
  piece?:
    | "king-light"
    | "queen-light"
    | "bishop-light"
    | "knight-light"
    | "tower-light"
    | "pawn-light";
}
function Piece(p: PieceProps) {
  const pieceClasses = {
    "king-light": "bg-king-light",
    "queen-light": "bg-queen-light",
    "bishop-light": "bg-bishop-light",
    "knight-light": "bg-knight-light",
    "tower-light": "bg-tower-light",
    "pawn-light": "bg-pawn-light",
    "king-dark": "bg-king-dark",
    "queen-dark": "bg-queen-dark",
    "bishop-dark": "bg-bishop-dark",
    "knight-dark": "bg-knight-dark",
    "tower-dark": "bg-tower-dark",
    "pawn-dark": "bg-pawn-dark",
  };

  return (
    <div class="absolute bottom-0 shadow-blue-400 transition-transform">
      <Show when={p.piece}>
        <div class={`${pieceClasses[p.piece!]} z-2 relative h-32 w-16`}></div>
        <div class="bg-piece-shadow z-1 absolute bottom-0 h-12 w-16 opacity-90 mix-blend-luminosity"></div>
      </Show>
    </div>
  );
}

interface TileProps {
  tileColor: "light" | "dark" | string;
  piece: any;
}
function Tile(p: TileProps) {
  return (
    <div class="relative">
      <Show when={p.tileColor == "light"}>
        <div class="relative h-12 w-16 bg-light-tile">
          <Piece piece={p.piece} />
        </div>
      </Show>
      <Show when={p.tileColor == "dark"}>
        <div class="relative h-12 w-16 bg-dark-tile">
          <Piece piece={p.piece} />
        </div>
      </Show>
    </div>
  );
}

export default function Board() {
  return (
    <div class="bg-dark-brown relative flex h-dvh w-full items-center justify-center">
      <div class="bg-board-border w-160 h-120 absolute"></div>
      <div class="w-128 flex h-96 flex-wrap">
        <For each={chessGame.rows} fallback={<div>wut...</div>}>
          {(row) => (
            <For each={row} fallback={<div>cell</div>}>
              {(cell) => (
                <>
                  <Tile
                    tileColor={cell.tileColor}
                    piece={cell.piece ? cell.piece : ""}
                  ></Tile>
                </>
              )}
            </For>
          )}
        </For>
      </div>
    </div>
  );
}
