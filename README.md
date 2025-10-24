# TBD React'e Giriş Eğitimi

TBD derneği için hazırlanan 2 saatlik React'e giriş programı. Bu eğitim, JavaScript ve React'in temel kavramlarını adım adım öğretmek için tasarlanmıştır.

## Kurulum

```bash
npm install
npm start
```

Proje http://localhost:3000 adresinde çalışacaktır.

## Eğitim İçeriği

Eğitim boyunca işlenen konular sırasıyla aşağıdaki gibidir. Her dosya, ilgili konuyu öğrenmek için hazırlanmış örnek bir React bileşeni içerir.

### 1. Değişken Tipleri (`1-degisken-tipleri.js`)
JavaScript'teki temel veri tipleri:
- String (metin)
- Number (sayı)
- Boolean (mantıksal)
- Undefined
- Object
- Null

**Öğrenilenler:**
- `const` ve `let` kullanımı
- JSX içinde değişkenleri gösterme `{}`

### 2. Fonksiyonlar (`2-functions.js`)
Klasik JavaScript fonksiyon tanımlama ve kullanımı.

**Öğrenilenler:**
- `function` anahtar kelimesi ile fonksiyon tanımlama
- Parametreli fonksiyonlar
- `return` kullanımı
- JSX içinde fonksiyon çağırma

### 3. Arrow Functions (`3-arrow-func.js`)
Modern JavaScript'te kullanılan ok fonksiyonları.

**Öğrenilenler:**
- Arrow function (lambda function) sözdizimi
- Tek satırlık arrow function kullanımı
- Kısa ve öz fonksiyon yazımı

### 4. Arrow Function - Parantezli (`4-arrow-func-paran.js`)
Birden fazla satır içeren arrow function kullanımı.

**Öğrenilenler:**
- Süslü parantez `{}` ile arrow function yazımı
- Çok satırlı fonksiyon gövdesi
- `console.log` kullanımı
- Açık `return` ifadesi

### 5. onClick Event (`5-onClick.js`)
React'te kullanıcı etkileşimlerini yakalama.

**Öğrenilenler:**
- Button elementine onClick ekleme
- Event handler fonksiyonu tanımlama
- Console'a mesaj yazdırma

### 6. State Kullanımı (`6-state.js`)
React'in en temel kavramlarından biri olan state yönetimi.

**Öğrenilenler:**
- `useState` hook'u kullanımı
- State değişkenini tanımlama
- State'i değiştirme (`setSayi`)
- State değişikliklerinin asenkron doğası
- JSX içinde state gösterme

### 7. Counter Uygulaması (`7-counter.js`)
*Not: Bu dosya boş bırakılmış, muhtemelen öğrencilerin uygulama yapması için.*

**Önerilen Uygulama:**
- Sayaç yapımı
- Artır/Azalt butonları
- State ile sayaç değerini yönetme

### 8. String State (`8-state-string.js`)
*Not: Bu dosya boş bırakılmış, muhtemelen öğrencilerin uygulama yapması için.*

**Önerilen Uygulama:**
- String tipinde state kullanımı
- İsim değiştirme uygulaması

### 9. Ternary Operator (`9-ternary.js`)
Koşullu render ve ternary operatörü kullanımı.

**Öğrenilenler:**
- Ternary operator `? :` kullanımı
- Koşullu rendering
- Boolean state ile görünürlük kontrolü
- State'i toggle etme
- Göster/Gizle mantığı

### 10. Object Kullanımı (`10-object.js`)
JavaScript objelerinin kullanımı.

**Öğrenilenler:**
- Object tanımlama
- Object property'lerine erişim
- Dot notation kullanımı

### 11. State ile Object (`11-setObject.js`)
State içinde obje kullanımı ve koşullu rendering.

**Öğrenilenler:**
- Object tipinde state
- `undefined` kontrolü
- Early return pattern
- Koşullu bileşen render etme
- `if` statement kullanımı

### 12. Input Yönetimi (`12-input.js`)
Controlled component ve form elemanları.

**Öğrenilenler:**
- Input elementine değer bağlama
- `onChange` event'i
- `e.target.value` kullanımı
- Two-way data binding
- Real-time input değişikliklerini yakalama

### 13. useEffect Hook (`13-useEffect.js`)
React yaşam döngüsü ve yan etkiler.

**Öğrenilenler:**
- `useEffect` hook'u kullanımı
- API çağrısı yapma (`fetch`)
- Promise'ler ve `.then()` kullanımı
- Dependency array `[]`
- Optional chaining `?.` operatörü
- Loading state yönetimi

## Ana Dosya

### App.js
Şu anda aktif olan bileşen. API'den veri çekme ve loading state örneği içerir.

**Özellikler:**
- JSONPlaceholder API kullanımı
- User verisi çekme
- Loading state gösterimi
- Conditional rendering

## Kullanım

Her bir konuyu öğrenmek için ilgili dosyadaki kodu `App.js` dosyasına kopyalayabilir veya import edebilirsiniz.

Örnek:
```javascript
// index.js veya App.js içinde
import App from './5-onClick';
```

## Teknolojiler

- React 18.1.0
- React DOM 18.1.0
- React Scripts (Create React App)

## Notlar

- Her dosya bağımsız bir React bileşenidir
- Dosyalar numaralandırılmış şekilde ilerleyen bir öğrenme yolu sunar
- 7 ve 8 numaralı dosyalar pratik yapmak için boş bırakılmıştır

## Katkıda Bulunanlar

TBD Derneği React Eğitim Ekibi

## Lisans

Bu proje eğitim amaçlı hazırlanmıştır.
