import styles from './Home.module.css';
import blackxp from './../assets/blackXp.svg';
import patterns2 from './../assets/patterns/9.png';
import patterns5 from './../assets/patterns/4.png';
import { motion } from 'framer-motion';
import { Pause, Play } from '@phosphor-icons/react';
import { useState, useRef, useEffect } from 'react';

export function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [musicName, setMusicName] = useState("Ouça nossa Playlist!");
    const [hasClicked, setHasClicked] = useState(false);
    const [lastSongIndex, setLastSongIndex] = useState(-1);

    const songs = [
        {
            name: "Roça Sound | Verde e Cinza | feat: Tonho Dionorina",
            url: "https://github.com/andressaaborges/musics/raw/main/RocaSound-VerdeECinza-featTonhoDionorina.mp3"
        },
        {
            name: "Miss Odara - Sérgio Baleiro",
            url: "https://github.com/andressaaborges/musics/raw/main/MissOdara-SergioBaleiro.mpeg"
        },
        {
            name: "Gari - Jorge de Angélica",
            url: "https://github.com/andressaaborges/musics/raw/main/Gari-JorgeDeAngelica.mpeg"
        },
        {
            name: "Poeira - Val Conceição",
            url: "https://github.com/andressaaborges/musics/raw/main/Poeira-ValConceicao.mpeg"
        },
        {
            name: "Rainha - Gilsam Reggaeman do Brasil",
            url: "https://github.com/andressaaborges/musics/raw/main/Rainha-GilsamReggaemanDoBrasil.mpeg"
        },
        {
            name: "Ilê Aiyê - Que Bloco é Esse?",
            url: "https://github.com/andressaaborges/musics/raw/main/IleAyie-QueBlocoEEsse.mp3"
        },
        {
            name: "Muzenza - Brilho e Beleza",
            url: "https://github.com/andressaaborges/musics/raw/main/Muzenza-BrilhoEBeleza.mp3"
        },
        {
            name: "Olodum - Vem Meu Amor",
            url: "https://github.com/andressaaborges/musics/raw/main/Olodum-VemMeuAmor.mp3"
        },
        {
            name: "Male Debalê - Essência do Amor",
            url: "https://github.com/andressaaborges/musics/raw/main/MaleDebale-EssenciaDoAmor.mp3"
        },
        // Adicione mais músicas conforme necessário 
    ];

    const num = Math.floor(Math.random() * songs.length);
    const audioRef = useRef(new Audio(songs[num].url));

    const handlePlayer = () => {
        const audio = audioRef.current;

        if (!hasClicked) {
            setHasClicked(true);
            setMusicName(songs[num].name);
        }

        if (!isPlaying) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    }

    useEffect(() => {
        const audio = audioRef.current;

        audio.addEventListener('ended', () => {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * songs.length);
            } while (randomIndex === lastSongIndex);

            setLastSongIndex(randomIndex);

            audio.src = songs[randomIndex].url;
            setMusicName(songs[randomIndex].name);

            if (isPlaying) {
                audio.play();
            }
        });

        return () => {
            audio.removeEventListener('ended', () => { });
        }
    }, [songs, isPlaying, lastSongIndex]);

    const icon = isPlaying
        ? <Pause size={28} color="#ffffff" weight="fill" />
        : <Play size={28} color="#ffffff" weight="fill" />;

    return (
        <section className={styles.home} id="home">
            <motion.img className={styles.patterns} src={patterns5} alt="Padrão geométrico da BlackXP" title="Padrão geométrico da BlackXP" whileInView={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} />
            <motion.img className={styles.patterns2} src={patterns2} alt="Padrão geométrico da BlackXP" title="Padrão geométrico da BlackXP" whileInView={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} />
            <article className={styles.content}>
                <div className={styles.textImg}>
                    <motion.img className={styles.logo} src={blackxp} alt="Logo Black XP" title="Logo Black XP" whileInView={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }} />
                    <div className={styles.titles}>
                        {/* <h1>Ampliando as oportunidades para jovens negros na indústria de tecnologia e jogos</h1> */}
                        {/* <h5 className={styles.h5En}>Transforme seu Futuro - Diversidade, Inovação e Oportunidades em Foco. Inscrições Abertas!</h5> */}
                    </div>
                </div>
                <div className={styles.buttonsSection}>
                    <button className={styles.buttonBackground}>
                        <a href={"#what"}>
                            Inscreva-se agora!
                        </a>
                    </button>

                    <button className={styles.buttonHasBorder}>
                        <a href={"#what"}>
                            Ou participe Online!
                        </a>
                    </button>

                    {/* <a className={styles.buttonHasBorder} onClick={handlePlayer}>
                        {icon}
                        <div className={styles.buttonTextContainer}>
                            <p className={hasClicked ? styles.buttonText : ""}>{musicName}</p>
                        </div>
                    </a> */}
                </div>
            </article>
        </section>
    )
}