import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';
import {events, fields, scope} from './tableData';

// ----------------------------------------------------------------------

const index = Math.floor(Math.random() * 8);
// const i = index%4;

const users = [...Array(10)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index),
  name: events[Math.floor(Math.random() * 7)],
  company: scope[Math.floor(Math.random() * 4)],
  field: fields[Math.floor(Math.random() * 7)],
  status: sample(['approved', 'rejected', 'pending']),
  role: sample([
    '1st',
    '2nd',
    '3rd',
    'Participant'
  ])
}));

export default users;
