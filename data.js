const appData = {
    // UI Translations
    translations: {
        en: {
            title: "Joayo Korean",
            navHome: "Home",
            navVocab: "Vocab",
            navCards: "Cards",
            navQuiz: "Quiz",
            navProgress: "Progress",
            heroTitle: "Start Your Korean Journey",
            heroSubtitle: "The easiest way to master Hangul and daily phrases.",
            startBtn: "Start Learning Now →",
            progressTitle: "Course Progress",
            modulesTitle: "Learning Modules",
            backBtn: "← Back",
            completeBtn: "Mark as Completed",
            flashcardsTitle: "Flashcards",
            clickToFlip: "(Click to flip)",
            listenBtn: "🔊 Listen",
            prevBtn: "Previous",
            nextBtn: "Next",
            questionLabel: "Question",
            scoreLabel: "Score",
            quizCompleted: "Quiz Completed! 🎉",
            correctMsg: "You got {0}% correct.",
            tryAgainBtn: "Try Again",
            homeBtn: "Back Home",
            correctAudio: "Correct",
            incorrectAudio: "Incorrect",
            levelBeginner: "Beginner",
            levelIntermediate: "Intermediate",
            levelAdvanced: "Advanced",
            selectLevel: "Select Level",
            quizChooseType: "Choose Quiz Type",
            quizTextPractice: "Text Practice",
            quizTextDesc: "Multiple choice questions to test your refined vocabulary.",
            quizVoiceChallenge: "Voice Challenge",
            quizVoiceDesc: "Practice your pronunciation with AI speech recognition.",
            noQuizMsg: "No {0} quizzes available for {1} level yet.",
            backToSelection: "Back to Selection",
            backToMenu: "Back to Menu"
        },
        id: {
            title: "Joayo Korean",
            navHome: "Beranda",
            navVocab: "Kosakata",
            navCards: "Kartu",
            navQuiz: "Kuis",
            navProgress: "Progres",
            heroTitle: "Mulai Belajar 한국어 Sekarang",
            heroSubtitle: "Belajar Bahasa Korea jadi lebih seru, gampang, dan aesthetic! ✨",
            startBtn: "Mulai Belajar Yuk! 🚀",
            progressTitle: "Progres Belajar Kamu",
            modulesTitle: "Modul Belajar",
            backBtn: "← Kembali",
            completeBtn: "Tandai Selesai",
            flashcardsTitle: "Kartu Kilat",
            clickToFlip: "(Klik untuk balik)",
            listenBtn: "🔊 Dengar",
            prevBtn: "Sebelumnya",
            nextBtn: "Selanjutnya",
            questionLabel: "Pertanyaan",
            scoreLabel: "Skor",
            quizCompleted: "Kuis Selesai! 🎉",
            correctMsg: "Anda benar {0}%.",
            tryAgainBtn: "Coba Lagi",
            homeBtn: "Kembali ke Beranda",
            correctAudio: "Benar",
            incorrectAudio: "Salah",
            levelBeginner: "Pemula",
            levelIntermediate: "Menengah",
            levelAdvanced: "Lanjutan",
            selectLevel: "Pilih Tingkat",
            quizChooseType: "Pilih Jenis Kuis",
            quizTextPractice: "Latihan Teks",
            quizTextDesc: "Pilihan ganda untuk menguji kosakata Anda.",
            quizVoiceChallenge: "Tantangan Suara",
            quizVoiceDesc: "Latih pengucapan Anda dengan AI.",
            noQuizMsg: "Belum ada kuis {0} untuk tingkat {1}.",
            backToSelection: "Kembali ke Pilihan",
            backToMenu: "Kembali ke Menu"
        }
    },
    learningTips: {
        en: [
            { title: "Stage 1: Hangul Master", desc: "Don't rush. Master the alphabet correctly first. Avoid Romanization." },
            { title: "Stage 2: Basic Vocab", desc: "Learn 5 new verbs daily. Verbs are the core of Korean sentences." },
            { title: "Stage 3: Sentence Structure", desc: "Practice Subject-Object-Verb order. It's different from English!" },
            { title: "Stage 4: Immersion", desc: "Listen to K-Pop or watch K-Dramas to get used to the sounds." }
        ],
        id: [
            { title: "Tahap 1: Ahli Hangul", desc: "Jangan terburu-buru. Kuasai alfabet dengan benar dulu. Hindari Romanisasi." },
            { title: "Tahap 2: Kosakata Dasar", desc: "Pelajari 5 kata kerja baru setiap hari. Kata kerja adalah inti kalimat Korea." },
            { title: "Tahap 3: Struktur Kalimat", desc: "Latih urutan Subjek-Objek-Predikat. Berbeda dengan Bahasa Indonesia!" },
            { title: "Tahap 4: Imersi", desc: "Dengarkan K-Pop atau tonton Drama Korea agar terbiasa dengan bunyinya." }
        ]
    },
    // Content Data (Structure changed to object with lang keys)
    modules: {
        en: [
            {
                id: 1,
                level: "beginner",
                title: "Greetings & Basics",
                description: "Essential phrases to start a conversation.",
                content: `
                    <h3>Common Greetings</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('안녕하세요')"><span class="korean">안녕하세요</span><span class="roman">Annyeonghaseyo</span><span class="meaning">Hello</span></div>
                        <div class="vocab-item" onclick="playAudio('반갑습니다')"><span class="korean">반갑습니다</span><span class="roman">Bangapseumnida</span><span class="meaning">Nice to meet you</span></div>
                        <div class="vocab-item" onclick="playAudio('안녕히 가세요')"><span class="korean">안녕히 가세요</span><span class="roman">Annyeonghi gaseyo</span><span class="meaning">Goodbye (leaving)</span></div>
                        <div class="vocab-item" onclick="playAudio('안녕히 계세요')"><span class="korean">안녕히 계세요</span><span class="roman">Annyeonghi gyeseyo</span><span class="meaning">Goodbye (staying)</span></div>
                        <div class="vocab-item" onclick="playAudio('오랜만이에요')"><span class="korean">오랜만이에요</span><span class="roman">Oraenmanieyo</span><span class="meaning">Long time no see</span></div>
                        <div class="vocab-item" onclick="playAudio('감사합니다')"><span class="korean">감사합니다</span><span class="roman">Gamsahamnida</span><span class="meaning">Thank you</span></div>
                        <div class="vocab-item" onclick="playAudio('죄송합니다')"><span class="korean">죄송합니다</span><span class="roman">Joesonghamnida</span><span class="meaning">I am sorry</span></div>
                        <div class="vocab-item" onclick="playAudio('네')"><span class="korean">네</span><span class="roman">Ne</span><span class="meaning">Yes</span></div>
                        <div class="vocab-item" onclick="playAudio('아니요')"><span class="korean">아니요</span><span class="roman">Aniyo</span><span class="meaning">No</span></div>
                        <div class="vocab-item" onclick="playAudio('괜찮아요')"><span class="korean">괜찮아요</span><span class="roman">Gwaenchanayo</span><span class="meaning">It's okay</span></div>
                    </div>
                `
            },
            {
                id: 2,
                level: "beginner",
                title: "Numbers & Dates",
                description: "Counting systems and time expressions.",
                content: `
                    <h3>Native Numbers</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('하나')"><span class="korean">하나</span><span class="roman">Hana</span><span class="meaning">One</span></div>
                        <div class="vocab-item" onclick="playAudio('둘')"><span class="korean">둘</span><span class="roman">Dul</span><span class="meaning">Two</span></div>
                        <div class="vocab-item" onclick="playAudio('셋')"><span class="korean">셋</span><span class="roman">Set</span><span class="meaning">Three</span></div>
                        <div class="vocab-item" onclick="playAudio('넷')"><span class="korean">넷</span><span class="roman">Net</span><span class="meaning">Four</span></div>
                        <div class="vocab-item" onclick="playAudio('다섯')"><span class="korean">다섯</span><span class="roman">Daseot</span><span class="meaning">Five</span></div>
                    </div>
                    <h3>Sino-Korean Numbers</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('일')"><span class="korean">일</span><span class="roman">Il</span><span class="meaning">One</span></div>
                        <div class="vocab-item" onclick="playAudio('이')"><span class="korean">이</span><span class="roman">I</span><span class="meaning">Two</span></div>
                        <div class="vocab-item" onclick="playAudio('삼')"><span class="korean">삼</span><span class="roman">Sam</span><span class="meaning">Three</span></div>
                        <div class="vocab-item" onclick="playAudio('사')"><span class="korean">사</span><span class="roman">Sa</span><span class="meaning">Four</span></div>
                        <div class="vocab-item" onclick="playAudio('오')"><span class="korean">오</span><span class="roman">O</span><span class="meaning">Five</span></div>
                    </div>
                `
            },
            {
                id: 3,
                level: "intermediate",
                title: "Family & People",
                description: "Titles and people around you.",
                content: `
                    <h3>Family</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('가족')"><span class="korean">가족</span><span class="roman">Gajok</span><span class="meaning">Family</span></div>
                        <div class="vocab-item" onclick="playAudio('부모님')"><span class="korean">부모님</span><span class="roman">Bumonim</span><span class="meaning">Parents</span></div>
                        <div class="vocab-item" onclick="playAudio('아버지')"><span class="korean">아버지</span><span class="roman">Abeoji</span><span class="meaning">Father</span></div>
                        <div class="vocab-item" onclick="playAudio('어머니')"><span class="korean">어머니</span><span class="roman">Eomeoni</span><span class="meaning">Mother</span></div>
                        <div class="vocab-item" onclick="playAudio('동생')"><span class="korean">동생</span><span class="roman">Dongsaeng</span><span class="meaning">Younger Sibling</span></div>
                    </div>
                    <h3>People</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('친구')"><span class="korean">친구</span><span class="roman">Chingu</span><span class="meaning">Friend</span></div>
                        <div class="vocab-item" onclick="playAudio('사람')"><span class="korean">사람</span><span class="roman">Saram</span><span class="meaning">Person</span></div>
                        <div class="vocab-item" onclick="playAudio('남자')"><span class="korean">남자</span><span class="roman">Namja</span><span class="meaning">Man</span></div>
                        <div class="vocab-item" onclick="playAudio('여자')"><span class="korean">여자</span><span class="roman">Yeoja</span><span class="meaning">Woman</span></div>
                        <div class="vocab-item" onclick="playAudio('아이')"><span class="korean">아이</span><span class="roman">Ai</span><span class="meaning">Child</span></div>
                    </div>
                `
            },
            {
                id: 4,
                level: "intermediate",
                title: "Food & Dining",
                description: "Ordering and enjoying Korean food.",
                content: `
                    <h3>Meals</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('밥')"><span class="korean">밥</span><span class="roman">Bap</span><span class="meaning">Rice/Meal</span></div>
                        <div class="vocab-item" onclick="playAudio('아침')"><span class="korean">아침</span><span class="roman">Achim</span><span class="meaning">Breakfast</span></div>
                        <div class="vocab-item" onclick="playAudio('점심')"><span class="korean">점심</span><span class="roman">Jeomsim</span><span class="meaning">Lunch</span></div>
                        <div class="vocab-item" onclick="playAudio('저녁')"><span class="korean">저녁</span><span class="roman">Jeonyeok</span><span class="meaning">Dinner</span></div>
                        <div class="vocab-item" onclick="playAudio('물')"><span class="korean">물</span><span class="roman">Mul</span><span class="meaning">Water</span></div>
                    </div>
                    <h3>Dishes</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('김치')"><span class="korean">김치</span><span class="roman">Kimchi</span><span class="meaning">Kimchi</span></div>
                        <div class="vocab-item" onclick="playAudio('불고기')"><span class="korean">불고기</span><span class="roman">Bulgogi</span><span class="meaning">Bulgogi</span></div>
                        <div class="vocab-item" onclick="playAudio('비빔밥')"><span class="korean">비빔밥</span><span class="roman">Bibimbap</span><span class="meaning">Mixed Rice</span></div>
                        <div class="vocab-item" onclick="playAudio('라면')"><span class="korean">라면</span><span class="roman">Ramyeon</span><span class="meaning">Ramen</span></div>
                        <div class="vocab-item" onclick="playAudio('김밥')"><span class="korean">김밥</span><span class="roman">Gimbap</span><span class="meaning">Seaweed Rice Roll</span></div>
                    </div>
                `
            },
            {
                id: 5,
                level: "advanced",
                title: "Travel & Places",
                description: "Navigating through Korea.",
                content: `
                    <h3>Locations</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('공항')"><span class="korean">공항</span><span class="roman">Gonghang</span><span class="meaning">Airport</span></div>
                        <div class="vocab-item" onclick="playAudio('호텔')"><span class="korean">호텔</span><span class="roman">Hotel</span><span class="meaning">Hotel</span></div>
                        <div class="vocab-item" onclick="playAudio('지하철역')"><span class="korean">지하철역</span><span class="roman">Jihacheol-yeok</span><span class="meaning">Subway Station</span></div>
                        <div class="vocab-item" onclick="playAudio('버스 정류장')"><span class="korean">버스 정류장</span><span class="roman">Beoseu jeongnyujang</span><span class="meaning">Bus Stop</span></div>
                        <div class="vocab-item" onclick="playAudio('화장실')"><span class="korean">화장실</span><span class="roman">Hwajangsil</span><span class="meaning">Restroom</span></div>
                    </div>
                    <h3>Travel Verbs</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('가다')"><span class="korean">가다</span><span class="roman">Gada</span><span class="meaning">To Go</span></div>
                        <div class="vocab-item" onclick="playAudio('오다')"><span class="korean">오다</span><span class="roman">Oda</span><span class="meaning">To Come</span></div>
                        <div class="vocab-item" onclick="playAudio('타다')"><span class="korean">타다</span><span class="roman">Tada</span><span class="meaning">To Ride</span></div>
                        <div class="vocab-item" onclick="playAudio('내리다')"><span class="korean">내리다</span><span class="roman">Naerida</span><span class="meaning">To Get Off</span></div>
                        <div class="vocab-item" onclick="playAudio('걷다')"><span class="korean">걷다</span><span class="roman">Geotda</span><span class="meaning">To Walk</span></div>
                    </div>
                `
            },
            {
                id: 6,
                level: "advanced",
                title: "Emotions & Feelings",
                description: "Expressing yourself deeply.",
                content: `
                    <h3>Positive</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('행복하다')"><span class="korean">행복하다</span><span class="roman">Haengbokhada</span><span class="meaning">Happy</span></div>
                        <div class="vocab-item" onclick="playAudio('기쁘다')"><span class="korean">기쁘다</span><span class="roman">Gippeuda</span><span class="meaning">Glad</span></div>
                        <div class="vocab-item" onclick="playAudio('신나다')"><span class="korean">신나다</span><span class="roman">Sinnada</span><span class="meaning">Excited</span></div>
                        <div class="vocab-item" onclick="playAudio('사랑하다')"><span class="korean">사랑하다</span><span class="roman">Saranghada</span><span class="meaning">Love</span></div>
                        <div class="vocab-item" onclick="playAudio('재미있다')"><span class="korean">재미있다</span><span class="roman">Jaemiitda</span><span class="meaning">Fun/Interesting</span></div>
                    </div>
                    <h3>Negative</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('슬프다')"><span class="korean">슬프다</span><span class="roman">Seulpeuda</span><span class="meaning">Sad</span></div>
                        <div class="vocab-item" onclick="playAudio('화나다')"><span class="korean">화나다</span><span class="roman">Hwanada</span><span class="meaning">Angry</span></div>
                        <div class="vocab-item" onclick="playAudio('무섭다')"><span class="korean">무섭다</span><span class="roman">Museopda</span><span class="meaning">Scary</span></div>
                        <div class="vocab-item" onclick="playAudio('피곤하다')"><span class="korean">피곤하다</span><span class="roman">Pigonhada</span><span class="meaning">Tired</span></div>
                        <div class="vocab-item" onclick="playAudio('지루하다')"><span class="korean">지루하다</span><span class="roman">Jiruhada</span><span class="meaning">Boring</span></div>
                    </div>
                `
            }
        ],
        id: [
            {
                id: 1,
                level: "beginner",
                title: "Salam & Dasar",
                description: "Frasa penting untuk percakapan awal.",
                content: `
                    <h3>Salam Umum</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('안녕하세요')"><span class="korean">안녕하세요</span><span class="roman">Annyeonghaseyo</span><span class="meaning">Halo</span></div>
                        <div class="vocab-item" onclick="playAudio('반갑습니다')"><span class="korean">반갑습니다</span><span class="roman">Bangapseumnida</span><span class="meaning">Senang bertemu</span></div>
                        <div class="vocab-item" onclick="playAudio('안녕히 가세요')"><span class="korean">안녕히 가세요</span><span class="roman">Annyeonghi gaseyo</span><span class="meaning">Selamat jalan</span></div>
                        <div class="vocab-item" onclick="playAudio('안녕히 계세요')"><span class="korean">안녕히 계세요</span><span class="roman">Annyeonghi gyeseyo</span><span class="meaning">Selamat tinggal</span></div>
                        <div class="vocab-item" onclick="playAudio('오랜만이에요')"><span class="korean">오랜만이에요</span><span class="roman">Oraenmanieyo</span><span class="meaning">Lama tak jumpa</span></div>
                        <div class="vocab-item" onclick="playAudio('감사합니다')"><span class="korean">감사합니다</span><span class="roman">Gamsahamnida</span><span class="meaning">Terima kasih</span></div>
                        <div class="vocab-item" onclick="playAudio('죄송합니다')"><span class="korean">죄송합니다</span><span class="roman">Joesonghamnida</span><span class="meaning">Mohon maaf</span></div>
                        <div class="vocab-item" onclick="playAudio('네')"><span class="korean">네</span><span class="roman">Ne</span><span class="meaning">Ya</span></div>
                        <div class="vocab-item" onclick="playAudio('아니요')"><span class="korean">아니요</span><span class="roman">Aniyo</span><span class="meaning">Tidak</span></div>
                        <div class="vocab-item" onclick="playAudio('괜찮아요')"><span class="korean">괜찮아요</span><span class="roman">Gwaenchanayo</span><span class="meaning">Tidak apa-apa</span></div>
                    </div>
                `
            },
            {
                id: 2,
                level: "beginner",
                title: "Angka & Tanggal",
                description: "Cara berhitung dan waktu.",
                content: `
                    <h3>Angka Asli Korea</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('하나')"><span class="korean">하나</span><span class="roman">Hana</span><span class="meaning">Satu</span></div>
                        <div class="vocab-item" onclick="playAudio('둘')"><span class="korean">둘</span><span class="roman">Dul</span><span class="meaning">Dua</span></div>
                        <div class="vocab-item" onclick="playAudio('셋')"><span class="korean">셋</span><span class="roman">Set</span><span class="meaning">Tiga</span></div>
                        <div class="vocab-item" onclick="playAudio('넷')"><span class="korean">넷</span><span class="roman">Net</span><span class="meaning">Empat</span></div>
                        <div class="vocab-item" onclick="playAudio('다섯')"><span class="korean">다섯</span><span class="roman">Daseot</span><span class="meaning">Lima</span></div>
                    </div>
                    <h3>Angka Sino-Korea</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('일')"><span class="korean">일</span><span class="roman">Il</span><span class="meaning">Satu (Sino)</span></div>
                        <div class="vocab-item" onclick="playAudio('이')"><span class="korean">이</span><span class="roman">I</span><span class="meaning">Dua (Sino)</span></div>
                        <div class="vocab-item" onclick="playAudio('삼')"><span class="korean">삼</span><span class="roman">Sam</span><span class="meaning">Tiga (Sino)</span></div>
                        <div class="vocab-item" onclick="playAudio('사')"><span class="korean">사</span><span class="roman">Sa</span><span class="meaning">Empat (Sino)</span></div>
                        <div class="vocab-item" onclick="playAudio('오')"><span class="korean">오</span><span class="roman">O</span><span class="meaning">Lima (Sino)</span></div>
                    </div>
                `
            },
            {
                id: 3,
                level: "intermediate",
                title: "Keluarga & Orang",
                description: "Panggilan untuk orang-orang.",
                content: `
                    <h3>Keluarga</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('가족')"><span class="korean">가족</span><span class="roman">Gajok</span><span class="meaning">Keluarga</span></div>
                        <div class="vocab-item" onclick="playAudio('부모님')"><span class="korean">부모님</span><span class="roman">Bumonim</span><span class="meaning">Orang Tua</span></div>
                        <div class="vocab-item" onclick="playAudio('아버지')"><span class="korean">아버지</span><span class="roman">Abeoji</span><span class="meaning">Ayah</span></div>
                        <div class="vocab-item" onclick="playAudio('어머니')"><span class="korean">어머니</span><span class="roman">Eomeoni</span><span class="meaning">Ibu</span></div>
                        <div class="vocab-item" onclick="playAudio('동생')"><span class="korean">동생</span><span class="roman">Dongsaeng</span><span class="meaning">Adik</span></div>
                    </div>
                    <h3>Orang</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('친구')"><span class="korean">친구</span><span class="roman">Chingu</span><span class="meaning">Teman</span></div>
                        <div class="vocab-item" onclick="playAudio('사람')"><span class="korean">사람</span><span class="roman">Saram</span><span class="meaning">Orang</span></div>
                        <div class="vocab-item" onclick="playAudio('남자')"><span class="korean">남자</span><span class="roman">Namja</span><span class="meaning">Pria</span></div>
                        <div class="vocab-item" onclick="playAudio('여자')"><span class="korean">여자</span><span class="roman">Yeoja</span><span class="meaning">Wanita</span></div>
                        <div class="vocab-item" onclick="playAudio('아이')"><span class="korean">아이</span><span class="roman">Ai</span><span class="meaning">Anak</span></div>
                    </div>
                `
            },
            {
                id: 4,
                level: "intermediate",
                title: "Makanan & Kuliner",
                description: "Menikmati hidangan Korea.",
                content: `
                    <h3>Waktu Makan</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('밥')"><span class="korean">밥</span><span class="roman">Bap</span><span class="meaning">Nasi</span></div>
                        <div class="vocab-item" onclick="playAudio('아침')"><span class="korean">아침</span><span class="roman">Achim</span><span class="meaning">Sarapan</span></div>
                        <div class="vocab-item" onclick="playAudio('점심')"><span class="korean">점심</span><span class="roman">Jeomsim</span><span class="meaning">Makan Siang</span></div>
                        <div class="vocab-item" onclick="playAudio('저녁')"><span class="korean">저녁</span><span class="roman">Jeonyeok</span><span class="meaning">Makan Malam</span></div>
                        <div class="vocab-item" onclick="playAudio('물')"><span class="korean">물</span><span class="roman">Mul</span><span class="meaning">Air</span></div>
                    </div>
                    <h3>Menu</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('김치')"><span class="korean">김치</span><span class="roman">Kimchi</span><span class="meaning">Kimchi</span></div>
                        <div class="vocab-item" onclick="playAudio('불고기')"><span class="korean">불고기</span><span class="roman">Bulgogi</span><span class="meaning">Bulgogi</span></div>
                        <div class="vocab-item" onclick="playAudio('비빔밥')"><span class="korean">비빔밥</span><span class="roman">Bibimbap</span><span class="meaning">Bibimbap</span></div>
                        <div class="vocab-item" onclick="playAudio('라면')"><span class="korean">라면</span><span class="roman">Ramyeon</span><span class="meaning">Ramen</span></div>
                        <div class="vocab-item" onclick="playAudio('김밥')"><span class="korean">김밥</span><span class="roman">Gimbap</span><span class="meaning">Gimbap</span></div>
                    </div>
                `
            },
            {
                id: 5,
                level: "advanced",
                title: "Wisata & Tempat",
                description: "Menjelajahi Korea.",
                content: `
                    <h3>Lokasi</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('공항')"><span class="korean">공항</span><span class="roman">Gonghang</span><span class="meaning">Bandara</span></div>
                        <div class="vocab-item" onclick="playAudio('호텔')"><span class="korean">호텔</span><span class="roman">Hotel</span><span class="meaning">Hotel</span></div>
                        <div class="vocab-item" onclick="playAudio('지하철역')"><span class="korean">지하철역</span><span class="roman">Jihacheol-yeok</span><span class="meaning">Stasiun MRT</span></div>
                        <div class="vocab-item" onclick="playAudio('버스 정류장')"><span class="korean">버스 정류장</span><span class="roman">Beoseu jeongnyujang</span><span class="meaning">Halte Bus</span></div>
                        <div class="vocab-item" onclick="playAudio('화장실')"><span class="korean">화장실</span><span class="roman">Hwajangsil</span><span class="meaning">Toilet</span></div>
                    </div>
                    <h3>Kata Kerja Wisata</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('가다')"><span class="korean">가다</span><span class="roman">Gada</span><span class="meaning">Pergi</span></div>
                        <div class="vocab-item" onclick="playAudio('오다')"><span class="korean">오다</span><span class="roman">Oda</span><span class="meaning">Datang</span></div>
                        <div class="vocab-item" onclick="playAudio('타다')"><span class="korean">타다</span><span class="roman">Tada</span><span class="meaning">Naik (kendaraan)</span></div>
                        <div class="vocab-item" onclick="playAudio('내리다')"><span class="korean">내리다</span><span class="roman">Naerida</span><span class="meaning">Turun</span></div>
                        <div class="vocab-item" onclick="playAudio('걷다')"><span class="korean">걷다</span><span class="roman">Geotda</span><span class="meaning">Jalan Kaki</span></div>
                    </div>
                `
            },
            {
                id: 6,
                level: "advanced",
                title: "Emosi & Perasaan",
                description: "Mengekspresikan isi hati.",
                content: `
                    <h3>Positif</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('행복하다')"><span class="korean">행복하다</span><span class="roman">Haengbokhada</span><span class="meaning">Bahagia</span></div>
                        <div class="vocab-item" onclick="playAudio('기쁘다')"><span class="korean">기쁘다</span><span class="roman">Gippeuda</span><span class="meaning">Senang</span></div>
                        <div class="vocab-item" onclick="playAudio('신나다')"><span class="korean">신나다</span><span class="roman">Sinnada</span><span class="meaning">Bersemangat</span></div>
                        <div class="vocab-item" onclick="playAudio('사랑하다')"><span class="korean">사랑하다</span><span class="roman">Saranghada</span><span class="meaning">Mencintai</span></div>
                        <div class="vocab-item" onclick="playAudio('재미있다')"><span class="korean">재미있다</span><span class="roman">Jaemiitda</span><span class="meaning">Seru/Menarik</span></div>
                    </div>
                    <h3>Negatif</h3>
                    <div class="vocab-list">
                        <div class="vocab-item" onclick="playAudio('슬프다')"><span class="korean">슬프다</span><span class="roman">Seulpeuda</span><span class="meaning">Sedih</span></div>
                        <div class="vocab-item" onclick="playAudio('화나다')"><span class="korean">화나다</span><span class="roman">Hwanada</span><span class="meaning">Marah</span></div>
                        <div class="vocab-item" onclick="playAudio('무섭다')"><span class="korean">무섭다</span><span class="roman">Museopda</span><span class="meaning">Takut</span></div>
                        <div class="vocab-item" onclick="playAudio('피곤하다')"><span class="korean">피곤하다</span><span class="roman">Pigonhada</span><span class="meaning">Lelah</span></div>
                        <div class="vocab-item" onclick="playAudio('지루하다')"><span class="korean">지루하다</span><span class="roman">Jiruhada</span><span class="meaning">Bosan</span></div>
                    </div>
                `
            }
        ],
    },
    flashcards: {
        en: [
            {
                id: 'hangul',
                title: 'Hangul Alphabet',
                description: 'Master the basic Korean letters.',
                cards: [
                    { front: "ㅏ", back: "a (ah)" },
                    { front: "ㅗ", back: "o (oh)" },
                    { front: "ㅜ", back: "u (oo)" },
                    { front: "ㅣ", back: "i (ee)" },
                    { front: "ㄱ", back: "g/k (gi-yeok)" },
                    { front: "ㄴ", back: "n (ni-eun)" },
                    { front: "ㄷ", back: "d/t (di-geut)" },
                    { front: "ㄹ", back: "r/l (ri-eul)" },
                    { front: "ㅁ", back: "m (mi-eum)" },
                    { front: "ㅂ", back: "b/p (bi-eup)" }
                ]
            },
            {
                id: 'basics',
                title: 'Everyday Words',
                description: 'Common objects and daily essentials.',
                cards: [
                    { front: "사과", back: "Apple (Sa-gwa)" },
                    { front: "물", back: "Water (Mul)" },
                    { front: "학교", back: "School (Hak-gyo)" },
                    { front: "친구", back: "Friend (Chin-gu)" },
                    { front: "책", back: "Book (Chaek)" },
                    { front: "회사", back: "Company (Hoe-sa)" },
                    { front: "지하철", back: "Subway (Ji-ha-cheol)" },
                    { front: "컴퓨터", back: "Computer (Keom-pyu-teo)" }
                ]
            },
            {
                id: 'phrases',
                title: 'Useful Phrases',
                description: 'Sentences you will use often.',
                cards: [
                    { front: "안녕하세요", back: "Hello (An-nyeong-ha-se-yo)" },
                    { front: "감사합니다", back: "Thank you (Gam-sa-ham-ni-da)" },
                    { front: "사랑해", back: "I Love You (Sa-rang-hae)" },
                    { front: "배고파요", back: "I'm hungry (Bae-go-pa-yo)" },
                    { front: "도와주세요", back: "Help me please (Do-wa-ju-se-yo)" },
                    { front: "화장실 어디에요?", back: "Where is the bathroom? (Hwa-jang-sil eo-di-e-yo?)" }
                ]
            }
        ],
        id: [
            {
                id: 'hangul',
                title: 'Alfabet Hangul',
                description: 'Kuasai huruf dasar Korea.',
                cards: [
                    { front: "ㅏ", back: "a (ah)" },
                    { front: "ㅗ", back: "o (oh)" },
                    { front: "ㅜ", back: "u (oo)" },
                    { front: "ㅣ", back: "i (ee)" },
                    { front: "ㄱ", back: "g/k (gi-yeok)" },
                    { front: "ㄴ", back: "n (ni-eun)" },
                    { front: "ㄷ", back: "d/t (di-geut)" },
                    { front: "ㄹ", back: "r/l (ri-eul)" },
                    { front: "ㅁ", back: "m (mi-eum)" },
                    { front: "ㅂ", back: "b/p (bi-eup)" }
                ]
            },
            {
                id: 'basics',
                title: 'Kata Sehari-hari',
                description: 'Benda umum dan kebutuhan harian.',
                cards: [
                    { front: "사과", back: "Apel (Sa-gwa)" },
                    { front: "물", back: "Air (Mul)" },
                    { front: "학교", back: "Sekolah (Hak-gyo)" },
                    { front: "친구", back: "Teman (Chin-gu)" },
                    { front: "책", back: "Buku (Chaek)" },
                    { front: "회사", back: "Perusahaan (Hoe-sa)" },
                    { front: "지하철", back: "Kereta Bawah Tanah (Ji-ha-cheol)" },
                    { front: "컴퓨터", back: "Komputer (Keom-pyu-teo)" }
                ]
            },
            {
                id: 'phrases',
                title: 'Frasa Berguna',
                description: 'Kalimat yang sering digunakan.',
                cards: [
                    { front: "안녕하세요", back: "Halo (An-nyeong-ha-se-yo)" },
                    { front: "감사합니다", back: "Terima kasih (Gam-sa-ham-ni-da)" },
                    { front: "사랑해", back: "Aku Cinta Kamu (Sa-rang-hae)" },
                    { front: "배고파요", back: "Aku lapar (Bae-go-pa-yo)" },
                    { front: "도와주세요", back: "Tolong saya (Do-wa-ju-se-yo)" },
                    { front: "화장실 어디에요?", back: "Toilet di mana? (Hwa-jang-sil eo-di-e-yo?)" }
                ]
            }
        ]
    },
    quizzes: {
        en: {
            beginner: [
                {
                    question: "How do you say 'Hello' in Korean?",
                    options: ["감사합니다", "안녕하세요", "죄송합니다", "잘 가요"],
                    answer: 1
                },
                {
                    question: "What is 'Apple' in Korean?",
                    options: ["물", "사과", "바나나", "포도"],
                    answer: 1
                },
                {
                    question: "Which vowel sounds like 'a' in 'father'?",
                    options: ["ㅗ", "ㅜ", "ㅏ", "ㅣ"],
                    answer: 2
                },
                // Beginner Text Questions
                { question: "What is 'To Sleep'?", options: ["가다", "먹다", "자다", "하다"], answer: 2 },
                { question: "Which word means 'School'?", options: ["학교", "병원", "은행", "공원"], answer: 0 },
                { question: "Translate 'Bag':", options: ["가방", "모자", "신발", "안경"], answer: 0 },
                { question: "What is 'Milk'?", options: ["물", "우유", "주스", "차"], answer: 1 },
                { question: "Choose the correct greeting for 'Goodbye' (staying):", options: ["안녕히 계세요", "안녕히 가세요", "반갑습니다", "어서오세요"], answer: 0 },

                // Beginner Speaking Questions
                { type: "speaking", question: "Say 'Hello' in Korean", targetPhrase: "안녕하세요", romaji: "An-nyeong-ha-se-yo" },
                { type: "speaking", question: "Say 'Thank You'", targetPhrase: "감사합니다", romaji: "Gam-sa-ham-ni-da" },
                { type: "speaking", question: "Say 'Friend'", targetPhrase: "친구", romaji: "Chin-gu" },
                { type: "speaking", question: "Say 'One' (Native)", targetPhrase: "하나", romaji: "Ha-na" }
            ],
            intermediate: [
                // Intermediate Text
                { question: "How do you say 'Boss'?", options: ["선생님", "사장님", "친구", "학생"], answer: 1 },
                { question: "Which number is 'Set' (3)?", options: ["하나", "둘", "셋", "넷"], answer: 2 },
                { question: "Formal way to say 'Thank you'?", options: ["고마워", "감사합니다", "미안해", "잘가"], answer: 1 },
                { question: "What is 'Subway'?", options: ["버스", "택시", "지하철", "기차"], answer: 2 },
                { question: "Translate 'Last Week':", options: ["모레", "어제", "지난주", "다음주"], answer: 2 },

                // Intermediate Speaking
                { type: "speaking", question: "Say 'Meeting' (Business)", targetPhrase: "회의", romaji: "Hoe-ui" },
                { type: "speaking", question: "Say 'Where is the bathroom?'", targetPhrase: "화장실 어디에요", romaji: "Hwa-jang-sil eo-di-e-yo" },
                { type: "speaking", question: "Say 'See you tomorrow'", targetPhrase: "내일 봐요", romaji: "Nae-il bwa-yo" }
            ],
            advanced: [
                // Advanced Text
                { question: "What is 'Water' in Korean?", options: ["밥", "물", "김치", "술"], answer: 1 },
                { question: "How do you say 'It is delicious'?", options: ["맛없어요", "맛있어요", "매워요", "짜요"], answer: 1 },
                { question: "What ingredient is 'Gochujang'?", options: ["Soy Sauce", "Bean Paste", "Red Chili Paste", "Salt"], answer: 2 },
                { question: "Translate 'Recipe':", options: ["조리법", "메뉴", "식당", "요리사"], answer: 0 },

                // Advanced Speaking
                { type: "speaking", question: "Say 'Kue Beras Pedas' (Tteokbokki) in Korean", targetPhrase: "떡볶이", romaji: "Tteok-bok-ki" },
                { type: "speaking", question: "Say 'Please give me the menu'", targetPhrase: "메뉴 좀 주세요", romaji: "Menu jom juseyo" },
                { type: "speaking", question: "Say 'It is spicy'", targetPhrase: "매워요", romaji: "Mae-wo-yo" }
            ]
        },
        id: {
            beginner: [
                {
                    question: "Bagaimana cara mengucapkan 'Halo' dalam bahasa Korea?",
                    options: ["감사합니다", "안녕하세요", "죄송합니다", "잘 가요"],
                    answer: 1
                },
                {
                    question: "Apa bahasa Koreanya 'Apel'?",
                    options: ["물", "사과", "바나나", "포도"],
                    answer: 1
                },
                {
                    question: "Vokal mana yang berbunyi seperti 'a' pada 'bapak'?",
                    options: ["ㅗ", "ㅜ", "ㅏ", "ㅣ"],
                    answer: 2
                },
                // Beginner Text (ID)
                { question: "Apa arti 'Jada' (자다)?", options: ["Pergi", "Makan", "Tidur", "Melakukan"], answer: 2 },
                { question: "Apa Bahasa Korea 'Sekolah'?", options: ["Hakgyo", "Byeongwon", "Eunhaeng", "Gongwon"], answer: 0 },
                { question: "Terjemahkan 'Tas':", options: ["Gabang", "Moja", "Sinbal", "Angyeong"], answer: 0 },
                { question: "Apa itu 'Susu'?", options: ["Mul", "Uyu", "Juseu", "Cha"], answer: 1 },

                // Beginner Speaking (ID)
                { type: "speaking", question: "Ucapkan 'Halo' dalam Bahasa Korea", targetPhrase: "안녕하세요", romaji: "An-nyeong-ha-se-yo" },
                { type: "speaking", question: "Ucapkan 'Terima Kasih'", targetPhrase: "감사합니다", romaji: "Gam-sa-ham-ni-da" },
                { type: "speaking", question: "Ucapkan 'Teman'", targetPhrase: "친구", romaji: "Chin-gu" },
                { type: "speaking", question: "Ucapkan 'Satu' (Asli)", targetPhrase: "하나", romaji: "Ha-na" }
            ],
            intermediate: [
                // Intermediate Text (ID)
                { question: "Bagaimana memanggil 'Bos'?", options: ["Guru", "Sajangnim", "Teman", "Murid"], answer: 1 },
                { question: "Angka berapa 'Set' (3)?", options: ["Satu", "Dua", "Tiga", "Empat"], answer: 2 },
                { question: "Cara formal mengucapkan 'Terima kasih'?", options: ["Gomawo", "Gamsahamnida", "Mianhae", "Jalga"], answer: 1 },
                { question: "Apa itu 'Kereta Bawah Tanah'?", options: ["Beoseu", "Taeksi", "Jihacheol", "Gicha"], answer: 2 },
                { question: "Terjemahkan 'Minggu Lalu':", options: ["Besok Lusa", "Kemarin", "Jinanjoo", "Minggu Depan"], answer: 2 },

                // Intermediate Speaking (ID)
                { type: "speaking", question: "Ucapkan 'Rapat' (Bisnis)", targetPhrase: "회의", romaji: "Hoe-ui" },
                { type: "speaking", question: "Ucapkan 'Kamar mandi di mana?'", targetPhrase: "화장실 어디에요", romaji: "Hwa-jang-sil eo-di-e-yo" },
            ],
            advanced: [
                // Advanced Text (ID)
                { question: "Apa bahasa Koreanya 'Air'?", options: ["밥", "물", "김치", "술"], answer: 1 },
                { question: "Bagaimana mengucapkan 'Ini Enak'?", options: ["Mat-eop-seo-yo", "Ma-sit-seo-yo", "Mae-wo-yo", "Jja-yo"], answer: 1 },
                { question: "Apa bahan utama 'Gochujang'?", options: ["Kecap Asin", "Pasta Kacang", "Pasta Cabai Merah", "Garam"], answer: 2 },

                // Advanced Speaking (ID)
                { type: "speaking", question: "Ucapkan 'Tteokbokki' dalam Bahasa Korea", targetPhrase: "떡볶이", romaji: "Tteok-bok-ki" },
                { type: "speaking", question: "Ucapkan 'Tolong berikan menu'", targetPhrase: "메뉴 좀 주세요", romaji: "Menu jom juseyo" },
                { type: "speaking", question: "Ucapkan 'Pedas'", targetPhrase: "매워요", romaji: "Mae-wo-yo" }
            ]
        }
    },
    learningTips: {
        en: [
            { title: "Stage 1: Hangul", desc: "Master the alphabet (Vowels & Consonants)." },
            { title: "Stage 2: Basics", desc: "Learn numbers, greetings, and daily words." },
            { title: "Stage 3: Sentences", desc: "Form simple sentences and questions." },
            { title: "Stage 4: Practice", desc: "Use flashcards and quizzes daily." },
            { title: "Stage 5: Fluency", desc: "Speak with confidence and expand vocab." }
        ],
        id: [
            { title: "Tahap 1: Hangul", desc: "Kuasai alfabet (Vokal & Konsonan)." },
            { title: "Tahap 2: Dasar", desc: "Pelajari angka, salam, dan kata harian." },
            { title: "Tahap 3: Kalimat", desc: "Bentuk kalimat sederhana dan pertanyaan." },
            { title: "Tahap 4: Latihan", desc: "Gunakan kartu flash dan kuis setiap hari." },
            { title: "Tahap 5: Lancar", desc: "Bicara dengan percaya diri dan perbanyak kosakata." }
        ]
    }
};
