# Junior+ Website

> Website profissional da **Junior+** — empresa de desenvolvimento holístico que leva os seus clientes ao seu melhor nível profissional, pessoal e académico.

## 🚀 Stack

Vanilla HTML · CSS · JavaScript — sem dependências, sem build step.

## ✨ Features

- **SPA Router** — 6 rotas com transições animadas (`#/`, `#/sobre`, `#/servicos`, `#/metodo`, `#/historias`, `#/contacto`)
- **Design System 2026** — Aurora blobs, bento grid, gradient text animado, grain noise
- **Custom Cursor** — Dot dourado + anel que muda de forma ao hover
- **Tilt 3D** — Cards com perspectiva 3D ao hover
- **Marquee Ticker** — Faixa de texto contínuo entre secções
- **Scroll Reveal** — Animações de entrada com IntersectionObserver
- **Magnetic Buttons** — Botões que atraem o cursor
- **Contadores Animados** — Números com easing suave
- **Formulário validado** — Validação client-side com feedback visual
- **Totalmente responsivo** — Mobile, tablet e desktop

## 📁 Estrutura

```
junior-plus/
├── index.html      ← Shell: navbar, router outlet, footer
├── style.css       ← Design system completo (tokens, componentes, animações)
├── pages.js        ← Conteúdo de todas as páginas como template literals
├── router.js       ← SPA Router + todas as interações JS
└── assets/
    └── hero_bg.png ← Imagem hero
```

## 🖥️ Como correr localmente

Basta abrir o `index.html` diretamente no browser — não precisa de servidor.

```bash
open index.html
```

Ou com um servidor simples:

```bash
npx serve .
# ou
python3 -m http.server 3000
```

## 🗺️ Rotas

| URL | Página |
|-----|--------|
| `#/` | Home |
| `#/sobre` | Sobre Nós |
| `#/servicos` | Serviços |
| `#/metodo` | Método |
| `#/historias` | Histórias & Depoimentos |
| `#/contacto` | Contacto |

## 🎨 Design

- **Cores**: Dark navy `#060609` + Dourado `#D4A853` + Violeta `#7C3AED` + Ciano `#06B6D4`
- **Tipografia**: Instrument Serif (editorial) + DM Sans (corpo) + DM Mono (labels)
- **Efeitos**: Aurora blobs, grain noise, bento grid assimétrico, shimmer gradient

---

&copy; 2026 Junior+. Todos os direitos reservados.
