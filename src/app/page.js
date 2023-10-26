'use client'
import {useRouter} from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <div className="game-menu">
      <div className="menu-center">
        <button onClick={() => router.push("/game")}>Start Game</button>
        <button onClick={() => router.push("/leaderboard")}>Leaderboards</button>
      </div>
    </div>
  );
};

