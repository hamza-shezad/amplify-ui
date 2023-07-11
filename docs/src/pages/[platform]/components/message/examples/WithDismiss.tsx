import {
  View,
  Flex,
  Message,
  MessageTitle,
  MessageContent,
  MessageDismiss,
  MessageIcon,
  Text,
} from '@aws-amplify/ui-react';

export const WithDismiss = () => {
  return (
    <View padding="medium" backgroundColor="neutral.10">
      <Flex direction="column" maxWidth="520px">
        <Message>
          This is a message with no color theme.
          <MessageDismiss />
        </Message>
        <Message colorTheme="info">
          <MessageIcon />
          <MessageContent>
            <MessageTitle>An info title</MessageTitle>
            This is a message with the info color theme.
          </MessageContent>
          <MessageDismiss onDismiss={() => alert('test')} />
        </Message>
        <Message colorTheme="success">
          <MessageIcon />
          This is a plain success message.
          <MessageDismiss />
        </Message>
        <Message colorTheme="error">
          <MessageIcon />
          This is a plain error message.
          <MessageDismiss />
        </Message>
        <Message colorTheme="warning">
          <MessageIcon />
          This is a plain warning message.
          <MessageDismiss />
        </Message>
      </Flex>
    </View>
  );
};
