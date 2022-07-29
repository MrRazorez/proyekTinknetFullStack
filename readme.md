<h1>Inventory Asset PT. Tunas Link Indonesia</h1>

<p>
    <i>
        <label>IT Team</label>
        <ul>
            <li>Project Leader = Syabana Minggus Noviantosa</li>
            <li>UI/UX Designer = Perdana Raga Winata</li>
            <li>Front-End Developer = Perdana Raga Winata</li>
            <li>Back-End Developer = Syabana Minggus Noviantosa</li>
        </ul>
    </i>
</p>

<br/>

<p>
    <b>Inventory Asset PT. Tunas Link Indonesia (Tinknet)</b> merupakan sebuah aplikasi <i>hybrid</i> pengadahan barang jaringan
    internet milik Tinknet. Aplikasi ini disebut <i>hybrid</i> karena dua <i>Framework</i> (React JS dan Laravel) digunakan dalam
    pembangunan aplikasi ini. Adapun tugas masing - masing dua <i>Framework</i> sebagai berikut :
    <ul>
        <li>
            React JS => Mengatur <i>User Interface</i>, terutama pada bagian otentikasi agar pengguna dapat mengakses situs
            berdasarkan pekerjaan <i>(role)</i>
        </li>
        <li>
            Laravel => Mengatur jalur data dari <i>database</i> ke <i>User Interface</i> baik validasi akun pengguna, penyuntingan akun
            oleh admin, maupun pengolahan data barang <i>(REST API)</i>
        </li>
    </ul>
</p>

<br/>

<p>
    <i>
        <label>Aplikasi Pendukung</label>
        <ul>
            <li>NodeJS</li>
            <li>Composer</li>
            <li>Apache Server</li>
            <li>MySQL</li>
        </ul>
    </i>
    <code>
        CATATAN : <br/>
        Untuk <i>Apache Server</i> dan <i>MySQL</i>, diperbolehkan memasang <i>XAMPP</i> di mesin komputer anda sebagai pengganti
        kedua aplikasi pendukung tersebut.
    </code>
</p>

<p>
    <i>
        <label>Tampilan</label>
        <ul>
            <li>Login Page</li>
            <img src="screenshot/Screenshot1.png" width="800px" height="450px"/>
        </ul>
        <ul>
            <li>Home Page (Admin Barang)</li>
            <img src="screenshot/Screenshot2.png" width="800px" height="450px"/>
        </ul>
        <ul>
            <li>Home Page (Admin Register)</li>
            <img src="screenshot/Screenshot3.png" width="800px" height="450px"/>
        </ul>
        <ul>
            <li>Home Page (Staff)</li>
            <img src="screenshot/Screenshot4.png" width="800px" height="450px"/>
        </ul>
        <ul>
            <li>Form Barang</li>
            <img src="screenshot/Screenshot5.png" width="800px" height="450px"/>
        </ul>
        <ul>
            <li>Sunting Barang</li>
            <img src="screenshot/Screenshot6.png" width="800px" height="450px"/>
        </ul>
        <ul>
            <li>Form Staff</li>
            <img src="screenshot/Screenshot7.png" width="800px" height="450px"/>
        </ul>
        <ul>
            <li>Sunting Staff</li>
            <img src="screenshot/Screenshot8.png" width="800px" height="450px"/>
        </ul>
        <ul>
            <li>Form Akun</li>
            <img src="screenshot/Screenshot9.png" width="800px" height="450px"/>
        </ul>
    </i>
</p>

<p>
    <i>
        <label>Daftar link REST API</label>
        <ul>
            <li>/api</li>
            <div>METHOD => GET</div>
            <div>FUNGSI => Mengecek server</div>
        </ul>
        <ul>
            <li>/api/usertinknet</li>
            <div>METHOD => POST</div>
            <div>FUNGSI => Validasi akun</div>
        </ul>
        <ul>
            <li>/api/usertinknet/show</li>
            <div>METHOD => GET</div>
            <div>FUNGSI => Menampilkan semua akun staff</div>
        </ul>
        <ul>
            <li>/api/usertinknet/show/{parameter}</li>
            <div>METHOD => GET</div>
            <div>FUNGSI => Menampilkan informasi akun</div>
        </ul>
        <ul>
            <li>/api/usertinknet/update/{parameter}</li>
            <div>METHOD => POST</div>
            <div>FUNGSI => Mengubah informasi akun</div>
        </ul>
        <ul>
            <li>/api/usertinknet/store</li>
            <div>METHOD => POST</div>
            <div>FUNGSI => Menambahkan akun staff</div>
        </ul>
        <ul>
            <li>/api/usertinknet/delete/{parameter}</li>
            <div>METHOD => GET</div>
            <div>FUNGSI => Menghapus akun staff</div>
        </ul>
        <ul>
            <li>/api/usertinknet/reset/{parameter}</li>
            <div>METHOD => GET</div>
            <div>FUNGSI => Mengubah ulang informasi akun ke setelan default</div>
        </ul>
        <ul>
            <li>/api/databarang</li>
            <div>METHOD => GET</div>
            <div>FUNGSI => Menampilkan daftar barang</div>
        </ul>
        <ul>
            <li>/api/databarang/store</li>
            <div>METHOD => POST</div>
            <div>FUNGSI => Menambahkan informasi barang</div>
        </ul>
        <ul>
            <li>/api/databarang/show/{parameter}</li>
            <div>METHOD => GET</div>
            <div>FUNGSI => Menampikan informasi barang</div>
        </ul>
        <ul>
            <li>/api/databarang/update/{parameter}</li>
            <div>METHOD => POST</div>
            <div>FUNGSI => Mengubah informasi barang</div>
        </ul>
        <ul>
            <li>/api/databarang/total</li>
            <div>METHOD => GET</div>
            <div>FUNGSI => Menampilkan total barang dengan kondisi bagus</div>
        </ul>
        <ul>
            <li>/api/dataexport</li>
            <div>METHOD => GET</div>
            <div>FUNGSI => Mengunduh daftar barang dalam bentuk xlsx (Format Excel)</div>
        </ul>
    </i>
</p>

<p>
    <i>
        <label>Cara Pemasangan</label>
        <ul>
            <li>Pastikan aplikasi pendukung (tertera di atas) terpasang</li>
            <li>Unduh aplikasi ini langsung dari Github</li>
            <li>Pastikan "databaseTinknet" terpasang di MySQL</li>
            <li>Ketik perintah "php artisan migrate" di terminal atau command prompt</li>
            <li>Jalankan aplikasi dengan mengetik perintah "php artisan serve --host=0.0.0.0" di terminal atau command prompt</li>
        </ul>
    </i>
</p>

<p>
    <label>CATATAN KECIL :</label>
    Ketika akun telah dibuat, secara <i>default</i> menggunakan kata sandi <i>"tinknet123"</i>. Kata sandi tersebut dapat diubah
    oleh pengguna guna meningkatkan keamanan. Namun, <i>REST API</i> belum menggunakan <i>API Token</i> sehingga otentikasi akun
    terbilang belum aman. Sangat disarankan untuk menambahkan <i>API Token</i> sendiri.
</p>