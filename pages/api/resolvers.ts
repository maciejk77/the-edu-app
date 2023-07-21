import { Resolver, Query, Ctx, Arg } from 'type-graphql';
import type { Context } from './graphql';
import { Institution, Subject, Submission } from './objectTypes';

@Resolver()
export class InstitutionResolver {
  @Query((_returns) => [Submission], { nullable: true })
  // for all submissions per institution
  async institutionAllSubmissions(
    @Arg('institutionId') institutionId: string,
    @Ctx() ctx: Context
  ) {
    return await ctx.prisma.submission.findMany({
      where: { institution_id: institutionId },
    });
  }

  // other institution
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
  async subjectsForSubmission(
    @Arg('submissionId') submissionId: string,
    @Ctx() ctx: Context
  ) {
    return await ctx.prisma.subject.findMany({
      where: {
        submissionId,
      },
    });
  }

  // other queries
  @Query((_returns) => [Subject], { nullable: true })
  // for all subjects -> to be filtered to unique on FE, for subject drop-down list on FE
  async subjects(@Ctx() ctx: Context) {
    return await ctx.prisma.subject.findMany();
  }
}

@Resolver()
export class SubmissionResolver {
  // An extra not needed
  @Query((_returns) => [Subject], { nullable: true })
  // for all subjects per submission
  async submissionAllSubjects(
    @Arg('submissionId') submissionId: string,
    @Ctx() ctx: Context
  ) {
    return ctx.prisma.subject.findMany({
      where: { submissionId }, // where: { submission_id: submissionId },
    });
  }

  // other queries
  @Query((_returns) => Submission, { nullable: true })
  // for specified submission by id
  async submission(@Arg('id') id: string, @Ctx() ctx: Context) {
    return await ctx.prisma.submission.findUnique({ where: { id } });
  }
  @Query((_returns) => [Submission], { nullable: true })
  // for all submissions list
  async submissions(@Ctx() ctx: Context) {
    return await ctx.prisma.submission.findMany();
  }
}
