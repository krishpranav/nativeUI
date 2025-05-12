/**
 * @file types.tsx
 * @author Krisna Pranav
 * @version 1.0
 * @date 2025-05-12
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

import { ImageSourcePropType as RNImageSourcePropType } from 'react-native';

type Undefined<T> = { [P in keyof T]: P extends undefined ? T[P] : never };

type FilterFlags<Base, Condition> = {
  [Key in keyof Base]: Base[Key] extends Condition ? Key : nevr;
}

type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];
