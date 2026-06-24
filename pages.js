/* ================================================================
   JUNIOR+ — PAGES 2026
   All route content — Bento · Kinetic · Premium
   ================================================================ */
'use strict';

const IC = {
  person:`<svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="16" cy="10" r="6"/><path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke-linecap="round"/></svg>`,
  hex:   `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke-linejoin="round"/><path d="M16 4V16M4 10L16 16M28 10L16 16"/></svg>`,
  screen:`<svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="4" y="6" width="24" height="18" rx="2"/><path d="M4 12H28"/><path d="M10 18h4M10 21h8" stroke-linecap="round"/></svg>`,
  chart: `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="4" width="26" height="18" rx="2"/><path d="M10 28h12M16 22v6" stroke-linecap="round"/><path d="M13 13l4-4 2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  star:  `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M16 4l3.09 6.26L26 11.27l-5 4.87 1.18 6.86L16 20l-6.18 3-1-6.86L4 11.27l6.91-1L16 4z" stroke-linejoin="round"/></svg>`,
  arrow:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7v10" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

/* marquee HTML — reused */
const MARQUEE = `
<div class="marquee-strip" aria-hidden="true">
  <div class="marquee-inner">
    <span class="marquee-item">Coaching Individual <span>◆</span></span>
    <span class="marquee-item">Mentoria Profissional <span>◆</span></span>
    <span class="marquee-item">Formações & Workshops <span>◆</span></span>
    <span class="marquee-item">Plataforma Online <span>◆</span></span>
    <span class="marquee-item">Desenvolvimento Pessoal <span>◆</span></span>
    <span class="marquee-item">Crescimento Académico <span>◆</span></span>
    <span class="marquee-item">Liderança <span>◆</span></span>
    <span class="marquee-item">Mindset <span>◆</span></span>
    <span class="marquee-item">Coaching Individual <span>◆</span></span>
    <span class="marquee-item">Mentoria Profissional <span>◆</span></span>
    <span class="marquee-item">Formações & Workshops <span>◆</span></span>
    <span class="marquee-item">Plataforma Online <span>◆</span></span>
    <span class="marquee-item">Desenvolvimento Pessoal <span>◆</span></span>
    <span class="marquee-item">Crescimento Académico <span>◆</span></span>
    <span class="marquee-item">Liderança <span>◆</span></span>
    <span class="marquee-item">Mindset <span>◆</span></span>
  </div>
</div>`;

/* ================================================================
   HOME — /
   ================================================================ */
window.PAGE_HOME = `
<section class="hero" aria-label="Secção principal">
  <div class="hero-grid-lines" aria-hidden="true"></div>

  <div class="hero-content">
    <div class="eyebrow ha" aria-label="Empresa de desenvolvimento pessoal">
      <span class="eyebrow-dot" aria-hidden="true"></span>
      Desenvolvimento Holístico &nbsp;·&nbsp; Portugal &nbsp;·&nbsp; 2026
    </div>

    <h1 class="hero-h1 ha" data-d="1">
      O teu nível<br/>
      <em class="line-em">mais alto</em><br/>
      começa aqui.
    </h1>

    <p class="hero-sub ha" data-d="2">
      Profissional. Pessoal. Académico.<br/>
      Três dimensões de crescimento.<br/>Uma transformação completa.
    </p>

    <div class="hero-actions ha" data-d="3">
      <a href="#/contacto" data-link class="btn btn-gold" id="heroCta">
        <span>Inicia a Tua Jornada</span>
        <span class="arr">→</span>
      </a>
      <a href="#/sobre" data-link class="btn btn-outline">Saber Mais</a>
    </div>
  </div>

  <div class="hero-stats" aria-label="Resultados">
    <div class="h-stat ha g-border" data-d="2">
      <div class="h-stat-n">500<sup>+</sup></div>
      <div class="h-stat-l">Clientes Transformados</div>
    </div>
    <div class="h-stat ha g-border" data-d="3">
      <div class="h-stat-n">95<sup>%</sup></div>
      <div class="h-stat-l">Taxa de Satisfação</div>
    </div>
    <div class="h-stat ha g-border" data-d="4">
      <div class="h-stat-n">8<sup>anos</sup></div>
      <div class="h-stat-l">De Experiência</div>
    </div>
  </div>

  <div class="hero-scroll" aria-hidden="true">
    <div class="s-line"></div>
    <span>scroll</span>
  </div>
</section>

${MARQUEE}

<!-- BENTO SERVICES -->
<section style="padding-block:var(--py)" aria-label="Os nossos serviços">
  <div class="container">
    <div style="display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:2rem;margin-bottom:clamp(2.5rem,5vw,4rem);">
      <div>
        <p class="tag rev" style="margin-bottom:.75rem">— O Que Fazemos</p>
        <h2 class="display rev">
          Quatro pilares.<br/><em>Uma evolução completa.</em>
        </h2>
      </div>
      <a href="#/servicos" data-link class="btn btn-outline rev" style="flex-shrink:0">
        Ver todos →
      </a>
    </div>

    <div class="bento rev">
      <!-- Coaching — large left -->
      <article class="bento-card bc-1 bc-wide bc-tall" aria-label="Coaching Individual">
        <div class="b-num">01</div>
        <div class="b-icon">${IC.person}</div>
        <h3 class="b-h">Coaching Individual</h3>
        <p class="b-p">Sessões 1:1 desenhadas ao detalhe para desbloqueares o teu máximo. Quebramos padrões, definimos metas reais e construímos a tua melhor versão — com rigor e humanidade.</p>
        <div class="b-tags">
          <span class="b-tag b-tag-g">Vida</span>
          <span class="b-tag b-tag-g">Carreira</span>
          <span class="b-tag b-tag-g">Mindset</span>
        </div>
        <div class="b-arrow" aria-hidden="true">${IC.arrow}</div>
      </article>

      <!-- Stat card -->
      <article class="bento-card bc-2 bc-narrow bc-tall" aria-label="Taxa de satisfação 95%">
        <div class="b-num">Resultados</div>
        <div class="b-big-num" data-target="95">0<sup>%</sup></div>
        <p class="b-p">dos nossos clientes reportam mudanças visíveis no primeiro mês.</p>
        <div class="b-tags">
          <span class="b-tag b-tag-v">Comprovado</span>
        </div>
      </article>

      <!-- Mentoria -->
      <article class="bento-card bc-2 bc-third" aria-label="Mentoria Profissional">
        <div class="b-num">02</div>
        <div class="b-icon b-icon-v">${IC.hex}</div>
        <h3 class="b-h">Mentoria Profissional</h3>
        <p class="b-p">Para empreendedores e líderes. Da ideia ao mercado, com estratégia real.</p>
        <div class="b-arrow" aria-hidden="true">${IC.arrow}</div>
      </article>

      <!-- Formações -->
      <article class="bento-card bc-3 bc-third" aria-label="Formações">
        <div class="b-num">03</div>
        <div class="b-icon b-icon-c">${IC.screen}</div>
        <h3 class="b-h">Formações & Workshops</h3>
        <p class="b-p">Programas intensivos que criam mudanças reais em semanas.</p>
        <div class="b-arrow" aria-hidden="true">${IC.arrow}</div>
      </article>

      <!-- Plataforma -->
      <article class="bento-card bc-4 bc-third" aria-label="Plataforma Online">
        <div class="b-num">04</div>
        <div class="b-icon">${IC.chart}</div>
        <h3 class="b-h">Plataforma Online</h3>
        <p class="b-p">Acesso 24/7. Cursos, comunidade e ferramentas no teu ritmo.</p>
        <div class="b-arrow" aria-hidden="true">${IC.arrow}</div>
      </article>
    </div>
  </div>
</section>

<!-- BIG CTA -->
<div class="big-cta">
  <div class="container">
    <h2 class="big-cta-title rev">
      Pronto para ser<br/>
      <em>quem podes ser?</em>
    </h2>
    <p class="big-cta-sub rev">A primeira sessão é gratuita. Sem compromisso. Basta um passo.</p>
    <div class="big-cta-actions rev">
      <a href="#/contacto" data-link class="btn btn-gold">
        <span>Sessão Gratuita</span>
        <span class="arr">→</span>
      </a>
      <a href="#/historias" data-link class="btn btn-outline">Ver Histórias Reais</a>
    </div>
  </div>
</div>
`;

/* ================================================================
   SOBRE — /sobre
   ================================================================ */
window.PAGE_SOBRE = `
<div class="page-wrap">
  <div class="container">

    <div class="sobre-hero">
      <div>
        <p class="tag rev" style="margin-bottom:.75rem">— Sobre Nós</p>
        <h1 class="display rev" style="margin-bottom:2rem">
          Nascemos para quem<br/><em>recusa o ordinário.</em>
        </h1>
        <div class="sobre-text rev">
          <p>A <strong>Junior+</strong> surgiu de uma crença simples mas poderosa: toda a pessoa tem dentro de si uma versão superior que ainda não foi totalmente ativada.</p>
          <p>Não somos uma academia. Não somos só coaching. Somos o parceiro que te acompanha em cada dimensão da tua vida — com método, rigor e humanidade real.</p>
          <p>Trabalhamos com estudantes, profissionais e empreendedores. O que têm em comum? A recusa em aceitar menos do que o seu melhor.</p>
        </div>
      </div>

      <div class="sobre-panel rev-right g-border">
        <div class="panel-num" aria-hidden="true">"</div>
        <p class="panel-q">
          Não se trata de ser melhor do que os outros.<br/>
          Trata-se de ser melhor do que eras ontem.
        </p>
        <span class="panel-by">— Filosofia Junior+</span>
      </div>
    </div>

    ${MARQUEE}

    <div style="margin-top:var(--py)">
      <p class="tag rev" style="margin-bottom:.75rem">— Os Nossos Valores</p>
      <h2 class="display rev" style="margin-bottom:clamp(2.5rem,5vw,4rem)">
        O que nos define.<br/><em>O que te define a ti.</em>
      </h2>

      <div class="vals">
        <div class="val rev">
          <div class="val-em" aria-hidden="true">◆</div>
          <h3>Excelência</h3>
          <p>Cada detalhe importa. Fazemos sempre mais do que o esperado. Medíocre não é uma opção — nem para ti, nem para nós.</p>
        </div>
        <div class="val rev" data-d="1">
          <div class="val-em" aria-hidden="true">◈</div>
          <h3>Autenticidade</h3>
          <p>O teu plano é único porque tu és único. Não há receitas genéricas — há estratégias desenhadas para a tua realidade específica.</p>
        </div>
        <div class="val rev" data-d="2">
          <div class="val-em" aria-hidden="true">◉</div>
          <h3>Continuidade</h3>
          <p>Não desaparecemos após a sessão. O crescimento real acontece entre sessões, e estamos lá para isso — sempre.</p>
        </div>
        <div class="val rev" data-d="3">
          <div class="val-em" aria-hidden="true">◎</div>
          <h3>Impacto Real</h3>
          <p>Medimos o nosso sucesso pelo teu. Resultados visíveis, mensuráveis e duradouros. Não motivação temporária.</p>
        </div>
      </div>
    </div>

  </div>

  <div class="big-cta" style="margin-top:var(--py)">
    <div class="container">
      <h2 class="big-cta-title rev">
        Conhece-nos<br/><em>pessoalmente.</em>
      </h2>
      <p class="big-cta-sub rev">Uma conversa muda tudo. A primeira é sempre gratuita.</p>
      <div class="big-cta-actions rev">
        <a href="#/contacto" data-link class="btn btn-gold">
          <span>Marca uma Sessão</span>
          <span class="arr">→</span>
        </a>
        <a href="#/metodo" data-link class="btn btn-outline">Ver o Nosso Método</a>
      </div>
    </div>
  </div>
</div>
`;

/* ================================================================
   SERVIÇOS — /servicos
   ================================================================ */
window.PAGE_SERVICOS = `
<div class="page-wrap">
  <div class="container">
    <p class="tag rev" style="margin-bottom:.75rem">— O Que Fazemos</p>
    <h1 class="display rev" style="max-width:640px;margin-bottom:1.25rem">
      Quatro pilares.<br/><em>Uma evolução completa.</em>
    </h1>
    <p style="color:var(--txt-2);font-size:1.0625rem;line-height:1.8;max-width:520px;margin-bottom:clamp(3rem,6vw,5rem)" class="rev">
      Cada serviço foi desenhado para uma dimensão da tua vida. Juntos, formam o ecossistema de crescimento mais completo que podes ter.
    </p>

    <div class="bento rev">
      <article class="bento-card bc-1 bc-wide bc-tall" aria-label="Coaching Individual">
        <div class="b-num">01</div>
        <div class="b-icon">${IC.person}</div>
        <h3 class="b-h">Coaching Individual</h3>
        <p class="b-p">Sessões personalizadas 1:1. Identificamos padrões limitantes, definimos objetivos reais e construímos um plano à tua medida. Não há atalhos — há método e acompanhamento constante. Cada sessão é um passo deliberado na direção certa.</p>
        <div class="b-tags">
          <span class="b-tag b-tag-g">Vida</span>
          <span class="b-tag b-tag-g">Carreira</span>
          <span class="b-tag b-tag-g">Mindset</span>
          <span class="b-tag b-tag-g">Autoconhecimento</span>
        </div>
        <div class="b-arrow">${IC.arrow}</div>
      </article>

      <article class="bento-card bc-2 bc-narrow bc-tall" aria-label="Mentoria Profissional">
        <div class="b-num">02</div>
        <div class="b-icon b-icon-v">${IC.hex}</div>
        <h3 class="b-h">Mentoria Profissional</h3>
        <p class="b-p">Para empreendedores e profissionais que querem escalar. Aprende com quem já esteve no teu lugar — da ideia ao mercado, com estratégia e execução real. Decisões difíceis tornam-se claras.</p>
        <div class="b-tags">
          <span class="b-tag b-tag-v">Empreendedorismo</span>
          <span class="b-tag b-tag-v">Liderança</span>
          <span class="b-tag b-tag-v">Estratégia</span>
        </div>
        <div class="b-arrow">${IC.arrow}</div>
      </article>

      <article class="bento-card bc-3 bc-half" aria-label="Formações e Workshops">
        <div class="b-num">03</div>
        <div class="b-icon b-icon-c">${IC.screen}</div>
        <h3 class="b-h">Formações & Workshops</h3>
        <p class="b-p">Programas intensivos que geram mudanças reais rapidamente. Comunicação, produtividade, finanças pessoais, inteligência emocional — com certificado incluído.</p>
        <div class="b-tags">
          <span class="b-tag b-tag-c">Presencial</span>
          <span class="b-tag b-tag-c">Online</span>
          <span class="b-tag b-tag-c">Certificado</span>
        </div>
        <div class="b-arrow">${IC.arrow}</div>
      </article>

      <article class="bento-card bc-4 bc-half" aria-label="Plataforma Online">
        <div class="b-num">04</div>
        <div class="b-icon">${IC.chart}</div>
        <h3 class="b-h">Plataforma Online</h3>
        <p class="b-p">Acesso 24/7 a cursos, recursos e comunidade exclusiva. O teu crescimento não depende de horários. Aprende ao teu ritmo, em qualquer lugar do mundo.</p>
        <div class="b-tags">
          <span class="b-tag b-tag-g">Cursos</span>
          <span class="b-tag b-tag-g">Comunidade</span>
          <span class="b-tag b-tag-g">24/7</span>
        </div>
        <div class="b-arrow">${IC.arrow}</div>
      </article>
    </div>

  </div>

  <div class="big-cta">
    <div class="container">
      <h2 class="big-cta-title rev">
        Não sabes por onde<br/><em>começar?</em>
      </h2>
      <p class="big-cta-sub rev">Fala connosco. Encontramos o caminho certo para a tua situação.</p>
      <div class="big-cta-actions rev">
        <a href="#/contacto" data-link class="btn btn-gold">
          <span>Sessão Gratuita</span>
          <span class="arr">→</span>
        </a>
        <a href="#/metodo" data-link class="btn btn-outline">Ver o Método</a>
      </div>
    </div>
  </div>
</div>
`;

/* ================================================================
   MÉTODO — /metodo
   ================================================================ */
window.PAGE_METODO = `
<div class="page-wrap">
  <div class="container">
    <p class="tag rev" style="margin-bottom:.75rem">— Como Funciona</p>
    <h1 class="display rev" style="max-width:640px;margin-bottom:1.25rem">
      Um método simples.<br/><em>Resultados extraordinários.</em>
    </h1>
    <p style="color:var(--txt-2);font-size:1.0625rem;line-height:1.8;max-width:520px;margin-bottom:clamp(3rem,6vw,5rem)" class="rev">
      Não acreditamos em fórmulas genéricas. Quatro fases distintas, cada uma essencial para garantir que a mudança é real e duradoura.
    </p>

    <div class="steps-list" role="list">

      <div class="step rev" role="listitem">
        <div class="step-aside">
          <div class="step-badge">01</div>
          <div class="step-connector"></div>
        </div>
        <div class="step-body">
          <h3>Diagnóstico Profundo</h3>
          <p>Começamos por te conhecer a fundo. Objetivos, bloqueios, rotinas e ambições. Uma primeira sessão de 90 minutos que clarifica tudo — e que é completamente gratuita.</p>
          <div class="pills">
            <span class="pill">✓ Análise das 3 dimensões</span>
            <span class="pill">✓ Identificação de padrões</span>
            <span class="pill">✓ Mapa do potencial</span>
            <span class="pill">✓ Gratuito e sem compromisso</span>
          </div>
        </div>
      </div>

      <div class="step rev" role="listitem">
        <div class="step-aside">
          <div class="step-badge">02</div>
          <div class="step-connector"></div>
        </div>
        <div class="step-body">
          <h3>Plano Personalizado</h3>
          <p>Com base no diagnóstico, construímos um roteiro feito exclusivamente para ti. Metas claras, marcos temporais definidos e as ferramentas certas para cada fase da evolução.</p>
          <div class="pills">
            <span class="pill">✓ Objetivos SMART</span>
            <span class="pill">✓ Roteiro a 90 dias</span>
            <span class="pill">✓ Recursos selecionados</span>
            <span class="pill">✓ KPIs de progresso</span>
          </div>
        </div>
      </div>

      <div class="step rev" role="listitem">
        <div class="step-aside">
          <div class="step-badge">03</div>
          <div class="step-connector"></div>
        </div>
        <div class="step-body">
          <h3>Execução & Acompanhamento</h3>
          <p>Sessões regulares, suporte entre sessões e acesso à comunidade. Não estás sozinho em nenhum momento. Ajustamos o plano quando necessário e celebramos cada conquista.</p>
          <div class="pills">
            <span class="pill">✓ Check-ins semanais</span>
            <span class="pill">✓ Suporte por mensagem</span>
            <span class="pill">✓ Revisão mensal do plano</span>
            <span class="pill">✓ Acesso à comunidade</span>
          </div>
        </div>
      </div>

      <div class="step rev" role="listitem">
        <div class="step-aside">
          <div class="step-badge">04</div>
          <div class="step-connector"></div>
        </div>
        <div class="step-body">
          <h3>Autonomia & Consolidação</h3>
          <p>O objetivo final não é que precises de nós para sempre. É que internalizas as ferramentas e a mentalidade para continuares a crescer de forma autónoma — e imparável.</p>
          <div class="pills">
            <span class="pill">✓ Ferramentas permanentes</span>
            <span class="pill">✓ Hábitos consolidados</span>
            <span class="pill">✓ Mentalidade de crescimento</span>
            <span class="pill">✓ Suporte pós-programa</span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="big-cta">
    <div class="container">
      <h2 class="big-cta-title rev">
        Começa pelo<br/><em>diagnóstico gratuito.</em>
      </h2>
      <p class="big-cta-sub rev">90 minutos que podem mudar a direção da tua vida.</p>
      <div class="big-cta-actions rev">
        <a href="#/contacto" data-link class="btn btn-gold">
          <span>Marcar Agora</span>
          <span class="arr">→</span>
        </a>
        <a href="#/historias" data-link class="btn btn-outline">Ver Resultados Reais</a>
      </div>
    </div>
  </div>
</div>
`;

/* ================================================================
   HISTÓRIAS — /historias
   ================================================================ */
window.PAGE_HISTORIAS = `
<div class="historias-page">
  <div class="page-wrap">
    <div class="container">
      <p class="tag rev" style="margin-bottom:.75rem">— Histórias Reais</p>
      <h1 class="display rev" style="max-width:640px;margin-bottom:1.25rem">
        Pessoas que escolheram<br/><em>ser mais.</em>
      </h1>
      <p style="color:var(--txt-2);font-size:1.0625rem;line-height:1.8;max-width:520px;margin-bottom:clamp(3rem,6vw,5rem)" class="rev">
        Não te vendemos promessas. Mostramos-te resultados de pessoas que decidiram não aceitar menos do que o seu melhor.
      </p>

      <div class="dep-grid">

        <article class="dep dep-wide rev" aria-label="Depoimento Ana Ferreira">
          <div class="dep-qmark" aria-hidden="true">"</div>
          <blockquote><p>Entrei sem saber o que queria da minha carreira. Saí com um plano de negócio, confiança e uma clareza que nunca pensei ser possível. A Junior+ não é uma empresa — é uma virada de jogo. Em 6 meses criei o meu próprio negócio e saí do emprego que odiava há anos.</p></blockquote>
          <div class="dep-meta">
            <div class="dep-av" style="background:linear-gradient(135deg,#d4a853,#8b6914)" aria-hidden="true">AF</div>
            <div class="dep-info">
              <strong>Ana Ferreira</strong>
              <span>Empreendedora · Porto</span>
            </div>
            <div class="dep-stars" aria-label="5 estrelas">★★★★★</div>
          </div>
        </article>

        <article class="dep rev" aria-label="Depoimento Miguel Santos">
          <div class="dep-qmark" aria-hidden="true">"</div>
          <blockquote><p>Melhorei a média académica em 2 valores e consegui o estágio dos sonhos. Só precisava de alguém que acreditasse em mim e me mostrasse um caminho claro.</p></blockquote>
          <div class="dep-meta">
            <div class="dep-av" style="background:linear-gradient(135deg,#6e9dcf,#1a4c8b)" aria-hidden="true">MS</div>
            <div class="dep-info">
              <strong>Miguel Santos</strong>
              <span>Estudante Universitário · Lisboa</span>
            </div>
            <div class="dep-stars" aria-label="5 estrelas">★★★★★</div>
          </div>
        </article>

        <article class="dep rev" data-d="1" aria-label="Depoimento Carla Mendes">
          <div class="dep-qmark" aria-hidden="true">"</div>
          <blockquote><p>Depois de 10 anos na mesma empresa, tive coragem de mudar. O coaching ajudou-me a perceber o meu valor e a negociar um salário 40% superior. Nunca mais olhei para trás.</p></blockquote>
          <div class="dep-meta">
            <div class="dep-av" style="background:linear-gradient(135deg,#c96ec9,#6b148b)" aria-hidden="true">CM</div>
            <div class="dep-info">
              <strong>Carla Mendes</strong>
              <span>Gestora de Projetos · Braga</span>
            </div>
            <div class="dep-stars" aria-label="5 estrelas">★★★★★</div>
          </div>
        </article>

        <article class="dep dep-wide rev" aria-label="Depoimento Rui Almeida">
          <div class="dep-qmark" aria-hidden="true">"</div>
          <blockquote><p>Cheguei em burnout total, sem saber quem era fora do trabalho. O processo foi intenso mas transformador. Hoje tenho limites saudáveis, um negócio lucrativo e, pela primeira vez em anos, durmo bem. O investimento pagou-se a si próprio em menos de 3 meses.</p></blockquote>
          <div class="dep-meta">
            <div class="dep-av" style="background:linear-gradient(135deg,#6ecfb0,#0e7a5c)" aria-hidden="true">RA</div>
            <div class="dep-info">
              <strong>Rui Almeida</strong>
              <span>Diretor de Marketing · Coimbra</span>
            </div>
            <div class="dep-stars" aria-label="5 estrelas">★★★★★</div>
          </div>
        </article>

      </div>
    </div>
  </div>

  <!-- Stats -->
  <div class="stats-strip">
    <div class="stats-inner">
      <div class="stat rev">
        <span class="stat-n"><span data-target="500">0</span><sup>+</sup></span>
        <span class="stat-l">Clientes<br/>Transformados</span>
      </div>
      <div class="stat-sep rev" aria-hidden="true"></div>
      <div class="stat rev">
        <span class="stat-n"><span data-target="95">0</span><sup>%</sup></span>
        <span class="stat-l">Taxa de<br/>Satisfação</span>
      </div>
      <div class="stat-sep rev" aria-hidden="true"></div>
      <div class="stat rev">
        <span class="stat-n"><span data-target="8">0</span><sup>anos</sup></span>
        <span class="stat-l">De Experiência<br/>Comprovada</span>
      </div>
      <div class="stat-sep rev" aria-hidden="true"></div>
      <div class="stat rev">
        <span class="stat-n"><span data-target="12">0</span><sup>+</sup></span>
        <span class="stat-l">Programas<br/>Disponíveis</span>
      </div>
    </div>
  </div>

  <div class="big-cta">
    <div class="container">
      <h2 class="big-cta-title rev">
        Pronto para escrever<br/><em>a tua história?</em>
      </h2>
      <div class="big-cta-actions rev">
        <a href="#/contacto" data-link class="btn btn-gold">
          <span>Começa Agora</span>
          <span class="arr">→</span>
        </a>
        <a href="#/metodo" data-link class="btn btn-outline">Ver o Método</a>
      </div>
    </div>
  </div>
</div>
`;

/* ================================================================
   CONTACTO — /contacto
   ================================================================ */
window.PAGE_CONTACTO = `
<div class="page-wrap">
  <div class="container">
    <div class="contacto-wrap">

      <div class="c-info">
        <p class="tag rev" style="margin-bottom:.75rem">— Fala Connosco</p>
        <h1 class="display rev" style="margin-bottom:1.25rem">
          Pronto para descobrires<br/><em>quem podes ser?</em>
        </h1>
        <p class="rev">A tua primeira sessão é gratuita e sem compromisso.<br/>Basta dar o passo. O resto é connosco.</p>

        <div class="guars rev" style="margin-top:2rem">
          <div class="guar"><span class="g-check" aria-hidden="true">✓</span><span>Primeira sessão gratuita</span></div>
          <div class="guar"><span class="g-check" aria-hidden="true">✓</span><span>Sem contratos de longa duração</span></div>
          <div class="guar"><span class="g-check" aria-hidden="true">✓</span><span>Resultados visíveis em 30 dias</span></div>
          <div class="guar"><span class="g-check" aria-hidden="true">✓</span><span>Resposta em menos de 24 horas</span></div>
        </div>

        <div class="c-details rev">
          <div class="c-detail">
            <span class="c-icon" aria-hidden="true">✉</span>
            <div class="c-dt">
              <span class="c-lbl">Email</span>
              <span class="c-val"><a href="mailto:hello@juniorplus.pt">hello@juniorplus.pt</a></span>
            </div>
          </div>
          <div class="c-detail">
            <span class="c-icon" aria-hidden="true">✆</span>
            <div class="c-dt">
              <span class="c-lbl">Telefone</span>
              <span class="c-val"><a href="tel:+351910000000">+351 910 000 000</a></span>
            </div>
          </div>
          <div class="c-detail">
            <span class="c-icon" aria-hidden="true">⌖</span>
            <div class="c-dt">
              <span class="c-lbl">Localização</span>
              <span class="c-val">Lisboa, Portugal</span>
            </div>
          </div>
        </div>
      </div>

      <div class="rev-right" id="contacto">
        <form class="cf" id="contactForm" novalidate aria-label="Formulário de contacto">
          <h3>Envia uma Mensagem</h3>

          <div class="form-row">
            <div class="fg">
              <label for="cNome">Nome</label>
              <input type="text" id="cNome" name="nome" placeholder="O teu nome" required autocomplete="name"/>
            </div>
            <div class="fg">
              <label for="cIdade">Idade</label>
              <input type="number" id="cIdade" name="idade" placeholder="A tua idade" min="14" max="99"/>
            </div>
          </div>

          <div class="fg">
            <label for="cEmail">Email</label>
            <input type="email" id="cEmail" name="email" placeholder="teu@email.com" required autocomplete="email"/>
          </div>

          <div class="fg">
            <label for="cArea">Área de interesse</label>
            <select id="cArea" name="area" required>
              <option value="" disabled selected>Seleciona uma área</option>
              <option value="coaching">Coaching Individual</option>
              <option value="mentoria">Mentoria Profissional</option>
              <option value="formacao">Formações & Workshops</option>
              <option value="plataforma">Plataforma Online</option>
              <option value="nao-sei">Ainda não sei — preciso de orientação</option>
            </select>
          </div>

          <div class="fg">
            <label for="cMsg">Conta-nos a tua situação</label>
            <textarea id="cMsg" name="mensagem" rows="4" placeholder="O que te trouxe até aqui? O que queres mudar?" required></textarea>
          </div>

          <button type="submit" class="btn btn-gold btn-full" id="submitBtn">
            <span class="btn-text">Enviar Mensagem</span>
            <span class="arr" aria-hidden="true">→</span>
          </button>

          <p class="form-note">Os teus dados são tratados com total confidencialidade.</p>
        </form>

        <div class="form-suc" id="formSuccess" role="alert" aria-live="polite">
          <div class="suc-icon" aria-hidden="true">✓</div>
          <h3>Mensagem recebida!</h3>
          <p>Entraremos em contacto em menos de 24 horas. Bem-vindo à Junior+.</p>
        </div>
      </div>

    </div>
  </div>
</div>
`;

/* ================================================================
   404
   ================================================================ */
window.PAGE_404 = `
<div class="page-404">
  <p class="tag" style="margin-bottom:1.5rem">— 404</p>
  <h1 class="display-xl" style="margin-bottom:1.5rem">
    Página não<br/><em>encontrada.</em>
  </h1>
  <p style="color:var(--txt-2);font-size:1rem;margin-bottom:2.5rem">Esta rota não existe. Volta ao início.</p>
  <a href="#/" data-link class="btn btn-gold"><span>Ir ao Início</span><span class="arr">→</span></a>
</div>
`;
