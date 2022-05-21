Vue.createApp({
    data() {
      return {
        message: "Hello Universe!!",
        header: {
            slogan: "Welcome to My Website",
            nama: "Anhar Suryadi",
            kelas: "2011016061 | Information System | Sains and Technology",
            univ : "Massachutes Institute of Technology (MIT)",
            quotes: "Semua dimulai dari mencoba, kita tidak pernah merasakan keberhasilan dan kesuksesan tanpai pernah memulai dan tanpa berani mencoba.",
            imageprofile: "anharpubg.jpeg",
        },
        social: {
            ig: {
              url: "https://www.instagram.com/anh.surya09/",
              title: "anh.surya09",
            },
            fb: {
              url: "https://web.facebook.com/anhar.ibnrasyid",
              title: "Anhar Ibn Rasyid",
            },
            wa: {
              url: "https://wa.me/6281231852726/?text=Hi!%20Anhar%0AAku%20ingin%20berteman%20denganmu%20A,%20Apa%20kamu%20mau?",
              title: "Anhar Surya",
            },
            tele: {
              ulr: "https://t.me/annnhrrrraszhkva",
              title: "Anharrs"
            }
          },
  
        data_artikel: [],
      };
    },
    methods: {
        getArticles()
        {
            axios
            .get(
                "./articles.json"
            )
            .then((successFunction) => {
                console.log(res.data); //melihat respon data pada console browser
                this.data_artikel = res.data; //memperbarui variabel header pada bagian data()
            })
            .catch((error) => {
                console.log(error); //melihat error jika pengambilan data adalah gagal
            });
        }
    },
    beforeMount() {
      this.getArticles() //eksekusi fungsi getHeaderData() pada bagian methods saat halaman terbuka
    },
  }).mount("#app");
  