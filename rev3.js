let salario, desconto, salarioLiquido
     salario = Number(prompt("Digite o valor do salário:"))
     desconto = Number(prompt("Digite o valor do desconto:"))
     comFunc = Number(prompt("Digite o valor da comissão:"))
calculaDescontoSalario(salario, desconto)
alert(calculaSalComissão(comFunc))
function calculaDescontoSalario(sal, desc){
    sal = salario
    desc = desconto
    salarioLiquido = sal - desc
    return salarioLiquido
}

function calculaSalComissão(comissao){
    return salarioLiquido + comissao

}