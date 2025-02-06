import { ApiProperty } from '@nestjs/swagger';

export default class GlobalResponseDto {
  @ApiProperty()
  statusCode: number;
}
