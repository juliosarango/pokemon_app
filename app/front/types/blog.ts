type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};

export type Pokemon = {
  name: string;
  sprite: string;
  num_abilities: number;
  main_abilitie: string;
  url: string;
  main_ability: string; 
  height: number;
  weight: number;
}
