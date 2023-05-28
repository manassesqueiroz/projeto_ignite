import styles from "../components/Publication.module.css";
import { Trash } from "@phosphor-icons/react";
import { Like } from "./buttonLike";


export const Post = () => {
  return (
    <article>
      <div className={styles.Post}>
        <header>
          <div className={styles.Top}>
            <div className={styles.boxImg}>
              <img
                className={styles.avatar}
                src="https://media.licdn.com/dms/image/D4D03AQHpnionwaLggA/profile-displayphoto-shrink_200_200/0/1683217031085?e=1690416000&v=beta&t=EucyxCsC3o-MryYdrlOR33O-ACkepvjz8Wz2to33nrw"
                alt="imagem_usuario"
              />
              <div className={styles.usuario}>
                <strong>Manassés Queiroz</strong>
                <span>Dev Front-End</span>
              </div>
            </div>
            <time datatype="27/05/2023 23:00">Públiicado há 1h</time>
          </div>
          <div className={styles.commit}>
            <p>Fala galeraa 👋</p>
            <br />
            <p>
              Acabei de subir mais um projeto no meu portifa. É um projeto que
              fiz no NLW Return, evento da Rocketseat. O nome do projeto é
              DoctorCare 🚀
            </p>
            <div className={styles.links}>
              <a href="#">👉 jane.design/doctorcare</a>
              <a href="#">#novoprojeto #nlw #rocketseat</a>
            </div>
          </div>
        </header>

        <div className={styles.footer}>
          <span>Deixe seu feedback</span>
          <input
            rows={4}
            placeholder="Deixe sua opinião"
            className={styles.commented}
            cols={4}
          />
          <button>Publicar</button>
        </div>
      </div>

      <div className={styles.Post1}>
        <header>
          <div className={styles.Top}>
            <div className={styles.boxImg}>
              <img
                className={styles.avatar}
                src="https://github.com/devandres-tech.png"
                alt="imagem_usuario"
              />
              <div className={styles.usuario}>
                <strong>Tiago Veneza</strong>
                <span>Dev Full Stack</span>
              </div>
            </div>
            <time datatype="27/05/2023 23:00">Públiicado há 1h</time>
          </div>
          <div className={styles.commit}>
            <p>Fala galeraa 👋</p>
            <br />
            <p>
              Acabei de subir mais um projeto no meu portifa. É um projeto que
              fiz no NLW Return, evento da Rocketseat. O nome do projeto é
              DoctorCare 🚀
            </p>
            <div className={styles.links}>
              <a href="#">👉 jane.design/doctorcare</a>
              <a href="#">#novoprojeto #nlw #rocketseat</a>
            </div>
          </div>
        </header>

        <div className={styles.footer}>
          <span>Deixe seu feedback</span>
          <input
            placeholder="Deixe sua opinião|"
            className={styles.commented}
          />

          <div className={styles.interactions}>
            <div className={styles.boxResponse}>
              <img
                className={styles.avatar}
                src="https://media.licdn.com/dms/image/D4D03AQHpnionwaLggA/profile-displayphoto-shrink_200_200/0/1683217031085?e=1690416000&v=beta&t=EucyxCsC3o-MryYdrlOR33O-ACkepvjz8Wz2to33nrw"
                alt="imagem_usuario"
              />

              <div className={styles.conteiner}>
                <div className={styles.infoResponse}>
                  <div className={styles.userInfo}>
                    <div className={styles.userTime}>
                      <strong>Manassés Queiroz <i>&#40;você&#41;</i></strong>
                      <time>Cerca de 2h</time>
                    </div>
                    <a href="#">
                      <Trash size={24} />
                    </a>
                  </div>

                  <div className={styles.response}>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                  </div>
                </div>
              <div className={styles.like}>< Like /></div>   
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
