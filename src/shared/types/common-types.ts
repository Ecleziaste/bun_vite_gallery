export type AnyEvent = MouseEvent | TouchEvent;

export type Picture = {
  id: string;
  name: string;
  profileId: string;
  isFavorite: boolean;
  favoriteCount?: number;
  isShareable: boolean;
};

export type Album = {
  id: string;
  name: string;
  profileId: string;
  isFavorite: boolean;
  favoriteCount?: number;
  isShareable: boolean;
  pictures: Picture[];
};
