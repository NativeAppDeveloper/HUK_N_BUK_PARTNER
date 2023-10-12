const initialData = {
  stackName: 'ONBOARDING',
};

export const ChangeStackReducer = (state = initialData, action) => {
  // console.log(action,'=-=-=-=q-we=qwe');
  switch (action.type) {
    case 'CHANGE_STACK':
      // state. = ;
      return {...state, stackName: action.payload};
    default:
      return state;
  }
};

const modalData = {
  modalStatus: false,
};

export const modalReducer = (state = modalData, action) => {
  switch (action.type) {
    case 'LOADER_STATUS':
      return {...state, modalStatus: action.payload};
    default:
      return state;
  }
};

const initialRoute = {
  screenName: false,
};

export const setIntialScreenAuthReducres = (state = initialRoute, action) => {
  // console.log(action,'=-=-=-=q-we=qwe');
  switch (action.type) {
    case 'AUTH_INITIAL':
      // state. = ;
      return {...state, screenName: action.payload};
    default:
      return state;
  }
};

const user = {
  userData: {},
};

export const userDataReducers = (state = user, action) => {
  switch (action.type) {
    case 'USER_PROFILE':
      return {...state, userData: action.payload};
    default:
      return state;
  }
};
