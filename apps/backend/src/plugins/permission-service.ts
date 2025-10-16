import fp from 'fastify-plugin'
import { PermissionService } from '../services/PermissionService'
import { PrismaClient } from 'csci32-database'

declare module 'fastify' {
  interface FastifyInstance {
    permissionService: PermissionService
  }
}

export const PERMISSION_SERVICE_FASTIFY_PLUGIN_NAME = 'permissionService'
export default fp(async (fastify) => {
  const prisma = fastify.prisma as PrismaClient
  const permissionService = new PermissionService(prisma)

  fastify.decorate(PERMISSION_SERVICE_FASTIFY_PLUGIN_NAME, permissionService)
})
