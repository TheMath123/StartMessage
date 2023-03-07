interface LinksObjectProps {
  ddi: string;
  phoneNumber: string;
  message?: string;
}
interface ILinksProps {
  ddi: string;
  phoneNumber: string;
  message?: string;
  get: () => LinksProps | null;
  createLink: () => string;
  createApplicationLink: () => string;
}
