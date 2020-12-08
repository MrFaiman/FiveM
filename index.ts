class FiveM {
  ip: string;
  /**
     * @param {string} ip ip:port
    */
  constructor(ip: string) {
    this.ip = ip;
  }
  async all() {
    let dynamic = await this.Dynamic;
    let players = await this.Players;
    let info = await this.info;
    return { dynamic, players, info };
  }
  get Dynamic() {
    let json = fetch(`http://${this.ip}/dynamic.json`);
    return json.then((res) => {
      return res.json();
    }).catch((err) => {
      return err;
    });
  }
  get Players() {
    let json = fetch(`http://${this.ip}/players.json`);
    return json.then((res) => {
      return res.json();
    }).catch((err) => {
      return err;
    });
  }
  get info() {
    let json = fetch(`http://${this.ip}/info.json`);
    return json.then((res) => {
      return res.json();
    }).catch((err) => {
      return err;
    });
  }
}

export default FiveM;
