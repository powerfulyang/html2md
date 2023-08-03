import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createRoot } from 'react-dom/client';
import browser from 'webextension-polyfill';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      keepPreviousData: false,
      cacheTime: 0,
    },
  },
});

browser.tabs.query({ active: true, currentWindow: true }).then(() => {
  const root = document.getElementById('root');
  if (root) {
    createRoot(root).render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <div
            style={{
              padding: 10,
            }}
          >
            Shortcut：`Command + Option` or `Ctrl + Alt`
          </div>
        </QueryClientProvider>
      </React.StrictMode>,
    );
  }
});
