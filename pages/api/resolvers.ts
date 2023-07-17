import { Resolver, Query, Ctx } from 'type-graphql';
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
  @Query((_returns) => [Institution], { nullable: true })
  async institutions(@Ctx() ctx: Context) {
    // for all institutions list
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
  @Query((_returns) => [Submission], { nullable: true })
  // for all submissions list
  async submissions(@Ctx() ctx: Context) {
    return await ctx.prisma.submission.findMany();
  }
}
