// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class WinScene extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.game.addPersistRootNode(this.node);
  }

  start() {}

  Win() {
    cc.tween(this.node)
      .to(1, { position: cc.v3(480, 320, 0) }, { easing: "cubicInOut" })
      .to(1, { position: cc.v3(480, -360, 0) }, { easing: "cubicInOut" })
      .call(() => {
        this.node.setPosition(cc.v3(480, 1000, 0));
      })
      .start();
  }
  // update (dt) {}
}