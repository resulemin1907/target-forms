document
    .querySelector(".chatbox-toggle")
    .addEventListener("click", function () {
        const chatbox = document.querySelector(".chatbox-message-wrapper");
        chatbox.classList.toggle("show");
    });

const chatboxForm = document.querySelector(".chatbox-message-form");
const messageInput = document.querySelector(".chatbox-message-input");
const chatboxMessageWrapper = document.querySelector(
    ".chatbox-message-content"
);

const soruCevap = {
    nabıyosun: "ben bir botum ve işimi yapıyorum ",
    hangitakımlısın:
        " Ben bir yapay zeka modeliyim, dolayısıyla bir takım taraftarı değilim. Sorularınıza objektif bir şekilde yanıt vermeye çalışırım. Yardımcı olabileceğim başka bir konu var mı?",
    merhaba: "Merhaba! Size nasıl yardımcı olabilirim?",
    nasılsın:
        "Ben bir botum, duygum yok ama size yardımcı olmaktan mutluluk duyarım!",
    çarkıfelek:
        " Dilim Sayısı Girişi    Kullanıcının bir sayı değeri girebildiği bir alan olmalı Bu alana girilen sayıya göre o sayıda HEX renk kodu: giriş alanı dinamik olarak eklenmelidir URL Girişi Kullanıcının bir web adresi girebildiği bir alan olmalıGirilen değerin geçerli bir URL olup olmadığı kontrol edilmeliYönlenecek URL Girişi : Kullanıcının bir sayfada hangi URLye yönlendirme yapılacağını belirtmek için bir metin girişi yapabileceği bir alan olmalı Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir. ",
    mailform:
        "Desktop Görünümü : Kullanıcının bir metin değeri girebildiği bir alan olmalı Giriş kutusunun önerilen değeri 600x600 piksel olmalı Girilen değerin bir URL ya da dosya yolu olup olmadığının kontrolü isteğe bağlı Mobil Görünümü : Kullanıcının bir metin değeri girebildiği bir alan olmalı Giriş kutusunun önerilen değeri 524x700 piksel olmalıGirilen değerin bir URL ya da dosya yolu olup olmadığının kontrolü isteğe bağlı Aydınlatma Metni Linki : Kullanıcının bir web adresi girebildiği bir alan olmalı Girilen değerin geçerli bir URL olup olmadığı kontrol edilmeli İletişim İzni Linki Kullanıcının bir web adresi girebildiği bir alan olmalı Girilen değerin geçerli bir URL olup olmadığı kontrol edilmeli Ek İsterler: Tüm giriş alanları için boş olup olmadığı kontrol edilmeli Eğer bir URL girişi yapıldıysa, bu URL'nin erişilebilir olup olmadığının kontrolü de yapılabilir. Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    kazıkazan:
        " Kampanya Kodu :  Kullanıcının bir metin değeri girebildiği bir alan olmalı Girilen değerin kampanya kodu formatına uygun olup olmadığı kontrol edilmeli Desktop Görünümü : Kullanıcının bir metin değeri girebildiği bir alan olmalı Giriş kutusunun önerilen değeri  Kullanıcının bir metin değeri girebildiği bir alan olmalı Giriş kutusunun önerilen değeri 524x700 piksel olmalı Girilen değerin bir URL ya da dosya yolu olup olmadığının kontrolü isteğe bağlı Ek İsterler: Tüm giriş alanları için boş olup olmadığı kontrol edilmeli Eğer bir URL girişi yapıldıysa, bu URL'nin erişilebilir olup olmadığının kontrolü de yapılabilir.  Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    headbanner:
        " Desktop Görünümü Kullanıcının bir metin değeri girebildiği bir alan olmalı  Giriş kutusunun önerilen değeri 1920x50 piksel olmalı Girilen değerin bir URL ya da dosya yolu olup olmadığının kontrolü isteğe bağlı Mobil Görünümü : Kullanıcının bir metin değeri girebildiği bir alan olmalı Giriş kutusunun önerilen değeri 388x55 piksel olmalı Girilen değerin bir URL ya da dosya yolu olup olmadığının kontrolü isteğe bağlı HTML Renk Kodları Kullanıcının bir metin değeri girebildiği bir alan olmalı Girilen değerin geçerli bir HTML renk kodu formatında (örneğin, #FFFFFF) olup olmadığı kontrol edilmeli Metin Fontları Kullanıcının bir metin değeri girebildiği bir alan olmalı Girilen değerin geçerli bir font adı ya da font ailesi olup olmadığı kontrolü isteğe bağlı Yönlendirilecek Link Kullanıcının bir web adresi girebildiği bir alan olmalı Girilen değerin geçerli bir URL olup olmadığı kontrol edilmeli Ek İsterler: Tüm giriş alanları için boş olup olmadığı kontrol edilmeli Eğer bir URL girişi yapıldıysa, bu URL'nin erişilebilir olup olmadığının kontrolü de yapılabilir. Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    jackpot:
        "Jackpot Hediye Kodu: Kullanıcının bir metin değeri girebildiği bir alan olmalıdır. Girilen değerin jackpot hediye kodu formatına uygun olup olmadığı kontrol edilmelidir.Success1: Kullanıcının bir web adresi girebildiği bir alan olmalıdır. Giriş kutusunun kalp image url'i giriniz olarak belirtilmiş bir placeholder'ı olmalıdır. Girilen değerin geçerli bir URL olup olmadığı kontrol edilmelidir. Success 2: Kullanıcının bir web adresi girebildiği bir alan olmalıdır. Giriş kutusunun kalp image urli giriniz olarak belirtilmiş bir placeholderı olmalıdır. Girilen değerin geçerli bir URL olup olmadığı kontrol edilmelidir. Success 3: Kullanıcının bir web adresi girebildiği bir alan olmalıdır. Giriş kutusunun kalp image url'i giriniz olarak belirtilmiş bir placeholder'ı olmalıdır. Girilen değerin geçerli bir URL olup olmadığı kontrol edilmelidir. Success 4: Kullanıcının bir web adresi girebildiği bir alan olmalıdır. Giriş kutusunun kalp image url'i giriniz olarak belirtilmiş bir placeholder'ı olmalıdır. Girilen değerin geçerli bir URL olup olmadığı kontrol edilmelidir. Ek İsterler: Tüm giriş alanları için boş olup olmadığı kontrol edilmelidir. Eğer bir URL girişi yapıldıysa, bu URL'nin erişilebilir olup olmadığının kontrolü de yapılabilir. Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir",

    box: " Background Image: Kullanıcının bir metin değeri girebildiği bir alan olmalı Giriş kutusunun Önerilen 1000*600 olarak belirtilmiş bir placeholder'ı olmalı Kutu 1: Kullanıcının bir web adresi girebildiği bir alan olmalı Giriş kutusunun kutu image giriniz olarak belirtilmiş bir placeholder'ı olmalı Kutu 1 için ayrıca bir Hediye Kodu giriş alanı olmalı Kutu 2: Kullanıcının bir web adresi girebildiği bir alan olmalı Giriş kutusunun kutu image giriniz olarak belirtilmiş bir placeholder'ı olmalı Kutu 2 için ayrıca bir Hediye Kodu giriş alanı olmalı Kutu 3: Kullanıcının bir web adresi girebildiği bir alan olmalı Giriş kutusunun kutu image giriniz olarak belirtilmiş bir placeholder'ı olmalı Kutu 3 için ayrıca bir Hediye Kodu giriş alanı olmalı Kutu 4: Kullanıcının bir web adresi girebildiği bir alan olmalı Giriş kutusunun kutu image giriniz olarak belirtilmiş bir placeholder'ı olmalı Kutu 4 için ayrıca bir Hediye Kodu giriş alanı olmalı Ek İsterler: Tüm giriş alanları için boş olup olmadığı kontrol edilmeli Eğer bir URL girişi yapıldıysa bu URL'nin erişilebilir olup olmadığının kontrolü yapılabilir. Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    clover: " Yonca yaprağı Image: Kullanıcının bir metin değeri girebildiği bir alan olmalı Giriş kutusunun yonca yaprağı image olarak belirtilmiş bir placeholder'ı olmalı Yonca Sapı Image: Kullanıcının bir metin değeri girebildiği bir alan olmalı Giriş kutusunun yonca sapı image olarak belirtilmiş bir placeholder'ı olmalı  Cupon Code 1: Kullanıcının bir metin değeri girebildiği bir alan olmalı Giriş kutusunun kupon kodunu giriniz olarak belirtilmiş bir placeholder'ı olmalı Cupon Code 2: Kullanıcının bir metin değeri girebildiği bir alan olmalı Giriş kutusunun kupon kodunu giriniz olarak belirtilmiş bir placeholder'ı olmalı Cupon Code 3: Kullanıcının bir metin değeri girebildiği bir alan olmalı Giriş kutusunun kupon kodunu giriniz olarak belirtilmiş bir placeholder'ı olmalı Cupon Code 4: Kullanıcının bir metin değeri girebildiği bir alan olmalı Giriş kutusunun kupon kodunu giriniz olarak belirtilmiş bir placeholder'ı olmalı Ek İsterler:Tüm giriş alanları için boş olup olmadığı kontrol edilmeli. Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    badge: " Görsel URL: Kullanıcının bir metin değeri girebildiği bir alan olmalı. İsim özelliği (name attribute) badge_görsel_icon_url olarak belirlenmiş. Giriş kutusunun Görsel İkon Boyutunda Olmalıdır olarak belirtilmiş bir placeholder'ı olmalı.. Sayfanın Yönleneceği URL: Kullanıcının bir metin değeri girebildiği bir alan olmalı. İsim özelliği sayfanın yöneleceği url olarak belirlenmiş.  Ek İsterler: Giriş alanlarının boş olup olmadığı kontrol edilmeli.  URL formatında olup olmadıkları kontrol edilmeli.  Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    notificationicon:
        " Kaç Tane Notification: Kullanıcının bir sayı değeri girebildiği bir alan olmalı İsim özelliği kaç tane bidirge var olarak belirlenmiş Giriş kutusu için oninput özelliğiyle addnotification() fonksiyonu çağrılıyor notification_number id'sine sahip bir div içeriğini dolduracak bir fonksiyon olmalı Çan İkonu Image: Kullanıcının bir URL değeri girebildiği bir alan olmalı İsim özelliği çan ikonu url olarak belirlenmiş Giriş kutusunun png formatında olmalıdır olarak belirtilmiş bir placeholder'ı olmalı Desktop Görünümü: Kullanıcının bir URL değeri girebildiği bir alan olmalı İsim özelliği sayfa üzerindeki çan desktop görünümü olarak belirlenmiş Giriş kutusunun sayfanın üzerindeki konumu png formatında olmalıdır olarak belirtilmiş bir placeholder'ı olmalı Mobil Görünümü: Kullanıcının bir URL değeri girebildiği bir alan olmalı İsim özelliği sayfa üzerindeki çan mobil görünümü olarak belirlenmiş Giriş kutusunun sayfanın üzerindeki konumu png formatında olmalıdır olarak belirtilmiş bir placeholder'ı olmalı Ek İsterler: Giriş alanlarının boş olup olmadığı kontrol edilmeli URL formatında olup olmadıkları kontrol edilmeli İlgili URL'lerin png formatında olup olmadığı kontrol edilmeli Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    story: "Her story alanına kaç tane resimli icon gelsin: Kullanıcının bir sayı değeri girebildiği bir alan olmalı İsim özelliği kaç tane bidirge var olarak belirlenmiş Giriş kutusu için oninput özelliğiyle addStory() fonksiyonu çağrılıyor story_number id'sine sahip bir div içeriğini dolduracak bir fonksiyon olmalı Büyük Story Görseli: Kullanıcının bir URL değeri girebildiği bir alan olmalı İsim özelliği büyük story görseli olarak belirlenmiş Giriş kutusunun boyutları instagram story tarzında olabilir olarak belirtilmiş bir placeholder'ı olmalı Yönlendirme Linki: Kullanıcının bir URL değeri girebildiği bir alan olmalı İsim özelliği story yönlendirme linki olarak belirlenmiş Storylerin altına yazılacak açıklama: Kullanıcının çok satırlı metin girebileceği bir alan olmalı İsim özelliği Storylerin altına yazılacak açıklama olarak belirlenmiş Giriş alanının açıklama kısa ve öz olmalıdır olarak belirtilmiş bir placeholder'ı olmalı Ek İsterler: Giriş alanlarının boş olup olmadığı kontrol edilmeli URL formatında olup olmadıkları kontrol edilmeli Çok satırlı metin girişi için karakter sınırı ve uygun format kontrolü sağlanmalı. Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    anket: "Ankette Sorulacak Soru: Kullanıcının metin girebildiği bir alan olmalı İsim özelliği hangi aksiyon sonu çıkacağı olarak belirlenmiş Anket kaç maddeden oluşsun: Kullanıcının bir sayı değeri girebildiği bir alan olmalı İsim özelliği anketde olan maddeler olarak belirlenmiş Giriş kutusu için oninput özelliğiyle addAnket() fonksiyonu çağrılıyor anket_number id'sine sahip bir div içeriğini dolduracak bir fonksiyon olmalı Hangi Aksiyon Sonu Çıkacağı: Kullanıcının metin girebildiği bir alan olmalı İsim özelliği Hangi Aksiyon Sonu Çıkacağı olarak belirlenmiş Anket seçenekleri ve tasarımsal detaylar: Kullanıcının çok satırlı metin girebileceği bir alan olmalı İsim özelliği anket ve tasarımsal detaylar olarak belirlenmiş Giriş alanının Liste Numaralandırması alt alta yapılmak zorundadır olarak belirtilmiş bir placeholder'ı olmalı Ek İsterler: Giriş alanlarının boş olup olmadığı kontrol edilmeli Çok satırlı metin girişi için karakter sınırı ve uygun format kontrolü sağlanmalı. Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    findtowin:
        " Satır Sayısı: Kullanıcının bir sayı değeri girebildiği bir alan olmalı İsim özelliği satır sayısı olarak belirlenmiş Sütün Sayısı: Kullanıcının bir sayı değeri girebildiği bir alan olmalı İsim özelliği satır sayısı olarak belirlenmiş (Bu bir hata olabilir, sütün sayısı olarak değiştirilmeli) Kutular Kaç Farklı İmageden Oluşsun: Kullanıcının bir sayı değeri girebildiği bir alan olmalı İsim özelliği kaç tane image gözükeceği olarak belirlenmiş Giriş kutusu için oninput özelliğiyle addimage() fonksiyonu çağrılıyor image_number id'sine sahip bir div içeriğini dolduracak bir fonksiyon olmalı Background Desktop Görünümü: Kullanıcının bir URL değeri girebildiği bir alan olmalı İsim özelliği bul kazan arka plan desktop görünümü olarak belirlenmiş Önerilen boyut olarak 1920*1080 belirtilmiş Background Mobile Görünümü: Kullanıcının bir URL değeri girebildiği bir alan olmalı İsim özelliği bul kazan arka plan mobile görünümü olarak belirlenmiş Önerilen boyut olarak 400*800 belirtilmiş Ek İsterler: Giriş alanlarının boş olup olmadığı kontrol edilmeli URL için uygun format kontrolü sağlanmalı Kutular için belirlenen image sayısı kadar image yüklemesi yapılabilir olmalı. Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    popup: " Desktop Görünümü: Kullanıcının bir URL değeri girebildiği bir alan olmalı İsim özelliği pop-up desktop görünümü olarak belirlenmiş Önerilen boyut olarak 600*600 belirtilmiş Mobile görünümü: Kullanıcının bir URL değeri girebildiği bir alan olmalı İsim özelliği pop-up mobile görünümü olarak belirlenmiş Önerilen boyut olarak 300*500 belirtilmiş Yonlendirme Linki: Kullanıcının bir URL değeri girebildiği bir alan olmalı İsim özelliği pop-up yönlendirme linki olarak belirlenmiş Sayfa Kuralı: Kullanıcının metin girebildiği bir alan (textarea) olmalı Kullanıcının sayfa kurallarını maddeler halinde yazması gerekiyor İsim özelliği sayfa kuralları olarak belirlenmiş Ek İsterler: Giriş alanlarının boş olup olmadığı kontrol edilmeli URL için uygun format kontrolü sağlanmalı Metin alanının (textarea) maksimum karakter sınırı olup olmadığı belirlenmeli. Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    megabanner:
        " Büyük Resimli Desktop Görünümü: Kullanıcının bir URL değeri girebildiği bir alan İsim özelliği mega banner desktop büyük resim Önerilen boyut 1550*380 Küçük Resimli Desktop Görünümü: Kullanıcının bir URL değeri girebildiği bir alan  İsim özelliği mega banner desktop küçük resim Önerilen boyut 1550*110 Mobile Görünümü:  Kullanıcının bir URL değeri girebildiği bir alan  İsim özelliği mega banner mobile görünümü  Önerilen boyut 380*350  Cupon Code: Kullanıcının metin girebildiği bir alan İsim özelliği mega banner kupon kodu Görsel içerisinde kupon kodu varsa girilmesi önerilmiş Yonlendirme linki:  Kullanıcının bir URL değeri girebildiği bir alan İsim özelliği mega banner yönlendirme linki Tasarımsal Faaliyetler: Kullanıcının metin girebildiği bir alan (textarea) Eklemek istediği tasarımsal faaliyetler için kullanılır İsim özelliği mega banner tasarımsal faaliyetler Ek İsterler: Giriş alanlarının boş olup olmadığı kontrol edilmeli URL için uygun format kontrolü sağlanmalı Metin alanının (textarea) maksimum karakter sınırı olup olmadığı belirlenmeli.Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    bottombanner:
        "Desktop Görünümü: Kullanıcının bir URL değeri girebildiği bir alan İsim özelliği bottom banner desktop görünümü Önerilen boyut 1920*50 Mobile Görünümü: Kullanıcının bir URL değeri girebildiği bir alan İsim özelliği bottom banner mobile görünümü Önerilen boyut 388*55 Sayaç Süresi: Kullanıcının metin girebildiği bir alan İsim özelliği bottom banner sayaç süresi Sayılarla belirtme önerisi bulunmaktadır Cupon Code: Kullanıcının metin girebildiği bir alan İsim özelliği bottom banner kupon kodu Görsel içerisinde kupon kodu varsa girilmesi önerilmiş Tasarımsal Faaliyetler: Kullanıcının metin girebildiği bir alan (textarea) Eklemek istediği tasarımsal faaliyetler için kullanılır İsim özelliği bottom banner tasarımsal faaliyetler Ek İsterler: Giriş alanlarının boş olup olmadığı kontrol edilmeli URL için uygun format kontrolü sağlanmalı. Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    kulakcık:
        "Desktop Görünümü:  Kullanıcının bir URL değeri girebildiği bir alan İsim özelliği kulakçık desktop görünümü Önerilen boyut 200*250  Mobile Görünümü: Kullanıcının bir URL değeri girebildiği bir alan İsim özelliği kulakçık mobile görünümü  Önerilen boyut 180*200  Sayfadaki Konumu:  Kullanıcının bir URL değeri girebildiği bir alan İsim özelliği kulakçık Sayfadaki Konumu url  PNG formatında olmalı  Sayfanın Yönleneceği URL:  Kullanıcının metin girebildiği bir alan İsim özelliği kulakçık sayfanın yöneleceği url Cupon Code:  Kullanıcının metin girebildiği bir alan İsim özelliği kulakçık kupon kodu Görsel içerisinde kupon kodu varsa girilmesi önerilmiş Sayaç Süresi: Kullanıcının metin girebildiği bir alan İsim özelliği kulakçık sayaç süresi Kodu kullanmak için olan sayaç süresi bilgisi Tasarımsal Faaliyetler: Kullanıcının metin girebildiği bir alan (textarea) Eklemek istediği tasarımsal faaliyetler için kullanılır İsim özelliği bottom banner tasarımsal faaliyetler Ek İsterler: Giriş alanlarının boş olup olmadığı kontrol edilmeli URL için uygun format kontrolü sağlanmalı.  Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    mostsearched:
        "Kaç Alandan Oluşsun: Kullanıcının bir sayı değeri girebildiği bir alan  İsim özelliği: kaç alandan oluşacak   Sayfadaki Konumu: Kullanıcının bir URL değeri girebildiği bir alan  İsim özelliği: most searhed Sayfadaki Konumu url  Öneri: PNG formatında olmalı Sayfanın Yönleneceği URL:  Kullanıcının metin girebildiği bir alan İsim özelliği: kulakçık sayfanın yöneleceği url Tasarımsal Faaliyetler: Kullanıcının metin girebildiği bir alan (textarea) Eklemek istediği tasarımsal faaliyetler için kullanılır İsim özelliği: most searched tasarımsal faaliyetler.Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir. ",

    bannerpin:
        "Desktop Background İmage: Kullanıcının bir URL değeri girebildiği bir alan  İsim özelliği: banner pin Desktop Background İmage  Öneri: PNG formatında giriniz  Mobile Background İmage:  Kullanıcının bir URL değeri girebildiği bir alan  İsim özelliği: banner pin Mobile Background İmage Öneri: PNG formatında giriniz HTML ile Eklenecekse Background İmage ekleyin:  Kullanıcının bir URL değeri girebildiği bir alan İsim özelliği: html ile Background İmage Öneri: PNG formatında giriniz  Sayfadaki Konumu: Kullanıcının bir URL değeri girebildiği bir alan İsim özelliği: banner pin Sayfadaki Konumu url Öneri: PNG formatında olmalı Sayfanın Yönleneceği URL: Kullanıcının metin girebildiği bir alan İsim özelliği: kulakçık sayfanın yöneleceği url Tasarımsal Faaliyetler: Kullanıcının metin girebildiği bir alan (textarea) Eklemek istediği tasarımsal faaliyetler için kullanılır İsim özelliği: banner pin tasarımsal faaliyetler. Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",

    progressbar:
        "Sepetin Sayfadaki Konumu: Kullanıcının bir URL değeri girebildiği bir alan İsim özelliği: progress bar sepetin Sayfadaki Konumu url Öneri: PNG formatında olmalı  Sayfanın Yönleneceği URL: Kullanıcının bir URL değeri girebildiği bir alan  İsim özelliği: progress bar sayfanın yöneleceği url  Progress barın kampanyasına göre nasıl çalışıyor:  Kullanıcının metin girebildiği bir alan (textarea)  İsim özelliği: progress bar kampanyanın nasıl çalıştığı  Hangi ürünlere göstereleceği ve o ürünlerin ID si:  Kullanıcının metin girebildiği bir alan (textarea) Liste Numaralandırması alt alta yapılmak zorunda  İsim özelliği: progress bar ürün ve ıd olarak gösterilmesi  Tasarımsal Faaliyetler:  Kullanıcının metin girebildiği bir alan (textarea)  Eklemek istediği tasarımsal faaliyetler için kullanılır.Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
    crosscategory:
        "Ürünlerin url Sayısını Giriniz: Kullanıcının bir numara değeri girebildiği bir alan  İsim özelliği: kaç tane bidirge var  Bu alan, belirli bir fonksiyonu tetikleyebilir: addcrosscategory() Sayfadaki Konumu: Kullanıcının bir URL değeri girebildiği bir alan İsim özelliği: crossCategory Sayfadaki Konumu url Öneri: PNG formatında olmalı Sayfanın Yönleneceği URL: Kullanıcının bir metin değeri girebildiği bir alan  İsim özelliği: crossCategory sayfanın yöneleceği url Tasarımsal Faaliyetler: Kullanıcının metin girebildiği bir alan (textarea) Eklemek istediği tasarımsal faaliyetler için kullanılır (button, font vb.). Uygulanacak Sayfa Listesi : Kullanıcı bu alana birden fazla URL veya sayfa adı ekleyebilmeliGirişler alt alta listelenmeli Tarih Aralığı : Kullanıcı bir kampanyanın başlangıç ve bitiş tarihlerini seçebilmeliSeçilen tarihler arasındaki fark Aralığı Hesapla butonuna basıldığında hesaplanmalı ve sonuç gösterilmeli Capping Bilgisi: Kullanıcı bir dropdown menüsünden capping bilgisini seçebilmeli Visitor, Visit, Daily, Weekly, Monthly Seçilen bilgigösterilmeli Kullanıcı ayrıca seçilen capping türüne göre kaç defa gösterim yapılacağını bir sayı olarak girebilmeliDosya Seçenekleri Kullanıcı bir dosya adı girebilmeliKullanıcı kaydedeceği dosya türünü bir dropdown menüsünden seçebilmeli Text File, JS File, HTML File, SVG File, Doc File, PPT File Dosya Kaydetme Save As Text File butonuna basıldığında kullanıcıya belirlediği dosya türünde bir dosya indirme opsiyonu sunulmalı Ek İsterler:Form kullanıcının hatalı girişlerini kontrol etmeli ve kullanıcıya geri bildirimde bulunmalıDinamik olarak eklenen HEX renk kodu giriş alanlarında geçerli bir HEX renk kodu formatının kontrolü yapılmalıdırFormdaki tüm bilgileri kaydetme ve geri yükleme gibi ek fonksiyonlar da eklenmeliBu, verilen formun temel işlevselliğine dair numaralandırılmış bir listedir.",
};
messageInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        chatboxForm.dispatchEvent(new Event("submit"));
    }
});
chatboxForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const soru = messageInput.value.trim();

    if (soru === "") return;

    displayMessage(soru, "sent", true);

    const cevap = soruCevap[soru];
    if (cevap) {
        setTimeout(() => {
            displayMessage(cevap, "received", true);
        }, 1000);
    } else {
        setTimeout(() => {
            displayMessage(
                "Maalesef bu sorunun cevabını bilmiyorum.",
                "received",
                true
            );
        }, 1000);
    }

    messageInput.value = "";
});

