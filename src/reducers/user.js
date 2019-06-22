import * as sort from '../constants';

const initialState = {
  getPost: [],
  getImage: [],
  getUsers: [],

  pages: [
      { name: 'Главная', path: '/' },
      { name: 'Статьи', path: '/articles' },
      { name: 'Пользователи', path: '/users' },
      { name: 'Новости', path: '/news' },
      { name: 'Обо мне', path: '/about' }
      ],

  likeStatus: [{name: false}, {name: false}, {name: false}, {name: false}, {name: false}, {name: false}],
  countStatus: [{value: 4 }, {value: 4 }, {value: 4 }, {value: 4 } ,{value: 4 } ,{value: 4 }],

  userLogin: '',
  userPassword: '',
  userEmail: '',

  userInputComment: '',
  userSendComment: [
    {itemId: 0, itemText: ''}
  ],

  isLoggedIn: false,
  isRegIn: false,
  getUsersReg: [],
  existUser: false,

  correctName: true,
  correctPassword: true,
  correctMail: true

};

export default function (state = initialState, action) {
  switch (action.type) {
    case sort.USER_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.onLogged,
        isRegIn: false,
        correctName: action.corrName,
        userLogin: action.userLog,
        userPassword: action.userPass,
      };

    case sort.USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        userLogin: action.userLog,
        userPassword: action.userPass,
        correctName: true,
        correctPassword: true,
        correctMail: true,
      };

    case sort.USER_REG_IN:
    return {
      ...state,
      isRegIn: action.isReg,
      correctName: action.corrName,
      correctPassword: action.corrPassword,
      correctMail: action.corrMail,
      userLogin: action.userLog,
      userPassword: action.userPass,
      userEmail: action.userMail,
      existUser: action.exist
    };

    case sort.USER_REG_OUT:
    return {
      ...state,
      isRegIn: action.isRegOut,
      userLogin: '',
      userPassword: '',
      userEmail: '',
      correctName: true,
      correctPassword: true,
      correctMail: true,
    };

    case sort.INPUT_LOGIN_CHANGE:
      return {
        ...state,
        userLogin: action.loginValue,
        correctName: action.corrName
      };

    case sort.INPUT_PASSWORD_CHANGE:
      return {
        ...state,
        userPassword: action.passwordValue,
        correctPassword: action.corrPassword
    };

    case sort.INPUT_LOGIN_REG:
      return {
        ...state,
        correctName: action.corrName,
        userLogin: action.loginValue
      };

    case sort.INPUT_PASSWORD_REG:
    return {
      ...state,
      correctPassword: action.corrPassword,
      userPassword: action.passwordValue
    };

    case sort.INPUT_EMAIL_REG:
    return {
      ...state,
      correctMail: action.corrMail,
      userEmail: action.emailValue
    };

    case sort.INPUT_COMMENT:
    return {
      ...state,
      userInputComment: action.comment
    };

    case sort.SEND_COMMENT:
    return {
      ...state,
      userSendComment: action.newComment,
      userInputComment: '',
    };

    case sort.GET_PLACEHOLDER_LOADING: {
      return {
        ...state,
        isUsersLoading: true
      };
    }

    case sort.GET_PLACEHOLDER_SUCCESS: {
      return {
        ...state,
        isUsersLoading: false,
        getPost: action.dataPost,
        getImage: action.dataImage,
        getUsers: action.dataUsers,
        getUsersReg: action.usersReg
      };
    }

    case sort.GET_PLACEHOLDER_FAILED: {
      return {
        ...state,
        isUsersLoading: false,
        errMsg: action.errMsg
      };
    }

    case sort.LIKES_CHANGE: {
      return {
        ...state,
        likeStatus: action.like,
        countStatus: action.count
      };
    }

    case sort.CLEAR_FORM: {
      return {
        ...state,
        correctName: true,
        correctPassword: true,
        correctMail: true
      };
    }

    default:
      return state;
  }
}
