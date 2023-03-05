import { render, RenderOptions, cleanup } from '@testing-library/react';
import { ReactElement } from 'react';
import userEvent from '@testing-library/user-event';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

export function customRender(component: ReactElement, options?: RenderOptions) {
  const user = userEvent.setup();
  return {
    ...render(component, { ...options }),
    user,
  };
}

export { vi, describe, it, expect } from 'vitest';
export * from '@testing-library/react';
