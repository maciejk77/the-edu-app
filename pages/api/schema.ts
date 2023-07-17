import { buildSchemaSync } from 'type-graphql';

import {
  InstitutionResolver,
  SubjectResolver,
  SubmissionResolver,
} from './resolvers';

export const schema = buildSchemaSync({
  resolvers: [InstitutionResolver, SubjectResolver, SubmissionResolver],
  emitSchemaFile: process.env.NODE_ENV === 'development',
});
