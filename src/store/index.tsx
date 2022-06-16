import React, { createContext, useReducer } from 'react';
import { INote } from '../models';

interface GlobalState {
  notes: INote[];
}

export enum GloabalActionsKind {
  ADD_NOTE = 'ADD_NOTE',
  UPDATE_NOTE = 'UPDATE_NOTE',
  DELETE_NOTE = 'DELETE_NOTE',
}

interface GlobalAction {
  type: GloabalActionsKind;
  payload: INote | string;
}

const initState = () => {
  const ls = window.localStorage.getItem('notes');
  const state: GlobalState = {
    notes: [],
  };

  if (ls) return JSON.parse(ls);
  return state;
};

const initialState: GlobalState = initState();

function globalReducer(state: GlobalState, action: GlobalAction): GlobalState {
  const { type, payload } = action;

  switch (type) {
    case GloabalActionsKind.ADD_NOTE:
      window.localStorage.setItem(
        'notes',
        JSON.stringify({ notes: [...state.notes, payload as INote] })
      );
      return {
        notes: [...state.notes, payload as INote],
      };

    case GloabalActionsKind.UPDATE_NOTE:
      window.localStorage.setItem(
        'notes',
        JSON.stringify({
          notes: state.notes.map((el) =>
            el.id === (payload as INote).id ? (payload as INote) : el
          ),
        })
      );
      return {
        notes: state.notes.map((el) => (el.id === (payload as INote).id ? (payload as INote) : el)),
      };

    case GloabalActionsKind.DELETE_NOTE:
      window.localStorage.setItem(
        'notes',
        JSON.stringify({ notes: state.notes.filter((el) => el.id !== (payload as INote).id) })
      );

      return {
        notes: state.notes.filter((el) => el.id !== (payload as INote).id),
      };

    default: {
      return state;
    }
  }
}

export const GlobalContext = createContext<
  [state: GlobalState, dispatch: React.Dispatch<GlobalAction>]
>([initialState, () => null]);

type ContextProps = {
  children: React.ReactNode;
};

export function GlobalContextProvider({ children }: ContextProps) {
  const state = useReducer(globalReducer, initialState);
  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
}
