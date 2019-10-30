import {
  object, number, string, date,
} from 'yup';

export const CAMPAIGNS_SET = '@campaigns/SET';

export const campaignsSchema = object({
  id: number().required(),
  name: string().required(),
  startDate: date().required(),
  endDate: date().required(),
  budget: number().required(),
  userId: number().required(),
});
