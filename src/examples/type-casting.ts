/**
 * Simple Example to show Null Check and Type-casting in Typescript
 */


/**
 * Simple Add Function
 * @param {number}  num1
 * @param {number}  num2
 * @returns {number} addedresult
 */
function addNumbers (num1: number, num2: number): number {
    return num1 + num2;
}
  
  // null check and type-casting example
  const inputOne = document.getElementById('valueOneInput')! as HTMLInputElement;
  const inputTwo = document.getElementById('valueTwoInput')! as HTMLInputElement;
  const addBtn = document.getElementById('submitButton')! as HTMLButtonElement;
  const resultDiv = document.getElementById('resultDiv')! as HTMLDivElement;
  
  addBtn.addEventListener('click', (evt: any):void => {
    evt.preventDefault();
    try {
      resultDiv.innerText = `Result is ${addNumbers(parseInt(inputOne.value), parseInt(inputTwo.value))}`;
    } catch(err) {
      throw new Error(`Error adding numbers: ${err}`,);
    }
  });