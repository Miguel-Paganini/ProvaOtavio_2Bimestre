function gerarTabela() {
    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
   
    var tabela = document.getElementById('table');

    var tr = document.createElement('tr');
    
    var tdNome = document.createElement('td');
    tdNome.innerText = nome;
    
    var tdMatricula = document.createElement('td');
    tdMatricula.innerText = matricula;
    
    var tdNota1 = document.createElement('td');
    tdNota1.innerText = nota1;
    
    var tdNota2 = document.createElement('td');
    tdNota2.innerText = nota2;

    var tdMedia = document.createElement('td');
    tdMedia.innerText = (nota1 + nota2) / 2;

    var tdSituacao = document.createElement('td');
    if (tdMedia.innerText > 5) {
        tdSituacao.innerText = 'Aprovado'
    } else {
        tdSituacao.innerText = 'Reprovado'
    }

    tr.appendChild(tdNome);
    tr.appendChild(tdMatricula);
    tr.appendChild(tdNota1);
    tr.appendChild(tdNota2);
    tr.appendChild(tdMedia);
    tr.appendChild(tdSituacao);

    tabela.appendChild(tr);
}