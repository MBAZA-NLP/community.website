# community.website

> The official MBAZA-NLP community website, deployed at [aimbaza.org](https://aimbaza.org).

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![HuggingFace](https://img.shields.io/badge/🤗%20HuggingFace-MBAZA--NLP-yellow)](https://huggingface.co/MBAZA-NLP)
[![Community](https://img.shields.io/badge/Slack-aimbaza.slack.com-4A154B?logo=slack)](https://join.slack.com/t/aimbaza/shared_invite/zt-3xrd8y8km-zZK83JcPxcG8uxOMZCptpg)
[![Contributors](https://img.shields.io/github/contributors/MBAZA-NLP/community.website)](https://github.com/MBAZA-NLP/community.website/graphs/contributors)
[![Issues](https://img.shields.io/github/issues/MBAZA-NLP/community.website)](https://github.com/MBAZA-NLP/community.website/issues)

---

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Community](#community)
- [License](#license)
- [Citation](#citation)
- [Acknowledgements](#acknowledgements)

---

## About

community.website is the static website for the **MBAZA-NLP community**, built with Jekyll and SCSS and deployed at [aimbaza.org](https://aimbaza.org). It serves as the central hub for the community — showcasing projects, events, blog posts, and resources related to open-source NLP for African languages. It is maintained by the [MBAZA-NLP community](https://aimbaza.org) as an open-source Digital Public Good.

**Key features:**
- Community-driven static site built with Jekyll
- SCSS-based styling for easy theme customisation
- Links to all MBAZA-NLP projects, datasets, and models
- Integrated community blog at [aimbaza.org/blog](https://aimbaza.org/blog)

---

## Installation

### Prerequisites

- Ruby >= 2.7
- Bundler (`gem install bundler`)
- Jekyll (`gem install jekyll`)

### Local Development

```bash
git clone https://github.com/MBAZA-NLP/community.website.git
cd community.website
bundle install
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000) in your browser to preview the site.

---

## Usage

### Building the Site

```bash
bundle exec jekyll build
```

The compiled static files are written to the `_site/` directory.

### Live Reload during Development

```bash
bundle exec jekyll serve --livereload
```

Any saved change to source files will automatically rebuild and refresh the browser preview.

---

## Contributing

We welcome contributions of all kinds — fixing typos, adding community members, updating project pages, and improving the design.

1. Read the [Contributor Guide](https://aimbaza.org/contributing) before opening a PR.
2. Check [open issues](https://github.com/MBAZA-NLP/community.website/issues) for tasks tagged `good first issue`.
3. Fork the repo, create a feature branch, and submit a pull request against `main`.
4. For bug reports or visual issues, please [open an issue](https://github.com/MBAZA-NLP/community.website/issues/new) with a screenshot and browser details.

All contributors are expected to follow our [Code of Conduct](https://github.com/MBAZA-NLP/.github/blob/main/CODE_OF_CONDUCT.md).

---

## Community

| Channel | Link |
|---------|------|
| Website | [aimbaza.org](https://aimbaza.org) |
| Slack | [aimbaza.slack.com](https://join.slack.com/t/aimbaza/shared_invite/zt-3xrd8y8km-zZK83JcPxcG8uxOMZCptpg) |
| HuggingFace | [huggingface.co/MBAZA-NLP](https://huggingface.co/MBAZA-NLP) |
| GitHub | [github.com/MBAZA-NLP](https://github.com/MBAZA-NLP) |

---

## License

This project is licensed under the **Apache 2.0 License** — see [LICENSE](LICENSE) for details.

---

## Citation

If you use this work in research, please cite:

```bibtex
@misc{mbazanlp-community-website-2024,
  title     = {MBAZA-NLP Community Website},
  author    = {MBAZA-NLP Community},
  year      = {2024},
  url       = {https://github.com/MBAZA-NLP/community.website},
  license   = {Apache-2.0}
}
```

---

## Acknowledgements

This work is supported by the **MBAZA-NLP community** and funded in part by [GIZ Rwanda — Digital Transformation Center](https://www.giz.de/en/worldwide/66163.html) as part of the Open-Source Language AI initiative.
