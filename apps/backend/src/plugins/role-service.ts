import fp from 'fastify-plugin'
import { RoleService } from '../services/RoleService'
import { PrismaClient } from 'csci32-database'

declare module 'fastify' {
  interface FastifyInstance {
    roleService: RoleService
  }
}

export const ROLE_SERVICE_FASTIFY_PLUGIN_NAME = 'roleService'

export default fp(async (fastify) => {
  const prisma = fastify.prisma as PrismaClient
  const roleService = new RoleService(prisma)

  fastify.decorate(ROLE_SERVICE_FASTIFY_PLUGIN_NAME, roleService)
})
