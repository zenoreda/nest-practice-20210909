import { Length } from 'class-validator';

export class UpdatePasswordDto {
  @Length(16)
  oldPassword: string;
  @Length(16)
  password: string;
  @Length(16)
  passwordConfirmation: string;
}
