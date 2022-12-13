import { IsString, IsUUID, IsNotEmpty, Length } from 'class-validator';

export class CreateNotificationDTO {
  @IsUUID()
  @IsNotEmpty()
  recipientId: string;

  @Length(5, 250)
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}
