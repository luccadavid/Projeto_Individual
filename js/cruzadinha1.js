function verificar(Numero) {
    var num = Numero
    var interval = /[a-zA-Z]/;

    if (num == 1) {
        var LUAN = (letra1P1.value + letra2P1.value + letra3P1.value + letra4P1.value).toUpperCase();
        if (LUAN == 'LUAN') {
            letra1P1.disabled = true;
            letra2P1.disabled = true;
            letra3P1.disabled = true;
            letra4P1.disabled = true;

            // MUDANDO COR DA BOX \\
            letra1P1.style = "border: solid #237A57;"
            letra2P1.style = "border: solid #237A57;"
            letra3P1.style = "border: solid #237A57;"
            letra4P1.style = "border: solid #237A57;"
        }

        let l1 = document.getElementById('letra1P1')
        if (l1 === document.activeElement) {
            if (letra1P1.value.match(interval)) {
                document.getElementById("letra2P1").focus()
            }
        }

        let l2 = document.getElementById('letra2P1')
        if (l2 === document.activeElement) {
            if (letra2P1.value.match(interval)) {
                document.getElementById("letra3P1").focus()
            }
        }

        let l3 = document.getElementById('letra3P1')
        if (l3 === document.activeElement) {
            if (letra3P1.value.match(interval)) {
                document.getElementById("letra4P1").focus()
            }
        }
    }   
    // FIM PALAVRA 1 \\

    else if (num == 2) {
        var MENINO = (letra1P2.value + letra2P2.value + letra3P2.value + letra4P2.value + letra5P2.value + letra6P2.value).toUpperCase();
        if (MENINO == 'MENINO') {
            letra1P2.disabled = true;
            letra2P2.disabled = true;
            letra3P2.disabled = true;
            letra4P2.disabled = true;
            letra5P2.disabled = true;
            letra6P2.disabled = true;

            letra1P2.style = 'border: solid #237A57;';
            letra2P2.style = 'border: solid #237A57;';
            letra3P2.style = 'border: solid #237A57;';
            letra4P2.style = 'border: solid #237A57;';
            letra5P2.style = 'border: solid #237A57;';
            letra6P2.style = 'border: solid #237A57;';

        }
        let l1_2 = document.getElementById('letra1P2')
        if (l1_2 === document.activeElement) {
            if (letra1P2.value.match(interval)) {
                document.getElementById("letra2P2").focus()
            }
        }

        let l2_2 = document.getElementById('letra2P2')
        if (l2_2 === document.activeElement) {
            if (letra2P2.value.match(interval)) {
                document.getElementById("letra3P2").focus()
            }
        }

        let l3_2 = document.getElementById('letra3P2')
        if (l3_2 === document.activeElement) {
            if (letra3P2.value.match(interval)) {
                document.getElementById("letra4P2").focus()
            }
        }

        if (l3_2.value.match(interval)) {
            let l4_2 = document.getElementById('letra4P2')
            if (l4_2 === document.activeElement) {
                if (letra4P2.value.match(interval)) {
                    document.getElementById("letra5P2").focus()
                }
            }
        }
        let l5_2 = document.getElementById('letra5P2')
        if (l5_2 === document.activeElement) {
            if (letra5P2.value.match(interval)) {
                document.getElementById("letra6P2").focus()
            }
        }
    }
    // FIM PALAVRA 2 \\

    else if (num == 3) {
        var ROCHA = (letra1P3.value + letra2P3.value + letra3P3.value + letra4P3.value + letra3P1.value).toUpperCase();
        if (ROCHA == 'ROCHA') {
            letra1P3.disabled = true;
            letra2P3.disabled = true;
            letra3P3.disabled = true;
            letra4P3.disabled = true;
            letra3P1.disabled = true;

            letra1P3.style = 'border: solid #237A57;';
            letra2P3.style = 'border: solid #237A57;';
            letra3P3.style = 'border: solid #237A57;';
            letra4P3.style = 'border: solid #237A57;';
            letra3P1.style = 'border: solid #237A57;';
        }
        let l1_3 = document.getElementById('letra1P3')
        if (l1_3 === document.activeElement) {
            if (letra1P3.value.match(interval)) {
                document.getElementById("letra2P3").focus()
            }
        }

        let l2_3 = document.getElementById('letra2P3')
        if (l2_3 === document.activeElement) {
            if (letra2P3.value.match(interval)) {
                document.getElementById("letra3P3").focus()
            }
        }

        let l3_3 = document.getElementById('letra3P3')
        if (l3_3 === document.activeElement) {
            if (letra3P3.value.match(interval)) {
                document.getElementById("letra4P3").focus()
            }
        }

        if (l3_3.value.match(interval)) {
            let l4_3 = document.getElementById('letra4P3')
            if (l4_3 === document.activeElement) {
                if (letra4P3.value.match(interval)) {
                    document.getElementById("letra3P1").focus()
                }
            }
        }
    }
    // FIM PALAVRA 3 \\

    else if (num == 4) {
        var RONY = (letra1P3.value + letra1P4.value + letra2P4.value + letra3P4.value).toUpperCase();
        if (RONY == 'RONY') {
            letra1P3.disabled = true;
            letra1P4.disabled = true;
            letra2P4.disabled = true;
            letra3P4.disabled = true;

            letra1P3.style = "border: solid #237A57;";
            letra1P4.style = "border: solid #237A57;";
            letra2P4.style = "border: solid #237A57;";
            letra3P4.style = "border: solid #237A57;";

        }
        let l1_4 = document.getElementById('letra1P3')
        if (l1_4 === document.activeElement) {
            if (letra1P3.value.match(interval)) {
                document.getElementById("letra1P4").focus()
            }
        }

        let l2_4 = document.getElementById('letra1P4')
        if (l2_4 === document.activeElement) {
            if (letra1P4.value.match(interval)) {
                document.getElementById("letra2P4").focus()
            }
        }

        let l3_4 = document.getElementById('letra2P4')
        if (l3_4 === document.activeElement) {
            if (letra2P4.value.match(interval)) {
                document.getElementById("letra3P4").focus()
            }
        }
    }
    // FIM PALAVRA 4 \\


    else if (num == 5) {
        var DANILO = (letra1P5.value + letra3P7.value + letra2P5.value + letra3P5.value + letra4P5.value + letra5P5.value).toUpperCase();
        if (DANILO == 'DANILO') {
            letra1P5.disabled = true;
            letra3P7.disabled = true;
            letra2P5.disabled = true;
            letra3P5.disabled = true;
            letra4P5.disabled = true;
            letra5P5.disabled = true;

            letra1P5.style = "border: solid #237A57;";
            letra3P7.style = "border: solid #237A57;";
            letra2P5.style = "border: solid #237A57;";
            letra3P5.style = "border: solid #237A57;";
            letra4P5.style = "border: solid #237A57;";
            letra5P5.style = "border: solid #237A57;";
        }
        
        let l1_5 = document.getElementById('letra1P5')
        if (l1_5 === document.activeElement) {
            if (letra1P5.value.match(interval)) {
                document.getElementById("letra3P7").focus()
            }
        }

        let l2_5 = document.getElementById('letra3P7')
        if (l2_5 === document.activeElement) {
            if (letra3P7.value.match(interval)) {
                document.getElementById("letra2P5").focus()
            }
        }

        let l3_5 = document.getElementById('letra2P5')
        if (l3_5 === document.activeElement) {
            if (letra2P5.value.match(interval)) {
                document.getElementById("letra3P5").focus()
            }
        }
        let l4_5 = document.getElementById('letra3P5')
        if (l4_5 === document.activeElement) {
            if (letra3P5.value.match(interval)) {
                document.getElementById("letra4P5").focus()
            }
        }
        let l5_5 = document.getElementById('letra4P5')
        if (l5_5 === document.activeElement) {
            if (letra4P5.value.match(interval)) {
                document.getElementById("letra5P5").focus()
            }
        }
    }
    // FIM PALAVRA 5 \\

    else if (num == 6) {
        var VEIGA = (letra1P6.value + letra2P6.value + letra3P6.value + letra1P10.value + letra4P6.value).toUpperCase();
        if (VEIGA == 'VEIGA') {
            letra1P6.disabled = true;
            letra2P6.disabled = true;
            letra3P6.disabled = true;
            letra1P10.disabled = true;
            letra4P6.disabled = true;

            letra1P6.style = 'border: solid #237A57;';
            letra2P6.style = 'border: solid #237A57;';
            letra3P6.style = 'border: solid #237A57;';
            letra1P10.style = 'border: solid #237A57;';
            letra4P6.style = 'border: solid #237A57;';
        }
        let l1_6 = document.getElementById('letra1P6')
        if (l1_6 === document.activeElement) {
            if (letra1P6.value.match(interval)) {
                document.getElementById("letra2P6").focus()
            }
        }

        let l2_6 = document.getElementById('letra2P6')
        if (l2_6 === document.activeElement) {
            if (letra2P6.value.match(interval)) {
                document.getElementById("letra3P6").focus()
            }
        }

        let l3_6 = document.getElementById('letra3P6')
        if (l3_6 === document.activeElement) {
            if (letra3P6.value.match(interval)) {
                document.getElementById("letra1P10").focus()
            }
        }
        let l4_6 = document.getElementById('letra1P10')
        if (l4_6 === document.activeElement) {
            if (letra1P10.value.match(interval)) {
                document.getElementById("letra4P6").focus()
            }
        }
    }
    // FIM PALAVRA 6 \\

    else if (num == 7) {
        var ZERAFAEL = (letra4P10.value + letra1P7.value + letra2P7.value + letra3P7.value + letra4P7.value + letra5P7.value + letra6P7.value + letra7P7.value).toUpperCase();
        if (ZERAFAEL == 'ZERAFAEL') {
            letra4P10.disabled = true;
            letra1P7.disabled = true;
            letra2P7.disabled = true;
            letra3P7.disabled = true;
            letra4P7.disabled = true;
            letra5P7.disabled = true;
            letra6P7.disabled = true;
            letra7P7.disabled = true;

            letra4P10.style = 'border: solid #237A57;';
            letra1P7.style = 'border: solid #237A57;';
            letra2P7.style = 'border: solid #237A57;';
            letra3P7.style = 'border: solid #237A57;';
            letra4P7.style = 'border: solid #237A57;';
            letra5P7.style = 'border: solid #237A57;';
            letra6P7.style = 'border: solid #237A57;';
            letra7P7.style = 'border: solid #237A57;';
        }
        let l1_7 = document.getElementById('letra4P10')
        if (l1_7 === document.activeElement) {
            if (letra4P10.value.match(interval)) {
                document.getElementById("letra1P7").focus()
            }
        }

        let l2_7 = document.getElementById('letra1P7')
        if (l2_7 === document.activeElement) {
            if (letra1P7.value.match(interval)) {
                document.getElementById("letra2P7").focus()
            }
        }

        let l3_7 = document.getElementById('letra2P7')
        if (l3_7 === document.activeElement) {
            if (letra2P7.value.match(interval)) {
                document.getElementById("letra3P7").focus()
            }
        }
        let l4_7 = document.getElementById('letra3P7')
        if (l4_7 === document.activeElement) {
            if (letra3P7.value.match(interval)) {
                document.getElementById("letra4P7").focus()
            }
        }

        let l5_7 = document.getElementById('letra4P7')
        if (l5_7 === document.activeElement) {
            if (letra4P7.value.match(interval)) {
                document.getElementById("letra5P7").focus()
            }
        }
        let l6_7 = document.getElementById('letra5P7')
        if (l6_7 === document.activeElement) {
            if (letra5P7.value.match(interval)) {
                document.getElementById("letra6P7").focus()
            }
        }
        let l7_7 = document.getElementById('letra6P7')
        if (l7_7 === document.activeElement) {
            if (letra6P7.value.match(interval)) {
                document.getElementById("letra7P7").focus()
            }
        }
    }
    // FIM PALAVRA 7 \\

    else if (num == 8) {
        var ABEL = (letra1P8.value + letra2P8.value + letra3P8.value + letra4P8.value).toUpperCase();
        if (ABEL == 'ABEL') {
            letra1P8.disabled = true;
            letra2P8.disabled = true;
            letra3P8.disabled = true;
            letra4P8.disabled = true;

            letra1P8.style = 'border: solid #237A57;';
            letra2P8.style = 'border: solid #237A57;';
            letra3P8.style = 'border: solid #237A57;';
            letra4P8.style = 'border: solid #237A57;';
        }
        let l1_8 = document.getElementById('letra1P8')
        if (l1_8 === document.activeElement) {
            if (letra1P8.value.match(interval)) {
                document.getElementById("letra2P8").focus()
            }
        }

        let l2_8 = document.getElementById('letra2P8')
        if (l2_8 === document.activeElement) {
            if (letra2P8.value.match(interval)) {
                document.getElementById("letra3P8").focus()
            }
        }

        let l3_8 = document.getElementById('letra3P8')
        if (l3_8 === document.activeElement) {
            if (letra3P8.value.match(interval)) {
                document.getElementById("letra4P8").focus()
            }
        }
    }
    // FIM PALAVRA 8 \\


    else if (num == 9) {
        var ADRIANO = (letra1P8.value + letra1P9.value + letra2P9.value  + letra4P2.value  + letra3P9.value  + letra2P4.value + letra4P9.value).toUpperCase();
        if (ADRIANO == 'ADRIANO') {
            letra1P8.disabled = true;
            letra1P9.disabled = true;
            letra2P9.disabled = true;
            letra4P2.disabled = true;
            letra3P9.disabled = true;
            letra2P4.disabled = true;
            letra4P9.disabled = true;

            letra1P8.style = 'border: solid #237A57;';
            letra1P9.style = 'border: solid #237A57;';
            letra2P9.style = 'border: solid #237A57;';
            letra4P2.style = 'border: solid #237A57;';
            letra3P9.style = 'border: solid #237A57;';
            letra2P4.style = 'border: solid #237A57;';
            letra4P9.style = 'border: solid #237A57;';
        }
        let l1_9 = document.getElementById('letra1P8')
        if (l1_9 === document.activeElement) {
            if (letra1P8.value.match(interval)) {
                document.getElementById("letra1P9").focus()
            }
        }

        let l2_9 = document.getElementById('letra1P9')
        if (l2_9 === document.activeElement) {
            if (letra1P9.value.match(interval)) {
                document.getElementById("letra2P9").focus()
            }
        }

        let l3_9 = document.getElementById('letra2P9')
        if (l3_9 === document.activeElement) {
            if (letra2P9.value.match(interval)) {
                document.getElementById("letra4P2").focus()
            }
        }
        let l4_9 = document.getElementById('letra4P2')
        if (l4_9 === document.activeElement) {
            if (letra4P2.value.match(interval)) {
                document.getElementById("letra3P9").focus()
            }
        }

        let l5_9 = document.getElementById('letra3P9')
        if (l5_9 === document.activeElement) {
            if (letra3P9.value.match(interval)) {
                document.getElementById("letra2P4").focus()
            }
        }
        let l6_9 = document.getElementById('letra2P4')
        if (l6_9 === document.activeElement) {
            if (letra2P4.value.match(interval)) {
                document.getElementById("letra4P9").focus()
            }
        }
    }
    // FIM PALAVRA 9 \\

    else if (num == 10) {
        var GOMEZ = (letra1P10.value + letra2P10.value + letra3P10.value + letra3P8.value + letra4P10.value).toUpperCase();
        if (GOMEZ == 'GOMEZ') {
            letra1P10.disabled = true;
            letra2P10.disabled = true;
            letra3P10.disabled = true;
            letra3P8.disabled = true;
            letra4P10.disabled = true;

            letra1P10.style = 'border: solid #237A57;';
            letra2P10.style = 'border: solid #237A57;';
            letra3P10.style = 'border: solid #237A57;';
            letra3P8.style = 'border: solid #237A57;';
            letra4P10.style = 'border: solid #237A57;';
        }
        let l1_10 = document.getElementById('letra1P10')
        if (l1_10 === document.activeElement) {
            if (letra1P10.value.match(interval)) {
                document.getElementById("letra2P10").focus()
            }
        }

        let l2_10 = document.getElementById('letra2P10')
        if (l2_10 === document.activeElement) {
            if (letra2P10.value.match(interval)) {
                document.getElementById("letra3P10").focus()
            }
        }

        let l3_10 = document.getElementById('letra3P10')
        if (l3_10 === document.activeElement) {
            if (letra3P10.value.match(interval)) {
                document.getElementById("letra3P8").focus()
            }
        }
        let l4_10 = document.getElementById('letra3P8')
        if (l4_10 === document.activeElement) {
            if (letra3P8.value.match(interval)) {
                document.getElementById("letra4P10").focus()
            }
        }
    }
    // FIM PALAVRA 10 \\

    else if (num == 11) {
        var WEVERTON = (letra1P11.value + letra6P7.value + letra2P11.value + letra3P11.value + letra4P11.value + letra5P11.value + letra6P11.value + letra7P11.value).toUpperCase();
        if (WEVERTON == 'WEVERTON') {
            letra1P11.disabled = true;
            letra6P7.disabled = true;
            letra2P11.disabled = true;
            letra3P11.disabled = true;
            letra4P11.disabled = true;
            letra5P11.disabled = true;
            letra6P11.disabled = true;
            letra7P11.disabled = true;

            letra1P11.style = 'border: solid #237A57;';
            letra6P7.style = 'border: solid #237A57;';
            letra2P11.style = 'border: solid #237A57;';
            letra3P11.style = 'border: solid #237A57;';
            letra4P11.style = 'border: solid #237A57;';
            letra5P11.style = 'border: solid #237A57;';
            letra6P11.style = 'border: solid #237A57;';
            letra7P11.style = 'border: solid #237A57;';
        }
        let l1_11 = document.getElementById('letra1P11')
        if (l1_11 === document.activeElement) {
            if (letra1P11.value.match(interval)) {
                document.getElementById("letra6P7").focus()
            }
        }

        let l2_11 = document.getElementById('letra6P7')
        if (l2_11 === document.activeElement) {
            if (letra6P7.value.match(interval)) {
                document.getElementById("letra2P11").focus()
            }
        }

        let l3_11 = document.getElementById('letra2P11')
        if (l3_11 === document.activeElement) {
            if (letra2P11.value.match(interval)) {
                document.getElementById("letra3P11").focus()
            }
        }
        let l4_11 = document.getElementById('letra3P11')
        if (l4_11 === document.activeElement) {
            if (letra3P11.value.match(interval)) {
                document.getElementById("letra4P11").focus()
            }
        }

        let l5_11 = document.getElementById('letra4P11')
        if (l5_11 === document.activeElement) {
            if (letra4P11.value.match(interval)) {
                document.getElementById("letra5P11").focus()
            }
        }

        let l6_11 = document.getElementById('letra5P11')
        if (l6_11 === document.activeElement) {
            if (letra5P11.value.match(interval)) {
                document.getElementById("letra6P11").focus()
            }
        }
        let l7_11 = document.getElementById('letra6P11')
        if (l7_11 === document.activeElement) {
            if (letra6P11.value.match(interval)) {
                document.getElementById("letra7P11").focus()
            }
        }
    }
    // FIM PALAVRA 11 \\

    else if (num == 12) {
        var VINA = (letra1P12.value + letra2P12.value + letra3P12.value + letra4P6.value).toUpperCase();
        if (VINA == 'VINA') {
            letra1P12.disabled = true;
            letra2P12.disabled = true;
            letra3P12.disabled = true;
            letra4P6.disabled = true;

            letra1P12.style = 'border: solid #237A57;';
            letra2P12.style = 'border: solid #237A57;';
            letra3P12.style = 'border: solid #237A57;';
            letra4P6.style = 'border: solid #237A57;';
        }
        let l1_12 = document.getElementById('letra1P12')
        if (l1_12 === document.activeElement) {
            if (letra1P12.value.match(interval)) {
                document.getElementById("letra2P12").focus()
            }
        }

        let l2_12 = document.getElementById('letra2P12')
        if (l2_12 === document.activeElement) {
            if (letra2P12.value.match(interval)) {
                document.getElementById("letra3P12").focus()
            }
        }

        let l3_12 = document.getElementById('letra3P12')
        if (l3_12 === document.activeElement) {
            if (letra3P12.value.match(interval)) {
                document.getElementById("letra4P6").focus()
            }
        }
    }
}
    // FIM PALAVRA 12 \\