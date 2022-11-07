import React from 'react'


const Main = () => {
    
        function primo(num){

            if (num < 2) {
                return false;
            }

            for (let i = 2; i < num; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return true;
        }

        function calcularNumeros(num){
            
            for (let i = 2; i < num; i++) {
                if (primo(i)) {
                    numerosPrimos.push(i);
                }
            }
            console.log(numerosPrimos)
            return numerosPrimos
        }

        var numerosPrimos= []
    return (
        <>
            <div>
                <h1>Los primeros 10 numeros primos</h1>
                {calcularNumeros(30).map((reptile) => <li>{reptile}</li>)}
            </div>
                
            
        </>
    );
}

export default Main;