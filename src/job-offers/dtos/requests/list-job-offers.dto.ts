import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export default class ListJobOffersDto {
  @ApiProperty({ required: false })
  @IsOptional()
  readonly title?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  readonly location?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly salaryMin?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  readonly salaryMax?: number;

  @Type(() => Number)
  @ApiProperty({ required: false, default: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  readonly offset?: number;

  @Type(() => Number)
  @ApiProperty({ required: false, default: 10 })
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(50)
  readonly limit?: number;
}
