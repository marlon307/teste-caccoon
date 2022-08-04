interface IUser {
  username: string;
  image: UrlObject;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  id: number;
  token: string;
}

interface IErroLogin {
  status: number;
}
