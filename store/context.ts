import { MIN_PLAYERS } from "@/constants/values";
import { characters as initialCharacters } from "../assets/data/characters";
import { create } from "zustand";
import uuid from "react-native-uuid";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Character {
  id: number;
  role: string;
  count: number;
  minRequired: number;
  maxRequired: number;
  name: string;
  image: any;
  description: string;
  win: string;
  lose: string;
  color: string;
  selected: boolean;
  members: any[];
}

interface Person {
  id: string;
  name: string;
  characterId: number;
  role: string;
  image: any;
  assigned: boolean;
  open: boolean;
  description: string;
  win: string;
  lose: string;
  color: string;
}

interface MafiaStore {
  counter: number;
  characters: Character[];
  selectedCard: Partial<Person>;
  people: Person[];
  generatePeople: () => void;
  randomCard: () => void;
  assignName: (cardId: string, name: string) => void;
  openCard: (cardId: string) => void;
  incrPlayer: (playerId: number) => void;
  decrPlayer: (playerId: number) => void;
  resetGame: () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function buildPeople(characters: Character[]): Person[] {
  const people = characters.flatMap((character) =>
    Array.from({ length: character.count }, () => ({
      id: uuid.v4() as string,
      name: "",
      characterId: character.id,
      role: character.role,
      image: character.image,
      assigned: false,
      open: false,
      description: character.description,
      win: character.win,
      lose: character.lose,
      color: character.color,
    })),
  );
  return shuffleArray(people);
}

// ─── Store ────────────────────────────────────────────────────────────────────

export const useMafiaStore = create<MafiaStore>((set) => ({
  counter: MIN_PLAYERS,
  characters: initialCharacters,
  selectedCard: {},
  people: [],

  generatePeople: () =>
    set((state) => ({
      people: buildPeople(state.characters),
    })),

  randomCard: () =>
    set((state) => {
      const unassigned = state.people.filter((p) => !p.assigned);
      const randomCard =
        unassigned[Math.floor(Math.random() * unassigned.length)];
      return {
        selectedCard: randomCard,
        counter: state.counter - 1,
        people: state.people.map((p) =>
          p.id === randomCard.id ? { ...p, assigned: true } : p,
        ),
      };
    }),

  assignName: (cardId, name) =>
    set((state) => ({
      people: state.people.map((p) => (p.id === cardId ? { ...p, name } : p)),
    })),

  openCard: (cardId) =>
    set((state) => ({
      people: state.people.map((p) =>
        p.id === cardId ? { ...p, open: true } : p,
      ),
    })),

  incrPlayer: (playerId) =>
    set((state) => ({
      counter: state.counter + 1,
      characters: state.characters.map((c) =>
        c.id === playerId ? { ...c, count: c.count + 1 } : c,
      ),
    })),

  decrPlayer: (playerId) =>
    set((state) => ({
      counter: state.counter - 1,
      characters: state.characters.map((c) =>
        c.id === playerId && c.count > c.minRequired
          ? { ...c, count: c.count - 1 }
          : c,
      ),
    })),

  resetGame: () =>
    set({
      counter: MIN_PLAYERS,
      characters: initialCharacters,
      selectedCard: {},
      people: [],
    }),
}));
