import * as sort from '../constants';
import axios from 'axios';

const actions = {

  onLogin(obj, login, password) {
    if(obj.find(el => el === login && password === 'qwerty') ? true : false) {
      return {
        type: sort.USER_LOGGED_IN,
        onLogged: true,
        corrName: true,
        corrPassword: true,
        userLog: login,
        userPass: password
      }
    }
    return {
      type: sort.USER_LOGGED_IN,
      onLogged: false,
      corrName: false,
      corrPassword: false,
      userLog: login,
      userPass: password
    }
  },

  outLogin(login, password) {
    return {
      type: sort.USER_LOGGED_OUT,
      userLog: login,
      userPass: password
    }
  },

  regIn(obj, login, password, mail) {
    const patternName = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
    const patternPassword = /^[a-zA-Z0-9]+$/;
    const patternEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if(login.length === 0 || password.length === 0 || mail.length === 0) {
      return {
        type: sort.USER_REG_IN,
        isReg: false,
        corrName: false,
        corrPassword: false,
        corrMail: false,
        userLog: login,
        userPass: password,
        userMail: mail,
        exist: false
      }
    }
    if(patternName.test(login) && patternPassword.test(password) && patternEmail.test(mail) && obj.find(el => el == login) ? true : false) {
      return {
        type: sort.USER_REG_IN,
        corrName: false,
        corrPassword: false,
        corrMail: false,
        isReg: false,
        userLog: login,
        userPass: password,
        userMail: mail,
        exist: true
      }
    }

    else if(patternName.test(login) && patternPassword.test(password) && patternEmail.test(mail)) {
      return {
        type: sort.USER_REG_IN,
        addUserReg: obj.push(login),
        corrName: true,
        corrPassword: true,
        corrMail: true,
        isReg: true,
        userLog: '',
        userPass: '',
        userMail: '',
        exist: false
      }
    }else
    return {
      type: sort.USER_REG_IN,
      corrName: false,
      corrPassword: false,
      corrMail: false,
      isReg: false,
      userLog: login,
      userPass: password,
      userMail: mail,
      exist: false
    }
  },

  regOut() {
    return {
      type: sort.USER_REG_OUT,
      isRegOut: false
    }
  },

  inputLoginChange(loginValue) {
    const patternName = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
    if(loginValue.length === 0) {
      return {
        type: sort.INPUT_LOGIN_CHANGE,
        corrName: true
      }
    }
    else if(patternName.test(`${loginValue}`)) {
      return {
        type: sort.INPUT_LOGIN_CHANGE,
        loginValue,
        corrName: true
      }
    }
    return {
        type: sort.INPUT_LOGIN_CHANGE,
        loginValue,
        corrName: false
    }
  },

  inputPasswordChange(passwordValue) {
    const patternPassword = /^[a-zA-Z0-9]+$/;
    if(passwordValue.length === 0) {
      return {
        type: sort.INPUT_PASSWORD_CHANGE,
        corrPassword: true
      }
    }
    else if(patternPassword.test(`${passwordValue}`)) {
      return {
        type: sort.INPUT_PASSWORD_CHANGE,
        passwordValue,
        corrPassword: true
      }
    }
    return {
      type: sort.INPUT_PASSWORD_CHANGE,
      passwordValue,
      corrPassword: false
    }
  },

  inputLoginReg(loginValue) {
    const patternName = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
    if(loginValue.length === 0) {
      return {
        type: sort.INPUT_LOGIN_REG,
        corrName: true
      }
    }
    else if(patternName.test(`${loginValue}`)) {
      return {
        type: sort.INPUT_LOGIN_REG,
        loginValue,
        corrName: true
      }
    }
    return {
        type: sort.INPUT_LOGIN_REG,
        loginValue,
        corrName: false
    }
  },

  inputPasswordReg(passwordValue) {
    const patternPassword = /^[a-zA-Z0-9]+$/;
    if(passwordValue.length === 0) {
      return {
        type: sort.INPUT_PASSWORD_REG,
        corrPassword: true
      }
    }
    else if(patternPassword.test(`${passwordValue}`)) {
      return {
        type: sort.INPUT_PASSWORD_REG,
        passwordValue,
        corrPassword: true
      }
    }
    return {
      type: sort.INPUT_PASSWORD_REG,
      passwordValue,
      corrPassword: false
    }
  },

  inputEmailReg(emailValue) {
    const patternEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
     if(emailValue.length === 0) {
      return {
        type: sort.INPUT_EMAIL_REG,
        corrMail: true
      }
    }
    else if(patternEmail.test(`${emailValue}`)) {
      return {
        type: sort.INPUT_EMAIL_REG,
        emailValue,
        corrMail: true
      }
    }
    return {
      type: sort.INPUT_EMAIL_REG,
      emailValue,
      corrMail: false
    }
  },

  inputComment(commentValue) {
    return {
        type: sort.INPUT_COMMENT,
        comment: commentValue
    }
  },

  sendComment(commentValue, arr,  idValue, loggedIn) {
    if (!commentValue.length) {
      return {
        type: sort.SEND_COMMENT,
        newComment: arr,
        inputStory: ''
      }
    }
    const newItem = {
      itemText: commentValue,
      itemId: idValue
    };
    if(loggedIn) {
      return {
        type: sort.SEND_COMMENT,
        newComment: arr.concat(newItem),
        inputStory: commentValue
    }
    }
    return {
      type: sort.SEND_COMMENT,
      newComment: arr,
      inputStory: commentValue
    }
  },

  getPlaceholderList() {
    return (dispatch, getStore) => {
      dispatch({
        type: sort.GET_PLACEHOLDER_LOADING
      });

      const store = getStore();
      console.log('store', store);

      (async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await Promise.all([
          axios.get('https://jsonplaceholder.typicode.com/posts/'),
          axios.get('https://jsonplaceholder.typicode.com/photos/'),
          axios.get('https://jsonplaceholder.typicode.com/users/')
        ])
          .then(axios.spread((posts, images, users) => {
            const getPost = posts.data.slice(0, 5);
            const getImage = images.data.slice(0, 5);
            const getUsers = users.data.slice(0, 5);
            const getUsersReg = users.data.slice(0, 5).map(el => el.username);
            dispatch({
              type: sort.GET_PLACEHOLDER_SUCCESS,
              dataPost: getPost,
              dataImage: getImage,
              dataUsers: getUsers,
              usersReg: getUsersReg
            });
          }))
          .catch(error => {
            dispatch({
              type: sort.GET_PLACEHOLDER_FAILED,
              errMsg: error.message,
            });
          });
      })();
    };
  },

  likeChange(i, loggedIn, isLike, isCount) {
    if(loggedIn) {
      const newStatus = isLike;
      newStatus[i].name = !isLike[i].name;
      const newCount = isCount;
      newCount[i].value = isLike[i].name ? ++newCount[i].value : --newCount[i].value;
      return {
        type: sort.LIKES_CHANGE,
        like: newStatus,
        count: newCount
      }
    }
    return {
      type: sort.LIKES_CHANGE,
      like: isLike,
      count: isCount
    }
  },

  clearForm() {
    return {
      type: sort.CLEAR_FORM,
    }
  }

};

export default actions;