class ButtonHandler {

  constructor(args) {
    this.buttons = args;
    
    document.body.addEventListener('keydown', (event) => {
      for (let i = 0; i < Object.entries(this.buttons).length; i++) {
        if (Object.entries(this.buttons).at(i).at(1).code == event.code) {
          this.buttons[Object.keys(this.buttons)[i]]['down'] = true;
        }
      }
    })
    document.body.addEventListener('keyup', (event) => {
      for (let i = 0; i < Object.entries(this.buttons).length; i++) {
        if (Object.entries(this.buttons).at(i).at(1).code == event.code) {
          this.buttons[Object.keys(this.buttons)[i]]['down'] = false;
        }
      }
    })


  }



}
export default ButtonHandler