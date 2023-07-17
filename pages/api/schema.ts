import {
  buildSchemaSync,
  Resolver,
  Query,
  ObjectType,
  Field,
  Ctx,
  Int,
} from 'type-graphql';
import type { Context } from './graphql';

@ObjectType()
class Institution {
  @Field((_type) => String)
  id!: string;

  @Field((_type) => String)
  name!: string;

  @Field((_type) => String)
  address!: string;

  @Field((_type) => String)
  country!: string;

  @Field((_type) => String)
  region!: string;
}

@ObjectType()
class Subject {
  @Field((_type) => String)
  id!: string;

  @Field((_type) => String)
  name!: string;

  @Field((_type) => Int)
  academic_papers!: number;

  @Field((_type) => Int)
  students_total!: number;

  @Field((_type) => Int)
  student_rating!: number;

  @Field((_type) => String)
  submissionId!: string;
}

@ObjectType()
class Submission {
  @Field((_type) => String)
  id!: string;

  @Field((_type) => String)
  institution_id!: string;

  @Field((_type) => Int)
  year!: number;

  @Field((_type) => Int)
  students_total!: number;

  @Field((_type) => Int)
  undergraduates_total!: number;

  @Field((_type) => Int)
  postgraduates_total!: number;

  @Field((_type) => Int)
  staff_total!: number;

  @Field((_type) => Int)
  academic_papers!: number;

  @Field((_type) => Int)
  institution_income!: number;
}

// @Resolver()
// class HelloTestResolver {
//   @Query((_returns) => String)
//   hello() {
//     return 'Hello Test!';
//   }
// }

@Resolver()
class InstitutionResolver {
  @Query((_returns) => [Institution], { nullable: true })
  async institutions(@Ctx() ctx: Context) {
    // for all institutions list
    return await ctx.prisma.institution.findMany();
  }
}

@Resolver()
class SubjectResolver {
  @Query((_returns) => [Subject], { nullable: true })
  // for all subjects -> to be filtered to unique on FE, for subject drop-down list on FE
  async subjects(@Ctx() ctx: Context) {
    return await ctx.prisma.subject.findMany();
  }
}

@Resolver()
class SubmissionResolver {
  @Query((_returns) => [Submission], { nullable: true })
  // for all submissions list
  async submissions(@Ctx() ctx: Context) {
    return await ctx.prisma.submission.findMany();
  }
}

export const schema = buildSchemaSync({
  resolvers: [
    // HelloTestResolver,
    InstitutionResolver,
    SubjectResolver,
    SubmissionResolver,
  ],
  emitSchemaFile: process.env.NODE_ENV === 'development',
});
