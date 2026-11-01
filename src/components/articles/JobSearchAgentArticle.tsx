import CodeBlock from './CodeBlock'

export default function JobSearchAgentArticle() {
  return (
    <div className="artigo-page-content">
      <p className="artigo-lead">
        Tudo começou quando decidi seguir aquele conselho clássico de engenharia: <em>“se você quer aprender de verdade, crie uma solução para um problema real que você mesmo enfrenta”</em>.
      </p>

      <h2>O problema: a ineficiência da busca manual</h2>

      <p>
        Quem já procurou estágio na área de tecnologia sabe o quanto o processo manual é desgastante. Abrir dezenas de abas todos os dias, navegar por plataformas diferentes, ler descrições repetidas e filtrar requisitos que sequer batem com o turno da faculdade consome horas preciosas.
      </p>

      <p>
        Além de improdutivo, o processo manual é inconsistente: basta um dia mais corrido de provas ou trabalho para perder prazos de vagas concorridas.
      </p>

      <blockquote className="artigo-blockquote">
        <div className="blockquote-icon">
          <span className="material-symbols-outlined" aria-hidden="true">lightbulb</span>
        </div>
        <p>
          <strong>A meta era direta:</strong> construir um agente autônomo que fizesse a varredura contínua de vagas para mim diariamente, filtrasse apenas o que se encaixa no meu perfil e me notificasse com precisão.
        </p>
      </blockquote>

      <h2>v1: O primeiro protótipo (e os primeiros tropeços)</h2>

      <p>
        Na primeira versão, implementei um crawler simples que rodava de hora em hora e me enviava as vagas encontradas direto por e-mail. Embora o script básico funcionasse, o uso no dia a dia revelou três grandes gargalos:
      </p>

      <ol className="artigo-lista">
        <li>
          <strong>Critérios não determinísticos:</strong> os filtros de busca eram muito abertos. O resultado era uma enxurrada de notificações com vagas fora do meu perfil, requisitos incompatíveis ou turnos conflitantes com a faculdade.
        </li>
        <li>
          <strong>Falta de autonomia no boot:</strong> toda vez que eu ligava o computador pela manhã, precisava lembrar de abrir o terminal e rodar o script manualmente. Se eu esquecesse, nenhuma busca era feita.
        </li>
        <li>
          <strong>Fadiga de e-mails:</strong> ter que abrir e-mail por e-mail para checar links e me candidatar provou ser uma péssima experiência de usuário.
        </li>
      </ol>

      <h2>v2: Engenharia, Sistemas Operacionais e Observabilidade</h2>

      <p>
        A segunda versão foi um salto de maturidade no projeto, conectando o que eu estava aprendendo na faculdade com a prática de engenharia de software:
      </p>

      <ul className="artigo-lista">
        <li>
          <strong>Critérios determinísticos e suíte de testes:</strong> criei regras rígidas de validação (turno, localização, senioridade e stack) acompanhadas de testes automatizados para garantir que nenhuma oportunidade fora do escopo passasse pelo funil.
        </li>
        <li>
          <strong>Inicialização nativa com o SO:</strong> coincidentemente, na época eu estava cursando a disciplina de Sistemas Operacionais e estudando o ciclo de vida de processos em segundo plano. Pensei: <em>“por que não colocar o agente para subir automaticamente junto com o sistema operacional?”</em> Configurei a inicialização automática via Windows Task Scheduler. O agente passou a rodar em background assim que eu fazia login, sem intervenção manual.
        </li>
        <li>
          <strong>Dashboard centralizado:</strong> aposentei a dependência exclusiva da caixa de entrada e criei uma interface web para centralizar todas as vagas capturadas em uma única visualização.
        </li>
        <li>
          <strong>Observabilidade mínima:</strong> se o crawler roda 100% silencioso em background, como ter certeza de que ele continua saudável e executando? Adicionei um módulo de telemetria no dashboard que registra cada ciclo de busca por hora, indicando status da execução, erros eventuais e quantidade de vagas capturadas.
        </li>
      </ul>

      <h2>v3: Refinamento de cadência e funil de candidatura</h2>

      <p>
        Com a base funcional e estável, o foco passou a ser a experiência de uso:
      </p>

      <p>
        Percebi rapidamente que receber notificações de hora em hora não fazia sentido para uma rotina humana — ninguém se inscreve em vagas 24 horas por dia. Ajustei a regra de notificação: em vez de disparar a cada varredura, o sistema passou a me avisar apenas quando acumulasse um lote de <strong>X novas vagas qualificadas</strong>.
      </p>

      <p>
        Além disso, estruturei um fluxo de status dentro do dashboard. Ao clicar para me candidatar a uma vaga, seu status mudava automaticamente para <strong>“Candidatada”</strong>, evitando candidaturas duplicadas e dando clareza sobre o andamento do funil.
      </p>

      <h2>v4: O produto maduro, métricas e ciclo de vida</h2>

      <p>
        A versão atual tornou o processo leve, consistente e rápido de operar. Implementei a gestão do ciclo de vida completo da vaga: o sistema verifica periodicamente links expirados ou processos encerrados e os remove da base ativa, mantendo o feed sempre limpo.
      </p>

      <p>
        Hoje a plataforma está dividida nas seguintes visões estratégicas:
      </p>

      <ul className="artigo-lista">
        <li>
          <strong>Meta do Dia:</strong> sugere 3 vagas prioritárias diariamente para manter a consistência de candidaturas sem sobrecarregar a rotina.
        </li>
        <li>
          <strong>Candidaturas:</strong> gerencia as vagas em três estados — <em>Em andamento</em> (em processo de aplicação), <em>Aplicadas</em> (candidatura concluída) e <em>Salvas</em> (oportunidades especiais para preparar uma carta de apresentação mais detalhada).
        </li>
        <li>
          <strong>Histórico de Buscas:</strong> tela de auditoria do crawler, mostrando o log de execuções horárias, taxa de sucesso e volume de vagas encontradas em cada rodada.
        </li>
        <li>
          <strong>Parâmetros de Busca:</strong> painel onde configuro dinamicamente os critérios de varredura — turno de estudo (ex.: matutino para conciliar com estágio à tarde), cidades/estados de interesse, período da faculdade e áreas de foco (Engenharia de Software, Dados, IA).
        </li>
        <li>
          <strong>Indicadores &amp; KPIs:</strong> métricas que permitem bater o olho e diagnosticar tanto a saúde do bot quanto a minha própria cadência:
          <ol style={{ marginTop: '8px', paddingLeft: '20px' }}>
            <li>Tempo médio gasto por candidatura;</li>
            <li>Total acumulado de vagas aplicadas;</li>
            <li>Gráfico de histórico quinzenal com o volume diário de aplicações;</li>
            <li>Distribuição de vagas por área tecnológica;</li>
            <li>Distribuição por modelo de trabalho (Remoto, Híbrido e Presencial);</li>
            <li>Métrica de vagas encerradas sem candidatura.</li>
          </ol>
        </li>
      </ul>

      <h2>Próximos passos (v5)</h2>

      <p>
        O projeto já transformou completamente a minha rotina, mas as próximas iterações já estão mapeadas:
      </p>

      <ol className="artigo-lista">
        <li>
          <strong>Infraestrutura 24/7 na nuvem:</strong> migrar o crawler de um processo local no Windows para uma VPS / container cloud, rodando ininterruptamente sem depender da máquina ligada.
        </li>
        <li>
          <strong>Plataforma multiusuário:</strong> abstrair as regras de busca para que outros colegas estudantes também possam cadastrar seus perfis e receber suas vagas personalizadas.
        </li>
        <li>
          <strong>Automação assistida de candidatura:</strong> avançar para preenchimento inteligente de formulários iniciais via scripts controlados, reduzindo ainda mais o tempo gasto em etapas burocráticas.
        </li>
      </ol>

      <h2>Código fonte e arquitetura</h2>

      <p>
        O repositório do projeto com o código e arquitetura detalhada está disponível no meu GitHub:
        <br />
        <a
          href="https://github.com/joaofr-tech/estagio-bot-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="artigo-link-externo"
        >
          <span className="material-symbols-outlined" aria-hidden="true">link</span>
          <span>https://github.com/joaofr-tech/estagio-bot-ai</span>
          <span className="material-symbols-outlined link-icon" aria-hidden="true">open_in_new</span>
        </a>
      </p>
    </div>
  )
}
