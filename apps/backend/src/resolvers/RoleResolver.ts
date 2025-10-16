import { Resolver, FieldResolver, Root, Query, Ctx } from 'type-graphql'
import { Role } from './types/Role'
import { Permission } from './types/Permission'
import type { Context } from '@/utils/graphql'

@Resolver(() => Role)
export class RoleResolver {
  @Query(() => [Role])
  async findManyRoles(@Ctx() ctx: Context) {
    return ctx.roleService.findMany()
  }

  @FieldResolver(() => [Permission])
  async permissions(@Root() role: Role, @Ctx() ctx: Context) {
    const data = await ctx.roleService.findById(role.role_id)
    return data?.role_permissions.map((rp) => rp.permission) ?? []
  }
}