function displayMessage(message, type, saveToStorage = false) {
    const div = document.createElement("div");
    div.className = `chatbox-message-item ${type}`;

    const spanText = document.createElement("span");
    spanText.className = "chatbox-message-item-text";
    spanText.innerText = message;
    div.appendChild(spanText);

    const currentTime = new Date();
    const timeString = `${currentTime
        .getHours()
        .toString()
        .padStart(2, "0")}:${currentTime
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;

    const spanTime = document.createElement("span");
    spanTime.className = "chatbox-message-item-time";
    spanTime.innerText = timeString;
    div.appendChild(spanTime);

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash delete-icon";
    deleteIcon.onclick = function () {
        div.remove();
    };
    div.appendChild(deleteIcon);

    chatboxMessageWrapper.appendChild(div);
    chatboxMessageWrapper.scrollTop = chatboxMessageWrapper.scrollHeight;
}

if (saveToStorage) {
    saveMessagesToStorage();
}

function saveMessagesToStorage() {
    const messages = [];
    const messageEls = chatboxMessageWrapper.querySelectorAll(
        ".chatbox-message-item"
    );
    messageEls.forEach((msg) => {
        messages.push({
            type: msg.classList.contains("sent") ? "sent" : "received",
            text: msg.querySelector(".chatbox-message-item-text").innerText,
            time: msg.querySelector(".chatbox-message-item-time").innerText,
        });
    });
    localStorage.setItem("chatMessages", JSON.stringify(messages));
}

function loadMessagesFromStorage() {
    const storedMessages = JSON.parse(
        localStorage.getItem("chatMessages") || "[]"
    );
    storedMessages.forEach((msg) => {
        displayMessage(msg.text, msg.type);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const chatboxForm = document.getElementById("chatboxForm");
    const messageInput = document.getElementById("messageInput");
    const chatboxContent = document.querySelector(".chatbox-message-content");

    chatboxForm.addEventListener("submit", function (e) {
        e.preventDefault();
        addMessageToChat();
    });

    messageInput.addEventListener("keyup", function (e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            addMessageToChat();
        }
    });

    function addMessageToChat() {
        const messageText = messageInput.value.trim();

        if (messageText !== "") {
            const messageEl = document.createElement("div");
            messageEl.classList.add("chatbox-message-item", "sent");

            const textSpan = document.createElement("span");
            textSpan.classList.add("chatbox-message-item-text");
            textSpan.innerText = messageText;

            const timeSpan = document.createElement("span");
            timeSpan.classList.add("chatbox-message-item-time");
            const currentTime = new Date();
            timeSpan.innerText =
                currentTime.getHours() + ":" + currentTime.getMinutes();

            messageEl.appendChild(textSpan);
            messageEl.appendChild(timeSpan);
            chatboxContent.appendChild(messageEl);

            messageInput.value = "";
        }
    }
});
function typeMessage(element, message, callback, index = 0) {
    if (index < message.length) {
        element.textContent += message[index];
        setTimeout(
            () => typeMessage(element, message, callback, index + 1),
            50
        ); // 50ms'de bir harf ekler
    } else {
        if (callback) callback();
    }
}

function displayMessage(message, type, saveToStorage = false) {
    const div = document.createElement("div");
    div.className = `chatbox-message-item ${type}`;

    const spanText = document.createElement("span");
    spanText.className = "chatbox-message-item-text";
    div.appendChild(spanText);

    const currentTime = new Date();
    const timeString = `${currentTime
        .getHours()
        .toString()
        .padStart(2, "0")}:${currentTime
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;

    const spanTime = document.createElement("span");
    spanTime.className = "chatbox-message-item-time";
    spanTime.innerText = timeString;
    div.appendChild(spanTime);

    chatboxMessageWrapper.appendChild(div);

    typeMessage(spanText, message, () => {
        chatboxMessageWrapper.scrollTop = chatboxMessageWrapper.scrollHeight;
    });
}
function typeMessage(element, message, callback, index = 0) {
    if (index < message.length) {
        element.textContent += message[index];
        setTimeout(
            () => typeMessage(element, message, callback, index + 1),
            50
        ); // 50ms'de bir harf ekler
    } else {
        element.style.borderRight = "none"; // Daktilo efekti bittikten sonra imleci kaldır
        if (callback) callback();
    }
}
function typeMessage(element, message, callback, index = 0) {
    if (index === 0) {
        element.style.borderRight = "0.2em solid"; // Daktilo efekti başladığında imleci göster
    }

    if (index < message.length) {
        element.textContent += message[index];
        currentTimeout = setTimeout(
            () => typeMessage(element, message, callback, index + 1),
            20
        ); // 20ms'de bir harf ekler, bu değeri daha da azaltabilirsiniz
    } else {
        element.style.borderRight = "none"; // Daktilo efekti bittikten sonra imleci kaldır
        if (callback) callback();
    }
}
