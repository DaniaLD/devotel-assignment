import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../../prisma/clients/prisma.client';

@Injectable()
export class PrismaService extends PrismaClient {}
