export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterOrigin,
  location: CharacterLocation,
  image: string;
  episode: string[];
  url: string;
  created: string;
}

type CharacterOrigin = {
  name: string;
  url: string;
}

type CharacterLocation = {
  name: string;
  url: string;
}

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export type Pager = {
  current: number;
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}