// Publications are displayed in this order. Add new work at the top.
// Set `latest` to include an item in Latest Research; the first three are shown.
window.GLAMOUR_CONTENT = window.GLAMOUR_CONTENT || {};

window.GLAMOUR_CONTENT.publications = [
  {
    title: "Towards Learning Representations of Policies in Two-Player Zero-Sum Games",
    authors: "Kevin Wang*, Kevin Yang*, Arjun Prakash, Amy Greenwald",
    venue: "ICML 2026 NExT-Game Workshop · Spotlight",
    venueUrl: "https://sites.google.com/view/nextgame-icml26",
    year: 2026,
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2607.01498" },
      { label: "Code", url: "https://github.com/VitamintK/ssl-project" },
    ],
    latest: {
      url: "https://openreview.net/pdf?id=AnJGQHrq7m",
      image: "images/graphics/policy_tpzs.png",
      imageAlt: "Illustration for two-player zero-sum games paper",
      summary: "Learning useful representations of policies for strategic interaction in two-player zero-sum games.",
    },
  },
  {
    title: "Spectral Collapse Drives Loss of Plasticity in Deep Continual Learning",
    authors: "Arjun Prakash*, Naicheng He*, Kaicheng Guo*, Saket Tiwari, Tyrone Serapio, Ruo Yu Tao, Amy Greenwald, George Konidaris",
    venue: "ICML 2026",
    venueUrl: "https://icml.cc/",
    year: 2026,
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2509.22335" },
      { label: "Code", url: "https://github.com/KevinGuo27/lop-jax" },
    ],
    latest: {
      url: "https://arxiv.org/abs/2509.22335",
      image: "images/graphics/spectral_collapse.png",
      imageAlt: "Abstract graphic for spectral collapse in continual learning",
      summary: "We investigate why deep neural networks suffer from loss of plasticity in continual learning, and thus fail to learn new tasks without reinitializing parameters.",
    },
  },
  {
    title: "Distilling Game Code World Model Generation into Lightweight Large Language Models",
    authors: "Tyrone Serapio, Arjun Prakash, Haoyang Xu, Kevin Wang, Amy Greenwald",
    venue: "AAMAS 2026 Strategic Engineering Workshop",
    venueUrl: "https://sites.google.com/view/se-aamas2026",
    year: 2026,
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2605.24375" },
      { label: "Code", url: "https://github.com/tktserapio/internalizing-cwm-sft-grpo" },
    ],
    latest: {
      url: "https://arxiv.org/abs/2605.24375",
      image: "images/graphics/distilling.png",
      imageAlt: "Illustration for lightweight large language models paper",
      summary: "Distilling strategic world-model generation into smaller language models for more efficient game-playing agents.",
    },
  },
  {
    title: "Bi-Level Policy Optimization with Nyström Hypergradients",
    authors: "Arjun Prakash*, Naicheng He*, Denizalp Goktas, Jacob Makar-Limanov, Amy Greenwald",
    venue: "AAMAS 2026",
    venueUrl: "https://cyprusconferences.org/aamas2026/",
    year: 2026,
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2505.11714" },
      { label: "Code", url: "https://github.com/Arnie-He/BLPO" },
    ],
  },
  {
    title: "Dynamic Thinker: Optimizing Decision-Time Planning with Costly Compute",
    authors: "Kevin Wang, Jerry Xia, Stephen Chung, Amy Greenwald",
    venue: "AAMAS 2025 Adaptive and Learning Agents Workshop",
    venueUrl: "https://ala-workshop.github.io/",
    year: 2025,
    links: [
      { label: "Paper", url: "https://openreview.net/pdf?id=yGglBJ1pjZ" },
      { label: "Code", url: "https://github.com/Alp-Guneri/extratatonnement" },
    ],
  },
  {
    title: "Tractable General Equilibrium",
    authors: "Denizalp Goktas, Klara Chura, Emin Alp Güneri, Amy Greenwald",
    venue: "Preprint",
    venueUrl: "https://arxiv.org/abs/2502.11449",
    year: 2025,
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2502.11449" },
      { label: "Code", url: "https://github.com/Alp-Guneri/extratatonnement" },
    ],
  },
];
