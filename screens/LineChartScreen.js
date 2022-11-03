import React from 'react';
import * as CustomCode from '../CustomCode.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import { ScreenContainer } from '@draftbit/ui';

const LineChartScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const getRandomHexColor = () => {
    while (1) {
      const colorCode = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      if ([7, 4].includes(colorCode.length)) return colorCode;
    }
  };

  const cleanUpData = () => {
    let graphs = {};
    const tickValues = [];
    const colors = {};

    const syms = [
      {
        id: 255,
        user_id: 142,
        date_entry: '2022-06-01',
        symptoms_ecog: [],
      },
      {
        id: 254,
        user_id: 142,
        date_entry: '2022-06-02',
        symptoms_ecog: [],
      },
      {
        id: 253,
        user_id: 142,
        date_entry: '2022-06-03',
        symptoms_ecog: [],
      },
      {
        id: 252,
        user_id: 142,
        date_entry: '2022-06-06',
        symptoms_ecog: [],
      },
      {
        id: 251,
        user_id: 142,
        date_entry: '2022-06-07',
        symptoms_ecog: [],
      },
      {
        id: 250,
        user_id: 142,
        date_entry: '2022-06-17',
        symptoms_ecog: [],
      },
      {
        id: 249,
        user_id: 142,
        date_entry: '2022-06-21',
        symptoms_ecog: [],
      },
      {
        id: 266,
        user_id: 142,
        date_entry: '2022-06-22',
        symptoms_ecog: [
          {
            symptoms_id: 139,
            ecog: 5,
            symptoms_name: {
              symptom: 'Insomnia',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 280,
        user_id: 142,
        date_entry: '2022-06-27',
        symptoms_ecog: [
          {
            symptoms_id: 0,
            ecog: 0,
          },
          {
            symptoms_id: 0,
            ecog: 0,
          },
          {
            symptoms_id: 0,
            ecog: 0,
          },
          {
            symptoms_id: 0,
            ecog: 0,
          },
          {
            symptoms_id: 0,
            ecog: 0,
          },
        ],
      },
      {
        id: 282,
        user_id: 142,
        date_entry: '2022-06-28',
        symptoms_ecog: [
          {
            symptoms_id: 0,
            ecog: 6,
          },
          {
            symptoms_id: 0,
            ecog: 0,
          },
          {
            symptoms_id: 0,
            ecog: 0,
          },
          {
            symptoms_id: 0,
            ecog: 0,
          },
          {
            symptoms_id: 0,
            ecog: 0,
          },
        ],
      },
      {
        id: 284,
        user_id: 142,
        date_entry: '2022-06-30',
        symptoms_ecog: [],
      },
      {
        id: 288,
        user_id: 142,
        date_entry: '2022-06-30',
        symptoms_ecog: [],
      },
      {
        id: 291,
        user_id: 142,
        date_entry: '2022-07-02',
        symptoms_ecog: [],
      },
      {
        id: 293,
        user_id: 142,
        date_entry: '2022-07-03',
        symptoms_ecog: [],
      },
      {
        id: 295,
        user_id: 142,
        date_entry: '2022-07-04',
        symptoms_ecog: [
          {
            symptoms_id: 146,
            ecog: 6,
            symptoms_name: {
              symptom: 'Anemia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 137,
            ecog: 6,
            symptoms_name: {
              symptom: 'Fatigue',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 4,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 142,
            ecog: 8,
            symptoms_name: {
              symptom: 'Frequent Peeing',
              medical_term: '',
            },
          },
          {
            symptoms_id: 143,
            ecog: 8,
            symptoms_name: {
              symptom: 'Difficulty Focusing',
              medical_term: 'Chemo Brain / difficulty remembering',
            },
          },
        ],
      },
      {
        id: 297,
        user_id: 142,
        date_entry: '2022-07-05',
        symptoms_ecog: [
          {
            symptoms_id: 137,
            ecog: 6,
            symptoms_name: {
              symptom: 'Fatigue',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 4,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 139,
            ecog: 0,
            symptoms_name: {
              symptom: 'Insomnia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 162,
            ecog: 0,
            symptoms_name: {
              symptom: 'Headaches',
              medical_term: '',
            },
          },
          {
            symptoms_id: 163,
            ecog: 0,
            symptoms_name: {
              symptom: 'Indigestion',
              medical_term: '',
            },
          },
          {
            symptoms_id: 164,
            ecog: 4,
            symptoms_name: {
              symptom: 'Fever',
              medical_term: '',
            },
          },
          {
            symptoms_id: 159,
            ecog: 7,
            symptoms_name: {
              symptom: 'Loss of Balance',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 301,
        user_id: 142,
        date_entry: '2022-07-06',
        symptoms_ecog: [
          {
            symptoms_id: 137,
            ecog: 5,
            symptoms_name: {
              symptom: 'Fatigue',
              medical_term: '',
            },
          },
          {
            symptoms_id: 139,
            ecog: 6,
            symptoms_name: {
              symptom: 'Insomnia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 149,
            ecog: 4,
            symptoms_name: {
              symptom: 'Dehydration',
              medical_term: '',
            },
          },
          {
            symptoms_id: 146,
            ecog: 2,
            symptoms_name: {
              symptom: 'Anemia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 176,
            ecog: 7,
            symptoms_name: {
              symptom: 'Sweating',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 300,
        user_id: 142,
        date_entry: '2022-07-07',
        symptoms_ecog: [
          {
            symptoms_id: 137,
            ecog: 6,
            symptoms_name: {
              symptom: 'Fatigue',
              medical_term: '',
            },
          },
          {
            symptoms_id: 139,
            ecog: 2,
            symptoms_name: {
              symptom: 'Insomnia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 149,
            ecog: 0,
            symptoms_name: {
              symptom: 'Dehydration',
              medical_term: '',
            },
          },
          {
            symptoms_id: 146,
            ecog: 8,
            symptoms_name: {
              symptom: 'Anemia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 176,
            ecog: 3,
            symptoms_name: {
              symptom: 'Sweating',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 305,
        user_id: 142,
        date_entry: '2022-07-08',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 3,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 137,
            ecog: 8,
            symptoms_name: {
              symptom: 'Fatigue',
              medical_term: '',
            },
          },
          {
            symptoms_id: 139,
            ecog: 5,
            symptoms_name: {
              symptom: 'Insomnia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 7,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 142,
            ecog: 0,
            symptoms_name: {
              symptom: 'Frequent Peeing',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 0,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 145,
            ecog: 0,
            symptoms_name: {
              symptom: 'Agitation',
              medical_term: '',
            },
          },
          {
            symptoms_id: 176,
            ecog: 0,
            symptoms_name: {
              symptom: 'Sweating',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 307,
        user_id: 142,
        date_entry: '2022-07-09',
        symptoms_ecog: [],
      },
      {
        id: 308,
        user_id: 142,
        date_entry: '2022-07-10',
        symptoms_ecog: [],
      },
      {
        id: 309,
        user_id: 142,
        date_entry: '2022-07-11',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 2,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 137,
            ecog: 8,
            symptoms_name: {
              symptom: 'Fatigue',
              medical_term: '',
            },
          },
          {
            symptoms_id: 139,
            ecog: 0,
            symptoms_name: {
              symptom: 'Insomnia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 7,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 142,
            ecog: 2,
            symptoms_name: {
              symptom: 'Frequent Peeing',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 0,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 145,
            ecog: 0,
            symptoms_name: {
              symptom: 'Agitation',
              medical_term: '',
            },
          },
          {
            symptoms_id: 176,
            ecog: 7,
            symptoms_name: {
              symptom: 'Sweating',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 310,
        user_id: 142,
        date_entry: '2022-07-12',
        symptoms_ecog: [
          {
            symptoms_id: 137,
            ecog: 3,
            symptoms_name: {
              symptom: 'Fatigue',
              medical_term: '',
            },
          },
          {
            symptoms_id: 139,
            ecog: 6,
            symptoms_name: {
              symptom: 'Insomnia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 176,
            ecog: 7,
            symptoms_name: {
              symptom: 'Sweating',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 312,
        user_id: 142,
        date_entry: '2022-07-13',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 6,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 137,
            ecog: 3,
            symptoms_name: {
              symptom: 'Fatigue',
              medical_term: '',
            },
          },
          {
            symptoms_id: 139,
            ecog: 7,
            symptoms_name: {
              symptom: 'Insomnia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 3,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 142,
            ecog: 8,
            symptoms_name: {
              symptom: 'Frequent Peeing',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 6,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 145,
            ecog: 2,
            symptoms_name: {
              symptom: 'Agitation',
              medical_term: '',
            },
          },
          {
            symptoms_id: 176,
            ecog: 8,
            symptoms_name: {
              symptom: 'Sweating',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 314,
        user_id: 142,
        date_entry: '2022-07-14',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 5,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 137,
            ecog: 7,
            symptoms_name: {
              symptom: 'Fatigue',
              medical_term: '',
            },
          },
          {
            symptoms_id: 139,
            ecog: 7,
            symptoms_name: {
              symptom: 'Insomnia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 176,
            ecog: 6,
            symptoms_name: {
              symptom: 'Sweating',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 0,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 142,
            ecog: 0,
            symptoms_name: {
              symptom: 'Frequent Peeing',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 0,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 145,
            ecog: 0,
            symptoms_name: {
              symptom: 'Agitation',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 316,
        user_id: 142,
        date_entry: '2022-07-15',
        symptoms_ecog: [
          {
            symptoms_id: 139,
            ecog: 5,
            symptoms_name: {
              symptom: 'Insomnia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 2,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 142,
            ecog: 7,
            symptoms_name: {
              symptom: 'Frequent Peeing',
              medical_term: '',
            },
          },
          {
            symptoms_id: 176,
            ecog: 3,
            symptoms_name: {
              symptom: 'Sweating',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 320,
        user_id: 142,
        date_entry: '2022-07-16',
        symptoms_ecog: [],
      },
      {
        id: 323,
        user_id: 142,
        date_entry: '2022-07-18',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 8,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 4,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 0,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 324,
        user_id: 142,
        date_entry: '2022-07-19',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 6,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 0,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 2,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 6,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 140,
            ecog: 0,
            symptoms_name: {
              symptom: 'Numbness or Tingling in Extremities',
              medical_term: 'Neuropathy',
            },
          },
        ],
      },
      {
        id: 326,
        user_id: 142,
        date_entry: '2022-07-20',
        symptoms_ecog: [],
      },
      {
        id: 341,
        user_id: 142,
        date_entry: '2022-07-22',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 4,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 0,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 0,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 0,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 140,
            ecog: 0,
            symptoms_name: {
              symptom: 'Numbness or Tingling in Extremities',
              medical_term: 'Neuropathy',
            },
          },
        ],
      },
      {
        id: 346,
        user_id: 142,
        date_entry: '2022-07-23',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 3,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 6,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 5,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 2,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 140,
            ecog: 0,
            symptoms_name: {
              symptom: 'Numbness or Tingling in Extremities',
              medical_term: 'Neuropathy',
            },
          },
        ],
      },
      {
        id: 351,
        user_id: 142,
        date_entry: '2022-07-26',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 8,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 7,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 2,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 1,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 140,
            ecog: 4,
            symptoms_name: {
              symptom: 'Numbness or Tingling in Extremities',
              medical_term: 'Neuropathy',
            },
          },
        ],
      },
      {
        id: 352,
        user_id: 142,
        date_entry: '2022-07-27',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 5,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 0,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 5,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 0,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 140,
            ecog: 5,
            symptoms_name: {
              symptom: 'Numbness or Tingling in Extremities',
              medical_term: 'Neuropathy',
            },
          },
        ],
      },
      {
        id: 353,
        user_id: 142,
        date_entry: '2022-07-28',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 6,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 5,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 1,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 7,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 140,
            ecog: 7,
            symptoms_name: {
              symptom: 'Numbness or Tingling in Extremities',
              medical_term: 'Neuropathy',
            },
          },
        ],
      },
      {
        id: 355,
        user_id: 142,
        date_entry: '2022-07-29',
        symptoms_ecog: [],
      },
      {
        id: 311,
        user_id: 142,
        date_entry: '2022-07-30',
        symptoms_ecog: [],
      },
      {
        id: 356,
        user_id: 142,
        date_entry: '2022-07-31',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 5,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 2,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 8,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 2,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 140,
            ecog: 6,
            symptoms_name: {
              symptom: 'Numbness or Tingling in Extremities',
              medical_term: 'Neuropathy',
            },
          },
        ],
      },
      {
        id: 358,
        user_id: 142,
        date_entry: '2022-08-01',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 4,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 2,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 7,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 3,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 140,
            ecog: 7,
            symptoms_name: {
              symptom: 'Numbness or Tingling in Extremities',
              medical_term: 'Neuropathy',
            },
          },
        ],
      },
      {
        id: 359,
        user_id: 142,
        date_entry: '2022-08-02',
        symptoms_ecog: [
          {
            symptoms_id: 174,
            ecog: 6,
            symptoms_name: {
              symptom: 'Shortness of breath',
              medical_term: '',
            },
          },
          {
            symptoms_id: 179,
            ecog: 6,
            symptoms_name: {
              symptom: 'Vomiting',
              medical_term: 'Emesis',
            },
          },
          {
            symptoms_id: 176,
            ecog: 1,
            symptoms_name: {
              symptom: 'Sweating',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 375,
        user_id: 142,
        date_entry: '2022-08-03',
        symptoms_ecog: [],
      },
      {
        id: 376,
        user_id: 142,
        date_entry: '2022-08-04',
        symptoms_ecog: [],
      },
      {
        id: 374,
        user_id: 142,
        date_entry: '2022-08-05',
        symptoms_ecog: [],
      },
      {
        id: 361,
        user_id: 142,
        date_entry: '2022-08-09',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 0,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 0,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 0,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 0,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 140,
            ecog: 0,
            symptoms_name: {
              symptom: 'Numbness or Tingling in Extremities',
              medical_term: 'Neuropathy',
            },
          },
        ],
      },
      {
        id: 363,
        user_id: 142,
        date_entry: '2022-08-11',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 0,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 0,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 0,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 0,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 140,
            ecog: 0,
            symptoms_name: {
              symptom: 'Numbness or Tingling in Extremities',
              medical_term: 'Neuropathy',
            },
          },
        ],
      },
      {
        id: 364,
        user_id: 142,
        date_entry: '2022-08-12',
        symptoms_ecog: [
          {
            symptoms_id: 175,
            ecog: 0,
            symptoms_name: {
              symptom: 'Sore Mouth / Throat',
              medical_term: '',
            },
          },
          {
            symptoms_id: 138,
            ecog: 0,
            symptoms_name: {
              symptom: 'Nausea',
              medical_term: '',
            },
          },
          {
            symptoms_id: 144,
            ecog: 0,
            symptoms_name: {
              symptom: 'Bone Pain',
              medical_term: '',
            },
          },
          {
            symptoms_id: 141,
            ecog: 0,
            symptoms_name: {
              symptom: 'Mouth Sores',
              medical_term: 'Mouth Ulcers',
            },
          },
          {
            symptoms_id: 140,
            ecog: 0,
            symptoms_name: {
              symptom: 'Numbness or Tingling in Extremities',
              medical_term: 'Neuropathy',
            },
          },
        ],
      },
      {
        id: 369,
        user_id: 142,
        date_entry: '2022-08-14',
        symptoms_ecog: [],
      },
      {
        id: 368,
        user_id: 142,
        date_entry: '2022-08-16',
        symptoms_ecog: [],
      },
      {
        id: 367,
        user_id: 142,
        date_entry: '2022-08-17',
        symptoms_ecog: [
          {
            symptoms_id: 162,
            ecog: 6,
            symptoms_name: {
              symptom: 'Headaches',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 370,
        user_id: 142,
        date_entry: '2022-08-19',
        symptoms_ecog: [],
      },
      {
        id: 256,
        user_id: 142,
        date_entry: '2022-08-21',
        symptoms_ecog: [],
      },
      {
        id: 372,
        user_id: 142,
        date_entry: '2022-08-22',
        symptoms_ecog: [
          {
            symptoms_id: 162,
            ecog: 5,
            symptoms_name: {
              symptom: 'Headaches',
              medical_term: '',
            },
          },
          {
            symptoms_id: 137,
            ecog: 2,
            symptoms_name: {
              symptom: 'Fatigue',
              medical_term: '',
            },
          },
          {
            symptoms_id: 139,
            ecog: 8,
            symptoms_name: {
              symptom: 'Insomnia',
              medical_term: '',
            },
          },
          {
            symptoms_id: 142,
            ecog: 2,
            symptoms_name: {
              symptom: 'Frequent Peeing',
              medical_term: '',
            },
          },
        ],
      },
      {
        id: 377,
        user_id: 142,
        date_entry: '2022-08-23',
        symptoms_ecog: [],
      },
    ];

    syms.map(({ date_entry, symptoms_ecog }) => {
      // graphs[date_entry] = "test"
      const formattedDate = date_entry.split('-').slice(1, 3).join('/');
      // const formattedDate = date_entry

      symptoms_ecog
        .filter(({ symptoms_name }) => symptoms_name)
        .map(({ symptoms_id, ecog, symptoms_name: { symptom } }) => {
          // console.log(symptoms_id, ecog)
          const lowRange = new Date('2022-07-20').getTime();
          const highRange = new Date('2022-07-31').getTime();

          const x = new Date(date_entry).getTime();

          if (ecog > 0 && x >= lowRange && x <= highRange) {
            let newData = { x: formattedDate, y: ecog, time: x };
            // if (!tickValues.includes(x)) tickValues.push(x);
            const key = `${symptoms_id}`;
            if (graphs[key]) {
              // console.log(graphs, key);
              let data = graphs[key].data;
              // console.log("old data", data);
              data.push(newData);
              // console.log("new data", data);
              data.sort(
                ({ tickLable2 }, { tickLable1 }) =>
                  new Date(tickLable1).getTime() -
                  new Date(tickLable2).getTime()
              );
              // console.log("sorted", data);
              graphs[key]['data'] = data;
            } else {
              // console.log("setting new key", symptoms_id, newData);
              let color;
              while (1) {
                color = getRandomHexColor();
                if (!colors[color]) break;
              }
              graphs[key] = { data: [newData], color };
              colors[color] = symptom;
              // graphs.set(`${symptoms_id}`, [newData])
            }
          }
        });
    });

    const miniatureGraph = Object.entries(graphs)
      .filter(([_, { data }]) => data.length > 2)
      .sort(([_, { data: data1 }], [__, { data: data2 }]) => {
        return data1[0].time - data2[0].time;
      });

    return [
      miniatureGraph,
      Object.entries(colors).map(([fill, name]) => ({
        name,
        symbol: { fill },
      })),
    ];
  };

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* Line chart */}
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.LineChart cleanUpData={cleanUpData} />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default LineChartScreen;
