Back-end
Atividade Prática - Modelagem de objetos em Typescript

---

1. Crie uma classe Contador, que encapsule um valor usado para
   contagem de itens ou eventos. A classe deve oferecer métodos que
   devem:<br>
   a) Zerar;<br>
   b) Incrementar;<br>
   c) Retornar o valor do contador.<br>

---

2. Crie uma classe que modele uma bola:<br>
   a. Atributos<br>
   i. Cor<br>
   ii. Circunferência<br>
   iii. Material<br><br>
   b. Métodos<br>
   i. Trocar Cor<br>
   ii. Mostrar cor<br>

---

3. Crie uma classe para implementar uma conta corrente. A classe
   deve possuir os seguintes atributos:<br>
   a. Número da conta<br>
   b. Nome do correntista<br>
   c. Saldo<br><br>
   Os métodos são os seguintes:<br>
   a) Alterar nome<br>
   b) Deposito<br>
   c) Saque<br><br>
   No construtor, o saldo é opcional, com valor padrão zero e os
   demais atributos são obrigatórios. A conta não pode ficar com saldo
   negativo.

---

4. Crie uma classe para representar uma Calculadora. Esta classe
   deve conter um atributo que servirá para armazenar o histórico das
   operações e seus respectivos resultados.<br>
   a. Esta classe deve conter as operações de somar, multiplicar,
   dividir e diminuir.<br>
   b. Esta classe deve iniciar com o histórico vazio<br>
   c. Esta classe deve conter uma ação para visualizar o histórico.<br>

---

5. Faça um programa completo utilizando classes e métodos que:<br>
   a. Possua uma classe chamada BombaCombustivel, com no
   mínimo esses atributos:<br>
   i. tipoCombustivel.<br>
   ii. valorLitro<br>

iii. quantidadeCombustivel<br><br>
b. Possua no mínimo esses métodos:<br>
i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo<br>
ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.<br>
iii. alterarValor() – altera o valor do litro do combustível.<br>
iv. alterarCombustivel() – altera o tipo do combustível.<br>
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.<br>

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.<br>

---

6. Implemente uma classe chamada Carro com as seguintes
   propriedades:<br>
   a. Um veículo tem um certo consumo de combustível (medidos
   em km / litro) e uma certa quantidade de combustível no
   tanque.<br>
   b. O consumo é especificado no construtor e o nível de
   combustível inicial é 0.<br>
   c. Forneça um método andar() que simula o ato de dirigir o
   veículo por uma certa distância, reduzindo o nível de
   combustível no tanque de gasolina.<br>

d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque.
