import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Hernandez",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo Hernandez",
    isFollowing: false,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hernandez",
    isFollowing: false,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
