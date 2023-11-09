import styles from './Home.module.css';
import olloLogo from './../assets/ollo.svg';
import olloStar from './../assets/olloStar.svg';
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
            <motion.img className={styles.olloLogo} src={olloStar} alt="Lema: Levantemos uns aos outros" title="Lema: Levantemos uns aos outros" whileInView={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }} />
            <article className={styles.content}>
                <div className={styles.textImg}>
                    <motion.img className={styles.afro} src={olloLogo} alt="Logo Moviafro" title="Logo Moviafro" whileInView={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    }} />
                    <div className={styles.titles}>
                        <h1>Oito anos da Moviafro em Prol da Cultura de Matriz Africana</h1>
                        <h5 className={styles.h5En}>Celebrando a Herança Negra, Nosso Compromisso e Atuação na Luta Antirracista em Feira de Santana.</h5>
                    </div>
                </div>
                <div className={styles.buttonsSection}>
                    <a href={"#history"}
                        className={styles.buttonBackground}>
                        Conheça nossa História
                    </a>

                    <a className={styles.buttonHasBorder} onClick={handlePlayer}>
                        {icon}
                        <div className={styles.buttonTextContainer}>
                            <p className={hasClicked ? styles.buttonText : ""}>{musicName}</p>
                        </div>
                    </a>
                </div>
            </article>
        </section>
    )
}