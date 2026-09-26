"use client";

import Alert, { type AlertData } from "./alert";

interface AlertContainerProps {
  alerts: AlertData[];
  onClose: (id: string) => void;
}

export default function AlertContainer({
  alerts,
  onClose,
}: AlertContainerProps) {
  return (
    <div className="pointer-events-none fixed top-5 right-5 z-[9999] flex w-auto flex-col gap-3">
      {alerts.map((alert) => (
        <Alert key={alert.id} alert={alert} onClose={onClose} />
      ))}
    </div>
  );
}
