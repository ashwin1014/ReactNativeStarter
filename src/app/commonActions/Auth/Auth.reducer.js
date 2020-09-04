/* eslint-disable no-useless-return */
/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const INIT_STATE = {
  isAuthenticated: false,
  isAdmin: false,
  isSuperAdmin: false,
  logoutLoader: false,
  roles: []
};

const reducer = produce((draft, { type, payload } = {}) => {
  switch (type) {

  }
}, INIT_STATE);

export default reducer;
