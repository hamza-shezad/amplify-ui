import * as React from 'react';
import classNames from 'classnames';
import {
  View,
  Flex,
  Button,
  Text,
  ScrollView,
  CheckboxField,
} from '@aws-amplify/ui-react';
import { defaultTheme } from '@aws-amplify/ui-react';

const ThemeViewerContext = React.createContext({
  showHover: false,
  showFocus: false,
  showActive: false,
});

export function ThemeViewer({ variation }) {
  const component = defaultTheme.tokens.components.button;
  const [showHover, toggleHover] = React.useState(false);
  const [showFocus, toggleFocus] = React.useState(false);
  const [showActive, toggleActive] = React.useState(false);
  return (
    <ThemeViewerContext.Provider value={{ showHover, showFocus, showActive }}>
      <View>
        <Flex
          display="inline-flex"
          padding="small xl"
          marginBottom="small"
          borderStyle="solid"
          borderWidth="small"
          borderRadius="medium"
          borderColor="neutral.20"
        >
          <Text as="span" fontWeight="bold">
            {variation}
          </Text>
          <CheckboxField
            label=":hover"
            size="small"
            name="hover"
            value="on"
            onChange={(e) => toggleHover(e.target.checked)}
          />
          <CheckboxField
            label=":focus"
            name="focus"
            size="small"
            value="on"
            onChange={(e) => toggleFocus(e.target.checked)}
          />
          <CheckboxField
            label=":active"
            name="active"
            size="small"
            value="on"
            onChange={(e) => toggleActive(e.target.checked)}
          />
        </Flex>
        <ScrollView paddingBottom="small">
          <VariationGroup component={component} variation={variation} />
        </ScrollView>
      </View>
    </ThemeViewerContext.Provider>
  );
}

export function VariationGroup({ component, variation }) {
  return (
    <Flex gap="large">
      <ThemeItem item={component} variation={variation}></ThemeItem>
      <ThemeItem
        item={component}
        variation={variation}
        colorTheme="warning"
      ></ThemeItem>
      <ThemeItem
        item={component}
        variation={variation}
        colorTheme="info"
      ></ThemeItem>
      <ThemeItem
        item={component}
        variation={variation}
        colorTheme="error"
      ></ThemeItem>
      <ThemeItem
        item={component}
        variation={variation}
        colorTheme="success"
      ></ThemeItem>
      <ThemeItem
        item={component}
        variation={variation}
        colorTheme="overlay"
      ></ThemeItem>
    </Flex>
  );
}

export function Color({ color }) {
  return (
    <View
      width="16px"
      height="16px"
      borderRadius="100%"
      backgroundColor={color}
      borderWidth="small"
      borderStyle="solid"
      borderColor="overlay.10"
    ></View>
  );
}

export function Property({ item, property }) {
  console.log('item[property]: ', item[property]);
  let color = item[property] ? item[property].value : item[property];
  if (color) {
    color = color
      .replace('{', '')
      .replace('}', '')
      .replace('.value', '')
      .replace('colors.', '');
  }

  return (
    <View fontSize="small" fontFamily="monospace">
      <Flex alignItems="center">
        <View>{property}:</View>
        <Flex alignItems="center" gap="xs" marginLeft="auto">
          <Text as="span" fontWeight="bold">
            {color}
          </Text>
          {color ? <Color color={color}></Color> : null}
        </Flex>
      </Flex>
    </View>
  );
}

export function ThemeItem({
  item,
  variation,
  colorTheme,
}: {
  item: any;
  variation?: any;
  colorTheme?: any;
}) {
  let themeItem = item;
  if (variation) {
    themeItem = item[variation];
  }
  if (colorTheme) {
    themeItem = item[variation][colorTheme];
  }
  if (variation === 'outlined' && !colorTheme) {
    themeItem = item;
  }
  console.log('item: ', item);
  const { showHover, showFocus, showActive } =
    React.useContext(ThemeViewerContext);
  return (
    <Flex direction="column" gap="1px" backgroundColor="neutral.20">
      <Flex direction="column" padding="medium" backgroundColor="neutral.10">
        <Button
          size="small"
          paddingInline="xs"
          paddingBlock="xxxs"
          alignSelf="flex-start"
          variation={
            variation === 'primary' || variation === 'link'
              ? variation
              : undefined
          }
          colorTheme={colorTheme}
        >
          button
        </Button>
        <Flex direction="column" gap="xxxs">
          <Property item={themeItem} property="backgroundColor" />
          <Property item={themeItem} property="borderColor" />
          <Property item={themeItem} property="color" />
        </Flex>
      </Flex>
      {showHover ? (
        <Flex
          direction="column"
          gap="xxxs"
          padding="medium"
          backgroundColor="neutral.10"
        >
          <Text fontFamily="monospace" fontWeight="bold">
            :hover {}
          </Text>

          <Property item={themeItem._hover} property="backgroundColor" />
          <Property item={themeItem._hover} property="borderColor" />
          <Property item={themeItem._hover} property="color" />
        </Flex>
      ) : null}
      {showFocus ? (
        <Flex
          direction="column"
          gap="xxxs"
          padding="medium"
          backgroundColor="neutral.10"
        >
          <Text fontFamily="monospace" fontWeight="bold">
            :focus {}
          </Text>

          <Property item={themeItem._focus} property="backgroundColor" />
          <Property item={themeItem._focus} property="borderColor" />
          <Property item={themeItem._focus} property="color" />
        </Flex>
      ) : null}
      {showActive ? (
        <Flex
          direction="column"
          gap="xxxs"
          padding="medium"
          backgroundColor="neutral.10"
        >
          <Text fontFamily="monospace" fontWeight="bold">
            :active {}
          </Text>

          <Property item={themeItem._active} property="backgroundColor" />
          <Property item={themeItem._active} property="borderColor" />
          <Property item={themeItem._active} property="color" />
        </Flex>
      ) : null}
    </Flex>
  );
}
