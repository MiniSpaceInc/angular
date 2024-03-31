export interface RequestTokenDto {
  token: string;
  tokenSecret: string;
  redirectUrl: string;
  verifier: string;
}
