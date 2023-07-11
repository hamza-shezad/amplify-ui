import {
  Flex,
  Message,
  MessageTitle,
  MessageContent,
} from '@aws-amplify/ui-react';

export const Filled = () => {
  return (
    <Flex direction="column" padding="medium">
      <Message variation="filled">
        <MessageContent>
          <MessageTitle>Title for a message</MessageTitle>
          This is a filled default message.
        </MessageContent>
      </Message>
      <Message colorTheme="info" variation="filled">
        <MessageContent>
          <MessageTitle>Title for a message</MessageTitle>
          This is a filled info message.
        </MessageContent>
      </Message>
      <Message colorTheme="success" variation="filled">
        <MessageContent>
          <MessageTitle>Title for a message</MessageTitle>
          This is a filled success message.
        </MessageContent>
      </Message>
      <Message colorTheme="error" variation="filled">
        <MessageContent>
          <MessageTitle>Title for a message</MessageTitle>
          This is a filled error message.
        </MessageContent>
      </Message>
      <Message colorTheme="warning" variation="filled">
        <MessageContent>
          <MessageTitle>Title for a message</MessageTitle>
          This is a filled warning message.
        </MessageContent>
      </Message>
    </Flex>
  );
};
