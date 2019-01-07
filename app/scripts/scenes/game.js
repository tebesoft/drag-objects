import _ from 'lodash';

export default class Game extends Phaser.Scene {
  /**
   *  A sample Game scene, displaying the Phaser logo.
   *
   *  @extends Phaser.Scene
   */
  constructor() {
    super({key: 'Game'});
  }

  /**
   *  Called when a scene is initialized. Method responsible for setting up
   *  the game objects of the scene.
   *
   *  @protected
   *  @param {object} data Initialization parameters.
   */
  create(/* data */) {
    //  TODO: Replace this content with really cool game code here :)
    //this.add.sprite()
    _.range(0, 3).forEach((n) => {
      const x = Phaser.Math.Between(this.game.canvas.width * 0.25, this.game.canvas.width * 0.75);
      const y = Phaser.Math.Between(this.game.canvas.height * 0.25, this.game.canvas.height * 0.75);
      const circle = this.add.sprite(x, y, `circle${n}`);
      circle.setInteractive();
    });

    this.input.on('pointerdown', this.startDrag, this);
  }

  startDrag(pointer, targets) {
    this.input.off('pointerdown', this.startDrag, this);
    this.dragObject = targets[0];
    this.input.on('pointermove', this.doDrag, this);
    this.input.on('pointerup', this.stopDrag, this);
  }

  doDrag(pointer) {
    this.dragObject.x = pointer.x;
    this.dragObject.y = pointer.y;
  }

  stopDrag() {
    this.input.on('pointerdown', this.startDrag, this);
    this.input.off('pointermove', this.doDrag, this);
    this.input.off('pointerup', this.stopDrag, this);
  }

  /**
   *  Called when a scene is updated. Updates to game logic, physics and game
   *  objects are handled here.
   *
   *  @protected
   *  @param {number} t Current internal clock time.
   *  @param {number} dt Time elapsed since last update.
   */
  update(/* t, dt */) {
  }
}
