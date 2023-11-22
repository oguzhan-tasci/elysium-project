export class ServiceBox {
  id: number;
  title!: string;
  country!: string;
  city!: string;
  price!: number;
  discountPrice?: number;
  stars?: number;
  images!: string[];
  explanation!: string;
  youNeedToKnow!: string[];
  countryFlag : string;
  companyLogo : string;
  companyName : string;
  companiesId?: number;
}
