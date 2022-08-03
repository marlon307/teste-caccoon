interface IIpunt {
  id: string;
  name: string;
  type: string;
  iValue: string;
  placeholder: string;
  changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
  autoComplete: string;
  errorActive: boolean;
}
