/**
 * @file theme_context.ts
 * @author Krisna Pranav
 * @version 1.0
 * @date 2025-05-12
 *
 * @copyright Copyright (c) 2025 Krisna Pranav
 *
 */

import * as React from 'react';
import { defaultTheme } from '../style';
import { ThemeType } from './type';

export interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}