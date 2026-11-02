// İlçe ve semt sayfalarının özgün içeriği.
// Kural (içerik kararları): doğrulanamayan iddia, fiyat, süre garantisi yazılmaz.
// Yalnızca ilçenin genel coğrafi/yapısal özelliklerinden ve taşınma planlamasından söz edilir.
// neighbors: gerçek komşu ilçe/semt slug'ları — sayfa altındaki iç bağlantılar buradan üretilir.

export const districtContent = {
  // ───────────── Öncelikli bölge: İkitelli / Başakşehir çevresi ─────────────
  basaksehir: {
    meta: "Başakşehir evden eve nakliyat: Kayaşehir, Bahçeşehir, Altınşehir ve İkitelli'de site ve yüksek blok taşımaları. Başakşehir merkezli ekip, ücretsiz ekspertiz.",
    intro: [
      "Ekibimiz Başakşehir merkezli çalıştığı için Başakşehir evden eve nakliyat taşımalarında bölgeye hızlı ulaşabiliyoruz. Ekspertiz için aynı gün adrese gelebilir, taşınma gününü site yönetiminin uygun saatlerine göre planlayabiliriz.",
      "İlçede konutların büyük bölümü güvenlikli sitelerde ve yüksek bloklarda. Kayaşehir, Bahçeşehir ve Başakşehir merkezdeki projelerde yük asansörü rezervasyonu, otopark giriş yüksekliği ve taşınma saatleri genellikle site yönetimince belirleniyor; bu kuralları taşınmadan önce sizin adınıza teyit ediyoruz.",
    ],
    mahalleler: ["Kayabaşı (Kayaşehir)", "Bahçeşehir 1. ve 2. Kısım", "Başakşehir", "Altınşehir", "Güvercintepe", "Şahintepe", "Ziya Gökalp", "Şamlar"],
    notes: [
      "Site taşımalarında yük asansörü ve taşınma saati için yönetimden önceden randevu alınır.",
      "Yüksek katlı bloklarda bina içi asansör yetersizse dış cephe asansörü planlanır.",
      "İkitelli OSB ve çevresindeki işyerleri için mesai dışı ve hafta sonu sevkiyat yapılabilir.",
    ],
    faq: [
      { q: "Başakşehir'de aynı gün ekspertiz yapıyor musunuz?", a: "Ekibimiz Başakşehir merkezli olduğu için ilçe içindeki adreslere çoğu zaman aynı gün ekspertiz için gelebiliyoruz. Görüntülü görüşmeyle uzaktan ekspertiz de mümkün." },
      { q: "Site yönetimi izinlerini siz mi alıyorsunuz?", a: "Taşınma tarihi kesinleşince yük asansörü, araç giriş saati ve koruma malzemesi gibi kuralları yönetimle birlikte netleştiriyoruz; sizden yalnızca dairenin bilgileri ve onay gerekiyor." },
    ],
    neighbors: ["ikitelli", "kucukcekmece", "esenyurt", "arnavutkoy", "sultangazi", "eyupsultan", "bagcilar", "esenler"],
  },

  ikitelli: {
    semt: true,
    parent: "basaksehir",
    name: "İkitelli",
    meta: "İkitelli nakliyat: İkitelli OSB işyeri ve depo taşıma, paletli yük sevkiyatı, Atatürk ve Ziya Gökalp mahallelerinde evden eve nakliyat. Başakşehir merkezli ekip.",
    intro: [
      "İkitelli, hem konut hem de İstanbul'un en büyük sanayi bölgelerinden biri olan İkitelli Organize Sanayi Bölgesi'ni barındırıyor. Bu yüzden İkitelli nakliyat taleplerinin önemli bir kısmı ev taşımasından çok işyeri, atölye, depo ve paletli ticari yük sevkiyatı oluyor.",
      "Başakşehir merkezli ekibimiz İkitelli'ye çok yakın. OSB içindeki sitelerde (Demirciler, Aymakoop, Metal İş, Tümsan gibi) yükleme rampası, forklift ihtiyacı ve kapı giriş kuralları her blokta farklı olabildiği için sevkiyattan önce yerinde keşif yapıyoruz. Konut tarafında Atatürk ve Ziya Gökalp mahallelerindeki apartman ve site taşımalarını da üstleniyoruz.",
    ],
    mahalleler: ["İkitelli OSB", "Atatürk Mahallesi", "Ziya Gökalp", "Şahintepe", "Güvercintepe", "Mehmet Akif Ersoy"],
    notes: [
      "İşyeri taşımalarında üretimi durdurmamak için akşam ve hafta sonu çalışılabilir.",
      "Paletli yükler için forklift ve rampa durumu önceden kontrol edilir.",
      "Ofis taşımalarında dosya ve bilgisayarlar etiketlenip birim bazında yerleştirilir.",
    ],
    faq: [
      { q: "İkitelli OSB içinde atölye taşıyor musunuz?", a: "Evet. Makine ağırlığı, söküm ihtiyacı ve rampa durumuna göre araç ve ekip planlanır; ağır makineler için gerekirse vinç ve forklift çözüm ortaklarımızla çalışırız." },
      { q: "İkitelli'den İstanbul dışına sevkiyat yapıyor musunuz?", a: "Evet, İkitelli'den Kocaeli, Tekirdağ, Bursa ve Ankara başta olmak üzere şehirlerarası parça ve komple yük sevkiyatı yapıyoruz." },
    ],
    neighbors: ["basaksehir", "kucukcekmece", "bagcilar", "esenler", "sultangazi", "hadimkoy"],
  },

  hadimkoy: {
    semt: true,
    parent: "arnavutkoy",
    name: "Hadımköy",
    meta: "Hadımköy nakliyat: Hadımköy sanayi bölgesi depo ve fabrika sevkiyatı, paletli yük taşıma, evden eve nakliyat. Esenyurt, Arnavutköy ve Büyükçekmece'ye yakın ekip.",
    intro: [
      "Hadımköy; Arnavutköy, Esenyurt ve Büyükçekmece sınırlarının buluştuğu, lojistik depoları ve fabrikalarıyla bilinen bir sanayi bölgesi. TEM otoyolu bağlantısı sayesinde Trakya ve Anadolu yönüne sevkiyat için de sık tercih ediliyor.",
      "Hadımköy nakliyat işlerimizde ağırlık ticari yükte: depo değişikliği, fabrika içi ekipman taşıma, paletli ürün sevkiyatı ve parça yük. Bölgedeki yeni konut projelerinde oturanlar için evden eve nakliyat da yapıyoruz. Başakşehir'deki merkezimizden Hadımköy'e TEM bağlantısıyla hızlı ulaşabiliyoruz.",
    ],
    mahalleler: ["Hadımköy", "Ömerli", "Deliklikaya", "Akbursa", "Esenyurt Akçaburgaz", "Büyükçekmece Mimarsinan"],
    notes: [
      "Depo taşımalarında raf söküm-kurulum ve stok etiketlemesi planlanır.",
      "Fabrika teslimatlarında kapı giriş saatleri ve iş güvenliği kuralları önceden öğrenilir.",
      "Trakya yönüne (Tekirdağ, Kırklareli) sevkiyatlar aynı gün planlanabilir.",
    ],
    faq: [
      { q: "Hadımköy'den paletli yük alıyor musunuz?", a: "Evet. Palet sayısı ve ağırlığa göre uygun araç belirlenir; büyük hacimli yüklerde çözüm ortaklarımızın büyük araçlarıyla çalışırız." },
      { q: "Hadımköy'de evden eve nakliyat yapıyor musunuz?", a: "Evet, Hadımköy ve çevresindeki konut projelerinde ekspertizle fiyatlandırılan, sözleşmeli evden eve nakliyat yapıyoruz." },
    ],
    neighbors: ["arnavutkoy", "esenyurt", "buyukcekmece", "catalca", "basaksehir", "ikitelli"],
  },

  esenyurt: {
    meta: "Esenyurt evden eve nakliyat: yüksek bloklarda asansörlü taşıma, site yönetimi koordinasyonu, Kıraç'ta ticari yük. Ücretsiz ekspertiz, sözleşmeli hizmet.",
    intro: [
      "Esenyurt, İstanbul'un en kalabalık ilçesi ve konut stoğunun büyük kısmı son yıllarda yapılmış yüksek bloklardan oluşuyor. Esenyurt evden eve nakliyat taşımalarında en çok karşılaştığımız konular yüksek kat, sınırlı yük asansörü ve site içi araç giriş kuralları.",
      "Bu yüzden Esenyurt'ta ekspertiz sırasında kat sayısını, asansör ölçüsünü ve aracın binaya ne kadar yaklaşabileceğini mutlaka not ediyoruz. Bina içi asansöre sığmayan koltuk, gardırop ve beyaz eşya için dış cephe asansörü planlanıyor. Kıraç ve Akçaburgaz tarafındaki işyerleri için ticari yük taşıması da yapıyoruz.",
    ],
    mahalleler: ["Saadetdere", "Kıraç", "Akçaburgaz", "Mehterçeşme", "Pınar", "Yeşilkent", "Zafer", "Cumhuriyet"],
    notes: [
      "Yüksek bloklarda asansör ölçüsü ekspertizde alınır, sığmayan eşya için dış asansör planlanır.",
      "Site içi taşınma saatleri ve otopark giriş yüksekliği önceden öğrenilir.",
      "Yoğun cadde ve sokaklarda aracın park yeri taşınma sabahı sabitlenir.",
    ],
    faq: [
      { q: "Esenyurt'ta 15. kat üstü taşıma yapıyor musunuz?", a: "Evet. Bina asansörü yeterliyse asansörle, değilse dış cephe asansörüyle taşınır; ekspertizde hangisinin gerektiği netleşir." },
      { q: "Esenyurt içi kısa mesafeli taşınmada fiyat neye göre belirlenir?", a: "Mesafeden çok eşya hacmi, kat sayısı, asansör ihtiyacı ve söküm-montaj belirler. Ekspertiz ücretsizdir ve fiyat yazılı verilir." },
    ],
    neighbors: ["hadimkoy", "avcilar", "beylikduzu", "buyukcekmece", "basaksehir", "arnavutkoy", "kucukcekmece"],
  },

  arnavutkoy: {
    meta: "Arnavutköy evden eve nakliyat: Hadımköy, Taşoluk, Bolluca ve Haraççı'da müstakil ev, site ve depo taşımaları. Başakşehir'e komşu ekip, ücretsiz ekspertiz.",
    intro: [
      "Arnavutköy geniş bir alana yayılan, bir yanda müstakil evler ve köy yerleşimleri, diğer yanda yeni site projeleri ve Hadımköy sanayi bölgesini barındıran bir ilçe. Arnavutköy evden eve nakliyat taşımalarında adresler arası mesafe uzun olabildiği için rota planlaması önemli.",
      "Başakşehir'e komşu olduğumuz için Arnavutköy'e kısa sürede ulaşıyoruz. Müstakil evlerde bahçe eşyası, depo ve odunluk gibi alanlardaki eşyaları da hacme dahil ederek doğru araç seçiyoruz. Hadımköy tarafındaki işyerleri için ticari yük ve depo taşıması da yapıyoruz.",
    ],
    mahalleler: ["Hadımköy", "Taşoluk", "Bolluca", "Haraççı", "Anadolu", "Mustafa Kemal Paşa", "Karlıbayır", "Boyalık"],
    notes: [
      "Müstakil evlerde bahçe ve depo eşyası hacme dahil edilir.",
      "Dar köy yollarında araç boyutu önceden seçilir, gerekirse aktarma yapılır.",
      "Yeni site projelerinde yönetim izinleri taşınma öncesi alınır.",
    ],
    faq: [
      { q: "Arnavutköy'ün köy yerleşimlerine taşıma yapıyor musunuz?", a: "Evet. Yol genişliğine göre kamyonet veya panelvan seçilir; büyük araç giremeyen yerlerde aktarma planlanır." },
      { q: "Arnavutköy'den Başakşehir'e taşınma ne kadar sürer?", a: "Süre eşya hacmine ve kat durumuna bağlı. Ekspertizde size tahmini bir program verilir." },
    ],
    neighbors: ["hadimkoy", "basaksehir", "esenyurt", "buyukcekmece", "catalca", "eyupsultan"],
  },

  kucukcekmece: {
    meta: "Küçükçekmece evden eve nakliyat: Halkalı, Atakent, Sefaköy, Cennet ve Kanarya'da apartman ve site taşımaları. Başakşehir'e komşu ekip, sözleşmeli hizmet.",
    intro: [
      "Küçükçekmece, Halkalı ve Atakent'teki yeni site projelerinden Sefaköy, Cennet ve Kanarya'daki eski apartmanlara kadar çok farklı konut tiplerini bir arada barındırıyor. Küçükçekmece evden eve nakliyat taşımalarında bu yüzden her adres için ayrı planlama yapıyoruz.",
      "Eski apartmanlarda dar merdiven boşluğu ve asansörsüz binalar sık görülüyor; buralarda büyük eşyalar sökülerek ya da dış cephe asansörüyle indiriliyor. Halkalı tarafındaki sitelerde ise yük asansörü randevusu ve araç giriş izni öne çıkıyor. Başakşehir'e komşu olduğumuz için ilçenin tamamına hızlı ulaşıyoruz.",
    ],
    mahalleler: ["Halkalı", "Atakent", "Sefaköy", "Cennet", "Kanarya", "Söğütlüçeşme", "Tevfikbey", "Yarımburgaz"],
    notes: [
      "Asansörsüz eski binalarda gardırop ve koltuklar sökülerek ya da dış asansörle taşınır.",
      "Halkalı sitelerinde yük asansörü randevusu önceden alınır.",
      "E-5 ve TEM yoğunluğuna göre taşınma saati sabah erken planlanır.",
    ],
    faq: [
      { q: "Halkalı'daki sitelerde taşıma yapıyor musunuz?", a: "Evet. Site yönetimiyle randevu ve kuralları netleştirip taşınma gününü buna göre planlıyoruz." },
      { q: "Asansörsüz 5. kattan taşınma mümkün mü?", a: "Evet. Merdiven yeterliyse elle taşınır; büyük eşyalar için dış cephe asansörü daha hızlı ve güvenli olabilir. Ekspertizde birlikte karar verilir." },
    ],
    neighbors: ["basaksehir", "ikitelli", "avcilar", "esenyurt", "bahcelievler", "bagcilar", "bakirkoy"],
  },

  avcilar: {
    meta: "Avcılar evden eve nakliyat: Ambarlı, Cihangir, Denizköşkler ve Firuzköy'de apartman ve site taşıma. Asansörlü, sözleşmeli nakliyat; ücretsiz ekspertiz.",
    intro: [
      "Avcılar'da konut stoğu, merkezdeki eski apartmanlarla Firuzköy ve Denizköşkler çevresindeki daha yeni sitelerden oluşuyor. Üniversite çevresinde öğrenci evleri de yoğun; bu yüzden Avcılar evden eve nakliyat taleplerinin bir kısmı parça eşya ve küçük hacimli taşımalar.",
      "Avcılar'da E-5'e yakın cadde ve sokaklarda trafik yoğun olduğundan aracın park yeri ve taşınma saati önceden planlanıyor. Eski binalarda merdiven genişliği ve asansör durumu ekspertizde kontrol ediliyor, gerekirse dış cephe asansörü kuruluyor.",
    ],
    mahalleler: ["Ambarlı", "Cihangir", "Denizköşkler", "Firuzköy", "Gümüşpala", "Merkez", "Mustafa Kemal Paşa", "Üniversite"],
    notes: [
      "Öğrenci evi ve tek oda taşımaları için parça eşya hizmeti uygundur.",
      "E-5 çevresinde taşınma saati trafiğe göre seçilir.",
      "Eski binalarda merdiven ve asansör ölçüsü ekspertizde alınır.",
    ],
    faq: [
      { q: "Avcılar'da öğrenci evi taşıyor musunuz?", a: "Evet. Az eşyalı taşınmalar için parça eşya hizmetimizle uygun maliyetli taşıma yapıyoruz." },
      { q: "Avcılar'dan Esenyurt veya Beylikdüzü'ne taşınıyorum, nasıl ilerliyor?", a: "Ekspertizden sonra yazılı fiyat verilir, ambalaj ve söküm aynı gün yapılır, eşyalar yeni evde kurularak teslim edilir." },
    ],
    neighbors: ["kucukcekmece", "esenyurt", "beylikduzu", "basaksehir", "bahcelievler"],
  },

  beylikduzu: {
    meta: "Beylikdüzü evden eve nakliyat: Yakuplu, Kavaklı, Adnan Kahveci ve Gürpınar'da site ve yüksek blok taşımaları. Asansörlü, sigorta seçenekli nakliyat.",
    intro: [
      "Beylikdüzü, büyük ölçüde son yirmi yılda yapılmış güvenlikli sitelerden ve yüksek bloklardan oluşan planlı bir ilçe. Beylikdüzü evden eve nakliyat taşımalarında site yönetimi kuralları, yük asansörü randevusu ve otopark giriş yüksekliği en önemli planlama konuları.",
      "Kavaklı ve Gürpınar tarafındaki müstakil ve villa tipi konutlarda ise bahçe mobilyası, şömine ekipmanı ve geniş salon takımları gibi hacimli eşyalar sık çıkıyor. Ekspertizde bunları ölçüp doğru araç ve ekip sayısını belirliyoruz.",
    ],
    mahalleler: ["Yakuplu", "Kavaklı", "Adnan Kahveci", "Gürpınar", "Barış", "Cumhuriyet", "Dereağzı", "Marmara"],
    notes: [
      "Site taşınmalarında yönetim randevusu ve koruma malzemesi kuralı önceden öğrenilir.",
      "Villa ve müstakil evlerde bahçe eşyası ve hacimli mobilyalar ayrıca ölçülür.",
      "Yüksek bloklarda dış asansör gerekip gerekmediği ekspertizde netleşir.",
    ],
    faq: [
      { q: "Beylikdüzü'nde villa taşıması yapıyor musunuz?", a: "Evet. Villa taşımalarında eşya hacmine göre birden fazla sefer veya çözüm ortağımızın büyük aracı planlanabilir." },
      { q: "Taşınırken site yönetimine ne bildirmem gerekiyor?", a: "Taşınma tarihini ve saatini bildirmeniz yeterli; araç plakası ve ekip bilgisini biz paylaşıyoruz." },
    ],
    neighbors: ["esenyurt", "avcilar", "buyukcekmece", "kucukcekmece"],
  },

  buyukcekmece: {
    meta: "Büyükçekmece evden eve nakliyat: Mimarsinan, Kumburgaz, Tepecik ve Celaliye'de yazlık, villa ve apartman taşımaları. Sözleşmeli nakliyat, ücretsiz ekspertiz.",
    intro: [
      "Büyükçekmece; sahildeki yazlık siteleri, Mimarsinan ve Kumburgaz çevresindeki villalar ve merkezdeki apartmanlarla karma bir yapıya sahip. Büyükçekmece evden eve nakliyat taleplerinde yazlıktan kışlığa, kışlıktan yazlığa sezonluk taşımalar da önemli yer tutuyor.",
      "Yazlık sitelerde sezon başı ve sonunda taşınma yoğunluğu arttığı için tarihi erken belirlemenizi öneriyoruz. Merkezdeki apartmanlarda ise sokak genişliği ve park yeri ekspertizde kontrol ediliyor.",
    ],
    mahalleler: ["Mimarsinan", "Kumburgaz", "Tepecik", "Celaliye", "Kamiloba", "Alkent", "Pınartepe", "Fatih"],
    notes: [
      "Yazlık taşımalarında sezon yoğunluğu nedeniyle tarih erken belirlenmelidir.",
      "Villa ve müstakil evlerde bahçe eşyası hacme eklenir.",
      "Kısa süreli eşya depolama ile taşınma tarihleri arasındaki boşluk kapatılabilir.",
    ],
    faq: [
      { q: "Yazlığımdaki eşyaları kış için depolayabilir misiniz?", a: "Evet. Eşya depolama hizmetimizle eşyalarınızı ambalajlayıp depoya alır, istediğiniz tarihte geri teslim ederiz." },
      { q: "Büyükçekmece'den İstanbul içine taşınma yapıyor musunuz?", a: "Evet, Büyükçekmece'den İstanbul'un tüm ilçelerine sözleşmeli evden eve nakliyat yapıyoruz." },
    ],
    neighbors: ["beylikduzu", "esenyurt", "hadimkoy", "catalca", "silivri", "arnavutkoy"],
  },

  bagcilar: {
    meta: "Bağcılar evden eve nakliyat: Güneşli, Mahmutbey, Kirazlı ve Yenimahalle'de apartman, ofis ve atölye taşımaları. İkitelli'ye komşu ekip, ücretsiz ekspertiz.",
    intro: [
      "Bağcılar, yoğun apartman dokusu ve Güneşli-Mahmutbey hattındaki iş merkezleri, matbaa ve tekstil atölyeleriyle hem konut hem ticari taşımanın sık yapıldığı bir ilçe. Bağcılar evden eve nakliyat taşımalarında dar sokaklar ve bitişik nizam binalar en çok dikkat gerektiren konu.",
      "Dar sokaklarda büyük araç yerine kamyonet veya panelvan tercih ediyor, gerektiğinde aktarma yapıyoruz. Güneşli ve Mahmutbey'deki ofis ve atölye taşımalarında iş akışını durdurmamak için akşam ve hafta sonu çalışabiliyoruz.",
    ],
    mahalleler: ["Güneşli", "Mahmutbey", "Kirazlı", "Yenimahalle", "Demirkapı", "Göztepe", "Kemalpaşa", "Yıldıztepe"],
    notes: [
      "Dar sokaklarda araç boyutu adrese göre seçilir.",
      "Atölye ve ofis taşımaları mesai dışına planlanabilir.",
      "Asansörsüz binalarda büyük eşya için dış asansör seçeneği değerlendirilir.",
    ],
    faq: [
      { q: "Bağcılar'da dar sokağa araç girebiliyor mu?", a: "Ekspertizde sokak kontrol edilir; büyük araç giremiyorsa küçük araçla aktarma yapılır." },
      { q: "Güneşli'deki ofisimizi hafta sonu taşıyabilir misiniz?", a: "Evet, ofis taşımalarını iş günü kaybı olmasın diye hafta sonu veya akşam saatlerinde yapabiliyoruz." },
    ],
    neighbors: ["ikitelli", "basaksehir", "esenler", "gungoren", "bahcelievler", "kucukcekmece"],
  },

  esenler: {
    meta: "Esenler evden eve nakliyat: Menderes, Fevzi Çakmak, Kemer ve Oruçreis'te apartman taşıma, parça eşya ve otogar çevresi sevkiyat. Sözleşmeli hizmet.",
    intro: [
      "Esenler yoğun yerleşimli, çoğunlukla 4-6 katlı apartmanlardan oluşan bir ilçe. Esenler evden eve nakliyat işlerinde dar ve eğimli sokaklar, asansörsüz binalar ve sınırlı park alanı en sık karşılaştığımız durumlar.",
      "Bu yüzden Esenler'de taşınma gününden önce aracın duracağı yeri belirliyor, gerekirse sokağın uygun saatini seçiyoruz. Asansörsüz binalarda büyük eşyalar sökülüyor ya da dış cephe asansörüyle indiriliyor. Otogara yakınlık nedeniyle parça eşya sevkiyatı talepleri de sık geliyor.",
    ],
    mahalleler: ["Menderes", "Fevzi Çakmak", "Kemer", "Oruçreis", "Turgut Reis", "Nine Hatun", "Namık Kemal", "Tuna"],
    notes: [
      "Eğimli sokaklarda araç güvenli konuma park edilir, yükleme ona göre yapılır.",
      "Asansörsüz binalarda dış asansör ekspertizde değerlendirilir.",
      "Az eşyalı taşınmalar için parça eşya hizmeti daha ekonomiktir.",
    ],
    faq: [
      { q: "Esenler'de asansörsüz binadan taşıma yapıyor musunuz?", a: "Evet. Merdiven uygunsa elle, değilse dış cephe asansörüyle taşıyoruz." },
      { q: "Tek parça eşya taşıyor musunuz?", a: "Evet, buzdolabı, koltuk takımı gibi tek parça eşyalar için de parça eşya taşıma hizmetimiz var." },
    ],
    neighbors: ["bagcilar", "ikitelli", "gungoren", "bayrampasa", "sultangazi", "gaziosmanpasa"],
  },

  sultangazi: {
    meta: "Sultangazi evden eve nakliyat: Cebeci, Habipler, Esentepe ve 50. Yıl'da apartman ve yeni konut taşımaları. Başakşehir'e komşu ekip, ücretsiz ekspertiz.",
    intro: [
      "Sultangazi'de eski yapılaşma ile kentsel dönüşümle yükselen yeni apartmanlar yan yana. Sultangazi evden eve nakliyat taşımalarında bir yandan dar sokaklardaki eski binalar, diğer yandan yeni blokların site kuralları ile çalışıyoruz.",
      "Kentsel dönüşüm nedeniyle geçici olarak taşınan ve birkaç ay sonra yeni dairesine dönecek aileler için eşya depolama hizmetimiz de uygun. Başakşehir'e komşu olduğumuz için Sultangazi'ye hızlı ulaşıyoruz.",
    ],
    mahalleler: ["Cebeci", "Habipler", "Esentepe", "50. Yıl", "Gazi", "Uğur Mumcu", "Cumhuriyet", "Zübeyde Hanım"],
    notes: [
      "Kentsel dönüşüm taşınmalarında geçici depolama seçeneği sunulur.",
      "Eski binalarda merdiven ve sokak genişliği ekspertizde kontrol edilir.",
      "Yeni bloklarda yönetim randevusu önceden alınır.",
    ],
    faq: [
      { q: "Kentsel dönüşüm için eşyalarımı depolayabilir misiniz?", a: "Evet. Eşyalarınız ambalajlanıp depoya alınır, yeni daireniz hazır olduğunda kurulumla teslim edilir." },
      { q: "Sultangazi'de hafta sonu taşınma yapılıyor mu?", a: "Evet, hafta sonu da çalışıyoruz; yoğun dönemlerde tarihi erken belirlemenizi öneririz." },
    ],
    neighbors: ["basaksehir", "ikitelli", "gaziosmanpasa", "eyupsultan", "esenler", "arnavutkoy"],
  },

  gaziosmanpasa: {
    meta: "Gaziosmanpaşa evden eve nakliyat: Karadeniz, Yıldıztabya, Bağlarbaşı ve Karayolları'nda apartman taşımaları. Eğimli sokaklara uygun araç, sözleşmeli hizmet.",
    intro: [
      "Gaziosmanpaşa engebeli arazisi, eğimli ve dar sokaklarıyla bilinen bir ilçe. Gaziosmanpaşa evden eve nakliyat taşımalarında aracın binaya ne kadar yaklaşabileceği ve yükleme yapılacak noktanın güvenliği en önemli konu.",
      "Ekspertizde sokak eğimini ve genişliğini kontrol edip uygun araç seçiyoruz. Eğimli sokaklarda dış cephe asansörü kurulumu da zemine göre değerlendiriliyor.",
    ],
    mahalleler: ["Karadeniz", "Yıldıztabya", "Bağlarbaşı", "Karayolları", "Merkez", "Pazariçi", "Sarıgöl", "Fevzi Çakmak"],
    notes: [
      "Eğimli sokaklarda araç güvenli konumda sabitlenir.",
      "Dış asansör kurulumu zemin uygunluğuna göre planlanır.",
      "Dar sokaklarda küçük araçla aktarma yapılabilir.",
    ],
    faq: [
      { q: "Gaziosmanpaşa'da yokuşlu sokakta taşıma yapılıyor mu?", a: "Evet. Araç güvenli konuma alınır, gerekirse eşyalar kısa mesafe elle taşınarak yüklenir." },
      { q: "Ekspertiz ücretli mi?", a: "Hayır, ekspertiz ücretsizdir; yerinde ya da görüntülü yapılabilir." },
    ],
    neighbors: ["sultangazi", "esenler", "bayrampasa", "eyupsultan"],
  },

  // ───────────── Avrupa Yakası: merkez ve batı ─────────────
  bahcelievler: {
    meta: "Bahçelievler evden eve nakliyat: Yenibosna, Şirinevler, Kocasinan ve Siyavuşpaşa'da apartman taşımaları. Asansörlü, sözleşmeli nakliyat, ücretsiz ekspertiz.",
    intro: [
      "Bahçelievler, E-5 boyunca uzanan yoğun bir apartman ilçesi. Bahçelievler evden eve nakliyat taşımalarında ana caddelere yakın binalarda trafik ve park, ara sokaklarda ise bitişik nizam binaların dar girişleri planlamayı belirliyor.",
      "Yenibosna ve Şirinevler gibi yoğun bölgelerde araç park yerini taşınma sabahı sabitliyor, yüklemeyi hızlı tamamlamak için ekip sayısını eşya hacmine göre ayarlıyoruz.",
    ],
    mahalleler: ["Yenibosna", "Şirinevler", "Kocasinan", "Siyavuşpaşa", "Soğanlı", "Çobançeşme", "Bahçelievler", "Hürriyet"],
    notes: [
      "E-5 çevresinde taşınma saati trafiğe göre seçilir.",
      "Dar bina girişlerinde mobilyalar sökülerek taşınır.",
      "Yoğun sokaklarda park yeri önceden ayarlanır.",
    ],
    faq: [
      { q: "Bahçelievler'de aynı gün taşınma mümkün mü?", a: "Müsaitliğe bağlı olarak acil ve aynı gün taşıma yapabiliyoruz; hemen arayıp sorabilirsiniz." },
      { q: "Mobilyaları kim söküp kuruyor?", a: "Söküm ve montajı ekibimizdeki marangozlar yapar; ek ücret varsa teklifte yazılı belirtilir." },
    ],
    neighbors: ["bakirkoy", "bagcilar", "kucukcekmece", "gungoren", "avcilar"],
  },

  bakirkoy: {
    meta: "Bakırköy evden eve nakliyat: Ataköy, Yeşilköy, Florya ve Kartaltepe'de site ve eski apartman taşımaları. Asansörlü, sigorta seçenekli nakliyat.",
    intro: [
      "Bakırköy'de Ataköy'ün büyük siteleri, Yeşilköy ve Florya'nın bahçeli evleri ve merkezdeki eski apartmanlar bir arada. Bakırköy evden eve nakliyat taşımalarında değerli mobilya, antika ve piyano gibi özel eşyalara sık rastlıyoruz.",
      "Hassas ve değerli eşyalar için özel ambalaj ve gerekirse ahşap sandık kullanıyoruz; talep halinde nakliyat sigortası düzenleniyor. Ataköy sitelerinde yönetim kuralları, eski apartmanlarda ise asansör ve merdiven ölçüsü önceden kontrol ediliyor.",
    ],
    mahalleler: ["Ataköy", "Yeşilköy", "Florya", "Kartaltepe", "Zeytinlik", "Osmaniye", "Sakızağacı", "Şenlikköy"],
    notes: [
      "Antika ve değerli eşyalar için özel ambalaj kullanılır.",
      "Piyano gibi özel eşyaların taşınması ekspertizde ayrıca planlanır.",
      "Talep halinde nakliyat sigortası düzenlenir.",
    ],
    faq: [
      { q: "Piyano taşıyor musunuz?", a: "Evet. Piyanonun tipi ve bina durumu ekspertizde değerlendirilir, uygun ekipmanla taşınır." },
      { q: "Ataköy sitelerinde taşınma nasıl planlanıyor?", a: "Yönetimin taşınma saatleri ve asansör kurallarına göre gün ve saat belirlenir." },
    ],
    neighbors: ["bahcelievler", "zeytinburnu", "kucukcekmece", "gungoren"],
  },

  gungoren: {
    meta: "Güngören evden eve nakliyat: Merter, Tozkoparan, Haznedar ve Sanayi'de apartman, ofis ve tekstil atölyesi taşımaları. Sözleşmeli nakliyat, ücretsiz ekspertiz.",
    intro: [
      "Güngören küçük ama çok yoğun bir ilçe; Merter tekstil bölgesiyle ticari hareketliliği de yüksek. Güngören evden eve nakliyat taşımalarında bitişik nizam apartmanlar ve dar sokaklar, Merter tarafında ise mağaza ve atölye taşımaları öne çıkıyor.",
      "Atölye ve showroom taşımalarında makine, kumaş topu ve askılı ürünlerin taşınmasını iş akışını bozmayacak şekilde planlıyoruz.",
    ],
    mahalleler: ["Merter", "Tozkoparan", "Haznedar", "Sanayi", "Gençosman", "Akıncılar", "Güneştepe", "Mareşal Çakmak"],
    notes: [
      "Merter'de mağaza ve atölye taşımaları mesai dışına alınabilir.",
      "Dar sokaklarda küçük araç tercih edilir.",
      "Askılı ürünler için özel taşıma düzeni kurulur.",
    ],
    faq: [
      { q: "Tekstil atölyesi taşıyor musunuz?", a: "Evet. Makineler ve ürünler etiketlenip planlı şekilde taşınır, yeni yerde yerleştirilir." },
      { q: "Güngören'de akşam taşınma yapılabilir mi?", a: "Ofis ve işyeri taşımalarında akşam saatleri planlanabilir; konut taşımalarında bina kurallarına uyulur." },
    ],
    neighbors: ["bagcilar", "esenler", "bahcelievler", "bakirkoy", "zeytinburnu", "bayrampasa"],
  },

  zeytinburnu: {
    meta: "Zeytinburnu evden eve nakliyat: Merkezefendi, Kazlıçeşme, Seyitnizam ve Telsiz'de apartman ve yeni proje taşımaları. Sözleşmeli, asansörlü nakliyat.",
    intro: [
      "Zeytinburnu'nda kentsel dönüşümle yükselen yeni konut projeleri ile eski apartmanlar bir arada. Zeytinburnu evden eve nakliyat taşımalarında sahil tarafındaki yeni sitelerde yönetim kuralları, iç kesimlerdeki eski binalarda dar merdivenler planlamayı belirliyor.",
      "Kazlıçeşme ve Merkezefendi çevresindeki yoğun trafiğe göre taşınma saatini seçiyor, gerektiğinde dış cephe asansörü kuruyoruz.",
    ],
    mahalleler: ["Merkezefendi", "Kazlıçeşme", "Seyitnizam", "Telsiz", "Beştelsiz", "Gökalp", "Sümer", "Yenidoğan"],
    notes: [
      "Yeni projelerde yönetim randevusu önceden alınır.",
      "Eski binalarda merdiven ve asansör ölçüsü ekspertizde kontrol edilir.",
      "Kentsel dönüşüm taşınmalarında depolama seçeneği sunulur.",
    ],
    faq: [
      { q: "Zeytinburnu'nda yeni bir projeye taşınıyorum, ne yapmalıyım?", a: "Teslim tarihini ve yönetim kurallarını bize iletmeniz yeterli; taşınma programını buna göre hazırlarız." },
      { q: "Eşyalarımı kısa süre depolayabilir misiniz?", a: "Evet, eşya depolama hizmetimizle kısa veya uzun süreli depolama yapıyoruz." },
    ],
    neighbors: ["bakirkoy", "gungoren", "bayrampasa", "fatih"],
  },

  bayrampasa: {
    meta: "Bayrampaşa evden eve nakliyat: Yıldırım, Kartaltepe, Altıntepsi ve Muratpaşa'da apartman ve işyeri taşımaları. Sözleşmeli nakliyat, ücretsiz ekspertiz.",
    intro: [
      "Bayrampaşa, apartman dokusu yoğun ve ana arterlere yakın bir ilçe. Bayrampaşa evden eve nakliyat taşımalarında Yıldırım ve Kartaltepe gibi yoğun mahallelerde park yeri ve sokak genişliği planlamanın merkezinde.",
      "İlçedeki küçük işletmeler ve depolar için de ticari taşıma yapıyoruz. Konut taşımalarında eşyaları ambalajlayıp söküp yeni evde kurarak teslim ediyoruz.",
    ],
    mahalleler: ["Yıldırım", "Kartaltepe", "Altıntepsi", "Muratpaşa", "Cevatpaşa", "İsmetpaşa", "Terazidere", "Vatan"],
    notes: [
      "Yoğun mahallelerde park yeri taşınma öncesi ayarlanır.",
      "Küçük işletme ve depo taşımaları için ticari araç planlanır.",
      "Asansörsüz binalarda büyük eşya için dış asansör değerlendirilir.",
    ],
    faq: [
      { q: "Bayrampaşa'da depo taşıyor musunuz?", a: "Evet, raf ve stok taşımasını etiketleyerek planlı şekilde yapıyoruz." },
      { q: "Taşınma fiyatı ne zaman kesinleşiyor?", a: "Ekspertizden sonra yazılı fiyat verilir; sözleşmede yazan fiyat değişmez." },
    ],
    neighbors: ["esenler", "gaziosmanpasa", "eyupsultan", "fatih", "zeytinburnu", "gungoren"],
  },

  eyupsultan: {
    meta: "Eyüpsultan evden eve nakliyat: Göktürk, Kemerburgaz, Alibeyköy ve Rami'de villa, site ve apartman taşımaları. Sözleşmeli, asansörlü nakliyat.",
    intro: [
      "Eyüpsultan, tarihi merkezden Göktürk ve Kemerburgaz'daki villa ve site bölgelerine kadar uzanan geniş bir ilçe. Eyüpsultan evden eve nakliyat taşımalarında Göktürk'teki villalar ile Alibeyköy ve Rami'deki apartmanlar çok farklı planlama gerektiriyor.",
      "Göktürk ve Kemerburgaz'daki villalarda hacimli mobilya, bahçe eşyası ve özel eşyalar için ekip ve araç sayısını ekspertizle belirliyoruz. Tarihi merkezdeki dar sokaklarda ise küçük araç kullanıyoruz.",
    ],
    mahalleler: ["Göktürk", "Kemerburgaz", "Alibeyköy", "Rami", "Akşemsettin", "Güzeltepe", "Topçular", "Yeşilpınar"],
    notes: [
      "Villa taşımalarında birden fazla sefer veya büyük araç planlanır.",
      "Tarihi merkezde dar sokaklar için küçük araç tercih edilir.",
      "Site taşımalarında yönetim randevusu alınır.",
    ],
    faq: [
      { q: "Göktürk'te villa taşıyor musunuz?", a: "Evet. Eşya hacmine göre ekip ve araç planlanır, değerli eşyalar özel ambalajlanır." },
      { q: "Eyüpsultan'dan Başakşehir'e taşınma yapıyor musunuz?", a: "Evet, Başakşehir merkezli ekibimiz bu güzergahta sık çalışıyor." },
    ],
    neighbors: ["sultangazi", "gaziosmanpasa", "basaksehir", "arnavutkoy", "kagithane", "sariyer", "bayrampasa"],
  },

  fatih: {
    meta: "Fatih evden eve nakliyat: Aksaray, Balat, Cerrahpaşa ve Kocamustafapaşa'da tarihi bina ve dar sokak taşımaları. Sözleşmeli nakliyat, küçük araç seçeneği.",
    intro: [
      "Fatih, İstanbul'un tarihi yarımadası; dar ve yokuşlu sokaklar, asansörsüz eski binalar ve trafik kısıtlamaları burada taşınmayı özel bir planlama işine çeviriyor. Fatih evden eve nakliyat taşımalarında önce aracın adrese ulaşıp ulaşamayacağını kontrol ediyoruz.",
      "Balat ve Fener gibi dar sokaklı bölgelerde küçük araçla aktarma yapıyor, eski binalarda dar merdivenler için mobilyaları söküyoruz. Uygun cephelerde dış cephe asansörü de kullanılabiliyor.",
    ],
    mahalleler: ["Aksaray", "Balat", "Cerrahpaşa", "Kocamustafapaşa", "Fındıkzade", "Şehremini", "Zeyrek", "Fener"],
    notes: [
      "Dar sokaklarda küçük araçla aktarma yapılır.",
      "Tarihi binalarda dar merdiven için mobilyalar sökülür.",
      "Trafik kısıtlamalarına göre taşınma saati belirlenir.",
    ],
    faq: [
      { q: "Balat'ta dar sokakta taşıma yapılabiliyor mu?", a: "Evet, büyük araç yaklaşamıyorsa küçük araçla aktarma yaparak taşıyoruz." },
      { q: "Asansörsüz eski binada büyük eşya nasıl indiriliyor?", a: "Söküm yapılır veya cephe uygunsa dış asansör kurulur; ekspertizde karar verilir." },
    ],
    neighbors: ["zeytinburnu", "bayrampasa", "eyupsultan", "beyoglu"],
  },

  beyoglu: {
    meta: "Beyoğlu evden eve nakliyat: Cihangir, Kasımpaşa, Taksim ve Galata çevresinde dar sokak ve tarihi bina taşımaları. Küçük araç, söküm-montaj, sözleşmeli hizmet.",
    intro: [
      "Beyoğlu'nda Cihangir, Galata ve Kasımpaşa gibi semtlerde dar, yokuşlu ve çoğu zaman araç girişi kısıtlı sokaklar var. Beyoğlu evden eve nakliyat taşımalarında aracın duracağı yer ve eşyaların binaya kadar nasıl taşınacağı en kritik konu.",
      "Eski binalarda yüksek tavanlı ama dar merdivenli daireler sık görülüyor; büyük eşyaları söküyor ya da uygun cephelerde dış asansör kullanıyoruz. Yaya bölgelerine yakın adreslerde taşınma saatini kısıtlamalara göre ayarlıyoruz.",
    ],
    mahalleler: ["Cihangir", "Kasımpaşa", "Galata (Bereketzade)", "Kuloğlu", "Kemankeş", "Hacıahmet", "Kulaksız", "Sütlüce"],
    notes: [
      "Araç girişi kısıtlı sokaklarda kısa mesafe elle taşıma planlanır.",
      "Dar merdivenlerde mobilyalar sökülerek taşınır.",
      "Yaya bölgelerine göre taşınma saati seçilir.",
    ],
    faq: [
      { q: "Cihangir'de taşınma yapıyor musunuz?", a: "Evet. Sokak ve bina durumu ekspertizde değerlendirilir, gerekirse küçük araç ve ek personel planlanır." },
      { q: "Eşyalarım dar merdivenden geçmezse ne olur?", a: "Mobilya sökülür veya dış cephe asansörü kullanılır; ekspertizde bu önceden belirlenir." },
    ],
    neighbors: ["sisli", "besiktas", "kagithane", "fatih"],
  },

  sisli: {
    meta: "Şişli evden eve nakliyat: Mecidiyeköy, Nişantaşı, Bomonti ve Esentepe'de apartman, rezidans ve ofis taşımaları. Sözleşmeli, asansörlü nakliyat.",
    intro: [
      "Şişli'de Nişantaşı ve Teşvikiye'nin eski apartmanları, Bomonti ve Esentepe'nin rezidansları ve Mecidiyeköy'ün ofis binaları bir arada. Şişli evden eve nakliyat ve ofis taşıma işlerinde her bina tipinin kendine özgü kuralları var.",
      "Rezidanslarda yük asansörü, servis girişi ve taşınma saatleri yönetimce belirleniyor; eski apartmanlarda ise asansör küçük ya da yok. Ofis taşımalarında iş günü kaybı olmaması için hafta sonu çalışabiliyoruz.",
    ],
    mahalleler: ["Mecidiyeköy", "Nişantaşı (Teşvikiye)", "Bomonti", "Esentepe", "Fulya", "Kuştepe", "Feriköy", "Halaskargazi"],
    notes: [
      "Rezidanslarda servis girişi ve yük asansörü randevusu alınır.",
      "Eski apartmanlarda dış cephe asansörü değerlendirilir.",
      "Ofis taşımaları hafta sonuna planlanabilir.",
    ],
    faq: [
      { q: "Rezidans taşımalarında nelere dikkat ediyorsunuz?", a: "Yönetimin servis girişi, asansör koruması ve saat kurallarına uyuyor, ortak alanları koruma malzemesiyle kaplıyoruz." },
      { q: "Mecidiyeköy'de ofis taşıyor musunuz?", a: "Evet, ofis ve büro taşımalarını etiketleme ve kurulumla birlikte yapıyoruz." },
    ],
    neighbors: ["besiktas", "beyoglu", "kagithane", "sariyer"],
  },

  besiktas: {
    meta: "Beşiktaş evden eve nakliyat: Levent, Etiler, Ortaköy, Arnavutköy (Bebek) ve Ulus'ta apartman, site ve villa taşımaları. Sigorta seçenekli, sözleşmeli hizmet.",
    intro: [
      "Beşiktaş'ta sahil boyunca yokuşlu ve dar sokaklar, Levent ve Etiler'de ise siteler ve geniş daireler var. Beşiktaş evden eve nakliyat taşımalarında değerli mobilya, sanat eseri ve antika gibi özel eşyalara sık rastlıyoruz.",
      "Özel eşyalar için ayrı ambalaj ve gerekirse sandık kullanıyor, talep halinde nakliyat sigortası düzenliyoruz. Ortaköy ve Bebek gibi dar sokaklı semtlerde küçük araç ve kısa mesafe elle taşıma planlanıyor.",
    ],
    mahalleler: ["Levent", "Etiler", "Ortaköy", "Bebek", "Ulus", "Akatlar", "Abbasağa", "Gayrettepe"],
    notes: [
      "Değerli ve kırılacak eşyalar özel ambalajla taşınır.",
      "Talep halinde nakliyat sigortası düzenlenir.",
      "Dar sokaklarda küçük araç kullanılır.",
    ],
    faq: [
      { q: "Sanat eserlerini nasıl taşıyorsunuz?", a: "Tablolar köşe koruyucu ve özel ambalajla sarılır, gerekirse sandıklanır; araç içinde ayrı sabitlenir." },
      { q: "Beşiktaş'ta site taşımalarında izinleri kim alıyor?", a: "Taşınma tarihini bildirdiğinizde yönetimle koordinasyonu biz yapıyoruz." },
    ],
    neighbors: ["sisli", "beyoglu", "sariyer", "kagithane"],
  },

  kagithane: {
    meta: "Kağıthane evden eve nakliyat: Seyrantepe, Çağlayan, Gültepe ve Hamidiye'de apartman, yeni proje ve ofis taşımaları. Sözleşmeli nakliyat, ücretsiz ekspertiz.",
    intro: [
      "Kağıthane, kentsel dönüşümle hızla değişen bir ilçe; eski apartmanların yerini yeni projeler ve ofis binaları alıyor. Kağıthane evden eve nakliyat taşımalarında yokuşlu sokaklar ve eski binalar ile yeni projelerin site kuralları birlikte planlanıyor.",
      "Seyrantepe ve Çağlayan çevresindeki ofis ve işyeri taşımalarında hafta sonu ve akşam saatlerinde çalışabiliyoruz. Dönüşüm sürecinde geçici taşınanlar için depolama seçeneği sunuyoruz.",
    ],
    mahalleler: ["Seyrantepe", "Çağlayan", "Gültepe", "Hamidiye", "Merkez", "Talatpaşa", "Ortabayır", "Gürsel"],
    notes: [
      "Yokuşlu sokaklarda araç güvenli konumda sabitlenir.",
      "Ofis taşımaları mesai dışına alınabilir.",
      "Kentsel dönüşüm taşınmalarında depolama sunulur.",
    ],
    faq: [
      { q: "Kağıthane'de ofis taşıyor musunuz?", a: "Evet, ofis taşımalarını planlı ve etiketli şekilde, iş akışını aksatmadan yapıyoruz." },
      { q: "Yeni projeye taşınırken ne kadar önce aramalıyım?", a: "Teslim tarihini öğrendiğinizde arayabilirsiniz; ekspertiz ve programı erkenden yapmak işleri kolaylaştırır." },
    ],
    neighbors: ["sisli", "besiktas", "eyupsultan", "sariyer", "beyoglu"],
  },

  sariyer: {
    meta: "Sarıyer evden eve nakliyat: Tarabya, Yeniköy, Maslak, İstinye ve Zekeriyaköy'de villa, yalı ve site taşımaları. Özel ambalaj, sigorta seçenekli nakliyat.",
    intro: [
      "Sarıyer, Boğaz kıyısındaki yalılar ve eski konaklardan Zekeriyaköy'ün villalarına, Maslak'ın rezidanslarına kadar çok çeşitli konut tiplerine sahip. Sarıyer evden eve nakliyat taşımalarında dar sahil yolları ve yokuşlu sokaklar araç planlamasını belirliyor.",
      "Villa ve büyük konut taşımalarında eşya hacmi yüksek olduğundan ekip ve araç sayısını ekspertizle belirliyoruz. Değerli eşyalar için özel ambalaj kullanıyor, talep halinde sigorta düzenliyoruz.",
    ],
    mahalleler: ["Tarabya", "Yeniköy", "Maslak", "İstinye", "Zekeriyaköy", "Emirgan", "Rumelihisarı", "Kireçburnu"],
    notes: [
      "Dar sahil yollarında araç ve park planı önceden yapılır.",
      "Villa taşımalarında birden fazla araç planlanabilir.",
      "Değerli eşyalar için özel ambalaj ve sigorta seçeneği sunulur.",
    ],
    faq: [
      { q: "Zekeriyaköy'de villa taşıyor musunuz?", a: "Evet. Hacme göre ekip ve araç planlanır, bahçe eşyaları da dahil edilir." },
      { q: "Maslak'taki rezidanslara taşınma yapıyor musunuz?", a: "Evet, rezidans yönetiminin kurallarına göre randevulu taşıma yapıyoruz." },
    ],
    neighbors: ["besiktas", "sisli", "kagithane", "eyupsultan"],
  },

  catalca: {
    meta: "Çatalca evden eve nakliyat: merkez, Ferhatpaşa, Kaleiçi ve köylerde müstakil ev, çiftlik ve depo taşımaları. Hadımköy ve Büyükçekmece'ye yakın ekip.",
    intro: [
      "Çatalca, İstanbul'un en geniş yüzölçümüne sahip ilçelerinden biri; merkez dışında yerleşimin çoğu köyler, müstakil evler ve çiftliklerden oluşuyor. Çatalca evden eve nakliyat taşımalarında adresler arası mesafe ve köy yolları planlamanın başında geliyor.",
      "Müstakil ev ve çiftlik taşımalarında bahçe aletleri, depo eşyaları ve hacimli malzemeler de çıkabiliyor; bunları ekspertizde hacme dahil ediyoruz. Hadımköy tarafından Çatalca'ya kolay ulaşıyoruz.",
    ],
    mahalleler: ["Ferhatpaşa", "Kaleiçi", "Kabakça", "Çakıl", "Muratbey", "Binkılıç", "Subaşı", "Örcünlü"],
    notes: [
      "Köy yollarında araç boyutu önceden seçilir.",
      "Bahçe ve depo eşyaları hacme eklenir.",
      "Uzun mesafeli adreslerde günlük program erken başlar.",
    ],
    faq: [
      { q: "Çatalca köylerine taşıma yapıyor musunuz?", a: "Evet, yol durumuna uygun araçla köy adreslerine de taşıma yapıyoruz." },
      { q: "Çatalca'dan İstanbul merkeze taşınıyorum, fiyat nasıl belirlenir?", a: "Eşya hacmi, kat durumu ve mesafeye göre ekspertiz sonrası yazılı fiyat verilir." },
    ],
    neighbors: ["hadimkoy", "arnavutkoy", "buyukcekmece", "silivri"],
  },

  silivri: {
    meta: "Silivri evden eve nakliyat: Selimpaşa, Gümüşyaka, Değirmenköy ve merkezde yazlık, müstakil ev ve apartman taşımaları. Sözleşmeli nakliyat, ücretsiz ekspertiz.",
    intro: [
      "Silivri, sahil boyunca yazlık siteler ve iç kesimlerde köy yerleşimleriyle İstanbul'un batı ucunda yer alıyor. Silivri evden eve nakliyat taleplerinde yazlık-kışlık sezonluk taşımalar ve İstanbul merkezden Silivri'ye kalıcı taşınmalar öne çıkıyor.",
      "Uzun mesafe nedeniyle taşınma gününü sabah erken başlatıyor, eşyaları uzun yola uygun ambalajla hazırlıyoruz. Selimpaşa ve Gümüşyaka'daki yazlık sitelerde sezon yoğunluğuna dikkat ederek tarih planlıyoruz.",
    ],
    mahalleler: ["Selimpaşa", "Gümüşyaka", "Değirmenköy", "Alibey", "Mimar Sinan", "Piri Mehmet Paşa", "Ortaköy", "Kavaklı"],
    notes: [
      "Uzun mesafede eşyalar sarsıntıya karşı ekstra ambalajlanır.",
      "Yazlık sezonu başında ve sonunda tarih erken belirlenmelidir.",
      "Köy adreslerinde araç boyutu yol durumuna göre seçilir.",
    ],
    faq: [
      { q: "İstanbul merkezden Silivri'ye taşınma aynı gün biter mi?", a: "Çoğu ev taşıması aynı gün tamamlanır; hacim büyükse program ekspertizde netleşir." },
      { q: "Yazlık eşyalarımı taşıyıp depolayabilir misiniz?", a: "Evet, taşıma ve depolama hizmetlerimizi birlikte sunuyoruz." },
    ],
    neighbors: ["buyukcekmece", "catalca"],
  },

  // ───────────── Anadolu Yakası ─────────────
  kadikoy: {
    meta: "Kadıköy evden eve nakliyat: Moda, Fenerbahçe, Göztepe, Erenköy ve Suadiye'de apartman ve dönüşüm binası taşımaları. Asansörlü, sözleşmeli nakliyat.",
    intro: [
      "Kadıköy'de Moda ve Yeldeğirmeni'nin eski apartmanlarından Bağdat Caddesi çevresindeki kentsel dönüşümle yenilenen binalara kadar çok farklı yapı tipi var. Kadıköy evden eve nakliyat taşımalarında ara sokaklarda park yeri ve eski binalarda dar merdivenler en sık karşılaştığımız durumlar.",
      "Dönüşüm nedeniyle bir süreliğine taşınıp sonra yeni daireye dönen aileler için depolama ve iki aşamalı taşıma planlıyoruz. Bağdat Caddesi çevresinde taşınma saatini trafik ve park kurallarına göre seçiyoruz.",
    ],
    mahalleler: ["Moda (Caferağa)", "Fenerbahçe", "Göztepe", "Erenköy", "Suadiye", "Feneryolu", "Koşuyolu", "Kozyatağı"],
    notes: [
      "Ara sokaklarda park yeri taşınma öncesi ayarlanır.",
      "Kentsel dönüşüm taşınmalarında depolama ve iki aşamalı taşıma planlanır.",
      "Eski binalarda dış cephe asansörü değerlendirilir.",
    ],
    faq: [
      { q: "Kentsel dönüşüm için geçici taşınma yapıyor musunuz?", a: "Evet. Eşyalar kiralık eve ya da depoya taşınır, yeni daire hazır olunca geri taşınır." },
      { q: "Kadıköy'den Avrupa Yakası'na taşınma yapıyor musunuz?", a: "Evet, köprü ve trafik saatlerini dikkate alarak iki yaka arası taşıma yapıyoruz." },
    ],
    neighbors: ["uskudar", "atasehir", "maltepe"],
  },

  uskudar: {
    meta: "Üsküdar evden eve nakliyat: Çengelköy, Kuzguncuk, Altunizade, Ünalan ve Acıbadem'de apartman, site ve yalı taşımaları. Sözleşmeli, asansörlü nakliyat.",
    intro: [
      "Üsküdar'da Boğaz kıyısındaki Kuzguncuk ve Çengelköy'ün dar, yokuşlu sokakları ile Altunizade ve Ünalan'ın siteleri yan yana. Üsküdar evden eve nakliyat taşımalarında sahil semtlerinde araç erişimi, iç kesimlerde ise site kuralları planlamayı belirliyor.",
      "Dar sokaklarda küçük araç ve ek personelle çalışıyor, sitelerde yönetim randevusunu önceden alıyoruz. Avrupa Yakası'na taşınmalarda köprü trafiğini hesaba katarak saat belirliyoruz.",
    ],
    mahalleler: ["Çengelköy", "Kuzguncuk", "Altunizade", "Ünalan", "Acıbadem", "Bulgurlu", "Küçüksu", "Kısıklı"],
    notes: [
      "Sahil semtlerinde küçük araç ve kısa mesafe elle taşıma planlanır.",
      "Sitelerde yönetim randevusu önceden alınır.",
      "İki yaka arası taşınmalarda köprü trafiği hesaba katılır.",
    ],
    faq: [
      { q: "Kuzguncuk'ta dar sokakta taşınma yapılabilir mi?", a: "Evet, küçük araç ve ek personelle eşyalar güvenle taşınır." },
      { q: "Üsküdar'dan Avrupa Yakası'na taşınma ne zaman yapılmalı?", a: "Trafiğin daha sakin olduğu sabah erken saatler genellikle en uygunudur." },
    ],
    neighbors: ["kadikoy", "atasehir", "umraniye", "beykoz"],
  },

  atasehir: {
    meta: "Ataşehir evden eve nakliyat: Ataşehir merkez, İçerenköy, Küçükbakkalköy ve Barbaros'ta rezidans, site ve ofis taşımaları. Asansörlü, sözleşmeli nakliyat.",
    intro: [
      "Ataşehir, yüksek rezidansları, büyük siteleri ve finans merkezi çevresindeki ofis binalarıyla dikey yapılaşmanın yoğun olduğu bir ilçe. Ataşehir evden eve nakliyat taşımalarında yük asansörü rezervasyonu, servis girişi ve otopark yüksekliği en önemli planlama konuları.",
      "Ofis taşımalarında iş günü kaybını önlemek için hafta sonu çalışabiliyoruz. Rezidanslarda ortak alanları koruma malzemesiyle kaplıyor, yönetim kurallarına uygun saatlerde taşıma yapıyoruz.",
    ],
    mahalleler: ["Atatürk", "İçerenköy", "Küçükbakkalköy", "Barbaros", "Kayışdağı", "İnönü", "Yenişehir", "Ferhatpaşa"],
    notes: [
      "Rezidanslarda yük asansörü ve servis girişi randevusu alınır.",
      "Ortak alanlar koruma malzemesiyle kaplanır.",
      "Ofis taşımaları hafta sonu yapılabilir.",
    ],
    faq: [
      { q: "Ataşehir'de rezidans taşımalarında ek ücret çıkar mı?", a: "Ek bir işlem gerekiyorsa (dış asansör vb.) teklifte yazılı belirtilir; sonradan ücret eklenmez." },
      { q: "Ofisimizi hafta sonu taşıyabilir misiniz?", a: "Evet, ofis taşımalarını hafta sonu veya akşam yapabiliyoruz." },
    ],
    neighbors: ["kadikoy", "uskudar", "umraniye", "maltepe", "cekmekoy", "sancaktepe"],
  },

  umraniye: {
    meta: "Ümraniye evden eve nakliyat: Çakmak, Ihlamurkuyu, Esenşehir ve Atakent'te site, apartman ve işyeri taşımaları. Sözleşmeli nakliyat, ücretsiz ekspertiz.",
    intro: [
      "Ümraniye, hem yoğun konut alanları hem de organize sanayi ve iş merkezleriyle Anadolu Yakası'nın en hareketli ilçelerinden biri. Ümraniye evden eve nakliyat taşımalarında yeni sitelerin yönetim kuralları ve eski mahallelerdeki dar sokaklar birlikte planlanıyor.",
      "Sanayi bölgesi ve iş merkezlerindeki işyeri taşımalarında ekipman ve dosyaları etiketleyerek, iş akışını aksatmayacak saatlerde çalışıyoruz.",
    ],
    mahalleler: ["Çakmak", "Ihlamurkuyu", "Esenşehir", "Atakent", "Tantavi", "Namık Kemal", "Yukarı Dudullu", "Site"],
    notes: [
      "Site taşımalarında yönetim randevusu alınır.",
      "İşyeri taşımaları mesai dışına alınabilir.",
      "Dar sokaklarda küçük araç kullanılır.",
    ],
    faq: [
      { q: "Ümraniye'de işyeri taşıyor musunuz?", a: "Evet, ofis, atölye ve depo taşımalarını planlı şekilde yapıyoruz." },
      { q: "Taşınma öncesi ambalajı siz mi yapıyorsunuz?", a: "Evet, ambalaj malzemesi ve paketleme hizmetimize dahildir." },
    ],
    neighbors: ["uskudar", "atasehir", "cekmekoy", "sancaktepe", "beykoz"],
  },

  maltepe: {
    meta: "Maltepe evden eve nakliyat: Bağlarbaşı, Cevizli, İdealtepe, Küçükyalı ve Zümrütevler'de apartman ve dönüşüm binası taşımaları. Sözleşmeli, asansörlü nakliyat.",
    intro: [
      "Maltepe'de sahil şeridindeki kentsel dönüşüm binaları ile iç kesimlerdeki eski apartmanlar ve yeni siteler bir arada. Maltepe evden eve nakliyat taşımalarında dönüşüm kaynaklı geçici taşınmalar ve E-5 çevresindeki trafik planlamanın önemli parçası.",
      "Dönüşüm sürecindeki aileler için depolama ve iki aşamalı taşıma sunuyoruz. Eski binalarda dar merdivenler için söküm ya da dış cephe asansörü planlanıyor.",
    ],
    mahalleler: ["Bağlarbaşı", "Cevizli", "İdealtepe", "Küçükyalı", "Zümrütevler", "Altayçeşme", "Feyzullah", "Başıbüyük"],
    notes: [
      "Kentsel dönüşüm taşınmalarında depolama seçeneği sunulur.",
      "E-5 çevresinde taşınma saati trafiğe göre seçilir.",
      "Eski binalarda dış asansör değerlendirilir.",
    ],
    faq: [
      { q: "Maltepe'de dönüşüm için eşya depolama yapıyor musunuz?", a: "Evet, eşyalarınızı ambalajlayıp depoya alıyor, yeni daireniz hazır olunca kurarak teslim ediyoruz." },
      { q: "Maltepe'den Kartal veya Pendik'e taşınma yapıyor musunuz?", a: "Evet, Anadolu Yakası'nın tüm ilçelerinde hizmet veriyoruz." },
    ],
    neighbors: ["kadikoy", "atasehir", "kartal", "sancaktepe"],
  },

  kartal: {
    meta: "Kartal evden eve nakliyat: Soğanlık, Yakacık, Kordonboyu, Uğurmumcu ve Atalar'da apartman ve yeni proje taşımaları. Sözleşmeli nakliyat, ücretsiz ekspertiz.",
    intro: [
      "Kartal'da sahil tarafındaki yeni projeler ve kentsel dönüşüm binaları ile Yakacık ve Soğanlık çevresindeki apartmanlar bir arada. Kartal evden eve nakliyat taşımalarında yokuşlu sokaklar ve yeni projelerin site kuralları planlamayı belirliyor.",
      "Yeni projelerde yük asansörü randevusunu önceden alıyor, eski binalarda ise eşya ölçülerini ekspertizde kontrol ediyoruz.",
    ],
    mahalleler: ["Soğanlık", "Yakacık", "Kordonboyu", "Uğurmumcu", "Atalar", "Cevizli", "Esentepe", "Topselvi"],
    notes: [
      "Yeni projelerde yönetim randevusu önceden alınır.",
      "Yokuşlu sokaklarda araç güvenli konuma alınır.",
      "Eşya ölçüleri ekspertizde kontrol edilir.",
    ],
    faq: [
      { q: "Kartal'da yeni projeye taşınma yapıyor musunuz?", a: "Evet, teslim tarihine ve site kurallarına göre program hazırlıyoruz." },
      { q: "Fiyat teklifi nasıl alınır?", a: "Telefon veya WhatsApp'tan ulaşmanız yeterli; ekspertiz sonrası yazılı fiyat verilir." },
    ],
    neighbors: ["maltepe", "pendik", "sancaktepe", "sultanbeyli"],
  },

  pendik: {
    meta: "Pendik evden eve nakliyat: Kurtköy, Kaynarca, Güzelyalı, Velibaba ve Yenişehir'de site, apartman ve işyeri taşımaları. Sözleşmeli nakliyat.",
    intro: [
      "Pendik, sahil semtlerinden Kurtköy'ün yeni sitelerine ve sanayi bölgelerine kadar geniş bir alana yayılıyor. Pendik evden eve nakliyat taşımalarında Kurtköy ve Yenişehir'deki sitelerde yönetim kuralları, sahil tarafında ise eski apartmanlar öne çıkıyor.",
      "Sanayi bölgesi ve havalimanı çevresindeki işyerleri için ticari taşıma da yapıyoruz. Avrupa Yakası'ndan Pendik'e taşınmalarda köprü trafiğini hesaba katarak sabah erken başlıyoruz.",
    ],
    mahalleler: ["Kurtköy", "Kaynarca", "Güzelyalı", "Velibaba", "Yenişehir", "Bahçelievler", "Esenyalı", "Batı"],
    notes: [
      "Sitelerde yönetim randevusu alınır.",
      "İki yaka arası taşınmalarda köprü trafiği hesaba katılır.",
      "Sanayi bölgesindeki işyerleri için ticari araç planlanır.",
    ],
    faq: [
      { q: "Avrupa Yakası'ndan Pendik'e taşınma yapıyor musunuz?", a: "Evet, sabah erken başlayarak iki yaka arası taşımayı aynı gün tamamlamayı planlıyoruz." },
      { q: "Kurtköy'de site taşıması yapıyor musunuz?", a: "Evet, yönetim kurallarına uygun randevulu taşıma yapıyoruz." },
    ],
    neighbors: ["kartal", "tuzla", "sultanbeyli", "sancaktepe"],
  },

  tuzla: {
    meta: "Tuzla evden eve nakliyat: Aydınlı, İçmeler, Postane, Şifa ve Aydıntepe'de apartman, site ve işyeri taşımaları. Tersane ve OSB çevresinde ticari yük.",
    intro: [
      "Tuzla, tersaneleri, organize sanayi bölgesi ve üniversiteleriyle Anadolu Yakası'nın sanayi ilçesi; konut tarafında ise sahil semtleri ve Aydınlı çevresindeki yeni siteler var. Tuzla evden eve nakliyat taleplerinin yanında işyeri ve ticari yük taşıması da sık geliyor.",
      "Üniversite çevresindeki öğrenci ve akademisyen taşınmaları için parça eşya hizmeti uygun. İşyeri taşımalarında giriş izinleri ve iş güvenliği kurallarını önceden öğreniyoruz.",
    ],
    mahalleler: ["Aydınlı", "İçmeler", "Postane", "Şifa", "Aydıntepe", "Evliya Çelebi", "Mimar Sinan", "Yayla"],
    notes: [
      "Sanayi bölgesinde giriş izinleri önceden alınır.",
      "Öğrenci taşınmaları için parça eşya hizmeti uygundur.",
      "Uzun mesafeli taşınmalarda program sabah erken başlar.",
    ],
    faq: [
      { q: "Tuzla OSB'de işyeri taşıyor musunuz?", a: "Evet, ekipman ve stokları etiketleyerek planlı şekilde taşıyoruz." },
      { q: "Avrupa Yakası'ndan Tuzla'ya taşınma yapıyor musunuz?", a: "Evet, köprü trafiğini hesaba katarak program yapıyoruz." },
    ],
    neighbors: ["pendik", "sultanbeyli"],
  },

  sancaktepe: {
    meta: "Sancaktepe evden eve nakliyat: Samandıra, Sarıgazi, Yenidoğan ve Emek'te yeni site ve apartman taşımaları. Sözleşmeli nakliyat, ücretsiz ekspertiz.",
    intro: [
      "Sancaktepe, son yıllarda yapılan yeni sitelerle hızla büyüyen bir ilçe. Sancaktepe evden eve nakliyat taşımalarında yeni projelerin yönetim kuralları, yük asansörü randevusu ve otopark girişleri en sık planladığımız konular.",
      "Samandıra ve Sarıgazi'deki eski yerleşim alanlarında ise dar sokaklar ve asansörsüz binalar için küçük araç ve dış asansör seçeneklerini değerlendiriyoruz.",
    ],
    mahalleler: ["Samandıra (Abdurrahmangazi)", "Sarıgazi", "Yenidoğan", "Emek", "Osmangazi", "Eyüp Sultan", "Meclis", "Veysel Karani"],
    notes: [
      "Yeni sitelerde yönetim randevusu önceden alınır.",
      "Asansörsüz binalarda dış asansör değerlendirilir.",
      "Dar sokaklarda küçük araç kullanılır.",
    ],
    faq: [
      { q: "Sancaktepe'de yeni siteye taşınma yapıyor musunuz?", a: "Evet, teslim tarihine ve site kurallarına göre program hazırlıyoruz." },
      { q: "Eşyaların kurulumu dahil mi?", a: "Evet, söküm ve kurulum hizmetimize dahildir; ek iş varsa teklifte yazılır." },
    ],
    neighbors: ["cekmekoy", "umraniye", "atasehir", "maltepe", "kartal", "sultanbeyli"],
  },

  sultanbeyli: {
    meta: "Sultanbeyli evden eve nakliyat: Abdurrahmangazi, Hasanpaşa, Mecidiye ve Battalgazi'de apartman ve müstakil ev taşımaları. Sözleşmeli nakliyat.",
    intro: [
      "Sultanbeyli'de çoğunlukla 3-6 katlı apartmanlar ve müstakil evler bulunuyor. Sultanbeyli evden eve nakliyat taşımalarında dar ve eğimli sokaklar ile asansörsüz binalar en sık karşılaştığımız durumlar.",
      "Ekspertizde sokak durumunu kontrol edip uygun araç seçiyor, büyük eşyalar için söküm ya da dış cephe asansörü planlıyoruz.",
    ],
    mahalleler: ["Abdurrahmangazi", "Hasanpaşa", "Mecidiye", "Battalgazi", "Fatih", "Mehmet Akif", "Orhangazi", "Turgut Reis"],
    notes: [
      "Dar sokaklarda küçük araç tercih edilir.",
      "Asansörsüz binalarda söküm veya dış asansör planlanır.",
      "Müstakil evlerde bahçe eşyası hacme eklenir.",
    ],
    faq: [
      { q: "Sultanbeyli'de asansörsüz binadan taşıma yapıyor musunuz?", a: "Evet, merdiven veya dış asansörle güvenle taşıyoruz." },
      { q: "Ekspertizi görüntülü yapabilir miyiz?", a: "Evet, WhatsApp görüntülü görüşmeyle uzaktan ekspertiz yapabiliyoruz." },
    ],
    neighbors: ["sancaktepe", "pendik", "kartal", "tuzla"],
  },

  cekmekoy: {
    meta: "Çekmeköy evden eve nakliyat: Taşdelen, Alemdağ, Ömerli ve Merkez'de villa, site ve müstakil ev taşımaları. Sözleşmeli, asansörlü nakliyat.",
    intro: [
      "Çekmeköy, yeşil alanları içindeki villalar, bahçeli siteler ve Taşdelen çevresindeki apartmanlarla Anadolu Yakası'nın daha sakin ilçelerinden biri. Çekmeköy evden eve nakliyat taşımalarında villa ve müstakil evlerin hacimli eşyaları planlamanın merkezinde.",
      "Bahçe mobilyası, depo eşyaları ve büyük salon takımları ekspertizde ölçülüyor; gerekirse ikinci araç planlanıyor. Ömerli gibi kırsal bölgelerde yol durumuna göre araç seçiyoruz.",
    ],
    mahalleler: ["Taşdelen", "Alemdağ", "Ömerli", "Merkez", "Mehmet Akif", "Hamidiye", "Çamlık", "Soğukpınar"],
    notes: [
      "Villa taşımalarında ek araç planlanabilir.",
      "Bahçe eşyaları hacme eklenir.",
      "Kırsal yollarda araç boyutu önceden seçilir.",
    ],
    faq: [
      { q: "Çekmeköy'de villa taşıyor musunuz?", a: "Evet. Eşya hacmine göre ekip ve araç planlanır." },
      { q: "Ömerli'ye taşıma yapıyor musunuz?", a: "Evet, yol durumuna uygun araçla taşıma yapıyoruz." },
    ],
    neighbors: ["umraniye", "sancaktepe", "atasehir", "beykoz", "sile"],
  },

  beykoz: {
    meta: "Beykoz evden eve nakliyat: Kavacık, Paşabahçe, Çubuklu, Anadoluhisarı ve Riva'da yalı, villa ve apartman taşımaları. Sözleşmeli nakliyat.",
    intro: [
      "Beykoz, Boğaz kıyısındaki yalılar ve eski evlerden Kavacık'ın sitelerine, Riva ve Polonezköy'ün kırsal yerleşimlerine kadar uzanıyor. Beykoz evden eve nakliyat taşımalarında dar sahil yolları ve yokuşlar araç planlamasını belirliyor.",
      "Villa ve yalı taşımalarında değerli eşyalar için özel ambalaj kullanıyor, talep halinde sigorta düzenliyoruz. Kavacık'taki sitelerde yönetim randevusunu önceden alıyoruz.",
    ],
    mahalleler: ["Kavacık", "Paşabahçe", "Çubuklu", "Anadoluhisarı", "Riva", "Polonezköy", "Göksu", "Acarlar"],
    notes: [
      "Dar sahil yollarında küçük araç kullanılır.",
      "Değerli eşyalar özel ambalajla taşınır.",
      "Talep halinde nakliyat sigortası düzenlenir.",
    ],
    faq: [
      { q: "Beykoz'da yalı taşıması yapıyor musunuz?", a: "Evet, erişim ve eşya durumu ekspertizde değerlendirilip özel plan yapılır." },
      { q: "Riva'ya taşınma yapıyor musunuz?", a: "Evet, kırsal adreslere uygun araçla taşıma yapıyoruz." },
    ],
    neighbors: ["uskudar", "umraniye", "cekmekoy", "sile"],
  },

  sile: {
    meta: "Şile evden eve nakliyat: merkez, Ağva, Kumbaba ve köylerde yazlık, müstakil ev ve villa taşımaları. Uzun yol ambalajı, sözleşmeli nakliyat.",
    intro: [
      "Şile, İstanbul'un Karadeniz kıyısında, yazlık evleri ve köy yerleşimleriyle bilinen bir ilçe. Şile evden eve nakliyat taleplerinde yazlık-kışlık sezonluk taşımalar ve Ağva çevresindeki müstakil ev taşımaları öne çıkıyor.",
      "Şehir merkezine uzaklık nedeniyle taşınma gününü sabah erken başlatıyor, eşyaları uzun yola uygun ambalajla hazırlıyoruz. Köy yollarında araç boyutunu yol durumuna göre seçiyoruz.",
    ],
    mahalleler: ["Merkez (Balibey)", "Ağva", "Kumbaba", "Hacıllı", "Çavuş", "Kurfallı", "Sahilköy", "Teke"],
    notes: [
      "Uzun mesafede eşyalar ekstra ambalajlanır.",
      "Yazlık sezonunda tarih erken belirlenmelidir.",
      "Köy yollarında araç boyutu önceden seçilir.",
    ],
    faq: [
      { q: "Şile'deki yazlığımı taşıyabilir misiniz?", a: "Evet, yazlık eşyalarını taşıyabilir veya kış boyunca depolayabiliriz." },
      { q: "Ağva'ya taşınma yapıyor musunuz?", a: "Evet, Ağva ve çevre köylere taşıma yapıyoruz." },
    ],
    neighbors: ["beykoz", "cekmekoy"],
  },

  adalar: {
    meta: "Adalar evden eve nakliyat: Büyükada, Heybeliada, Burgazada ve Kınalıada'ya deniz yoluyla eşya taşıma. Planlı aktarma, özel ambalaj, sözleşmeli hizmet.",
    intro: [
      "Adalar'da motorlu araç trafiği çok kısıtlı olduğundan taşınma, karadan iskeleye, iskeleden deniz yoluyla adaya ve adada da eve kadar aktarmalı yapılıyor. Adalar evden eve nakliyat bu yüzden İstanbul'un en çok planlama gerektiren taşımalarından biri.",
      "Deniz taşıması için uygun tekne, iskele izinleri ve adadaki taşıma yöntemi önceden planlanıyor. Eşyalar birden çok kez yüklenip indirileceği için ekstra koruyucu ambalajla hazırlanıyor.",
    ],
    mahalleler: ["Büyükada", "Heybeliada", "Burgazada", "Kınalıada"],
    notes: [
      "Taşıma karadan iskeleye, denizden adaya aktarmalı yapılır.",
      "Tekne ve iskele planlaması önceden yapılır.",
      "Eşyalar çoklu aktarma için ekstra ambalajlanır.",
    ],
    faq: [
      { q: "Büyükada'ya eşya taşıyor musunuz?", a: "Evet. Deniz yolu aktarmasıyla taşıma planlanır; detaylar ekspertizde netleşir." },
      { q: "Adalar taşımasının fiyatı neden farklı?", a: "Deniz taşıması ve çoklu aktarma ek planlama gerektirdiği için fiyat ekspertizle belirlenir." },
    ],
    neighbors: ["kadikoy", "maltepe", "kartal", "pendik"],
  },
};

// Sadece ilçe olmayan semt sayfaları (aynı /istanbul-nakliye/[ilce] rotasında yayınlanır)
export const semtler = Object.entries(districtContent)
  .filter(([, c]) => c.semt)
  .map(([slug, c]) => ({ slug, name: c.name, parent: c.parent }));
