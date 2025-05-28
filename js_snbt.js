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
            var author = confirm('Author website ini adalah orang yang terjebak, Anda juga? IG @anugrahspsb, Klik OK untuk ke IG. (instagram.com)')
            if(author){
            window.location.href = "https://instagram.com/_u/anugrahspsb"
            }
        }
        let abb=0
        function hideMenu(){
            if(abb!=1){
            alert('Ini akan menyembunyikan seluruh menu inputan, termasuk Nomor Peserta, nama,  hingga tombol ini. Refresh halaman atau klik di gambar SNPMB untuk menampilkan menu kembali.');
            abb=1}
            document.getElementById("blocks").style.display = 'none'
        }
        function showMenu(){
            document.getElementById("blocks").style.display = 'block'
        }
        function alertTutorial(){
            alert("Isi setiap kolom kosong yang tersedia di website seperti kolom Nomor Peserta, Nama, dll. Khusus untuk Nomor Peserta disediakan tombol Randomize untuk memasukkan nilai random ke kolom tersebut. Jika telah mengisi seluruhnya, silahkan klik GENERATE untuk melihat hasilnya. Jika ada bagian yang kosong ketika melihat hasilnya, silakan cek ulang kolom dan isi kolom yang masih kosong.")}
        function alertFeedback() {
            var result = confirm("Beri masukan anda mengenai website ini, saran dan kritik akan diapresiasi (sebenarnya ada error di kodenya cuman ntah dimana mau bantu ga pls)! (ngl.link)");
            if (result) {
                window.location.href = "https://ngl.link/anugrahspsb48124"
            }
        }
        function alertNote() {
            alert("Web ini adalah SNBT GENERATOR dengan semata-mata untuk tujuan for fun saja. Tidak ada data inputan apapun yang akan dikirim keluar. Harap gunakan dengan bijak! Developer tidak bertanggung jawab atas penyalahgunaan website.");
        }


            function percentageToPixel(percentage) {
        var parentWidth = document.getElementById("qr-terima").offsetWidth;
        var pixelValue = (parseFloat(percentage) / 100) * parentWidth;
        return pixelValue;
    }

    function getWidth() {
        var divWidthPercentage = document.getElementById("qr-terimas").style.width;
        var divWidthPixel = percentageToPixel(divWidthPercentage);
        return divWidthPixel
    }
           function copyCode() {
            if(document.getElementById('iunivcode').value.length === 3){
            document.getElementById("cloneKampusCode").textContent = document.getElementById('iunivcode').value
            }
        }
            function limitDigit(boxId){
            document.getElementById(boxId).addEventListener("input", function() {
                if (this.value.length > 4) {
                    this.value = this.value.slice(0,4)
                }
                this.value = this.value.replace(/[^0-9]/g, '')
            })}
            document.getElementById('inope').addEventListener("input", function() {
            document.getElementById('inope').value = document.getElementById('inope').value.replace(/[^0-9]/g, '')})
            limitDigit('iunivcode')
            limitDigit('iprodicode')
            
            function generateNumbers() {
        var iunivCode = Math.floor(Math.random() * (990 - 111 + 1)) + 111
        var rand1 = Math.floor(Math.random() * (500 - 0 + 1))
        var rand2 = Math.floor(Math.random() * (300 - 0 + 1))
        var allCombined = "24" + iunivCode + "0" + rand1.toString().padStart(3, '0') + rand2.toString().padStart(3, '0')
        document.getElementById("inope").value = parseInt(allCombined)
        // document.getElementById("iunivcode").value = iunivCode
        document.getElementById('cloneKampusCode').textContent = iunivCode
            }

        function alertCode(){
            const code = confirm('Kode kampus dan prodi berbeda-beda di setiap universitas. Jika tidak punya banyak waktu, klik saja Cancel dan isi kode bebas, namun jika ingin terlihat lebih nyata, klik OK untuk mencari kode kampus dan prodi di web Kemdikbud. (sidata-ptn-snpmb.bppp.kemdikbud.go.id)')
        if(code){
            window.open('https://sidata-ptn-snpmb.bppp.kemdikbud.go.id/ptn_sb.php')
        }
        }

        function capital(elementId) {
            document.getElementById(elementId).value = document.getElementById(elementId).value.toUpperCase()
        }

        function displayOutput(){
            if(document.getElementById('inope').value.length < 1){
                generateNumbers()
                document.getElementById('inope').value = document.getElementById('inope').value.substring(0, 2) + document.getElementById('iunivcode').value + document.getElementById('inope').value.substring(5);
            }
            if(document.getElementById('iprodicode').value.length < 3){
                document.getElementById('iprodicode').value = '271'
            }
            capital('iuniv')
            capital('iprodi')
            capital('iname')
            var inope = document.getElementById('inope').value
            document.getElementById('no-peserta-diterima').textContent = `${inope.substring(0,2)} - ${inope.substring(2, 6)} - ${inope.substring(6)}`
            var input = ['iname', 'iunivcode', 'iuniv', 'iprodicode', 'iprodi', 'iunivcode']
            var output = ['nama-peserta-diterima', 'kode-ptn-terima', 'nama-ptn-terima', 'kode-prodi-terima', 'nama-prodi-terima', 'kode-ptn-terimas']
            for(let i=0;i<input.length;i++){
                document.getElementById(output[i]).textContent = document.getElementById(input[i]).value
            }
                    
            const dateInput = document.getElementById('idate').value;
            const date = new Date(dateInput)
            const formattedDate = `${date.getDate().toString().padStart(2, '0')} - ${(date.getMonth() + 1).toString().padStart(2, '0')} - ${date.getFullYear()}`
            document.getElementById('tgllahir-peserta-diterima').textContent = formattedDate
            var blockQr = document.getElementById("qr-terimas")
        blockQr.innerHTML = ''
        var qrcode = new QRCode(blockQr, {
            text: `Made with SNBT GENERATOR : https://anugrahbodi.github.io/snbt-generator/ ~${document.getElementById('inope').value}`,
            width: getWidth()-30,
            height: getWidth()-30,
            colorDark : "#000000", // Dark color of the QR code
            colorLight : "#ffffff", // Light color of the QR code
            correctLevel : QRCode.CorrectLevel.H // High error correction level
        });
        }
        function toggleAct(){
            var buttonState = document.getElementById('kip')
            if(buttonState.textContent==='Aktif'){
                buttonState.textContent = 'Nonaktif'
                buttonState.style.color = 'black'
                document.getElementById('bidik-misi').style.display = 'none'
            }
            else {
                buttonState.textContent = 'Aktif'
                buttonState.style.color = 'red'
                document.getElementById('bidik-misi').style.display = 'block'
            }
        }
        const arrayLists = {
             jurusans: ['Ilmu Hitam', 'Matematika', 'Fisika', 'Biologi', 'Kimia', 'Statistika', 'Aktuaria', 'Meteorologi', 'Astronomi', 'Geofisika', 'Geologi', 'Ilmu Kedokteran', 'Pendidikan Dokter', 'Kedokteran Gigi', 'Kedokteran Hewan', 'Gizi', 'Ilmu Keperawatan', 'Apoteker', 'Kebidanan', 'Kesehatan Lingkungan', 'Keselamatan dan Kesehatan Kerja', 'Kesehatan Masyarakat', 'Farmasi', 'Ilmu Farmasi','Teknik Elektro', 'Teknik Sipil', 'Teknik Listrik', 'Teknik Bangunan', 'Teknik Biomedis', 'Teknik Geodesi', 'Teknik Geologi', 'Teknik Kimia', 'Pendidikan Teknologi Agroindustri', 'Teknik Lingkungan', 'Teknik Mesin', 'Teknik Perkapalan', 'Teknik Nuklir', 'Rekayasa Keselamatan Kebakaran', 'Teknologi Bioproses', 'Teknik Informatika', 'Teknik Industri', 'Teknik Pertambangan', 'Teknik Perminyakan', 'Teknik Material', 'Teknik Geodesi dan Geomatika', 'Teknik Dirgantara', 'Teknik Penerbangan', 'Teknik Metalurgi', 'Ilmu Komputer', 'Teknologi Informasi', 'Sistem Informasi', 'Teknik Komputer', 'Arsitektur', 'Perencanaan Wilayah dan Kota', 'Teknik Pengairan', 'Arsitektur Interior', 'Kehutanan', 'Agronomi', 'Akuakultur', 'Teknik Pertanian', 'Teknologi Pangan', 'Teknologi Industri Pertanian', 'Pertanian dan Agribisnis', 'Agribisnis', 'Peternakan', 'Ilmu Kelautan', 'Ilmu Perikanan', 'Teknologi Perikanan', 'Agrobisnis Perikanan', 'Bioteknologi', 'Agriekoteknologi', 'Ilmu Keolahragaan', 'Hubungan Internasional', 'Ilmu Politik', 'Ilmu Pemerintahan', 'Kriminologi', 'Sosiologi', 'Ilmu Administrasi Negara', 'Ilmu Administrasi Niaga', 'Ilmu Administrasi Fiskal', 'Administrasi Bisnis', 'Administrasi Publik', 'Administrasi Pemerintahan', 'Antropologi Sosial', 'Arkeologi', 'Sejarah', 'Ilmu Komunikasi', 'Ilmu Perpustakaan', 'Kearsipan Digital', 'Jurnalistik', 'Hubungan Masyarakat', 'TV dan Film', 'Manajemen Komunikasi', 'Bahasa dan Kebudayaan Korea', 'Bahasa dan Budaya Tiongkok', 'Sastra Belanda', 'Sastra Cina', 'Sastra Indonesia', 'Sastra Jawa', 'Sastra Sunda', 'Sastra Daerah', 'Sastra Jepang', 'Sastra Jerman', 'Sastra Inggris', 'Sastra Prancis', 'Sastra Rusia', 'Sastra Slavia', 'Sastra Arab', 'Sejarah dan Kebudayaan Islam', 'Ilmu Filsafat', 'Ilmu Ekonomi', 'Ekonomi Pembangunan', 'Manajemen', 'Manajemen Bisnis', 'Akuntansi', 'Ilmu Ekonomi Islam', 'Bisnis Islam', 'Bisnis Digital', 'Bisnis Internasional', 'Keuangan dan Perbankan', 'Kewirausahaan', 'Ilmu Hukum', 'Psikologi', 'Geografi', 'Ilmu Kesejahteraan Sosial', 'Studi Agama', 'Peradilan Agama', 'Politik Islam', 'Teologi', 'Pariwisata', 'Perhotelan', 'Teknologi Pendidikan', 'Administrasi Pendidikan', 'Manajemen Pendidikan', 'Psikologi Pendidikan dan Bimbingan', 'Pendidikan Masyarakat', 'Pendidikan Khusus', 'Bimbingan dan Konseling', 'Perpustakaan & Sains Informasi', 'Pendidikan Guru Sekolah Dasar (PGSD)', 'Pendidikan Guru Anak Usia Dini (PAUD)', 'Pendidikan Luar Sekolah (PLS)', 'Pendidikan Luar Biasa', 'Pendidikan Bahasa Indonesia', 'Pendidikan Bahasa Daerah', 'Pendidikan Bahasa Inggris', 'Pendidikan Bahasa Arab', 'Pendidikan Bahasa Jepang', 'Pendidikan Bahasa Jerman', 'Pendidikan Bahasa Prancis', 'Pendidikan Bahasa Korea', 'Pendidikan Pancasila dan Kewarganegaraan', 'Pendidikan Sejarah', 'Pendidikan Geografi', 'Pendidikan Sosiologi', 'Pendidikan IPS', 'Pendidikan Agama Islam', 'Manajemen Pemasaran Pariwisata', 'Pendidikan Matematika', 'Pendidikan Fisika', 'Pendidikan Biologi', 'Pendidikan Kimia', 'Pendidikan IPA', 'Pendidikan Ilmu Komputer', 'Pendidikan Seni Rupa', 'Pendidikan Seni Tari', 'Pendidikan Seni Musik', 'Pendidikan Kepelatihan Olahraga', 'Pendidikan Jasmani, Kesehatan, dan Rekreasi', 'Pendidikan Teknik Otomotif', 'Seni Rupa Murni', 'Seni Kriya', 'Seni Tari', 'Seni Musik', 'Desain dan Komunikasi Visual', 'Desain Interior', 'Desain Produk', 'Tata Kelola Seni', 'Film dan Televisi', 'Film dan Animasi', 'Musik', 'Tata Rias', 'Tata Busana', 'Tata Boga', 'Sekretaris', 'Administrasi Asuransi dan Aktuaria', 'Administrasi Keuangan dan Perbankan', 'Administrasi Perkantoran dan Sekretaris', 'Administrasi Perpajakan', 'Administrasi Bisnis', 'Fisioterapi', 'Hubungan Masyarakat', 'Manajemen Informasi dan Dokumentasi', 'Vokasional Pariwisata', 'Okupasi Terapi', 'Penyiaran Multimedia', 'Periklanan Kreatif', 'Akuntansi', 'Administrasi Perumahsakitan', 'Manajemen Perhotelan', 'Desain Grafis', 'Batik dan Fashion', 'Akuntansi perpajakan', 'Akuntansi sektor publik', 'Bisnis internasional', 'Pemasaran digital'],
            univs: ["Universitas Gadjah Mada", "Universitas Sumatera Utara", "Institut Pertanian Bogor", "Institut Teknologi Sepuluh Nopember", "Universitas Indonesia", "Universitas Airlangga", "Institut Teknologi Bandung", "Universitas Bina Nusantara", "Universitas Sebelas Maret UNS Surakarta", "Universitas Diponegoro", "Universitas Jember", "Universitas Brawijaya", "Telkom University", "Universitas Pendidikan Indonesia", "Universitas Hasanuddin", "Universitas Muhammadiyah Yogyakarta", "Universitas Padjadjaran Bandung", "Universitas Syiah Kuala", "Universitas Negeri Yogyakarta", "Universitas Negeri Malang", "Universitas Negeri Semarang", "Universitas Andalas", "Universitas Gunadarma", "Universitas Lampung", "Politeknik Elektronika Negeri Surabaya", "Universitas Sriwijaya", "Universitas Ahmad Dahlan Yogyakarta", "Universitas Dian Nuswantoro", "Universitas Narotama UNNAR Surabaya", "Universitas Kristen Satya Wacana", "Universitas Riau", "Universitas Negeri Padang", "Universitas Islam Indonesia", "Universitas Mataram", "Universitas Negeri Surabaya", "Universitas Islam Negeri UIN Sunan Gunung Djati", "Universitas Mercu Buana", "Universitas Atma Jaya Yogyakarta", "Universitas Katolik Parahyangan", "Universitas Malikussaleh", "Universitas Negeri Makassar", "Universitas Udayana", "Petra Christian University", "Universitas Jenderal Soedirman", "Universitas Muhammadiyah Surakarta", "Universitas Sultan Ageng Tirtayasa", "Universitas Islam Negeri UIN Syarif Hidayatullah", "Universitas Negeri Medan", "Universitas Muhammadiyah Malang", "Universitas Bengkulu", "Universitas Mulawarman", "Universitas Tadulako", "Universitas Halu Oleo Kendari", "Universitas Sam Ratulangi", "Universitas Widyatama UTAMA Bandung", "Universitas Pendidikan Ganesha", "Universitas Katolik Indonesia Atma Jaya", "Universitas Negeri Jakarta", "Universitas Jambi", "Universitas Surabaya", "Universitas Lambung Mangkurat", "Politeknik Negeri Lhokseumawe", "Universitas Esa Unggul (Universitas Indonusa)", "Universitas Islam Negeri UIN Sunan Ampel Surabaya", "Universitas Trisakti", "Universitas Sanata Dharma USD Sleman", "Universitas Terbuka", "Universitas Tarumanagara UNTAR", "Universitas Kristen Maranatha", "Akademi Telkom Jakarta", "Universitas Komputer Indonesia UNIKOM", "Universitas Islam Negeri Raden Intan Lampung", "Institut Agama Islam Negeri IAIN Kendari", "Universitas Medan Area", "Institut Informatika dan Bisnis Darmajaya", "Universitas Musamus Merauke", "Universitas Muhammadiyah Ponorogo", "Universitas Potensi Utama", "Universitas Muslim Indonesia Makassar", "Universitas Dr Soetomo Surabaya", "Politeknik Negeri Ujung Pandang", "Universitas Islam Negeri UIN Maulana Malik Ibrahim", "Universitas Pattimura", "Universitas Islam Negeri UIN Sultan Syarif Kasim", "Institut Agama Islam Negeri IAIN Syekh Nurjati", "Universitas PGRI Madiun", "Poltekkes Kemenkes Malang", "Institut Sains dan Teknologi AKPRIND Yogyakarta", "Universitas Pasundan Bandung", "Institut Pendikan Indonesia", "Institut Seni Indonesia Denpasar", "Universitas Jenderal Achmad Yani", "Universitas Sarjanawiyata Tamansiswa", "Universitas Muhammadiyah Luwuk", "Politeknik Negeri Malang", "Institut Teknologi Telkom Surabaya", "Universitas Muhammadiyah Purworejo", "Institut Seni Indonesia Surakarta", "Universitas Ciputra", "Universitas Tanjungpura"]
        }
        function populateDatalist(datalistId, items) {
            const datalist = document.getElementById(datalistId);
            datalist.innerHTML = ''; // Clear previous options
            items.forEach(item => {
                const option = document.createElement('option');
                option.value = item;
                datalist.appendChild(option);
            });
        }

        populateDatalist('univs', arrayLists.univs);
        populateDatalist('jurusans', arrayLists.jurusans);

        ['iuniv', 'iprodi'].forEach(inputId => {
            document.getElementById(inputId).addEventListener('input', function() {
                let inputVal = this.value.toLowerCase();
                let options = document.querySelectorAll(`#${inputId} + datalist option`);

                options.forEach(option => {
                    if (option.value.toLowerCase().startsWith(inputVal)) {
                        option.style.display = 'block';
                    } else {
                        option.style.display = 'none';
                    }
                });
            });
        });
        function updateThnText(value) {
            const thnElements = document.getElementsByTagName("thn")

            for (let i = 0; i < thnElements.length; i++) {
                thnElements[i].textContent = value || "2025";
            }
        }
