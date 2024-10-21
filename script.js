let pacientesFila = [];
let opcaoEscolhida;

do {
    let menu = 'Fila de espera:\n';

    if (pacientesFila.length === 0) {
        menu += 'Nenhum paciente na fila.\n';
    } else {
        for (let i = 0; i < pacientesFila.length; i++) {
            menu += `${i + 1}º ${pacientesFila[i]}\n`;
        }
    }

    menu += '\nEscolha uma opção:\n';
    menu += '1 - Novo paciente\n';
    menu += '2 - Consultar paciente\n';
    menu += '3 - Sair\n';

    opcaoEscolhida = prompt(menu);

    switch (opcaoEscolhida) {
        case '1':
            let novoPaciente = prompt('Digite o nome do novo paciente:');
            if (novoPaciente) {
                pacientesFila.push(novoPaciente);
                alert(`${novoPaciente} foi adicionado à fila.`);
            } else {
                alert('Nome inválido.');
            }
            break;

        case '2':
            if (pacientesFila.length === 0) {
                alert('Não há pacientes na fila.');
            } else {
                let pacienteConsultado = pacientesFila.shift();
                alert(`Paciente consultado: ${pacienteConsultado}`);
            }
            break;

        case '3':
            alert('Programa encerrado.');
            break;

        default:
            alert('Opção inválida!');
            break;
    }
} while (opcaoEscolhida !== '3');
