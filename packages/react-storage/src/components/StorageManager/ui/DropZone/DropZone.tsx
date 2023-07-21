import React from 'react';
import classNames from 'classnames';

import {
  View,
  ComponentClassNames,
  Text,
  useIcons,
} from '@aws-amplify/ui-react';
import { classNameModifier } from '@aws-amplify/ui';
import { IconUpload } from '@aws-amplify/ui-react/internal';
import { DropZoneProps } from './types';

export function DropZone({
  children,
  displayText,
  inDropZone,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDragStart,
  onDrop,
  testId,
}: DropZoneProps): JSX.Element {
  const { dropFilesText } = displayText;
  const icons = useIcons();

  return (
    <View
      className={classNames(
        inDropZone &&
          classNameModifier(
            ComponentClassNames.StorageManagerDropZone,
            'active'
          ),
        ComponentClassNames.StorageManagerDropZone
      )}
      data-testid={testId}
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <span
        aria-hidden
        className={ComponentClassNames.StorageManagerDropZoneIcon}
      >
        {icons?.storageManager?.upload ?? <IconUpload />}
      </span>

      <Text className={ComponentClassNames.StorageManagerDropZoneText}>
        {dropFilesText}
      </Text>
      {children}
    </View>
  );
}
