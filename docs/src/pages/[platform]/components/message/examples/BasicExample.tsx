import {
  View,
  Flex,
  Message,
  MessageTitle,
  MessageContent,
  MessageDismiss,
  Text,
} from '@aws-amplify/ui-react';

export const BasicExample = () => {
  return (
    <View padding="medium" backgroundColor="neutral.10">
      <Flex direction="column" maxWidth="420px">
        <Message>This is a message with no color theme.</Message>
        <Message colorTheme="info">
          This is a message with the info color theme.
        </Message>
        <Message colorTheme="success">This is a plain success message.</Message>
        <Message colorTheme="error">This is a plain error message.</Message>
        <Message colorTheme="warning">This is a plain warning message.</Message>
      </Flex>
    </View>
  );
};
