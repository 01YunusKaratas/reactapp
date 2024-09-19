# React Proje Bilgisi

## 1. React Projesi Oluşturma

Bir React projesi başlatmak için `create-react-app` komutunu kullanabilirsiniz. Bu komut, temel yapılandırmaları ve başlangıç dosyalarını sağlar.

```bash
npx create-react-app react-app
cd react-app
npm start
```
### create-react-app Komutunun Açıklaması
1. npx create-react-app react-app: Yeni bir React projesi oluşturur.
2. cd react-app: Proje dizinine geçiş yapar.
3. npm start: Projeyi başlatır ve geliştirme sunucusunu çalıştırır.s
## 2. Bileşenler
- React bileşenleri, birden fazla küçük parçanın birleşimi olarak düşünülebilir. Her bir bileşen, yalnızca kendi bölümünü günceller ve bu sayede tüm sayfanın yeniden render edilmesi gerekmeksizin değişiklikler yapılabilir. Bileşenler genellikle App.js gibi dosyalarda tanımlanır ve diğer bileşenleri içe aktarmak için kullanılır.

```bash
import React from 'react';

function MyComponent() {
  return <div>Hello, World!</div>;
}

export default MyComponent;
```
## 3. JSX ve Render
- React'te JSX kullanarak HTML benzeri bir sözdizimi ile bileşenler oluşturulur.
- JSX, JavaScript kodunun içine HTML benzeri kodlar eklemenizi sağlar, ancak tarayıcı tarafından doğrudan işlenmez.
- JSX, React.createElement fonksiyonuna dönüştürülür ve sanal bir DOM (Virtual DOM) oluşturur.
### JSX Kuralları
1. İlk karakter her zaman büyük olmalıdır.
2. HTML etiketleri yerine JSX içinde bileşen adları büyük harfle yazılmalıdır.

### Render
- Render işlemi, React ve JSX ile bilgileri ekranda göstermek anlamına gelir.

## 4. Props
- Props, bileşenlere dışarıdan veri aktarmak için kullanılan bir yöntemdir. Props, bileşenlerin daha dinamik ve okunaklı olmasını sağlar. Props kullanırken, veriler string olarak tırnak içinde, number gibi diğer türler ise süslü parantezler {} içinde gönderilir.
```bash
  function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
<Greeting name="Alice" />
```
## 5. PropTypes ve DefaultProps
- PropTypes, bir bileşenin alabileceği props türlerini belirtir ve yanlış türde veri verilirse konsolda uyarı verir. DefaultProps ise varsayılan değerler sağlar.
```bash
import PropTypes from 'prop-types';

function MyComponent({ name }) {
  return <div>{name}</div>;
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

MyComponent.defaultProps = {
  name: 'Default Name',
};
```
## 6. State Yönetimi
- State, dinamik ve değişken verileri yönetmek için kullanılır. useState hook'u, bileşenlerin içindeki bilgileri güncellemeyi sağlar.
```bash
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
## 7. State Obje ve Array ile Kullanımı
- State'i obje veya array olarak tanımlayabilirsiniz:
```bash
const [form, setForm] = useState({ name: '', surname: '', gender: '' });
```
## 8. useEffect
- useEffect, bileşenlerin yan etkilerini (side effects) yönetmek için kullanılır. Veri çekme, API çağrıları ve diğer yan etkiler için kullanılır. useEffect genellikle useState ile birlikte çalışır.
 - useEffect Kullanımı
```bash

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count state changed');
  }, [count]); // Dependence array, count değiştiğinde effect çalışır

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
 - Unmount Edilme
```bash
useEffect(() => {
  return () => {
    console.log('Component unmounted');
  };
}, []);
```
## 9. Koşullu Render
- Koşullu render için iki temel yöntem kullanabilirsiniz:
1. Short If (ternary operator):
```bash
{condition ? <Component /> : <AnotherComponent />}

```
2. {condition && <Component />}
```bash
{condition && <Component />}
```




