import { notes, pause } from "./notes";
import { noteLength } from "./length";

const {  Csharp, D,  E, Fsharp,  A, G, H, F  } = notes;
const { halfLong, long, eighth,quoter, sixteenth } = noteLength;

export const simpleSong = [
   [D[5], halfLong], [Csharp[5], quoter], [D[5],halfLong], [E[5],quoter], [Fsharp[5], halfLong + quoter +eighth], [pause.pause, eighth], 
   [Fsharp[5], halfLong], [E[5], quoter], [Fsharp[5], halfLong], [G[5], quoter],[A[5], halfLong + eighth ], [pause.pause, sixteenth], 
   [Csharp[6], quoter], [D[6], halfLong], [Csharp[6], quoter], [H[5], halfLong],  [A[5], quoter], [H[5], quoter], [A[5], quoter], [Fsharp[5], quoter], [F[5], quoter],
   [A[4], quoter], [H[4], quoter], [Csharp[5], halfLong], [Fsharp[5], quoter], [A[5], halfLong], [E[5],quoter], [D[5], long], 
]
