import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  length = 0;
  incLetters = false;
  incNumbers = false;
  incSymbols = false;
  disabledFlag = true;

  onGenerateClick() {
    /*console.log(`
      About to generate the password with the following:
      Length: ${this.length}
      Include letters: ${this.incLetters}
      Include numbers: ${this.incNumbers}
      Include symbols: ${this.incSymbols}
    `);
    this.password = 'myPwd';
    */

    const numbers = '0123456789';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symbols = '!@#$%^&*()';
    let validChars = '';

    if (this.incLetters) validChars += letters;
    if (this.incNumbers) validChars += numbers;
    if (this.incSymbols) validChars += symbols;

    let generatedPw = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPw += validChars[index];
    }

    this.password = generatedPw;
  }

  onAttrChange() {
    this.disabledFlag = !(
      this.length > 0 &&
      (this.incLetters || this.incNumbers || this.incSymbols)
    );
  }
  onChangeLength(value: string) {
    const parsedInt = parseInt(value);
    if (!isNaN(parsedInt)) {
      this.length = parsedInt;
      this.onAttrChange();
    }
  }
  onChangeLetters(value: boolean) {
    this.incLetters = value;
    this.onAttrChange();
  }
  onChangeNumbers() {
    this.incNumbers = !this.incNumbers;
    this.onAttrChange();
  }
  onChangeSymbols() {
    this.incSymbols = !this.incSymbols;
    this.onAttrChange();
  }
}
