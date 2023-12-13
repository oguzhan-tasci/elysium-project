export class ServiceDetails {
  id: number;
  title!: string;
  country!: string;
  city!: string;
  price!: number;
  discountPrice: number;
  stars: number;
  images!: string[];
  aboutService!: string;
  additionalServices: string[];
  youNeedToKnow!: string[];
  companies: Object;
}
