import type { ActionFunctionArgs } from 'react-router';

import { languageAction } from '~/.server/controllers/language.controller';
import { control } from '~/.server/lib/utils';

export const action = async (args: ActionFunctionArgs) => {
  return control(languageAction, args);
};
