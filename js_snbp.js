        function playLatch() {
            var latch = document.getElementById("latch-screen")
            var iframe = latch.querySelector("iframe")
            if (iframe) {
                latch.removeChild(iframe)
            } else {
                iframe = document.createElement("iframe")
                iframe.width = "100%"
                iframe.height = "100"
                iframe.scrolling = "no"
                iframe.frameborder = "yes"
                iframe.allow = "autoplay"
                iframe.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/975902716&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
                latch.appendChild(iframe)
            }
        }
        function goComment(){
            var comment = confirm('Beri pendapat anda tentang website ini, komentarmu bisa dilihat sama yang lain juga! Tekan OK untuk ke webnya (secreto.site)')
            if(comment){
                window.location.href = "https://secreto.site/am1ic7"
            }
        }
        function alertAuthor(){
            var author = confirm('Author website ini adalah orang yang terjebak, anda juga? IG @anugrahspsb, Klik OK untuk ke IG. (instagram.com)')
            if(author){
            window.location.href = "https://instagram.com/_u/anugrahspsb"
            }
        }
        let abb=0
        function hideMenu(){
            if(abb!=1){
            alert('Ini akan menyembunyikan seluruh menu inputan, termasuk nama, NISN, hingga tombol ini. Klik di logo SNBP dibawah atau refresh halaman ini untuk menampilkan menu kembali.');
            abb=1}
            document.getElementById("blocks").style.display = 'none'
        }
        function showMenu(){
            document.getElementById("blocks").style.display = 'block'
        }
        function alertTutorial(){
            alert("Isi setiap kolom kosong yang tersedia di website seperti kolom nama, nisn, nomor registrasi, tanggal lahir, dll. Khusus untuk NISN dan Nomor Registrasi disediakan tombol Randomize untuk memasukkan nilai random ke kolom NISN dan NoReg. Jika telah mengisi seluruhnya, silahkan klik GENERATE untuk melihat hasilnya. Jika ada bagian yang kosong ketika melihat hasilnya, silakan cek ulang kolom dan isi kolom yang masih kosong.")}
        function alertFeedback() {
            var result = confirm("Beri masukan anda mengenai website ini, saran dan kritik akan diapresiasi (sebenarnya ada error di kodenya cuman ntah dimana mau bantu ga pls)! (ngl.link)");
            if (result) {
                window.location.href = "https://ngl.link/anugrahspsb48124"
            }
        }
        function alertNote() {
            alert("Web ini dibuat untuk membuat fake lolos snbp dengan semata-mata untuk tujuan for fun saja. Tidak ada data inputan apapun yang akan dikirim keluar. Harap gunakan dengan bijak! Developer tidak bertanggung jawab atas penyalahgunaan website.");
        }
        function alertLink() {
            var result = confirm("Link penerimaan mahasiswa baru dapat anda cari di google karena memiliki banyak variasi, tapi jika anda malas untuk mencari, ketik saja di input box https://penerimaan.{singkatan kampus}.ac.id/. Klik OK untuk memasukkan template web ke input box.");
            if (result) {
                document.getElementById('ilink').value = 'https://penerimaan.{singkatan kampus}.ac.id/'
            }
        }
        document.getElementById('dropdownBoxes').addEventListener('change', function() {
        document.getElementById('jenjang').textContent = this.value
        })
        document.getElementById('kabBoxes').addEventListener('change', function() {
            changeKabKot()
        })
        function changeKabKot() {
        setTimeout(function() {
        if (document.getElementById('kabBoxes').value === 'aa') {
            document.getElementById('kab-kot').textContent = 'Kab.';
        } else if (document.getElementById('kabBoxes').value === 'bb') {
            document.getElementById('kab-kot').textContent = 'Kota';
        }
        }.bind(this), 1);
        }
        let ddd = 0;
        function displayInput() {
            var userInputColumn = ['inisn', 'inoreg', 'inama', 'iuniv', 'iprodi', 'ilink', 'idate', 'isch', 'iname-kab-kot', 'iprov']
            var outputSpan = ['nisn', 'noreg', 'name', 'univ', 'prodi', 'link', 'date', 'sch', 'name-kab-kot', 'prov']
            for(i = 0; i < userInputColumn.length; i++){
                document.getElementById("iuniv").value = document.getElementById("iuniv").value.toUpperCase()
            document.getElementById("iprodi").value = document.getElementById("iprodi").value.toUpperCase()
                var inputText = document.getElementById(userInputColumn[i]).value;
                document.getElementById(outputSpan[i]).textContent = document.getElementById(userInputColumn[i]).value          
            }
            let selectedDate = document.getElementById("idate").value
            let dateParts = selectedDate.split('-')
            let day = dateParts[2]
            let month = dateParts[1]
            let year = dateParts[0]
            let formattedDate = day + "/" + month + "/" + year
            document.getElementById("date").textContent = formattedDate
            if(ddd==0){
                ddd=1
            setTimeout(function(){
            alert("Kalau suka sama webnya, share sama yang lain biar banyak yang tau. IG Author dan Kolom Komentar tertera di menu atas. Jika menunya telah disembunyikan, klik logo SNBP untuk mengembalikannya. SNBP GENERATOR 2024")}, 10000)
            }
            document.getElementById('jenjang').textContent = document.getElementById('dropdownBoxes').value
        }
        function generateRandom1() {
            const prefixes = ["004", "005", "006"]
            const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
            const suffix = Math.floor(Math.random() * 10000000)
            const randomNumber = `${prefix}${suffix.toString().padStart(7, '0')}`
            document.getElementById('inisn').value = randomNumber
        }
    
        function generateRandom2() {
            const prefixes = ["423", "424"];
            const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
            const suffix = Math.floor(Math.random() * 100000)
            const randomNumber = `${prefix}${suffix.toString().padStart(6, '0')}`
            document.getElementById('inoreg').value = randomNumber
        }
        function generateQRCode() {
            const result1 = document.getElementById('inisn').value;
            const result2 = document.getElementById('inoreg').value;
            const combinedResult = `${result1}${result2}`.repeat(3);
            document.getElementById("qrcode5").innerHTML = ''
            new QRCode(document.getElementById("qrcode5"), {
                text: combinedResult,
                width: 100,
                height: 100
            })
        }
        const arrayLists = {
            jurusans: ['Ilmu Hitam', 'Matematika', 'Fisika', 'Biologi', 'Kimia', 'Statistika', 'Aktuaria', 'Meteorologi', 'Astronomi', 'Geofisika', 'Geologi', 'Ilmu Kedokteran', 'Pendidikan Dokter', 'Kedokteran Gigi', 'Kedokteran Hewan', 'Gizi', 'Ilmu Keperawatan', 'Apoteker', 'Kebidanan', 'Kesehatan Lingkungan', 'Keselamatan dan Kesehatan Kerja', 'Kesehatan Masyarakat', 'Farmasi', 'Ilmu Farmasi','Teknik Elektro', 'Teknik Sipil', 'Teknik Listrik', 'Teknik Bangunan', 'Teknik Biomedis', 'Teknik Geodesi', 'Teknik Geologi', 'Teknik Kimia', 'Pendidikan Teknologi Agroindustri', 'Teknik Lingkungan', 'Teknik Mesin', 'Teknik Perkapalan', 'Teknik Nuklir', 'Rekayasa Keselamatan Kebakaran', 'Teknologi Bioproses', 'Teknik Informatika', 'Teknik Industri', 'Teknik Pertambangan', 'Teknik Perminyakan', 'Teknik Material', 'Teknik Geodesi dan Geomatika', 'Teknik Dirgantara', 'Teknik Penerbangan', 'Teknik Metalurgi', 'Ilmu Komputer', 'Teknologi Informasi', 'Sistem Informasi', 'Teknik Komputer', 'Arsitektur', 'Perencanaan Wilayah dan Kota', 'Teknik Pengairan', 'Arsitektur Interior', 'Kehutanan', 'Agronomi', 'Akuakultur', 'Teknik Pertanian', 'Teknologi Pangan', 'Teknologi Industri Pertanian', 'Pertanian dan Agribisnis', 'Agribisnis', 'Peternakan', 'Ilmu Kelautan', 'Ilmu Perikanan', 'Teknologi Perikanan', 'Agrobisnis Perikanan', 'Bioteknologi', 'Agriekoteknologi', 'Ilmu Keolahragaan', 'Hubungan Internasional', 'Ilmu Politik', 'Ilmu Pemerintahan', 'Kriminologi', 'Sosiologi', 'Ilmu Administrasi Negara', 'Ilmu Administrasi Niaga', 'Ilmu Administrasi Fiskal', 'Administrasi Bisnis', 'Administrasi Publik', 'Administrasi Pemerintahan', 'Antropologi Sosial', 'Arkeologi', 'Sejarah', 'Ilmu Komunikasi', 'Ilmu Perpustakaan', 'Kearsipan Digital', 'Jurnalistik', 'Hubungan Masyarakat', 'TV dan Film', 'Manajemen Komunikasi', 'Bahasa dan Kebudayaan Korea', 'Bahasa dan Budaya Tiongkok', 'Sastra Belanda', 'Sastra Cina', 'Sastra Indonesia', 'Sastra Jawa', 'Sastra Sunda', 'Sastra Daerah', 'Sastra Jepang', 'Sastra Jerman', 'Sastra Inggris', 'Sastra Prancis', 'Sastra Rusia', 'Sastra Slavia', 'Sastra Arab', 'Sejarah dan Kebudayaan Islam', 'Ilmu Filsafat', 'Ilmu Ekonomi', 'Ekonomi Pembangunan', 'Manajemen', 'Manajemen Bisnis', 'Akuntansi', 'Ilmu Ekonomi Islam', 'Bisnis Islam', 'Bisnis Digital', 'Bisnis Internasional', 'Keuangan dan Perbankan', 'Kewirausahaan', 'Ilmu Hukum', 'Psikologi', 'Geografi', 'Ilmu Kesejahteraan Sosial', 'Studi Agama', 'Peradilan Agama', 'Politik Islam', 'Teologi', 'Pariwisata', 'Perhotelan', 'Teknologi Pendidikan', 'Administrasi Pendidikan', 'Manajemen Pendidikan', 'Psikologi Pendidikan dan Bimbingan', 'Pendidikan Masyarakat', 'Pendidikan Khusus', 'Bimbingan dan Konseling', 'Perpustakaan & Sains Informasi', 'Pendidikan Guru Sekolah Dasar (PGSD)', 'Pendidikan Guru Anak Usia Dini (PAUD)', 'Pendidikan Luar Sekolah (PLS)', 'Pendidikan Luar Biasa', 'Pendidikan Bahasa Indonesia', 'Pendidikan Bahasa Daerah', 'Pendidikan Bahasa Inggris', 'Pendidikan Bahasa Arab', 'Pendidikan Bahasa Jepang', 'Pendidikan Bahasa Jerman', 'Pendidikan Bahasa Prancis', 'Pendidikan Bahasa Korea', 'Pendidikan Pancasila dan Kewarganegaraan', 'Pendidikan Sejarah', 'Pendidikan Geografi', 'Pendidikan Sosiologi', 'Pendidikan IPS', 'Pendidikan Agama Islam', 'Manajemen Pemasaran Pariwisata', 'Pendidikan Matematika', 'Pendidikan Fisika', 'Pendidikan Biologi', 'Pendidikan Kimia', 'Pendidikan IPA', 'Pendidikan Ilmu Komputer', 'Pendidikan Seni Rupa', 'Pendidikan Seni Tari', 'Pendidikan Seni Musik', 'Pendidikan Kepelatihan Olahraga', 'Pendidikan Jasmani, Kesehatan, dan Rekreasi', 'Pendidikan Teknik Otomotif', 'Seni Rupa Murni', 'Seni Kriya', 'Seni Tari', 'Seni Musik', 'Desain dan Komunikasi Visual', 'Desain Interior', 'Desain Produk', 'Tata Kelola Seni', 'Film dan Televisi', 'Film dan Animasi', 'Musik', 'Tata Rias', 'Tata Busana', 'Tata Boga', 'Sekretaris', 'Administrasi Asuransi dan Aktuaria', 'Administrasi Keuangan dan Perbankan', 'Administrasi Perkantoran dan Sekretaris', 'Administrasi Perpajakan', 'Administrasi Bisnis', 'Fisioterapi', 'Hubungan Masyarakat', 'Manajemen Informasi dan Dokumentasi', 'Vokasional Pariwisata', 'Okupasi Terapi', 'Penyiaran Multimedia', 'Periklanan Kreatif', 'Akuntansi', 'Administrasi Perumahsakitan', 'Manajemen Perhotelan', 'Desain Grafis', 'Batik dan Fashion', 'Akuntansi perpajakan', 'Akuntansi sektor publik', 'Bisnis internasional', 'Pemasaran digital'],
            univs: ["Universitas Gadjah Mada", "Universitas Sumatera Utara", "Institut Pertanian Bogor", "Institut Teknologi Sepuluh Nopember", "Universitas Indonesia", "Universitas Airlangga", "Institut Teknologi Bandung", "Universitas Bina Nusantara", "Universitas Sebelas Maret UNS Surakarta", "Universitas Diponegoro", "Universitas Jember", "Universitas Brawijaya", "Telkom University", "Universitas Pendidikan Indonesia", "Universitas Hasanuddin", "Universitas Muhammadiyah Yogyakarta", "Universitas Padjadjaran Bandung", "Universitas Syiah Kuala", "Universitas Negeri Yogyakarta", "Universitas Negeri Malang", "Universitas Negeri Semarang", "Universitas Andalas", "Universitas Gunadarma", "Universitas Lampung", "Politeknik Elektronika Negeri Surabaya", "Universitas Sriwijaya", "Universitas Ahmad Dahlan Yogyakarta", "Universitas Dian Nuswantoro", "Universitas Narotama UNNAR Surabaya", "Universitas Kristen Satya Wacana", "Universitas Riau", "Universitas Negeri Padang", "Universitas Islam Indonesia", "Universitas Mataram", "Universitas Negeri Surabaya", "Universitas Islam Negeri UIN Sunan Gunung Djati", "Universitas Mercu Buana", "Universitas Atma Jaya Yogyakarta", "Universitas Katolik Parahyangan", "Universitas Malikussaleh", "Universitas Negeri Makassar", "Universitas Udayana", "Petra Christian University", "Universitas Jenderal Soedirman", "Universitas Muhammadiyah Surakarta", "Universitas Sultan Ageng Tirtayasa", "Universitas Islam Negeri UIN Syarif Hidayatullah", "Universitas Negeri Medan", "Universitas Muhammadiyah Malang", "Universitas Bengkulu", "Universitas Mulawarman", "Universitas Tadulako", "Universitas Halu Oleo Kendari", "Universitas Sam Ratulangi", "Universitas Widyatama UTAMA Bandung", "Universitas Pendidikan Ganesha", "Universitas Katolik Indonesia Atma Jaya", "Universitas Negeri Jakarta", "Universitas Jambi", "Universitas Surabaya", "Universitas Lambung Mangkurat", "Politeknik Negeri Lhokseumawe", "Universitas Esa Unggul (Universitas Indonusa)", "Universitas Islam Negeri UIN Sunan Ampel Surabaya", "Universitas Trisakti", "Universitas Sanata Dharma USD Sleman", "Universitas Terbuka", "Universitas Tarumanagara UNTAR", "Universitas Kristen Maranatha", "Akademi Telkom Jakarta", "Universitas Komputer Indonesia UNIKOM", "Universitas Islam Negeri Raden Intan Lampung", "Institut Agama Islam Negeri IAIN Kendari", "Universitas Medan Area", "Institut Informatika dan Bisnis Darmajaya", "Universitas Musamus Merauke", "Universitas Muhammadiyah Ponorogo", "Universitas Potensi Utama", "Universitas Muslim Indonesia Makassar", "Universitas Dr Soetomo Surabaya", "Politeknik Negeri Ujung Pandang", "Universitas Islam Negeri UIN Maulana Malik Ibrahim", "Universitas Pattimura", "Universitas Islam Negeri UIN Sultan Syarif Kasim", "Institut Agama Islam Negeri IAIN Syekh Nurjati", "Universitas PGRI Madiun", "Poltekkes Kemenkes Malang", "Institut Sains dan Teknologi AKPRIND Yogyakarta", "Universitas Pasundan Bandung", "Institut Pendikan Indonesia", "Institut Seni Indonesia Denpasar", "Universitas Jenderal Achmad Yani", "Universitas Sarjanawiyata Tamansiswa", "Universitas Muhammadiyah Luwuk", "Politeknik Negeri Malang", "Institut Teknologi Telkom Surabaya", "Universitas Muhammadiyah Purworejo", "Institut Seni Indonesia Surakarta", "Universitas Ciputra", "Universitas Tanjungpura"],
            provs: ["Sumatera Utara", "Aceh", "Sumatera Barat", "Riau", "Kepulauan Riau", "Jambi", "Sumatera Selatan", "Bangka Belitung", "Bengkulu", "Lampung", "DKI Jakarta", "Jawa Barat", "Jawa Tengah", "DI Yogyakarta", "Jawa Timur", "Banten", "Bali", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Kalimantan Barat", "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", "Kalimantan Utara", "Sulawesi Utara", "Sulawesi Tengah", "Sulawesi Selatan", "Sulawesi Tenggara", "Gorontalo", "Sulawesi Barat", "Maluku", "Maluku Utara", "Papua", "Papua Barat"],
            kabKots: ["Medan", "Sidikalang", "Aceh Barat", "Aceh Barat Daya", "Aceh Besar", "Aceh Jaya", "Aceh Selatan", "Aceh Singkil", "Aceh Tamiang", "Aceh Tengah", "Aceh Tenggara", "Aceh Timur", "Aceh Utara", "Agam", "Alor", "Ambon", "Asahan", "Asmat", "Badung", "Balangan", "Balikpapan", "Banda Aceh", "Bandung", "Bandung Barat", "Banggai", "Banggai Kepulauan", "Bangka", "Bangka Barat", "Bangka Selatan", "Bangka Tengah", "Bangkalan", "Bangli", "Banjar", "Banjarbaru", "Banjarnegara", "Bantaeng", "Bantul", "Banyuasin", "Banyumas", "Banyuwangi", "Barito Kuala", "Barito Selatan", "Barito Timur", "Barito Utara", "Barru", "Batam", "Batang", "Batang Hari", "Batubara", "Bau-Bau", "Bawean", "Bekasi", "Belitung", "Belitung Timur", "Belu", "Bener Meriah", "Bengkalis", "Bengkayang", "Bengkulu", "Bengkulu Selatan", "Bengkulu Tengah", "Bengkulu Utara", "Berau", "Biak Numfor", "Bima", "Bireuen", "Bitung", "Blitar", "Blora", "Boalemo", "Bogor", "Bojonegoro", "Bolaang Mongondow", "Bolaang Mongondow Selatan", "Bolaang Mongondow Timur", "Bolaang Mongondow Utara", "Bombana", "Bondowoso", "Bone", "Bone Bolango", "Bontang", "Boroko", "Boyolali", "Brebes", "Buleleng", "Buol", "Buru", "Buru Selatan", "Buton", "Buton Utara", "Ciamis", "Cianjur", "Cilacap", "Cilegon", "Cimahi", "Cirebon", "Dairi", "Deiyai", "Deli Serdang", "Demak", "Denpasar", "Dharmasraya", "Dogiyai", "Dompu", "Donggala", "Empat Lawang", "Ende", "Enrekang", "Fakfak", "Flores Timur", "Garut", "Gayo Lues", "Gianyar", "Gorontalo", "Gorontalo Utara", "Gowa", "Gresik", "Grobogan", "Gunung Kidul", "Gunung Mas", "Halmahera Barat", "Halmahera Selatan", "Halmahera Tengah", "Halmahera Timur", "Halmahera Utara", "Halmahera Tenggara", "Halmahera Barat Daya", "Hulu Sungai Selatan", "Hulu Sungai Tengah", "Hulu Sungai Utara", "Humbang Hasundutan", "Indragiri Hilir", "Indragiri Hulu", "Indramayu", "Intan Jaya", "Jayapura", "Jember", "Jembrana", "Jeneponto", "Jepara", "Jombang", "Kaimana", "Kajen", "Kalianget", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kaltara", "Kaltim", "Kampar", "Kapuas", "Kapuas Hulu", "Karanganyar", "Karawang", "Katingan", "Kaur", "Kayong Utara", "Kebumen", "Kediri", "Keerom", "Kepahiang", "Kerinci", "Ketapang", "Klaten", "Klungkung", "Kolaka", "Kolaka Utara", "Konawe", "Konawe Kepulauan", "Konawe Selatan", "Konawe Utara", "Jakarta", "Surabaya", "Bandung", "Bekasi", "Depok", "Tangerang", "Palembang", "Makassar", "Semarang", "Pekanbaru", "Bandar Lampung", "Bogor", "Malang", "Padang", "Yogyakarta", "Batam", "Samarinda", "Cirebon", "Pontianak", "Banjarmasin", "Balikpapan", "Jambi", "Manado", "Mataram", "Ambon", "Sorong", "Palu", "Bengkulu", "Pekalongan", "Tegal", "Kotamobagu", "Pangkal Pinang", "Bontang", "Probolinggo", "Salatiga", "Banda Aceh", "Palangkaraya", "Tanjung Pinang", "Gorontalo", "Dumai", "Ternate", "Tarakan", "Palopo", "Singkawang", "Binjai", "Lubuklinggau", "Tomohon", "Padang Sidempuan", "Blitar", "Pasuruan", "Cimahi", "Pematangsiantar", "Tegal", "Sawahlunto", "Solok", "Payakumbuh", "Padang Panjang", "Bukittinggi", "Prabumulih", "Pariaman", "Lhokseumawe", "Langsa", "Tebing Tinggi", "Mojokerto", "Magelang", "Kupang", "Sukabumi", "Palopo", "Pangkalpinang", "Palu", "Payakumbuh", "Pekalongan", "Pematangsiantar", "Ternate", "Tanjungpinang", "Tarakan", "Tasikmalaya", "Tidore Kepulauan", "Tomohon", "Bukittinggi", "Batu", "Parepare", "Pariaman", "Pasuruan", "Pekanbaru", "Sawahlunto", "Semarang", "Serang", "Sergai", "Sibolga", "Singkawang", "Solok", "Sorong", "Sukabumi", "Sungai Penuh", "Surakarta", "Tangerang Selatan", "Tanjung Balai", "Tanjung Pinang", "Tarakan", "Tasikmalaya", "Tegal", "Tebing Tinggi", "Tegal", "Tomohon", "Tual", "Ungaran", "Waingapu", "Yogyakarta", "Padangsidempuan", "Palopo", "Palangkaraya", "Palembang", "Palopo", "Palu", "Pamekasan", "Pare-Pare", "Pariaman", "Pasuruan", "Pati", "Payakumbuh", "Pekalongan", "Pekanbaru", "Pematangsiantar", "Prabumulih", "Probolinggo", "Padang Panjang", "Padangsidempuan", "Palangkaraya"]
        }
        function populateDatalist(datalistId, items) {
            const datalist = document.getElementById(datalistId)
            items.forEach(item => {
                const option = document.createElement('option')
                option.value = item
                datalist.appendChild(option)
            });
        }
    
        populateDatalist('univs', arrayLists.univs)
        populateDatalist('provs', arrayLists.provs)
        populateDatalist('jurusans', arrayLists.jurusans)
        populateDatalist('kabKots', arrayLists.kabKots)
    
        // Input event listeners
        ['iuniv', 'iprodi', 'iprov', 'iname-kab-kot'].forEach(inputId => {
            document.getElementById(inputId).addEventListener('input', function() {
                let inputVal = this.value.toLowerCase()
                let options = document.querySelectorAll(`#${inputId.replace('Box', '')} option`)
                
                options.forEach(option => {
                    if (option.value.startsWith(inputVal)) {
                        option.style.display = 'block'
                    } else {
                        option.style.display = 'none'
                    }
                })
            })
        })

        function updateThnText(value) {
            const thnElements = document.getElementsByTagName("thn")

            for (let i = 0; i < thnElements.length; i++) {
                thnElements[i].textContent = value || "2025"
            }
        }

        function bantuAku() {
            var result = confirm("Ayo daftar lomba, boleh buat anak kuliah atau anak SMA/ sederajat, lomba ngoding/ ui ux/ paper/ poster, mending klen daftar sekarang dah sebelum tutup, cocok buat persiapan mental sebelum SNBT ATAU KASI TAU KE TEMEN KLEN YANG JAGO NGODING (s.id)");
            if (result) {
                window.location.href = "https://s.id/CodeFestUSU"
            }
        }

        function otodu() {
            var result = confirm("Merah di SNBP? Ga tau cara mulai SNBT? Educomms by OTODU siap bantu kamu! Ini btw dari author dan 100% free, isi aja formnya sungguh sungguh dan join grup whatsapp untuk komunikasi antar peserta UTBK Educomms lainnya! (forms.gle)");
            if (result) {
                window.location.href = "https://forms.gle/deCc9oNN8FgUBnQZ9"
            }
        }
    
