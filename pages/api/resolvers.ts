import { Resolver, Query, Ctx, Arg } from 'type-graphql';
import type { Context } from './graphql';
import { Institution, Subject, Submission } from './objectTypes';

// @Resolver()
// class HelloTestResolver {
//   @Query((_returns) => String)
//   hello() {
//     return 'Hello Test!';
//   }
// }

@Resolver()
export class InstitutionResolver {
  @Query((_returns) => Institution, { nullable: true })
  // for specified institution by ID
  async institution(@Arg('id') id: string, @Ctx() ctx: Context) {
    return await ctx.prisma.institution.findUnique({ where: { id } });
  }

  @Query((_returns) => [Institution], { nullable: true })
  // for all institutions list
  async institutions(@Ctx() ctx: Context) {
    return await ctx.prisma.institution.findMany();
  }
}

@Resolver()
export class SubjectResolver {
  @Query((_returns) => [Subject], { nullable: true })
  // for all subjects -> to be filtered to unique on FE, for subject drop-down list on FE
  async subjects(@Ctx() ctx: Context) {
    return await ctx.prisma.subject.findMany();
  }
}

@Resolver()
export class SubmissionResolver {
  @Query((_returns) => Submission, { nullable: true })
  // for specified submission by id
  async submission(@Arg('name') id: string, @Ctx() ctx: Context) {
    return await ctx.prisma.submission.findUnique({ where: { id } });
  }

  @Query((_returns) => [Submission], { nullable: true })
  // for all submissions list
  async submissions(@Ctx() ctx: Context) {
    return await ctx.prisma.submission.findMany();
  }
}
