import { Scene } from 'phaser';
import ButtonHandler from '../utils/ButtonHandler';
export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        this.InputHandler = new ButtonHandler({
            w: { code: 'KeyW' },
            a: { code: 'KeyA' },
            s: { code: 'KeyS' },
            d: { code: 'KeyD' },
            space: { code: "Space" },
            shiftLeft: { code: "ShiftLeft" }
        }
        ) 
        this.knight = this.add.sprite(0,0,'knight',0)
        const map = this.make.tilemap({key:'tilemap',tilewidth:16,tileHeight: 16})
        const tileset = map.addTilesetImage('tiles','tileset',16,16)

        const layer = map.createLayer('walls',tileset,0,0)
        this.cameras.main.setBackgroundColor(0x00ff00);
        this.cameras.main.startFollow(this.knight);
        this.cameras.main.setZoom(2)


        this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('GameOver');

        });
    }   
    update() {
        if ( this.InputHandler.buttons.d.down) {
            console.log('yes')
            this.knight.x += 1;
        }
        if ( this.InputHandler.buttons.a.down) {
            console.log('yes')
            this.knight.x -= 1;
        }
        if ( this.InputHandler.buttons.w.down) {
            console.log('yes')
            this.knight.y -= 1;
        }
        if ( this.InputHandler.buttons.s.down) {
            console.log('yes')
            this.knight.y += 1;
        }
    }
}
