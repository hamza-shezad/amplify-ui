import * as React from 'react';
import classNames from 'classnames';

import { classNameModifier } from '../shared/utils';
import {
  BadgeProps,
  BaseBadgeProps,
  ForwardRefPrimitive,
  Primitive,
} from '../types';
import { ComponentClassNames } from '../shared/constants';
import { View } from '../View';

const BreadcrumbsPrimitive: Primitive<BadgeProps, 'span'> = (
  { className, children, variation, size, ...rest },
  ref
) => {
  const componentClasses = classNames(
    ComponentClassNames.Badge,
    className,
    classNameModifier(ComponentClassNames.Badge, variation),
    classNameModifier(ComponentClassNames.Badge, size)
  );

  return (
    <View
      as="span"
      className={componentClasses}
      data-variation={variation}
      data-size={size}
      ref={ref}
      {...rest}
    >
      {children}
    </View>
  );
};

/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/breadcrumbs)
 */
export const Breadcrumbs: ForwardRefPrimitive<BaseBadgeProps, 'nav'> =
  React.forwardRef(BreadcrumbsPrimitive);

Breadcrumbs.displayName = 'Breadcrumbs';
