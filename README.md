# webapps-votacon

Coleção de pequenos webapps estáticos, cada um hospedado como um site próprio via GitHub Pages.

## URLs

- Página inicial (índice dos apps): https://votacon.github.io/webapps-votacon/
- Cada app: `https://votacon.github.io/webapps-votacon/<pasta>/`

Exemplo: o app em `relogio/` fica em https://votacon.github.io/webapps-votacon/relogio/

## Estrutura

```
.
├── index.html      # página inicial que lista os apps (edite o array APPS)
├── 404.html        # página de "não encontrado" (volta ao índice)
├── og.png          # imagem de preview (Open Graph) da coleção
├── _template/      # modelo para começar um app novo (copie a pasta)
├── relogio/        # app: relógio digital
│   └── index.html
├── the-round/      # app: sprint de foco de 15 min (PWA instalável/offline)
│   └── index.html
└── ...
```

## Como adicionar um novo app

1. Copie a pasta `_template/` com o nome do novo app (ex.: `cp -r _template calculadora`). O template já vem com `<title>`, `description`, favicon, Open Graph e tema claro/escuro.
2. Edite o `index.html` da pasta: personalize o bloco marcado no `<head>` (título, descrição, emoji do favicon, `og:url`) e escreva seu app. É tudo estático, sem build.
3. Acrescente uma linha no array `APPS` dentro do `index.html` da raiz para ele aparecer na página inicial.
4. Faça commit e push. Em ~1 min o app está no ar na URL acima.

## Observações

- É tudo estático (HTML/CSS/JS). Não há passo de build.
- O arquivo `.nojekyll` desliga o processamento do Jekyll, servindo os arquivos como estão.
- Use sempre links **relativos** entre páginas (ex.: `../` para voltar à raiz), já que o site fica numa subpasta.
- Metadados de compartilhamento (favicon, `og:*`) já vêm no `_template/`. Use **URLs absolutas** nas tags Open Graph (`https://votacon.github.io/webapps-votacon/...`), pois previews de link não entendem caminho relativo.
- Um `favicon.ico` na raiz do repositório **não** funciona (o navegador procura na raiz do domínio `votacon.github.io`, fora deste projeto). Por isso cada página usa `<link rel="icon">` com um SVG embutido.
