# 🛸 Rick and Morty - Kosmiczna Baza Danych

Aplikacja React z motywem kosmicznym wykorzystująca [Rick and Morty API](https://rickandmortyapi.com/) do przeglądania postaci z serialu.

## ✨ Funkcjonalności

- 🔍 Wyszukiwanie postaci po imieniu
- 🎯 Filtrowanie według statusu, gatunku i płci
- 📄 Paginacja wyników
- 🎨 Kosmiczny design z animacjami
- 📱 Responsywny interfejs

## 🚀 Uruchomienie lokalnie

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Build produkcyjny
npm run build

# Podgląd build'a
npm run preview
```

## 🔧 Technologie

- **React 18** - biblioteka UI
- **Vite** - bundler i dev server
- **Rick and Morty API** - zewnętrzne API
- **CSS3** - styling z animacjami
- **GitHub Actions** - CI/CD pipeline

## 📦 CI/CD

Projekt wykorzystuje GitHub Actions do automatycznego:
- Lintowania kodu
- Budowania aplikacji
- Deploymentu na GitHub Pages

Pipeline uruchamia się automatycznie przy każdym push do gałęzi `main`.

## 🌐 Demo

Aplikacja jest dostępna na GitHub Pages po wykonaniu deploy'u.

## 📝 Struktura projektu

```
rickandmorty.github.io/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # GitHub Actions pipeline
├── src/
│   ├── components/
│   │   ├── CharacterCard.jsx  # Karta postaci
│   │   ├── SearchBar.jsx      # Pasek wyszukiwania
│   │   ├── Filters.jsx        # Filtry
│   │   └── Pagination.jsx     # Paginacja
│   ├── App.jsx                # Główny komponent
│   ├── main.jsx               # Entry point
│   └── index.css              # Style globalne
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Funkcje UI

- Kosmiczny gradient tła
- Animowane gwiazdy
- Efekty świecenia (glow)
- Hover effects na kartach
- Responsywny grid layout
- Custom fonty (Orbitron, Space Mono)

## 📄 Licencja

MIT