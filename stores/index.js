import AccountStore from './accountStore';
import create from 'zustand';

const Dispatcher = require('flux').Dispatcher;
const Emitter = require('events').EventEmitter;

const dispatcher = new Dispatcher();
const emitter = new Emitter();

const accountStore = new AccountStore(dispatcher, emitter);

export default {
  accountStore: accountStore,
  dispatcher: dispatcher,
  emitter: emitter,
};

export const useTestnets = create((set) => ({
  testnets: false,
  toggleTestnets: () => set((state) => ({ testnets: !state.testnets })),
}));

export const useSearch = create((set) => ({
  search: '',
  handleSearch: (text) => set(() => ({ search: text })),
}));

export const useChart = create((set) => ({
  id: null,
  updateChart: (id) => set(() => ({ id })),
}));
