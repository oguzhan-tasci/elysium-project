export class ServiceBox {
  id: number;
  title!: string;
  country!: string;
  city!: string;
  price!: string;
  discountPrice?: number;
  stars?: string;
  images!: string[];
  aboutService!: string;
  threeSteps!: string[];
  youNeedToKnow!: string[];
  selectedDate?: Date;
}
