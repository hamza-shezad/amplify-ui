import {
  View,
  Flex,
  Message,
  MessageTitle,
  MessageContent,
  MessageIcon,
  Text,
} from '@aws-amplify/ui-react';

export const WithIcon = () => {
  return (
    <View padding="medium" backgroundColor="neutral.10">
      <Flex direction="column" maxWidth="420px">
        <Message>This is a message with no color theme.</Message>
        <Message colorTheme="info">
          <MessageIcon />
          This is a message with the info color theme.
        </Message>
        <Message colorTheme="success">
          <MessageIcon />
          This is a plain success message.
        </Message>
        <Message colorTheme="error">
          <MessageIcon />
          This is a plain error message.
        </Message>
        <Message colorTheme="warning">
          <MessageIcon />
          This is a plain warning message.
        </Message>
      </Flex>
    </View>
  );
};
