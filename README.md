# Lvov Studio — сайт веб-студии

Премиальный сайт-витрина с 3D-сценой, скролл-анимациями и формой заявки.

## Стек

- React + TypeScript + Vite
- Three.js (@react-three/fiber + @react-three/drei) — 3D Hero
- GSAP + ScrollTrigger — скролл-анимации
- Framer Motion — микро-анимации UI
- Tailwind CSS v4

## Запуск

```bash
nvm use 22    # нужен Node >= 22
npm install
npm run dev
```

## Конфигурация бренда

Все настройки — в одном файле: **`src/config/brand.ts`**

- Название студии, слоган, описание
- Цвета (акцент, фон, текст)
- Контакты (телефон, email, Telegram)
- Юрлицо и реквизиты
- Навигация
- Услуги, процесс, пакеты/цены
- Кейс Прокс (тексты, результаты, ссылки на скриншоты)

Для переиспользования под клиента — замените содержимое `brand.ts`.

## Цвета

Tailwind-цвета задаются в `src/index.css` через `@theme`. Основные:

- `--color-accent` — акцентный синий (#3B82F6)
- `--color-bg` — фон (#09090B)
- `--color-bg-card` — фон карточек (#18181B)

## Структура

```
src/
├── config/brand.ts          # ВСЕ настройки бренда
├── components/
│   ├── layout/              # Header, Footer
│   ├── three/               # 3D-сцена + fallback
│   ├── ui/                  # Button, Card, SectionHeading
│   └── sections/            # Hero, Problem, Services, CaseProx,
│                            #   Portfolio, Process, Pricing, About, Contact
├── hooks/useScrollAnimation.ts
├── App.tsx
└── main.tsx
```

## Кейс Прокс — скриншоты

Положите изображения в `public/cases/prox/`:
- `hero.jpg` — главный скриншот
- `mobile.jpg` — мобильная версия
- `detail.jpg` — деталь/страница

## Форма заявки

Сейчас заглушка (console.log). Для подключения Formspree/Telegram-бота — замените `handleSubmit` в `src/components/sections/Contact.tsx`.

## Сборка

```bash
npm run build   # -> dist/
```
