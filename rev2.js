let salario, desconto, salarioLiquido
     salario = Number(prompt("Digite o valor do salário:"))
     desconto = Number(prompt("Digite o valor do desconto:"))
calculaDescontoSalario()
function calculaDescontoSalario(sal, desc){
    sal = salario
    desc = desconto
    salarioLiquido = sal - desc
    alert("Salário Líquido: R$" + salarioLiquido)
}