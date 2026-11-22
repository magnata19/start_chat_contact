export interface StartChatConnectRequest {
  ConnectionTypes: [string];
  ContactFlowId: string;
  DisconnectOnCustomerExit: [string];
  InitialMessage: {
    Content: string;
    ContentType: string;
  };
  InstanceId: string;
  ParticipantDetails: {
    DisplayName: string;
  };
}
