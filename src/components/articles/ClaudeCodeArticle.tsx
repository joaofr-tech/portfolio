import CodeBlock from './CodeBlock'

export default function ClaudeCodeArticle() {
  const codeCommand = 'Remove-Item -Recurse -Force "$env:USERPROFILE\\.claude" -ErrorAction SilentlyContinue'

  return (
    <div className="artigo-page-content">
      <p className="artigo-lead">
        Este artigo é um passo a passo explicando como fiz para rodar o Claude Code de graça. Vejo muita gente comentando sobre isso lá fora, mas quase ninguém no Brasil, então decidi escrever para divulgar essa possibilidade. O README do próprio repositório já traz um tutorial detalhado, mas como enfrentei alguns contratempos no caminho, vou mostrar também como resolvi cada um.
      </p>

      <p>
        Primeiro, acesse o repositório do projeto:
        <br />
        <a
          href="https://github.com/Alishahryar1/free-claude-code"
          target="_blank"
          rel="noopener noreferrer"
          className="artigo-link-externo"
        >
          <span className="material-symbols-outlined" aria-hidden="true">link</span>
          <span>https://github.com/Alishahryar1/free-claude-code</span>
          <span className="material-symbols-outlined link-icon" aria-hidden="true">open_in_new</span>
        </a>
      </p>

      <p>
        Siga os <strong>passos 1 e 2</strong> da documentação para realizar a instalação.
      </p>

      <p>
        Já no <strong>passo 3</strong>, eles recomendam usar a API da NVIDIA, mas preferi seguir com o OpenRouter. Se quiser fazer o mesmo:
      </p>

      <ol className="artigo-lista">
        <li>
          Acesse{' '}
          <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="artigo-link-inline">
            openrouter.ai
          </a>
          ;
        </li>
        <li>Crie sua conta e gere uma chave de API gratuita (leva menos de 5 minutos);</li>
        <li>Volte ao passo 3 da documentação e substitua a API da NVIDIA pela chave do OpenRouter;</li>
        <li>Siga o restante dos passos do README para finalizar.</li>
      </ol>

      <p>
        Feito isso, a ferramenta já estará pronta para uso sem custos.
      </p>

      <h2>O problema do cache (e como resolver)</h2>

      <p>
        Quero destacar esse ponto porque não encontrei ninguém comentando a respeito, nem sobre a causa, nem sobre a solução.
      </p>

      <p>
        Ao abrir o Claude Code, o login funcionava normalmente, mas bastava enviar qualquer prompt para estourar o seguinte erro:
      </p>

      <blockquote className="artigo-blockquote">
        <div className="blockquote-icon">
          <span className="material-symbols-outlined" aria-hidden="true">error_outline</span>
        </div>
        <p>
          <em>
            “There's an issue with the selected model (anthropic/open_router/qwen/qwen-2.5-coder-32b-instruct:free). It may not exist or you may not have access to it. Run /model to pick a different model.”
          </em>
        </p>
      </blockquote>

      <p>
        Quebrei a cabeça: mudei caminhos de API, ajustei as opções na UI de admin do Free Claude Code, mas nada resolvia. No fim, a culpa era do cache — o Claude Code salvava os dados da sessão atual em disco e mantinha preso um identificador de modelo inválido.
      </p>

      <p>
        A solução foi simples: limpar a pasta de configuração. No PowerShell, execute:
      </p>

      <CodeBlock language="PowerShell" code={codeCommand} />

      <p>
        Esse comando apaga a pasta oculta de dados locais onde o cache problemático ficou retido. Não precisa se preocupar em deletá-la: ela é recriada do zero, de forma limpa e automática, na próxima vez que você rodar o Claude Code.
      </p>

      <h2>Como o FCC (Free Claude Code) funciona por baixo dos panos?</h2>

      <p>
        Ele aproveita que o <em>harness</em> roda localmente na sua máquina e cria um proxy para interceptar a conexão. Assim, em vez de enviar os pacotes para a API oficial da Anthropic, ele redireciona a chamada para o provedor que você escolher — no meu caso, modelos gratuitos via OpenRouter.
      </p>

      <h2>E por que usar o OpenRouter?</h2>

      <p>
        Ele gerencia e faz o roteamento automático entre modelos gratuitos quando o limite de tokens de um deles se esgota. É um <em>trade-off</em>: a capacidade de raciocínio pode ser inferior à dos modelos <em>front-tier</em> proprietários, mas sai 100% de graça e entrega um limite de uso bem mais flexível.
      </p>
    </div>
  )
}
