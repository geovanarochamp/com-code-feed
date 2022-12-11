import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";
import { Post } from "./components/Post/Post";
import { v4 as uuid } from "uuid";

import "./global.css";
import styles from "./App.module.css";

// author: { avatarURL: '', name:'', role:'' }
// publishAt: date

const user = {
  coverURL:
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50",
  avatarURL: "https://github.com/pedromarins.png",
  name: "Pedro Marins",
  role: "Mentor",
};

const posts = [
  {
    id: uuid(),
    author: {
      avatarURL: "https://github.com/pedromarins.png",
      name: "Pedro Marins",
      role: "Mentor",
    },
    content: [
      { type: "paragraph", content: "Faaaaaala!" },
      {
        type: "paragraph",
        content:
          "Amanhã às 9h temos um encontro marcado para mais um Live CoDe! 🚀",
      },
      {
        type: "paragraph",
        content:
          "Vamos continuar o projeto do Pomodoro. Esse vai ser o segundo Live CoDe no mesmo projeto. Se você não estava no primeiro evento ou não viu a gravação é muito legal assistir hoje para já chegar sabendo o que está acontecendo!",
      },
      {
        type: "paragraph",
        content:
          "👉 O link para a gravação do primeiro evento do Live CoDe sobre o Pomodoro está aqui:",
      },
      {
        type: "link",
        content:
          "https://<wbr />app.nutror.com<wbr />/v3/curso<wbr />/6bdfb50e6f2579177147aad1ac55a<wbr />a085eb54342/aula/5959050",
      },
    ],
    publishedAt: new Date("2022-12-10 20:00:04"),
  },
  {
    id: uuid(),
    author: {
      avatarURL: "https://github.com/henriquecrang.png",
      name: "Henrique de Andrade",
      role: "Mentor",
    },
    content: [
      { type: "paragraph", content: "Hoje é dia de entrega de projetos! 🚀" },
      {
        type: "paragraph",
        content: " O link para entregar o Projeto 03 é esse aqui! ",
      },
      {
        type: "link",
        content: "https://conquistesuavaga.com/entrega-projeto-3",
      },
    ],
    publishedAt: new Date("2022-12-09 14:17:04"),
  },
  {
    id: uuid(),
    author: {
      avatarURL: "https://github.com/geovanarochamp.png",
      name: "Geovana Rocha",
      role: "Desenvolvedora Front End",
    },
    content: [
      { type: "paragraph", content: "Fala, Turma" },
      {
        type: "paragraph",
        content:
          "Acabei de assistir ao episódio 6 do ReadMe, e recomendo fortemente!",
      },
      {
        type: "paragraph",
        content:
          "O nível crítico dos reviews dos outros episódios sempre foram muito bons, mas esse veio muito de encontro a história da minha jornada que sei que ainda vou compartilhar em um papo de dev quando conquistar minha primeira vaga haha.",
      },
      {
        type: "paragraph",
        content:
          "Encontra-se disponível lá no nutror, para quem se interessar.",
      },
    ],
    publishedAt: new Date("2022-12-09 10:23:04"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Profile data={user} />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
