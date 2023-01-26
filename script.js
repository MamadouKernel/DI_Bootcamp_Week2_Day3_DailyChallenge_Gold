/**
 *@author : Konate Mamadou_K
 */

const numbers = [5,0,9,1,7,4,2,6,3,8];

//1. À l'aide de la .toString()méthode, convertissez le tableau en chaîne.
console.log(numbers.toString());

//2. À l'aide de la .join()méthode, convertissez le tableau en chaîne. Essayez de transmettre différentes valeurs dans la jointure.
        //Par exemple .join("+"), .join(" "), .join("")

// convertit le tableau en chaîne de caractères en utilisant un "+" comme séparateur
const numbersString1 = numbers.join("+");
console.log(numbersString1); // affiche "5+0+9+1+7+4+2+6+3+8"

// convertit le tableau en chaîne de caractères en utilisant un espace comme séparateur
const numbersString2 = numbers.join(" ");
console.log(numbersString2); // affiche "5 0 9 1 7 4 2 6 3 8"

// convertit le tableau en chaîne de caractères en utilisant aucun séparateur
const numbersString3 = numbers.join("");
console.log(numbersString3); // affiche "5091742 638"

//3.

/**
 *@author : Konate Mamadou_K
 */

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      // compare les éléments adjacents
        if (numbers[j] < numbers[j + 1]) {
            // échange les valeurs en utilisant une variable temporaire
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

console.log(numbers);

/**
 *@author : Konate Mamadou_K
 */
