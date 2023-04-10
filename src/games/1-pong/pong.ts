import Pyramid, { GameEntity } from 'pyramid-game-lib';
import { Color } from 'three';
const { Game, Stage, Entity, Util } = Pyramid;
const { Box } = Entity;

const { Vector3 } = Util;

// TODO: this too complicated for a simple game
// see INFO.md

@Box({
	fixed: true,
	position: new Vector3(0, -10, -50),
	size: new Vector3(100, 0.2, 100),
	color: 0xFAEBD7,
})
export class Platform { }

@Box({
	position: new Vector3(0, 10, -50),
	size: new Vector3(2, 2, 2),
	color: 0xDEADBE,
})
export class Paddle { }


let paddle: typeof Entity;

@Stage({
	name: 'level 1',
	backgroundColor: new Color('#87CEEB')
})
class Level1 implements GameEntity<typeof Entity> {
	async setup({ create }: any) {
		create(Platform);
		paddle = await create(Paddle);
	}
	loop() { }
}

@Game({
	app: '#game',
	stages: [Level1]
})
class Pong implements GameEntity<typeof Entity> {

	async setup({ create, camera }: any) {
		// TODO: Camera should be static, no need to follow anything
		camera.followEntity(paddle);
	}

	loop() { }
}

export default Pong;

new Pong();