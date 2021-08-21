//função para totalizar valor de assinatura mensal
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

function validaLoginSenha() {
    var vLogin = document.getElementById("login").value;
    var vSenha = document.getElementById("senha").value;
    var vCredValidas = '{"user":"Usuario","pass":"Abc$123"}';

    var objCred = JSON.parse(vCredValidas);

    if(vLogin==objCred.user && vSenha==objCred.pass){
        return true;
    } else {
        return false;
    }
}

function validar_tudo() {
    if(validaLoginSenha()){
        document.getElementById("butassin").disabled = false;
        return true;
    } else {
        alert(" Usuário ou senha inválidos.\n Usuário: Usuario / Senha: Abc$123 ");
        return false;
    }
}

function fContador() {
    var vData = new Date();
    var vPContador = document.getElementById("pContador");
    var vCont = 0;

    setInterval(function () {vPContador.innerHTML = vData + ' ' + vCont++;}, 1000);

}