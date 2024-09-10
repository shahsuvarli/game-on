import { create } from "zustand";
import players from "../assets/data/players.json";

export const useMafiaStore = create((set: any) => ({
  count: 3,
  counter: 0,
  people: [],
  updateCounter: () =>
    set((state: any) => ({
      counter: state.counter + 1,
    })),
  resetCounter: () => set({ counter: 0 }),
  updateCount: (value: string) =>
    set((state: any) => ({
      count: parseInt(value) > 2 ? parseInt(value) : 0,
    })),
  players,
  incrPlayer: (playerId: any) =>
    set((state: any) => ({
      players: state.players.map((player: any) =>
        player.id === playerId &&
        state.players.reduce((acc: any, player: any) => acc + player.count, 0) <
          state.count
          ? { ...player, count: player.count + 1 }
          : player
      ),
    })),
  decrPlayer: (playerId: any) =>
    set((state: any) => ({
      players: state.players.map((p: any) =>
        p.id === playerId && p.minRequired < p.count && p.count > 0
          ? { ...p, count: p.count - 1 }
          : p
      ),
    })),
  updatePlayers: (playerId: number) =>
    set((state: any) => ({
      players: state.players.map((player: any) =>
        player.id === playerId ? { ...player, selected: true } : player
      ),
    })),
  resetPlayers: () => set({ players }),
  removePlayer: (playerId: number) =>
    set((state: any) => ({
      players: state.players.map((player: any) =>
        player.id === playerId ? { ...player, selected: false } : player
      ),
    })),
}));
