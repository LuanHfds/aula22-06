function mostrarCampo() {
    const divConteudo = document.getElementById('conteudo');
    if (divConteudo) {
        divConteudo.style.borderLeftColor = "#27ae60";
        divConteudo.innerHTML = `
            <h2>🌾 O Espaço Rural (Campo)</h2>
            <img src="campo.jpeg" alt="Paisagem do Campo" class="imagem-tema">
            <p>O campo é caracterizado por áreas verdes, plantações, criação de animais e uma menor densidade de construções e pessoas.</p>
            <h3>Principais Características:</h3>
            <ul>
                <li><strong>Atividades Econômicas:</strong> Agricultura, pecuária, extrativismo e turismo rural (Setor Primário).</li>
                <li><strong>Estilo de Vida:</strong> Geralmente mais tranquilo, com maior contato com a natureza e menor poluição.</li>
                <li><strong>Importância:</strong> É do campo que sai a maior parte dos alimentos que consumimos e as matérias-primas para as indústrias.</li>
            </ul>
            <blockquote><em>"O campo alimenta a cidade."</em></blockquote>
        `;
    }
}

function mostrarCidade() {
    const divConteudo = document.getElementById('conteudo');
    if (divConteudo) {
        divConteudo.style.borderLeftColor = "#2980b9";
        divConteudo.innerHTML = `
            <h2>🏢 O Espaço Urbano (Cidade)</h2>
            <img src="cidade.jpeg" alt="Paisagem da Cidade" class="imagem-tema">
            <p>A cidade é caracterizada pela grande concentração de pessoas, habitações, comércios, indústrias e infraestrutura (como asfalto, saneamento e transporte).</p>
            <h3>Principais Características:</h3>
            <ul>
                <li><strong>Atividades Econômicas:</strong> Comércio, prestação de serviços, bancos e indústrias (Setores Secundário e Terciário).</li>
                <li><strong>Estilo de Vida:</strong> Ritmo mais acelerado, maior acesso a serviços de saúde, educação, cultura e lazer, porém com desafios como trânsito e poluição.</li>
                <li><strong>Importância:</strong> Concentra os centers de decisões políticas, avanços tecnológicos e processa os produtos vindos do campo.</li>
            </ul>
            <blockquote><em>"A cidade transforma o que o campo produz."</em></blockquote>
        `;
    }
}