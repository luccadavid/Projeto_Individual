function verificar(Numero) {
    var num = Numero
    var interval = /[a-zA-Z]/;

    if (num == 1) {
        var DUALCORE = (letra1P1.value + letra2P1.value + letra3P1.value + letra4P1.value + letra5P1.value + letra6P1.value + letra7P1.value + letra8P1.value).toUpperCase();
        if (DUALCORE == 'DUALCORE') {
            letra1P1.disabled = true;
            letra2P1.disabled = true;
            letra3P1.disabled = true;
            letra4P1.disabled = true;
            letra5P1.disabled = true;
            letra6P1.disabled = true;
            letra7P1.disabled = true;
            letra8P1.disabled = true;

            // MUDANDO COR DA BOX \\
            letra1P1.style = "border: solid #237A57;"
            letra2P1.style = "border: solid #237A57;"
            letra3P1.style = "border: solid #237A57;"
            letra4P1.style = "border: solid #237A57;"
            letra4P1.style = "border: solid #237A57;"
            letra5P1.style = "border: solid #237A57;"
            letra6P1.style = "border: solid #237A57;"
            letra7P1.style = "border: solid #237A57;"
            letra8P1.style = "border: solid #237A57;"

        }
    }   
    // FIM PALAVRA 1 \\

    else if (num == 2) {
        var CPU = (letra1P2.value + letra2P2.value + letra2P1.value).toUpperCase();
        if (CPU == 'CPU') {
            letra1P2.disabled = true;
            letra2P2.disabled = true;
            letra2P1.disabled = true;

            letra1P2.style = 'border: solid #4169E1;';
            letra2P2.style = 'border: solid #4169E1;';
            letra2P1.style = 'border: solid #4169E1;';

        }
    }   
    // FIM PALAVRA 2 \\

    else if (num == 3) {
        var REGISTRADORES = (letra1P3.value + letra2P3.value + letra3P3.value + letra4P3.value + letra5P3.value + letra6P3.value + letra7P3.value + letra8P3.value + letra9P3.value + letra10P3.value + letra11P3.value + letra12P3.value + letra13P3.value).toUpperCase();
        if (REGISTRADORES == 'REGISTRADORES') {
            letra1P3.disabled = true;
            letra2P3.disabled = true;
            letra3P3.disabled = true;
            letra4P3.disabled = true;
            letra5P3.disabled = true;
            letra6P3.disabled = true;
            letra7P3.disabled = true;
            letra8P3.disabled = true;
            letra9P3.disabled = true;
            letra10P3.disabled = true;
            letra11P3.disabled = true;
            letra12P3.disabled = true;
            letra13P3.disabled = true;

            letra1P3.style = 'border: solid #4169E1;';
            letra2P3.style = 'border: solid #4169E1;';
            letra3P3.style = 'border: solid #4169E1;';
            letra4P3.style = 'border: solid #4169E1;';
            letra5P3.style = 'border: solid #4169E1;';
            letra6P3.style = 'border: solid #4169E1;';
            letra7P3.style = 'border: solid #4169E1;';
            letra8P3.style = 'border: solid #4169E1;';
            letra9P3.style = 'border: solid #4169E1;';
            letra10P3.style = 'border: solid #4169E1;';
            letra11P3.style = 'border: solid #4169E1;';
            letra12P3.style = 'border: solid #4169E1;';
            letra13P3.style = 'border: solid #4169E1;';
        }
    }   
    // FIM PALAVRA 3 \\

    else if (num == 4) {
        var I5 = (letra1P4.value + letra2P4.value).toUpperCase();
        if (I5 == 'I5') {
            letra1P4.disabled = true;
            letra2P4.disabled = true;

            letra1P4.style = "border: solid #4169E1;";
            letra2P4.style = "border: solid #4169E1;";
        }

    }   
    // FIM PALAVRA 4 \\


    else if (num == 5) {
        var DATABUS = (letra1P5.value + letra2P5.value + letra3P5.value + letra4P5.value + letra5P5.value + letra6P5.value + letra7P5.value).toUpperCase();
        if (DATABUS == 'DATABUS') {
            letra1P5.disabled = true;
            letra2P5.disabled = true;
            letra3P5.disabled = true;
            letra4P5.disabled = true;
            letra5P5.disabled = true;
            letra6P5.disabled = true;
            letra7P5.disabled = true;

            letra1P5.style = 'border: solid #4169E1;';
            letra2P5.style = 'border: solid #4169E1;';
            letra3P5.style = 'border: solid #4169E1;';
            letra4P5.style = 'border: solid #4169E1;';
            letra5P5.style = 'border: solid #4169E1;';
            letra6P5.style = 'border: solid #4169E1;';
            letra7P5.style = 'border: solid #4169E1;';

        }
    }   
    // FIM PALAVRA 5 \\

    else if (num == 6) {
        var QUADCORE = (letra1P6.value + letra2P6.value + letra2P5.value + letra4P6.value + letra5P6.value + letra6P1.value + letra6P6.value + letra7P6.value).toUpperCase();
        if (QUADCORE == 'QUADCORE') {
            letra1P6.disabled = true;
            letra2P6.disabled = true;
            letra2P5.disabled = true;
            letra4P6.disabled = true;
            letra5P6.disabled = true;
            letra6P1.disabled = true;
            letra6P6.disabled = true;
            letra6P6.disabled = true;
            letra7P6.disabled = true;

            letra1P6.style = 'border: solid #4169E1;';
            letra2P6.style = 'border: solid #4169E1;';
            letra2P5.style = 'border: solid #4169E1;';
            letra4P6.style = 'border: solid #4169E1;';
            letra5P6.style = 'border: solid #4169E1;';
            letra6P1.style = 'border: solid #4169E1;';
            letra6P6.style = 'border: solid #4169E1;';
            letra7P6.style = 'border: solid #4169E1;';

        }
    }   
    // FIM PALAVRA 6 \\

    else if (num == 7) {
        var MEMORIADEMASSA = (letra0P7.value + letra1P7.value + letra2P7.value + letra3P7.value + letra4P7.value + letra5P7.value + letra6P7.value + letra7P7.value + letra8P7.value + letra9P7.value + letra10P7.value + letra11P7.value + letra12P7.value + letra13P7.value).toUpperCase();
        if (MEMORIADEMASSA == 'MEMORIADEMASSA') {
            letra0P7.disabled = true;
            letra1P7.disabled = true;
            letra2P7.disabled = true;
            letra3P7.disabled = true;
            letra4P7.disabled = true;
            letra5P7.disabled = true;
            letra6P7.disabled = true;
            letra7P7.disabled = true;
            letra8P7.disabled = true;
            letra9P7.disabled = true;
            letra10P7.disabled = true;
            letra11P7.disabled = true;
            letra12P7.disabled = true;
            letra13P7.disabled = true;

            letra0P7.style = 'border: solid #4169E1;';
            letra1P7.style = 'border: solid #4169E1;';
            letra2P7.style = 'border: solid #4169E1;';
            letra3P7.style = 'border: solid #4169E1;';
            letra4P7.style = 'border: solid #4169E1;';
            letra5P7.style = 'border: solid #4169E1;';
            letra6P7.style = 'border: solid #4169E1;';
            letra7P7.style = 'border: solid #4169E1;';
            letra8P7.style = 'border: solid #4169E1;';
            letra9P7.style = 'border: solid #4169E1;';
            letra10P7.style = 'border: solid #4169E1;';
            letra11P7.style = 'border: solid #4169E1;';
            letra12P7.style = 'border: solid #4169E1;';
            letra13P7.style = 'border: solid #4169E1;';

        }
    }   
    // FIM PALAVRA 7 \\

    else if (num == 8) {
        var FLASH = (letra1P8.value + letra2P8.value + letra3P8.value + letra4P8.value + letra5P8.value).toUpperCase();
        if (FLASH == 'FLASH') {
            letra1P8.disabled = true;
            letra2P8.disabled = true;
            letra3P8.disabled = true;
            letra4P8.disabled = true;
            letra5P8.disabled = true;

            letra1P8.style = 'border: solid #4169E1;';
            letra2P8.style = 'border: solid #4169E1;';
            letra3P8.style = 'border: solid #4169E1;';
            letra4P8.style = 'border: solid #4169E1;';
            letra5P8.style = 'border: solid #4169E1;';

        }
    }   
    // FIM PALAVRA 8 \\


    else if (num == 9) {
        var DMA = (letra1P9.value + letra2P9.value + letra4P5.value).toUpperCase();
        if (DMA == 'DMA') {
            letra1P9.disabled = true;
            letra2P9.disabled = true;
            letra4P5.disabled = true;

            letra1P9.style = 'border: solid #4169E1;';
            letra2P9.style = 'border: solid #4169E1;';
            letra4P5.style = 'border: solid #4169E1;';

        }
    }   
    // FIM PALAVRA 9 \\

    else if (num == 10) {
        var ULA = (letra6P5.value + letra1P10.value + letra2P10.value).toUpperCase();
        if (ULA == 'ULA') {
            letra6P5.disabled = true;
            letra1P10.disabled = true;
            letra2P10.disabled = true;

            letra6P5.style = 'border: solid #4169E1;';
            letra1P10.style = 'border: solid #4169E1;';
            letra2P10.style = 'border: solid #4169E1;';

        }
    }   
    // FIM PALAVRA 10 \\

    else if (num == 11) {
        var ADDRESSBUS = (letra6P7.value + letra1P11.value + letra2P11.value + letra3P11.value + letra4P11.value + letra4P8.value + letra5P11.value + letra6P11.value + letra7P11.value + letra7P5.value).toUpperCase();
        if (ADDRESSBUS == 'ADDRESSBUS') {
            letra6P7.disabled = true;
            letra1P11.disabled = true;
            letra2P11.disabled = true;
            letra3P11.disabled = true;
            letra4P11.disabled = true;
            letra4P8.disabled = true;
            letra5P11.disabled = true;
            letra6P11.disabled = true;
            letra7P11.disabled = true;
            letra7P5.disabled = true;

            letra6P7.style = 'border: solid #4169E1;';
            letra1P11.style = 'border: solid #4169E1;';
            letra2P11.style = 'border: solid #4169E1;';
            letra3P11.style = 'border: solid #4169E1;';
            letra4P11.style = 'border: solid #4169E1;';
            letra4P8.style = 'border: solid #4169E1;';
            letra5P11.style = 'border: solid #4169E1;';
            letra6P11.style = 'border: solid #4169E1;';
            letra7P11.style = 'border: solid #4169E1;';
            letra7P5.style = 'border: solid #4169E1;';
        }
    }  
    // FIM PALAVRA 11 \\

    else if (num == 12) {
        var I7 = (letra1P4.value + letra1P12.value).toUpperCase();
        if (I7 == 'I7') {
            letra1P4.disabled = true;
            letra1P12.disabled = true;

            letra1P4.style = 'border: solid #4169E1;';
            letra1P12.style = 'border: solid #4169E1;';
        }
    } 
}  
    // FIM PALAVRA 12 \\