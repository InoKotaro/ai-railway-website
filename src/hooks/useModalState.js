import { useMemo, useState } from 'react';

export function useModalState(...initialStates) {
  const states = initialStates.map((initial) => useState(initial));

  const modalSetters = useMemo(
    () => states.map(([, setter]) => setter),

    [],
  );

  const isAnyModalOpen = useMemo(
    () => states.some(([isOpen]) => isOpen),
    [states],
  );

  return { modalSetters, isAnyModalOpen };
}
