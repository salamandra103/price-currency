export class FiatMapGetDto {
  start: number = 1;
  limit: number;
  sort: string = 'id';
  include_metals: boolean = false;
}
