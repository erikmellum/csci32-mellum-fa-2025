import { PrismaClient } from 'csci32-database'

export class RoleService {
  constructor(private prisma: PrismaClient) {}

  findById(role_id: string) {
    return this.prisma.role.findUnique({
      where: { role_id },
      include: { role_permissions: { include: { permission: true } } },
    })
  }

  findMany() {
    return this.prisma.role.findMany({
      include: { role_permissions: { include: { permission: true } } },
    })
  }
}
