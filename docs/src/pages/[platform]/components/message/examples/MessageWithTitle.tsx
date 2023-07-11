import {
  View,
  Flex,
  Message,
  MessageTitle,
  MessageContent,
  MessageIcon,
  Text,
} from '@aws-amplify/ui-react';

export const MessageWithTitle = () => {
  return (
    <View padding="medium" backgroundColor="neutral.10">
      <Flex direction="column" maxWidth="420px">
        <Message>This is a message with no color theme.</Message>
        <Message colorTheme="info">
          <MessageIcon />
          <MessageContent>
            <MessageTitle>An info title</MessageTitle>
            This is a message with the info color theme.
          </MessageContent>
        </Message>
        <Message colorTheme="success">
          <MessageIcon />
          <MessageContent>
            <MessageTitle>A success title.</MessageTitle>
            This is a plain success message.
          </MessageContent>
        </Message>
        <Message colorTheme="error">
          <MessageIcon />
          <MessageContent>
            <MessageTitle>An error title.</MessageTitle>
            This is a plain error message.
          </MessageContent>
        </Message>
        <Message colorTheme="warning">
          <MessageIcon />
          <MessageContent>
            <MessageTitle>A warning title</MessageTitle>
            This is a plain warning message.
          </MessageContent>
        </Message>
      </Flex>
    </View>
  );
};
