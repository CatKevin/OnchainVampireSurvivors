import UIPage from "../Manager/UIPage";
import Constant, { PageName } from "../Manager/Constant";
import { cocosz } from "../Manager/CocosZ";

const { ccclass } = cc._decorator;

@ccclass
export default class UILoadingPage extends UIPage {
  private _loadingBar: cc.ProgressBar = null;
  private _progressStep = 0.01;
  private _tweenID: number | null = null;

  _LoadingBar: cc.Node;
  _BtnWallet: cc.Node;
  _BtnNetworkSelect: cc.Node;
  _BtnLogin: cc.Node;
  _BtnStartGame: cc.Node;

  private _network_icon: cc.Node = null;
  private _network_name: cc.Node = null;

  private _btnMerlinTestnet: cc.Node = null;
  private _btnBobTestnet: cc.Node = null;

  private _wallet_icon: cc.Node = null;
  private _wallet_name: cc.Node = null;

  constructor() {
    super(PageName.UILoadingPage);
    this.isValid() && this.onLoad();
  }

  /**
   * 页面加载时调用，初始化健康警告和加载条
   */
  protected onLoad() {
    let btnNames: string[] = [
      "BtnSelectNetwork",
      "BtnWallet",
      "BtnLogin",
      "BtnStartGame",
      "BtnSelectNetwork/frame_set/BtnMerlinTestnet",
      "BtnSelectNetwork/frame_set/BtnBobTestnet",
    ];
    btnNames.forEach((name) => {
      let btn: cc.Node = cc.find(name, this._page);
      if (btn) {
        btn.on(cc.Node.EventType.TOUCH_END, this._onBtnClickHandler, this);
        if (btn.name == "BtnSelectNetwork") {
          this._BtnNetworkSelect = cc.find("frame_set", btn);
        } else if (btn.name == "BtnWallet") {
          this._BtnWallet = btn;
        } else if (btn.name == "BtnLogin") {
          this._BtnLogin = btn;
        } else if (btn.name == "BtnStartGame") {
          this._BtnStartGame = btn;
        } else if (btn.name == "BtnMerlinTestnet") {
          this._btnMerlinTestnet = btn;
        } else if (btn.name == "BtnBobTestnet") {
          this._btnBobTestnet = btn;
        }
      }
    });
    this._initializeLoadingBar();
  }

  /**
   * 页面打开时调用，注册事件监听并启动加载动画
   */
  protected onOpen() {
    if (this.isValid()) {
      this._LoadingBar = cc.find("LoadingBar", this._page);
      this._BtnWallet = cc.find("BtnWallet", this._page);
      this._BtnStartGame = cc.find("BtnStartGame", this._page);

      this._network_icon = cc.find("BtnSelectNetwork/Background/icon", this._page);
      this._network_name = cc.find("BtnSelectNetwork/Background/name", this._page);
      this._wallet_icon = cc.find("BtnWallet/Background/icon", this._page);
      this._wallet_name = cc.find("BtnWallet/Background/name", this._page);

      cc.game.on(Constant.E_GAME_LOGIC, this._onGameMassageHandler, this);
      this._loadingBar.progress = this._progressStep;
      this._startLoadingAnimation();

      cocosz.schedule(() => {
        if (cocosz.isResourceLoaded) {
          cc.find("LoadingBar", this._page).active = false;
          // wait for login
          if(window.currentChain != null && window.currentChain != "") {
            switch(window.currentChain) {
              case "MerlinTestnet":
                this._network_icon.getComponent(cc.Sprite).spriteFrame =
                cocosz.resMgr.getRes("merlin_logo", cc.SpriteFrame);
                this._wallet_icon.getComponent(cc.Sprite).spriteFrame =
                cocosz.resMgr.getRes("merlin_logo", cc.SpriteFrame);
                this._network_name.getComponent(cc.Label).string = "Merlin testnet";
                break;
              case "BobTestnet":
                this._network_icon.getComponent(cc.Sprite).spriteFrame =
                cocosz.resMgr.getRes("bob_logo", cc.SpriteFrame);
                this._wallet_icon.getComponent(cc.Sprite).spriteFrame =
                cocosz.resMgr.getRes("bob_logo", cc.SpriteFrame);
                this._network_name.getComponent(cc.Label).string = "BOB Sepolia testnet";
                break;
            }
          }
          if (window.currentChain != null && window.userAccount != null && window.userAccount != undefined) {
            let account =
              window.userAccount.slice(0, 6) +
              "..." +
              window.userAccount.slice(-4);
            this._BtnLogin.active = false;
            this._BtnWallet.active = true;
            this._BtnStartGame.active = true;
            // console.log('account:', account)
            // console.log('this._wallet_name.getComponent(cc.Label).string:', this._wallet_name.getComponent(cc.Label).string)
            if (this._wallet_name.getComponent(cc.Label).string !== account) {
              this._wallet_name.getComponent(cc.Label).string = account;
            }
          } else {
            // this._BtnLogin.active = true;
            this._BtnWallet.active = true;
            this._BtnStartGame.active = false;
            this._wallet_name.getComponent(cc.Label).string = "Select Wallet";
          }
        }
      }, 0.1);
    }
  }

