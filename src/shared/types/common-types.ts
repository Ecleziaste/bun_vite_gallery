export type AnyEvent = MouseEvent | TouchEvent;

export type Picture = {
  id: string;
  name: string;
  userId: string;
  isFavorite: boolean;
  favoriteCount?: number;
  isShareable: boolean;
};

export type Album = {
  id: string;
  name: string;
  userId: string;
  isFavorite: boolean;
  favoriteCount?: number;
  isShareable: boolean;
  pictures: Picture[];
};

export type User = {
  id?: string;
  name?: string;
  email?: string;
  avatarUrl?: string;
};
