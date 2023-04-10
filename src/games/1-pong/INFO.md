# Pong

## Problem

Current implementation without any game logic looks way too complex
for what it should be.

## Solution

```typescript

// Pyramid to Zylem
import { Zylem } from 'zylem-game-lib';

const game = new Zylem('Pong');

// game assumes an initial scene and level
// game add automatically targets the default/current scene and level
game.add(Paddle, 'p1'); // Paddle has self contained logic
game.add(Paddle, 'p2');
game.add(Ball, 'ball'); // Ball has self contained logic
// Menu communicates with a centralized store
// the game object is also looking at values in the store
// when the store triggers a "new game" event the game starts.
game.add(Menu, 'menu'); // Menu has self contained logic


```
