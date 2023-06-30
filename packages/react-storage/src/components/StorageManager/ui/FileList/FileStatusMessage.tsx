import React from 'react';
import classNames from 'classnames';

import {
  Text,
  ComponentClassNames,
  useTheme,
  Icon,
} from '@aws-amplify/ui-react';
import { classNameModifier } from '@aws-amplify/ui';
import { FileStatus } from '../../types';
import { FileStatusMessageProps } from './types';

export const FileStatusMessage = ({
  errorMessage,
  getPausedText,
  getUploadingText,
  percentage,
  status,
  uploadSuccessfulText,
}: FileStatusMessageProps): JSX.Element | null => {
  const { icons } = useTheme();
  switch (status) {
    case FileStatus.UPLOADING: {
      return (
        <Text className={ComponentClassNames.StorageManagerFileStatus}>
          {getUploadingText(percentage)}
        </Text>
      );
    }
    case FileStatus.PAUSED:
      return (
        <Text className={ComponentClassNames.StorageManagerFileStatus}>
          {getPausedText(percentage)}
        </Text>
      );
    case FileStatus.UPLOADED:
      return (
        <Text
          className={classNames(
            ComponentClassNames.StorageManagerFileStatus,
            classNameModifier(
              ComponentClassNames.StorageManagerFileStatus,
              'success'
            )
          )}
        >
          <Icon {...icons.storageManager.success} fontSize="xl" />{' '}
          {uploadSuccessfulText}
        </Text>
      );
    case FileStatus.ERROR:
      return (
        <Text
          className={classNames(
            ComponentClassNames.StorageManagerFileStatus,
            classNameModifier(
              ComponentClassNames.StorageManagerFileStatus,
              'error'
            )
          )}
        >
          <Icon {...icons.storageManager.error} fontSize="xl" /> {errorMessage}
        </Text>
      );
    default:
      return null;
  }
};
