#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkTsTemplateStack } from '../lib/cdk-ts-template-stack';

const app = new cdk.App();
new CdkTsTemplateStack(app, 'CdkTsTemplateStack');
