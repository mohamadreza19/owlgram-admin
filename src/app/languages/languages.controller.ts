import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import FilesApiService from '../files/files.api';
import {
  FormikCreateAboutOwlgramBasedLanguageId,
  FormikCreatelanguage,
} from './interfaces';
import LanguagesApiService from './languages.api';
import LanguagesService from './languages.service';
import { AlertService } from '../lib/services';
import { FormikCreate2 } from '../lib/shared/interfaces';

class LanguagesController {
  constructor(
    private languagesService: LanguagesService,
    private languagesApiService: LanguagesApiService,
    private filesApiService: FilesApiService,
    private alertService: AlertService,
    private router: AppRouterInstance
  ) {}
  handleFetchLanguages = async () => {
    const response = await this.languagesApiService.getLanguages();
    this.languagesService.setLanguages(response);
  };
  handleFetchAboutLanguageById = async (id: string) => {
    const result = await this.languagesApiService.getAboutOwlgramByLanguageId(
      id
    );

    this.languagesService.setAboutLanguage(result);
  };
  handleCreateLanguage = async (body: FormikCreatelanguage) => {
    if (body.file) {
      const fileResult = await this.filesApiService.PostFile(body.file);
      console.log(fileResult);
      await this.languagesApiService.CreateLanguage({
        title: body.title,
        flag: fileResult,
      });
      this.handleFetchLanguages();
      this.router.push('/languages');
      this.alertService.addDismissAlert({
        message: 'Language add successful',
        open: true,
        type: 'success',
      });
    }
  };
  handleCreateAboutOwlgramBasedLanguageId = async ({
    content,
    language_id,
    media,
  }: FormikCreateAboutOwlgramBasedLanguageId) => {
    const postFilepromises = media.map((file) =>
      this.filesApiService.PostFile(file)
    );
    console.log(postFilepromises);
    const responses = await Promise.all(postFilepromises);

    await this.languagesApiService.CreateAboutOwlgramBasedLanguageId({
      content,
      language_id,
      media: responses,
    });
    this.router.push('/languages');

    this.alertService.addDismissAlert({
      message: 'Content for aboutOwlegram based language add successful',
      open: true,
      type: 'success',
    });
  };
  handleCreateServiceBasedLanguageId = async ({
    content,
    language_id,
    media,
  }: FormikCreate2) => {
    if (media) {
      const stringFile = await this.filesApiService.PostFile(media);

      await this.languagesApiService.createServiceBasedLanguageId({
        content,
        language_id,
        media: stringFile,
      });
      this.router.push('/languages');

      this.alertService.addDismissAlert({
        message: 'Service based language add successful',
        open: true,
        type: 'success',
      });
    }
  };

  // Add controller methods here
}
export default LanguagesController;
