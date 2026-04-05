// hooks.ts

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./Store.reduxToolkit";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: any = useSelector;
