# React Öğrenmeye Başlama

Bu döküman, web geliştiricilerinin React öğrenmeye başlaması için bir başlangıç rehberidir. React, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir ve bileşen tabanlı mimarisi ile modern web uygulamalarını daha dinamik ve sürdürülebilir hale getirir.

## React Nedir?

React, Facebook tarafından geliştirilmiş bir JavaScript kütüphanesidir. Kullanıcı arayüzleri oluşturmak için bileşen tabanlı bir yaklaşıma sahiptir. React, UI bileşenlerinin yeniden kullanılabilirliğini ve yönetilebilirliğini artırarak, uygulama geliştirme sürecini daha verimli hale getirir.

## Temel Kavramlar

1. **Bileşenler (Components):** React uygulamaları, bileşenlerden oluşur. Her bileşen, UI parçalarını tanımlar ve belirli işlevleri yerine getirir. Bileşenler fonksiyonel veya sınıf bazlı olabilir.

2. **JSX (JavaScript XML):** React, HTML benzeri bir sözdizimi olan JSX kullanır. JSX, JavaScript kodunu HTML benzeri bir biçimde yazmanıza olanak tanır, bu da kodun daha okunabilir olmasını sağlar.

3. **Props:** Bileşenlere dışarıdan veri aktarmak için kullanılır. Props, bileşenlerin dinamik hale gelmesini sağlar.

4. **State:** Bileşenlerin iç verilerini yönetir ve bu veriler değiştiğinde bileşenlerin yeniden render edilmesini sağlar. State, bileşenlerin dinamik ve etkileşimli olmasına yardımcı olur.

5. **Event Handling:** Kullanıcı etkileşimlerini yönetmek için olay işleyicileri kullanılır. Örneğin, buton tıklamaları veya form gönderimleri gibi.

## Başlangıç Adımları

1. **Gerekli Araçlar:**
   - **Node.js ve npm:** React uygulamaları geliştirmek için Node.js ve npm (Node Package Manager) kurulu olmalıdır. [Node.js İndir](https://nodejs.org/)

2. **Yeni Bir React Uygulaması Oluşturma:**
   - React uygulamaları oluşturmak için `create-react-app` aracı kullanılabilir:
     ```bash
     npx create-react-app my-app
     ```
   - Oluşturulan projeye gidip, geliştirmeye başlayabilirsiniz:
     ```bash
     cd my-app
     npm start
     ```

3. **Temel Bileşenler Oluşturma:**
   - İlk React bileşeninizi oluşturun ve JSX kullanarak UI'nızı tanımlayın. Örneğin, bir `HelloWorld` bileşeni:
     ```jsx
     function HelloWorld() {
       return <h1>Hello, World!</h1>;
     }
     ```

## Kaynaklar

- [React Resmi Dokümantasyonu](https://reactjs.org/docs/getting-started.html)
- [JavaScript ES6 Özellikleri](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
- [CSS Temel Rehberi](https://developer.mozilla.org/en-US/docs/Learn/CSS)

## İletişim

Herhangi bir soru veya geri bildirim için [email@example.com](mailto:email@example.com) adresine ulaşabilirsiniz.

