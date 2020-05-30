import { TParseMessageData } from './types';

const parseMessageData: TParseMessageData = (messageData) => {
  const messageDataJson = JSON.parse(messageData.data);

  return messageDataJson;
};

export default parseMessageData;
