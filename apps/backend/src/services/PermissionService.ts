import { PrismaClient } from 'csci32-database'

export class PermissionService {
  constructor(private prisma: PrismaClient) {}

  findMany() {
    return this.prisma.permission.findMany()
  }
}
