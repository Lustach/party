# Project notes
Был добавлен пакет "ajv": "^8.12.0",для фикса ошибки.
Пакет nuxt-svgo необходим для динамического импорта картинок из любых путей.
Компонент Svg в ui папке может работать только с assets/svg/*.svg. Любые вложенные в * папки не будут обнаружены.
Пока что использовать в качестве иконок с бэкграундом.
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000` :

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

## Playwright

Running the Example Test

```bash
npx playwright test
```

HTML Test Reports

```bash
npx playwright show-report
```

Running the Example Test in UI Mode

```bash
npx playwright test --ui
```
