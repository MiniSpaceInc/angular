export interface RequestTokenDto {
  requestToken: string;
  requestTokenSecret: string;
  redirectUrl: string;
  verifier: string;
}
