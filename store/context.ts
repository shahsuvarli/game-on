import { create } from "zustand";
import players from "../assets/data/players.json";
import { MIN_PLAYERS } from "@/constants/values";

export const useMafiaStore = create((set: any) => ({
  counter: MIN_PLAYERS,
  players,
  people: [],
  updateCounter: () =>
    set((state: any) => ({
      counter: state.counter - 1,
    })),
  resetCounter: () => set({ counter: 0 }),
  incrPlayer: (playerId: any) =>
    set((state: any) => ({
      players: state.players.map((player: any) =>
        player.id === playerId ? { ...player, count: player.count + 1 } : player
      ),
      counter: state.counter + 1,
    })),
  decrPlayer: (playerId: any) =>
    set((state: any) => ({
      players: state.players.map((p: any) =>
        p.id === playerId && p.minRequired < p.count && p.count > 0
          ? { ...p, count: p.count - 1 }
          : p
      ),
      counter: state.counter - 1,
    })),

  resetGame: () => set({ counter: MIN_PLAYERS, players }),
}));
