import Phaser from "phaser";
export default class AnotherScene extends Phaser.Scene {
    constructor() {
        super({ key: "AnotherScene" });
    }

    create() {
        const text = this.add.text(400, 300, "Another Scene", {
            fontSize: "32px",
            color: "#000000",
        });
        text.setOrigin(0.5, 0.5);
    }
}
