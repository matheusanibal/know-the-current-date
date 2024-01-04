function zeroAEsquerda (num) {
    return num >=10 ? num : `0${num}`
}


function getDiaSemanaTexto (diaSemana){
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto 
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto 
        case 2:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto 
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto
        case 4:
                diaSemanaTexto = 'Quinta'
                return diaSemanaTexto 
        case 5:
                diaSemanaTexto = 'Sexta'
                return diaSemanaTexto   
        case 6:
                diaSemanaTexto = 'Sábado'
                return diaSemanaTexto                  
    }
}

function getMes (mes) {
    let mesnome;
    switch (mes) {
        case 0:
            mesnome = 'Janeiro'
            return mesnome
        case 1:
            mesnome = 'Fevereiro'
            return mesnome
        case 2:
            mesnome = 'Março'
            return mesnome
        case 3:
            mesnome = 'Abril'
            return mesnome
        case 4:
            mesnome = 'Maio'
            return mesnome
        case 5:
            mesnome = 'Junho'
            return mesnome
        case 6:
            mesnome = 'Julho'
            return mesnome
        case 7:
            mesnome = 'Agosto'
            return mesnome
        case 8:
            mesnome = 'Setembro'
            return mesnome
        case 9:
            mesnome = 'Outubro'
            return mesnome
        case 10:
            mesnome = 'Novembro'
            return mesnome
        case 11:
            mesnome = 'Dezembro'
            return mesnome

    }
}
const data = new Date();
let diaSemana = data.getDay();
let mes = data.getMonth();
const mesoficial = getMes(mes);
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
const dia_nome = diaSemanaTexto;
const dia_numero = diaSemana;
const ano = data.getFullYear();
const hora = zeroAEsquerda(data.getHours());
const minuto = zeroAEsquerda(data.getMinutes());
const segundos = zeroAEsquerda(data.getSeconds())
const h1 = document.getElementById
('data').innerHTML = `${dia_nome}, ${dia_numero} de ${mesoficial} de ${ano} ${hora}:${minuto}:${segundos}`