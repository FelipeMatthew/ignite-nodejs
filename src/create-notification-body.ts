import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recepientId: string;

  @IsNotEmpty()
  @Length(5, 255) // min, max
  content: string;

  @IsNotEmpty()
  category: string;
}
