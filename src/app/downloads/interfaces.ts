import DownloadsService from "./downloads.service";
import DownloadsController from "./downloads.controller";
export type Download = {
  product: string;
  image: string;
  link: string;
  os_name: string;
};
export type DownloadsResponse = Download[];

export interface CreateDownload extends Download {
  language_id: string;
}

export interface DownloadsInjectionEntities {
  downloadsService: DownloadsService;
  downloadsController: DownloadsController;
}
