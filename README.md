# SpareBank 1 [smu:d]

[![Build Status](https://travis-ci.org/SpareBank1/smud.svg?branch=master)](https://travis-ci.org/SpareBank1/smud)

En produktkonferanse i regi av SpareBank 1 Utvikling, for hele alliansen. Siten lages med [GatsbyJS](https://www.gatsbyjs.org) og [SpareBank 1 Designsystem](https://design.sparebank1.no/).

### Kom i gang

Installer Gatsbys kommandolineverktøy:
```bash
npm install -g gatsby-cli
```

Klon repoet og kjør npm install:
```bash
npm i
```

Start en lokal utviklingsserver:
```bash
npm run dev
```

### Publisering

Deploy til [github pages](https://sparebank1.github.io/smud/):
```bash
npm run deploy
```
**Merge til master branch vil føre til at Travis bygger og publiserer**

### Tester

Kjør tester:
```bash
npm run test
```

Kjør tester og oppdater snapshots:
```bash
npm run test-update
```
