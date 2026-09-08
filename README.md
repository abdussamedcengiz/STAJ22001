# Staj Calismasi -- HTML/CSS Sayfa Uygulamalari

Yaz stajinda HTML, CSS ve Bootstrap ogrenirken hazirlanan sayfalar. Var olan
bir bebek urunleri sitesinin ("Rascals") ekran goruntusunden yola cikilarak
sayfa duzeni, bilesenler ve duyarli (responsive) yerlesim tekrar edildi.

## Sayfalar

| Dosya | Icerik |
|---|---|
| `index.html` | Ana sayfa: tanitim bolumu, urun kartlari, alt bilgi |
| `nav.html` | Ust menu calismasi (acilir menuler, arama, sepet) |
| `section.html` | Icerik bolumu duzeni |
| `footer.html` | Alt bilgi duzeni |
| `babylist.html`, `yeni.html` | Urun galerisi / izgara (grid) duzeni |
| `yp.html`, `kk.html` | Kart ve form denemeleri |
| `js.html` | Bootstrap'in JavaScript bilesenleri (sekme, akordiyon, modal) |

Her dosya bagimsiz calisiyor; sayfalar tek bir siteye baglanmadi, her biri
ayri bir duzen alistirmasi.

## Calistirma

Kurulum gerektirmiyor, `index.html` dosyasi tarayicida acilabilir. Yerel
sunucu tercih edilirse:

```bash
python -m http.server 8000
```

## Notlar

- Tasarim ve gorseller Rascals markasina ait; bu depo yalnizca HTML/CSS
  alistirmasi olarak hazirlandi, ticari bir kullanim amaci tasimiyor.
  Bu nedenle depoya acik kaynak lisansi eklenmedi.
- `images/` klasoru 21 MB; gorseller kucultulmeden eklendigi icin depo
  boyutunun buyuk bolumunu olusturuyor.
