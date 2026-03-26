# 📚 Pensummit

Personlig studienote-hjemmeside til HA(it), CBS.

## Kom i gang (lokalt)

```bash
# 1. Installer afhængigheder
npm install

# 2. Start dev-server (med auto-reload)
npm run dev

# 3. Åbn i browser
# http://localhost:3000
```

## Tilføj en ny note

1. Generer HTML via study-notes-skillen i Claude
2. Placer filen i den rigtige mappe:
   ```
   public/noter/[fag]/[filnavn].html
   ```
3. Registrér noten i `public/index.html` under `const noter`:
   ```js
   it: [
     { lektion: 'L01', titel: 'Introduktion', dato: '2026-02-03', fil: 'noter/it-projektledelse/it-L01-...' },
   ]
   ```
4. Push til GitHub → Netlify deployer automatisk

## Mappestruktur

```
pensummit/
├── public/
│   ├── index.html          ← Forside
│   ├── 404.html            ← Fejlside
│   ├── css/
│   │   └── main.css
│   └── noter/
│       ├── it-projektledelse/
│       ├── programmering/
│       ├── organisation/
│       └── oekonomi/
├── server.js
├── package.json
└── README.md
```

## Fag-mapper og filnavngivning

| Fag | Mappe | Prefix |
|---|---|---|
| IT-Projektledelse | `noter/it-projektledelse/` | `it-projektledelse-L01-...` |
| Programmering & Databaser | `noter/programmering/` | `programmering-L01-...` |
| Organisationslære | `noter/organisation/` | `organisation-L01-...` |
| Virksomhedens Økonomiske Styring | `noter/oekonomi/` | `oekonomi-L01-...` |

Filnavn-format: `[fag]-L[nr]-[åååå-mm-dd]-[emne].html`
Eksempel: `it-projektledelse-L03-2026-03-10-risikoanalyse.html`

## Deploy til Netlify

1. Push kode til GitHub
2. Log ind på [netlify.com](https://netlify.com)
3. "New site from Git" → vælg dette repo
4. Publish directory: `public` (ingen build-kommando)
5. Deploy → done ✅

## Tilknyt domæne (pensummit.dk)

1. Køb domæne på [simply.com](https://simply.com) eller [one.com](https://one.com)
2. Netlify → Site settings → Domain management → Add custom domain
3. Hos domæneudbyder, sæt DNS:
   - `CNAME www → [dit-site].netlify.app`
   - `A @ → 75.2.60.5` (Netlify load balancer)
4. Vent 1–24 timer på DNS-propagering
5. Netlify aktiverer automatisk HTTPS via Let's Encrypt
