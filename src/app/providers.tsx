'use client';
import { ProgressProvider } from '@bprogress/next/app';

const Providers = ({ children }: { children: React.ReactNode }) => {
    const primaryColor = '#60e1cb';
  return (
    <ProgressProvider
      height="4px"
      color={primaryColor}
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default Providers;