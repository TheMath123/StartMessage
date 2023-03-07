type LinksObjectProps = {
  ddi: string;
  phoneNumber: string;
  message?: string;
};
interface ILinks {
  ddi?: string;
  phoneNumber?: string;
  message?: string;
  get: () => LinksProps | null;
  createLink: () => string;
  createApplicationLink: () => string;
}
