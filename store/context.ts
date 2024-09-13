import { create } from "zustand";
import { characters } from "../assets/data/characters";
import { MIN_PLAYERS } from "@/constants/values";
import uuid from "react-native-uuid";

export const useMafiaStore = create((set: any) => ({
  counter: MIN_PLAYERS,
  characters,
  selectedCard: {},
  people: [],
  generatePeople: () =>
    set((state: any) => ({
      people: state.characters.flatMap((character: any) =>
        Array.from({ length: character.count }, () => ({
          id: uuid.v4(),
          name: "",
          characterId: character.id,
          role: character.role,
          image: character.image,
          assigned: false,
          open: false,
        }))
      ),
    })),
  randomCard: () =>
    set((state: any) => {
      const unselectedCards = state.people.filter(
        (person: any) => !person.assigned
      );
      const randomIndex = Math.floor(Math.random() * unselectedCards.length);
      const randomCard = unselectedCards[randomIndex];
      // console.log(randomCard);
      return {
        selectedCard: randomCard,
        people: state.people.map((person: any) =>
          person.id === randomCard.id ? { ...person, assigned: true } : person
        ),
        counter: state.counter - 1,
      };
    }),
  assignName: (cardId: any, name: string) =>
    set((state: any) => ({
      people: state.people.map((person: any) =>
        person.id === cardId ? { ...person, name } : person
      ),
    })),
  openCard: (cardId: any) =>
    set((state: any) => ({
      people: state.people.map((person: any) =>
        person.id === cardId ? { ...person, open: true } : person
      ),
    })),
  updateCounter: () =>
    set((state: any) => ({
      counter: state.counter - 1,
    })),
  resetCounter: () => set({ counter: 0 }),
  incrPlayer: (playerId: any) =>
    set((state: any) => ({
      characters: state.characters.map((player: any) =>
        player.id === playerId ? { ...player, count: player.count + 1 } : player
      ),
      counter: state.counter + 1,
    })),
  decrPlayer: (playerId: any) =>
    set((state: any) => ({
      characters: state.characters.map((p: any) =>
        p.id === playerId && p.minRequired < p.count && p.count > 0
          ? { ...p, count: p.count - 1 }
          : p
      ),
      counter: state.counter - 1,
    })),

  resetGame: () => set({ counter: MIN_PLAYERS, characters }),
}));
