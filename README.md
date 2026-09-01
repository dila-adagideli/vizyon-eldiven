# Vizyon Zımparalı Eldiven

Yerli üretim profesyonel zımpara eldiveni için statik tanıtım sitesi.

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Diğer komutlar

```bash
npm run lint
npm run build
npm run start
```

## Site URL

Canonical, Open Graph, robots.txt ve sitemap `NEXT_PUBLIC_SITE_URL` değerinden üretilir.

1. `.env.example` dosyasını `.env.local` olarak kopyalayın.
2. Production’da gerçek domain’i **https** ile yazın. Domain uydurmayın.

```bash
NEXT_PUBLIC_SITE_URL=https://gercek-domain.com
```

Yerel geliştirmede fallback `http://localhost:3000` kullanılır. Bu değer production metadata, sitemap veya robots host olarak kalmamalıdır.

`NEXT_PUBLIC_SITE_URL` build sırasında okunur; hosting panelinde production build’den önce tanımlanmalıdır.

UTM ve `gclid` parametreleri sayfayı kırmaz. Canonical her zaman temiz anasayfa URL’sidir; query string canonical’e eklenmez.

---

## Production SEO & Google Ads Checklist

### Deployment öncesi

- [ ] `NEXT_PUBLIC_SITE_URL` gerçek production domain (https, trailing slash yok)
- [ ] Gerçek domain belirlendi; www / non-www için tek tercih edilen hostname hosting’de yönlendirilecek
- [ ] Gerçek favicon ve logo dosyaları `public/images/logo-horizontal.png` ve `public/images/vizyon-ve-icon.png` konumunda
- [ ] Apple touch icon için gerekirse daha yüksek çözünürlüklü kare VE ikonu (mevcut `vizyon-ve-icon.png` upscale edilmeden kullanılıyor)
- [ ] Gerçek iletişim bilgileri `src/lib/site.ts` içinde dolduruldu
- [ ] Title, description ve Open Graph önizlemesi son kez gözden geçirildi
- [ ] Build çıktısında localhost URL yok
- [ ] `npm run lint` ve `npm run build` temiz
- [ ] Lighthouse production benzeri ortamda çalıştırıldı (Performance / Accessibility / Best Practices / SEO hedefleri 90+)

### Deployment sonrası

- [ ] HTTPS zorunlu; HTTP → HTTPS yönlendirme
- [ ] Tek canonical hostname (www veya non-www, biri diğerine)
- [ ] Canonical URL: `NEXT_PUBLIC_SITE_URL` ile aynı
- [ ] `/robots.txt` 200; `Disallow` yok; Googlebot ve AdsBot-Google izinli; sitemap satırı production domain
- [ ] `/sitemap.xml` 200; yalnızca crawl edilebilir anasayfa
- [ ] Google Search Console property ekle, domain ownership doğrula
- [ ] `sitemap.xml` gönder
- [ ] Homepage URL Inspection çalıştır; gerekirse indexing request
- [ ] Mobil render kontrolü
- [ ] Rich Results Test (Organization / WebSite / Product)
- [ ] PageSpeed Insights (LCP, CLS, INP)
- [ ] Google Ads final URL = canonical homepage; display domain eşleşmesi
- [ ] Google AdsBot crawlability
- [ ] GA4 Measurement ID ve Google Ads Conversion ID verildiğinde ekle (şimdi uydurma)
- [ ] Tracking açılırsa consent / gizlilik yapılandırması
- [ ] Search Console doğrulama kodu: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (Metadata API hazır; token yokken boş bırakın)
