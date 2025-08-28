type LinksObjectProps = {
  ddi: string | number;
  phone: string;
  message?: string;
};

interface CreateLinkData {
  openApp?: boolean;
}

interface ILinks {
  ddi?: string | number;
  phone?: string;
  message?: string;
  get: () => LinksProps | null;
  createLink: (data?: CreateLinkData) => string;
}
