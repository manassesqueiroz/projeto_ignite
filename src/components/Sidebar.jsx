import Sidebarcss from "../components/Sidebar.module.css";
import { PencilLine } from "@phosphor-icons/react";

export const Sidebar = () => {
  return (
    <div className={Sidebarcss.sidebar}>
      <img
        className={Sidebarcss.cover}
        src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=500&h=200&dpr=1"
        alt="imagem_tema"
      />
      <main>
        <img
          className={Sidebarcss.avatar}
          src="https://media.licdn.com/dms/image/D4D03AQHpnionwaLggA/profile-displayphoto-shrink_200_200/0/1683217031085?e=1690416000&v=beta&t=EucyxCsC3o-MryYdrlOR33O-ACkepvjz8Wz2to33nrw"
          alt="imagem_usuario"
        />
        <strong>Manassés Queiroz</strong>
        <span>Developer</span>
      </main>
      <footer>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </div>
  );
};
