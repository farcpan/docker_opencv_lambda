import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ContextParameters } from '../utils/context';

interface LambdaStackProps extends StackProps {
	context: ContextParameters;
}

export class LambdaStack extends Stack {
	constructor(scope: Construct, id: string, props: LambdaStackProps) {
		super(scope, id, props);
	}
}
