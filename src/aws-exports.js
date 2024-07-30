// src/aws-exports.js (or src/aws-exports.ts)
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
