import {
  ConnectClient,
  StartChatContactCommand,
} from '@aws-sdk/client-connect';
import { StartChatConnectRequest } from './models/startChatConnectRequest';

const client = new ConnectClient({
  region: 'us-west-2',
});

const startChatConnectAPI = async (
  contactFlowId: string,
  instanceId: string,
  initialMessage: string,
) => {
  try {
    const chatRequest: StartChatConnectRequest = {
      ConnectionTypes: ['CONNECTION_CREDENTIALS'],
      ContactFlowId: contactFlowId,
      DisconnectOnCustomerExit: ['AGENT'],
      InitialMessage: {
        Content: initialMessage,
        ContentType: 'text/plain',
      },
      InstanceId: instanceId,
      ParticipantDetails: {
        DisplayName: 'Davidson Pacifico',
      },
    };

    const command = new StartChatContactCommand(
      chatRequest as StartChatConnectRequest as any,
    );
    return await client.send(command);
  } catch (error) {
    console.error('Error starting chat contact:', error);
    throw error;
  }
};

let count = 0;
setInterval(async () => {
  count++;

  console.log(`Iniciando requisição: ${count}`);

  try {
    await startChatConnectAPI(
      'YOUR_CONTACT_FLOW_ID',
      'YOUR_INSTANCE_ID',
      'Ola, essa é minha mensagem.',
    );
  } catch (error) {
    console.error(error);
  }
}, 5000);
