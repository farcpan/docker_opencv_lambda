import { App } from 'aws-cdk-lib';
import { ContextParameters } from '../utils/context';
import { LambdaStack } from '../lib/lambda-stack';

const app = new App();
const context = new ContextParameters(app);

const lambdaStackId = context.getResourceId('lambda-stack');
new LambdaStack(app, lambdaStackId, {
	context: context,
});
