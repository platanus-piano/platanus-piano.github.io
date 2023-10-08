export type TEvent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  image: TEventsImage;
  description: string;
  month: number;
};

export type TEventsImage = {
  url: string;
  height: number;
  width: number;
};
