echo "Vocẽ está prestes a iniciar uma sessão de chat com o Amazon Connect. Por favor, aguarde enquanto a conexão é estabelecida."

while true; do
  COUNT=$((COUNT + 1))

  echo "==============================="
  echo "Requisição de número: $COUNT"
  echo "Horário: $(date)"

  awscurl \
    --service connect \
    --region us-west-2 \
    -X PUT \
    -H "Content-Type: application/json" \
    -d '{"ConnectionTypes":["CONNECTION_CREDENTIALS", "WEBSOCKET"],"ContactFlowId":"YOUR_FLOW_ID","DisconnectOnCustomerExit":["AGENT"],"InitialMessage":{"Content":"Ola","ContentType":"text/plain"},"InstanceId":"YOUR_INSTANCE_ID","ParticipantDetails":{"DisplayName":"Davidson"}}' \
    "https://connect.us-west-2.amazonaws.com/contact/chat"

  sleep 5
done