  protected onClose() {
    cc.game.targetOff(this);
    if (this._tweenID !== null) {
      cc.Tween.stopAllByTag(this._tweenID);
    }
  }

  handleSelectNetwork() {
    this._BtnNetworkSelect.stopAllActions();
    let t =
      (this._BtnNetworkSelect.scaleY ? this._BtnNetworkSelect.scaleY : 1) / 2;
    cc.tween(this._BtnNetworkSelect)
      .to(
        t,
        { scaleY: this._BtnNetworkSelect.scaleY ? 0 : 1 },
        { easing: "sineInOut" }
      )
      .start();
  }

  private async _onBtnClickHandler(event: cc.Event.EventTouch) {
    await cocosz.audioMgr.playBtnEffect().catch();

    switch (event.target.name) {
      case "BtnSelectNetwork": {
        this.handleSelectNetwork();
        break;
      }
      case "BtnLogin": {
        if (window.onConnectButtonClick != null) {
          window.onConnectButtonClick();
        }
        break;
      }
      case "BtnWallet": {
        if(window.userAccount != null && window.userAccount != undefined) {
          if (window.onConnectedButtonClick != null) {
            window.onConnectedButtonClick();
          }
        } else {
          if (window.onConnectButtonClick != null) {
            window.onConnectButtonClick();
          }
        }
        break;
      }
      case "BtnStartGame": {
        cocosz.unscheduleAllCallbacks();
        cocosz.goToHome();
        break;
      }
      case "BtnMerlinTestnet": {
        this.handleSelectNetwork();
        window.selectNetwork("MerlinTestnet");
        break;
      }
      case "BtnBobTestnet": {
        this.handleSelectNetwork();
        window.selectNetwork("BobTestnet");
        break;
      }
    }
  }

  private _initializeLoadingBar() {
    this._loadingBar = cc
      .find("LoadingBar", this._page)
      .getComponent(cc.ProgressBar);
  }

  private _startLoadingAnimation() {
    this._tweenID = Date.now();

    cc.tween(this._page)
      .tag(this._tweenID)
      .delay(0.2)
      .call(() => {
        this._updateLoadingProgressStep();
      })
      .union()
      .repeatForever()
      .start();
  }

  private _updateLoadingProgressStep() {
    const newProgress = this._loadingBar.progress + this._progressStep;
    if (newProgress < 1) {
      this._updateProgress(newProgress);
    }
  }

  private _onGameMassageHandler(event: any) {
    switch (event.type) {
      case Constant.E_UPDATE_PROGRESS: {
        this._updateProgress(event.data);
        break;
      }
      default:
        console.warn(`Unhandled event type: ${event.type}`);
    }
  }

  private _updateProgress(pro: number) {
    if (pro > this._loadingBar.progress && pro <= 1) {
      this._loadingBar.progress = pro;
    }
  }
}
