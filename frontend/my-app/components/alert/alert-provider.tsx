"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import AlertContainer from "./AlertContainer";
import type { AlertData, AlertType } from "./alert";

interface ShowAlertOptions {
  title?: string;
  duration?: number;
}

interface AlertContextValue {
  showAlert: (
    type: AlertType,
    message: string,
    options?: ShowAlertOptions,
  ) => void;

  success: (message: string, options?: ShowAlertOptions) => void;

  error: (message: string, options?: ShowAlertOptions) => void;

  warning: (message: string, options?: ShowAlertOptions) => void;

  info: (message: string, options?: ShowAlertOptions) => void;

  closeAlert: (id: string) => void;

  clearAlerts: () => void;
}

const AlertContext = createContext<AlertContextValue | null>(null);

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<AlertData[]>([]);

  const closeAlert = useCallback((id: string) => {
    setAlerts((previous) => previous.filter((alert) => alert.id !== id));
  }, []);

  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);

  const showAlert = useCallback(
    (type: AlertType, message: string, options?: ShowAlertOptions) => {
      const id = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

      const newAlert: AlertData = {
        id,
        type,
        message,
        title: options?.title,
        duration: options?.duration ?? 4000,
      };

      setAlerts((previous) => [...previous, newAlert]);
    },
    [],
  );

  const success = useCallback(
    (message: string, options?: ShowAlertOptions) => {
      showAlert("success", message, options);
    },
    [showAlert],
  );

  const error = useCallback(
    (message: string, options?: ShowAlertOptions) => {
      showAlert("error", message, options);
    },
    [showAlert],
  );

  const warning = useCallback(
    (message: string, options?: ShowAlertOptions) => {
      showAlert("warning", message, options);
    },
    [showAlert],
  );

  const info = useCallback(
    (message: string, options?: ShowAlertOptions) => {
      showAlert("info", message, options);
    },
    [showAlert],
  );

  const value = useMemo(
    () => ({
      showAlert,
      success,
      error,
      warning,
      info,
      closeAlert,
      clearAlerts,
    }),
    [showAlert, success, error, warning, info, closeAlert, clearAlerts],
  );

  return (
    <AlertContext.Provider value={value}>
      {children}

      <AlertContainer alerts={alerts} onClose={closeAlert} />
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("useAlert phải được sử dụng bên trong AlertProvider");
  }

  return context;
}
