import FilesService from "./files.service";
import FilesController from "./files.controller";
export type PostFileResponse = [
  {
    res: 1;
    id: 1717152400279;
    type: "gif";
  }
];

export interface FilesInjectionEntities {
  filesService: FilesService;
  filesController: FilesController;
}
