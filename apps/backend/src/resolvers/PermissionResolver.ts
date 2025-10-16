import { Resolver, Query, Ctx } from 'type-graphql'
import { Permission } from './types/Permission'
import type { Context } from '@/utils/graphql'

@Resolver(() => Permission)
export class PermissionResolver {
  @Query(() => [Permission])
  async findManyPermissions(@Ctx() ctx: Context) {
    return ctx.permissionService.findMany()
  }
}
