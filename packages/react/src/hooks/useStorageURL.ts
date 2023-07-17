import * as React from 'react';

import { isFunction } from '@aws-amplify/ui';
import { useHasValueUpdated } from '@aws-amplify/ui-react-core';
import { S3ProviderGetConfig, Storage } from '@aws-amplify/storage';

interface UseStorageURLErrorConfig {
  fallbackURL?: string;
  onStorageGetError?: (error: Error) => void;
}

/**
 * Computes a public URL for an Amplify Storage file
 * @internal
 */
export const useStorageURL = (
  key: string,
  options?: S3ProviderGetConfig,
  errorConfig?: UseStorageURLErrorConfig
): string | undefined => {
  const [url, setURL] = React.useState<string>();
  const hasKeyUpdated = useHasValueUpdated(key);

  React.useEffect(() => {
    if (!hasKeyUpdated) {
      return;
    }

    const promise = Storage.get(key, options)
      .then((url) => setURL(url))
      .catch((error: Error) => {
        const { fallbackURL, onStorageGetError } = errorConfig ?? {};
        if (isFunction(onStorageGetError)) {
          onStorageGetError(error);
        }
        if (fallbackURL) {
          setURL(fallbackURL);
        }
      });

    // Cancel current promise on unmount
    return () => Storage.cancel(promise);
  }, [key, options, errorConfig, hasKeyUpdated]);

  return url;
};
