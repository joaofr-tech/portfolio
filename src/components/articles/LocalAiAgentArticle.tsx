import CodeBlock from './CodeBlock'

export default function LocalAiAgentArticle() {
  return (
    <div className="artigo-page-content">
      <p className="artigo-lead">
      </p>

      <p>
        Primeiro, precisaremos do Ollama, pense nele como um GitHub de modelos de IA. 
      </p>
      <p>
        Link para download do Ollama:
        <br />
        <a
          href="https://ollama.com/download"
          target="_blank"
          rel="noopener noreferrer"
          className="artigo-link-externo"
        >
          <span className="material-symbols-outlined" aria-hidden="true">link</span>
          <span>https://ollama.com/download</span>
          <span className="material-symbols-outlined link-icon" aria-hidden="true">open_in_new</span>
        </a>
      </p>
      <p>
        Preste atenção para escolher um modelo compatível com as especificações do seu computador, já que tudo roda localmente e vai consumir CPU, RAM e GPU da sua máquina. O segredo é encontrar o equilíbrio: não escolher algo pesado demais que trave tudo, nem leve demais a ponto de desperdiçar processamento. Vale lembrar que a quantidade de parâmetros dita esse peso, quanto mais parâmetros, mais recursos são exigidos.
      </p>
      <p>
        Para descobrir a melhor opção, basta jogar a configuração do seu PC em um chat de IA e perguntar qual modelo do Ollama é o ideal. Se quiser pular essa etapa, um modelo de <strong>4B de parâmetros</strong> (como o Qwen 3.5 4B) costuma rodar liso na maioria dos setups — a não ser que você tenha um supercomputador (aí dá para buscar modelos de ponta) ou uma máquina do século 30.
      </p>

      <p>
        Com o Ollama instalado, baixe o modelo escolhido via terminal:
      </p>

      <CodeBlock language="Bash" code="ollama pull qwen3.5:4b" />

      <p>
        Para listar os modelos já instalados:
      </p>

      <CodeBlock language="Bash" code="ollama list" />

      <p>
        E para rodar diretamente:
      </p>

      <CodeBlock language="Bash" code="ollama run qwen3.5:4b" />

      <p>
        Indo um passo adiante, vamos usar esse modelo local como motor para criar nosso próprio agente.
      </p>

      <h2>Mas afinal, o que é um agente?</h2>

      <p>
        Basicamente, a combinação de <strong>modelo + system prompt + tools</strong>:
      </p>

      <ul className="artigo-lista">
        <li>
          <strong>Modelo:</strong> o que configuramos acima;
        </li>
        <li>
          <strong>System prompt:</strong> a persona e as instruções que definem como ele deve agir e qual é o seu propósito;
        </li>
        <li>
          <strong>Tools:</strong> funções de código que o modelo tem permissão de acionar para executar tarefas.
        </li>
      </ul>

      <p>
        Para fechar a estrutura, precisamos manter o <strong>histórico</strong> de mensagens (usando um simples <em>array</em>) e rodar um loop <code>while</code> no terminal para garantir uma conversa contínua.
      </p>

      <p>
        Com isso, você tem um agente 100% funcional rodando localmente.
      </p>

      <h2>Código fonte do projeto</h2>

      <p>
        A implementação completa do código está no meu GitHub:
        <br />
        <a
          href="https://github.com/joaofr-tech/local-ai-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="artigo-link-externo"
        >
          <span className="material-symbols-outlined" aria-hidden="true">link</span>
          <span>https://github.com/joaofr-tech/local-ai-agent</span>
          <span className="material-symbols-outlined link-icon" aria-hidden="true">open_in_new</span>
        </a>
      </p>
    </div>
  )
}
