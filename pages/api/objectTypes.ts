import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class Institution {
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
export class Subject {
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
export class Submission {
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

  // @Field((_type) => [Subject])
  // subjects!: Subject[];
}
