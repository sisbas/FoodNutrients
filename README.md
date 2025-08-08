# FoodNutrients PoC

Monorepo skeleton for the dietitian nutrient application.

## Yapı
- `packages/shared` – Ortak TypeScript yardımcıları (nutrient tanımları, profiller, birim dönüşümleri)
- `server` – Fastify API proxy ve seed yükleyici
- `app` – React Native uygulama iskeleti
- `supabase` – Şema ve RLS politikaları

## Kurulum
```bash
npm install
```

Gerekli ortam değişkenleri için `server/.env.sample` dosyasını `.env` olarak kopyalayın ve değerleri doldurun.

## Çalıştırma
Bu PoC yalnızca test ve servis fonksiyonlarını içerir.

## Test
```bash
npm test
```

> Not: Bu ortamda `vitest` bağımlılıkları indirilemeyebilir.
