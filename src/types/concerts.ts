export type TConcert = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  image: TConcertImage;
  done: boolean;
  date: string;
  place: string;
};

export type TConcertImage = {
  url: string;
  height: number;
  width: number;
};
